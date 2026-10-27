import { services, type Service } from "@/lib/content";

const icons: Record<Service["icon"], React.ReactNode> = {
  build: <><rect x="3" y="6" width="28" height="22" rx="3" /><path d="M3 12h28M13 18l-4 3 4 3M21 18l4 3-4 3" /></>,
  shop: <><path d="M5 9h24l-2.5 15h-19z" /><path d="M12 9a5 5 0 0 1 10 0" /></>,
  app: <><rect x="4" y="5" width="11" height="11" rx="2" /><rect x="19" y="5" width="11" height="11" rx="2" /><rect x="4" y="19" width="11" height="11" rx="2" /><path d="M24.5 20v9M20 24.5h9" /></>,
  perf: <><path d="M5 25a12 12 0 1 1 24 0" /><path d="M17 25l6-8" /></>,
  care: <><path d="M17 4l11 4v8c0 7-5 12-11 14-6-2-11-7-11-14V8z" /><path d="M12 17l4 4 7-8" /></>,
  motion: <><path d="M3 24c6 0 6-14 14-14s8 14 14 14" /><circle cx="17" cy="10" r="2.4" fill="currentColor" /></>,
};

export default function Services() {
  return (
    <section className="block" id="services">
      <div className="wrap">
        <div className="head">
          <h2>What we build</h2>
          <p>Small studio, full stack. You deal with the person writing the code from the first call to the day it goes live, and after.</p>
        </div>
        <div className="svc">
          {services.map((s) => (
            <article key={s.tag}>
              <span className="tag">{s.tag}</span>
              <svg className="glyph" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">{icons[s.icon]}</svg>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
