import Link from "next/link";
import { t, type Lang } from "@/lib/i18n";
import { areas } from "@/lib/areas";

// Homepage section linking to the two pillar hubs and the area pages, passing the homepage's authority down.
export default function Topics({ lang = "en" }: { lang?: Lang }) {
  const tp = t(lang).topics;
  return (
    <section className="block topics" id="know-how">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow"><b>✓</b>&nbsp; {tp.eyebrow}</p>
            <h2 style={{ marginTop: 14 }}>{tp.heading}</h2>
          </div>
          <p>{tp.sub}</p>
        </div>
        <div className="pillars">
          {tp.cards.map((c) => (
            <Link key={c.href} href={c.href} className="pillar-card">
              <span className="eyebrow">{c.kicker}</span>
              <strong>{c.title}</strong>
              <span>{c.body}</span>
              <span className="go" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
        <nav className="nearby" aria-label={tp.areasLabel} style={{ marginTop: 36 }}>
          <p className="eyebrow">{tp.areasLabel}</p>
          <div>
            {areas.map((a) => <Link key={a.slug} href={`/areas/${a.slug}`}>{a.name}</Link>)}
            <Link href={tp.areasHref}>{lang === "cy" ? "Pob ardal" : "All areas"}</Link>
          </div>
        </nav>
      </div>
    </section>
  );
}
