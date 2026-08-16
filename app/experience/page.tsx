import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export const metadata = {
  title: 'The Salon Experience | Classic Pearl Unisex Salon Bengaluru',
  description: 'Discover the 5 pillars of hospitality and beauty care at Classic Pearl Unisex Salon.',
};

export default function ExperiencePage() {
  const pillars = [
    {
      num: '01',
      title: 'Detailed Consultation & Diagnostic',
      subtitle: 'The Foundation of Beauty',
      desc: 'We start by examining your hair porosity, scalp condition, and facial structure before recommending any cut or treatment.',
    },
    {
      num: '02',
      title: 'Botanical & Ammonia-Free Products',
      subtitle: 'Pure Care',
      desc: 'We use high-end organic bond builders, nourishing hair spas, and certified skin care formulations.',
    },
    {
      num: '03',
      title: 'Precision Craftsmanship',
      subtitle: 'Skilled Artistry',
      desc: 'From French Balayage to Korean Glass Facials and beard contouring, every service is delivered with care.',
    },
    {
      num: '04',
      title: 'Relaxing Salon Atmosphere',
      subtitle: 'Complete Comfort',
      desc: 'Enjoy a calm, refreshing salon environment equipped with modern styling chairs and clean stations.',
    },
    {
      num: '05',
      title: 'Home Maintenance Guidance',
      subtitle: 'Long-Lasting Results',
      desc: 'We provide post-treatment advice so your hair and skin remain vibrant long after your visit.',
    },
  ];

  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            SALON STANDARDS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FBF9F5]">
            The Classic Pearl <span className="italic text-[#DFBA73]">Experience</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed">
            Our hospitality protocol ensures every visit is relaxing, personalized, and rewarding.
          </p>
        </div>

        {/* Pillars List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="bg-[#14161B] border border-white/5 hover:border-[#C5A059]/40 rounded-xl p-8 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl"
            >
              <div className="flex items-start gap-6">
                <span className="font-serif text-4xl font-bold text-[#C5A059] flex-shrink-0">{p.num}</span>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#A39E93] font-bold block">{p.subtitle}</span>
                  <h3 className="font-serif text-2xl text-[#FBF9F5]">{p.title}</h3>
                  <p className="text-xs text-[#A39E93] leading-relaxed pt-1">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link
            href="/book"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-8 py-4 rounded text-xs font-bold uppercase tracking-wider shadow-xl"
          >
            <span>Book Your Experience</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
