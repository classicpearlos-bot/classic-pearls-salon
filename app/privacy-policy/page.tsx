import React from 'react';
import { businessConfig, siteConfig } from '@/lib/config';
import { ShieldCheck, Lock } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Meta Advertising & Commercial Standards Compliant',
  description: 'Learn how Classic Pearls collects, protects, and handles personal client data in accordance with Meta Advertising Guidelines, GDPR, and CCPA standards.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border-b border-white/10 pb-8 mb-10 space-y-2">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            LEGAL COMPLIANCE & DATA PROTECTION
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">Privacy Policy</h1>
          <p className="text-xs text-[#A39E93]">
            Last Updated: August 2026 | Compliant with Meta Business Advertising Standards, GDPR, and CCPA
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#A39E93] leading-relaxed font-light">
          
          <div className="p-4 bg-[#14161B] rounded-lg border border-[#C5A059]/30 flex items-start gap-3 text-xs text-[#FBF9F5]">
            <ShieldCheck className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block text-[#DFBA73] font-semibold mb-1">Our Privacy Pledge</strong>
              <p className="text-[#A39E93]">
                {businessConfig.legalName} respects personal integrity. We collect only the minimum required contact information necessary to orchestrate salon appointments and maintain safe customer service. We never sell, lease, or monetize personal client data.
              </p>
            </div>
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">1. Scope of This Policy</h2>
            <p>
              This Privacy Policy explains how {businessConfig.legalName} ("we", "our", or "the Atelier") processes personal information collected through our official website (<code>{siteConfig.url}</code>), our online Private Concierge booking system, direct telephone inquiries, and our verified WhatsApp concierge service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">2. Information We Collect</h2>
            <p>We collect information willingly submitted by patrons to schedule appointments and customize beauty rituals:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-[#FBF9F5]">Contact Information:</strong> Full name, mobile telephone number, email address, and WhatsApp contact handle.</li>
              <li><strong className="text-[#FBF9F5]">Service Preferences:</strong> Desired hair/skin treatments, preferred Master Artisan, preferred schedule windows, and past color or allergy notes.</li>
              <li><strong className="text-[#FBF9F5]">Technical Metadata:</strong> Anonymized browser logs, IP addresses, and session cookies solely utilized to prevent fraud and ensure SSL encryption security.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">3. Meta Advertising & Tracking Technologies</h2>
            <p>
              When visitors access our website via Meta platforms (Facebook, Instagram), our website may utilize the Meta Pixel or privacy-safe conversion event tags to evaluate advertising efficacy (such as counting total appointment requests).
            </p>
            <p>
              In accordance with Meta Business Tools terms, we do not transmit sensitive personal data (e.g. client telephone numbers, private medical notes, or individual email addresses) within Meta tracking payloads.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">4. How We Use Client Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To verify artisan availability and confirm appointment schedules.</li>
              <li>To transmit calendar invites (.ics files) and SMS/WhatsApp appointment reminders.</li>
              <li>To tailor color formulations, bond protectors, and skin prep protocols.</li>
              <li>To honor statutory tax, accounting, and business registration requirements.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">5. Your Data Rights & Deletion Requests</h2>
            <p>
              Under applicable privacy statutes (including GDPR and CCPA), you hold the right to inspect, update, or request permanent deletion of your client records. To exercise these rights, email our Privacy Concierge at <a href={`mailto:${businessConfig.email}`} className="text-[#DFBA73] underline">{businessConfig.email}</a>.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">6. Registered Business Entity & Contact</h2>
            <p>
              {businessConfig.legalName}<br />
              {businessConfig.address.street}, {businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.postalCode}, {businessConfig.address.countryName}<br />
              Phone: {businessConfig.phone}<br />
              Email: {businessConfig.email}
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
