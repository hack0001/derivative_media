import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { Blocks } from "@/components/Blocks";
import { faqSchema } from "@/lib/blocks";
import { areas, getArea } from "@/lib/areas";
import { site } from "@/lib/content";

export const dynamicParams = false;
export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = getArea((await params).slug);
  if (!a) return {};
  return {
    title: a.metaTitle,
    description: a.description,
    alternates: { canonical: `/areas/${a.slug}` },
    openGraph: { title: a.metaTitle, description: a.description, url: `/areas/${a.slug}` },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArea((await params).slug);
  if (!a) notFound();
  const nearby = a.nearby.map(getArea).filter(Boolean);
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web design",
    name: a.title,
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "Place", name: a.name },
    url: `${site.url}/areas/${a.slug}`,
  };
  return (
    <PageShell
      eyebrow={`Web design · ${a.name}`}
      title={a.title}
      lead={a.lead}
      crumbs={[{ name: "Areas", href: "/areas" }, { name: a.name, href: `/areas/${a.slug}` }]}
      schema={[service, faqSchema(a.blocks)]}
    >
      <section className="split">
        <div className="prose"><Blocks blocks={a.blocks} /></div>
        <aside className="side-card">
          <p className="eyebrow">Who I build for here</p>
          <ul className="ticks">{a.who.map((w) => <li key={w}>{w}</li>)}</ul>
        </aside>
      </section>
      <nav className="nearby" aria-label="Nearby areas">
        <p className="eyebrow">Also working in</p>
        <div>
          {nearby.map((n) => n && <Link key={n.slug} href={`/areas/${n.slug}`}>{n.name}</Link>)}
          <Link href="/areas">All areas</Link>
        </div>
      </nav>
    </PageShell>
  );
}
