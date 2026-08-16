'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LOOKBOOK_ITEMS } from '@/data/lookbook';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import Modal from '@/components/ui/Modal';
import { LookbookItem } from '@/lib/types';
import { Calendar, ArrowRight, Eye, Sparkles } from 'lucide-react';

export default function LookbookPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<LookbookItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'color', label: 'Color & Balayage' },
    { id: 'hair', label: 'Haute Coiffure' },
    { id: 'bridal', label: 'Bridal Atelier' },
    { id: 'skin', label: 'Aesthetic Skin' },
    { id: 'mens', label: "Men's Grooming" },
    { id: 'nails', label: 'Nail Artistry' },
  ];

  const filteredItems = LOOKBOOK_ITEMS.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            PORTFOLIO OF ARTISTRY
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FBF9F5]">
            The Classic Pearls <span className="italic text-[#DFBA73]">Lookbook</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed">
            An editorial showcase of hair architecture, chromatic lightening, and bridal elegance crafted by our master artisans.
          </p>
        </div>

        {/* Featured Transformation Slider */}
        <div className="mb-20 bg-[#14161B] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
            <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
              FEATURED TRANSFORMATION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5]">
              Champagne Pearl Balayage & Glaze
            </h2>
            <p className="text-xs text-[#A39E93]">
              Drag the interactive slider to compare initial brassy tones with our signature pearl luminescence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage={LOOKBOOK_ITEMS[0].beforeImage || LOOKBOOK_ITEMS[0].image}
              afterImage={LOOKBOOK_ITEMS[0].afterImage || LOOKBOOK_ITEMS[0].image}
              beforeLabel="INITIAL STATE"
              afterLabel="PEARL BALAYAGE"
              altText="Champagne Pearl Balayage Transformation"
            />
          </div>
        </div>

        {/* Category Filter Navigation */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#C5A059] text-[#0E0F12] shadow-lg shadow-[#C5A059]/20'
                  : 'bg-[#17181C] text-[#A39E93] hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Lookbook Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-xl overflow-hidden bg-[#14161B] border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500 cursor-pointer shadow-xl"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12]/95 via-[#0E0F12]/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold block mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-2xl text-[#FBF9F5] mb-1 group-hover:text-[#DFBA73] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A39E93] font-light line-clamp-2">{item.caption}</p>

                <div className="pt-3 border-t border-white/10 mt-3 flex items-center justify-between text-[11px] text-[#DFBA73]">
                  <span>Artisan: {item.artisanName}</span>
                  <span className="flex items-center gap-1 font-bold">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-[#17181C] border border-[#C5A059]/30 rounded-xl p-12 max-w-3xl mx-auto shadow-2xl">
          <h3 className="font-serif text-3xl text-[#FBF9F5] mb-4">Inspired by a look in our collection?</h3>
          <p className="text-xs text-[#A39E93] max-w-md mx-auto mb-8">
            Our master artisans can recreate or customize any lookbook silhouette to harmonize with your bone structure.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-8 py-4 rounded text-xs font-bold tracking-widest uppercase shadow-xl"
          >
            <Calendar className="w-4 h-4" />
            <span>Consult With Master Artisan</span>
          </Link>
        </div>

      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!activeModalItem}
        onClose={() => setActiveModalItem(null)}
        title={activeModalItem?.title}
        subtitle={activeModalItem?.categoryLabel}
      >
        {activeModalItem && (
          <div className="space-y-6">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-[#A39E93] leading-relaxed">{activeModalItem.caption}</p>
              <div className="p-3 bg-[#17181C] rounded-lg border border-white/5 text-xs text-[#DFBA73] flex justify-between">
                <span>Ritual: {activeModalItem.serviceName}</span>
                <span>Artisan: {activeModalItem.artisanName}</span>
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <Link
                href="/book"
                onClick={() => setActiveModalItem(null)}
                className="bg-[#C5A059] text-[#0E0F12] px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider"
              >
                Reserve This Style
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
