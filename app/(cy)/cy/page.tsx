import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import WorkReel from "@/components/WorkReel";
import Topics from "@/components/Topics";
import Process from "@/components/Process";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { alternatesCy } from "@/lib/i18n";

export const metadata: Metadata = {
  alternates: alternatesCy("/cy"),
  openGraph: { url: "/cy" },
};

export default function Home() {
  return (
    <>
      <Nav lang="cy" />
      <main>
        <Hero lang="cy" />
        <Manifesto lang="cy" />
        <Services lang="cy" />
        <WorkReel lang="cy" />
        <Topics lang="cy" />
        <Process lang="cy" />
        <Marquee lang="cy" />
        <Contact lang="cy" />
      </main>
      <Footer lang="cy" />
    </>
  );
}
