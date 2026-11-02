import { site } from "@/lib/content";

// The business and its founder, as Google and AI tools should understand them. On every page via RootHtml.
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#business`,
  name: "Derivative Media",
  legalName: site.name,
  url: site.url,
  email: site.email,
  description:
    "Web design and development studio in Colwyn Bay, North Wales, run by Tom Patel. Tailored websites, bilingual Welsh and English sites, community council websites, local SEO and AI search optimisation.",
  address: { "@type": "PostalAddress", addressLocality: site.base, addressRegion: site.region, addressCountry: "GB" },
  areaServed: ["Colwyn Bay", "Llanrwst", "Conwy Valley", "Llansannan", "Abergele", "Denbigh", "Conwy", "Llandudno", "North Wales"].map((name) => ({ "@type": "Place", name })),
  knowsLanguage: ["en", "cy"],
  founder: { "@id": `${site.url}/about#person` },
  knowsAbout: ["Web design", "Web development", "Local SEO", "Google Business Profile", "AI search optimisation", "Bilingual Welsh and English websites", "Community council websites"],
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/about#person`,
  name: site.owner.name,
  jobTitle: site.owner.role,
  worksFor: { "@id": `${site.url}/#business` },
  homeLocation: { "@type": "Place", name: "Colwyn Bay" },
  url: `${site.url}/about`,
};
