import { siteIndex } from "@/lib/siteIndex";
import { site } from "@/lib/content";

// /sitemap.xml for search engines, in the standard sitemap protocol.
// Welsh/English pairs are declared with hreflang tags in each page's <head>, so they're not repeated here.
// Plain XML by design: browsers show it as code. People use the /sitemap page instead.

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const abs = (path: string) => `${site.url}${path === "/" ? "/" : path}`;

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = siteIndex().flatMap((s) => s.pages).map((p) => {
    return `  <url>
    <loc>${esc(abs(p.path))}</loc>
    <lastmod>${p.lastmod ?? today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority.toFixed(1)}</priority>
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=0, must-revalidate" },
  });
}
