import Link from "next/link";
import PageShell from "@/components/PageShell";
import { Blocks } from "@/components/Blocks";
import { faqSchema } from "@/lib/blocks";
import { articlesFor } from "@/lib/articles";
import { docs, type Doc } from "@/lib/docs";
import { t, type Lang } from "@/lib/i18n";
import { site } from "@/lib/content";

// Renders a bilingual page (pillar hub, service page or About) in either language.
// Pillar hubs list their cluster articles automatically.
export default function DocPage({ doc, lang = "en", crumbs }: { doc: Doc; lang?: Lang; crumbs?: { name: string; href: string }[] }) {
  const v = doc[lang];
  const clusters = lang === "en" && doc.pillar ? articlesFor(doc.pillar) : [];
  // Pillar A also lists the bilingual page as one of its clusters.
  const extra = lang === "en" && doc.key === "websites" ? [{ path: docs.bilingual.en.path, title: docs.bilingual.en.title, description: docs.bilingual.en.description }] : [];
  const cards = [...extra, ...clusters.map((a) => ({ path: a.path, title: a.title, description: a.description }))];

  const service = doc.schemaType && {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: doc.schemaType,
    name: v.metaTitle,
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "Place", name: "North Wales" },
    availableLanguage: ["en", "cy"],
    url: `${site.url}${v.path}`,
  };
  const person = doc.key === "about" && {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: { "@id": `${site.url}/about#person` },
  };

  return (
    <PageShell
      lang={lang}
      eyebrow={v.eyebrow}
      title={v.title}
      lead={v.lead}
      crumbs={crumbs ?? [{ name: v.metaTitle, href: v.path }]}
      schema={[service || null, person || null, faqSchema(v.blocks)]}
    >
      <section className={v.aside ? "split" : doc.key === "about" ? "about" : undefined}>
        {doc.key === "about" && <div className="portrait"><div className="portrait-ph" aria-hidden="true">TP</div></div>}
        <div className="prose"><Blocks blocks={v.blocks} /></div>
        {v.aside && (
          <aside className="side-card">
            <p className="eyebrow">{v.aside.heading}</p>
            <ul className="ticks">{v.aside.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </aside>
        )}
      </section>
      {cards.length > 0 && (
        <section>
          <p className="eyebrow" style={{ marginBottom: 18 }}>{t(lang).shell.inThisSection}</p>
          <div className="area-grid">
            {cards.map((c) => (
              <Link key={c.path} href={c.path} className="area-card">
                <strong>{c.title}</strong>
                <span>{c.description}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </PageShell>
  );
}
