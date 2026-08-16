import React from 'react';
import Link from 'next/link';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { Sparkles, Calendar, MessageSquare, CheckCircle2, Crown, HeartHandshake, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Bridal Makeovers & Hair Studio | Classic Pearl Unisex Salon Bengaluru',
  description: 'Bridal hair styling, 18-hour HD airbrush makeup, and full bridal party coordination at Classic Pearl Unisex Salon, Bengaluru.',
};

export default function BridalPage() {
  const bridalOfferings = [
    {
      title: 'Bridal Preview & Trial Session',
      timeline: '4–8 Weeks Prior to Wedding',
      desc: 'A comprehensive session where we test multiple hair silhouettes with your veil, hair jewelry, and custom skin prep regimen.',
      tier: 'Preview & Consultation',
    },
    {
      title: 'The Signature Bridal Experience',
      timeline: 'Day of Wedding',
      desc: 'Exclusive bridal makeover on your wedding day. Includes couture bridal hair styling, 18-hour waterproof HD airbrush artistry, and attentive styling.',
      tier: 'Bridal Makeover',
    },
    {
      title: 'Bridal Party & Family Styling',
      timeline: 'Customized Group Package',
      desc: 'Coordinated hair and makeup styling for bridesmaids, mothers of the bride and groom, and family members.',
      tier: 'Family Curation',
    },
    {
      title: 'Destination & Venue Styling Team',
      timeline: 'Venue Availability',
      desc: 'Our senior bridal artists travel directly to your wedding destination or luxury venue with full professional kit.',
      tier: 'On-Location Team',
    },
  ];

  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#17181C] border border-[#C5A059]/40 px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.25em] text-[#DFBA73] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>BRIDAL STUDIO • CLASSIC PEARL UNISEX SALON</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FBF9F5] leading-tight">
            Elegance for the <span className="italic text-[#DFBA73]">Unforgettable.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#A39E93] max-w-2xl mx-auto font-light leading-relaxed">
            Professional bridal makeup and hair styling designed to make your wedding morning effortless, luminous, and completely memorable.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book"
              className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-8 py-4 rounded text-xs font-bold tracking-widest uppercase shadow-xl"
            >
              Book Bridal Consultation
            </Link>
            <a
              href={getWhatsAppConciergeUrl('Hello Classic Pearl Unisex Salon, I would like to enquire about bridal makeover packages.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#17181C] border border-[#C5A059]/40 text-[#DFBA73] px-6 py-4 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Bridal Chat</span>
            </a>
          </div>
        </div>

        {/* Bridal Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="rounded-xl overflow-hidden border border-white/10 aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80"
              alt="Bridal Hair Styling"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-[#C5A059]/30 aspect-[3/4] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
              alt="Bridal Glow"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80"
              alt="Bridal Makeup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bridal Portfolio Packages */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
              BRIDAL PACKAGES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5]">Bridal Offerings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bridalOfferings.map((offering, idx) => (
              <div
                key={idx}
                className="bg-[#14161B] border border-white/10 hover:border-[#C5A059]/40 rounded-xl p-8 space-y-4 shadow-xl transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-[#C5A059] uppercase tracking-wider font-bold block mb-1">
                      {offering.timeline}
                    </span>
                    <h3 className="font-serif text-2xl text-[#FBF9F5]">{offering.title}</h3>
                  </div>
                  <span className="text-[10px] font-bold text-[#DFBA73] uppercase tracking-wider bg-[#17181C] px-3 py-1 rounded border border-[#C5A059]/30">
                    {offering.tier}
                  </span>
                </div>
                <p className="text-xs text-[#A39E93] leading-relaxed font-light">{offering.desc}</p>
                <div className="pt-2">
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-1.5 text-xs text-[#DFBA73] hover:underline font-bold uppercase tracking-wider"
                  >
                    <span>Request Consultation</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bridal Promise */}
        <div className="bg-[#17181C] border border-[#C5A059]/30 rounded-xl p-10 max-w-4xl mx-auto text-center space-y-4 shadow-2xl">
          <HeartHandshake className="w-10 h-10 text-[#C5A059] mx-auto" />
          <h3 className="font-serif text-3xl text-[#FBF9F5]">The Classic Pearl Bridal Promise</h3>
          <p className="text-xs text-[#A39E93] max-w-xl mx-auto leading-relaxed font-light">
            We ensure our makeup artists and hair stylists are completely devoted to your wedding schedule with premium products and personalized attention.
          </p>
        </div>

      </div>
    </div>
  );
}
