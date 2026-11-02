import Link from "next/link";
import { t, type Lang } from "@/lib/i18n";

type Icon = ReturnType<typeof t>["services"]["items"][number]["icon"];

const icons: Record<Icon, React.ReactNode> = {
  build: <><rect x="3" y="6" width="28" height="22" rx="3" /><path d="M3 12h28M13 18l-4 3 4 3M21 18l4 3-4 3" /></>,
  shop: <><path d="M5 9h24l-2.5 15h-19z" /><path d="M12 9a5 5 0 0 1 10 0" /></>,
  app: <><rect x="4" y="5" width="11" height="11" rx="2" /><rect x="19" y="5" width="11" height="11" rx="2" /><rect x="4" y="19" width="11" height="11" rx="2" /><path d="M24.5 20v9M20 24.5h9" /></>,
  perf: <><path d="M5 25a12 12 0 1 1 24 0" /><path d="M17 25l6-8" /></>,
  care: <><path d="M17 4l11 4v8c0 7-5 12-11 14-6-2-11-7-11-14V8z" /><path d="M12 17l4 4 7-8" /></>,
  motion: <><path d="M3 24c6 0 6-14 14-14s8 14 14 14" /><circle cx="17" cy="10" r="2.4" fill="currentColor" /></>,
  council: <><path d="M4 13 17 5l13 8" /><path d="M7 13v12M13 13v12M21 13v12M27 13v12M4 28h26" /></>,
  bilingual: <><rect x="3" y="7" width="15" height="11" rx="2" /><rect x="16" y="16" width="15" height="11" rx="2" /><path d="M7 21v4l4-3" /></>,
};

export default function Services({ lang = "en" }: { lang?: Lang }) {
  const sv = t(lang).services;
  return (
    <section className="block" id="services">
      <div className="wrap">
        <div className="head">
          <h2>{sv.heading}</h2>
          <p>{sv.sub}</p>
        </div>
        <div className="svc">
          {sv.items.map((s) => (
            <article key={s.tag}>
              <span className="tag">{s.tag}</span>
              <svg className="glyph" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">{icons[s.icon]}</svg>
              <h3>{s.href ? <Link href={s.href} className="stretch">{s.title}</Link> : s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
