import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { businessConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { MessageSquare, Calendar, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Atelier | Classic Pearls Unisex Salon Bengaluru',
  description:
    'Discover the philosophy behind Classic Pearls Unisex Salon in Arekere, Bengaluru — where world-class artistry meets uncompromising standards.',
};

export default function AboutPage() {
  const whatsappUrl = getWhatsAppConciergeUrl(
    'Hello Classic Pearls, I would like to learn more about your services and book an appointment.'
  );

  return (
    <div className="bg-onyx text-pearl overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/salon-storefront.jpg"
            alt="Classic Pearls Salon Interior"
            className="w-full h-full object-cover object-center grayscale opacity-40 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-onyx/80 via-onyx/60 to-onyx" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center pt-32 pb-24 flex flex-col items-center">
          <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-bold block mb-8">
            The Atelier
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-pearl leading-[0.9] tracking-tight mb-12 max-w-5xl mx-auto">
            The Pursuit of <span className="italic text-gold-soft">Refined</span> Beauty.
          </h1>
          <p className="text-sm md:text-base text-pearl/60 font-light max-w-2xl mx-auto leading-relaxed mb-16">
            Welcome to <strong className="text-pearl font-normal">{businessConfig.name}</strong> — Bengaluru&apos;s most discerning premium unisex salon, where world-class hair artistry and aesthetic skin rituals meet an uncompromising standard of transparency.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-pearl text-onyx hover:bg-gold px-10 py-5 rounded-none text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Appointment</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-transparent hover:bg-charcoal border border-pearl/20 text-pearl px-10 py-5 rounded-none text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300"
            >
              <MessageSquare className="w-4 h-4 text-gold" />
              <span>Enquire</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= OUR PHILOSOPHY SECTION ================= */}
      <section className="py-32 bg-onyx">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Story Text */}
            <div className="lg:col-span-5 space-y-10">
              <span className="text-[10px] font-sans tracking-[0.3em] text-gold uppercase block pb-6 border-b border-gold/20">
                Philosophy
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-pearl leading-[1.1]">
                Precision craft meets <span className="italic text-gold-soft">absolute</span> transparency.
              </h2>

              <div className="space-y-6 text-sm text-pearl/60 leading-relaxed font-light">
                <p>
                  Classic Pearls was born from a straightforward vision: the modern salon experience should be sophisticated, genuinely relaxing, and built entirely on trust. Located in the heart of Arekere, our atelier is a haven for those who demand excellence without pretense.
                </p>
                <p>
                  Whether you visit us for a transformative balayage, advanced Nano Plastia, or a rejuvenating Korean glass skin ritual, every service begins with an attentive consultation tailored to your unique canvas.
                </p>
                <p>
                  We respect our clients&apos; time and intelligence. That is why we operate with clear upfront pricing, zero unrequested upselling, and exclusively authentic formulations from world-leading laboratories.
                </p>
              </div>
            </div>

            {/* Right Immersive Image */}
            <div className="lg:col-span-7">
              <div className="aspect-[4/5] bg-charcoal relative overflow-hidden">
                <img
                  src="/salon-storefront.jpg"
                  alt="Classic Pearls Salon Interior"
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:scale-105 transition-all duration-[1.5s] ease-in-out"
                />
                <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-onyx w-full">
                  <span className="text-[10px] tracking-[0.2em] text-gold uppercase font-bold block mb-2">
                    The Space
                  </span>
                  <p className="text-sm text-pearl/80 font-serif italic text-xl">
                    Designed for comfort, privacy, and precision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE THREE PILLARS (EDITORIAL LIST) ================= */}
      <section className="py-32 bg-charcoal border-y border-pearl/5">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-24">
            <span className="text-[10px] tracking-[0.3em] text-gold uppercase font-bold block mb-6">
              Our Standards
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-pearl">
              Uncompromising <span className="italic text-gold-soft">Excellence</span>.
            </h2>
          </div>

          <div className="space-y-16">
            {/* Pillar 01 */}
            <div className="border-b border-pearl/10 pb-16 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <span className="text-3xl font-serif text-gold-soft/50 font-light">01</span>
              <div>
                <h3 className="font-serif text-3xl text-pearl mb-6">Master Artistry</h3>
                <p className="text-sm text-pearl/60 leading-relaxed font-light max-w-2xl">
                  Our stylists, colorists, and aesthetic skin specialists possess deep domain expertise. We listen closely to your vision, analyze hair texture and skin undertones, and deliver styles designed to look stunning not just on day one, but for weeks after.
                </p>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="border-b border-pearl/10 pb-16 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <span className="text-3xl font-serif text-gold-soft/50 font-light">02</span>
              <div>
                <h3 className="font-serif text-3xl text-pearl mb-6">Authentic Formulations</h3>
                <p className="text-sm text-pearl/60 leading-relaxed font-light max-w-2xl">
                  We believe in zero compromises when it comes to hair and skin health. We exclusively utilize genuine, ammonia-free, formaldehyde-safe, and dermatologically approved formulations from globally acclaimed professional brands.
                </p>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <span className="text-3xl font-serif text-gold-soft/50 font-light">03</span>
              <div>
                <h3 className="font-serif text-3xl text-pearl mb-6">Absolute Transparency</h3>
                <p className="text-sm text-pearl/60 leading-relaxed font-light max-w-2xl">
                  What you see is what you pay. No hidden surcharges, no surprise product costs at the billing counter, and no pressure upselling. A pure, relaxing experience from arrival to departure.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= VISIT US TODAY CTA ================= */}
      <section className="py-32 bg-onyx" id="visit">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="border border-gold/20 p-10 sm:p-20 relative overflow-hidden flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Column: Heading & Contact Info */}
            <div className="lg:w-1/2 space-y-10">
              <span className="text-[10px] font-sans tracking-[0.3em] text-gold uppercase block">
                The Invitation
              </span>

              <h2 className="font-serif text-4xl sm:text-6xl text-pearl leading-[1.1]">
                Visit Us at <span className="italic text-gold-soft">Classic Pearls</span>
              </h2>

              {/* Detailed Business Info */}
              <div className="space-y-6 pt-6 border-t border-pearl/10 text-xs font-sans tracking-widest uppercase">
                <div className="flex items-start space-x-6">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                  <div>
                    <strong className="text-pearl block mb-2">Location</strong>
                    <span className="text-pearl/50 leading-relaxed block normal-case tracking-normal text-sm">
                      {businessConfig.address.street}, {businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.postalCode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <div>
                    <strong className="text-pearl block mb-2">Direct Line</strong>
                    <a href={`tel:${businessConfig.phoneRaw}`} className="text-gold hover:text-pearl transition-colors text-sm normal-case tracking-normal">
                      {businessConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                  <div>
                    <strong className="text-pearl block mb-2">Hours</strong>
                    <span className="text-pearl/50 text-sm normal-case tracking-normal">10:00 AM – 09:00 PM Everyday</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={businessConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] text-gold hover:text-pearl transition-colors"
                >
                  <span>Get Directions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Booking Action Box */}
            <div className="lg:w-1/2 w-full bg-charcoal p-10 sm:p-16 text-center space-y-10 border border-pearl/5">
              <div>
                <h3 className="font-serif text-3xl text-pearl mb-4">Secure Your Time</h3>
                <p className="text-sm text-pearl/50 font-light">
                  Zero prepayment required. Instant confirmation.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="/book"
                  className="w-full flex items-center justify-center space-x-3 bg-pearl text-onyx hover:bg-gold py-5 text-xs font-bold tracking-[0.2em] uppercase transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Online</span>
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-3 border border-gold/40 text-gold hover:bg-gold/10 py-5 text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
