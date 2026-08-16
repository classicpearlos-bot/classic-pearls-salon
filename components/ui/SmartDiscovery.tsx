'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ALL_SERVICES } from '@/data/services';
import { ServiceItem } from '@/lib/types';
import { Sparkles, Scissors, Palette, Sun, Heart, UserCheck, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

interface NeedOption {
  id: string;
  label: string;
  subtitle: string;
  icon: any;
  serviceIds: string[];
}

const NEED_OPTIONS: NeedOption[] = [
  {
    id: 'haircut',
    label: 'I need a fresh haircut',
    subtitle: 'Precision styling & blow-dry',
    icon: Scissors,
    serviceIds: ['w-haircut-advance', 'm-haircut-advance', 'w-haircut-basic']
  },
  {
    id: 'hair-transformation',
    label: 'I want hair transformation',
    subtitle: 'Botox, Nano Plastia & Keratin',
    icon: Sparkles,
    serviceIds: ['w-nano-plastia', 'w-botox-hair', 'w-keratin-treatment', 'm-advance-treatments']
  },
  {
    id: 'color-balayage',
    label: 'I want hair color or highlights',
    subtitle: 'Balayage & Ammonia-free color',
    icon: Palette,
    serviceIds: ['w-balayage-ombre', 'w-full-highlights', 'w-global-color', 'w-root-touchup']
  },
  {
    id: 'glowing-skin',
    label: 'I need glowing skin & facials',
    subtitle: 'Korean Glass Skin & Hydra Facial',
    icon: Sun,
    serviceIds: ['korean-glass-facial', 'hydra-facial', 'o3-bridal-facial', 'detan-face-neck']
  },
  {
    id: 'wedding-event',
    label: 'I have a wedding or event',
    subtitle: 'Bridal makeovers & party glam',
    icon: Heart,
    serviceIds: ['bridal-complete-package', 'o3-bridal-facial', 'w-balayage-ombre']
  },
  {
    id: 'mens-grooming',
    label: "I need men's grooming & combos",
    subtitle: 'Haircuts, beard & de-tan combos',
    icon: UserCheck,
    serviceIds: ['m-combo-executive', 'm-haircut-advance', 'm-beard-styling', 'm-advance-treatments']
  }
];

export default function SmartDiscovery() {
  const [selectedNeed, setSelectedNeed] = useState<string>('hair-transformation');

  const currentOption = NEED_OPTIONS.find(o => o.id === selectedNeed) || NEED_OPTIONS[1];
  const recommendedServices: ServiceItem[] = currentOption.serviceIds
    .map(id => ALL_SERVICES.find(s => s.id === id))
    .filter(Boolean) as ServiceItem[];

  return (
    <div className="space-y-8">
      {/* Interactive Options Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {NEED_OPTIONS.map((opt) => {
          const isSelected = selectedNeed === opt.id;
          const Icon = opt.icon;
          return (
            <button
              key={opt.id}
              onClick={() => setSelectedNeed(opt.id)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-b from-[#C5A059]/20 to-[#14161B] border-[#C5A059] shadow-lg shadow-[#C5A059]/15 scale-[1.02]'
                  : 'bg-[#14161B] border-white/10 hover:border-[#C5A059]/40 text-[#A39E93]'
              }`}
            >
              <div>
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                    isSelected ? 'bg-[#C5A059] text-[#0E0F12]' : 'bg-[#17181C] text-[#DFBA73] border border-white/5'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className={`text-xs font-bold leading-snug ${isSelected ? 'text-[#FBF9F5]' : 'text-[#DFBA73]'}`}>
                  {opt.label}
                </h4>
              </div>
              <span className="text-[10px] text-[#A39E93] block mt-2 leading-tight font-light">
                {opt.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Recommended Services Result */}
      <div className="bg-[#14161B] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-8 shadow-2xl animate-in fade-in duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4 mb-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block">
              SMART RECOMMENDATIONS
            </span>
            <h3 className="font-serif text-2xl text-[#FBF9F5]">
              Top Choices for <span className="italic text-[#DFBA73]">{currentOption.label}</span>
            </h3>
          </div>
          <span className="text-xs text-[#A39E93] bg-[#0E0F12] px-3 py-1 rounded-full border border-white/10 self-start sm:self-auto">
            {recommendedServices.length} Recommended Options
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#17181C] border border-white/5 hover:border-[#C5A059]/50 rounded-xl overflow-hidden shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0E0F12]/90 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-wider text-[#DFBA73]">
                    {service.categoryName}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h4 className="font-serif text-lg text-[#FBF9F5] group-hover:text-[#DFBA73] transition-colors leading-snug">
                    {service.name}
                  </h4>
                  <p className="text-xs text-[#A39E93] line-clamp-2 font-light leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-[#A39E93]">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{service.duration}</span>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="p-5 pt-0 border-t border-white/5 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#A39E93] block">Regular: <s className="text-[#A39E93]">₹{service.regularPrice}</s></span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-lg font-bold text-[#DFBA73]">₹{service.memberPrice}</span>
                    <span className="text-[9px] font-bold text-emerald-400 uppercase">Member</span>
                  </div>
                </div>

                <Link
                  href={`/book?service=${encodeURIComponent(service.id)}`}
                  className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#DFBA73] hover:to-[#C5A059] text-[#0E0F12] px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
