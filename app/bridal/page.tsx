import React from 'react';
import Link from 'next/link';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { Sparkles, Calendar, MessageSquare, CheckCircle2, Crown, HeartHandshake, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'The Haute Bridal Atelier & Red Carpet Penthouse | Classic Pearls',
  description: 'Private penthouse bridal suites, couture wedding hair styling, 18-hour HD airbrush makeup, and full bridal party coordination.',
};

export default function BridalPage() {
  const bridalOfferings = [
    {
      title: 'The Bridal Preview & Trial Session',
      timeline: '4–8 Weeks Prior to Wedding',
      desc: 'A comprehensive 3-hour diagnostic session where we test multiple hair silhouettes with your veil, hair jewelry, and custom skin prep regimen.',
      tier: 'Private Preview & Trial',
    },
    {
      title: 'The Haute Bridal Penthouse Experience',
      timeline: 'Day of Wedding',
      desc: 'Exclusive private reservation of our penthouse bridal lounge. Includes couture bridal hair architecture, 18-hour waterproof HD airbrush artistry, and dedicated concierge attendants.',
      tier: 'Exclusive Suite Reservation',
    },
    {
      title: 'Bridal Party & Entourage Curation',
      timeline: 'Customized Group Package',
      desc: 'Coordinated hair and makeup styling for the bridal entourage, bridesmaids, and mothers of the bride and groom with tailored champagne service.',
      tier: 'Entourage Curation',
    },
    {
      title: 'Destination & On-Location Styling Team',
      timeline: 'Worldwide Availability',
      desc: 'Our senior bridal team travels directly to your wedding destination or luxury venue with full professional mobile lighting and kit.',
      tier: 'On-Location Atelier',
    },
  ];

  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#17181C] border border-[#C5A059]/40 px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.25em] text-[#DFBA73] uppercase">
            <Crown className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>THE BRIDAL ATELIER</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FBF9F5] leading-tight">
            Elegance for the <span className="italic text-[#DFBA73]">Unforgettable.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#A39E93] max-w-2xl mx-auto font-light leading-relaxed">
            A serene private bridal suite designed to make your wedding morning effortless, luxurious, and completely memorable.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book?service=w-bridal-penthouse"
              className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-8 py-4 rounded text-xs font-bold tracking-widest uppercase shadow-xl"
            >
              Begin Your Bridal Journey
            </Link>
            <a
              href={getWhatsAppConciergeUrl('Hello Classic Pearls, I would like to enquire about reserving the Bridal Penthouse Suite.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#17181C] border border-[#C5A059]/40 text-[#DFBA73] px-6 py-4 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Bridal Concierge</span>
            </a>
          </div>
        </div>

        {/* Bridal Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="rounded-xl overflow-hidden border border-white/10 aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80"
              alt="Bridal Hair Artistry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-[#C5A059]/30 aspect-[3/4] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
              alt="Bridal Glow & Veil"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80"
              alt="Bridal Suite Prep"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bridal Portfolio Packages */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
              BRIDAL RITUALS & SUITES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5]">The Bridal Itinerary</h2>
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
                    href={`/book?service=w-bridal-penthouse`}
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
          <h3 className="font-serif text-3xl text-[#FBF9F5]">The Classic Pearls Bridal Promise</h3>
          <p className="text-xs text-[#A39E93] max-w-xl mx-auto leading-relaxed font-light">
            We accept only one signature bridal party per day to ensure our creative directors, makeup artists, and private penthouse attendants remain entirely devoted to your schedule.
          </p>
        </div>

      </div>
    </div>
  );
}
