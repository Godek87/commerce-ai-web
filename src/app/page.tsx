import { faq, steps, stores } from "@/features/landing/content";
import { PhoneDemo } from "@/features/landing/phone-demo";
import { Storyline } from "@/features/landing/storyline";
import { WhatsAppDemo } from "@/features/landing/whatsapp-demo";

const CHAT_URL = "/chat/";

export default function Home() {
  return (
    <div className="lp">
      <header className="lp-nav">
        <a className="lp-logo" href="/">
          commerce<span>ai</span>
        </a>
        <nav>
          <a href="#how">Как это работает</a>
          <a href="#whatsapp">
            WhatsApp <em>Скоро</em>
          </a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="lp-btn lp-btn--dark" href={CHAT_URL}>
          Начать
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
              <small>Ищет в магазинах вашей страны</small>
            </span>
          </div>
          <h1>
            AI-покупатель,
            <br />
            который <span className="lp-grad">покупает за вас</span>
          </h1>
          <p className="lp-lead">
            Напишите или скажите, что нужно. Агент найдёт, сравнит, положит в корзину и оформит заказ.
            Вам остаётся только подтвердить оплату.
          </p>
          <div className="lp-actions">
            <a className="lp-btn" href={CHAT_URL}>
              Попробовать в чате
            </a>
            <a className="lp-btn lp-btn--ghost" href="#how">
              Как это работает
            </a>
          </div>
          <p className="lp-stores-label">Покупает в любимых магазинах</p>
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
            <p>Одна фраза — и заказ готов</p>
            <button type="button" className="lp-play" aria-label="Видео скоро">
              ▶
            </button>
            <span className="lp-watch">Видео скоро</span>
            <div className="lp-float lp-float--1">
              <small>Вкладок открыть</small>
              <strong>0</strong>
            </div>
            <div className="lp-float lp-float--2">
              <small>От запроса до корзины</small>
              <strong>1 фраза</strong>
            </div>
            <div className="lp-float lp-float--3">
              <small>Оплата</small>
              <strong>только с вами</strong>
            </div>
          </div>
        </section>

        {/* ADVISOR */}
        <section className="lp-card lp-advisor" id="how">
          <div>
            <p className="lp-kicker">● AI Shopper</p>
            <h2>Разговор превращается в покупку.</h2>
            <p className="lp-muted">
              Как личный байер в кармане. Говорите или пишите — агент слушает, подбирает и доводит
              заказ до оплаты, на вашем языке.
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
              Попробовать
            </a>
          </div>
          <PhoneDemo />
        </section>

        <Storyline />

        {/* WHATSAPP */}
        <section className="lp-card lp-wa-section" id="whatsapp">
          <h2>Покупайте прямо из WhatsApp</h2>
          <p className="lp-muted lp-center">
            Без приложений и сайтов. Напишите агенту, как другу — он найдёт, оформит и пришлёт ссылку
            на оплату.
          </p>
          <div className="lp-wa-row">
            <WhatsAppDemo />
            <div className="lp-wa-side">
              <p className="lp-kicker lp-kicker--green">● СКОРО</p>
              <h3>Повторные покупки в одно сообщение</h3>
              <p className="lp-muted">
                Агент помнит, что вы брали раньше, и находит лучшую цену сегодня.
              </p>
              <ul>
                <li>Голосовые сообщения</li>
                <li>Фото вместо описания</li>
                <li>Отслеживание заказа</li>
              </ul>
              <span className="lp-flow">Сообщение → поиск → корзина → оплата</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="lp-card lp-faq" id="faq">
          <h2>Вопросы</h2>
          {faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        {/* CTA */}
        <section className="lp-card lp-cta">
          <h2>Попробуйте на своей покупке</h2>
          <ul>
            <li>✓ Бесплатно в раннем доступе</li>
            <li>✓ Работает в браузере</li>
            <li>✓ Оплату подтверждаете вы</li>
          </ul>
          <a className="lp-btn" href={CHAT_URL}>
            Открыть веб-чат
          </a>
        </section>
      </main>

      <footer className="lp-footer">
        <span>© 2026 Commerce AI</span>
        <span>
          <a href="#">Условия</a> · <a href="#">Конфиденциальность</a>
        </span>
      </footer>
    </div>
  );
}
