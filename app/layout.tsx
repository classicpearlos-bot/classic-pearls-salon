import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { siteConfig, verificationConfig } from '@/lib/config';
import { getSalonSchemaJsonLd } from '@/lib/schema';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/layout/CookieConsent';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Classic Pearls | Haute Coiffure & Luxury Beauty Lounge',
    template: '%s | Classic Pearls',
  },
  description: siteConfig.description,
  keywords: [
    'Luxury salon',
    'Haute Coiffure',
    'Balayage',
    'Aesthetic facials',
    'Bridal hair and makeup',
    'Classic Pearls',
    'Bespoke beauty atelier',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: 'Classic Pearls | Haute Coiffure & Luxury Beauty Lounge',
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Classic Pearls Luxury Atelier',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Classic Pearls | Haute Coiffure & Luxury Beauty Lounge',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  other: {
    ...(verificationConfig.metaDomainVerification
      ? { 'facebook-domain-verification': verificationConfig.metaDomainVerification }
      : {}),
    ...(verificationConfig.googleSiteVerification
      ? { 'google-site-verification': verificationConfig.googleSiteVerification }
      : {}),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = getSalonSchemaJsonLd();

  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <head>
        {/* Google Structured Data / Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0E0F12] text-[#FBF9F5] antialiased selection:bg-[#C5A059] selection:text-[#0E0F12]">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
