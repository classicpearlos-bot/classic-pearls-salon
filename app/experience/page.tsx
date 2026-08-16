import React from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, HeartHandshake, Eye, Award } from 'lucide-react';

export const metadata = {
  title: 'The Experience | Five Pillars of Atelier Hospitality',
  description: 'Discover the Classic Pearls experience: In-depth consultation, personalized curation, master artistry, meticulous refinement, and dedicated aftercare.',
};

export default function ExperiencePage() {
  const pillars = [
    {
      number: '01',
      title: 'Consultation & Biological Diagnostics',
      subtitle: 'The Foundation of Bespoke Artistry',
      desc: 'Before any shear touches hair or formulation is mixed, our Creative Directors conduct a diagnostic examining facial bone architecture, natural growth vectors, skin undertones, and lifestyle demands.',
      highlight: 'Microscopic scalp & hair strand integrity analysis included.',
    },
    {
      number: '02',
      title: 'Curation & Bespoke Formulations',
      subtitle: 'Organic Restorative Chemistry',
      desc: 'Every treatment formula is custom blended at our color bar using organic amino acid peptides, bond multipliers, and crushed pearl pigments tailored to prevent cuticle fatigue.',
      highlight: 'Zero formaldehyde and 100% cruelty-free botanical infusions.',
    },
    {
      number: '03',
      title: 'Master Artistry Execution',
      subtitle: 'Uncompromising Precision',
      desc: 'Executed in the serene comfort of our private styling suites with dedicated beverage curation, ambient acoustic design, and ergonomic Italian leather styling stations.',
      highlight: 'One-on-one undivided artisan attention throughout your visit.',
    },
    {
      number: '04',
      title: 'Refinement & Diagnostic Review',
      subtitle: 'Perfection in Movement',
      desc: 'Final architectural checks under multi-spectrum lighting ensuring color transitions appear seamless both in direct daylight and low-lit evening settings.',
      highlight: 'Signature botanical velvet blowout with heat-protection seal.',
    },
    {
      number: '05',
      title: 'Dedicated Aftercare & Return Protocol',
      subtitle: 'Sustained Luminescence',
      desc: 'You receive a personalized maintenance itinerary, customized home-care recommendations, and scheduled tone-refresh timelines to keep your hair and skin in prime condition.',
      highlight: 'Complimentary 7-day adjustment guarantee.',
    },
  ];

  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            THE PRIVATE SANCTUARY
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FBF9F5]">
            The Art of <span className="italic text-[#DFBA73]">Hospitality</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed">
            At Classic Pearls, beauty is not a transaction—it is a serene, highly personalized ritual orchestrated by masters of their craft.
          </p>
        </div>

        {/* 5 Pillars Timeline */}
        <div className="space-y-12 mb-20 max-w-5xl mx-auto">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-[#14161B] border border-white/10 hover:border-[#C5A059]/40 rounded-xl p-8 sm:p-10 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-3 text-left">
                <span className="font-serif text-5xl sm:text-6xl font-bold text-[#DFBA73] block">
                  {pillar.number}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
                  {pillar.subtitle}
                </span>
              </div>

              <div className="md:col-span-9 space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5]">{pillar.title}</h3>
                <p className="text-sm text-[#A39E93] leading-relaxed font-light">{pillar.desc}</p>
                <div className="p-3 bg-[#17181C] rounded-lg border border-[#C5A059]/20 text-xs text-[#DFBA73] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-[#17181C] border border-[#C5A059]/30 rounded-xl p-12 max-w-3xl mx-auto shadow-2xl">
          <h3 className="font-serif text-3xl text-[#FBF9F5] mb-4">Experience the Atelier Firsthand</h3>
          <p className="text-xs text-[#A39E93] max-w-md mx-auto mb-8">
            Reserve your consultation with our master artisans and discover the art of bespoke beauty.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-8 py-4 rounded text-xs font-bold tracking-widest uppercase shadow-xl"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve An Experience</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
