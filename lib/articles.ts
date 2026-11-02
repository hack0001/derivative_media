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
    updated: "2026-10-27",
    readMins: 6,
    intro: "Every town and community council in Wales has to publish certain information online. The rules are spread across several Acts, so here they are in one place, with a checklist you can run against your own council's site in ten minutes.",
    body: [
      { type: "answer", text: "A Welsh community council website must publish the council's contact details, each councillor's details, meeting notices at least three clear days ahead, minutes, annual audited accounts, public notices and the register of members' interests." },
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
      ] },
      { type: "note", text: "If your council has a Welsh Language Scheme and normally produces material bilingually, the guidance says the same applies to what you publish online. See [bilingual websites](/websites/bilingual)." },
      { type: "h2", text: "What good looks like" },
      { type: "list", items: [
        "Agendas and minutes listed newest first, with older years archived but easy to reach from the front page.",
        "Documents published as accessible web pages or properly tagged PDFs, not scans of paper.",
        "A clear accessibility statement. Many councils aim for WCAG 2.2 AA, the standard used across the public sector.",
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
    ],
  },
];

export const articlesFor = (p: Pillar) => articles.filter((a) => a.pillar === p);
