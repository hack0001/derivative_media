"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const secs = links.map((l) => document.querySelector(l.href));
    let ticking = false;
    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > 10);
      let cur = -1;
      secs.forEach((s, i) => {
        if (s && s.getBoundingClientRect().top < window.innerHeight * 0.4) cur = i;
      });
      setActive(cur);
    };
    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <a className="brand" href="#top">derivative<i>.</i>media</a>
        <ul>
          {links.map((l, i) => (
            <li key={l.href}><a href={l.href} className={i === active ? "on" : undefined}>{l.label}</a></li>
          ))}
        </ul>
        <a className="cta" href="#contact">Start a project</a>
      </div>
    </nav>
  );
}
