export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0"
        aria-hidden
        style={{ background: "radial-gradient(72% 60% at 62% 42%,rgba(255,45,149,.22),rgba(0,229,255,.10) 46%,transparent 74%)" }}
      />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{ background: "linear-gradient(90deg,rgba(7,6,13,.9),rgba(7,6,13,.45) 50%,transparent 82%)" }}
      />
      <div className="absolute inset-0" aria-hidden style={{ background: "linear-gradient(180deg,transparent 55%,rgba(7,6,13,.9))" }} />

      <div className="relative mx-auto max-w-content px-4 sm:px-6 py-20 w-full">
        <div className="max-w-3xl" data-reveal="">
          <span className="eyebrow inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-magenta blink" />
            {"// ЭЛЕКТРОМОНТАЖ · ЕКАТЕРИНБУРГ И ОБЛАСТЬ"}
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.02] uppercase">
            <span className="glitch" data-text="Электрика">
              Электрика
            </span>
            <br />
            <span className="neonm">без переделок</span>
            <br />
            <span className="text-txt">и сюрпризов в смете</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-txt/80 leading-relaxed">
            Монтаж, замена проводки и сборка щита под ключ для квартир и домов. Фиксированная цена в договоре · гарантия 3 года ·
            бесплатный выезд по Екатеринбургу и области.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#calc" className="btn btn-m">
              Рассчитать стоимость
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#works" className="btn btn-c">
              Смотреть работы
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-4 max-w-lg font-mono">
            <div>
              <dt className="eyebrow text-dim">опыт</dt>
              <dd className="font-display text-2xl sm:text-3xl tabular neonm">
                <span data-count="16">0</span> лет
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-dim">объектов</dt>
              <dd className="font-display text-2xl sm:text-3xl tabular neonc">
                <span data-count="500">0</span>+
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-dim">гарантия</dt>
              <dd className="font-display text-2xl sm:text-3xl tabular neonv">
                <span data-count="3">0</span> года
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="trace absolute bottom-0 inset-x-0" aria-hidden />
    </section>
  );
}
