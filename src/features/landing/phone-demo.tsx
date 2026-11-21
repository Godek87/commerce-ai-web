"use client";

import { useCycle } from "./use-cycle";

const frames = [
  { badge: "Listening…", caption: "“Find a linen summer blazer, size M”", emoji: "🎙", price: "" },
  { badge: "Found 14 options", caption: "Best on price and reviews — beige linen.", emoji: "🧥", price: "₺1 890" },
  { badge: "Added to cart · M", caption: "Want matching linen trousers?", emoji: "🧥", price: "₺1 890" },
  { badge: "Ready to pay", caption: "Address and card filled in. Please confirm.", emoji: "✅", price: "₺1 890" },
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
              <small>SUMMER LINEN</small>
              <strong>Blazer, beige</strong>
              {f.price}
            </span>
          )}
        </div>
        <p className="lp-phone-caption" key={`c-${index}`}>
          {f.caption}
        </p>
        <span className="lp-voice-ring" />
        <span className="lp-online">● Online</span>
        <div className="lp-phone-controls">
          <span className="lp-mic">🎙</span>
          <span className="lp-close">✕</span>
        </div>
      </div>
    </div>
  );
}
