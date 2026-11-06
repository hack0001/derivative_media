import PageShell from "@/components/PageShell";
import { Blocks } from "@/components/Blocks";
import FreeCheckForm from "@/components/FreeCheckForm";
import { faqSchema } from "@/lib/blocks";
import { freeCheck } from "@/lib/freeCheck";
import { site } from "@/lib/content";
import type { Lang } from "@/lib/i18n";

// The free local SEO check page: what you get, then the request form (form first on phones).
export default function FreeCheckPage({ lang = "en" }: { lang?: Lang }) {
  const v = freeCheck[lang];
  const offer = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: v.metaTitle,
    serviceType: "Local SEO audit",
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "Place", name: "North Wales" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
    url: `${site.url}${v.path}`,
  };
  return (
    <PageShell lang={lang} eyebrow={v.eyebrow} title={v.title} lead={v.lead}
      crumbs={[{ name: v.eyebrow, href: v.path }]} schema={[offer, faqSchema(v.blocks)]}>
      <section className="split check-split">
        <div className="prose"><Blocks blocks={v.blocks} /></div>
        <FreeCheckForm lang={lang} />
      </section>
    </PageShell>
  );
}
