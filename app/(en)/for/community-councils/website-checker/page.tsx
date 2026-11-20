import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import CouncilChecker from "@/components/CouncilChecker";
import { checklistSources, required } from "@/lib/councilChecklist";
import { site } from "@/lib/content";

const path = "/for/community-councils/website-checker";
const title = "Free council website checker for Welsh town and community councils";
const description = `Check your council's website against the ${required.length} things Welsh town and community councils must publish online, plus good practice. Free, takes two minutes, nothing is sent anywhere.`;

export const metadata: Metadata = {
  title: "Council website checker (Wales)",
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, locale: "en_GB" },
};

const tool = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Council website checker",
  url: `${site.url}${path}`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
  description,
  creator: { "@id": `${site.url}/#business` },
};

export default function Page() {
  return (
    <PageShell eyebrow="Free tool" title="Council website checker"
      lead={`Is your town or community council's website meeting the law? Answer ${required.length + 7} quick questions to see which of the ${required.length} legal requirements you meet and what to fix first. It takes about two minutes and nothing you enter is sent anywhere.`}
      crumbs={[{ name: "Community councils", href: "/for/community-councils" }, { name: "Website checker", href: path }]} schema={[tool]}>
      <section className="prose" style={{ maxWidth: 820 }}>
        <p className="answer">Welsh town and community councils must publish their contact details, councillors, meeting notices and agendas, minutes, audited accounts, public notices, the register of interests, an annual report, a training plan and an accessibility statement online. This checker covers each one.</p>
        <CouncilChecker />
        <h2>About this checklist</h2>
        <p>The required items come from Welsh Government&apos;s guidance on access to information for community and town councils and the Acts behind it. For the detail on each one, read <Link href="/for/community-councils/website-requirements">what a Welsh community council website must include</Link>. This is a plain-English guide, not legal advice: if in doubt, check with One Voice Wales or your principal council.</p>
        <h3>Sources</h3>
        <ul>{checklistSources.map((s) => <li key={s.url}><a href={s.url} rel="noopener">{s.title}</a></li>)}</ul>
      </section>
    </PageShell>
  );
}
