import type { Metadata, Viewport } from "next";
import { Syne, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const display = Syne({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Derivative Media | Website development",
  description:
    "Derivative Media Ltd designs and hand-codes fast websites, online shops and web apps. Based in North Wales, working with clients across the UK.",
  openGraph: {
    title: "Derivative Media",
    description: "Hand-coded websites, online shops and web apps.",
    type: "website",
    locale: "en_GB",
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      data-palette={site.defaultPalette}
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
