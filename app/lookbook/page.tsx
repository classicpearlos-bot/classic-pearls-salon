'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LOOKBOOK_ITEMS } from '@/data/lookbook';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import { ArrowRight } from 'lucide-react';

export default function LookbookPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = LOOKBOOK_ITEMS.filter((item) =>
    selectedCategory === 'all' ? true : item.category === selectedCategory
  );

  return (
    <div className="bg-onyx text-pearl min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-8 mb-24">
          <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-bold block">
            The Archive
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl text-pearl leading-[1.1]">
            Signature <span className="italic text-gold-soft">Transformations</span>
          </h1>
          <p className="text-sm text-pearl/60 font-light leading-relaxed max-w-2xl mx-auto">
            Witness real transformations in hair color, Balayage, Nano Plastia, skin luminescence, and grooming crafted at Classic Pearls Unisex Salon.
          </p>
        </div>

        {/* Featured Interactive Before/After Showcase */}
        <div className="max-w-5xl mx-auto space-y-8 mb-32">
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold block">Masterwork</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-pearl">Champagne Pearl Balayage & Glaze</h2>
          </div>
          <div className="border border-pearl/10 p-2 sm:p-4 bg-charcoal">
            <BeforeAfterSlider
              beforeImage={LOOKBOOK_ITEMS[0].beforeImage || LOOKBOOK_ITEMS[0].image}
              afterImage={LOOKBOOK_ITEMS[0].afterImage || LOOKBOOK_ITEMS[0].image}
              beforeLabel="BEFORE"
              afterLabel="AFTER"
              altText="Balayage Transformation"
            />
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          {[
            { id: 'all', label: 'All Works' },
            { id: 'color', label: 'Balayage & Color' },
            { id: 'treatments', label: 'Botox & Nano Plastia' },
            { id: 'skin', label: 'Korean Glass Skin' },
            { id: 'bridal', label: 'Bridal Makeovers' },
            { id: 'mens', label: "Men's Grooming" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-6 py-2 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                selectedCategory === tab.id
                  ? 'border-b border-gold text-gold-soft'
                  : 'border-b border-transparent text-pearl/50 hover:text-pearl'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Editorial Format) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 animate-fade-in-up">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/5] bg-charcoal overflow-hidden relative mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 bg-onyx/80 backdrop-blur px-4 py-2 text-[9px] font-sans uppercase tracking-[0.2em] text-gold border-t border-r border-pearl/10">
                    {item.categoryLabel}
                  </div>
                </div>

                <div className="space-y-4 px-2">
                  <h3 className="font-serif text-2xl text-pearl group-hover:text-gold-soft transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-pearl/50 leading-relaxed font-light">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="mt-8 pt-6 border-t border-pearl/5 flex items-center justify-between px-2">
                <div>
                  <span className="font-serif text-xl text-pearl block">₹{item.memberPrice}</span>
                  <span className="text-[9px] font-sans text-pearl/30 uppercase tracking-[0.2em]">
                    Regular: ₹{item.regularPrice}
                  </span>
                </div>

                <Link
                  href={`/book?service=${encodeURIComponent(item.serviceId)}`}
                  className="text-gold hover:text-pearl transition-colors flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase"
                >
                  <span>Book Exact</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-32">
          <Link
            href="/book"
            className="inline-flex items-center justify-center space-x-3 bg-pearl text-onyx hover:bg-gold px-12 py-5 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors"
          >
            <span>Begin Your Transformation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
