import React from 'react';
import Link from 'next/link';
import { businessConfig } from '@/lib/config';

export const metadata = {
  title: 'Privacy Policy | Classic Pearls Luxury Salon Bengaluru',
  description: 'Privacy policy for Classic Pearls Luxury Salon, Bengaluru compliant with Meta Advertising Standards and data protection regulations.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-3 border-b border-white/10 pb-8">
          <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
            LEGAL COMPLIANCE
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">
            Privacy <span className="italic text-[#DFBA73]">Policy</span>
          </h1>
          <p className="text-xs text-[#A39E93]">Last updated: August 2026 • Classic Pearls Luxury Salon, Bengaluru</p>
        </div>

        {/* Policy Content */}
        <div className="space-y-8 text-xs sm:text-sm text-[#A39E93] leading-relaxed font-light">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">1. Overview & Commitment</h2>
            <p>
              Classic Pearls Luxury Salon ("we", "our", or "us"), located at {businessConfig.address.street}, {businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.postalCode}, is committed to protecting your privacy. This policy outlines how we handle information collected through our website (<code>classicpearls.vercel.app</code>) and appointment booking services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">2. Information We Collect</h2>
            <p>
              When you submit an appointment request, we collect contact information including your name, mobile phone number, and any special service notes you provide. We do not store sensitive payment card information on this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">3. How We Use Information</h2>
            <p>
              We use your information exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Coordinate and confirm your salon appointment schedule via SMS, phone call, or WhatsApp.</li>
              <li>Provide personalized consultations and tailor hair/skin treatments to your history.</li>
              <li>Comply with applicable commercial standards and advertising guidelines.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">4. Advertising & Meta Tracking Compliance</h2>
            <p>
              We may utilize Meta (Facebook) Pixel and standard analytics to measure website interaction and optimize ad delivery. We do not sell or trade your personal data to third parties for marketing purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">5. Contact Us Regarding Your Data</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request deletion of your contact records, you may reach out to us by phone or WhatsApp at{' '}
              <a href={`tel:${businessConfig.phoneRaw}`} className="text-[#DFBA73] font-semibold underline">
                {businessConfig.phone}
              </a>
              {' '}or visit our salon in Arekere, Bengaluru.
            </p>
          </section>

        </div>

        {/* Back Link */}
        <div className="pt-8 border-t border-white/10">
          <Link href="/" className="text-xs uppercase tracking-wider text-[#DFBA73] hover:underline font-bold">
            ← Return to Classic Pearls Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}
