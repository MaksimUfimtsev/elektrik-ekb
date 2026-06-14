import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности · Чернышев А. В.",
  robots: { index: false, follow: true },
};

export default function Privacy() {
  return (
    <main className="relative z-10">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16 leading-relaxed">
        <a href="/" className="eyebrow hover:text-cyan">
          ← на главную
        </a>
        <h1 className="mt-4 font-display text-2xl sm:text-3xl uppercase neonm">Политика конфиденциальности</h1>
        <p className="mt-2 text-sm text-dim font-mono">
          Редакция от 14.06.2026 · Самозанятый Чернышев Александр Витальевич · ИНН 662941642551 (далее — «Исполнитель»)
        </p>

        <p className="mt-6 text-dim">
          Настоящая Политика определяет порядок обработки и защиты персональных данных пользователей сайта в соответствии с
          Федеральным законом № 152-ФЗ «О персональных данных».
        </p>

        <h2 className="mt-8 font-display uppercase text-cyan">1. Какие данные мы собираем</h2>
        <p className="mt-2 text-dim">
          При отправке формы заявки или обращении в мессенджер мы получаем: имя, номер телефона, а также сведения о требуемой услуге,
          которые вы указываете добровольно.
        </p>

        <h2 className="mt-8 font-display uppercase text-cyan">2. Цели обработки</h2>
        <ul className="mt-2 text-dim list-disc pl-5 space-y-1">
          <li>связь с вами для уточнения деталей и расчёта стоимости работ;</li>
          <li>выполнение заявки и заключение договора;</li>
          <li>информирование о статусе работ и акциях (при согласии).</li>
        </ul>

        <h2 className="mt-8 font-display uppercase text-cyan">3. Правовые основания</h2>
        <p className="mt-2 text-dim">
          Обработка осуществляется на основании вашего согласия, выраженного при отправке формы, а также для исполнения договора,
          стороной которого вы являетесь.
        </p>

        <h2 className="mt-8 font-display uppercase text-cyan">4. Передача третьим лицам</h2>
        <p className="mt-2 text-dim">
          Исполнитель не продаёт и не передаёт персональные данные третьим лицам, за исключением случаев, предусмотренных
          законодательством РФ.
        </p>

        <h2 className="mt-8 font-display uppercase text-cyan">5. Срок хранения</h2>
        <p className="mt-2 text-dim">Данные хранятся не дольше, чем этого требуют цели обработки, либо до отзыва согласия.</p>

        <h2 className="mt-8 font-display uppercase text-cyan">6. Ваши права</h2>
        <p className="mt-2 text-dim">
          Вы вправе запросить сведения об обработке ваших данных, потребовать их уточнения, блокирования или удаления, а также
          отозвать согласие, направив обращение на{" "}
          <a href="mailto:ylexandr@yandex.ru" className="neonc">
            ylexandr@yandex.ru
          </a>
          .
        </p>

        <h2 className="mt-8 font-display uppercase text-cyan">7. Контакты</h2>
        <p className="mt-2 text-dim">
          По вопросам обработки персональных данных:{" "}
          <a href="mailto:ylexandr@yandex.ru" className="neonc">
            ylexandr@yandex.ru
          </a>
          , тел.{" "}
          <a href="tel:+79655151501" className="neonc">
            +7 (965) 515-15-01
          </a>
          .
        </p>
      </div>
    </main>
  );
}
