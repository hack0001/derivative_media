import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import WorkReel from "@/components/WorkReel";
import Process from "@/components/Process";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import { site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <WorkReel />
        <Process />
        <Marquee />
        <Contact />
      </main>
      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <code>f′(you) &gt; 0</code>
        </div>
      </footer>
    </>
  );
}
