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
  { id: "p1", title: "Running sneakers", store: "Trendyol", price: "₺1 899", emoji: "👟", tint: "#eef0ff" },
  { id: "p2", title: "White leather sneakers", store: "Hepsiburada", price: "₺2 349", oldPrice: "₺2 790", emoji: "👟", tint: "#f3f0ff" },
  { id: "p3", title: "Canvas sneakers", store: "Trendyol", price: "₺1 290", emoji: "🥿", tint: "#f0f7ff" },
  { id: "p4", title: "City white sneakers", store: "Hepsiburada", price: "₺1 749", oldPrice: "₺2 190", emoji: "👟", tint: "#eefaf4" },
  { id: "p5", title: "Summer slip-ons", store: "Trendyol", price: "₺990", emoji: "🩴", tint: "#fff6ec" },
  { id: "p6", title: "Trail sneakers", store: "Hepsiburada", price: "₺2 590", emoji: "🥾", tint: "#f6f6f6" },
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
  { key: "ask", tab: "Ask", headline: "You just say what you need.", bubble: "White summer sneakers, size 42, under ₺2 000", from: "user" },
  { key: "search", tab: "Search", headline: "The agent browses stores for you.", bubble: "Checking Trendyol and Hepsiburada…", from: "agent" },
  { key: "compare", tab: "Compare", headline: "It compares prices, sizes and reviews.", bubble: "Best pick: city white, −20%, 4.7★", from: "agent" },
  { key: "cart", tab: "Cart", headline: "It adds the right size to the cart.", bubble: "Added to cart · size 42", from: "agent" },
  { key: "address", tab: "Address", headline: "It fills in your address and card.", bubble: "Delivery: your address · card •• 4242", from: "agent" },
  { key: "done", tab: "Done", headline: "All that's left is tapping “Pay”.", bubble: "All set. Confirm the payment ✓", from: "agent" },
];

export const stores = ["Trendyol", "Hepsiburada", "ÇiçekSepeti"];

export const steps = [
  { n: "01", title: "Talk like you would to a person", copy: "Text or voice, in your language. Or just send a photo of what you need." },
  { n: "02", title: "The agent searches and compares", copy: "It browses local stores in your country and picks the best offers." },
  { n: "03", title: "It places the order", copy: "Cart, size, address and card — handled. Only you confirm the payment." },
];

export const faq = [
  { q: "Do I need to install anything?", a: "No. The web chat runs in your browser. The Chrome extension and WhatsApp are optional." },
  { q: "Can the agent pay without me?", a: "No. The agent stops at the payment step. The CVV and the final confirmation are always yours." },
  { q: "How are my address and card stored?", a: "Card details are encrypted and the CVV is never saved. We ask for your address only once." },
  { q: "Which stores does it search?", a: "Local marketplaces in your country — detected from your phone number." },
  { q: "How much does it cost?", a: "It's free during early access." },
];
