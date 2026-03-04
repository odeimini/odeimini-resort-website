# Ode'imini Resort Website

A professional, photography-forward Northwoods resort brochure website for Ode'imini Resort — a Native-owned, 4-cabin lakeside mini resort in Wisconsin.

## Tech Stack

- **Next.js** (App Router) + **TypeScript** + **Tailwind CSS**
- Minimal dependencies
- No database — all content in config

## Getting Started

> **Note:** If your project folder name contains an apostrophe (e.g. `Ode'imini_resort`), the integrated terminal may fail. Run commands in an external terminal (Command Prompt or PowerShell) or rename the folder.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Editing Content

**All editable text, URLs, and cabin specs live in one file:**

`src/content/site.ts`

- **SITE** — name, tagline, description, email, baseUrl
- **AIRBNB_LISTING_URL** — replace placeholder with your live Airbnb listing when ready
- **NAV_LINKS** — navigation items
- **BANNER** — development banner (enable/disable, text)
- **IMAGES** — paths to hero, cabin, and gallery images
- **STANDARD_CABIN** / **PREMIUM_CABIN** — cabin specs
- **PROPERTY** — lakeshore, elevation, dock, disclaimer
- **ROADMAP** — development phases
- **AMENITIES** — home page amenities grid
- **FAQ_ITEMS** — FAQ questions and answers
- **INVESTOR** — lender/investor page content

## Replacing Images

1. Add your image files to `public/images/`
2. Update paths in `src/content/site.ts` under `IMAGES`
3. Hero: `IMAGES.hero` and `IMAGES.heroAlt`
4. Cabins: `IMAGES.standardCabin`, `IMAGES.premiumCabin`
5. Gallery: `IMAGES.gallery` array (12 items)

You can swap files without code changes — just replace the file at the same path (e.g. `public/images/hero-placeholder.svg` → `public/images/hero.jpg`) and update the path in `site.ts` if the extension changes.

## Updating the Airbnb Link

In `src/content/site.ts`, set:

```ts
export const AIRBNB_LISTING_URL = "https://www.airbnb.com/rooms/your-listing-id";
```

## Deployment

Vercel is connected to the GitHub repo. Pushing to `main` will auto-deploy.

## Pages

| Route       | Description                    |
| ----------- | ------------------------------ |
| `/`         | Home — hero, experience, amenities, cabins, vision |
| `/cabins`   | Standard + premium cabin details |
| `/property` | Lakeshore, elevation, beach plan, dock, storage |
| `/gallery`  | Photo grid (concept + progress) |
| `/faq`      | Booking, policies, dock rules |
| `/contact`  | Email, partnerships, media     |
| `/investors`| Project overview for lenders  |

## Project Overview (Investors)

The `/investors` page is designed for banks, Native CDFIs, grantmakers, and investors. It includes project summary, construction phases, use-of-funds categories, community impact, and risk mitigation. Linked in the footer as "Project Overview" and can be shared directly.
