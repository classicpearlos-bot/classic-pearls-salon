import React from 'react';
import { businessConfig, siteConfig } from '@/lib/config';

export const metadata = {
  title: 'Terms of Service | Classic Pearls',
  description: 'Terms and conditions governing the use of Classic Pearls online services and salon appointment requests.',
};

export default function TermsPage() {
  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border-b border-white/10 pb-8 mb-10 space-y-2">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            LEGAL AGREEMENT
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">Terms of Service</h1>
          <p className="text-xs text-[#A39E93]">Last Updated: August 2026</p>
        </div>

        <div className="space-y-8 text-sm text-[#A39E93] leading-relaxed font-light">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">1. Acceptance of Terms</h2>
            <p>
              By accessing or browsing <code>{siteConfig.url}</code> or utilizing our appointment concierge system, you agree to be bound by these Terms of Service, all applicable laws and regulations, and our policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">2. Appointment Requests & Confirmation</h2>
            <p>
              Submitting an online booking request through the website constitutes a preliminary scheduling request. An appointment is only confirmed once our concierge staff has verified artisan availability and communicated direct confirmation via Phone, SMS, WhatsApp, or Email.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">3. Pricing & Transparent Estimates</h2>
            <p>
              Service prices listed on the website represent base starting estimates in Indian Rupees (₹). Precise final pricing may vary based on hair length, density, personalized color toner adjustments, or selected add-on treatments discussed during your initial consultation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">4. Atelier Etiquette & Punctuality</h2>
            <p>
              To maintain our serene atmosphere for all guests, patrons are kindly requested to arrive 10 minutes prior to their scheduled start time. Cellular devices should be silenced upon entering the salon suites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">5. Intellectual Property</h2>
            <p>
              All trademarks, photography, treatment names, and editorial text displayed on this website are the proprietary property of {businessConfig.legalName} and may not be reproduced without written authorization.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">6. Inquiries & Contact</h2>
            <p>
              For legal inquiries regarding these terms, please contact: <a href={`mailto:${businessConfig.email}`} className="text-[#DFBA73] underline">{businessConfig.email}</a>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
