import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { areas, otherAreas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Areas I cover across North Wales",
  description: "Web design across North Wales from a developer based in Colwyn Bay: Colwyn Bay, Llanrwst and the Conwy Valley, Llansannan, Abergele, Denbigh and beyond.",
  alternates: { canonical: "/areas" },
};

export default function Areas() {
  return (
    <PageShell
      eyebrow="Areas"
      title="Areas I cover across North Wales"
      lead="I'm based in Colwyn Bay and work across North Wales, in person or remotely. These are the areas I focus on, with the rest of the region covered too."
      crumbs={[{ name: "Areas", href: "/areas" }]}
    >
      <section className="area-grid">
        {areas.map((a) => (
          <Link key={a.slug} href={`/areas/${a.slug}`} className="area-card">
            <span className="eyebrow">Web design</span>
            <strong>{a.name}</strong>
            <span>{a.description}</span>
          </Link>
        ))}
      </section>
      <section className="prose">
        <h2>Also covering</h2>
        <p>I work with businesses and councils across the whole region. These areas don't have their own page yet; that usually changes once I've worked with someone there.</p>
        <dl className="other-areas">
          {otherAreas.map((o) => (<div key={o.name}><dt>{o.name}</dt><dd>{o.note}</dd></div>))}
        </dl>
        <p>Don't see your town? <Link href="/#contact">Get in touch</Link> anyway.</p>
      </section>
    </PageShell>
  );
}
