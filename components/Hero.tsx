"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";
import { startHeroCurve } from "@/lib/heroCurve";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function Hero() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [onSecond, setOnSecond] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const slopeRef = useRef<HTMLElement>(null);

  // Typed intro: cursor blinks alone, then types the brand, then the tagline.
  useEffect(() => {
    let cancelled = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const type = async (s: string, base: number, set: (v: string) => void) => {
      for (let i = 1; i <= s.length; i++) {
        if (cancelled) return;
        set(s.slice(0, i));
        await sleep(base + Math.random() * base * 0.9 + (s[i - 1] === " " ? base : 0));
      }
    };
    (async () => {
      if (reduce) { setLine1(site.brand); setLine2(site.tagline); setOnSecond(true); return; }
      await sleep(1400);
      await type(site.brand, 75, setLine1);
      await sleep(500);
      if (cancelled) return;
      setOnSecond(true);
      await sleep(350);
      await type(site.tagline, 42, setLine2);
    })();
    return () => { cancelled = true; };
  }, []);

  // Hero animation (see lib/heroCurve.ts)
  useEffect(() => {
    if (!canvasRef.current) return;
    return startHeroCurve(canvasRef.current, slopeRef.current);
  }, []);

  return (
    <header className="hero" id="top">
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="wrap">
        <h1 className="typed" aria-label={site.brand}>
          <span aria-hidden="true">{line1}</span>
          {!onSecond && <span className="caret" aria-hidden="true" />}
        </h1>
        <p className="sub" aria-label={site.tagline}>
          <span aria-hidden="true">{line2}</span>
          {onSecond && <span className="caret" aria-hidden="true" />}
        </p>
        <div className="hero-meta">
          {site.heroMeta.map((m) => <span key={m}>{m}</span>)}
        </div>
      </div>
      <div className="slope" aria-hidden="true">f′(x) = <b ref={slopeRef}>0.000</b></div>
    </header>
  );
}
