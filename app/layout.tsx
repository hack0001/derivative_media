import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

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
  themeColor: "#0f1318",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
