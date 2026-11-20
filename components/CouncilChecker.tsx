"use client";
import { useState } from "react";
import Link from "next/link";
import { required, goodPractice, type CheckItem } from "@/lib/councilChecklist";

type Answer = "yes" | "no" | "unsure";

// One question with Yes / No / Not sure buttons. Defined outside the checker so React keeps
// the same buttons between answers (keeps keyboard focus in place).
function Row({ i, n, value, onSet }: { i: CheckItem; n: number; value?: Answer; onSet: (id: string, a: Answer) => void }) {
  return (
    <li className="chk-row">
      <div className="chk-q">
        <span className="chk-n">{n}</span>
        <div>
          <p>{i.label}</p>
          {i.law && <p className="chk-law">{i.law}</p>}
        </div>
      </div>
      <div className="chk-a" role="group" aria-label={i.label}>
        {(["yes", "no", "unsure"] as Answer[]).map((a) => (
          <button key={a} type="button" aria-pressed={value === a} className={value === a ? `on ${a}` : undefined} onClick={() => onSet(i.id, a)}>
            {a === "yes" ? "Yes" : a === "no" ? "No" : "Not sure"}
          </button>
        ))}
      </div>
    </li>
  );
}

// Interactive checklist: a clerk or councillor answers each question about their council's
// website and gets a score plus a list of what to fix. Nothing is sent anywhere; it all runs in the browser.
export default function CouncilChecker() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [copied, setCopied] = useState(false);
  const set = (id: string, a: Answer) => setAnswers((s) => ({ ...s, [id]: a }));

  const total = required.length + goodPractice.length;
  const answered = Object.keys(answers).length;
  const reqYes = required.filter((i) => answers[i.id] === "yes").length;
  const gaps = (list: CheckItem[]) => list.filter((i) => answers[i.id] === "no" || answers[i.id] === "unsure");
  const reqGaps = gaps(required), gpGaps = gaps(goodPractice);
  const done = answered === total;

  const summary = () => [
    `Council website check: ${reqYes} of ${required.length} legal requirements met.`,
    ...(reqGaps.length ? ["", "Required items to fix:", ...reqGaps.map((i) => `- ${i.label} (${i.law}). ${i.fix}`)] : []),
    ...(gpGaps.length ? ["", "Good practice to consider:", ...gpGaps.map((i) => `- ${i.label}. ${i.fix}`)] : []),
    "", "Checklist: https://www.derivativemedia.co.uk/for/community-councils/website-checker",
  ].join("\n");

  const copy = async () => {
    try { await navigator.clipboard.writeText(summary()); setCopied(true); setTimeout(() => setCopied(false), 2500); } catch { /* clipboard blocked */ }
  };

  return (
    <div className="checker">
      <p className="chk-progress" aria-live="polite">{answered} of {total} answered</p>

      <h2>Required by law</h2>
      <ol className="chk-list">{required.map((i, n) => <Row key={i.id} i={i} n={n + 1} value={answers[i.id]} onSet={set} />)}</ol>

      <h2>Good practice</h2>
      <ol className="chk-list">{goodPractice.map((i, n) => <Row key={i.id} i={i} n={required.length + n + 1} value={answers[i.id]} onSet={set} />)}</ol>

      <section className="chk-result" aria-live="polite">
        <h2>Your result</h2>
        {answered === 0 ? (
          <p>Answer the questions above to see your result.</p>
        ) : (
          <>
            <p className="chk-score"><b>{reqYes}</b> of {required.length} legal requirements met{done ? "" : " so far"}.</p>
            {reqGaps.length > 0 && (<>
              <h3>Required items to fix</h3>
              <ul>{reqGaps.map((i) => <li key={i.id}><b>{i.label}.</b> {i.fix}</li>)}</ul>
            </>)}
            {gpGaps.length > 0 && (<>
              <h3>Good practice to consider</h3>
              <ul>{gpGaps.map((i) => <li key={i.id}><b>{i.label}.</b> {i.fix}</li>)}</ul>
            </>)}
            {done && reqGaps.length === 0 && <p>Your website covers every legal requirement on this list. Nice work.</p>}
            <div className="chk-actions">
              <button type="button" className="btn ghost" onClick={copy}>{copied ? "Copied" : "Copy results to share"}</button>
              <Link className="btn" href="/#contact">Get help fixing these</Link>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
