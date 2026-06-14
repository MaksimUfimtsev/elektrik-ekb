"use client";
import { useState } from "react";

const NAV: [string, string][] = [
  ["#calc", "/калькулятор"],
  ["#works", "/работы"],
  ["#approach", "/подход"],
  ["#contact", "/контакты"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header id="siteHeader" className="sticky top-0 z-50 border-b border-line bg-void/80 backdrop-blur transition-shadow">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center" aria-label="Чернышев Александр Витальевич — на главную">
            <span className="font-display tracking-wide text-base sm:text-lg text-txt whitespace-nowrap">
              <span className="sm:hidden">Чернышев&nbsp;А.&nbsp;В.</span>
              <span className="hidden sm:inline">Чернышев Александр Витальевич</span>
              <span className="neonc blink">_</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-mono uppercase tracking-wider text-dim" aria-label="Навигация">
            {NAV.map(([h, l]) => (
              <a key={h} href={h} className="hover:text-magenta transition">
                {l}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+79655151501" className="hidden sm:block text-right leading-tight">
              <span className="font-display text-sm tabular neonc">+7 965 515-15-01</span>
              <span className="block eyebrow text-dim">08:00—22:00</span>
            </a>
            <a href="#contact" className="hidden sm:inline-flex btn btn-m">
              Заявка
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden grid h-10 w-10 place-items-center border border-line text-magenta"
              aria-label="Меню"
              aria-expanded={open}
              aria-controls="mobileNav"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div id="mobileNav" className="lg:hidden border-t border-line bg-void">
          <nav className="mx-auto max-w-content px-4 py-4 grid gap-1 font-mono uppercase text-sm tracking-wider" aria-label="Мобильная навигация">
            {NAV.map(([h, l]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="px-3 py-2.5 hover:text-magenta">
                {l}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
