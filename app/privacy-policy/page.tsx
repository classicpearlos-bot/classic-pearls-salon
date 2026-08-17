import React from 'react';
import Link from 'next/link';
import { businessConfig } from '@/lib/config';

export const metadata = {
  title: 'Privacy Policy | Classic Pearls Luxury Salon Bengaluru',
  description: 'Privacy policy for Classic Pearls Luxury Salon, Bengaluru compliant with Meta Advertising Standards and data protection regulations.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-onyx text-pearl min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header */}
        <div className="space-y-6 border-b border-pearl/10 pb-12">
          <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-bold block">
            Legal Compliance
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-pearl leading-[1.1]">
            Privacy <span className="italic text-gold-soft">Policy</span>
          </h1>
          <p className="text-xs text-pearl/50 font-sans uppercase tracking-widest">Last updated: August 2026 • Classic Pearls</p>
        </div>

        {/* Policy Content */}
        <div className="space-y-12 text-sm text-pearl/70 leading-relaxed font-light">
          
          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">1. Overview & Commitment</h2>
            <p className="text-pearl/60">
              Classic Pearls Luxury Salon ("we", "our", or "us"), located at {businessConfig.address.street}, {businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.postalCode}, is committed to protecting your privacy. This policy outlines how we handle information collected through our website (<code>classicpearls.vercel.app</code>) and appointment booking services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">2. Information We Collect</h2>
            <p className="text-pearl/60">
              When you submit an appointment request, we collect contact information including your name, mobile phone number, and any special service notes you provide. We do not store sensitive payment card information on this website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">3. How We Use Information</h2>
            <p className="text-pearl/60">
              We use your information exclusively to:
            </p>
            <ul className="space-y-3 text-pearl/60 pt-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-gold mt-1.5 rounded-full flex-shrink-0"></span>
                <span>Coordinate and confirm your salon appointment schedule via SMS, phone call, or WhatsApp.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-gold mt-1.5 rounded-full flex-shrink-0"></span>
                <span>Provide personalized consultations and tailor hair/skin treatments to your history.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-gold mt-1.5 rounded-full flex-shrink-0"></span>
                <span>Comply with applicable commercial standards and advertising guidelines.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">4. Advertising & Meta Tracking Compliance</h2>
            <p className="text-pearl/60">
              We may utilize Meta (Facebook) Pixel and standard analytics to measure website interaction and optimize ad delivery. We do not sell or trade your personal data to third parties for marketing purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">5. Contact Us Regarding Your Data</h2>
            <p className="text-pearl/60">
              If you have any questions regarding this Privacy Policy or wish to request deletion of your contact records, you may reach out to us by phone or WhatsApp at{' '}
              <a href={`tel:${businessConfig.phoneRaw}`} className="text-gold-soft hover:text-gold transition-colors">
                {businessConfig.phone}
              </a>
              {' '}or visit our salon in Arekere, Bengaluru.
            </p>
          </section>

        </div>

        {/* Back Link */}
        <div className="pt-12 border-t border-pearl/10">
          <Link href="/" className="inline-block text-[10px] uppercase tracking-[0.2em] text-gold hover:text-pearl transition-colors font-bold">
            ← Return to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}
