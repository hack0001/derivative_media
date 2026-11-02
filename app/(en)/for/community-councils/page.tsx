import type { Metadata } from "next";
import DocPage from "@/components/DocPage";
import { docs } from "@/lib/docs";
import { alternates } from "@/lib/i18n";

const d = docs.councils;
const v = d.en;

export const metadata: Metadata = {
  title: v.metaTitle,
  description: v.description,
  alternates: alternates(v.path),
  openGraph: { title: v.metaTitle, description: v.description, url: v.path, locale: "en_GB" },
};

export default function Page() {
  return <DocPage doc={d} lang="en" crumbs={[{ name: "Community councils", href: "/for/community-councils" }]} />;
}
