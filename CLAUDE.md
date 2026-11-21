# commerce-ai-web — public site
Next.js 16 static export (`output: "export"`) → Cloudflare Pages (build `npm run build`, out dir `out`).
- src/app/page.tsx — landing; src/app/landing.css — all styles (lp- prefix)
- src/features/landing/ — animated demos (storyline, phone, whatsapp) + content.ts (copy/data)
- src/app/chat/ — web chat (placeholder; will call commerce-backend API)
- Check: `npm run typecheck && npm run build`
- No server code: everything must be static-exportable.
