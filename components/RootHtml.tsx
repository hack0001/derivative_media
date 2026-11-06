import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/JsonLd";
import { businessSchema, personSchema } from "@/lib/schema";
import "../app/globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

// The <html> shell shared by the English and Welsh root layouts.
export default function RootHtml({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>
        {children}
        <JsonLd data={[businessSchema, personSchema]} />
        <Analytics /> {/* Vercel Web Analytics: page views and where visitors came from. No cookies, so no banner needed. */}
      </body>
    </html>
  );
}
