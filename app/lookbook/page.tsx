import React from 'react';
import Link from 'next/link';
import { LOOKBOOK_ITEMS } from '@/data/lookbook';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import { ArrowRight, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Lookbook & Transformations | Classic Pearl Unisex Salon Bengaluru',
  description: 'View real transformations in hair color, Balayage, Nano Plastia, and bridal styling at Classic Pearl Unisex Salon.',
};

export default function LookbookPage() {
  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            GALLERY OF ARTISTRY
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FBF9F5]">
            The <span className="italic text-[#DFBA73]">Lookbook</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed">
            Explore transformations in hair color, Balayage, Korean glass facials, and grooming crafted at Classic Pearl Unisex Salon.
          </p>
        </div>

        {/* Before/After Showcase */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-center space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">Featured Transformation</span>
            <h2 className="font-serif text-2xl text-[#FBF9F5]">Champagne Pearl Balayage & Glaze</h2>
          </div>
          <BeforeAfterSlider
            beforeImage={LOOKBOOK_ITEMS[0].beforeImage || LOOKBOOK_ITEMS[0].image}
            afterImage={LOOKBOOK_ITEMS[0].afterImage || LOOKBOOK_ITEMS[0].image}
            beforeLabel="INITIAL"
            afterLabel="TRANSFORMATION"
            altText="Hair Balayage Transformation"
          />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOOKBOOK_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-[#14161B] rounded-xl overflow-hidden border border-white/5 hover:border-[#C5A059]/40 transition-all duration-300 group shadow-xl"
            >
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
                <p className="text-xs text-[#A39E93] leading-relaxed">{item.caption}</p>
                <div className="pt-2">
                  <span className="text-[11px] text-[#DFBA73] font-medium block">
                    Service: {item.serviceName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking CTA */}
        <div className="text-center pt-8">
          <Link
            href="/book"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-8 py-4 rounded text-xs font-bold uppercase tracking-wider shadow-xl"
          >
            <span>Book Your Transformation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
