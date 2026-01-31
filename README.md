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
- WhatsApp number is set in `VITE_WHATSAPP_NUMBER` (use format without +, e.g., 6281234567890).
