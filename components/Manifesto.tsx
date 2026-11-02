"use client";
import { useEffect, useRef, useState } from "react";
import { t, type Lang } from "@/lib/i18n";

export default function Manifesto({ lang = "en" }: { lang?: Lang }) {
  const m = t(lang).manifesto;
  const words = m.text.split(" ");
  const hi = new Set(m.highlights);
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
  }, [words.length]);

  return (
    <section className="manifesto" ref={ref} aria-label={m.eyebrow}>
      <div className="stick">
        <div className="wrap">
          <p className="eyebrow"><b>01</b>&nbsp; {m.eyebrow}</p>
          <p className="big">
            {words.map((w, i) => (
              <span key={i}>
                <span className={`w${hi.has(w.replace(/[.,;:!?]/g, "")) ? " hi" : ""}${i < lit ? " lit" : ""}`}>{w}</span>{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
