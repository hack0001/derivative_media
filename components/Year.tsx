"use client";
import { useEffect, useRef } from "react";

// Shows the build year in the pre-built HTML, then writes the visitor's current year into it,
// so a page built last year never shows a stale copyright year.
export default function Year() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.textContent = String(new Date().getFullYear());
  }, []);
  return <span ref={ref} suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
