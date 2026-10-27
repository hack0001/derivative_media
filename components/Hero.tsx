"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";

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

  // Live curve with a tangent line that follows the pointer.
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, raf = 0, frame = 0, px = 0;
    let mouseX: number | null = null;
    let colors = { line: "", muted: "", accent: "" };

    const readColors = () => {
      const s = getComputedStyle(document.documentElement);
      colors = {
        line: s.getPropertyValue("--line").trim(),
        muted: s.getPropertyValue("--muted").trim(),
        accent: s.getPropertyValue("--accent").trim(),
      };
    };
    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    // the curve lives in the band below the text
    const amp = () => Math.min(H * 0.05, 44);
    const base = () => H - Math.min(H * 0.13, 120);
    const f = (x: number, t: number) => base() + amp() * Math.sin(x * 0.0058 + t) + amp() * 0.55 * Math.sin(x * 0.0137 - t * 0.7);
    const fp = (x: number, t: number) => amp() * 0.0058 * Math.cos(x * 0.0058 + t) + amp() * 0.55 * 0.0137 * Math.cos(x * 0.0137 - t * 0.7);

    const host = cv.parentElement!;
    const onMove = (e: PointerEvent) => { mouseX = e.clientX - cv.getBoundingClientRect().left; };
    const onLeave = () => { mouseX = null; };
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);

    const draw = (ts: number) => {
      const t = reduce ? 0.6 : ts / 4200;
      if (frame++ % 30 === 0) readColors();
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = colors.line; ctx.lineWidth = 1; ctx.globalAlpha = 0.45;
      for (let gx = 0; gx < W; gx += 64) { ctx.beginPath(); ctx.moveTo(gx + 0.5, 0); ctx.lineTo(gx + 0.5, H); ctx.stroke(); }
      ctx.globalAlpha = 1; ctx.strokeStyle = colors.muted; ctx.lineWidth = 1.5; ctx.globalAlpha = 0.55;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 4) { const y = f(x, t); if (x) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.stroke(); ctx.globalAlpha = 1;
      const target = mouseX ?? W * (0.6 + 0.28 * Math.sin(ts / 5200));
      px += (target - px) * (reduce ? 1 : 0.06);
      const py = f(px, t), m = fp(px, t), len = Math.min(W * 0.22, 280);
      const dx = len / Math.sqrt(1 + m * m);
      ctx.strokeStyle = colors.accent; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(px - dx, py - m * dx); ctx.lineTo(px + dx, py + m * dx); ctx.stroke();
      ctx.fillStyle = colors.accent;
      ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 0.2; ctx.beginPath(); ctx.arc(px, py, 16, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1;
      if (frame % 4 === 0 && slopeRef.current) slopeRef.current.textContent = (-m).toFixed(3);
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    readColors(); size(); px = W * 0.6;
    window.addEventListener("resize", size);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
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
