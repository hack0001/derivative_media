import { NextResponse } from "next/server";

// Sends enquiries by email through Resend (https://resend.com).
// Set these in Vercel → Project → Settings → Environment Variables:
//   RESEND_API_KEY   your Resend API key
//   CONTACT_TO       where enquiries go, e.g. you@derivativemedia.co.uk
//   CONTACT_FROM     a sender on a domain verified in Resend, e.g. "Website <web@derivativemedia.co.uk>"
// Without RESEND_API_KEY the enquiry is only written to the server log.

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "The form data could not be read." }, { status: 400 }); }

  if (typeof body.company_site === "string" && body.company_site.trim()) return NextResponse.json({ ok: true }); // honeypot

  const name = String(body.name ?? "").trim().slice(0, 200);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const type = String(body.type ?? "").trim().slice(0, 100);
  const message = String(body.message ?? "").trim().slice(0, 5000);

  if (!name || !message) return NextResponse.json({ error: "Please add your name and a few words about the project." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "That email address does not look right." }, { status: 400 });

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.log("[contact] RESEND_API_KEY not set. Enquiry:", { name, email, type, message });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Derivative Media <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO ?? "hello@derivativemedia.co.uk"],
      reply_to: email,
      subject: `New enquiry: ${type} from ${name}`,
      html: `<p><b>Name:</b> ${esc(name)}<br><b>Email:</b> ${esc(email)}<br><b>Type:</b> ${esc(type)}</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return NextResponse.json({ error: "The message could not be sent just now." }, { status: 502 });
  }
  return NextResponse.json({ ok: true, delivered: true });
}
