# Derivative Media — website

Single-page Next.js (App Router) site for Derivative Media Ltd.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit the content

| What | Where |
|---|---|
| Business details, projects | `lib/content.ts` |
| Interface text, homepage copy (English + Welsh) | `lib/i18n.ts` |
| Pillar hubs, councils, bilingual, About (English + Welsh) | `lib/docs.ts` |
| Articles (cluster pages under each pillar) | `lib/articles.ts` |
| Area pages and the "Also covering" list | `lib/areas.ts` |
| Llansannan case study | `app/(en)/work/llansannan-community-council/page.tsx` |
| Colours, layout | `app/globals.css` |

Pages are written as simple blocks (headings, paragraphs, ticks, FAQs). Inline links use `[text](/path)`.
Adding an article to `lib/articles.ts` publishes it, links it from its pillar and footer, and adds it to the sitemap.

English pages live in `app/(en)`, Welsh pages in `app/(cy)/cy`. Each has its own root layout so `<html lang>` is right.
Welsh/English page pairs (for the language switch and hreflang) are listed in `pairs` in `lib/i18n.ts`.

## Deploy to Vercel

1. Push this folder to GitHub (already connected to Vercel).
2. In Vercel, choose **Add New → Project**, import the repo and keep the defaults (framework: Next.js).
3. Add environment variables for the contact form (Settings → Environment Variables):
   - `RESEND_API_KEY` — from https://resend.com
   - `CONTACT_TO` — where enquiries should arrive
   - `CONTACT_FROM` — a sender on a domain you have verified in Resend, e.g. `Website <web@derivativemedia.co.uk>`
4. Deploy, then add your domain under Settings → Domains.

Without `RESEND_API_KEY`, the form still accepts submissions but only writes them to the Vercel function log.
