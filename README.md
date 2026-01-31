# Parfume Braves — Vite + React

Landing page for _Parfume Braves_ implemented with Vite + React (JavaScript).

Features:

- Hero, Why, Product List (Contentful), CTA (prefill WhatsApp), Social Proof
- Uses Contentful official SDK to fetch products
- Flat design with brown palette, FontAwesome icons
- AIDA-focused copywriting

Getting started:

1. Install dependencies

   npm install

2. Copy env file

   cp .env.example .env.local

3. Run development server

   npm run dev

Build for production:

npm run build
npm run preview

Notes:

- Ensure the Contentful credentials in `.env.local` are correct.
- When deploying, **set the VITE\_\* environment variables in the build environment** (EdgeOne or other host) so Vite can inject them at build time. Required variables:
  - `VITE_CONTENTFUL_SPACE` (e.g. `e0x7i0aawesw`)
  - `VITE_CONTENTFUL_ACCESS_TOKEN` (content delivery access token)
  - `VITE_CONTENTFUL_CONTENT_TYPE` (e.g. `parfumes`)
  - `VITE_WHATSAPP_NUMBER` (your number in international format without `+`, e.g. `6281234567890`)
- If these are missing at build time, the app will fall back to showing no products and a warning will be printed in the browser console; this avoids a white screen crash but the Product List will be empty.
- For EdgeOne: configure environment variables in the project/build settings (not only at runtime).
