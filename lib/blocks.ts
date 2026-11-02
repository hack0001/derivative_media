// The building blocks every content page is written in.
// Inline text in p / list / check / note supports [link](/path) and **bold**.
export type Block =
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "answer"; text: string }          // a short, direct answer near the top: what AI tools quote
  | { type: "list"; items: string[] }
  | { type: "steps"; items: string[] }
  | { type: "check"; items: string[] }
  | { type: "note"; text: string }
  | { type: "faq"; items: { q: string; a: string }[] };

// FAQ blocks also become FAQPage structured data.
export const faqSchema = (blocks: Block[]) => {
  const items = blocks.flatMap((b) => (b.type === "faq" ? b.items : []));
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "") },
    })),
  };
};
