type Tile = { color: "cyan" | "magenta" | "violet"; title: string; desc: string; icon: string };

// литеральные классы, чтобы сканер Tailwind их сгенерировал
const COLORS: Record<Tile["color"], string> = {
  cyan: "border-cyan text-cyan",
  magenta: "border-magenta text-magenta",
  violet: "border-violet text-violet",
};

const TILES: Tile[] = [
  { color: "cyan", title: "Монтаж по ПУЭ", desc: "Делаем по нормам и проверяем под нагрузкой — не «на глаз».", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z@m9 12 2 2 4-4" },
  { color: "magenta", title: "Договор и фикс-цена", desc: "Смета закреплена в договоре и не растёт во время работ.", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z@M14 2v6h6M8 13h8M8 17h6" },
  { color: "violet", title: "Гарантия 3 года", desc: "Официально, с гарантийным талоном и поддержкой по телефону.", icon: "M12 8v4l3 2@@circle:12 12 9" },
  { color: "cyan", title: "Бесплатный выезд", desc: "Замер и расчёт по Екатеринбургу и области — 0 ₽.", icon: "M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z@@circle:12 10 3" },
  { color: "magenta", title: "16 лет опыта", desc: "Свои штатные мастера, без субподряда и случайных людей.", icon: "M3 21h18M5 21V7l8-4 8 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01" },
  { color: "violet", title: "500+ объектов", desc: "Квартиры и коттеджи Екатеринбурга и Свердловской области.", icon: "M3 3v18h18@m7 14 4-4 3 3 5-6" },
];

const STEPS: [string, string][] = [
  ["Заявка", "звонок или форма"],
  ["Замер", "бесплатно, на объекте"],
  ["Договор", "фикс. смета и сроки"],
  ["Монтаж", "чисто и по нормам"],
  ["Проверка", "тест под нагрузкой"],
  ["Гарантия", "3 года + документы"],
];

function Icon({ spec }: { spec: string }) {
  const parts = spec.split("@");
  const paths = parts.filter((p) => p && !p.startsWith("circle:") && p !== "");
  const circles = parts.filter((p) => p.startsWith("circle:")).map((c) => c.replace("circle:", "").trim().split(/\s+/).map(Number));
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
      {circles.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} />
      ))}
    </svg>
  );
}

export default function Approach() {
  return (
    <section id="approach" className="relative border-y border-line overflow-hidden">
      <div
        className="absolute inset-0"
        aria-hidden
        style={{ background: "radial-gradient(58% 55% at 78% 32%,rgba(168,85,247,.18),transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-content px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl" data-reveal="">
          <span className="eyebrow" style={{ color: "#C99CFF" }}>
            {"// 03 — НАШ ПОДХОД"}
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl uppercase">
            Почему с нами <span className="neonv">спокойно</span>
          </h2>
          <p className="mt-4 text-dim">
            Монтаж по нормам ПУЭ, проверка под нагрузкой, подпись каждой группы в щите. Работаем по договору с фиксированной ценой и
            не пропадаем после сдачи — гарантия 3 года и поддержка по телефону.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TILES.map((t, i) => (
            <div key={t.title} className="hud p-6" data-reveal="" style={{ transitionDelay: `${(i % 3) * 0.05}s` }}>
              <span className={`grid h-11 w-11 place-items-center border ${COLORS[t.color]}`} aria-hidden>
                <Icon spec={t.icon} />
              </span>
              <p className="mt-4 font-display text-lg uppercase text-txt">{t.title}</p>
              <p className="mt-1 text-sm text-dim">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="trace mt-14 mb-8 hidden lg:block" aria-hidden />
        <p className="eyebrow mb-5">{"// как мы работаем"}</p>
        <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 font-mono" data-reveal="">
          {STEPS.map(([t, d], i) => (
            <li key={t}>
              <span className="neonm text-lg">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 font-display uppercase text-sm text-txt">{t}</h3>
              <p className="mt-1 text-xs text-dim font-sans">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
