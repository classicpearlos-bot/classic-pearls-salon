import React, { Suspense } from 'react';
import BookingConcierge from '@/components/booking/BookingConcierge';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: 'Reserve An Experience | VIP Private Concierge | Classic Pearls',
  description: 'Book your bespoke hair, skin, balayage, or bridal consultation with our master artisans.',
};

export default function BookPage() {
  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            PRIVATE RESERVATIONS
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">
            The Atelier <span className="italic text-[#DFBA73]">Concierge</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#A39E93] font-light">
            Select your desired treatment, preferred artisan, and schedule.
          </p>
        </div>

        <Suspense fallback={<div className="text-center py-20 text-[#A39E93]">Loading Atelier Concierge...</div>}>
          <BookingConcierge />
        </Suspense>

      </div>
    </div>
  );
}
