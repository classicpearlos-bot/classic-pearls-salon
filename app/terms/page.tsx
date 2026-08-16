import React from 'react';
import Link from 'next/link';
import { businessConfig } from '@/lib/config';

export const metadata = {
  title: 'Terms of Service | Classic Pearls Luxury Salon Bengaluru',
  description: 'Terms of service and booking conditions for Classic Pearls Luxury Salon, Bengaluru.',
};

export default function TermsPage() {
  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-3 border-b border-white/10 pb-8">
          <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
            LEGAL TERMS
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">
            Terms of <span className="italic text-[#DFBA73]">Service</span>
          </h1>
          <p className="text-xs text-[#A39E93]">Last updated: August 2026 • Classic Pearls Luxury Salon, Bengaluru</p>
        </div>

        {/* Terms Content */}
        <div className="space-y-8 text-xs sm:text-sm text-[#A39E93] leading-relaxed font-light">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">1. Acceptance of Terms</h2>
            <p>
              By accessing our website (<code>classicpearls.vercel.app</code>) or scheduling services at Classic Pearls Luxury Salon, you agree to these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">2. Appointment Requests</h2>
            <p>
              Submitting an appointment request through our website serves as a booking inquiry. Our salon reception verifies availability and confirms the booking with you directly via call or WhatsApp.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">3. Health & Allergy Disclosures</h2>
            <p>
              For your safety and comfort, please inform our team of any known chemical sensitivities, skin allergies, scalp conditions, or recent hair chemical history prior to beginning treatments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">4. Salon Conduct & Environment</h2>
            <p>
              We maintain a peaceful, respectful atmosphere for all guests. We reserve the right to decline service in rare circumstances of inappropriate behavior.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">5. Contact</h2>
            <p>
              For any questions regarding these terms, reach us at{' '}
              <a href={`tel:${businessConfig.phoneRaw}`} className="text-[#DFBA73] font-semibold underline">
                {businessConfig.phone}
              </a>
              {' '}or visit us at {businessConfig.address.street}, {businessConfig.address.city}, Karnataka.
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
