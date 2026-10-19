# Oficina Lume

Marketing site and small client area for a fictional bicycle repair shop in Lisbon. Built with Vite + React + TypeScript + Tailwind CSS, react-router-dom for routing. Pure frontend — no backend, no auth; data lives in local TypeScript files and `localStorage`.

All UI copy is in European Portuguese (pt-PT).

## Routes

| Route            | Description                                                      |
| ---------------- | --------------------------------------------------------------- |
| `/`              | Home — hero, service cards, "Como funciona", testimonials, footer |
| `/precos`        | Pricing table (3 plans), monthly/yearly toggle (−15%), FAQ accordion |
| `/marcar`        | Booking form with zod validation, success toast, localStorage    |
| `/area-cliente`  | Bookings table from localStorage, status badges, summary card, recharts bar chart per month |
| `/sobre`         | Team of 3, map placeholder, opening hours                        |
| `*`              | 404 page                                                         |

## Environment variables

Read at build time via `import.meta.env`. Copy `.env.example` to `.env` to override defaults.

| Variable             | Default                                          | Purpose              |
| -------------------- | ------------------------------------------------ | -------------------- |
| `VITE_SHOP_NAME`     | `Oficina Lume`                                   | Shop name            |
| `VITE_SHOP_PHONE`    | `+351 912 345 678`                               | Phone number         |
| `VITE_SHOP_EMAIL`    | `ola@oficinalume.pt`                             | Email contact        |
| `VITE_SHOP_ADDRESS`  | `Rua das Janelas Verdes 42, 1200-690 Lisboa`     | Address              |

## Features

- Responsive navbar with mobile menu
- Dark / light theme toggle, persisted in `localStorage`
- Custom favicon and OpenGraph image (SVG)
- `/public/robots.txt` and `/public/sitemap.xml` listing all routes
- Bookings persisted in `localStorage` (key: `lume-bookings`)
- Per-month bookings bar chart (recharts)

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run typecheck` — type-check the project
