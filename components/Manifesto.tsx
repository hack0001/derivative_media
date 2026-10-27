"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";

const words = site.manifesto.split(" ");
const hi = new Set(site.manifestoHighlights);

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setLit(words.length); return; }
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect(), vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, (-r.top + vh * 0.25) / (r.height - vh * 0.6)));
      setLit(Math.round(p * words.length));
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="manifesto" ref={ref} aria-label="What we do">
      <div className="stick">
        <div className="wrap">
          <p className="eyebrow"><b>01</b>&nbsp; What we do</p>
          <p className="big">
            {words.map((w, i) => (
              <span key={i}>
                <span className={`w${hi.has(w.replace(/[^\w-]/g, "")) ? " hi" : ""}${i < lit ? " lit" : ""}`}>{w}</span>{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
