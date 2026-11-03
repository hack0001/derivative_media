import type { MetadataRoute } from "next";
import { areas } from "@/lib/areas";
import { articles } from "@/lib/articles";
import { pairs } from "@/lib/i18n";

const base = "https://derivativemedia.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const bilingual = pairs.flatMap(([en, cy]) => {
    const languages = { "en-GB": `${base}${en === "/" ? "" : en}`, cy: `${base}${cy}` };
    return [
      { url: languages["en-GB"], lastModified: now, alternates: { languages } },
      { url: languages.cy, lastModified: now, alternates: { languages } },
    ];
  });
  return [
    ...bilingual,
    { url: `${base}/areas`, lastModified: now },
    ...areas.map((a) => ({ url: `${base}/areas/${a.slug}`, lastModified: now })),
    ...articles.map((a) => ({ url: `${base}${a.path}`, lastModified: new Date(a.updated) })),
    { url: `${base}/work/llansannan-community-council`, lastModified: now },
    { url: `${base}/sitemap`, lastModified: now },
  ];
}
