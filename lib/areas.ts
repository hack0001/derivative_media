import type { Block } from "@/lib/blocks";

// Full area pages at /areas/[slug]. Each has content specific to that place.
// Rule: only add a full page when you can write something genuinely local, ideally with a project there.
// Everywhere else goes in `otherAreas` on the /areas page until it earns a page of its own.

export type Area = {
  slug: string;
  name: string;           // short name for links
  title: string;          // H1
  metaTitle: string;
  description: string;
  lead: string;
  who: string[];
  blocks: Block[];
  nearby: string[];       // slugs
};

export const areas: Area[] = [
  {
    slug: "colwyn-bay",
    name: "Colwyn Bay",
    title: "Web design in Colwyn Bay",
    metaTitle: "Web design Colwyn Bay",
    description: "Hand-coded websites for Colwyn Bay, Rhos-on-Sea and Old Colwyn businesses, from a web developer based in the Bay. Fast, mobile-first and set up to be found on Google.",
    lead: "Derivative Media is based in Colwyn Bay. I build fast, hand-coded websites for businesses along the Bay, from Old Colwyn to Rhos-on-Sea, and I'm close enough to meet you over a coffee on the prom.",
    who: ["Cafés, restaurants and takeaways", "Trades and home services covering the coast", "Shops on Station Road and in Rhos-on-Sea", "Accountants, solicitors and professional firms", "Clubs, charities and community groups"],
    blocks: [
      { type: "answer", text: "Derivative Media is a web design and development studio based in Colwyn Bay, run by Tom Patel. I build hand-coded websites for local businesses and set them up to be found on Google and Google Maps." },
      { type: "h2", text: "Building for the Bay" },
      { type: "p", text: "Colwyn Bay has a mix of high-street shops, cafés along the promenade, trades who cover the whole coast, and professional firms serving the wider county. Most of their customers find them the same way: a search on a phone, a look at Google Maps, and a quick check of the website before they call." },
      { type: "p", text: "That last step is where a lot of local sites lose the customer. A slow page, a menu that doesn't work on a phone, or opening hours that are two years out of date sends people straight back to the search results. I build sites that load in about a second and make the next step obvious." },
      { type: "h2", text: "What I focus on for Bay businesses" },
      { type: "list", items: [
        "**Found on Google Maps.** Your site and your [Google Business Profile](/local-seo/google-business-profile) should tell the same story: same name, address, hours and services.",
        "**Built for phones first.** Every page is designed at phone size first, then scaled up, and tested on real devices.",
        "**Easy to keep current.** Menus, prices and hours change. You can update them yourself, or I handle it on a monthly care plan.",
      ] },
      { type: "faq", items: [
        { q: "Do you meet clients in person in Colwyn Bay?", a: "Yes. I'm based in Colwyn Bay and happy to meet at your premises or somewhere local. Most of a project can also run by phone and email if that suits you." },
        { q: "How long does a website take?", a: "A typical small business site takes four to six weeks from first call to going live. [See how a build works](/websites)." },
        { q: "Can you take over my existing website?", a: "Usually, yes. I'll review your current site, tell you honestly whether it's worth keeping, and either improve it or rebuild it and handle the move." },
      ] },
    ],
    nearby: ["abergele", "conwy-valley"],
  },
  {
    slug: "conwy-valley",
    name: "Llanrwst & Conwy Valley",
    title: "Web design in Llanrwst and the Conwy Valley",
    metaTitle: "Web design Llanrwst & the Conwy Valley",
    description: "Bilingual websites for Llanrwst, Trefriw, Betws-y-Coed and Conwy Valley businesses: outdoor activities, accommodation, food producers and community councils.",
    lead: "Llanrwst sits at the heart of the Conwy Valley, on the road to Betws-y-Coed and Eryri. I build websites for the valley's businesses and councils, in Welsh and English, that reach visitors and locals alike.",
    who: ["Outdoor activity providers and guides", "B&Bs, bunkhouses and holiday lets", "Cafés, pubs and food producers", "Farms and rural businesses", "Community councils and local groups"],
    blocks: [
      { type: "answer", text: "Derivative Media builds bilingual Welsh and English websites for businesses and community councils in Llanrwst and the Conwy Valley, designed to load quickly on rural connections and to be found on Google and AI search." },
      { type: "h2", text: "A Welsh-speaking valley on the visitor trail" },
      { type: "p", text: "The Conwy Valley has a strong Welsh-speaking community and a steady stream of walkers, climbers and day-trippers heading for Eryri. Businesses here often need to speak to both, which makes a [properly bilingual website](/websites/bilingual) more than a nice extra." },
      { type: "p", text: "Outdoor and accommodation businesses also depend on good information: routes, availability, what to bring, what happens if the weather turns. Clear, well-structured pages help visitors plan and help Google match you to what they're searching for." },
      { type: "h2", text: "What I focus on in the valley" },
      { type: "list", items: [
        "**Properly bilingual.** Both languages on every page, with a language switch that keeps your place.",
        "**Bookings and enquiries.** Simple booking or enquiry forms for activities and stays, with the details visitors need up front.",
        "**Fast on weak signal.** Light pages that load on rural mobile signal, because your customers aren't always on Wi-Fi.",
        "**Less competition.** Fewer web businesses focus on the valley, so a well-built site can stand out on Google relatively quickly. See [how local search works](/local-seo).",
      ] },
      { type: "faq", items: [
        { q: "Do you write the Welsh content?", a: "I build the bilingual structure and draft Welsh where helpful, and I always recommend a fluent speaker or translator checks public-facing pages." },
        { q: "Do you build community council websites in the valley?", a: "Yes. I build council sites that publish everything Welsh law requires. See [community council websites](/for/community-councils)." },
        { q: "Will my site work on poor mobile signal?", a: "Yes. I keep pages light and fast, which matters a lot in rural areas and helps with Google rankings too." },
      ] },
    ],
    nearby: ["llansannan", "colwyn-bay"],
  },
  {
    slug: "llansannan",
    name: "Llansannan & Hiraethog",
    title: "Web design in Llansannan and the Hiraethog villages",
    metaTitle: "Web design Llansannan & Hiraethog",
    description: "Websites for Llansannan, Llangernyw, Llanfair Talhaiarn, Llannefydd and the Hiraethog villages: community councils, village halls, farms and rural businesses, in Welsh and English.",
    lead: "My first project was the website for Llansannan Community Council. I build websites for the villages around Mynydd Hiraethog: councils, halls, chapels, farms and small rural businesses, in Welsh and English.",
    who: ["Community councils", "Village halls and community groups", "Farms, food producers and farm shops", "Holiday lets and rural accommodation", "Local trades serving the villages"],
    blocks: [
      { type: "answer", text: "Derivative Media built the Llansannan Community Council website and builds bilingual websites for community councils, groups and rural businesses in Llansannan and the surrounding Hiraethog villages." },
      { type: "h2", text: "Websites for village life" },
      { type: "p", text: "The villages around Hiraethog, including Llansannan, Llangernyw, Llanfair Talhaiarn, Llannefydd and Bylchau, are close-knit, largely Welsh-speaking, and spread across a wide rural area. Information that used to go on a noticeboard outside the hall now needs to be online too: council meetings, hall bookings, events, opening times, who to call." },
      { type: "p", text: "Village organisations rarely have a web specialist, so the site needs to be simple to keep up to date. That's how I build them: a clerk or volunteer can post an agenda, an event or a notice in a couple of minutes." },
      { type: "h2", text: "Recent work: Llansannan Community Council" },
      { type: "p", text: "I built the bilingual website for Llansannan Community Council at llansannan-cc.gov.wales: around 190 minutes and agendas going back to 2016, councillor and ward pages, search, and an editor the clerk uses to publish new documents in minutes. [Read the case study](/work/llansannan-community-council)." },
      { type: "h2", text: "What I focus on for the villages" },
      { type: "list", items: [
        "**Welsh first where it matters.** Proper [bilingual websites](/websites/bilingual), not an English site with a translate button.",
        "**Easy for volunteers.** Simple editing and a short written guide, so the site doesn't depend on one person.",
        "**Light and fast.** Built for rural broadband and weak mobile signal.",
        "**Councils covered.** Everything a [Welsh community council website must publish](/for/community-councils/website-requirements).",
      ] },
      { type: "faq", items: [
        { q: "Are you local to Llansannan?", a: "I'm based in Colwyn Bay, about half an hour away, and I've already worked with Llansannan Community Council. I'm happy to come out to meet you." },
        { q: "Our community council has a very small budget. Can you help?", a: "Yes. I give a fixed price up front, sized to a community council's budget, and the yearly care plan is optional." },
      ] },
    ],
    nearby: ["conwy-valley", "denbigh"],
  },
  {
    slug: "abergele",
    name: "Abergele",
    title: "Web design in Abergele",
    metaTitle: "Web design Abergele",
    description: "Websites for Abergele, Pensarn, Towyn and Kinmel Bay businesses: trades, holiday parks, shops and services. Fast, local and hand-coded by a Colwyn Bay developer.",
    lead: "From the market town to the caravan parks along the coast at Pensarn, Towyn and Kinmel Bay, Abergele businesses serve both locals and holidaymakers. I build websites that work for both.",
    who: ["Trades: builders, electricians, plumbers, landscapers", "Holiday parks and seasonal businesses", "Shops and services in the town centre", "Food and drink", "Clubs and community groups"],
    blocks: [
      { type: "answer", text: "Derivative Media builds fast, hand-coded websites for trades, shops and seasonal businesses in Abergele, Pensarn, Towyn and Kinmel Bay, set up to turn local searches into calls." },
      { type: "h2", text: "Locals and holidaymakers" },
      { type: "p", text: "Abergele's businesses often have two audiences: people who live here year-round, and visitors staying on the coast for a week or two each summer. The first group wants reliability and reviews; the second wants opening hours, directions and a phone number, fast." },
      { type: "p", text: "Trades in particular get much of their work from searches like \"electrician near me\". A quick site with clear service areas, real photos of your work and an obvious phone button turns those searches into calls." },
      { type: "h2", text: "What I focus on for Abergele businesses" },
      { type: "list", items: [
        "**Calls, not just clicks.** Tap-to-call buttons, clear service areas and short quote forms.",
        "**Show your work.** Galleries of real jobs, before-and-afters and reviews.",
        "**Seasonal pages.** Summer hours, events and offers that are easy to switch on and off.",
      ] },
      { type: "faq", items: [
        { q: "I'm a sole trader. Is a website worth it?", a: "For most trades, yes. A simple, fast site with your services, area and reviews often pays for itself with a handful of jobs, and backs up your [Google Business Profile](/local-seo/google-business-profile)." },
        { q: "Can you help with my Google Business Profile too?", a: "Yes. I can set it up or tidy it, make sure it matches your website, and show you how to get more reviews." },
      ] },
    ],
    nearby: ["colwyn-bay", "denbigh"],
  },
  {
    slug: "denbigh",
    name: "Denbigh",
    title: "Web design in Denbigh and the Vale of Clwyd",
    metaTitle: "Web design Denbigh & the Vale of Clwyd",
    description: "Websites for Denbigh and Vale of Clwyd businesses: independent shops, food producers, farms, trades and community groups. Hand-coded and bilingual where needed.",
    lead: "Denbigh's independent high street and the farms and food producers of the Vale of Clwyd deserve websites as good as what they make. I build them by hand, just over the hill from Llansannan.",
    who: ["Independent shops on the high street", "Food producers, farm shops and markets", "Farms and agricultural services", "Trades across the Vale", "Clubs, chapels and community groups"],
    blocks: [
      { type: "answer", text: "Derivative Media builds hand-coded, bilingual-ready websites for independent shops, food producers, farms and trades in Denbigh and the Vale of Clwyd." },
      { type: "h2", text: "A market town and a farming vale" },
      { type: "p", text: "Denbigh is a market town with a castle on the hill and a high street of independent businesses, surrounded by the farms and villages of the Vale of Clwyd. Many businesses here sell to people who already know them, but the next customer still checks online first." },
      { type: "p", text: "For food producers and farm shops, a website can do more than list opening hours: it can take orders for collection, explain where the produce comes from and show up when someone searches for local food in the Vale." },
      { type: "h2", text: "What I focus on for Denbigh businesses" },
      { type: "list", items: [
        "**Tell your story.** Clean layouts that put your products, people and history first.",
        "**Simple ordering.** Click-and-collect or small online shops that are easy to run alongside the day job.",
        "**Found locally.** Pages and a [Business Profile](/local-seo/google-business-profile) set up for searches across the Vale, not just the town.",
      ] },
      { type: "faq", items: [
        { q: "Can you add online ordering to my website?", a: "Yes. From simple click-and-collect to a full online shop, sized to how much time you have to run it." },
        { q: "Do you work in Denbighshire as well as Conwy?", a: "Yes. I'm based in Colwyn Bay and work across both counties and beyond." },
      ] },
    ],
    nearby: ["llansannan", "abergele"],
  },
];

// Places covered without a full page yet. Promote one to a full area page when there's real local work to show.
export const otherAreas: { name: string; note: string }[] = [
  { name: "Llandudno", note: "Hotels, guest houses, attractions and the shops of Mostyn Street." },
  { name: "Rhos-on-Sea & Old Colwyn", note: "Covered from my base in Colwyn Bay, minutes away." },
  { name: "Conwy", note: "Independent shops, cafés and heritage tourism in the walled town." },
  { name: "Llandudno Junction & Deganwy", note: "Offices, trades and services along the estuary." },
  { name: "Llanfairfechan & Penmaenmawr", note: "Coastal villages with active town councils and small businesses." },
  { name: "Betws-y-Coed & Trefriw", note: "Outdoor and accommodation businesses at the gateway to Eryri." },
  { name: "Towyn & Kinmel Bay", note: "Holiday parks and seasonal businesses along the coast." },
  { name: "Rhyl & Prestatyn", note: "Seaside towns with busy trades, hospitality and retail." },
  { name: "St Asaph & Ruthin", note: "Market and cathedral towns of the Vale of Clwyd." },
  { name: "Bangor & Anglesey", note: "Remote projects and the occasional site visit." },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
