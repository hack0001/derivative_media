// Edit the site's words here. Everything on the page reads from this file.

export const site = {
  name: "Derivative Media Ltd",
  brand: "derivative media",
  tagline: "website development",
  email: "hello@derivativemedia.co.uk", // TODO: replace with your real address
  heroMeta: [
    "Hand-coded websites & web apps",
    "Based in North Wales, working UK-wide",
    "Taking projects for early 2027",
  ],
  manifesto:
    "We design and hand-code fast websites for businesses, trades and makers. Every page is built for the job it has to do, and every millisecond of load time is accounted for.",
  manifestoHighlights: ["hand-code", "fast", "millisecond"],
  places: ["North Wales", "Chester", "Liverpool", "Manchester", "Cardiff", "London", "Anywhere with Wi-Fi"],
  // Show the palette switcher in the corner. Set to false once you have picked a palette,
  // and set defaultPalette to your choice.
  showPalettePicker: true,
  defaultPalette: "klein" as Palette,
};

export type Palette = "klein" | "dragon" | "ember";
export const palettes: { id: Palette; label: string; swatch: string }[] = [
  { id: "klein", label: "Klein blue", swatch: "#1d2bff" },
  { id: "dragon", label: "Dragon red", swatch: "#c8102e" },
  { id: "ember", label: "Ember", swatch: "#ff5a1f" },
];

export type Service = { tag: string; title: string; body: string; icon: "build" | "shop" | "app" | "perf" | "care" | "motion" };
export const services: Service[] = [
  { tag: "/build", icon: "build", title: "Website design & build", body: "Custom, responsive sites written from scratch. No page builders, no bloated themes." },
  { tag: "/shop", icon: "shop", title: "Online shops", body: "Shopify and WooCommerce stores set up to take orders, payments and shipping on day one." },
  { tag: "/app", icon: "app", title: "Web apps & booking", body: "Booking systems, quote builders and customer portals shaped around how you already work." },
  { tag: "/perf", icon: "perf", title: "Speed, SEO & access", body: "Core Web Vitals, structured data and WCAG 2.2 AA checks are part of every build." },
  { tag: "/care", icon: "care", title: "Hosting & care plans", body: "Updates, backups, uptime monitoring and small monthly changes, handled for a fixed fee." },
  { tag: "/motion", icon: "motion", title: "Brand & motion", body: "Logos, type choices and the small animations that make a site feel finished." },
];

// `screen` picks one of the CSS-drawn mockups (s1–s4). Swap for `image: "/work/x.jpg"` once you have screenshots.
export type Project = { title: string; summary: string; url: string; stack: [string, string]; screen?: "s1" | "s2" | "s3" | "s4"; image?: string; sample?: boolean };
export const projects: Project[] = [
  { title: "Holiday cottages", summary: "Booking site with live availability and deposits", url: "cottages-by-the-sea.co.uk", stack: ["Astro · Stripe", "iCal sync"], screen: "s1", sample: true },
  { title: "Coffee roaster", summary: "Shopify store with subscriptions", url: "roastery-shop.com/collections", stack: ["Shopify · Liquid", "Recharge"], screen: "s2", sample: true },
  { title: "Outdoor activity centre", summary: "Session booking with weather-aware scheduling", url: "adventure-centre.wales/book", stack: ["Next.js · Postgres", "Met Office API"], screen: "s3", sample: true },
  { title: "Building firm portal", summary: "Online quoting and job tracking for customers", url: "app.trades-quotes.co.uk", stack: ["Laravel · Vue", "Xero"], screen: "s4", sample: true },
];

export const steps = [
  { title: "Discovery call", body: "We talk through what the site needs to do, who it is for and what success looks like.", when: "Week 1" },
  { title: "Design in the browser", body: "You review real pages on a private link, on your own phone, from the first draft.", when: "Weeks 1–3" },
  { title: "Build & test", body: "Content goes in, every page is tested for speed, accessibility and on real devices.", when: "Weeks 3–5" },
  { title: "Launch & look after", body: "We handle the domain, hosting and go-live, then stay on hand for changes.", when: "Week 6 onward" },
];

export const projectTypes = ["New website", "Online shop", "Web app or booking system", "Redesign of an existing site", "Care plan / ongoing support"];
