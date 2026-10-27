import { steps } from "@/lib/content";

export default function Process() {
  return (
    <section className="block" id="process">
      <div className="wrap">
        <div className="head">
          <h2>How a project runs</h2>
          <p>Most brochure sites go live in four to six weeks. Larger builds are planned in two-week stages so you see progress as it happens.</p>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
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
