import { t, type Lang } from "@/lib/i18n";

export default function Marquee({ lang = "en" }: { lang?: Lang }) {
  const pl = t(lang).places;
  const run = (k: string) =>
    pl.list.map((p, i) => (
      <span key={`${k}${i}`} style={{ display: "contents" }}>
        <span className={i === 0 ? "on" : undefined}>{p}</span><em>/</em>
      </span>
    ));
  return (
    <section className="area" aria-label={`${pl.label}: ${pl.list.join(", ")}`}>
      <div className="marquee" aria-hidden="true">{run("a")}{run("b")}</div>
    </section>
  );
}
