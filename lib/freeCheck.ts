import type { Block } from "@/lib/blocks";
import type { Lang } from "@/lib/i18n";

// The free local SEO check page, in English and Welsh.
// Welsh drafted for review: have a fluent speaker check before relying on it.

type FreeCheckCopy = {
  path: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  title: string;
  lead: string;
  blocks: Block[];
  form: {
    heading: string;
    intro: string;
    name: string; email: string; business: string; website: string; websitePh: string;
    town: string; townPh: string; service: string; servicePh: string;
    notes: string; notesPh: string;
    send: string; sending: string; done: string; orEmail: string; instead: string;
  };
};

export const freeCheck: Record<Lang, FreeCheckCopy> = {
  en: {
    path: "/free-seo-check",
    metaTitle: "Free local SEO check for North Wales businesses",
    description: "A free, plain-English local SEO check for businesses in North Wales. I look at your Google Business Profile, your website and your main search, then tell you what's broken, what's holding you back and what to fix first.",
    eyebrow: "Free local SEO check",
    title: "Free local SEO check for North Wales businesses",
    lead: "Tell me about your business and I'll check how you show up on Google, then email you a short, plain-English answer to three questions.",
    blocks: [
      { type: "answer", text: "Derivative Media offers a free local SEO check for businesses in North Wales. Tom Patel looks at your Google Business Profile, your website and how you appear for your main search, then emails you what's broken, what's holding you back and what to fix first." },
      { type: "h2", text: "The three questions you get answered" },
      { type: "list", items: [
        "**What's broken?** Anything stopping Google or customers from finding or trusting you: wrong details, pages Google can't read, or a site that's slow or awkward on a phone.",
        "**What's holding you back right now?** The one or two things that matter most for your main search in your town, such as your Business Profile category, your reviews or a missing service page.",
        "**What should you fix first, and what can wait?** In order, so you know where to spend your time.",
      ] },
      { type: "h2", text: "What I look at" },
      { type: "list", items: [
        "**Your Google Business Profile:** category, details, photos and reviews ([what a complete profile looks like](/local-seo/google-business-profile)).",
        "**Your main search:** how you appear when someone looks for your service in your town, on Google and Google Maps.",
        "**Your website:** speed, how it works on a phone, and whether each service and area has a clear page.",
        "**Your details across the web:** whether your name, address and phone number match everywhere they're listed.",
      ] },
      { type: "h2", text: "What it isn't" },
      { type: "p", text: "It isn't an automated report or a 40-page PDF. I check every one myself and keep it short, usually a page or less, by email. There's no obligation to work with me afterwards: if you can fix things yourself, that's great. For the background, see [how local search works](/local-seo)." },
      { type: "faq", items: [
        { q: "Is the local SEO check really free?", a: "Yes. No card details and no obligation. If you'd like help fixing what I find, I'll give you a fixed price, but that's up to you." },
        { q: "How long does it take?", a: "I aim to reply within a few working days." },
        { q: "Do I need a website?", a: "No. If you only have a Google Business Profile, I'll check that and tell you whether a website would help." },
        { q: "Which areas do you cover?", a: "Businesses across North Wales, especially Conwy and Denbighshire. See [the areas I cover](/areas)." },
      ] },
    ],
    form: {
      heading: "Request your free check",
      intro: "Takes a minute. I'll reply by email.",
      name: "Your name", email: "Email", business: "Business name",
      website: "Website (if you have one)", websitePh: "e.g. yourbusiness.co.uk",
      town: "Town", townPh: "e.g. Colwyn Bay",
      service: "Main service", servicePh: "e.g. electrician, café, B&B",
      notes: "Anything else? (optional)", notesPh: "What you'd most like to improve, or a search you want to show up for.",
      send: "Request my free check", sending: "Sending…", done: "Thanks, that's come through. I'll be in touch by email.",
      orEmail: "You can also email", instead: "instead.",
    },
  },
  cy: {
    path: "/cy/gwiriad-seo-am-ddim",
    metaTitle: "Gwiriad SEO lleol am ddim i fusnesau Gogledd Cymru",
    description: "Gwiriad SEO lleol am ddim, mewn iaith glir, i fusnesau yng Ngogledd Cymru. Rwy'n edrych ar eich Proffil Busnes Google, eich gwefan a'ch prif chwiliad, ac yn dweud wrthych beth sydd wedi torri, beth sy'n eich dal yn ôl a beth i'w drwsio gyntaf.",
    eyebrow: "Gwiriad SEO lleol am ddim",
    title: "Gwiriad SEO lleol am ddim i fusnesau Gogledd Cymru",
    lead: "Dywedwch wrthyf am eich busnes ac fe wnaf wirio sut rydych chi'n ymddangos ar Google, yna anfon ateb byr, clir i dri chwestiwn atoch drwy e-bost.",
    blocks: [
      { type: "answer", text: "Mae Derivative Media yn cynnig gwiriad SEO lleol am ddim i fusnesau yng Ngogledd Cymru. Mae Tom Patel yn edrych ar eich Proffil Busnes Google, eich gwefan a sut rydych chi'n ymddangos ar gyfer eich prif chwiliad, yna'n anfon e-bost yn dweud beth sydd wedi torri, beth sy'n eich dal yn ôl a beth i'w drwsio gyntaf." },
      { type: "h2", text: "Y tri chwestiwn y cewch ateb iddynt" },
      { type: "list", items: [
        "**Beth sydd wedi torri?** Unrhyw beth sy'n atal Google neu gwsmeriaid rhag dod o hyd i chi neu ymddiried ynoch: manylion anghywir, tudalennau na all Google eu darllen, neu wefan sy'n araf neu'n lletchwith ar ffôn.",
        "**Beth sy'n eich dal yn ôl ar hyn o bryd?** Yr un neu ddau beth sydd bwysicaf ar gyfer eich prif chwiliad yn eich tref, fel categori eich Proffil Busnes, eich adolygiadau neu dudalen wasanaeth sydd ar goll.",
        "**Beth ddylech chi ei drwsio gyntaf, a beth all aros?** Mewn trefn, fel eich bod yn gwybod ble i dreulio eich amser.",
      ] },
      { type: "h2", text: "Beth rwy'n edrych arno" },
      { type: "list", items: [
        "**Eich Proffil Busnes Google:** categori, manylion, lluniau ac adolygiadau.",
        "**Eich prif chwiliad:** sut rydych chi'n ymddangos pan fydd rhywun yn chwilio am eich gwasanaeth yn eich tref, ar Google a Google Maps.",
        "**Eich gwefan:** cyflymder, sut mae'n gweithio ar ffôn, ac a oes tudalen glir ar gyfer pob gwasanaeth ac ardal.",
        "**Eich manylion ar draws y we:** a yw eich enw, cyfeiriad a rhif ffôn yr un fath ym mhob man.",
      ] },
      { type: "h2", text: "Beth nad yw e" },
      { type: "p", text: "Nid adroddiad awtomatig na PDF 40 tudalen yw hwn. Rwy'n gwirio pob un fy hun ac yn ei gadw'n fyr, tudalen neu lai fel arfer, drwy e-bost. Does dim rhaid i chi weithio gyda fi wedyn. Am y cefndir, gweler [SEO lleol](/cy/seo-lleol)." },
      { type: "faq", items: [
        { q: "Ydy'r gwiriad SEO lleol wir am ddim?", a: "Ydy. Dim manylion cerdyn a dim ymrwymiad. Os hoffech help i drwsio'r hyn rwy'n ei ganfod, fe gewch bris sefydlog, ond chi sy'n penderfynu." },
        { q: "Pa mor hir mae'n ei gymryd?", a: "Rwy'n anelu at ateb o fewn ychydig ddyddiau gwaith." },
        { q: "Oes angen gwefan arnaf?", a: "Nac oes. Os mai dim ond Proffil Busnes Google sydd gennych, fe wnaf wirio hwnnw a dweud a fyddai gwefan yn helpu." },
      ] },
    ],
    form: {
      heading: "Gofyn am eich gwiriad am ddim",
      intro: "Mae'n cymryd munud. Fe wnaf ateb drwy e-bost.",
      name: "Eich enw", email: "E-bost", business: "Enw'r busnes",
      website: "Gwefan (os oes gennych un)", websitePh: "e.e. eichbusnes.co.uk",
      town: "Tref", townPh: "e.e. Bae Colwyn",
      service: "Prif wasanaeth", servicePh: "e.e. trydanwr, caffi, gwely a brecwast",
      notes: "Unrhyw beth arall? (dewisol)", notesPh: "Beth hoffech chi ei wella fwyaf, neu chwiliad rydych chi am ymddangos ynddo.",
      send: "Gofyn am fy ngwiriad am ddim", sending: "Yn anfon…", done: "Diolch, mae wedi cyrraedd. Fe fyddaf mewn cysylltiad drwy e-bost.",
      orEmail: "Gallwch hefyd e-bostio", instead: "yn lle hynny.",
    },
  },
};
