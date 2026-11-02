import { t, type Lang } from "@/lib/i18n";

export default function Process({ lang = "en" }: { lang?: Lang }) {
  const p = t(lang).process;
  return (
    <section className="block" id="process">
      <div className="wrap">
        <div className="head">
          <h2>{p.heading}</h2>
          <p>{p.sub}</p>
        </div>
        <ol className="steps">
          {p.steps.map((s, i) => (
            <li key={s.title}>
              <span className="dot">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <span className="t">{s.when}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
