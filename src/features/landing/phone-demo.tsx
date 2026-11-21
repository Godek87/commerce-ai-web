"use client";

import { useCycle } from "./use-cycle";

const frames = [
  { badge: "Слушаю…", caption: "«Найди льняной пиджак на лето, размер M»", emoji: "🎙", price: "" },
  { badge: "Нашёл 14 вариантов", caption: "Лучший по цене и отзывам — бежевый лён.", emoji: "🧥", price: "₺1 890" },
  { badge: "Добавлено в корзину · M", caption: "Подобрать к нему льняные брюки?", emoji: "🧥", price: "₺1 890" },
  { badge: "Готово к оплате", caption: "Адрес и карта подставлены. Подтвердите.", emoji: "✅", price: "₺1 890" },
];

export function PhoneDemo() {
  const { index } = useCycle(frames.length, 2600);
  const f = frames[index];

  return (
    <div className="lp-phone" aria-hidden>
      <div className="lp-phone-screen">
        <div className="lp-phone-card" key={index}>
          <span className="lp-phone-badge">✓ {f.badge}</span>
          <span className="lp-phone-emoji">{f.emoji}</span>
          {f.price && (
            <span className="lp-phone-price">
              <small>ЛЕТНИЙ ЛЁН</small>
              <strong>Пиджак, бежевый</strong>
              {f.price}
            </span>
          )}
        </div>
        <p className="lp-phone-caption" key={`c-${index}`}>
          {f.caption}
        </p>
        <span className="lp-voice-ring" />
        <span className="lp-online">● Онлайн</span>
        <div className="lp-phone-controls">
          <span className="lp-mic">🎙</span>
          <span className="lp-close">✕</span>
        </div>
      </div>
    </div>
  );
}
