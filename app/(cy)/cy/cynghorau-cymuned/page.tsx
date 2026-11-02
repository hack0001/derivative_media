import type { Metadata } from "next";
import DocPage from "@/components/DocPage";
import { docs } from "@/lib/docs";
import { alternatesCy } from "@/lib/i18n";

const d = docs.councils;
const v = d.cy;

export const metadata: Metadata = {
  title: v.metaTitle,
  description: v.description,
  alternates: alternatesCy(v.path),
  openGraph: { title: v.metaTitle, description: v.description, url: v.path, locale: "cy_GB" },
};

export default function Page() {
  return <DocPage doc={d} lang="cy" crumbs={[{ name: "Cynghorau cymuned", href: "/cy/cynghorau-cymuned" }]} />;
}
