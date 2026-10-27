"use client";
import { useState } from "react";
import { site, projectTypes } from "@/lib/content";

type State = { kind: "idle" } | { kind: "sending" } | { kind: "done" } | { kind: "error"; msg: string };

export default function Contact() {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [copied, setCopied] = useState(false);

  async function copy() {
    try { await navigator.clipboard.writeText(site.email); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch { /* address is selectable */ }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setState({ kind: "done" });
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setState({ kind: "error", msg: `${(err as Error).message} You can email ${site.email} instead.` });
    }
  }

  return (
    <section className="block" id="contact">
      <div className="wrap contact">
        <div>
          <p className="eyebrow"><b>03</b>&nbsp; Contact</p>
          <h2>Got a project in mind?</h2>
          <p className="lead">Tell us a little about it and we will reply within one working day with next steps and a rough price.</p>
          <div className="mail">
            <code>{site.email}</code>
            <button className="btn ghost" type="button" onClick={copy}>{copied ? "Copied" : "Copy"}</button>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="row2">
            <label htmlFor="f-name">Name<input id="f-name" name="name" required placeholder="Your name" autoComplete="name" /></label>
            <label htmlFor="f-email">Email<input id="f-email" name="email" type="email" required placeholder="you@company.co.uk" autoComplete="email" /></label>
          </div>
          <label htmlFor="f-type">Project type
            <select id="f-type" name="type">{projectTypes.map((t) => <option key={t}>{t}</option>)}</select>
          </label>
          <label htmlFor="f-msg">About the project
            <textarea id="f-msg" name="message" required placeholder="What does the business do, and what should the site help with?" />
          </label>
          <label className="hp" aria-hidden="true">Company website<input name="company_site" tabIndex={-1} autoComplete="off" /></label>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <button className="btn" type="submit" disabled={state.kind === "sending"}>{state.kind === "sending" ? "Sending…" : "Send enquiry"}</button>
            {state.kind === "done" && <p className="note" role="status">Thanks. We will be in touch within one working day.</p>}
            {state.kind === "error" && <p className="note" role="alert">{state.msg}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
