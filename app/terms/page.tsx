import React from 'react';
import Link from 'next/link';
import { businessConfig } from '@/lib/config';

export const metadata = {
  title: 'Terms of Service | Classic Pearls Luxury Salon Bengaluru',
  description: 'Terms of service and booking conditions for Classic Pearls Luxury Salon, Bengaluru.',
};

export default function TermsPage() {
  return (
    <div className="bg-onyx text-pearl min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header */}
        <div className="space-y-6 border-b border-pearl/10 pb-12">
          <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-bold block">
            Legal Terms
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-pearl leading-[1.1]">
            Terms of <span className="italic text-gold-soft">Service</span>
          </h1>
          <p className="text-xs text-pearl/50 font-sans uppercase tracking-widest">Last updated: August 2026 • Classic Pearls</p>
        </div>

        {/* Terms Content */}
        <div className="space-y-12 text-sm text-pearl/70 leading-relaxed font-light">
          
          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">1. Acceptance of Terms</h2>
            <p className="text-pearl/60">
              By accessing our website (<code>classicpearls.vercel.app</code>) or scheduling services at Classic Pearls Luxury Salon, you agree to these Terms of Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">2. Appointment Requests</h2>
            <p className="text-pearl/60">
              Submitting an appointment request through our website serves as a booking inquiry. Our salon reception verifies availability and confirms the booking with you directly via call or WhatsApp.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">3. Health & Allergy Disclosures</h2>
            <p className="text-pearl/60">
              For your safety and comfort, please inform our team of any known chemical sensitivities, skin allergies, scalp conditions, or recent hair chemical history prior to beginning treatments.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">4. Salon Conduct & Environment</h2>
            <p className="text-pearl/60">
              We maintain a peaceful, respectful atmosphere for all guests. We reserve the right to decline service in rare circumstances of inappropriate behavior.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">5. Contact</h2>
            <p className="text-pearl/60">
              For any questions regarding these terms, reach us at{' '}
              <a href={`tel:${businessConfig.phoneRaw}`} className="text-gold-soft hover:text-gold transition-colors">
                {businessConfig.phone}
              </a>
              {' '}or visit us at {businessConfig.address.street}, {businessConfig.address.city}, Karnataka.
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
