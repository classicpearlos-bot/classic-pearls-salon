import React, { Suspense } from 'react';
import BookingConcierge from '@/components/booking/BookingConcierge';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: 'Reserve An Experience | VIP Private Concierge | Classic Pearls',
  description: 'Book your bespoke hair, skin, balayage, or bridal consultation with our master artisans.',
};

export default function BookPage() {
  return (
    <div className="bg-onyx text-pearl min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
          <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-bold block">
            Private Reservations
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl text-pearl leading-[1.1]">
            The Atelier <span className="italic text-gold-soft">Concierge</span>
          </h1>
          <p className="text-sm text-pearl/60 font-light max-w-xl mx-auto">
            Select your desired treatment, preferred schedule, and instantly secure your time.
          </p>
        </div>

        <Suspense fallback={<div className="text-center py-32 text-pearl/40 font-sans tracking-[0.2em] uppercase text-xs">Loading Atelier Concierge...</div>}>
          <BookingConcierge />
        </Suspense>

      </div>
    </div>
  );
}
