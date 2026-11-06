import type { Metadata } from "next";
import FreeCheckPage from "@/components/FreeCheckPage";
import { freeCheck } from "@/lib/freeCheck";
import { alternates } from "@/lib/i18n";

const v = freeCheck.en;

export const metadata: Metadata = {
  title: v.metaTitle,
  description: v.description,
  alternates: alternates(v.path),
  openGraph: { title: v.metaTitle, description: v.description, url: v.path, locale: "en_GB" },
};

export default function Page() {
  return <FreeCheckPage lang="en" />;
}
