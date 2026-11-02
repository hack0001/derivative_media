import Link from "next/link";
import type { Block } from "@/lib/blocks";

// Inline text supports [link text](/path) and **bold**.
function inline(text: string) {
  const out: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0, m: RegExpExecArray | null, k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const href = m[2];
      out.push(href.startsWith("/") ? <Link key={k++} href={href}>{m[1]}</Link> : <a key={k++} href={href} rel="noopener">{m[1]}</a>);
    } else out.push(<strong key={k++}>{m[3]}</strong>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2": return <h2 key={i} id={b.id}>{b.text}</h2>;
          case "h3": return <h3 key={i}>{b.text}</h3>;
          case "p": return <p key={i}>{inline(b.text)}</p>;
          case "list": return <ul key={i}>{b.items.map((t, j) => <li key={j}>{inline(t)}</li>)}</ul>;
          case "steps": return <ol key={i} className="num">{b.items.map((t, j) => <li key={j}>{inline(t)}</li>)}</ol>;
          case "check": return <ul key={i} className="ticks">{b.items.map((t, j) => <li key={j}>{inline(t)}</li>)}</ul>;
          case "note": return <p key={i} className="callout">{inline(b.text)}</p>;
          case "answer": return <p key={i} className="answer">{inline(b.text)}</p>;
          case "faq": return (
            <div key={i} className="faq">
              {b.items.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{inline(f.a)}</p></details>)}
            </div>
          );
        }
      })}
    </>
  );
}
