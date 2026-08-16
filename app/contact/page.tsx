import React from 'react';
import Link from 'next/link';
import { businessConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { MapPin, Phone, Clock, MessageSquare, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Contact & Directions | Classic Pearls Luxury Salon Bengaluru',
  description: 'Visit Classic Pearls Luxury Salon at MNK Arcade, Arekere, Bengaluru. Phone: +91 83107 30322. Open 10:00 AM – 09:00 PM Everyday.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            VISIT & CONNECT
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FBF9F5]">
            Contact & <span className="italic text-[#DFBA73]">Directions</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed">
            We are conveniently located in Arekere, Bengaluru. Reach out to schedule an appointment or ask any questions.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#14161B] p-8 rounded-xl border border-white/10 space-y-6">
              <h2 className="font-serif text-2xl text-[#FBF9F5]">Salon Information</h2>
              
              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FBF9F5] block text-sm mb-0.5">Physical Address</strong>
                    <span className="text-[#A39E93] leading-relaxed block">
                      {businessConfig.address.street}, {businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.postalCode}
                    </span>
                    <span className="text-[#DFBA73] text-[11px] block mt-1">Landmark: Beside Camry Hospital, 80ft BDA Main Road</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 border-t border-white/5 pt-4">
                  <Phone className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FBF9F5] block text-sm mb-0.5">Phone & Calling</strong>
                    <a href={`tel:${businessConfig.phoneRaw}`} className="text-[#DFBA73] font-semibold text-sm">
                      {businessConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 border-t border-white/5 pt-4">
                  <Clock className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FBF9F5] block text-sm mb-0.5">Operating Hours</strong>
                    <span className="text-[#DFBA73] font-medium">10:00 AM – 09:00 PM Everyday (Monday – Sunday)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={businessConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider"
                >
                  Get Directions
                </a>
                <a
                  href={getWhatsAppConciergeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#17181C] hover:bg-[#22242B] border border-[#C5A059]/40 text-[#DFBA73] px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#14161B] p-8 rounded-xl border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#FBF9F5]">Appointment Booking</h2>
              <p className="text-xs text-[#A39E93] leading-relaxed">
                Whether you need a haircut, hair color, facial, or bridal styling, you can easily reserve your appointment online.
              </p>

              <div className="space-y-2 text-xs text-[#DFBA73] pt-2">
                <div className="p-3 bg-[#17181C] rounded border border-white/5 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>Quick confirmation via Phone or WhatsApp</span>
                </div>
                <div className="p-3 bg-[#17181C] rounded border border-white/5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>No deposit required for standard salon visits</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <Link
                href="/book"
                className="w-full block text-center bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] py-3.5 rounded text-xs font-bold uppercase tracking-wider shadow-lg"
              >
                Launch Appointment Booking
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
