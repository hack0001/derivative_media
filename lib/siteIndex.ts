import { areas } from "@/lib/areas";
import { articles, articlesFor } from "@/lib/articles";
import { docs } from "@/lib/docs";
import { pairs } from "@/lib/i18n";

// One list of every public page, grouped by section.
// Feeds both /sitemap.xml (for search engines) and /sitemap (for people), so they never disagree.

export type IndexPage = {
  path: string;
  title: string;
  cy?: boolean;           // Welsh page
  priority: number;       // 0.0–1.0, a hint of relative importance
  changefreq: "weekly" | "monthly" | "yearly";
  lastmod?: string;       // ISO date; defaults to the build date
};
export type IndexSection = { key: string; heading: string; headingCy?: string; pages: IndexPage[] };

export function siteIndex(): IndexSection[] {
  return [
    { key: "main", heading: "Main pages", pages: [
      { path: "/", title: "Home", priority: 1, changefreq: "weekly" },
      { path: "/about", title: "About Tom Patel", priority: 0.7, changefreq: "monthly" },
      { path: "/areas", title: "Areas I cover", priority: 0.8, changefreq: "monthly" },
    ] },
    { key: "websites", heading: "Websites", pages: [
      { path: "/websites", title: docs.websites.en.metaTitle, priority: 0.9, changefreq: "monthly" },
      { path: "/websites/bilingual", title: docs.bilingual.en.metaTitle, priority: 0.8, changefreq: "monthly" },
      ...articlesFor("websites").map((a) => ({ path: a.path, title: a.title, priority: 0.6, changefreq: "monthly" as const, lastmod: a.updated })),
    ] },
    { key: "local-seo", heading: "Getting found on Google and AI search", pages: [
      { path: "/local-seo", title: docs.localSeo.en.metaTitle, priority: 0.9, changefreq: "monthly" },
      { path: "/free-seo-check", title: "Free local SEO check", priority: 0.8, changefreq: "monthly" },
      ...articlesFor("local-seo").map((a) => ({ path: a.path, title: a.title, priority: 0.6, changefreq: "monthly" as const, lastmod: a.updated })),
    ] },
    { key: "councils", heading: "Community councils", pages: [
      { path: "/for/community-councils", title: docs.councils.en.metaTitle, priority: 0.9, changefreq: "monthly" },
      ...articlesFor("councils").map((a) => ({ path: a.path, title: a.title, priority: 0.6, changefreq: "monthly" as const, lastmod: a.updated })),
    ] },
    { key: "work", heading: "Work", pages: [
      { path: "/work/llansannan-community-council", title: "Case study: Llansannan Community Council", priority: 0.7, changefreq: "yearly" },
    ] },
    { key: "areas", heading: "Areas", pages: areas.map((a) => ({ path: `/areas/${a.slug}`, title: a.title, priority: 0.8, changefreq: "monthly" as const })) },
    { key: "cy", heading: "Welsh pages", headingCy: "Tudalennau Cymraeg", pages: [
      { path: "/cy", title: "Hafan", cy: true, priority: 0.8, changefreq: "weekly" },
      { path: "/cy/gwefannau", title: docs.websites.cy.metaTitle, cy: true, priority: 0.7, changefreq: "monthly" },
      { path: "/cy/gwefannau-dwyieithog", title: docs.bilingual.cy.metaTitle, cy: true, priority: 0.7, changefreq: "monthly" },
      { path: "/cy/seo-lleol", title: docs.localSeo.cy.metaTitle, cy: true, priority: 0.7, changefreq: "monthly" },
      { path: "/cy/cynghorau-cymuned", title: docs.councils.cy.metaTitle, cy: true, priority: 0.7, changefreq: "monthly" },
      { path: "/cy/amdanaf", title: docs.about.cy.metaTitle, cy: true, priority: 0.5, changefreq: "monthly" },
      { path: "/cy/gwiriad-seo-am-ddim", title: "Gwiriad SEO lleol am ddim", cy: true, priority: 0.6, changefreq: "monthly" },
    ] },
    { key: "help", heading: "Help", pages: [
      { path: "/sitemap", title: "Sitemap", priority: 0.3, changefreq: "monthly" },
    ] },
  ];
}

// The Welsh/English twin of a page, if it has one (for hreflang in the XML sitemap).
export const twinOf = (path: string) => {
  const p = pairs.find(([en, cy]) => en === path || cy === path);
  return p ? { en: p[0], cy: p[1] } : undefined;
};

export const allArticlesCount = () => articles.length;
