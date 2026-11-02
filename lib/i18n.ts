// Every piece of interface text on the site, in English and Welsh.
// Welsh drafted for review: have a fluent speaker check before launch.

export type Lang = "en" | "cy";

type ServiceIcon = "build" | "shop" | "app" | "perf" | "care" | "motion" | "council" | "bilingual";

const en = {
  htmlLang: "en-GB",
  nav: {
    links: [
      { href: "/#services", label: "Services" },
      { href: "/websites", label: "Websites" },
      { href: "/local-seo", label: "Local SEO" },
      { href: "/areas", label: "Areas" },
      { href: "/about", label: "About" },
    ],
    cta: "Start a project",
    contactHref: "/#contact",
    switchLabel: "Cymraeg",
    home: "/",
  },
  hero: {
    tagline: "website development",
    meta: ["Hand-coded websites & web apps", "Based in Colwyn Bay, working across North Wales", "Taking projects for early 2027"],
  },
  manifesto: {
    eyebrow: "What we do",
    text: "We design and hand-code fast websites for businesses, trades and councils. Every page is built for the job it has to do, and every millisecond of load time is accounted for.",
    highlights: ["hand-code", "fast", "millisecond"],
  },
  services: {
    heading: "What we build",
    sub: "Small studio, full stack. You deal with the person writing the code from the first call to the day it goes live, and after.",
    items: [
      { tag: "/build", icon: "build", title: "Website design & build", body: "Custom, responsive sites written from scratch. No page builders, no bloated themes.", href: "/websites" },
      { tag: "/shop", icon: "shop", title: "Online shops", body: "Shopify and WooCommerce stores set up to take orders, payments and shipping on day one." },
      { tag: "/app", icon: "app", title: "Web apps & booking", body: "Booking systems, quote builders and customer portals shaped around how you already work." },
      { tag: "/seo", icon: "perf", title: "Local SEO & AI search", body: "Found on Google, Google Maps and AI assistants, with structured data and fast pages in every build.", href: "/local-seo" },
      { tag: "/care", icon: "care", title: "Hosting & care plans", body: "Updates, backups, uptime monitoring and small monthly changes, handled for a fixed fee." },
      { tag: "/motion", icon: "motion", title: "Brand & motion", body: "Logos, type choices and the small animations that make a site feel finished." },
      { tag: "/cymraeg", icon: "bilingual", title: "Bilingual Welsh & English", body: "Proper two-language sites with a language switch on every page, built for people and for Google.", href: "/websites/bilingual" },
      { tag: "/council", icon: "council", title: "Community council websites", body: "Sites that publish everything the law asks of a Welsh council, and are easy for the clerk to update.", href: "/for/community-councils" },
    ] as { tag: string; icon: ServiceIcon; title: string; body: string; href?: string }[],
  },
  topics: {
    eyebrow: "Know-how",
    heading: "Websites that get found",
    sub: "Two things decide whether a website earns its keep: how well it's built, and whether people can find it. I write about both, for businesses in North Wales.",
    cards: [
      { href: "/websites", kicker: "Pillar · Building", title: "Websites for North Wales businesses", body: "What a good small-business website needs, what it costs, how a build works and how to choose who builds it." },
      { href: "/local-seo", kicker: "Pillar · Getting found", title: "Getting found on Google and AI search", body: "Google Business Profile, reviews, on-page basics and how AI assistants decide which local businesses to recommend." },
    ],
    areasLabel: "Areas I cover",
    areasHref: "/areas",
  },
  work: {
    eyebrow: "Selected work",
    heading: "Recent projects",
    sample: "Sample",
    projects: {
      llansannan: "Bilingual council website with ten years of minutes and a clerk-friendly editor",
      cottages: { title: "Holiday cottages", summary: "Booking site with live availability and deposits" },
      roaster: { title: "Coffee roaster", summary: "Shopify store with subscriptions" },
      outdoor: { title: "Outdoor activity centre", summary: "Session booking with weather-aware scheduling" },
    },
  },
  process: {
    heading: "How a project runs",
    sub: "Most small business sites go live in four to six weeks. Larger builds are planned in two-week stages so you see progress as it happens.",
    steps: [
      { title: "Discovery call", body: "We talk through what the site needs to do, who it is for and what success looks like.", when: "Week 1" },
      { title: "Design in the browser", body: "You review real pages on a private link, on your own phone, from the first draft.", when: "Weeks 1–3" },
      { title: "Build & test", body: "Content goes in, every page is tested for speed, accessibility and on real devices.", when: "Weeks 3–5" },
      { title: "Launch & look after", body: "We handle the domain, hosting and go-live, then stay on hand for changes.", when: "Week 6 onward" },
    ],
  },
  places: { label: "Where we work", list: ["Colwyn Bay", "Llanrwst", "Llansannan", "Abergele", "Denbigh", "Conwy Valley", "Llandudno", "Anywhere with Wi-Fi"] },
  contact: {
    eyebrow: "Contact",
    heading: "Got a project in mind?",
    lead: "Tell us a little about it and we will reply within one working day with next steps and a rough price.",
    copy: "Copy", copied: "Copied",
    name: "Name", namePh: "Your name",
    email: "Email", emailPh: "you@company.co.uk",
    type: "Project type",
    types: ["New website", "Community council website", "Bilingual Welsh / English website", "Online shop", "Web app or booking system", "Redesign of an existing site", "Getting found on Google", "Care plan / ongoing support"],
    msg: "About the project", msgPh: "What does the business do, and what should the site help with?",
    send: "Send enquiry", sending: "Sending…",
    done: "Thanks. We will be in touch within one working day.",
    orEmail: "You can email",
    instead: "instead.",
  },
  shell: {
    home: "Home",
    ctaHeading: "Talk to a developer who lives here",
    ctaBody: "Tell me what you need and I will reply within one working day with next steps and a rough price.",
    ctaButton: "Start a project",
    updated: "Updated",
    minRead: "min read",
    sources: "Sources",
    inThisSection: "In this section",
  },
  footer: {
    tagline: "Web design & development",
    based: "Based in Colwyn Bay, Conwy, North Wales",
    services: "Services", areas: "Areas", learn: "Know-how",
  },
};

export type Dict = typeof en;

const cy: Dict = {
  htmlLang: "cy",
  nav: {
    links: [
      { href: "/cy#services", label: "Gwasanaethau" },
      { href: "/cy/gwefannau", label: "Gwefannau" },
      { href: "/cy/seo-lleol", label: "SEO lleol" },
      { href: "/areas", label: "Ardaloedd" },
      { href: "/cy/amdanaf", label: "Amdanaf" },
    ],
    cta: "Dechrau prosiect",
    contactHref: "/cy#contact",
    switchLabel: "English",
    home: "/cy",
  },
  hero: {
    tagline: "datblygu gwefannau",
    meta: ["Gwefannau ac apiau gwe wedi'u codio â llaw", "Ym Mae Colwyn, yn gweithio ar draws Gogledd Cymru", "Yn derbyn prosiectau ar gyfer dechrau 2027"],
  },
  manifesto: {
    eyebrow: "Beth rydyn ni'n ei wneud",
    text: "Rydyn ni'n dylunio ac yn codio gwefannau cyflym â llaw ar gyfer busnesau, crefftwyr a chynghorau. Mae pob tudalen wedi'i hadeiladu ar gyfer ei gwaith, ac mae pob milieiliad o amser llwytho yn cyfrif.",
    highlights: ["codio", "cyflym", "milieiliad"],
  },
  services: {
    heading: "Beth rydyn ni'n ei adeiladu",
    sub: "Stiwdio fach, y stac llawn. Rydych chi'n delio â'r person sy'n ysgrifennu'r cod o'r alwad gyntaf hyd at y diwrnod mae'r wefan yn mynd yn fyw, a thu hwnt.",
    items: [
      { tag: "/adeiladu", icon: "build", title: "Dylunio ac adeiladu gwefannau", body: "Gwefannau ymatebol wedi'u hysgrifennu o'r dechrau. Dim adeiladwyr tudalennau, dim themâu trwm.", href: "/cy/gwefannau" },
      { tag: "/siop", icon: "shop", title: "Siopau ar-lein", body: "Siopau Shopify a WooCommerce sy'n barod i dderbyn archebion, taliadau a danfon o'r diwrnod cyntaf." },
      { tag: "/ap", icon: "app", title: "Apiau gwe ac archebu", body: "Systemau archebu, cyfrifianellau dyfynbris a phyrth cwsmeriaid wedi'u siapio o gwmpas y ffordd rydych chi'n gweithio." },
      { tag: "/seo", icon: "perf", title: "SEO lleol a chwilio AI", body: "Cael eich canfod ar Google, Google Maps a chynorthwywyr AI, gyda data strwythuredig a thudalennau cyflym ym mhob gwefan.", href: "/cy/seo-lleol" },
      { tag: "/gofal", icon: "care", title: "Lletya a chynlluniau gofal", body: "Diweddariadau, copïau wrth gefn, monitro a newidiadau bach misol, am ffi sefydlog." },
      { tag: "/brand", icon: "motion", title: "Brand a symudiad", body: "Logos, dewis ffontiau a'r animeiddiadau bach sy'n gwneud i wefan deimlo'n orffenedig." },
      { tag: "/cymraeg", icon: "bilingual", title: "Cymraeg a Saesneg", body: "Gwefannau dwyieithog go iawn gyda botwm iaith ar bob tudalen, wedi'u hadeiladu ar gyfer pobl ac ar gyfer Google.", href: "/cy/gwefannau-dwyieithog" },
      { tag: "/cyngor", icon: "council", title: "Gwefannau cynghorau cymuned", body: "Gwefannau sy'n cyhoeddi popeth mae'r gyfraith yn ei ofyn gan gyngor yng Nghymru, ac sy'n hawdd i'r clerc eu diweddaru.", href: "/cy/cynghorau-cymuned" },
    ],
  },
  topics: {
    eyebrow: "Gwybodaeth",
    heading: "Gwefannau sy'n cael eu canfod",
    sub: "Mae dau beth yn penderfynu a yw gwefan yn talu ei ffordd: pa mor dda mae hi wedi'i hadeiladu, ac a all pobl ddod o hyd iddi. Rydw i'n ysgrifennu am y ddau, ar gyfer busnesau yng Ngogledd Cymru.",
    cards: [
      { href: "/cy/gwefannau", kicker: "Colofn · Adeiladu", title: "Gwefannau ar gyfer busnesau Gogledd Cymru", body: "Beth sydd ei angen ar wefan busnes bach da, faint mae'n ei gostio, sut mae'r gwaith yn mynd a sut i ddewis pwy sy'n ei hadeiladu." },
      { href: "/cy/seo-lleol", kicker: "Colofn · Cael eich canfod", title: "Cael eich canfod ar Google a chwilio AI", body: "Proffil Busnes Google, adolygiadau, y pethau sylfaenol ar y dudalen, a sut mae cynorthwywyr AI yn dewis pa fusnesau lleol i'w hargymell." },
    ],
    areasLabel: "Ardaloedd rydw i'n eu gwasanaethu",
    areasHref: "/areas",
  },
  work: {
    eyebrow: "Gwaith dethol",
    heading: "Prosiectau diweddar",
    sample: "Enghraifft",
    projects: {
      llansannan: "Gwefan cyngor ddwyieithog gyda deng mlynedd o gofnodion a golygydd hawdd i'r clerc",
      cottages: { title: "Bythynnod gwyliau", summary: "Gwefan archebu gydag argaeledd byw a blaendaliadau" },
      roaster: { title: "Rhostiwr coffi", summary: "Siop Shopify gyda thanysgrifiadau" },
      outdoor: { title: "Canolfan weithgareddau awyr agored", summary: "Archebu sesiynau gydag amserlen sy'n ystyried y tywydd" },
    },
  },
  process: {
    heading: "Sut mae prosiect yn gweithio",
    sub: "Mae'r rhan fwyaf o wefannau busnes bach yn mynd yn fyw mewn pedair i chwe wythnos. Mae prosiectau mwy yn cael eu cynllunio mewn camau pythefnos fel eich bod chi'n gweld y cynnydd.",
    steps: [
      { title: "Galwad gyntaf", body: "Rydyn ni'n trafod beth mae angen i'r wefan ei wneud, ar gyfer pwy mae hi, a sut olwg sydd ar lwyddiant.", when: "Wythnos 1" },
      { title: "Dylunio yn y porwr", body: "Rydych chi'n adolygu tudalennau go iawn ar ddolen breifat, ar eich ffôn eich hun, o'r drafft cyntaf.", when: "Wythnosau 1–3" },
      { title: "Adeiladu a phrofi", body: "Mae'r cynnwys yn mynd i mewn, ac mae pob tudalen yn cael ei phrofi am gyflymder, hygyrchedd ac ar ddyfeisiau go iawn.", when: "Wythnosau 3–5" },
      { title: "Lansio a gofalu", body: "Rydyn ni'n trefnu'r parth, y lletya a'r lansio, ac yna'n aros wrth law ar gyfer newidiadau.", when: "Wythnos 6 ymlaen" },
    ],
  },
  places: { label: "Ble rydyn ni'n gweithio", list: ["Bae Colwyn", "Llanrwst", "Llansannan", "Abergele", "Dinbych", "Dyffryn Conwy", "Llandudno", "Unrhyw le gyda Wi-Fi"] },
  contact: {
    eyebrow: "Cysylltu",
    heading: "Oes gennych chi brosiect mewn golwg?",
    lead: "Dywedwch ychydig wrthon ni amdano a byddwn ni'n ateb o fewn un diwrnod gwaith gyda'r camau nesaf a phris bras.",
    copy: "Copïo", copied: "Wedi copïo",
    name: "Enw", namePh: "Eich enw",
    email: "E-bost", emailPh: "chi@cwmni.cymru",
    type: "Math o brosiect",
    types: ["Gwefan newydd", "Gwefan cyngor cymuned", "Gwefan ddwyieithog Cymraeg / Saesneg", "Siop ar-lein", "Ap gwe neu system archebu", "Ailgynllunio gwefan bresennol", "Cael fy nghanfod ar Google", "Cynllun gofal / cymorth parhaus"],
    msg: "Am y prosiect", msgPh: "Beth mae'r busnes yn ei wneud, a beth ddylai'r wefan helpu ag ef?",
    send: "Anfon ymholiad", sending: "Yn anfon…",
    done: "Diolch. Byddwn ni mewn cysylltiad o fewn un diwrnod gwaith.",
    orEmail: "Gallwch chi e-bostio",
    instead: "yn lle hynny.",
  },
  shell: {
    home: "Hafan",
    ctaHeading: "Siaradwch â datblygwr sy'n byw yma",
    ctaBody: "Dywedwch wrtha i beth sydd ei angen arnoch chi a bydda i'n ateb o fewn un diwrnod gwaith gyda'r camau nesaf a phris bras.",
    ctaButton: "Dechrau prosiect",
    updated: "Diweddarwyd",
    minRead: "munud i'w ddarllen",
    sources: "Ffynonellau",
    inThisSection: "Yn yr adran hon",
  },
  footer: {
    tagline: "Dylunio a datblygu gwefannau",
    based: "Ym Mae Colwyn, Conwy, Gogledd Cymru",
    services: "Gwasanaethau", areas: "Ardaloedd", learn: "Gwybodaeth",
  },
};

export const dict: Record<Lang, Dict> = { en, cy };
export const t = (lang: Lang = "en") => dict[lang];

// English ↔ Welsh page pairs, used for the language switch and hreflang tags.
export const pairs: [string, string][] = [
  ["/", "/cy"],
  ["/websites", "/cy/gwefannau"],
  ["/local-seo", "/cy/seo-lleol"],
  ["/for/community-councils", "/cy/cynghorau-cymuned"],
  ["/websites/bilingual", "/cy/gwefannau-dwyieithog"],
  ["/about", "/cy/amdanaf"],
];
export const counterpart = (path: string): string | undefined => {
  const p = pairs.find(([e, c]) => e === path || c === path);
  if (!p) return undefined;
  return p[0] === path ? p[1] : p[0];
};
export const alternates = (enPath: string) => {
  const cyPath = counterpart(enPath);
  return cyPath
    ? { canonical: enPath, languages: { "en-GB": enPath, cy: cyPath, "x-default": enPath } }
    : { canonical: enPath };
};
export const alternatesCy = (cyPath: string) => {
  const enPath = counterpart(cyPath)!;
  return { canonical: cyPath, languages: { "en-GB": enPath, cy: cyPath, "x-default": enPath } };
};
