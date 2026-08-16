import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { siteConfig, verificationConfig } from '@/lib/config';
import { getSalonSchemaJsonLd } from '@/lib/schema';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import CookieConsent from '@/components/layout/CookieConsent';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Classic Pearl Unisex Salon | Luxury Salon & Spa Arekere, Bengaluru',
    template: '%s | Classic Pearl Unisex Salon',
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Classic Pearl Unisex Salon | Luxury Salon & Spa Bengaluru',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Classic Pearl Unisex Salon Bengaluru',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Classic Pearl Unisex Salon | Luxury Salon & Spa Bengaluru',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const salonSchema = getSalonSchemaJsonLd();

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Google Structured Data JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(salonSchema) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${jakarta.variable} antialiased bg-[#0E0F12] text-[#FBF9F5] selection:bg-[#C5A059] selection:text-[#0E0F12] min-h-screen flex flex-col font-sans`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
      </body>
    </html>
  );
}
