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
3. Add environment variables for the contact form (Settings → Environment Variables). It sends through your own mailbox over SMTP:
   - `SMTP_HOST`: your email provider's SMTP server (e.g. `smtp.office365.com` for Microsoft 365)
   - `SMTP_PORT`: `587` (or `465` if your provider uses SSL)
   - `SMTP_USER`: the sending mailbox, e.g. `hello@derivativemedia.co.uk`
   - `SMTP_PASS`: its password, or an app password if two-step sign-in is on
   - `SMTP_FROM` (optional): send from an alias, e.g. `hello@` when signing in as `admin@`
   - `CONTACT_TO` (optional): where enquiries go; defaults to `SMTP_FROM`, then `SMTP_USER`
   - Google Workspace: `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=465`, `SMTP_PASS` = a Google app password
4. Deploy, then add your domain under Settings → Domains.

Without the SMTP settings, the form still accepts submissions but only writes them to the Vercel function log.
