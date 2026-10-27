import { site } from "@/lib/content";

export default function Marquee() {
  const run = (k: string) =>
    site.places.map((p, i) => (
      <span key={`${k}${i}`} style={{ display: "contents" }}>
        <span className={i === 0 ? "on" : undefined}>{p}</span><em>/</em>
      </span>
    ));
  return (
    <section className="area" aria-label={`Where we work: ${site.places.join(", ")}`}>
      <div className="marquee" aria-hidden="true">{run("a")}{run("b")}</div>
    </section>
  );
}
