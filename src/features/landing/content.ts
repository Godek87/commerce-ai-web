// Landing copy and demo data. Real product photos / video go to public/landing/ later.

export type DemoProduct = {
  id: string;
  title: string;
  store: string;
  price: string;
  oldPrice?: string;
  emoji: string;
  tint: string;
};

export const products: DemoProduct[] = [
  { id: "p1", title: "Кроссовки беговые", store: "Trendyol", price: "₺1 899", emoji: "👟", tint: "#eef0ff" },
  { id: "p2", title: "Кроссовки белые, кожа", store: "Hepsiburada", price: "₺2 349", oldPrice: "₺2 790", emoji: "👟", tint: "#f3f0ff" },
  { id: "p3", title: "Кеды canvas", store: "Trendyol", price: "₺1 290", emoji: "🥿", tint: "#f0f7ff" },
  { id: "p4", title: "Кроссовки city white", store: "Hepsiburada", price: "₺1 749", oldPrice: "₺2 190", emoji: "👟", tint: "#eefaf4" },
  { id: "p5", title: "Слипоны летние", store: "Trendyol", price: "₺990", emoji: "🩴", tint: "#fff6ec" },
  { id: "p6", title: "Кроссовки trail", store: "Hepsiburada", price: "₺2 590", emoji: "🥾", tint: "#f6f6f6" },
];

/** Product the agent picks in the storyline. */
export const pickedId = "p4";

export type StoryStage = {
  key: string;
  tab: string;
  headline: string;
  bubble: string;
  from: "user" | "agent";
};

export const story: StoryStage[] = [
  { key: "ask", tab: "Запрос", headline: "Вы просто пишете, что нужно.", bubble: "Белые кроссовки на лето, 42 размер, до ₺2 000", from: "user" },
  { key: "search", tab: "Поиск", headline: "Агент обходит магазины за вас.", bubble: "Смотрю Trendyol и Hepsiburada…", from: "agent" },
  { key: "compare", tab: "Сравнение", headline: "Сравнивает цены, размеры и отзывы.", bubble: "Лучший вариант: city white, −20%, 4.7★", from: "agent" },
  { key: "cart", tab: "Корзина", headline: "Кладёт в корзину нужный размер.", bubble: "Добавил в корзину · размер 42", from: "agent" },
  { key: "address", tab: "Адрес", headline: "Подставляет адрес и карту.", bubble: "Доставка: ваш адрес · карта •• 4242", from: "agent" },
  { key: "done", tab: "Готово", headline: "Вам остаётся нажать «Оплатить».", bubble: "Всё готово. Подтвердите оплату ✓", from: "agent" },
];

export const stores = ["Trendyol", "Hepsiburada", "ÇiçekSepeti"];

export const steps = [
  { n: "01", title: "Говорите как с человеком", copy: "Текстом или голосом, на своём языке. Можно фото того, что нужно." },
  { n: "02", title: "Агент ищет и сравнивает", copy: "Обходит локальные магазины вашей страны, отбирает лучшие предложения." },
  { n: "03", title: "Оформляет заказ", copy: "Корзина, размер, адрес и карта — сам. Оплату подтверждаете только вы." },
];

export const faq = [
  { q: "Нужно ли что-то устанавливать?", a: "Нет. Веб-чат работает в браузере. Расширение для Chrome и WhatsApp — по желанию." },
  { q: "Агент может оплатить без меня?", a: "Нет. Агент доходит до шага оплаты и останавливается. Код CVV и подтверждение — всегда за вами." },
  { q: "Как хранятся адрес и карта?", a: "Данные карты шифруются, CVV не сохраняется. Адрес спрашиваем один раз." },
  { q: "В каких магазинах ищет?", a: "В локальных маркетплейсах вашей страны — страна определяется по номеру телефона." },
  { q: "Сколько это стоит?", a: "Сейчас бесплатно, пока идёт ранний доступ." },
];
