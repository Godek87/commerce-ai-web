"use client";

import { useCycle } from "./use-cycle";

const messages = [
  { from: "me", text: "Закажи корм для кота, как в прошлый раз", time: "10:24" },
  { from: "agent", text: "Нашёл тот же корм, 4 кг — ₺689 на Trendyol (было ₺749).", time: "10:24" },
  { from: "agent", text: "Доставка завтра на ваш адрес. Оформить?", time: "10:24" },
  { from: "me", text: "Да", time: "10:25" },
  { from: "agent", text: "✓ Корзина и адрес готовы. Ссылка на оплату ниже.", time: "10:25" },
] as const;

// Extra ticks at the end keep the full thread on screen before restarting.
const HOLD = 2;

export function WhatsAppDemo() {
  const { index } = useCycle(messages.length + HOLD, 1700);
  const shown = Math.min(index + 1, messages.length);
  const typing = shown < messages.length && messages[shown].from === "agent";

  return (
    <div className="lp-wa" aria-hidden>
      <div className="lp-wa-head">
        <span className="lp-wa-avatar">AI</span>
        <div>
          <strong>Commerce AI</strong>
          <small>WhatsApp</small>
        </div>
        <span className="lp-wa-tag">WhatsApp</span>
      </div>
      <div className="lp-wa-body">
        {messages.slice(0, shown).map((m, i) => (
          <div key={i} className={`lp-wa-msg lp-wa-msg--${m.from}`}>
            {m.text}
            <time>
              {m.time}
              {m.from === "me" && " ✓✓"}
            </time>
          </div>
        ))}
        {typing && (
          <div className="lp-wa-typing">
            <i />
            <i />
            <i />
          </div>
        )}
      </div>
      <div className="lp-wa-input">Сообщение</div>
    </div>
  );
}
