import type { Metadata, Viewport } from "next";
import RootHtml from "@/components/RootHtml";

export const metadata: Metadata = {
  metadataBase: new URL("https://derivativemedia.co.uk"),
  title: { default: "Dylunio gwefannau Bae Colwyn a Gogledd Cymru | Derivative Media", template: "%s | Derivative Media" },
  description: "Gwefannau wedi'u teilwra ar gyfer busnesau, cynghorau ac elusennau yng Ngogledd Cymru, gan Tom Patel, datblygwr gwe ym Mae Colwyn. Cyflym, dwyieithog, ac wedi'u hadeiladu i gael eu canfod ar Google.",
  openGraph: { siteName: "Derivative Media", type: "website", locale: "cy_GB" },
};
export const viewport: Viewport = { themeColor: "#000000", viewportFit: "cover" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="cy">{children}</RootHtml>;
}
