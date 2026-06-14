"use client";
import { useState } from "react";
import { useEstimate } from "./EstimateProvider";

export default function Contact() {
  const { estimate } = useEstimate();
  const [ok, setOk] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const phone = form.elements.namedItem("phone") as HTMLInputElement;
    const consent = form.elements.namedItem("consent") as HTMLInputElement;
    if (!phone.value.trim()) {
      phone.focus();
      return;
    }
    if (!consent.checked) {
      consent.focus();
      return;
    }
    // TODO: подключить отправку (Telegram-бот / почта / CRM)
    setOk(true);
    form.reset();
  };

  return (
    <section id="contact" className="relative border-b border-line">
      <div
        className="absolute inset-0"
        aria-hidden
        style={{ background: "radial-gradient(60% 60% at 28% 42%,rgba(255,45,149,.18),transparent 70%)" }}
      />
      <div className="absolute inset-0 bg-void/35" aria-hidden />
      <div className="relative mx-auto max-w-content px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div data-reveal="">
          <span className="eyebrow" style={{ color: "#FF7DC0" }}>
            {"// 04 — КОНТАКТ"}
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl uppercase">Рассчитаем за 1 час</h2>
          <p className="mt-4 text-dim max-w-md">
            Оставьте контакт или напишите в Telegram — мастер уточнит детали и назовёт стоимость. Выезд на замер бесплатный.
          </p>

          <a href="https://t.me/fazanulo" className="mt-7 group hud hud-c flex items-center gap-4 p-5 hover:-translate-y-0.5 transition">
            <span className="grid h-14 w-14 place-items-center border border-cyan text-cyan shrink-0" style={{ boxShadow: "0 0 18px rgba(0,229,255,.4)" }} aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 3 2 11l6 2 2 6 3-4 5 4 4-16ZM9 13l8-6-6 8-2-2Z" />
              </svg>
            </span>
            <span>
              <span className="block font-display uppercase text-txt">Написать в Telegram</span>
              <span className="block text-sm text-dim font-mono">@fazanulo · отвечаем сразу</span>
            </span>
            <svg className="ml-auto text-cyan group-hover:translate-x-1 transition" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <ul className="mt-7 space-y-3 text-sm font-mono">
            <li>
              <span className="neonc">+</span> ответим в течение часа
            </li>
            <li>
              <span className="neonc">+</span> честная смета, без навязывания
            </li>
            <li>
              <span className="neonc">+</span> скидка 10% за заказ с сайта
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="hud hud-m p-6 sm:p-8" noValidate data-reveal="" style={{ transitionDelay: ".1s" }}>
          {estimate && <p className="mb-5 border border-cyan/40 bg-cyan/10 px-4 py-3 text-sm neonc font-mono">{estimate}</p>}
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="block eyebrow mb-1.5">
                имя
              </label>
              <input id="name" name="name" type="text" autoComplete="name" required className="w-full bg-void/70 border border-line px-4 py-3 text-txt outline-none focus:border-magenta" placeholder="Как к вам обращаться" />
            </div>
            <div>
              <label htmlFor="phone" className="block eyebrow mb-1.5">
                телефон <span className="neonm">*</span>
              </label>
              <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required className="w-full bg-void/70 border border-line px-4 py-3 text-txt outline-none focus:border-magenta" placeholder="+7 (___) ___-__-__" aria-describedby="phoneHint" />
              <p id="phoneHint" className="mt-1.5 text-xs text-dim font-mono">
                {"// перезвоним в течение часа"}
              </p>
            </div>
            <div>
              <label htmlFor="service" className="block eyebrow mb-1.5">
                что нужно
              </label>
              <select id="service" name="service" className="w-full bg-void/70 border border-line px-4 py-3 text-txt outline-none focus:border-magenta">
                <option>Замена проводки</option>
                <option>Сборка электрощита</option>
                <option>Розетки и выключатели</option>
                <option>Освещение и люстры</option>
                <option>Электромонтаж под ключ</option>
                <option>Подключение техники</option>
                <option>Диагностика / ремонт</option>
                <option>Другое</option>
              </select>
            </div>
            <label className="flex items-start gap-3 text-xs text-dim cursor-pointer">
              <input id="consent" name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-magenta" />
              <span>
                Согласен на обработку персональных данных и принимаю{" "}
                <a href="/privacy" className="neonc underline" target="_blank" rel="noopener">
                  политику конфиденциальности
                </a>
                .
              </span>
            </label>
            <button type="submit" className="btn btn-m w-full">
              Получить расчёт
            </button>
            {ok && (
              <p role="status" aria-live="polite" className="border border-cyan/40 bg-cyan/10 px-4 py-3 text-sm neonc text-center font-mono">
                [ OK ] Заявка принята! Перезвоним в течение часа.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
