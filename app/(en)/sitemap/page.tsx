import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { areas } from "@/lib/areas";
import { articles, articlesFor } from "@/lib/articles";
import { docs } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Every page on the Derivative Media website, in English and Welsh.",
  alternates: { canonical: "/sitemap" },
};

// Human-readable sitemap. Built from the same data as the pages, so it stays up to date automatically.
export default function SitemapPage() {
  const groups: { heading: string; links: { href: string; label: string }[] }[] = [
    { heading: "Main pages", links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Tom Patel" },
      { href: "/#services", label: "Services" },
      { href: "/#contact", label: "Contact" },
    ] },
    { heading: "Websites", links: [
      { href: "/websites", label: docs.websites.en.metaTitle },
      { href: "/websites/bilingual", label: docs.bilingual.en.metaTitle },
      ...articlesFor("websites").map((a) => ({ href: a.path, label: a.title })),
    ] },
    { heading: "Getting found on Google and AI search", links: [
      { href: "/local-seo", label: docs.localSeo.en.metaTitle },
      ...articlesFor("local-seo").map((a) => ({ href: a.path, label: a.title })),
    ] },
    { heading: "Community councils", links: [
      { href: "/for/community-councils", label: docs.councils.en.metaTitle },
      ...articlesFor("councils").map((a) => ({ href: a.path, label: a.title })),
    ] },
    { heading: "Work", links: [
      { href: "/work/llansannan-community-council", label: "Case study: Llansannan Community Council" },
    ] },
    { heading: "Areas", links: [
      { href: "/areas", label: "All areas I cover" },
      ...areas.map((a) => ({ href: `/areas/${a.slug}`, label: a.title })),
    ] },
    { heading: "Cymraeg", links: [
      { href: "/cy", label: "Hafan" },
      { href: "/cy/gwefannau", label: docs.websites.cy.metaTitle },
      { href: "/cy/gwefannau-dwyieithog", label: docs.bilingual.cy.metaTitle },
      { href: "/cy/seo-lleol", label: docs.localSeo.cy.metaTitle },
      { href: "/cy/cynghorau-cymuned", label: docs.councils.cy.metaTitle },
      { href: "/cy/amdanaf", label: docs.about.cy.metaTitle },
    ] },
  ];
  const total = groups.reduce((n, g) => n + g.links.length, 0);
  return (
    <PageShell
      eyebrow="Sitemap"
      title="Sitemap"
      lead={`Every page on the site, in one place. ${articles.length} guides, ${areas.length} area pages and ${total} links in all.`}
      crumbs={[{ name: "Sitemap", href: "/sitemap" }]}
    >
      <section className="sitemap-grid">
        {groups.map((g) => (
          <div key={g.heading}>
            <h2>{g.heading}</h2>
            <ul>{g.links.map((l) => <li key={l.href}><Link href={l.href} lang={g.heading === "Cymraeg" ? "cy" : undefined}>{l.label}</Link></li>)}</ul>
          </div>
        ))}
      </section>
      <p className="muted-note">For search engines: <a href="/sitemap.xml">sitemap.xml</a></p>
    </PageShell>
  );
}
