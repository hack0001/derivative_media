import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { t, type Lang } from "@/lib/i18n";
import { site } from "@/lib/content";

type Crumb = { name: string; href: string };

// Shared layout for every page except the homepage: nav, page header, content, contact band, footer.
export default function PageShell({
  lang = "en", eyebrow, title, lead, crumbs, children, schema,
}: {
  lang?: Lang; eyebrow: string; title: string; lead?: string; crumbs: Crumb[]; children: React.ReactNode; schema?: (object | null)[];
}) {
  const s = t(lang).shell;
  const home = t(lang).nav.home;
  const trail = [{ name: s.home, href: home }, ...crumbs];
  return (
    <>
      <Nav lang={lang} />
      <main className="page">
        <header className="page-head">
          <div className="wrap">
            <nav aria-label="Breadcrumb" className="crumbs">
              {trail.map((c, i) => (
                <span key={c.href}>
                  {i < trail.length - 1 ? <Link href={c.href}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
                  {i < trail.length - 1 && <span aria-hidden="true"> / </span>}
                </span>
              ))}
            </nav>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            {lead && <p className="lead">{lead}</p>}
          </div>
        </header>
        <div className="wrap page-body">{children}</div>
        <section className="cta-band">
          <div className="wrap">
            <h2>{s.ctaHeading}</h2>
            <p>{s.ctaBody}</p>
            <Link className="btn" href={t(lang).nav.contactHref}>{s.ctaButton}</Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: trail.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${site.url}${c.href === "/" ? "" : c.href}` })),
          },
          ...((schema ?? []).filter(Boolean) as object[]),
        ]}
      />
    </>
  );
}
