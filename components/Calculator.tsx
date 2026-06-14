"use client";
import { useMemo, useRef, useState } from "react";
import { CATALOG, POPULAR, fmt, fmtPlain, type CatalogItem } from "@/lib/data";
import { useEstimate } from "./EstimateProvider";

const byId: Record<string, CatalogItem> = Object.fromEntries(CATALOG.map((i) => [i.id, i]));
const chipLabel = (it: CatalogItem) =>
  it.label.split(" / ")[0].replace("Установка ", "").replace("Монтаж ", "").replace("Прокладка ", "").replace("Сборка ", "Щит ");

export default function Calculator() {
  const { setEstimate } = useEstimate();
  const [order, setOrder] = useState<string[]>(["rozetka", "spot"]);
  const [qty, setQty] = useState<Record<string, number>>({ rozetka: 5, spot: 4 });
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState(-1);
  const searchRef = useRef<HTMLInputElement>(null);

  const total = useMemo(() => order.reduce((s, id) => s + byId[id].price * (qty[id] || 0), 0), [order, qty]);
  const results = useMemo(() => {
    const v = q.trim().toLowerCase();
    if (!v) return [];
    return CATALOG.filter((it) => (it.label + " " + it.kw).toLowerCase().includes(v)).slice(0, 8);
  }, [q]);
  const showSuggest = focused && q.trim().length > 0;

  const add = (id: string) => {
    const it = byId[id];
    setOrder((o) => (o.includes(id) ? o : [...o, id]));
    setQty((s) => ({ ...s, [id]: (s[id] || 0) + it.step }));
  };
  const setQ2 = (id: string, v: number) => setQty((s) => ({ ...s, [id]: Math.max(0, v) }));
  const remove = (id: string) => {
    setOrder((o) => o.filter((x) => x !== id));
    setQty((s) => {
      const n = { ...s };
      delete n[id];
      return n;
    });
  };
  const pick = (id: string) => {
    add(id);
    setQ("");
    setActive(-1);
    searchRef.current?.focus();
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (!showSuggest || !results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      pick(results[active >= 0 ? active : 0].id);
    } else if (e.key === "Escape") {
      setFocused(false);
    }
  };
  const send = () => {
    if (!order.length) {
      searchRef.current?.focus();
      return;
    }
    setEstimate(`> Ваш расчёт: ≈ ${fmt(total)} (средняя, уточним на замере)`);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => document.getElementById("name")?.focus(), 600);
  };
  const reset = () => {
    setOrder([]);
    setQty({});
  };

  return (
    <section id="calc" className="relative">
      <div
        className="absolute inset-0"
        aria-hidden
        style={{ background: "radial-gradient(58% 55% at 22% 28%,rgba(0,229,255,.16),transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-content px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4" data-reveal="">
          <div>
            <span className="eyebrow" style={{ color: "#8DF3FF" }}>
              {"// 01 — КАЛЬКУЛЯТОР"}
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl uppercase">Смета за минуту</h2>
          </div>
          <p className="max-w-md text-dim">
            Расчёт по средним ценам. Найдите работы через поиск — увидите примерную сумму. Точную назовём после бесплатного замера.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 hud hud-c p-5 sm:p-7" data-reveal="">
            <label htmlFor="calcSearch" className="eyebrow" style={{ color: "#8DF3FF" }}>
              {"> добавьте работы в расчёт"}
            </label>
            <div className="relative mt-3">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan" aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>
              <input
                id="calcSearch"
                ref={searchRef}
                type="text"
                autoComplete="off"
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setActive(-1);
                }}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 120)}
                onKeyDown={onKey}
                role="combobox"
                aria-expanded={showSuggest}
                aria-controls="calcSuggest"
                aria-autocomplete="list"
                className="w-full bg-void/70 border border-line px-11 py-3.5 text-txt outline-none focus:border-cyan font-mono"
                placeholder="розетка, штробление, тёплый пол…"
              />
              {showSuggest && (
                <ul id="calcSuggest" role="listbox" className="absolute z-20 mt-2 w-full max-h-80 overflow-auto border border-cyan bg-panel2 shadow-2xl">
                  {results.length === 0 ? (
                    <li className="px-4 py-3 text-sm text-dim font-mono">{"// ничего не нашлось — позвоните"}</li>
                  ) : (
                    results.map((it, i) => (
                      <li
                        key={it.id}
                        role="option"
                        aria-selected={i === active}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          pick(it.id);
                        }}
                        className={`flex items-center justify-between gap-3 px-4 py-3 cursor-pointer border-b border-line last:border-0 hover:bg-magenta/10 ${
                          i === active ? "bg-magenta/10" : ""
                        }`}
                      >
                        <span className="text-sm">
                          {it.label}
                          {qty[it.id] ? <span className="neonm"> · добавлено</span> : null}
                        </span>
                        <span className="font-mono text-xs neonc whitespace-nowrap">
                          {fmtPlain(it.price)} ₽/{it.unit}
                        </span>
                      </li>
                    ))
                  )}
                </ul>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {POPULAR.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    add(id);
                    searchRef.current?.focus();
                  }}
                  className="inline-flex items-center gap-1.5 border border-line px-3 py-1.5 text-sm text-dim hover:text-magenta hover:border-magenta transition font-mono"
                >
                  <span className="neonm">+</span> {chipLabel(byId[id])}
                </button>
              ))}
            </div>

            <div className="mt-5 divide-y divide-line">
              {order.map((id) => {
                const it = byId[id];
                const v = qty[id] || 0;
                return (
                  <div key={id} className="flex flex-wrap items-center gap-x-3 gap-y-3 py-4">
                    <div className="w-full sm:flex-1 min-w-0 sm:pr-2">
                      <p className="font-display uppercase text-sm text-txt">{it.label}</p>
                      <p className="text-xs text-dim font-mono">
                        {fmtPlain(it.price)} ₽ / {it.unit}
                        {it.step > 1 ? ` · шаг ${it.step}` : ""}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setQ2(id, v - it.step)}
                        className="step-btn grid h-10 w-10 place-items-center border border-line text-cyan hover:border-cyan"
                        aria-label={`Меньше: ${it.label}`}
                      >
                        −
                      </button>
                      <input
                        className="w-12 bg-transparent text-center font-mono tabular text-lg text-cyan"
                        value={v}
                        inputMode="numeric"
                        onChange={(e) => setQ2(id, parseInt(e.target.value.replace(/\D/g, ""), 10) || 0)}
                        aria-label={`Количество: ${it.label}`}
                      />
                      <button
                        type="button"
                        onClick={() => setQ2(id, v + it.step)}
                        className="step-btn grid h-10 w-10 place-items-center border border-line text-cyan hover:border-cyan"
                        aria-label={`Больше: ${it.label}`}
                      >
                        +
                      </button>
                    </div>
                    <div className="ml-auto sm:w-28 text-right font-mono tabular neonc">{fmt(it.price * v)}</div>
                    <button
                      type="button"
                      onClick={() => remove(id)}
                      className="grid h-10 w-10 place-items-center text-dim hover:text-magenta transition"
                      aria-label={`Удалить: ${it.label}`}
                    >
                      ✕
                    </button>
                  </div>
                );
              })}
            </div>
            {order.length === 0 && (
              <p className="py-10 text-center text-sm text-dim font-mono">{"// пусто — найдите работы через поиск или нажмите тег"}</p>
            )}
          </div>

          <div className="hud hud-m p-6 lg:sticky lg:top-24" data-reveal="" style={{ transitionDelay: ".1s" }}>
            <span className="eyebrow" style={{ color: "#FF7DC0" }}>
              {"// предварительно"}
            </span>
            <p className="mt-3 font-display text-4xl sm:text-5xl tabular neonm">{fmt(total)}</p>
            <p className="mt-2 text-sm text-dim">
              Средняя стоимость работ. Материалы — отдельно. Точная цена фиксируется в договоре после замера.
            </p>
            <div className="trace my-5" aria-hidden />
            <ul className="space-y-2 text-sm text-dim font-mono">
              <li>
                <span className="neonc">+</span> выезд и замер — бесплатно
              </li>
              <li>
                <span className="neonc">+</span> скидка 10% за заказ с сайта
              </li>
            </ul>
            <button type="button" onClick={send} className="btn btn-m w-full mt-6">
              Отправить на расчёт
            </button>
            <button type="button" onClick={reset} className="w-full mt-2 py-2 text-sm text-dim hover:text-cyan font-mono transition">
              [ сбросить ]
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
