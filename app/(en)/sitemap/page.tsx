import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { siteIndex } from "@/lib/siteIndex";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Every page on the Derivative Media website, grouped by topic, in English and Welsh.",
  alternates: { canonical: "/sitemap" },
};

const blurbs: Record<string, string> = {
  main: "Start here: who I am and where I work.",
  websites: "What a good website needs, what it costs, and building in Welsh and English.",
  "local-seo": "How to appear on Google, Google Maps and AI assistants.",
  councils: "Websites for Welsh town and community councils, and what the law requires.",
  work: "Projects I've built.",
  areas: "Web design across North Wales, town by town.",
  cy: "Y prif dudalennau yn Gymraeg.",
  help: "",
};

// Human-readable sitemap, built from lib/siteIndex.ts (the same list as /sitemap.xml).
export default function SitemapPage() {
  const sections = siteIndex().filter((s) => s.key !== "help");
  const total = sections.reduce((n, s) => n + s.pages.length, 0);
  return (
    <PageShell
      eyebrow="Sitemap"
      title="Sitemap"
      lead={`All ${total} pages on the site, grouped by topic. Each page is a click away.`}
      crumbs={[{ name: "Sitemap", href: "/sitemap" }]}
    >
      <section className="sitemap-grid">
        {sections.map((s) => (
          <div key={s.key} className="sm-card" lang={s.key === "cy" ? "cy" : undefined}>
            <h2>{s.headingCy ? `${s.heading} · ${s.headingCy}` : s.heading}</h2>
            {blurbs[s.key] && <p>{blurbs[s.key]}</p>}
            <ul>
              {s.pages.map((p, i) => (
                <li key={p.path} className={i === 0 && s.key !== "main" && s.key !== "areas" && s.key !== "work" ? "hub" : undefined}>
                  <Link href={p.path}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <p className="muted-note">For search engines: <a href="/sitemap.xml">sitemap.xml</a></p>
    </PageShell>
  );
}
