import React from 'react';
import Link from 'next/link';
import { businessConfig } from '@/lib/config';

export const metadata = {
  title: '24-Hour Appointment & Cancellation Policy | Classic Pearls Bengaluru',
  description: 'Learn about our 24-hour appointment rescheduling and cancellation guidelines at Classic Pearls Luxury Salon.',
};

export default function CancellationPolicyPage() {
  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-3 border-b border-white/10 pb-8">
          <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
            CLIENT GUIDELINES
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">
            Appointment & <span className="italic text-[#DFBA73]">Cancellation Policy</span>
          </h1>
          <p className="text-xs text-[#A39E93]">Last updated: August 2026 • Classic Pearls Luxury Salon, Bengaluru</p>
        </div>

        {/* Policy Content */}
        <div className="space-y-8 text-xs sm:text-sm text-[#A39E93] leading-relaxed font-light">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">1. Respecting Time & Schedule</h2>
            <p>
              At Classic Pearls, our specialists dedicate uninterrupted time slots to each client to ensure unhurried, meticulous artistry. We kindly request timely arrival so we can provide your full treatment duration.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">2. 24-Hour Notice for Rescheduling</h2>
            <p>
              We understand that schedules shift. Should you need to cancel or reschedule your visit, please notify us at least <strong>24 hours prior</strong> to your scheduled appointment. This courtesy allows us to accommodate other clients on our waitlist.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">3. Bridal & Multi-Hour Packages</h2>
            <p>
              For extensive multi-hour bridal bookings and group styling sessions, we request at least <strong>72 hours advance notice</strong> for any major timing modifications or cancellations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">4. Late Arrivals</h2>
            <p>
              If you anticipate arriving late, please notify our reception team immediately. We will do everything possible to complete your ritual, though your service time may be adjusted if subsequent appointments are booked.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5]">5. How to Modify Your Appointment</h2>
            <p>
              To reschedule or cancel your visit, please contact us directly via telephone or WhatsApp at{' '}
              <a href={`tel:${businessConfig.phoneRaw}`} className="text-[#DFBA73] font-semibold underline">
                {businessConfig.phone}
              </a>
              . Our salon is open everyday from 10:00 AM to 09:00 PM.
            </p>
          </section>

        </div>

        {/* Back Link */}
        <div className="pt-8 border-t border-white/10">
          <Link href="/" className="text-xs uppercase tracking-wider text-[#DFBA73] hover:underline font-bold">
            ← Return to Classic Pearls Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}
