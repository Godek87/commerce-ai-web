import type { Metadata } from "next";
import "./landing.css";

export const metadata: Metadata = {
  title: "Commerce AI — the AI shopper that buys for you",
  description:
    "Say what you need — the agent searches stores in your country, compares, adds to cart and checks out. You only confirm the payment.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
