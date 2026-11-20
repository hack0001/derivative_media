import type { Block } from "@/lib/blocks";

// Cluster articles. Each belongs to a pillar and links up to it.
// Add new articles here; they appear automatically on their pillar page, in the footer and in the sitemap.

export type Pillar = "websites" | "local-seo" | "councils";

export type Article = {
  path: string;           // full URL path
  pillar: Pillar;
  title: string;
  short: string;          // footer / card label
  description: string;    // meta description
  updated: string;        // ISO date
  readMins: number;
  intro: string;
  body: Block[];
  sources?: { title: string; url: string }[];
};

export const pillarInfo: Record<Pillar, { name: string; href: string }> = {
  websites: { name: "Websites", href: "/websites" },
  "local-seo": { name: "Local SEO", href: "/local-seo" },
  councils: { name: "Community councils", href: "/for/community-councils" },
};

export const articles: Article[] = [
  {
    path: "/websites/website-builder-or-web-designer",
    pillar: "websites",
    title: "Website builder or web designer? An honest guide for small businesses",
    short: "Website builder or web designer?",
    description: "When Wix or Squarespace is enough for a small business, when it pays to hire a web designer, and what each really costs over three years. An honest comparison from a North Wales web developer.",
    updated: "2026-11-17",
    readMins: 6,
    intro: "I build websites for a living, so you might expect me to say you always need a web designer. You don't. Plenty of small businesses are well served by a website builder. Here's how to tell which camp you're in.",
    body: [
      { type: "answer", text: "A website builder such as Wix or Squarespace suits a small business that needs a simple site, has time to build and update it, and isn't relying on Google for new customers. A web designer is worth paying for when the site has to win work from search, needs to be in Welsh and English, or has to do something a template can't." },
      { type: "h2", text: "What a website builder gets you" },
      { type: "p", text: "Builders give you a template, an editor and hosting for a monthly fee. In the UK, Wix's plans run from £9 to £119 a month and Squarespace's from £12 to £79 a month when billed annually, with most small businesses on a plan around £16 to £29 a month." },
      { type: "list", items: [
        "**Low upfront cost.** You can have something live this weekend.",
        "**You're in control.** You change text and photos yourself, whenever you like.",
        "**Hosting, security and updates are handled for you.**",
      ] },
      { type: "h2", text: "Where builders fall short" },
      { type: "list", items: [
        "**Your time is the hidden cost.** Writing, choosing photos, setting it up for Google: expect several evenings, and more if it's new to you.",
        "**Looking good isn't the same as getting found.** A template won't write page titles, service pages or area pages that match what local customers search for. That part is still up to you.",
        "**Welsh and English is awkward.** Most builders weren't made for a full bilingual site, so the Welsh version often ends up as an afterthought or a separate copy to maintain.",
        "**You rent, you don't own.** Stop paying and the site goes. Moving to another platform usually means rebuilding.",
        "**Templates set the limits.** Booking rules, council document archives or anything unusual can mean bolting on paid apps.",
      ] },
      { type: "h2", text: "What a web designer gets you" },
      { type: "list", items: [
        "**A site built around how your customers search,** with a page for each service and area you cover, so Google has something to rank.",
        "**Someone else's time, not yours.** You supply the knowledge of your business; the designer turns it into pages.",
        "**Welsh and English done properly,** with each page linked to its twin and set up for both languages in Google.",
        "**Tailored to your needs, not restricted by a template,** including features a builder would charge extra for.",
      ] },
      { type: "p", text: "The trade-off is a bigger upfront cost and, unless the site is set up for you to edit, relying on someone for changes. Ask any designer how you'll update the site yourself before you agree to anything." },
      { type: "h2", text: "How to decide" },
      { type: "p", text: "**A builder is probably enough if:**" },
      { type: "list", items: [
        "most of your work comes from word of mouth, Facebook or regulars, and the site is mainly a place to check your details",
        "you enjoy doing it yourself and have the time",
        "you only need a few pages in one language",
      ] },
      { type: "p", text: "**A web designer is probably worth it if:**" },
      { type: "list", items: [
        "you want new customers to find you on Google, for searches like your service plus your town",
        "one extra job a month would cover the cost (common for trades, accommodation and professional services)",
        "you need Welsh and English, or you're a council with legal publishing duties",
        "you've tried a builder and the site isn't bringing anything in",
      ] },
      { type: "note", text: "Not sure which camp you're in? Ask for a [free local SEO check](/free-seo-check). I'll look at how you show up on Google now and tell you honestly whether a new website would make a difference. Sometimes the answer is just to fix your [Google Business Profile](/local-seo/google-business-profile)." },
      { type: "faq", items: [
        { q: "Is Wix or Squarespace bad for SEO?", a: "No. Both can rank on Google. What matters more is the content: a page for each service and area, clear page titles and a complete Google Business Profile. Builders give you the tools; they don't do that work for you." },
        { q: "Can I start with a builder and move to a web designer later?", a: "Yes, and many businesses do. Moving usually means rebuilding rather than transferring, so keep your own copies of your text and photos, and make sure you own your domain name." },
        { q: "How much does a website builder cost per year?", a: "On annual billing in the UK, roughly £108 to £348 a year for most small-business plans on Wix or Squarespace, plus your domain name and any paid add-ons." },
      ] },
    ],
    sources: [
      { title: "Wix pricing UK (Expertsure, verified July 2026)", url: "https://www.expertsure.com/uk/web-design/wix-pricing-uk/" },
      { title: "Squarespace pricing 2026 (Startups.co.uk, updated October 2026)", url: "https://startups.co.uk/websites/builders/squarespace-pricing/" },
    ],
  },
  {
    path: "/local-seo/google-business-profile",
    pillar: "local-seo",
    title: "Getting your North Wales business into Google's map results",
    short: "Google Business Profile checklist",
    description: "A practical checklist for North Wales businesses to appear in Google Maps and local search: Business Profile setup, reviews, and making your website match.",
    updated: "2026-10-27",
    readMins: 6,
    intro: "When someone in Colwyn Bay searches for a plumber, a café or a web designer, Google usually shows a map with three businesses before anything else. Getting into those three is the biggest single win for most local businesses.",
    body: [
      { type: "answer", text: "To appear in Google's map results: claim and fully complete your Google Business Profile, keep your name, address and phone number identical everywhere, collect reviews steadily, and make sure your website clearly says what you do and where." },
      { type: "h2", text: "1. Claim and complete your Business Profile" },
      { type: "check", items: [
        "Claim your profile at business.google.com and complete verification.",
        "Choose the most specific primary category you can, then add a few accurate secondary ones.",
        "If customers don't visit you, set up as a service-area business and list the towns you cover instead of showing your home address.",
        "Add opening hours, including holiday hours, and keep them current.",
        "Write a clear description of what you do and where, in plain language.",
      ] },
      { type: "h2", text: "2. Keep your details identical everywhere" },
      { type: "p", text: "Your business name, address and phone number should match on your website, your Business Profile, Facebook, Yell, Bing Places, Apple Business Connect and any other directory. Small differences like 'Rd' and 'Road' are fine; different phone numbers or old addresses are not." },
      { type: "h2", text: "3. Reviews, steadily" },
      { type: "p", text: "Ask every happy customer for a review, and reply to every review, good or bad. A steady trickle over months does more than a burst in one week. Google gives you a short review link in your profile that you can text or email." },
      { type: "h2", text: "4. Make your website back it up" },
      { type: "list", items: [
        "A page for each main service, saying clearly what you do and where.",
        "Your town names in page titles and headings where they naturally belong.",
        "Fast pages on a phone. Slow sites lose visitors before they've read a word.",
        "Structured data describing your business, so Google can connect your site and your profile.",
      ] },
      { type: "h2", text: "5. Keep it alive" },
      { type: "p", text: "Add new photos, post updates or offers, and answer questions people ask on your profile. Active profiles tend to do better than ones set up once and left." },
      { type: "note", text: "Google says local results are based mainly on relevance, distance and prominence. You can't change how far you are from the person searching. Everything else on this list you can." },
    ],
    sources: [
      { title: "Tips to improve your local ranking on Google (Google Business Profile Help)", url: "https://support.google.com/business/answer/7091" },
    ],
  },
  {
    path: "/local-seo/ai-search",
    pillar: "local-seo",
    title: "How to get your business recommended by AI search",
    short: "AI search for local businesses",
    description: "How ChatGPT, Google's AI Overviews, Copilot and Perplexity choose which local businesses to mention, and what North Wales businesses can do about it.",
    updated: "2026-10-27",
    readMins: 7,
    intro: "More people now ask an AI assistant \"who's a good plumber near Abergele?\" instead of scrolling through search results. The good news for small businesses: most of what helps you there is the same groundwork that helps on Google.",
    body: [
      { type: "answer", text: "AI search tools recommend businesses they can find clear, consistent and well-supported information about. Make your website state plainly what you do and where, keep your details identical across Google, Bing and Apple, earn reviews and mentions on other local sites, and let the AI search crawlers read your site." },
      { type: "h2", text: "Where AI answers come from" },
      { type: "p", text: "AI assistants that search the web don't invent local businesses. They look things up, then summarise. Google's AI Overviews draw on Google's own search index. ChatGPT's search uses third-party search providers, with Bing's index a major source, alongside its own crawler. Perplexity and others run their own crawlers too. So if you're invisible to Google and Bing, you're largely invisible to AI search as well." },
      { type: "h2", text: "What helps you get mentioned" },
      { type: "h3", text: "1. Say it plainly, near the top" },
      { type: "p", text: "AI tools pull short, factual statements. Each important page should open with one or two sentences that answer the obvious question directly: what you do, where, and for whom. Detail can follow." },
      { type: "h3", text: "2. Be consistent everywhere" },
      { type: "p", text: "Your name, address, phone number, services and areas should match across your website, Google Business Profile, **Bing Places**, **Apple Business Connect**, Facebook and directories. Conflicting details make an AI less confident about recommending you." },
      { type: "h3", text: "3. Be talked about" },
      { type: "p", text: "AI tools lean heavily on what other sources say about you: reviews, local news, directories, community and council websites, partners' sites. A handful of genuine local mentions is worth more than any amount of keyword tweaking on your own pages." },
      { type: "h3", text: "4. Use structured data" },
      { type: "p", text: "Structured data (schema) on your site labels the facts: business type, location, areas served, opening hours, FAQs. It gives both search engines and AI tools clean information to work with. See [how I build websites](/websites) for what I include by default." },
      { type: "h3", text: "5. Let the right crawlers in" },
      { type: "p", text: "Check your robots.txt doesn't block the crawlers AI search tools use, such as OAI-SearchBot (ChatGPT search), PerplexityBot and Bingbot. Some businesses choose to block crawlers used only for AI training; that's a separate decision and doesn't stop you appearing in AI search." },
      { type: "h3", text: "6. Make pages readable without JavaScript" },
      { type: "p", text: "Many AI crawlers read the raw HTML of a page and don't run JavaScript. Sites that only show their text after scripts load can look almost empty to them. Pre-built, server-rendered pages avoid the problem." },
      { type: "h2", text: "How to check where you stand" },
      { type: "steps", items: [
        "Ask ChatGPT, Perplexity, Copilot and Google (in AI mode) the questions your customers would ask, such as \"best café in Rhos-on-Sea\" or \"who builds bilingual websites in the Conwy Valley\".",
        "Note whether you're mentioned, and which sources the answer cites.",
        "Look at the businesses that are mentioned: where are they listed that you aren't?",
        "Repeat monthly. Answers vary between runs, so look for trends rather than single results.",
      ] },
      { type: "note", text: "You may see advice to add an llms.txt file for AI tools. It's cheap to add, but there's no good evidence yet that the major AI search tools use it, so don't prioritise it over the steps above." },
      { type: "faq", items: [
        { q: "Is AI search replacing Google for local businesses?", a: "Not replacing, but adding to it. Most local customers still use Google and Google Maps. The same groundwork serves both, so you don't need a separate strategy." },
        { q: "Can I pay to be recommended by ChatGPT?", a: "Not in the way you can buy Google Ads. Recommendations come from what the tools can find and trust about you, which is why consistent details and genuine mentions matter." },
      ] },
    ],
    sources: [
      { title: "Overview of OpenAI crawlers (OpenAI)", url: "https://platform.openai.com/docs/bots" },
      { title: "AI features and your website (Google Search Central)", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    ],
  },
  {
    path: "/for/community-councils/website-requirements",
    pillar: "councils",
    title: "What a Welsh community council website must include",
    short: "Council website checklist",
    description: "A plain-English checklist of what town and community councils in Wales must publish on their website, with the law behind each item.",
    updated: "2026-11-17",
    readMins: 7,
    intro: "Every town and community council in Wales has to publish certain information online. The rules are spread across several Acts, so here they are in one place, with a checklist you can run against your own council's site in ten minutes.",
    body: [
      { type: "answer", text: "A Welsh community council website must publish the council's contact details, each councillor's details, meeting notices at least three clear days ahead, minutes, annual audited accounts, public notices, the register of members' interests, the annual report and the councillor training plan, plus an accessibility statement." },
      { type: "h2", text: "Why this matters" },
      { type: "p", text: "Section 55 of the Local Government (Democracy) (Wales) Act 2013 requires community councils to publish specific information electronically, and Welsh Government has issued statutory guidance that councils must have regard to. The Local Government and Elections (Wales) Act 2021 updated that guidance. In practice, your website is now part of how the council meets its legal duties." },
      { type: "h2", text: "The checklist" },
      { type: "check", items: [
        "Council contact details: telephone, postal address and email, plus the clerk's details if different. Guidance recommends a generic council email rather than a personal one.",
        "Every councillor's name, how to contact them, any party affiliation, offices held, committee memberships and ward. Co-opted members should be identified.",
        "Notices of meetings, published at least three clear days before, with the time, how to attend, whether the public can attend, and the business to be discussed.",
        "Minutes of meetings, and as far as reasonably practicable the documents referred to in them.",
        "Annual audited accounts.",
        "Public notices.",
        "The register of members' interests.",
        "The council's annual report on its priorities, activities and achievements, published as soon as practicable after each financial year (section 52 of the 2021 Act).",
        "The training plan for councillors and staff, renewed within three months of each ordinary election (section 67 of the 2021 Act).",
        "A way for people to give the council notices electronically, such as a published email address.",
        "An accessibility statement, required for public sector websites, including councils, by the Public Sector Bodies Accessibility Regulations 2018.",
      ] },
      { type: "p", text: "Want to check your own council's site against this list in a couple of minutes? Use the free [council website checker](/for/community-councils/website-checker)." },
      { type: "note", text: "If your council has a Welsh Language Scheme and normally produces material bilingually, the guidance says the same applies to what you publish online. See [bilingual websites](/websites/bilingual)." },
      { type: "h2", text: "What good looks like" },
      { type: "list", items: [
        "Agendas and minutes listed newest first, with older years archived but easy to reach from the front page.",
        "Documents published as accessible web pages or properly tagged PDFs, not scans of paper.",
        "Content that meets WCAG 2.2 AA, the accessibility standard used across the public sector.",
        "A site the clerk can update in minutes, so notices go up on time.",
        "The council's own name finds the site on Google. Residents search for it; they rarely type the address.",
      ] },
      { type: "h2", text: "A quick test for your own site" },
      { type: "p", text: "Search Google for your council's name. Does your website come up first? Open it on a phone: can you find the next meeting date in two taps? Is the latest set of minutes there? If any of those fail, residents are struggling too." },
      { type: "p", text: "I build [community council websites](/for/community-councils) that cover every item above and are simple for clerks to keep up to date, including the [Llansannan Community Council site](/work/llansannan-community-council). If you'd like a free check of your current site against this list, get in touch." },
    ],
    sources: [
      { title: "Access to information: guidance for community and town councils (Welsh Government)", url: "https://www.gov.wales/access-information-guidance-community-and-town-councils-html" },
      { title: "Local Government and Elections (Wales) Act 2021", url: "https://www.legislation.gov.uk/asc/2021/1" },
      { title: "Section 52: annual reports by community councils", url: "https://www.legislation.gov.uk/asc/2021/1/section/52" },
      { title: "Section 67: training plans", url: "https://www.legislation.gov.uk/asc/2021/1/section/67" },
      { title: "Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018", url: "https://www.legislation.gov.uk/uksi/2018/952/contents/made" },
    ],
  },
];

export const articlesFor = (p: Pillar) => articles.filter((a) => a.pillar === p);
