"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { t, counterpart, type Lang } from "@/lib/i18n";

export default function Nav({ lang = "en" }: { lang?: Lang }) {
  const n = t(lang).nav;
  const path = usePathname() || "/";
  const other = counterpart(path) ?? (lang === "en" ? "/cy" : "/");
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(-1);
  const [onHero, setOnHero] = useState(true);

  useEffect(() => {
    // Highlight in-page sections on the homepage; highlight the current section elsewhere.
    const isHome = path === n.home;
    const secs = n.links.map((l) => (isHome && l.href.includes("#") ? document.getElementById(l.href.split("#")[1]) : null));
    const fromPath = n.links.findIndex((l) => !l.href.includes("#") && l.href !== n.home && path.startsWith(l.href));
    const hero = document.getElementById("top");
    let ticking = false;
    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > 10);
      setOnHero(!!hero && window.scrollY < hero.offsetHeight - 64);
      let cur = fromPath;
      secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < window.innerHeight * 0.4) cur = i; });
      setActive(cur);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [path, n]);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}${onHero ? " on-hero" : ""}`}>
      <div className="wrap">
        <a className="brand" href={n.home}>derivative<i>.</i>media</a>
        <ul>
          {n.links.map((l, i) => (
            <li key={l.href}><a href={l.href} className={i === active ? "on" : undefined}>{l.label}</a></li>
          ))}
        </ul>
        <div className="nav-end">
          <a className="lang" href={other} hrefLang={lang === "en" ? "cy" : "en-GB"} lang={lang === "en" ? "cy" : "en"}>{n.switchLabel}</a>
          <a className="cta" href={n.contactHref}>{n.cta}</a>
        </div>
      </div>
    </nav>
  );
}
