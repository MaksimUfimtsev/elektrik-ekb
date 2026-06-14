export type CatalogItem = { id: string; label: string; price: number; unit: string; step: number; kw: string };

export const CATALOG: CatalogItem[] = [
  { id: "rozetka", label: "Установка / замена розетки", price: 450, unit: "шт", step: 1, kw: "розетка розетки точка" },
  { id: "vykl", label: "Установка / замена выключателя", price: 450, unit: "шт", step: 1, kw: "выключатель" },
  { id: "spot", label: "Монтаж точечного светильника", price: 600, unit: "шт", step: 1, kw: "спот свет светильник точечный" },
  { id: "lustra", label: "Установка люстры", price: 1500, unit: "шт", step: 1, kw: "люстра свет" },
  { id: "bra", label: "Установка бра / настенного светильника", price: 800, unit: "шт", step: 1, kw: "бра светильник настенный" },
  { id: "lenta", label: "Монтаж светодиодной ленты", price: 400, unit: "м", step: 1, kw: "лента подсветка led светодиод" },
  { id: "kabel", label: "Прокладка / замена кабеля", price: 300, unit: "м", step: 5, kw: "кабель проводка провод линия замена" },
  { id: "kabel_open", label: "Прокладка кабеля в кабель-канале", price: 150, unit: "м", step: 5, kw: "кабель канал открыто" },
  { id: "shtrob_beton", label: "Штробление в бетоне", price: 450, unit: "м", step: 5, kw: "штроба штробление бетон" },
  { id: "shtrob_kirpich", label: "Штробление в кирпиче", price: 350, unit: "м", step: 5, kw: "штроба штробление кирпич" },
  { id: "shtrob_gazo", label: "Штробление в газоблоке", price: 250, unit: "м", step: 5, kw: "штроба штробление газоблок газобетон" },
  { id: "podrozetnik", label: "Установка подрозетника (бетон)", price: 300, unit: "шт", step: 1, kw: "подрозетник коробка" },
  { id: "raspayka", label: "Монтаж распаячной коробки", price: 500, unit: "шт", step: 1, kw: "распаячная распаечная коробка коммутация" },
  { id: "shchit12", label: "Сборка щита (до 12 модулей)", price: 6000, unit: "усл.", step: 1, kw: "щит щиток сборка автоматы" },
  { id: "shchit24", label: "Сборка щита (до 24 модулей)", price: 9000, unit: "усл.", step: 1, kw: "щит щиток сборка автоматы большой" },
  { id: "avtomat", label: "Установка автомата / УЗО / дифавтомата", price: 400, unit: "шт", step: 1, kw: "автомат узо диф дифавтомат защита" },
  { id: "schetchik", label: "Замена однофазного счётчика", price: 3000, unit: "шт", step: 1, kw: "счётчик счетчик учёт прибор" },
  { id: "varochnaya", label: "Подключение варочной панели", price: 1500, unit: "шт", step: 1, kw: "варочная панель плита кухня техника" },
  { id: "duhovka", label: "Подключение духового шкафа", price: 1200, unit: "шт", step: 1, kw: "духовой шкаф духовка кухня техника" },
  { id: "vodonagrev", label: "Подключение водонагревателя", price: 1500, unit: "шт", step: 1, kw: "водонагреватель бойлер техника" },
  { id: "teply_pol", label: "Монтаж тёплого пола", price: 800, unit: "м²", step: 1, kw: "тёплый теплый пол обогрев" },
  { id: "termoreg", label: "Установка терморегулятора", price: 1000, unit: "шт", step: 1, kw: "терморегулятор тёплый пол" },
  { id: "vytyazhka", label: "Монтаж вентилятора / вытяжки", price: 1000, unit: "шт", step: 1, kw: "вытяжка вентилятор вентиляция" },
  { id: "diagnostika", label: "Поиск неисправности / диагностика", price: 1000, unit: "выезд", step: 1, kw: "диагностика поиск неисправность ремонт" },
];

export const POPULAR = ["rozetka", "spot", "kabel", "shchit12", "teply_pol"];

export type GalItem = { f: string; cat: "shchit" | "rozetki" | "provodka" | "svet"; t: string };

export const GAL: GalItem[] = [
  { f: "shchit-1.jpg", cat: "shchit", t: "Сборка электрощита" },
  { f: "rozetki-1.jpg", cat: "rozetki", t: "Розетки и выключатели" },
  { f: "provodka-1.jpg", cat: "provodka", t: "Прокладка проводки" },
  { f: "svet-1.jpg", cat: "svet", t: "Монтаж освещения" },
  { f: "shchit-2.jpg", cat: "shchit", t: "Сборка электрощита" },
  { f: "rozetki-2.jpg", cat: "rozetki", t: "Розетки и выключатели" },
  { f: "provodka-2.jpg", cat: "provodka", t: "Прокладка проводки" },
  { f: "svet-2.jpg", cat: "svet", t: "Монтаж освещения" },
  { f: "shchit-3.jpg", cat: "shchit", t: "Сборка электрощита" },
  { f: "rozetki-3.jpg", cat: "rozetki", t: "Розетки и выключатели" },
  { f: "provodka-3.jpg", cat: "provodka", t: "Прокладка проводки" },
  { f: "svet-3.jpg", cat: "svet", t: "Монтаж освещения" },
  { f: "shchit-4.jpg", cat: "shchit", t: "Сборка электрощита" },
  { f: "rozetki-4.jpg", cat: "rozetki", t: "Розетки и выключатели" },
  { f: "provodka-4.jpg", cat: "provodka", t: "Прокладка проводки" },
  { f: "svet-4.jpg", cat: "svet", t: "Монтаж освещения" },
  { f: "shchit-5.jpg", cat: "shchit", t: "Сборка электрощита" },
  { f: "rozetki-5.jpg", cat: "rozetki", t: "Розетки и выключатели" },
  { f: "provodka-5.jpg", cat: "provodka", t: "Прокладка проводки" },
  { f: "svet-5.jpg", cat: "svet", t: "Монтаж освещения" },
  { f: "shchit-6.jpg", cat: "shchit", t: "Сборка электрощита" },
  { f: "rozetki-6.jpg", cat: "rozetki", t: "Розетки и выключатели" },
  { f: "provodka-6.jpg", cat: "provodka", t: "Прокладка проводки" },
  { f: "svet-6.jpg", cat: "svet", t: "Монтаж освещения" },
  { f: "shchit-7.jpg", cat: "shchit", t: "Сборка электрощита" },
  { f: "provodka-7.jpg", cat: "provodka", t: "Прокладка проводки" },
  { f: "shchit-8.jpg", cat: "shchit", t: "Сборка электрощита" },
  { f: "provodka-8.jpg", cat: "provodka", t: "Прокладка проводки" },
  { f: "shchit-9.jpg", cat: "shchit", t: "Сборка электрощита" },
];

export const GAL_FILTERS: { cat: string; label: string }[] = [
  { cat: "all", label: "[ ВСЕ ]" },
  { cat: "shchit", label: "ЩИТЫ" },
  { cat: "rozetki", label: "РОЗЕТКИ" },
  { cat: "provodka", label: "ПРОВОДКА" },
  { cat: "svet", label: "СВЕТ" },
];

export type Service = { t: string; d: string; p: string; icon: string };

export const SERVICES: Service[] = [
  ["Замена проводки", "Полная или частичная, штробление, новые линии.", "от 19 000 ₽", "M13 2 4 14h7l-1 8 9-12h-7l1-8Z"],
  ["Розетки и выключатели", "Монтаж, перенос, замена, новые точки.", "от 300 ₽", "M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0V8ZM12 16v6"],
  ["Сборка электрощита", "УЗО, дифавтоматы, подпись групп, ввод.", "от 4 500 ₽", "M4 2h16v20H4zM8 6h8M8 10h8M8 14h5"],
  ["Освещение и люстры", "Точечный свет, люстры, подсветка.", "от 1 000 ₽", "M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z"],
  ["Электромонтаж под ключ", "Квартира или дом полностью, по проекту.", "от 13 500 ₽", "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2ZM9 22V12h6v10"],
  ["Подключение техники", "Варочные панели, духовые шкафы, вытяжки.", "от 800 ₽", "M2 6h20v12H2zM7 10h.01M7 14h6"],
  ["Тёплый пол", "Монтаж, терморегулятор, подключение.", "от 600 ₽/м²", "M14 4v10.5a3.5 3.5 0 1 1-4 0V4a2 2 0 1 1 4 0Z"],
  ["Диагностика и ремонт", "Поиск неисправности, устранение.", "от 1 000 ₽", "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm10 17-4.3-4.3"],
].map(([t, d, p, icon]) => ({ t, d, p, icon }));

export const fmtPlain = (n: number) => new Intl.NumberFormat("ru-RU").format(Math.round(n));
export const fmt = (n: number) => fmtPlain(n) + " ₽";
