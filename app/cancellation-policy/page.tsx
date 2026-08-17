import React from 'react';
import Link from 'next/link';
import { businessConfig } from '@/lib/config';

export const metadata = {
  title: 'Appointment & Cancellation Policy | Classic Pearls Bengaluru',
  description: 'Learn about our 24-hour appointment rescheduling and cancellation guidelines at Classic Pearls Luxury Salon.',
};

export default function CancellationPolicyPage() {
  return (
    <div className="bg-onyx text-pearl min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header */}
        <div className="space-y-6 border-b border-pearl/10 pb-12">
          <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-bold block">
            Client Guidelines
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-pearl leading-[1.1]">
            Appointment & <span className="italic text-gold-soft">Cancellation Policy</span>
          </h1>
          <p className="text-xs text-pearl/50 font-sans uppercase tracking-widest">Last updated: August 2026 • Classic Pearls</p>
        </div>

        {/* Policy Content */}
        <div className="space-y-12 text-sm text-pearl/70 leading-relaxed font-light">
          
          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">1. Respecting Time & Schedule</h2>
            <p className="text-pearl/60">
              At Classic Pearls, our specialists dedicate uninterrupted time slots to each client to ensure unhurried, meticulous artistry. We kindly request timely arrival so we can provide your full treatment duration.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">2. 24-Hour Notice for Rescheduling</h2>
            <p className="text-pearl/60">
              We understand that schedules shift. Should you need to cancel or reschedule your visit, please notify us at least <strong className="text-pearl font-normal">24 hours prior</strong> to your scheduled appointment. This courtesy allows us to accommodate other clients on our waitlist.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">3. Bridal & Multi-Hour Packages</h2>
            <p className="text-pearl/60">
              For extensive multi-hour bridal bookings and group styling sessions, we request at least <strong className="text-pearl font-normal">72 hours advance notice</strong> for any major timing modifications or cancellations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">4. Late Arrivals</h2>
            <p className="text-pearl/60">
              If you anticipate arriving late, please notify our reception team immediately. We will do everything possible to complete your ritual, though your service time may be adjusted if subsequent appointments are booked.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-pearl">5. How to Modify Your Appointment</h2>
            <p className="text-pearl/60">
              To reschedule or cancel your visit, please contact us directly via telephone or WhatsApp at{' '}
              <a href={`tel:${businessConfig.phoneRaw}`} className="text-gold-soft hover:text-gold transition-colors">
                {businessConfig.phone}
              </a>
              . Our salon is open everyday from 10:00 AM to 09:00 PM.
            </p>
          </section>

        </div>

        {/* Back Link */}
        <div className="pt-12 border-t border-pearl/10">
          <Link href="/" className="inline-block text-[10px] uppercase tracking-[0.2em] text-gold hover:text-pearl transition-colors font-bold">
            ← Return to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}
