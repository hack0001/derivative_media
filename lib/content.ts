// Business details and projects. Interface text (English and Welsh) lives in lib/i18n.ts;
// page content lives in lib/docs.ts, lib/articles.ts and lib/areas.ts.

export const site = {
  name: "Derivative Media Ltd",
  url: "https://www.derivativemedia.co.uk", // the live address Google should use: must match Vercel's primary domain
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

// Portfolio projects shown in the homepage reel. `image` is a 16:10 screenshot in public/work/.
// `tag` labels the card (e.g. "Own project"); real client work has no tag.
export type Project = {
  key: string; title: string; summary: string; url: string; stack: [string, string];
  image?: string; screen?: "s1" | "s2" | "s3" | "s4" | "s5"; tag?: "own"; href?: string; external?: string;
};
export const projects: Project[] = [
  { key: "llansannan", title: "Llansannan Community Council", summary: "Bilingual council website with ten years of minutes and a clerk-friendly editor", url: "llansannan-cc.gov.wales", stack: ["Astro · Decap CMS", "Cymraeg / English"], image: "/work/llansannan.jpg", href: "/work/llansannan-community-council" },
  { key: "cymraeg", title: "Dysgu Cymraeg", summary: "Welsh-learning web app: 40 lesson topics, flashcards, quizzes and a north/south dialect switch", url: "Dysgu Cymraeg · launching soon", stack: ["Next.js", "Welsh learning"], image: "/work/dysgu-cymraeg.jpg", tag: "own" },
];
