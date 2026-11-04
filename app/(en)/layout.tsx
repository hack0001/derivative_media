import type { Metadata, Viewport } from "next";
import RootHtml from "@/components/RootHtml";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Web Design Colwyn Bay & North Wales | Derivative Media", template: "%s | Derivative Media" },
  description: "Tailored websites for North Wales businesses, councils and charities, from Tom Patel, a web developer based in Colwyn Bay. Fast, bilingual Welsh & English, built to be found on Google and AI search.",
  openGraph: { siteName: "Derivative Media", type: "website", locale: "en_GB" },
};
export const viewport: Viewport = { themeColor: "#000000", viewportFit: "cover" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="en-GB">{children}</RootHtml>;
}
