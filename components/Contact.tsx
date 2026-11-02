"use client";
import { useState } from "react";
import { site } from "@/lib/content";
import { t, type Lang } from "@/lib/i18n";

type State = { kind: "idle" } | { kind: "sending" } | { kind: "done" } | { kind: "error"; msg: string };

export default function Contact({ lang = "en" }: { lang?: Lang }) {
  const c = t(lang).contact;
  const [state, setState] = useState<State>({ kind: "idle" });
  const [copied, setCopied] = useState(false);

  async function copy() {
    try { await navigator.clipboard.writeText(site.email); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch { /* address is selectable */ }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = { ...Object.fromEntries(new FormData(form)), lang };
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setState({ kind: "done" });
      form.reset();
    } catch (err) {
      setState({ kind: "error", msg: `${(err as Error).message} ${c.orEmail} ${site.email} ${c.instead}` });
    }
  }

  return (
    <section className="block" id="contact">
      <div className="wrap contact">
        <div>
          <p className="eyebrow"><b>03</b>&nbsp; {c.eyebrow}</p>
          <h2>{c.heading}</h2>
          <p className="lead">{c.lead}</p>
          <div className="mail">
            <code>{site.email}</code>
            <button className="btn ghost" type="button" onClick={copy}>{copied ? c.copied : c.copy}</button>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="row2">
            <label htmlFor="f-name">{c.name}<input id="f-name" name="name" required placeholder={c.namePh} autoComplete="name" /></label>
            <label htmlFor="f-email">{c.email}<input id="f-email" name="email" type="email" required placeholder={c.emailPh} autoComplete="email" /></label>
          </div>
          <label htmlFor="f-type">{c.type}
            <select id="f-type" name="type">{c.types.map((x) => <option key={x}>{x}</option>)}</select>
          </label>
          <label htmlFor="f-msg">{c.msg}
            <textarea id="f-msg" name="message" required placeholder={c.msgPh} />
          </label>
          <label className="hp" aria-hidden="true">Company website<input name="company_site" tabIndex={-1} autoComplete="off" /></label>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <button className="btn" type="submit" disabled={state.kind === "sending"}>{state.kind === "sending" ? c.sending : c.send}</button>
            {state.kind === "done" && <p className="note" role="status">{c.done}</p>}
            {state.kind === "error" && <p className="note" role="alert">{state.msg}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
