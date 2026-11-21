import type { Metadata } from "next";
import "./landing.css";

export const metadata: Metadata = {
  title: "Commerce AI — AI-покупатель, который покупает за вас",
  description:
    "Скажите, что нужно — агент найдёт в магазинах вашей страны, сравнит, положит в корзину и оформит заказ. Оплату подтверждаете вы.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
