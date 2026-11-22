import { faq, steps, stores } from "@/features/landing/content";
import { PhoneDemo } from "@/features/landing/phone-demo";
import { Storyline } from "@/features/landing/storyline";
import { WhatsAppDemo } from "@/features/landing/whatsapp-demo";

// Web app (commerce-web) address; set NEXT_PUBLIC_APP_URL in Cloudflare, e.g. https://app.example.com
const CHAT_URL = process.env.NEXT_PUBLIC_APP_URL ? `${process.env.NEXT_PUBLIC_APP_URL}/chat` : "/chat/";

export default function Home() {
  return (
    <div className="lp">
      <header className="lp-nav">
        <a className="lp-logo" href="/">
          commerce<span>ai</span>
        </a>
        <nav>
          <a href="#how">How it works</a>
          <a href="#whatsapp">
            WhatsApp <em>Soon</em>
          </a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="lp-btn lp-btn--dark" href={CHAT_URL}>
          Get started
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="lp-card lp-hero">
          <div className="lp-proof">
            <span className="lp-avatars" aria-hidden>
              <i>🛍</i>
              <i>👟</i>
              <i>🌷</i>
            </span>
            <span>
              <b>★★★★★</b>
              <small>Shops stores in your country</small>
            </span>
          </div>
          <h1>
            The AI shopper
            <br />
            that <span className="lp-grad">buys for you</span>
          </h1>
          <p className="lp-lead">
            Type or say what you need. The agent finds it, compares, adds it to the cart and checks out.
            All you do is confirm the payment.
          </p>
          <div className="lp-actions">
            <a className="lp-btn" href={CHAT_URL}>
              Try it in chat
            </a>
            <a className="lp-btn lp-btn--ghost" href="#how">
              How it works
            </a>
          </div>
          <p className="lp-stores-label">Shops at your favorite stores</p>
          <div className="lp-marquee" aria-label={stores.join(", ")}>
            <div className="lp-marquee-track">
              {[...stores, ...stores, ...stores, ...stores].map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section className="lp-card lp-video">
          <div className="lp-video-inner">
            <h2>
              <span className="lp-grad">AI</span> Shopper
            </h2>
            <p>One sentence — and the order is ready</p>
            <button type="button" className="lp-play" aria-label="Video coming soon">
              ▶
            </button>
            <span className="lp-watch">Video coming soon</span>
            <div className="lp-float lp-float--1">
              <small>Tabs to open</small>
              <strong>0</strong>
            </div>
            <div className="lp-float lp-float--2">
              <small>Request to cart</small>
              <strong>1 sentence</strong>
            </div>
            <div className="lp-float lp-float--3">
              <small>Payment</small>
              <strong>only with you</strong>
            </div>
          </div>
        </section>

        {/* ADVISOR */}
        <section className="lp-card lp-advisor" id="how">
          <div>
            <p className="lp-kicker">● AI Shopper</p>
            <h2>Conversation becomes a purchase.</h2>
            <p className="lp-muted">
              Like a personal buyer in your pocket. Talk or type — the agent listens, picks and takes
              the order all the way to payment, in your language.
            </p>
            <hr />
            <div className="lp-steps">
              {steps.map((s) => (
                <div key={s.n}>
                  <b>{s.n}</b>
                  <strong>{s.title}</strong>
                  <span>{s.copy}</span>
                </div>
              ))}
            </div>
            <a className="lp-btn" href={CHAT_URL}>
              Try it
            </a>
          </div>
          <PhoneDemo />
        </section>

        <Storyline />

        {/* WHATSAPP */}
        <section className="lp-card lp-wa-section" id="whatsapp">
          <h2>Shop right from WhatsApp</h2>
          <p className="lp-muted lp-center">
            No apps, no websites. Message the agent like a friend — it finds, checks out and sends you
            a payment link.
          </p>
          <div className="lp-wa-row">
            <WhatsAppDemo />
            <div className="lp-wa-side">
              <p className="lp-kicker lp-kicker--green">● SOON</p>
              <h3>Repeat orders in one message</h3>
              <p className="lp-muted">
                The agent remembers what you bought before and finds today's best price.
              </p>
              <ul>
                <li>Voice messages</li>
                <li>Photos instead of descriptions</li>
                <li>Order tracking</li>
              </ul>
              <span className="lp-flow">Message → search → cart → payment</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="lp-card lp-faq" id="faq">
          <h2>FAQ</h2>
          {faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        {/* CTA */}
        <section className="lp-card lp-cta">
          <h2>Try it on your next purchase</h2>
          <ul>
            <li>✓ Free during early access</li>
            <li>✓ Works in your browser</li>
            <li>✓ You confirm the payment</li>
          </ul>
          <a className="lp-btn" href={CHAT_URL}>
            Open web chat
          </a>
        </section>
      </main>

      <footer className="lp-footer">
        <span>© 2026 Commerce AI</span>
        <span>
          <a href="#">Terms</a> · <a href="#">Privacy</a>
        </span>
      </footer>
    </div>
  );
}
