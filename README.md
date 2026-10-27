# Derivative Media — website

Single-page Next.js (App Router) site for Derivative Media Ltd.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit the content

All words, services, projects and process steps live in `lib/content.ts`.

- **Projects**: replace the sample entries. Put screenshots in `public/work/` and set `image: "/work/your-shot.jpg"` (16:10 works best), then remove `sample: true`.
- **Email**: set `site.email`.
- **Colours and fonts**: `app/globals.css` (colour tokens at the top) and `app/layout.tsx` (Google Fonts via `next/font`).

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project**, import the repo and keep the defaults (framework: Next.js).
3. Add environment variables for the contact form (Settings → Environment Variables):
   - `RESEND_API_KEY` — from https://resend.com
   - `CONTACT_TO` — where enquiries should arrive
   - `CONTACT_FROM` — a sender on a domain you have verified in Resend, e.g. `Website <web@derivativemedia.co.uk>`
4. Deploy, then add your domain under Settings → Domains.

Without `RESEND_API_KEY`, the form still accepts submissions but only writes them to the Vercel function log.
