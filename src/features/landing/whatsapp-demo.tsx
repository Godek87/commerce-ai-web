"use client";

import { useCycle } from "./use-cycle";

const messages = [
  { from: "me", text: "Order cat food, same as last time", time: "10:24" },
  { from: "agent", text: "Found the same food, 4 kg — ₺689 on Trendyol (was ₺749).", time: "10:24" },
  { from: "agent", text: "Delivery to your address tomorrow. Place the order?", time: "10:24" },
  { from: "me", text: "Yes", time: "10:25" },
  { from: "agent", text: "✓ Cart and address ready. Payment link below.", time: "10:25" },
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
      <div className="lp-wa-input">Message</div>
    </div>
  );
}
