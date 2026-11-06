"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";
import { freeCheck } from "@/lib/freeCheck";
import type { Lang } from "@/lib/i18n";

type State = { kind: "idle" } | { kind: "sending" } | { kind: "done" } | { kind: "error"; msg: string };

// The request form on the free SEO check page. Sends through the same /api/contact route as the main form.
export default function FreeCheckForm({ lang = "en" }: { lang?: Lang }) {
  const f = freeCheck[lang].form;
  const [state, setState] = useState<State>({ kind: "idle" });
  const shownAt = useRef(0); // when the form appeared, for the server's "too fast to be a person" check
  useEffect(() => { shownAt.current = Date.now(); }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const data = {
      ...fields,
      type: "Free SEO check",
      message: fields.notes?.trim() || "Free SEO check requested (no extra notes).",
      lang,
      elapsed: Date.now() - shownAt.current,
    };
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setState({ kind: "done" });
      form.reset();
    } catch (err) {
      setState({ kind: "error", msg: `${(err as Error).message} ${f.orEmail} ${site.email} ${f.instead}` });
    }
  }

  return (
    <form onSubmit={onSubmit} id="check" className="check-form">
      <div>
        <h2 className="check-h">{f.heading}</h2>
        <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>{f.intro}</p>
      </div>
      <div className="row2">
        <label htmlFor="c-name">{f.name}<input id="c-name" name="name" required autoComplete="name" /></label>
        <label htmlFor="c-email">{f.email}<input id="c-email" name="email" type="email" required autoComplete="email" /></label>
      </div>
      <label htmlFor="c-business">{f.business}<input id="c-business" name="business" required autoComplete="organization" /></label>
      <label htmlFor="c-website">{f.website}<input id="c-website" name="website" inputMode="url" placeholder={f.websitePh} /></label>
      <div className="row2">
        <label htmlFor="c-town">{f.town}<input id="c-town" name="town" required placeholder={f.townPh} /></label>
        <label htmlFor="c-service">{f.service}<input id="c-service" name="service" required placeholder={f.servicePh} /></label>
      </div>
      <label htmlFor="c-notes">{f.notes}<textarea id="c-notes" name="notes" placeholder={f.notesPh} /></label>
      <label className="hp" aria-hidden="true">Company website<input name="company_site" tabIndex={-1} autoComplete="off" /></label>
      <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <button className="btn" type="submit" disabled={state.kind === "sending"}>{state.kind === "sending" ? f.sending : f.send}</button>
        {state.kind === "done" && <p className="note" role="status">{f.done}</p>}
        {state.kind === "error" && <p className="note" role="alert">{state.msg}</p>}
      </div>
    </form>
  );
}
