import React from 'react';
import Link from 'next/link';
import { businessConfig } from '@/lib/config';

export const metadata = {
  title: 'Satisfaction & Service Adjustment Policy | Classic Pearls Bengaluru',
  description: 'Our 7-day client satisfaction guarantee and service adjustment policy at Classic Pearls Luxury Salon.',
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-onyx text-pearl min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header */}
        <div className="space-y-6 border-b border-pearl/10 pb-12">
          <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-bold block">
            Client Satisfaction
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-pearl leading-[1.1]">
            Satisfaction & <span className="italic text-gold-soft">Adjustment Policy</span>
          </h1>
          <p className="text-xs text-pearl/50 font-sans uppercase tracking-widest">Last updated: August 2026 • Classic Pearls</p>
        </div>

        {/* Policy Content */}
        <div className="space-y-12 text-sm text-pearl/70 leading-relaxed font-light">
          
          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">1. Our Craftsmanship Guarantee</h2>
            <p className="text-pearl/60">
              Your satisfaction is central to our work. If you feel your haircut, color tone, or treatment outcome requires refinement, please inform our team within <strong className="text-pearl font-normal">7 days</strong> of your service date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">2. Complimentary Tonal Adjustments</h2>
            <p className="text-pearl/60">
              For hair color and tonal balances, we offer complimentary adjustment appointments within 7 days of initial service to ensure your look is aligned with your expectations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">3. Product Returns</h2>
            <p className="text-pearl/60">
              Unopened retail hair and skincare products purchased in-salon may be exchanged or returned within 7 days with original receipt.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">4. Contact Us</h2>
            <p className="text-pearl/60">
              To request a service adjustment or feedback discussion, please contact us directly via telephone or WhatsApp at{' '}
              <a href={`tel:${businessConfig.phoneRaw}`} className="text-gold-soft hover:text-gold transition-colors">
                {businessConfig.phone}
              </a>
              .
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
