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
import { alternates } from "@/lib/i18n";

export const metadata: Metadata = {
  alternates: alternates("/"),
  openGraph: { url: "/" },
};

export default function Home() {
  return (
    <>
      <Nav lang="en" />
      <main>
        <Hero lang="en" />
        <Manifesto lang="en" />
        <Services lang="en" />
        <WorkReel lang="en" />
        <Topics lang="en" />
        <Process lang="en" />
        <Marquee lang="en" />
        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
