import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case study: Llansannan Community Council website",
  description: "How Derivative Media built a bilingual Welsh and English website for Llansannan Community Council: ten years of minutes online, a clerk-friendly editor, search, and a WCAG 2.2 accessibility statement.",
  alternates: { canonical: "/work/llansannan-community-council" },
};

export default function Llansannan() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Llansannan Community Council website",
    url: "https://llansannan-cc.gov.wales",
    inLanguage: ["en", "cy"],
    creator: { "@id": `${site.url}/#business` },
    about: { "@type": "GovernmentOrganization", name: "Llansannan Community Council", alternateName: "Cyngor Cymuned Llansannan", areaServed: "Llansannan, Conwy" },
  };
  return (
    <PageShell
      eyebrow="Case study · Community council"
      title="Llansannan Community Council"
      lead="A bilingual council website that puts ten years of meetings, minutes and council documents in one searchable place, with an editor the clerk can use without any technical help."
      crumbs={[{ name: "Community councils", href: "/for/community-councils" }, { name: "Llansannan", href: "/work/llansannan-community-council" }]}
      schema={[schema]}
    >
      <section className="split">
        <div className="prose">
          <p className="answer">I built the Llansannan Community Council website, live at <a href="https://llansannan-cc.gov.wales" rel="noopener">llansannan-cc.gov.wales</a>. It is fully bilingual, publishes everything a Welsh council website must include, holds around 190 minutes and agendas going back to 2016, and lets the clerk publish new documents through a simple online editor.</p>

          <h2>The brief</h2>
          <p>Llansannan is a Welsh-speaking rural community on the edge of Mynydd Hiraethog in Conwy county. The council needed a website that met its legal duties to publish information, worked properly in Welsh and English, and could be kept up to date by the clerk without relying on a developer for every agenda.</p>

          <h2>What I built</h2>
          <ul>
            <li><strong>Welsh and English throughout.</strong> Every page in both languages, a language switch on every page, and hreflang tags so Google shows residents the right version.</li>
            <li><strong>Meetings, agendas and minutes.</strong> The next meeting is worked out automatically from the calendar, and around 190 minutes and agendas from 2016 onwards are organised by year.</li>
            <li><strong>Everything the law requires.</strong> Councillor profiles with wards and roles, the register of members&apos; interests, councillor payments, the annual return, financial regulations, standing orders and policies. See the <Link href="/for/community-councils/website-requirements">council website checklist</Link>.</li>
            <li><strong>An editor for the clerk.</strong> A Decap CMS editor at /admin covering meetings, minutes, agendas, events, news, documents, councillors and contact details. It can&apos;t touch the site&apos;s design, so nothing can be broken by accident.</li>
            <li><strong>Search and a ward map.</strong> Full-text search across the site, and an interactive map of the council&apos;s wards.</li>
            <li><strong>Accessibility.</strong> A bilingual accessibility statement, with the site tested against WCAG 2.2 AA using automated tools and manual checks.</li>
            <li><strong>Village pages.</strong> Llansannan&apos;s history, a local business directory, an A to Z and a photo gallery, so the site serves the whole community, not just council business.</li>
          </ul>

          <h2>How it&apos;s built</h2>
          <p>The site is built with Astro as fast, pre-built pages and hosted on Cloudflare, so it loads quickly even on rural connections and costs very little to run. Content lives in the council&apos;s own GitHub organisation, so the council owns its site outright and access survives any change of clerk or developer.</p>

          <h2>The result</h2>
          <p>The council now has one official home online at its .gov.wales address, with the Welsh .llyw.cymru address pointing to it. Residents can find the next meeting, read any set of minutes from the last decade and search the whole site in either language, and the clerk publishes new documents in a couple of minutes.</p>

          <p>Building a site for your council? See <Link href="/for/community-councils">community council websites</Link>, or <Link href="/#contact">ask me for a free check</Link> of your current site.</p>
        </div>
        <aside className="side-card">
          <p className="eyebrow">At a glance</p>
          <ul className="ticks">
            <li>Client: Llansannan Community Council</li>
            <li>Area: Llansannan, Conwy county</li>
            <li>Website: <a href="https://llansannan-cc.gov.wales" rel="noopener">llansannan-cc.gov.wales</a></li>
            <li>Languages: Welsh and English</li>
            <li>Built with: Astro, Decap CMS, Cloudflare</li>
            <li>Documents online: about 190, from 2016</li>
            <li>Accessibility: tested against WCAG 2.2 AA</li>
          </ul>
        </aside>
      </section>
    </PageShell>
  );
}
