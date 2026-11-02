import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage from "@/components/ArticlePage";
import { articles } from "@/lib/articles";

const base = "/local-seo";
const find = (slug: string) => articles.find((a) => a.path === `${base}/${slug}`);

export const dynamicParams = false;
export function generateStaticParams() {
  return articles.filter((a) => a.path.startsWith(base + "/") && a.path.split("/").length === base.split("/").length + 1)
    .map((a) => ({ slug: a.path.split("/").pop()! }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = find((await params).slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: a.path },
    openGraph: { type: "article", title: a.title, description: a.description, url: a.path },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const a = find((await params).slug);
  if (!a) notFound();
  return <ArticlePage a={a} />;
}
