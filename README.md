# Hands-On Innovations — Landing Page

A one-page marketing site for Hands-On Innovations, built with Next.js (App Router), TypeScript and Tailwind CSS. Deployed to Vercel at `www.hands-on.ae`.

## What's included

- Single scrolling landing page: Hero, Industries, Products (5 display types), Cloud CMS, Why Us, How It Works, Contact.
- Animated hero background (`public/videos/hero.mp4` / `hero.webm`) — a looping video generated from `banner.jpeg` with a slow zoom and drifting smoke, used in place of a static image. Falls back to the still photo automatically for visitors with "reduce motion" enabled (`components/Hero.tsx`), and always falls back gracefully if video can't load.
- A working "Request a Demo" contact form (`components/ContactForm.tsx`) that posts to `app/api/contact/route.ts`, which sends an email via [Resend](https://resend.com).
- SEO metadata tuned for the UAE market (Open Graph tags, JSON-LD Organization schema, `sitemap.xml`, `robots.txt`), plus a favicon generated from the logo.
- All copy in `lib/content.ts` — edit that one file to change most text on the page (products, industries, CMS features, contact info, etc.) without touching components.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Setting up the contact form (required before launch)

The form is built and wired up, but won't actually send email until you add a Resend API key:

1. Create a free account at [resend.com](https://resend.com).
2. (Recommended) Add and verify the `hands-on.ae` domain in Resend, so you can send from an address like `hello@hands-on.ae`. Until it's verified, you can still test using Resend's shared `onboarding@resend.dev` sender.
3. Generate an API key in the Resend dashboard.
4. Copy `.env.local.example` to `.env.local` and fill in:
   ```
   RESEND_API_KEY=your_key_here
   CONTACT_TO_EMAIL=sales@hands-on.ae
   CONTACT_FROM_EMAIL=Hands-On Innovations <hello@hands-on.ae>
   ```
5. Restart the dev server, then submit the form once to confirm an email arrives at `sales@hands-on.ae`.

Until `RESEND_API_KEY` is set, the form fails gracefully with a message asking visitors to email you directly — it won't crash the page. This was verified during build (see the "Verification" note below).

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. In Vercel, "Add New Project" → import the repo (framework preset: Next.js, auto-detected).
3. Under Project Settings → Environment Variables, add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` (same values as your `.env.local`).
4. Deploy.
5. Under Project Settings → Domains, add `www.hands-on.ae` (and `hands-on.ae` with a redirect to `www`), then follow Vercel's DNS instructions with your domain registrar.

## Content you may want to swap in later

- **Display Panel photo** (`public/images/product_1.jpg`) is used as a placeholder for that product category — swap in a dedicated photo once you have one.
- **Testimonials / client logos** — no section exists yet since none were provided; ask and one can be added.
- **Physical address** — the SEO schema currently uses "United Arab Emirates" as the service area with no street address. Add one in `app/layout.tsx` (`jsonLd.address`) if you want it included.
- **Arabic version** — this build is English-only; a bilingual version with a language switcher can be added as a second phase.

## Project structure

```
app/
  layout.tsx             Metadata, JSON-LD, global <html>/<body>
  page.tsx                Assembles all sections
  sitemap.ts               Generates sitemap.xml
  api/contact/route.ts       Contact form email handler (Resend)
components/                 One component per page section
lib/content.ts                All site copy, product data, contact info
public/images/                 Logo, product photos, CMS screenshot, banner
public/robots.txt
```

## Verification performed during build

- `npm run build` completes with no type or lint errors.
- Desktop (1440px) and mobile (390px) screenshots reviewed — all sections render, all images load, no console errors.
- Mobile nav menu opens/closes correctly.
- Contact form: filled and submitted end-to-end. With no `RESEND_API_KEY` set, it correctly shows a friendly inline error instead of crashing. Real email delivery still needs to be tested once you add your Resend API key.
