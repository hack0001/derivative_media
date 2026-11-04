import Link from "next/link";
import Year from "@/components/Year";
import { site } from "@/lib/content";
import { areas } from "@/lib/areas";
import { articles } from "@/lib/articles";
import { t, type Lang } from "@/lib/i18n";

// Footer with the business details and internal links to the main sections, area pages and articles.
export default function Footer({ lang = "en" }: { lang?: Lang }) {
  const f = t(lang).footer;
  const cy = lang === "cy";
  return (
    <footer className="site-foot">
      <div className="wrap foot-grid">
        <div>
          <p className="brand">derivative<i>.</i>media</p>
          <p className="muted">{site.name}<br />{f.tagline}<br />{f.based}</p>
          <p className="muted">Tom Patel · <a href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
        <div>
          <p className="foot-h">{f.services}</p>
          <ul>
            <li><Link href={cy ? "/cy/gwefannau" : "/websites"}>{cy ? "Gwefannau" : "Websites"}</Link></li>
            <li><Link href={cy ? "/cy/seo-lleol" : "/local-seo"}>{cy ? "SEO lleol a chwilio AI" : "Local SEO & AI search"}</Link></li>
            <li><Link href={cy ? "/cy/gwefannau-dwyieithog" : "/websites/bilingual"}>{cy ? "Gwefannau dwyieithog" : "Bilingual websites"}</Link></li>
            <li><Link href={cy ? "/cy/cynghorau-cymuned" : "/for/community-councils"}>{cy ? "Cynghorau cymuned" : "Community councils"}</Link></li>
            <li><Link href="/work/llansannan-community-council">{cy ? "Astudiaeth achos: Llansannan" : "Case study: Llansannan"}</Link></li>
            <li><Link href={cy ? "/cy/amdanaf" : "/about"}>{cy ? "Amdanaf" : "About"}</Link></li>
          </ul>
        </div>
        <div>
          <p className="foot-h">{f.areas}</p>
          <ul>
            {areas.map((a) => <li key={a.slug}><Link href={`/areas/${a.slug}`}>{a.name}</Link></li>)}
            <li><Link href="/areas">{cy ? "Pob ardal" : "All areas"}</Link></li>
          </ul>
        </div>
        <div>
          <p className="foot-h">{f.learn}</p>
          <ul>
            {articles.map((a) => <li key={a.path}><Link href={a.path}>{a.short}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="wrap foot-base">
        <span>© <Year /> {site.name} · <Link href="/sitemap">{cy ? "Map o'r wefan" : "Sitemap"}</Link></span>
        <code>f′(you) &gt; 0</code>
      </div>
    </footer>
  );
}
