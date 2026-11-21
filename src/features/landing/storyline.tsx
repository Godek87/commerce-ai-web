"use client";

import { pickedId, products, story } from "./content";
import { useCycle } from "./use-cycle";

export function Storyline() {
  const { index, setIndex, setPaused } = useCycle(story.length, 3200);
  const stage = story[index];
  const searching = stage.key === "search";
  const focused = index >= 2;
  const inCart = index >= 3;
  const checkout = index >= 4;

  return (
    <section
      className="lp-card lp-story"
      aria-label="How the AI shopper works"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 className="lp-story-title" key={stage.key}>
        {stage.headline}
      </h2>

      <div className="lp-browser">
        <div className="lp-browser-bar">
          <span className="lp-dots" aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <span className="lp-url">
            {checkout ? "hepsiburada.com/checkout" : "trendyol.com · hepsiburada.com"}
          </span>
          <span className={`lp-bag${inCart ? " is-full" : ""}`} aria-label="Cart">
            🛍{inCart && <b>1</b>}
          </span>
        </div>

        <div className={`lp-grid${searching ? " is-searching" : ""}`}>
          {products.map((p) => {
            const picked = p.id === pickedId;
            const dim = focused && !picked;
            return (
              <div
                key={p.id}
                className={`lp-product${picked && focused ? " is-picked" : ""}${dim ? " is-dim" : ""}`}
                style={{ background: p.tint }}
              >
                <span className="lp-product-emoji" aria-hidden>
                  {p.emoji}
                </span>
                <div className="lp-product-meta">
                  <small>{p.store}</small>
                  <strong>{p.title}</strong>
                  <span>
                    {p.price} {p.oldPrice && <s>{p.oldPrice}</s>}
                  </span>
                </div>
                {picked && inCart && <span className="lp-chip">✓ In cart · 42</span>}
              </div>
            );
          })}
        </div>

        {checkout && (
          <div className="lp-checkout" key="checkout">
            <div>
              <small>Delivery</small>
              <strong>Your address · tomorrow</strong>
            </div>
            <div>
              <small>Card</small>
              <strong>•••• 4242</strong>
            </div>
            <button type="button" className={`lp-pay${stage.key === "done" ? " is-ready" : ""}`}>
              Pay ₺1 749
            </button>
          </div>
        )}

        <div className={`lp-bubble lp-bubble--${stage.from}`} key={`b-${stage.key}`}>
          {stage.from === "agent" && <span className="lp-orb" aria-hidden />}
          {stage.bubble}
        </div>
      </div>

      <div className="lp-tabs" role="tablist">
        {story.map((s, i) => (
          <button
            key={s.key}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={i === index ? "is-active" : undefined}
            onClick={() => setIndex(i)}
          >
            {s.tab}
          </button>
        ))}
      </div>
    </section>
  );
}
