"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { projects, type Project } from "@/lib/content";
import { t, type Lang } from "@/lib/i18n";

function Screen({ p }: { p: Project }) {
  if (p.image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <div className="screen"><img src={p.image} alt={`Screenshot of ${p.title}`} width={1240} height={775} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} /></div>;
  }
  switch (p.screen) {
    case "s1":
      return (
        <div className="screen s1"><div className="hd" /><div className="hd2" />
          <div className="cal">{Array.from({ length: 28 }, (_, i) => <b key={i} className={[2, 3, 8, 12, 13, 19].includes(i) ? "x" : undefined} />)}</div>
        </div>
      );
    case "s2":
      return <div className="screen s2"><div className="logo" /><div className="grid">{Array.from({ length: 8 }, (_, i) => <div key={i} />)}</div></div>;
    case "s3":
      return <div className="screen s3"><div className="h" /><div className="p" /><div className="p p2" /><div className="btn" /><div className="chip" /></div>;
    case "s5":
      return (
        <div className="screen s5">
          <div className="top"><i /><span>Cymraeg · English</span></div>
          <div className="title" /><div className="sub" />
          <div className="cards">{["Meetings", "Minutes", "Notices"].map((t) => <div key={t}><b>{t}</b></div>)}</div>
        </div>
      );
    default:
      return <div className="screen s4"><div className="side" />{[10, 23, 36, 49, 62, 75].map((t) => <div key={t} className="row" style={{ top: `${t}%` }} />)}</div>;
  }
}

export default function WorkReel({ lang = "en" }: { lang?: Lang }) {
  const w = t(lang).work;
  const label = (p: Project) => {
    const k = p.key as keyof typeof w.projects;
    const v = w.projects[k];
    return typeof v === "string" ? { title: p.title, summary: v } : v ?? { title: p.title, summary: p.summary };
  };
  const secRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sec = secRef.current, track = trackRef.current, bar = barRef.current;
    if (!sec || !track || !bar) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = () => window.innerWidth > 860 && !reduce;

    const size = () => {
      if (!wide()) { sec.style.height = "auto"; track.style.transform = ""; return; }
      const dist = track.scrollWidth - window.innerWidth;
      sec.style.height = `${window.innerHeight + Math.max(dist, 0)}px`;
      update();
    };
    let ticking = false;
    const update = () => {
      ticking = false;
      if (!wide()) return;
      const r = sec.getBoundingClientRect();
      const dist = track.scrollWidth - window.innerWidth;
      const p = Math.max(0, Math.min(1, -r.top / Math.max(r.height - window.innerHeight, 1)));
      track.style.transform = `translate3d(${-p * dist}px,0,0)`;
      bar.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    size();
    window.addEventListener("resize", size);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", size);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="work" id="work" ref={secRef}>
      <div className="stick">
        <div className="wrap top">
          <div>
            <p className="eyebrow"><b>02</b>&nbsp; {w.eyebrow}</p>
            <h2>{w.heading}</h2>
          </div>
          <div className="progress" aria-hidden="true"><i ref={barRef} /></div>
        </div>
        <div className="track" ref={trackRef}>
          {projects.map((p) => (
            <div className="proj" key={p.title}>
              <div className="frame">
                <div className="bar"><i /><i /><i /><span>{p.url}</span></div>
                <Screen p={p} />
              </div>
              <div className="meta">
                <div>
                  <h3>{p.href ? <Link href={p.href}>{label(p).title}</Link> : label(p).title}{p.tag === "own" && <span className="sample">{w.own}</span>}</h3>
                  <p>{label(p).summary}</p>
                </div>
                <div className="stack">{p.stack[0]}<br />{p.stack[1]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
