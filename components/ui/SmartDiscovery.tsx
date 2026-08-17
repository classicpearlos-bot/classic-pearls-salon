'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ALL_SERVICES } from '@/data/services';
import { ServiceItem } from '@/lib/types';
import { ArrowRight, Clock } from 'lucide-react';

interface NeedOption {
  id: string;
  label: string;
  serviceIds: string[];
}

const NEED_OPTIONS: NeedOption[] = [
  {
    id: 'hair-transformation',
    label: 'Hair Transformation',
    serviceIds: ['w-nano-plastia', 'w-botox-hair', 'w-keratin-treatment', 'm-advance-treatments']
  },
  {
    id: 'haircut',
    label: 'Precision Styling',
    serviceIds: ['w-haircut-advance', 'm-haircut-advance', 'w-haircut-basic']
  },
  {
    id: 'color-balayage',
    label: 'Color & Balayage',
    serviceIds: ['w-balayage-ombre', 'w-full-highlights', 'w-global-color', 'w-root-touchup']
  },
  {
    id: 'glowing-skin',
    label: 'Glowing Skin',
    serviceIds: ['korean-glass-facial', 'hydra-facial', 'o3-bridal-facial', 'detan-face-neck']
  },
  {
    id: 'mens-grooming',
    label: "The Gentleman's Room",
    serviceIds: ['m-combo-executive', 'm-haircut-advance', 'm-beard-styling', 'm-advance-treatments']
  }
];

export default function SmartDiscovery() {
  const [selectedNeed, setSelectedNeed] = useState<string>('hair-transformation');

  const currentOption = NEED_OPTIONS.find(o => o.id === selectedNeed) || NEED_OPTIONS[0];
  const recommendedServices: ServiceItem[] = currentOption.serviceIds
    .map(id => ALL_SERVICES.find(s => s.id === id))
    .filter(Boolean) as ServiceItem[];

  return (
    <div className="w-full">
      {/* Editorial Selector */}
      <div className="flex flex-wrap gap-4 mb-16">
        {NEED_OPTIONS.map((opt) => {
          const isSelected = selectedNeed === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setSelectedNeed(opt.id)}
              className={`px-6 py-3 rounded-none font-sans text-xs tracking-widest uppercase transition-all duration-300 ${
                isSelected
                  ? 'bg-pearl text-onyx shadow-[0_0_20px_rgba(251,249,245,0.1)]'
                  : 'bg-charcoal text-pearl/50 hover:text-pearl border border-pearl/10'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Recommended Services List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12 animate-fade-in-up">
        {recommendedServices.map((service, idx) => (
          <div
            key={service.id}
            className="group flex flex-col sm:flex-row gap-6 border-b border-pearl/10 pb-12"
          >
            <div className="w-full sm:w-1/3 shrink-0">
              <div className="aspect-[4/5] overflow-hidden bg-charcoal">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between flex-1 py-2">
              <div className="space-y-4">
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-gold">
                  {service.categoryName}
                </span>
                <h4 className="font-serif text-2xl text-pearl group-hover:text-gold-soft transition-colors leading-snug">
                  {service.name}
                </h4>
                <p className="text-xs text-pearl/50 font-light leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-pearl/40 font-sans">
                  <Clock className="w-3.5 h-3.5 text-gold/50" />
                  <span>{service.duration}</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-pearl/5 flex items-center justify-between">
                <div>
                  <span className="font-serif text-xl text-pearl block">₹{service.memberPrice}</span>
                  {service.memberPrice < service.regularPrice && (
                    <span className="text-[9px] font-sans text-pearl/30 uppercase tracking-widest">
                      Regular: ₹{service.regularPrice}
                    </span>
                  )}
                </div>

                <Link
                  href={`/book?service=${encodeURIComponent(service.id)}`}
                  className="text-gold hover:text-pearl transition-colors flex items-center gap-2 text-xs font-semibold tracking-widest uppercase"
                >
                  <span>Reserve</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
