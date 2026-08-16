import React from 'react';
import Link from 'next/link';
import { businessConfig } from '@/lib/config';

export const metadata = {
  title: 'Satisfaction & Service Adjustment Policy | Classic Pearls Bengaluru',
  description: 'Our 7-day client satisfaction guarantee and service adjustment policy at Classic Pearls Luxury Salon.',
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-3 border-b border-white/10 pb-8">
          <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
            CLIENT SATISFACTION
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">
            Satisfaction & <span className="italic text-[#DFBA73]">Adjustment Policy</span>
          </h1>
          <p className="text-xs text-[#A39E93]">Last updated: August 2026 • Classic Pearls Luxury Salon, Bengaluru</p>
        </div>

        {/* Policy Content */}
        <div className="space-y-8 text-xs sm:text-sm text-[#A39E93] leading-relaxed font-light">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">1. Our Craftsmanship Guarantee</h2>
            <p>
              Your satisfaction is central to our work. If you feel your haircut, color tone, or treatment outcome requires refinement, please inform our team within <strong>7 days</strong> of your service date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">2. Complimentary Tonal Adjustments</h2>
            <p>
              For hair color and tonal balances, we offer complimentary adjustment appointments within 7 days of initial service to ensure your look is aligned with your expectations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">3. Product Returns</h2>
            <p>
              Unopened retail hair and skincare products purchased in-salon may be exchanged or returned within 7 days with original receipt.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">4. Contact Us</h2>
            <p>
              To request a service adjustment or feedback discussion, please contact us directly via telephone or WhatsApp at{' '}
              <a href={`tel:${businessConfig.phoneRaw}`} className="text-[#DFBA73] font-semibold underline">
                {businessConfig.phone}
              </a>
              .
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
