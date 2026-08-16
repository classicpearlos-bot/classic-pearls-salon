import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { businessConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import {
  MapPin,
  Phone,
  Clock,
  Calendar,
  MessageSquare,
  Navigation,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Car,
  DoorOpen,
  Star,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us & Location Directions | Classic Pearl Unisex Salon Arekere',
  description:
    'Visit Classic Pearl Unisex Salon at MNK Arcade, Arekere, Bengaluru. Call +91 83107 30322 or message on WhatsApp. Open 10:00 AM – 09:00 PM Everyday.',
};

export default function ContactPage() {
  const fullAddress = `${businessConfig.address.street}, ${businessConfig.address.city}, ${businessConfig.address.state} ${businessConfig.address.postalCode}`;

  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] min-h-screen py-12 sm:py-20 selection:bg-[#C5A059] selection:text-[#0E0F12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* ================= HERO HEADER ================= */}
        <section className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center space-x-2 bg-[#17181C] border border-[#C5A059]/40 px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#DFBA73] uppercase shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>VISIT & CONNECT</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#FBF9F5] tracking-tight">
            Visit & <span className="italic text-[#DFBA73]">Contact Us</span>
          </h1>

          <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed max-w-2xl mx-auto">
            Experience bespoke hair transformations, Korean skin rituals, and luxury grooming at{' '}
            <strong className="text-[#FBF9F5] font-semibold">Classic Pearl Unisex Salon</strong> in Arekere, Bengaluru. We look forward to welcoming you.
          </p>

          {/* Quick Highlights Bar */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 pt-2 text-xs text-[#DFBA73]">
            <div className="flex items-center space-x-1.5 bg-[#14161B] px-3.5 py-1.5 rounded-full border border-white/5">
              <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
              <span>4.9★ Google Rated Salon</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#14161B] px-3.5 py-1.5 rounded-full border border-white/5">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Open 7 Days a Week</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#14161B] px-3.5 py-1.5 rounded-full border border-white/5">
              <DoorOpen className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Appointments & Walk-ins Welcome</span>
            </div>
          </div>
        </section>

        {/* ================= 2-COLUMN MAIN CONTACT & STOREFRONT SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT COLUMN: CONTACT DETAILS & QUICK ACTIONS */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="bg-[#14161B] p-6 sm:p-8 rounded-2xl border border-[#C5A059]/25 shadow-xl space-y-6">
              
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#C5A059] block mb-1">
                  SALON INFORMATION
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5]">
                  Classic Pearl Unisex Salon
                </h2>
              </div>

              {/* Detail Items */}
              <div className="space-y-6 text-sm">
                
                {/* Address Item */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#1C1E24] border border-[#C5A059]/30 flex items-center justify-center flex-shrink-0 text-[#C5A059] shadow-md group-hover:border-[#DFBA73] transition-colors">
                    <MapPin className="w-5 h-5 text-[#DFBA73]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C5A059] block">
                      Physical Address
                    </span>
                    <p className="text-[#FBF9F5] font-medium leading-snug">
                      {fullAddress}
                    </p>
                    <p className="text-[#A39E93] text-xs pt-1 flex items-center gap-1.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                      <span><strong>Landmark:</strong> Beside Camry Hospital, 80ft BDA Main Road</span>
                    </p>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start space-x-4 group border-t border-white/5 pt-5">
                  <div className="w-11 h-11 rounded-xl bg-[#1C1E24] border border-[#C5A059]/30 flex items-center justify-center flex-shrink-0 text-[#C5A059] shadow-md group-hover:border-[#DFBA73] transition-colors">
                    <Phone className="w-5 h-5 text-[#DFBA73]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C5A059] block">
                      Direct Telephone & Call Inquiries
                    </span>
                    <div>
                      <a
                        href={`tel:${businessConfig.phoneRaw}`}
                        className="text-lg sm:text-xl font-bold text-[#DFBA73] hover:text-[#FBF9F5] transition-colors inline-block tracking-wide"
                      >
                        {businessConfig.phone}
                      </a>
                    </div>
                    <p className="text-[#A39E93] text-xs">
                      Tap to call instantly for inquiries or appointments
                    </p>
                  </div>
                </div>

                {/* Hours Item */}
                <div className="flex items-start space-x-4 group border-t border-white/5 pt-5">
                  <div className="w-11 h-11 rounded-xl bg-[#1C1E24] border border-[#C5A059]/30 flex items-center justify-center flex-shrink-0 text-[#C5A059] shadow-md group-hover:border-[#DFBA73] transition-colors">
                    <Clock className="w-5 h-5 text-[#DFBA73]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C5A059] block">
                      Operating Hours
                    </span>
                    <p className="text-[#FBF9F5] font-semibold text-base">
                      10:00 AM – 09:00 PM Everyday
                    </p>
                    <p className="text-[#DFBA73] text-xs font-medium">
                      Monday through Sunday • Open All 7 Days
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3.5">
                <a
                  href={businessConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:opacity-95 text-[#0E0F12] px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#0E0F12]" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0E0F12]/80" />
                </a>

                <a
                  href={getWhatsAppConciergeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#17181C] hover:bg-[#202229] border border-[#C5A059]/40 text-[#DFBA73] hover:text-[#FBF9F5] px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

            </div>

            {/* Salon Visit Perks Card */}
            <div className="bg-[#17181C]/90 p-5 rounded-2xl border border-white/5 space-y-3">
              <h3 className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                Guest Experience Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#A39E93]">
                <div className="flex items-center gap-2 bg-[#121316] p-2.5 rounded-lg border border-white/5">
                  <Car className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
                  <span>Convenient Street & Arcade Parking</span>
                </div>
                <div className="flex items-center gap-2 bg-[#121316] p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
                  <span>1st Floor with Lift & Stair Access</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: PROMINENT REAL SALON STOREFRONT IMAGE */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 rounded-3xl overflow-hidden border-2 border-[#C5A059]/40 bg-[#14161B] shadow-[0_0_35px_rgba(197,160,89,0.15)] flex flex-col">
              
              {/* Image Frame Container */}
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-full min-h-[340px] overflow-hidden group">
                <Image
                  src="/salon-storefront.jpg"
                  alt="Classic Pearl Unisex Salon storefront in Arekere Bengaluru"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Gradient Overlays for Luxury Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-[#0E0F12]/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F12]/60 via-transparent to-transparent"></div>

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="bg-[#0E0F12]/85 backdrop-blur-md border border-[#C5A059]/50 px-3.5 py-1.5 rounded-full flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-[#DFBA73] shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Official Salon Storefront</span>
                  </div>

                  <div className="bg-[#0E0F12]/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[10px] sm:text-xs text-[#FBF9F5] font-medium shadow-lg">
                    1st Floor • MNK Arcade
                  </div>
                </div>

                {/* Bottom Storefront Details Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-[#0E0F12]/90 backdrop-blur-md border border-[#C5A059]/30 p-4 sm:p-5 rounded-2xl shadow-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl text-[#FBF9F5] font-semibold">
                        Classic Pearl Unisex Salon
                      </h3>
                      <p className="text-xs text-[#DFBA73]">
                        MNK Arcade, 80ft BDA Main Road, Arekere
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-[#C5A059]/20 text-[#DFBA73] text-[10px] sm:text-xs px-2.5 py-1 rounded-md border border-[#C5A059]/30 font-bold uppercase tracking-wider">
                        Open Daily
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#A39E93] leading-relaxed pt-1 border-t border-white/10">
                    Located right beside Camry Hospital. Spot our distinctive Classic Pearl sign on the 1st floor of MNK Arcade.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </section>

        {/* ================= EMBEDDED GOOGLE MAPS SECTION ================= */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#C5A059] block mb-1">
                LOCATION & DIRECTIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5]">
                Find Us on <span className="italic text-[#DFBA73]">Google Maps</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#A39E93] mt-1">
                MNK Arcade, 36, 80ft BDA Main Rd, beside Camry hospital, Arekere, Bengaluru 560076
              </p>
            </div>
            
            <div>
              <a
                href={businessConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#17181C] hover:bg-[#202229] border border-[#C5A059]/40 text-[#DFBA73] px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3 h-3 text-[#DFBA73]" />
              </a>
            </div>
          </div>

          {/* Responsive Map Container with Gold Border */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#C5A059]/30 shadow-2xl bg-[#14161B]">
            <iframe
              title="Classic Pearl Unisex Salon Location Map"
              src="https://maps.google.com/maps?q=MNK+Arcade,+80ft+BDA+Main+Rd,+Arekere,+Bengaluru,+Karnataka+560076&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[360px] sm:h-[450px] filter grayscale-[15%] contrast-[105%]"
            />

            {/* Quick Map Floating Hint */}
            <div className="absolute bottom-4 left-4 bg-[#0E0F12]/90 backdrop-blur-md border border-[#C5A059]/40 px-3.5 py-2 rounded-xl text-[11px] sm:text-xs text-[#FBF9F5] shadow-xl hidden sm:flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
              <span>MNK Arcade, 1st Floor • Arekere, Bengaluru</span>
            </div>
          </div>
        </section>

        {/* ================= BOOK YOUR VISIT CTA SECTION ================= */}
        <section className="bg-gradient-to-br from-[#17181C] via-[#14161B] to-[#0E0F12] border border-[#C5A059]/40 rounded-3xl p-8 sm:p-12 lg:p-16 text-center space-y-8 shadow-[0_0_40px_rgba(197,160,89,0.12)] relative overflow-hidden">
          
          {/* Decorative subtle background elements */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#DFBA73]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#C5A059] block">
              SCHEDULE YOUR VISIT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5] leading-tight">
              Ready for Your <span className="italic text-[#DFBA73]">Transformation?</span>
            </h2>
            <p className="text-xs sm:text-base text-[#A39E93] leading-relaxed max-w-2xl mx-auto font-light">
              Book your customized salon session online or connect directly with our beauty concierge on WhatsApp. We provide transparent pricing, master stylists, and immaculate hygiene.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto pt-2">
            <Link
              href="/book"
              className="w-full sm:w-auto flex-1 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:opacity-95 text-[#0E0F12] px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl transition-all"
            >
              <Calendar className="w-4 h-4 text-[#0E0F12]" />
              <span>Book Appointment</span>
            </Link>

            <a
              href={getWhatsAppConciergeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 bg-[#17181C] hover:bg-[#22242B] border border-[#C5A059]/50 text-[#DFBA73] hover:text-[#FBF9F5] px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-[#C5A059]" />
              <span>WhatsApp Booking</span>
            </a>
          </div>

          {/* Fast Call Option */}
          <div className="relative z-10 pt-4 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A39E93]">
            <span>Prefer to speak directly?</span>
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-[#DFBA73] hover:text-[#FBF9F5] font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Call {businessConfig.phone}</span>
            </a>
            <span className="text-[#C5A059]">•</span>
            <span className="text-[#FBF9F5]">10:00 AM – 09:00 PM Everyday</span>
          </div>

        </section>

      </div>
    </div>
  );
}
