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
  Sparkles,
  Calendar,
  Clock,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Star,
  Tag,
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
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-12 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumb Header */}
        <div className="flex items-center space-x-2 text-xs text-[#A39E93]">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white">Services</Link>
          <span>/</span>
          <span className="text-[#DFBA73] font-medium">{pageData.keyword}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#17181C] border border-[#C5A059]/40 px-3.5 py-1 rounded-full text-[10px] tracking-wider text-[#DFBA73] uppercase font-bold">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              <span>AREKERE, BENGALURU • EXPERT CARE</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5] leading-tight">
              {pageData.h1}
            </h1>

            <p className="text-sm sm:text-base text-[#A39E93] leading-relaxed font-light">
              {pageData.subheadline}
            </p>

            {/* Pricing Callout Box */}
            <div className="bg-[#14161B] border border-[#C5A059]/30 rounded-2xl p-5 flex items-center justify-between shadow-xl">
              <div>
                <span className="text-[10px] text-[#A39E93] uppercase tracking-wider block">Regular Price</span>
                <span className="text-base text-[#A39E93] line-through">₹{pageData.regularPrice}</span>
              </div>
              <div className="text-right">
                <div className="flex items-baseline gap-1.5 justify-end">
                  <span className="font-serif text-3xl font-bold text-[#DFBA73]">₹{pageData.memberPrice}</span>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    Member Rate
                  </span>
                </div>
                <span className="text-[11px] text-emerald-400">Save ₹{pageData.regularPrice - pageData.memberPrice} with Pearl Pass</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={`/book?service=${encodeURIComponent(pageData.serviceId)}`}
                className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-xl shadow-[#C5A059]/20"
              >
                Book Appointment (₹{pageData.memberPrice})
              </Link>
              <a
                href={getWhatsAppConciergeUrl(`Hello Classic Pearl, I would like to enquire about ${pageData.keyword}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#17181C] hover:bg-[#22242B] border border-emerald-500/40 text-emerald-400 px-5 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#C5A059]/30 aspect-[4/3] shadow-2xl">
            <img src={pageData.heroImage} alt={pageData.h1} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Why Choose Classic Pearl For This Service */}
        <div className="space-y-8 bg-[#14161B] p-8 sm:p-10 rounded-3xl border border-white/5 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">THE ADVANTAGE</span>
            <h2 className="font-serif text-3xl text-[#FBF9F5]">Why Choose Classic Pearl Unisex Salon?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageData.whyChoosePoints.map((pt, idx) => (
              <div key={idx} className="bg-[#17181C] p-6 rounded-2xl border border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <h3 className="font-serif text-lg text-[#FBF9F5] font-semibold">{pt.title}</h3>
                </div>
                <p className="text-xs text-[#A39E93] leading-relaxed font-light">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Step by Step Treatment Process */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">THE EXPERIENCE</span>
            <h2 className="font-serif text-3xl text-[#FBF9F5]">Step-by-Step Treatment Protocol</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageData.processSteps.map((step, idx) => (
              <div key={idx} className="bg-[#14161B] p-6 rounded-2xl border border-white/5 space-y-2">
                <span className="font-serif text-3xl font-bold text-[#C5A059] block">{step.step}</span>
                <h4 className="font-serif text-lg text-[#FBF9F5]">{step.title}</h4>
                <p className="text-xs text-[#A39E93] leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Before / After Showcase if available */}
        {relatedLookbook && (
          <div className="bg-[#14161B] p-8 rounded-3xl border border-[#C5A059]/30 space-y-6">
            <div className="text-center space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">REAL TRANSFORMATION RESULT</span>
              <h3 className="font-serif text-2xl text-[#FBF9F5]">{relatedLookbook.title}</h3>
            </div>
            <div className="max-w-3xl mx-auto">
              <BeforeAfterSlider
                beforeImage={relatedLookbook.beforeImage || relatedLookbook.image}
                afterImage={relatedLookbook.afterImage || relatedLookbook.image}
                beforeLabel="BEFORE"
                afterLabel="AFTER RESULT"
                altText={relatedLookbook.title}
              />
            </div>
          </div>
        )}

        {/* FAQs */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">COMMON QUESTIONS</span>
            <h2 className="font-serif text-3xl text-[#FBF9F5]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#14161B] p-6 rounded-2xl border border-white/5 space-y-2">
                <h4 className="font-serif text-lg text-[#FBF9F5]">{faq.q}</h4>
                <p className="text-xs text-[#A39E93] leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking CTA Banner */}
        <div className="bg-gradient-to-r from-[#17181C] via-[#1E2028] to-[#17181C] border-2 border-[#C5A059] rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5]">
            Ready for your {pageData.keyword}?
          </h2>
          <p className="text-xs sm:text-sm text-[#A39E93] max-w-xl mx-auto">
            Book online in 30 seconds or message our stylists directly on WhatsApp. No advance payment required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/book?service=${encodeURIComponent(pageData.serviceId)}`}
              className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-xl"
            >
              Book Now (₹{pageData.memberPrice})
            </Link>
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="bg-[#14161B] border border-white/20 text-[#FBF9F5] px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>Call: {businessConfig.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
