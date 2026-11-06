import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Sends enquiries by email through your own mailbox (SMTP). No third-party email service.
// Set these in Vercel → Project → Settings → Environment Variables:
//   SMTP_HOST    your email provider's SMTP server, e.g. smtp.office365.com
//   SMTP_PORT    587 (STARTTLS) or 465 (SSL)
//   SMTP_USER    the mailbox that sends, e.g. hello@derivativemedia.co.uk
//   SMTP_PASS    that mailbox's password, or an app password if it has two-step sign-in
//   SMTP_FROM    optional: the address enquiries are sent from, if different from SMTP_USER
//                (e.g. an alias like hello@ on an admin@ account; it must be a "Send mail as" address)
//   CONTACT_TO   where enquiries go (defaults to SMTP_FROM, then SMTP_USER)
// Google Workspace: SMTP_HOST=smtp.gmail.com, SMTP_PORT=465, SMTP_PASS = a Google app password.
// Without SMTP settings the enquiry is only written to the server log.

export const runtime = "nodejs";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
// One line of plain text: no line breaks or control characters (they could be used to add email headers).
const line = (v: unknown, max: number) => String(v ?? "").replace(/[\u0000-\u001f\u007f]+/g, " ").trim().slice(0, max);
const EMAIL = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]+$/;

// Spam protection, in layers:
// 1. a hidden "honeypot" field people never fill in;
// 2. a minimum time on the page, since bots submit instantly;
// 3. only accepting posts sent from this site's own pages;
// 4. a per-visitor limit of 5 messages in 10 minutes, so nobody can flood your inbox
//    (or get your Google mailbox rate-limited). The limit is kept in memory, so it is per server
//    instance: good enough to stop a flood, not a hard guarantee.
const WINDOW_MS = 10 * 60 * 1000, MAX_PER_WINDOW = 5, MIN_FILL_MS = 2500;
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (now - v[v.length - 1] > WINDOW_MS) hits.delete(k);
  return recent.length > MAX_PER_WINDOW;
}

// Extra fields the free SEO check form sends, and how they are labelled in the email.
const EXTRA: [string, string][] = [["business", "Business"], ["website", "Website"], ["town", "Town"], ["service", "Main service"]];

export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  let sameSite = false;
  try { sameSite = !!origin && !!host && new URL(origin).host === host; } catch { /* "null" or malformed origin */ }
  if (!sameSite) return NextResponse.json({ error: "Please send the form from the website." }, { status: 403 });
  if (Number(req.headers.get("content-length") || 0) > 20_000) return NextResponse.json({ error: "That message is too long." }, { status: 413 });

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";
  if (limited(ip)) return NextResponse.json({ error: "Too many messages in a short time. Please try again in a few minutes." }, { status: 429 });

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "The form data could not be read." }, { status: 400 }); }

  // Bots: pretend it worked so they don't adapt, but send nothing.
  if (typeof body.company_site === "string" && body.company_site.trim()) return NextResponse.json({ ok: true });
  if (!(Number(body.elapsed) >= MIN_FILL_MS)) return NextResponse.json({ ok: true });

  const name = line(body.name, 200);
  const email = line(body.email, 200);
  const type = line(body.type, 100) || "General enquiry";
  const message = String(body.message ?? "").replace(/\r\n?/g, "\n").trim().slice(0, 5000);
  const lang = body.lang === "cy" ? "Welsh" : "English";
  const extras = EXTRA.map(([k, label]): [string, string] => [label, line(body[k], 300)]).filter(([, v]) => v);

  if (!name || !message) return NextResponse.json({ error: "Please add your name and a few words about the project." }, { status: 400 });
  if (!EMAIL.test(email)) return NextResponse.json({ error: "That email address does not look right." }, { status: 400 });

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log("[contact] SMTP not configured. Enquiry:", { name, email, type, extras, message, lang });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const port = Number(SMTP_PORT || 587);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,          // 465 = SSL; 587 = STARTTLS
    requireTLS: port !== 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS.replace(/\s+/g, "") }, // app passwords are shown with spaces
  });

  const rows: [string, string][] = [["Name", name], ["Email", email], ["Type", type], ...extras, ["Page language", lang]];
  try {
    await transporter.sendMail({
      from: { name: "Derivative Media website", address: SMTP_FROM || SMTP_USER },
      to: CONTACT_TO || SMTP_FROM || SMTP_USER,
      replyTo: { name, address: email },   // structured, so nodemailer encodes it safely
      subject: `New enquiry: ${type} from ${name}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`,
      html: `<p>${rows.map(([k, v]) => `<b>${k}:</b> ${esc(v)}`).join("<br>")}</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    });
  } catch (err) {
    console.error("[contact] SMTP error", (err as Error).message);
    return NextResponse.json({ error: "The message could not be sent just now." }, { status: 502 });
  }
  return NextResponse.json({ ok: true, delivered: true });
}
