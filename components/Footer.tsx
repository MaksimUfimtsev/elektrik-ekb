export default function Footer() {
  return (
    <footer className="relative z-10 bg-void">
      <div className="mx-auto max-w-content px-4 sm:px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center">
            <span className="font-display text-base text-txt">
              Чернышев Александр Витальевич<span className="neonc">_</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-dim">Электромонтаж для квартир и домов в Екатеринбурге и Свердловской области.</p>
        </div>
        <div>
          <p className="eyebrow text-dim">контакты</p>
          <a href="tel:+79655151501" className="mt-3 block font-display tabular neonc">
            +7 965 515-15-01
          </a>
          <a href="mailto:ylexandr@yandex.ru" className="mt-1 block text-sm text-dim hover:text-magenta">
            ylexandr@yandex.ru
          </a>
          <p className="mt-2 text-sm text-dim">08:00—22:00</p>
        </div>
        <div>
          <p className="eyebrow text-dim">разделы</p>
          <ul className="mt-3 space-y-2 text-sm text-dim font-mono">
            <li>
              <a href="#calc" className="hover:text-magenta">
                /калькулятор
              </a>
            </li>
            <li>
              <a href="#works" className="hover:text-magenta">
                /работы
              </a>
            </li>
            <li>
              <a href="#approach" className="hover:text-magenta">
                /подход
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-magenta">
                /контакты
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-dim">мессенджер</p>
          <a href="https://t.me/fazanulo" className="mt-3 inline-flex items-center gap-2 text-sm text-dim hover:text-cyan font-mono">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M22 3 2 11l6 2 2 6 3-4 5 4 4-16ZM9 13l8-6-6 8-2-2Z" />
            </svg>
            Telegram
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-content px-4 sm:px-6 pb-10 pt-2 flex flex-col sm:flex-row justify-between gap-3 text-xs text-dim font-mono border-t border-line">
        <p>© 2026 · Самозанятый Чернышев А. В. · ИНН 662941642551</p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <a href="/privacy" className="hover:text-cyan">
            {"// политика конфиденциальности"}
          </a>
          <span>{"// цены не являются публичной офертой"}</span>
        </p>
      </div>
    </footer>
  );
}
