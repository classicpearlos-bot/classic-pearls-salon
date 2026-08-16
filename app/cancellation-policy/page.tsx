import React from 'react';
import { businessConfig } from '@/lib/config';
import { Clock, ShieldCheck, Phone } from 'lucide-react';

export const metadata = {
  title: 'Appointment & Cancellation Policy | Classic Pearls',
  description: 'Learn about the 24-hour cancellation notice and rescheduling guidelines at Classic Pearls luxury salon.',
};

export default function CancellationPolicyPage() {
  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border-b border-white/10 pb-8 mb-10 space-y-2">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            ATELIER SCHEDULING GUIDELINES
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">Appointment & Cancellation Policy</h1>
          <p className="text-xs text-[#A39E93]">
            Designed with mutual respect for our patrons and our master artisans' dedicated time.
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#A39E93] leading-relaxed font-light">
          
          <div className="p-5 bg-[#14161B] rounded-lg border border-[#C5A059]/30 flex items-start gap-4">
            <Clock className="w-6 h-6 text-[#C5A059] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif text-lg text-[#FBF9F5] font-semibold mb-1">Standard 24-Hour Notice Window</h3>
              <p className="text-xs text-[#A39E93]">
                Appointments may be rescheduled or cancelled without fee or penalty up to <strong>24 hours prior</strong> to your scheduled appointment start time.
              </p>
            </div>
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">1. Individual Appointments</h2>
            <p>
              Our Master Artisans reserve an undivided block of time exclusively for you. If you need to modify your reservation, please notify our concierge via phone or WhatsApp at least 24 hours in advance so another patron may be accommodated.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">2. Bridal Suites & Group Bookings</h2>
            <p>
              Due to the extensive multi-stylist preparation required for our private Penthouse Bridal Suite, custom bridal parties require a <strong>72-hour notice</strong> for cancellation or significant rescheduling.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">3. Late Arrivals</h2>
            <p>
              If you anticipate arriving past your appointment time, please alert our concierge. To avoid delaying subsequent scheduled guests, arrivals exceeding 15 minutes may necessitate an abbreviated treatment ritual while retaining the original service scope.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">4. How to Reschedule or Cancel</h2>
            <p>
              Contact our concierge directly via:<br />
              • WhatsApp: <a href={`https://wa.me/${businessConfig.whatsappNumber}`} className="text-[#DFBA73] underline">Click to Message Concierge</a><br />
              • Phone: <a href={`tel:${businessConfig.phone.replace(/[^0-9+]/g, '')}`} className="text-[#DFBA73]">{businessConfig.phone}</a><br />
              • Email: <a href={`mailto:${businessConfig.email}`} className="text-[#DFBA73]">{businessConfig.email}</a>
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
