import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SEO_PAGES } from '@/data/seoPages';
import { ALL_SERVICES } from '@/data/services';
import { LOOKBOOK_ITEMS } from '@/data/lookbook';
import { businessConfig, siteConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import {
  Calendar,
  Clock,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  Star,
  MapPin
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SEO_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageData = SEO_PAGES[slug];
  if (!pageData) return {};

  return {
    title: pageData.metaTitle,
    description: pageData.metaDescription,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: pageData.metaTitle,
      description: pageData.metaDescription,
      url: `${siteConfig.url}/${slug}`,
      images: [{ url: pageData.heroImage, width: 1200, height: 630 }],
    },
  };
}

export default async function SEOLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const pageData = SEO_PAGES[slug];
  if (!pageData) notFound();

  const service = ALL_SERVICES.find((s) => s.id === pageData.serviceId);
  const relatedLookbook = LOOKBOOK_ITEMS.find((lb) => pageData.relatedLookbookIds.includes(lb.id));

  // JSON-LD Service & FAQ Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': pageData.h1,
    'provider': {
      '@type': 'BeautySalon',
      'name': businessConfig.name,
      'telephone': businessConfig.phone,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': businessConfig.address.street,
        'addressLocality': businessConfig.address.city,
        'postalCode': businessConfig.address.postalCode,
        'addressCountry': 'IN',
      },
    },
    'areaServed': 'Bengaluru, Karnataka',
    'offers': {
      '@type': 'Offer',
      'price': pageData.memberPrice,
      'priceCurrency': 'INR',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': pageData.faqs.map((f) => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.a,
      },
    })),
  };

  return (
    <div className="bg-onyx text-pearl min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
        
        {/* Breadcrumb Header */}
        <div className="flex items-center space-x-3 text-[9px] uppercase tracking-[0.2em] text-pearl/40">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
          <span>/</span>
          <span className="text-gold font-bold">{pageData.keyword}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-10">
            <div className="inline-flex items-center space-x-3 border border-pearl/10 px-4 py-2 text-[9px] tracking-[0.2em] text-gold uppercase font-bold bg-charcoal">
              <MapPin className="w-3 h-3 text-gold" />
              <span>Arekere, Bengaluru • Expert Care</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl text-pearl leading-[1.1]">
              {pageData.h1}
            </h1>

            <p className="text-sm text-pearl/60 leading-relaxed font-light">
              {pageData.subheadline}
            </p>

            {/* Pricing Callout Box */}
            <div className="border border-pearl/10 p-8 flex items-center justify-between bg-charcoal">
              <div>
                <span className="text-[9px] text-pearl/40 uppercase tracking-[0.2em] block mb-1">Standard Rate</span>
                <span className="text-sm text-pearl/40 line-through">₹{pageData.regularPrice}</span>
              </div>
              <div className="text-right">
                <div className="flex items-baseline gap-3 justify-end">
                  <span className="font-serif text-4xl font-normal text-gold">₹{pageData.memberPrice}</span>
                  <span className="text-[9px] font-bold text-onyx bg-pearl px-2 py-1 uppercase tracking-[0.2em]">
                    Member
                  </span>
                </div>
                <span className="text-[10px] text-pearl/50 font-serif italic mt-2 block">
                  Save ₹{pageData.regularPrice - pageData.memberPrice} with Pearl Pass
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href={`/book?service=${encodeURIComponent(pageData.serviceId)}`}
                className="w-full sm:w-auto bg-pearl hover:bg-gold text-onyx px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors text-center"
              >
                Book Appointment
              </Link>
              <a
                href={getWhatsAppConciergeUrl(`Hello Classic Pearls, I would like to enquire about ${pageData.keyword}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-transparent hover:bg-charcoal border border-pearl/20 text-pearl px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-3"
              >
                <MessageSquare className="w-3.5 h-3.5 text-gold" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative border border-pearl/10 bg-charcoal aspect-[4/5] overflow-hidden group">
            <img 
              src={pageData.heroImage} 
              alt={pageData.h1} 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-onyx/20 mix-blend-multiply pointer-events-none" />
          </div>
        </div>

        {/* Why Choose Classic Pearl For This Service */}
        <div className="space-y-16 py-16 border-y border-pearl/10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold block">The Advantage</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-pearl">Why Choose Classic Pearls?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-pearl/10 border border-pearl/10">
            {pageData.whyChoosePoints.map((pt, idx) => (
              <div key={idx} className="bg-onyx p-10 sm:p-14 space-y-4">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-pearl">{pt.title}</h3>
                </div>
                <p className="text-sm text-pearl/50 leading-relaxed font-light pl-9">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Step by Step Treatment Process */}
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold block">The Experience</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-pearl">Step-by-Step Protocol</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pageData.processSteps.map((step, idx) => (
              <div key={idx} className="border border-pearl/10 bg-charcoal p-8 space-y-4">
                <span className="font-serif text-5xl font-light text-pearl/20 block">{step.step}</span>
                <h4 className="font-serif text-xl text-pearl">{step.title}</h4>
                <p className="text-xs text-pearl/50 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Before / After Showcase if available */}
        {relatedLookbook && (
          <div className="border border-pearl/10 p-10 sm:p-16 space-y-10 bg-charcoal">
            <div className="text-center space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold block">Real Result</span>
              <h3 className="font-serif text-3xl sm:text-4xl text-pearl">{relatedLookbook.title}</h3>
            </div>
            <div className="max-w-4xl mx-auto border border-pearl/10">
              <BeforeAfterSlider
                beforeImage={relatedLookbook.beforeImage || relatedLookbook.image}
                afterImage={relatedLookbook.afterImage || relatedLookbook.image}
                beforeLabel="BEFORE"
                afterLabel="AFTER"
                altText={relatedLookbook.title}
              />
            </div>
          </div>
        )}

        {/* FAQs */}
        <div className="space-y-16 max-w-3xl mx-auto">
          <div className="text-center space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold block">Clarifications</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-pearl">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-pearl/10 pb-8 space-y-4">
                <h4 className="font-serif text-2xl text-pearl">{faq.q}</h4>
                <p className="text-sm text-pearl/60 leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking CTA Banner */}
        <div className="border border-gold bg-charcoal p-12 sm:p-20 text-center space-y-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-onyx/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <h2 className="font-serif text-4xl sm:text-6xl text-pearl leading-[1.1] relative z-10">
            Ready for your <span className="italic text-gold-soft">{pageData.keyword}?</span>
          </h2>
          <p className="text-sm text-pearl/60 max-w-2xl mx-auto font-light relative z-10">
            Secure your appointment in seconds or consult our experts directly. No advance payment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 relative z-10">
            <Link
              href={`/book?service=${encodeURIComponent(pageData.serviceId)}`}
              className="w-full sm:w-auto bg-pearl hover:bg-gold text-onyx px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors text-center"
            >
              Book Now
            </Link>
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="w-full sm:w-auto bg-transparent hover:bg-onyx border border-pearl/20 text-pearl px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-3"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>Call Concierge</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
