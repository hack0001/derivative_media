"use client";
import { useEffect, useState } from "react";
import { palettes, site, type Palette } from "@/lib/content";

export default function PalettePicker() {
  const [current, setCurrent] = useState<Palette>(site.defaultPalette);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dm-palette") as Palette | null;
      if (saved && palettes.some((p) => p.id === saved)) apply(saved);
    } catch { /* storage unavailable */ }
  }, []);

  function apply(id: Palette) {
    document.documentElement.dataset.palette = id;
    setCurrent(id);
    try { localStorage.setItem("dm-palette", id); } catch { /* ignore */ }
  }

  return (
    <div className="picker" role="group" aria-label="Colour palette">
      <span>palette</span>
      {palettes.map((p) => (
        <button key={p.id} type="button" title={p.label} aria-label={p.label} aria-pressed={current === p.id}
          style={{ background: p.swatch }} onClick={() => apply(p.id)} />
      ))}
    </div>
  );
}
