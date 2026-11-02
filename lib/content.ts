// Business details and projects. Interface text (English and Welsh) lives in lib/i18n.ts;
// page content lives in lib/docs.ts, lib/articles.ts and lib/areas.ts.

export const site = {
  name: "Derivative Media Ltd",
  url: "https://derivativemedia.co.uk",
  base: "Colwyn Bay",
  region: "Conwy",
  // Feeds the About page and Google's structured data.
  owner: {
    name: "Tom Patel",
    role: "Founder & web developer",
    photo: "", // e.g. "/about/headshot.jpg" (put the file in public/about/)
  },
  brand: "derivative media",
  tagline: "website development",
  email: "hello@derivativemedia.co.uk", // TODO: replace with your real address
};

// `screen` picks one of the CSS-drawn mockups (s1–s5). Swap for `image: "/work/x.jpg"` once you have screenshots.
export type Project = { title: string; summary: string; url: string; stack: [string, string]; screen?: "s1" | "s2" | "s3" | "s4" | "s5"; image?: string; sample?: boolean; href?: string; key: string };
export const projects: Project[] = [
  { key: "llansannan", title: "Llansannan Community Council", summary: "Bilingual council website with ten years of minutes and a clerk-friendly editor", url: "llansannan-cc.gov.wales", stack: ["Astro · Decap CMS", "Cymraeg / English"], screen: "s5", href: "/work/llansannan-community-council" },
  { key: "cottages", title: "Holiday cottages", summary: "Booking site with live availability and deposits", url: "cottages-by-the-sea.co.uk", stack: ["Astro · Stripe", "iCal sync"], screen: "s1", sample: true },
  { key: "roaster", title: "Coffee roaster", summary: "Shopify store with subscriptions", url: "roastery-shop.com/collections", stack: ["Shopify · Liquid", "Recharge"], screen: "s2", sample: true },
  { key: "outdoor", title: "Outdoor activity centre", summary: "Session booking with weather-aware scheduling", url: "adventure-centre.wales/book", stack: ["Next.js · Postgres", "Met Office API"], screen: "s3", sample: true },
];

