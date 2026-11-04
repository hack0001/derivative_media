import { siteIndex, twinOf } from "@/lib/siteIndex";
import { site } from "@/lib/content";

// /sitemap.xml for search engines. Standard sitemap protocol plus hreflang links for Welsh/English pairs.
// The xml-stylesheet line only affects how it looks in a browser (see public/sitemap.xsl); crawlers ignore it.

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const abs = (path: string) => `${site.url}${path === "/" ? "/" : path}`;

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = siteIndex().flatMap((s) => s.pages).map((p) => {
    const twin = twinOf(p.path);
    const alt = twin
      ? [
          `    <xhtml:link rel="alternate" hreflang="en-GB" href="${esc(abs(twin.en))}"/>`,
          `    <xhtml:link rel="alternate" hreflang="cy" href="${esc(abs(twin.cy))}"/>`,
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(abs(twin.en))}"/>`,
        ].join("\n") + "\n"
      : "";
    return `  <url>
    <loc>${esc(abs(p.path))}</loc>
    <lastmod>${p.lastmod ?? today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority.toFixed(1)}</priority>
${alt}  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
