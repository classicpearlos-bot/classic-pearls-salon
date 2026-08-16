'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LOOKBOOK_ITEMS } from '@/data/lookbook';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import { Sparkles, Calendar, ArrowRight, Tag } from 'lucide-react';

export default function LookbookPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = LOOKBOOK_ITEMS.filter((item) =>
    selectedCategory === 'all' ? true : item.category === selectedCategory
  );

  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#17181C] border border-[#C5A059]/40 px-3.5 py-1 rounded-full text-[10px] tracking-wider text-[#DFBA73] uppercase font-bold">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span>REAL CLIENT RESULTS</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FBF9F5]">
            Transformations <span className="italic text-[#DFBA73]">Lookbook</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed">
            Witness real transformations in hair color, Balayage, Nano Plastia, skin luminescence, and grooming crafted at Classic Pearl Unisex Salon.
          </p>
        </div>

        {/* Featured Interactive Before/After Showcase */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-center space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">Featured Transformation</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5]">Champagne Pearl Balayage & Glaze</h2>
          </div>
          <BeforeAfterSlider
            beforeImage={LOOKBOOK_ITEMS[0].beforeImage || LOOKBOOK_ITEMS[0].image}
            afterImage={LOOKBOOK_ITEMS[0].afterImage || LOOKBOOK_ITEMS[0].image}
            beforeLabel="BEFORE"
            afterLabel="AFTER RESULT"
            altText="Balayage Transformation"
          />
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'All Results' },
            { id: 'color', label: 'Balayage & Color' },
            { id: 'treatments', label: 'Botox & Nano Plastia' },
            { id: 'skin', label: 'Korean Glass Skin' },
            { id: 'bridal', label: 'Bridal Makeovers' },
            { id: 'mens', label: "Men's Grooming" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                selectedCategory === tab.id
                  ? 'bg-[#C5A059] text-[#0E0F12] shadow'
                  : 'bg-[#14161B] text-[#A39E93] hover:text-white border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#14161B] rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A059]/40 transition-all duration-300 group shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold block">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-xl text-[#FBF9F5]">{item.title}</h3>
                  <p className="text-xs text-[#A39E93] leading-relaxed font-light">{item.caption}</p>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="p-6 pt-0 border-t border-white/5 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#A39E93] line-through block">₹{item.regularPrice}</span>
                  <span className="font-serif text-lg font-bold text-[#DFBA73]">₹{item.memberPrice} (Member)</span>
                </div>

                <Link
                  href={`/book?service=${encodeURIComponent(item.serviceId)}`}
                  className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow"
                >
                  Book Similar
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <Link
            href="/book"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-2xl shadow-[#C5A059]/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Transformation</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
