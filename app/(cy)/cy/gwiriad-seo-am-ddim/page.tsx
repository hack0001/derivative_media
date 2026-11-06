import type { Metadata } from "next";
import FreeCheckPage from "@/components/FreeCheckPage";
import { freeCheck } from "@/lib/freeCheck";
import { alternatesCy } from "@/lib/i18n";

const v = freeCheck.cy;

export const metadata: Metadata = {
  title: v.metaTitle,
  description: v.description,
  alternates: alternatesCy(v.path),
  openGraph: { title: v.metaTitle, description: v.description, url: v.path, locale: "cy_GB" },
};

export default function Page() {
  return <FreeCheckPage lang="cy" />;
}
