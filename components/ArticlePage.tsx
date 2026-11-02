import Link from "next/link";
import PageShell from "@/components/PageShell";
import { Blocks } from "@/components/Blocks";
import { faqSchema } from "@/lib/blocks";
import { articles, pillarInfo, type Article } from "@/lib/articles";
import { site } from "@/lib/content";

// A cluster article: links up to its pillar and across to related articles.
export default function ArticlePage({ a }: { a: Article }) {
  const pillar = pillarInfo[a.pillar];
  const related = articles.filter((x) => x.path !== a.path).slice(0, 3);
  const date = new Date(a.updated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    dateModified: a.updated,
    datePublished: a.updated,
    author: { "@id": `${site.url}/about#person` },
    publisher: { "@id": `${site.url}/#business` },
    mainEntityOfPage: `${site.url}${a.path}`,
  };
  return (
    <PageShell
      eyebrow={`${pillar.name} · ${a.readMins} min read · Updated ${date}`}
      title={a.title}
      lead={a.intro}
      crumbs={[{ name: pillar.name, href: pillar.href }, { name: a.short, href: a.path }]}
      schema={[schema, faqSchema(a.body)]}
    >
      <article className="prose guide">
        <p className="byline">By <Link href="/about">Tom Patel</Link>, web developer in Colwyn Bay</p>
        <Blocks blocks={a.body} />
        {a.sources && (
          <div className="sources">
            <p className="eyebrow">Sources</p>
            <ul>{a.sources.map((s) => <li key={s.url}><a href={s.url} rel="noopener">{s.title}</a></li>)}</ul>
          </div>
        )}
        <p className="back">← Back to <Link href={pillar.href}>{pillar.name}</Link></p>
      </article>
      <section>
        <p className="eyebrow" style={{ marginBottom: 18 }}>Related</p>
        <div className="area-grid">
          {related.map((r) => (
            <Link key={r.path} href={r.path} className="area-card"><strong>{r.title}</strong><span>{r.description}</span></Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
