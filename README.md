# Classic Pearls — Ultra-Luxury Salon Web Application

A world-class, production-ready luxury beauty salon web application engineered with Next.js (App Router), TypeScript, Tailwind CSS, and semantic HTML5. Built for **Classic Pearls** (`classicpearls.vercel.app`), optimized for Meta Ads compliance, Google Search Console integration, and high-conversion VIP concierge booking.

---

## 🌟 Key Features

- **"Haute Elegance & Pearl Lustre" Aesthetic**: Alabaster pearl cream (`#FBF9F5`), cashmere (`#F3EFE6`), deep onyx (`#0E0F12`), noir charcoal (`#17181C`), and champagne gold accents (`#C5A059`, `#DFBA73`).
- **Typography Hierarchy**: Editorial serif (*Cormorant Garamond*) paired with crisp modern sans (*Plus Jakarta Sans*).
- **Private Concierge Booking Engine (`/book`)**: 5-step interactive wizard with service search, artisan selection, preferred time slot picker, client details, consent validation, and confirmation ticket with `.ics` calendar download and WhatsApp prefill.
- **Separate Women & Men Service Portfolios**: Strict categorization across Haute Coiffure, French Balayage, Skincare Facials, Bridal Penthouse Atelier, Nail Artistry, and Men's Grooming Lounge.
- **Interactive Before/After Slider**: Touch- and mouse-enabled transformation comparison slider.
- **Service Detail Slide-Over Drawer**: Interactive drawer providing in-depth ritual breakdown, preparation tips, and direct booking trigger.
- **Full Meta Ads & Google Compliance Suite**:
  - `facebook-domain-verification` & `google-site-verification` header hooks
  - Meta Pixel & GA4 event tracker (PII-safe)
  - Privacy Policy (`/privacy-policy`)
  - Terms of Service (`/terms`)
  - Appointment & Cancellation Policy (`/cancellation-policy`)
  - Satisfaction & Refund Policy (`/refund-policy`)
  - Concierge FAQ Accordion (`/faq`)
  - Verified Business NAP & Schema.org `BeautySalon` structured data
- **Vercel Edge Ready**: Optimized with zero-config deployment, dynamic `sitemap.xml`, and `robots.txt`.

---

## 📁 Project Architecture

```text
classic-pearls-salon/
├── app/
│   ├── layout.tsx              # Root layout with fonts, JSON-LD Schema & verification hooks
│   ├── page.tsx                # Luxury 11-section editorial Homepage
│   ├── globals.css             # Luxury color variables & Tailwind CSS
│   ├── services/page.tsx       # Filterable service discovery & drawer
│   ├── experience/page.tsx     # The 5 Pillars of Atelier Hospitality
│   ├── lookbook/page.tsx       # Transformation gallery & Before/After slider
│   ├── artisans/page.tsx       # Master artisans directory with bio modals
│   ├── bridal/page.tsx         # Haute Bridal Penthouse Atelier
│   ├── about/page.tsx          # Atelier heritage, standards & craftsmanship
│   ├── contact/page.tsx        # Verified NAP & inquiry form
│   ├── book/page.tsx           # Dedicated VIP Concierge booking page
│   ├── privacy-policy/page.tsx # Meta & GDPR compliant privacy policy
│   ├── terms/page.tsx          # Terms of service
│   ├── cancellation-policy/    # 24-hour appointment & rescheduling policy
│   ├── refund-policy/          # 7-day satisfaction & adjustment policy
│   ├── faq/page.tsx            # Interactive luxury FAQ accordion
│   ├── not-found.tsx           # Luxury 404 page ("The Page Has Left The Atelier")
│   ├── robots.ts               # Dynamic robots.txt
│   └── sitemap.ts              # Dynamic sitemap.xml
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky glassmorphism header & mobile navigation
│   │   ├── Footer.tsx          # NAP verified footer with compliance badges
│   │   ├── CookieConsent.tsx   # Privacy cookie consent banner
│   │   └── FloatingWhatsApp.tsx# Mobile-safe floating concierge button
│   ├── booking/
│   │   └── BookingConcierge.tsx# 5-step VIP booking engine
│   └── ui/
│       ├── Modal.tsx           # Accessible dialog modal (Escape & focus trap)
│       ├── BeforeAfterSlider.tsx# Interactive touch/mouse comparison slider
│       └── ServiceDetailDrawer.tsx # Slide-over service detail view
│
├── data/
│   ├── services.ts             # Typed salon services catalog
│   ├── artisans.ts             # Master artisans directory
│   ├── lookbook.ts             # Lookbook gallery items
│   ├── testimonials.ts         # Client notes (clearly labeled development placeholders)
│   └── faq.ts                  # Salon FAQ repository
│
├── lib/
│   ├── config.ts               # Centralized configuration & environment variables
│   ├── types.ts                # TypeScript data interfaces
│   ├── schema.ts               # Google Schema.org BeautySalon JSON-LD
│   ├── analytics.ts            # Privacy-safe event tracking (Meta Pixel / GA4)
│   ├── whatsapp.ts             # Clean WhatsApp URL generator
│   └── calendar.ts             # ICS calendar file generator
│
├── .env.example                # Environment variables template
├── VERIFICATION.md             # Complete Meta & Google verification guide
└── package.json
```

---

## 🚀 Quickstart & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Test Production Build
```bash
npm run build
npm run start
```

---

## 🌐 Deploying to Vercel (`classicpearls.vercel.app`)

### Option A: Via Vercel CLI (1 Command)
```bash
npx vercel
```
1. Follow the terminal prompt to log into your Vercel account.
2. Link to project `classicpearls`.
3. Your site is live instantly with free SSL/HTTPS!

### Option B: Via GitHub Repository
1. Push this directory to your GitHub account.
2. Go to [Vercel Dashboard](https://vercel.com) $\rightarrow$ **Add New Project** $\rightarrow$ Import your repo.
3. In Project Settings $\rightarrow$ Environment Variables, paste values from `.env.example`.
4. Click **Deploy**.

---

## 🛡️ Meta Ads Account Restriction Appeal Protocol
Review [`VERIFICATION.md`](./VERIFICATION.md) for step-by-step instructions on verifying your domain in Meta Business Suite, installing your Pixel, and submitting your appeal.
