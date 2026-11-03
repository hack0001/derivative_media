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

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "The form data could not be read." }, { status: 400 }); }

  if (typeof body.company_site === "string" && body.company_site.trim()) return NextResponse.json({ ok: true }); // honeypot

  const name = String(body.name ?? "").trim().slice(0, 200);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const type = String(body.type ?? "").trim().slice(0, 100);
  const message = String(body.message ?? "").trim().slice(0, 5000);
  const lang = body.lang === "cy" ? "Welsh" : "English";

  if (!name || !message) return NextResponse.json({ error: "Please add your name and a few words about the project." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "That email address does not look right." }, { status: 400 });

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log("[contact] SMTP not configured. Enquiry:", { name, email, type, message, lang });
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

  try {
    await transporter.sendMail({
      from: `"Derivative Media website" <${SMTP_FROM || SMTP_USER}>`,
      to: CONTACT_TO || SMTP_FROM || SMTP_USER,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New enquiry: ${type} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nType: ${type}\nPage language: ${lang}\n\n${message}`,
      html: `<p><b>Name:</b> ${esc(name)}<br><b>Email:</b> ${esc(email)}<br><b>Type:</b> ${esc(type)}<br><b>Page language:</b> ${lang}</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    });
  } catch (err) {
    console.error("[contact] SMTP error", (err as Error).message);
    return NextResponse.json({ error: "The message could not be sent just now." }, { status: 502 });
  }
  return NextResponse.json({ ok: true, delivered: true });
}
