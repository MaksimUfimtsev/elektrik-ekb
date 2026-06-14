"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { GAL, GAL_FILTERS } from "@/lib/data";

export default function Gallery() {
  const [cat, setCat] = useState("all");
  const [lb, setLb] = useState<number | null>(null);

  const visible = useMemo(() => GAL.map((g, i) => ({ g, i })).filter(({ g }) => cat === "all" || g.cat === cat), [cat]);
  const lbList = useMemo(() => visible.map((v) => v.i), [visible]);

  const open = (globalIndex: number) => {
    const pos = lbList.indexOf(globalIndex);
    setLb(pos < 0 ? 0 : pos);
  };
  const close = useCallback(() => setLb(null), []);
  const step = useCallback(
    (d: number) => setLb((p) => (p === null ? p : (p + d + lbList.length) % lbList.length)),
    [lbList.length]
  );

  useEffect(() => {
    if (lb === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lb, close, step]);

  const current = lb === null ? null : GAL[lbList[lb]];

  return (
    <section id="works" className="mx-auto max-w-content px-4 sm:px-6 py-16 sm:py-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4" data-reveal="">
        <div>
          <span className="eyebrow">{"// 02 — РАБОТЫ"}</span>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl uppercase">Наши работы</h2>
        </div>
        <p className="max-w-md text-dim">Реальные объекты в Екатеринбурге и области. Нажмите на фото для увеличения.</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2 font-mono text-sm" role="tablist" aria-label="Фильтр" data-reveal="">
        {GAL_FILTERS.map((f) => {
          const on = cat === f.cat;
          return (
            <button
              key={f.cat}
              onClick={() => setCat(f.cat)}
              aria-pressed={on}
              className={`filter-btn px-4 py-2 border transition ${on ? "border-magenta text-magenta bg-magenta/10" : "border-line text-dim hover:text-magenta hover:border-magenta"}`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-reveal="">
        {visible.map(({ g, i }) => (
          <button key={g.f} className="gtile group aspect-[4/3]" aria-label={`Открыть: ${g.t}`} onClick={() => open(i)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/assets/photos/gallery/${g.f}`}
              alt={`${g.t} — фото работы электромонтажа в Екатеринбурге`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <span className="cap absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-void to-transparent p-3 text-left text-magenta text-sm font-mono">
              {g.t}
            </span>
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[70] bg-void/95 backdrop-blur flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр фото"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button onClick={close} className="absolute top-4 right-4 grid h-11 w-11 place-items-center border border-magenta text-magenta hover:bg-magenta/15 transition" aria-label="Закрыть">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <button onClick={() => step(-1)} className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center border border-magenta text-magenta hover:bg-magenta/15 transition" aria-label="Предыдущее">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button onClick={() => step(1)} className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center border border-magenta text-magenta hover:bg-magenta/15 transition" aria-label="Следующее">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <figure className="max-w-4xl w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/assets/photos/gallery/${current.f}`} alt={current.t} className="lb-pop w-full max-h-[80vh] object-contain border border-magenta" />
            <figcaption className="mt-3 text-center text-magenta font-mono">{`// ${current.t}`}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
