import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { businessConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import {
  Sparkles,
  Scissors,
  ShieldCheck,
  Tag,
  Star,
  Clock,
  MapPin,
  Phone,
  MessageSquare,
  Calendar,
  ArrowRight,
  Award,
  CheckCircle2,
  HeartHandshake,
  Users,
  Compass,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Classic Pearl Unisex Salon Arekere Bengaluru',
  description:
    'Learn about Classic Pearl Unisex Salon in Arekere, Bengaluru — delivering world-class hair styling, Korean glass skin facials, Hydra rituals, and grooming with 100% transparent pricing.',
};

export default function AboutPage() {
  const whatsappUrl = getWhatsAppConciergeUrl(
    'Hello Classic Pearl Unisex Salon, I would like to book an appointment and learn more about your services.'
  );

  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-cover bg-center overflow-hidden">
        {/* Hero Background Image - Real Storefront */}
        <div className="absolute inset-0 z-0">
          <img
            src="/salon-storefront.jpg"
            alt="Classic Pearl Unisex Salon Storefront in Arekere Bengaluru"
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F12]/85 via-[#0E0F12]/70 to-[#0E0F12]" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0E0F12]/40 to-[#0E0F12]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#17181C]/90 border border-[#C5A059]/40 px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#DFBA73] uppercase mb-6 shadow-xl backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>OUR SALON • AREKERE, BENGALURU</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#FBF9F5] leading-[1.1] mb-6">
            The Art of <span className="italic text-[#DFBA73]">Refined Beauty</span> & Personal Styling
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-[#A39E93] font-light max-w-3xl mx-auto leading-relaxed mb-10">
            Welcome to <strong className="text-[#FBF9F5] font-medium">{businessConfig.name}</strong> — Bengaluru&apos;s most customer-focused premium unisex salon, where world-class hair artistry and aesthetic skin rituals meet genuine care.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#DFBA73] hover:to-[#C5A059] text-[#0E0F12] px-8 py-4 rounded-xl text-xs font-bold tracking-[0.16em] uppercase shadow-2xl shadow-[#C5A059]/25 hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#17181C]/90 hover:bg-[#22242B] border border-emerald-500/40 text-emerald-400 px-8 py-4 rounded-xl text-xs font-semibold tracking-[0.16em] uppercase transition-all backdrop-blur-sm shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Key Quick Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-14 mt-12 border-t border-white/10 text-center">
            <div className="bg-[#17181C]/60 backdrop-blur-sm border border-white/5 rounded-xl p-3.5">
              <div className="flex items-center justify-center gap-1 text-[#DFBA73] text-sm mb-1">
                <Star className="w-3.5 h-3.5 fill-[#DFBA73]" />
                <Star className="w-3.5 h-3.5 fill-[#DFBA73]" />
                <Star className="w-3.5 h-3.5 fill-[#DFBA73]" />
                <Star className="w-3.5 h-3.5 fill-[#DFBA73]" />
                <Star className="w-3.5 h-3.5 fill-[#DFBA73]" />
              </div>
              <span className="font-serif text-base sm:text-lg font-bold text-[#FBF9F5] block">4.9/5 Rating</span>
              <span className="text-[10px] uppercase tracking-wider text-[#A39E93]">380+ Google Reviews</span>
            </div>

            <div className="bg-[#17181C]/60 backdrop-blur-sm border border-white/5 rounded-xl p-3.5">
              <span className="font-serif text-base sm:text-lg font-bold text-[#DFBA73] block">100% Certified</span>
              <span className="text-[10px] uppercase tracking-wider text-[#A39E93]">Genuine Formulations</span>
            </div>

            <div className="bg-[#17181C]/60 backdrop-blur-sm border border-white/5 rounded-xl p-3.5">
              <span className="font-serif text-base sm:text-lg font-bold text-[#DFBA73] block">{businessConfig.openingHours[0].hours}</span>
              <span className="text-[10px] uppercase tracking-wider text-[#A39E93]">Open Everyday (Mon–Sun)</span>
            </div>

            <div className="bg-[#17181C]/60 backdrop-blur-sm border border-white/5 rounded-xl p-3.5">
              <span className="font-serif text-base sm:text-lg font-bold text-[#DFBA73] block">Arekere, BDA Rd</span>
              <span className="text-[10px] uppercase tracking-wider text-[#A39E93]">Beside Camry Hospital</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY SECTION ================= */}
      <section className="py-20 sm:py-28 bg-[#14161B] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#C5A059]/10 border border-[#C5A059]/30 px-3.5 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] text-[#DFBA73] uppercase">
                <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>OUR STORY & PHILOSOPHY</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5] leading-tight">
                Bengaluru&apos;s Most <span className="italic text-[#DFBA73]">Customer-Focused</span> Premium Salon
              </h2>

              <p className="text-sm sm:text-base text-[#A39E93] leading-relaxed font-light">
                <strong className="text-[#FBF9F5] font-normal">{businessConfig.name}</strong> was born from a straightforward vision: salon experiences should be sophisticated, genuinely relaxing, and built on unwavering transparency. Located in the bustling heart of Arekere along 80ft BDA Main Road, our salon is a haven where precision craft meets personalized warmth.
              </p>

              <p className="text-sm sm:text-base text-[#A39E93] leading-relaxed font-light">
                Whether you visit us for transformative hair color, advanced Nano Plastia, Hair Botox, rejuvenating Korean glass skin facials, Hydra pore rituals, or precision beard sculpting — every service begins with an attentive consultation tailored to your hair texture, skin tone, and personal aesthetic.
              </p>

              <p className="text-sm sm:text-base text-[#A39E93] leading-relaxed font-light">
                We respect our clients&apos; time and trust. That is why we operate with clear upfront pricing, zero unrequested upselling, and exclusively authentic salon formulations from world-leading hair and skin care laboratories.
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Bespoke consultation before every service',
                  'Dedicated sections for women & men',
                  'Sterilized instruments & single-use capes',
                  'Friendly, certified master stylists',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-[#FBF9F5]">
                    <CheckCircle2 className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#DFBA73] hover:text-white border-b border-[#C5A059] pb-1 transition-colors"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/lookbook"
                  className="text-xs text-[#A39E93] hover:text-[#DFBA73] tracking-wider uppercase transition-colors"
                >
                  View Client Transformations →
                </Link>
              </div>
            </div>

            {/* Right Storefront Feature Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/30 bg-[#17181C] shadow-2xl group">
                {/* Storefront Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src="/salon-storefront.jpg"
                    alt="Classic Pearl Unisex Salon Exterior at MNK Arcade Arekere"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 bg-[#0E0F12]/90 backdrop-blur-md border border-[#C5A059]/40 px-3 py-1.5 rounded-lg">
                    <span className="text-[10px] font-bold tracking-widest text-[#DFBA73] uppercase block">
                      OUR STOREFRONT • AREKERE
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="text-xs font-serif text-[#DFBA73] block mb-1">1st Floor, MNK Arcade</span>
                    <p className="text-[11px] text-[#A39E93] leading-snug font-light">
                      36, 80ft BDA Main Road, beside Camry Hospital, Arekere, Bengaluru
                    </p>
                  </div>
                </div>

                {/* Info Bar underneath */}
                <div className="p-5 bg-[#17181C] border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#DFBA73]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#FBF9F5] block">Open Everyday</span>
                      <span className="text-[11px] text-[#A39E93]">10:00 AM – 09:00 PM</span>
                    </div>
                  </div>

                  <a
                    href={businessConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-[#DFBA73] hover:text-white font-semibold uppercase tracking-wider"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY WE'RE DIFFERENT - 3 PILLARS ================= */}
      <section className="py-20 sm:py-28 bg-[#0E0F12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold block">
              THE THREE CORE PILLARS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">
              Why We&apos;re <span className="italic text-[#DFBA73]">Different</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A39E93] font-light leading-relaxed">
              We eliminate salon guesswork with uncompromising standards, verified products, and total price transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#14161B] p-8 sm:p-10 rounded-2xl border border-white/5 hover:border-[#C5A059]/40 transition-all duration-300 space-y-5 shadow-xl group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#DFBA73] group-hover:bg-[#C5A059] group-hover:text-[#0E0F12] transition-colors">
                <Scissors className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block">
                  PILLAR 01
                </span>
                <h3 className="font-serif text-2xl text-[#FBF9F5] group-hover:text-[#DFBA73] transition-colors">
                  Expert Professionals
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#A39E93] leading-relaxed font-light">
                Our stylists, colorists, and aesthetic skin specialists possess deep domain expertise. We listen closely to your vision, analyze hair texture and skin undertones, and deliver styles designed to look stunning not just on day one, but for weeks after.
              </p>
              <ul className="space-y-2 pt-2 border-t border-white/5 text-xs text-[#FBF9F5]/90">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA73] flex-shrink-0" />
                  <span>Certified colorists & precision hair cutters</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA73] flex-shrink-0" />
                  <span>Trained aesthetic skin specialists</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA73] flex-shrink-0" />
                  <span>Personalized consultation with every visit</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#14161B] p-8 sm:p-10 rounded-2xl border border-white/5 hover:border-[#C5A059]/40 transition-all duration-300 space-y-5 shadow-xl group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#DFBA73] group-hover:bg-[#C5A059] group-hover:text-[#0E0F12] transition-colors">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block">
                  PILLAR 02
                </span>
                <h3 className="font-serif text-2xl text-[#FBF9F5] group-hover:text-[#DFBA73] transition-colors">
                  Premium Products Only
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#A39E93] leading-relaxed font-light">
                We believe in zero compromises when it comes to hair and skin health. We exclusively utilize genuine, ammonia-free, formaldehyde-safe, and dermatologically approved formulations from globally acclaimed professional brands.
              </p>
              <ul className="space-y-2 pt-2 border-t border-white/5 text-xs text-[#FBF9F5]/90">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA73] flex-shrink-0" />
                  <span>100% authentic salon formulations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA73] flex-shrink-0" />
                  <span>Ammonia-free & hair-safe ingredients</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA73] flex-shrink-0" />
                  <span>Sterilized tools & single-use accessories</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#14161B] p-8 sm:p-10 rounded-2xl border border-white/5 hover:border-[#C5A059]/40 transition-all duration-300 space-y-5 shadow-xl group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#DFBA73] group-hover:bg-[#C5A059] group-hover:text-[#0E0F12] transition-colors">
                <Tag className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block">
                  PILLAR 03
                </span>
                <h3 className="font-serif text-2xl text-[#FBF9F5] group-hover:text-[#DFBA73] transition-colors">
                  100% Transparent Pricing
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#A39E93] leading-relaxed font-light">
                What you see is what you pay. No hidden surcharges, no surprise product costs at the billing counter, and no pressure upselling. Plus, enjoy massive year-round savings with our ₹199/year Pearl Membership pass.
              </p>
              <ul className="space-y-2 pt-2 border-t border-white/5 text-xs text-[#FBF9F5]/90">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA73] flex-shrink-0" />
                  <span>Published prices on website & at salon</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA73] flex-shrink-0" />
                  <span>Save up to 30% with Pearl Membership</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA73] flex-shrink-0" />
                  <span>Zero upfront prepayment for reservations</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SALON EXPERIENCE HIGHLIGHTS ================= */}
      <section className="py-20 sm:py-24 bg-[#14161B] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold block">
                THE PEARL SALON EXPERIENCE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5]">
                Designed for Comfort, <span className="italic text-[#DFBA73]">Privacy & Precision</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#A39E93] leading-relaxed font-light">
                Step inside our salon and experience a calm, modern, and hygienic environment created to make every haircut, facial, and styling session effortless and rejuvenating.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#DFBA73] flex-shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#FBF9F5]">True Unisex Space</h4>
                    <p className="text-xs text-[#A39E93] font-light">
                      Dedicated styling sections, specialized styling chairs, and customized care for women, men, and children.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#DFBA73] flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#FBF9F5]">Hospital-Grade Hygiene</h4>
                    <p className="text-xs text-[#A39E93] font-light">
                      Sanitized stations after every client, fresh sealed single-use capes, and autoclaved stainless tools.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#DFBA73] flex-shrink-0 mt-0.5">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#FBF9F5]">Friendly & Warm Hospitality</h4>
                    <p className="text-xs text-[#A39E93] font-light">
                      Complimentary beverage service, attentive staff, and a peaceful ambiance with zero loud sales pressure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Storefront Full Width Showcase */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-2xl relative">
                <img
                  src="/salon-storefront.jpg"
                  alt="Classic Pearl Unisex Salon Bengaluru"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12]/90 via-[#0E0F12]/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center space-x-1.5 bg-[#C5A059] text-[#0E0F12] px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                      <span>Real Salon Storefront</span>
                    </div>
                    <h3 className="font-serif text-2xl text-[#FBF9F5]">Classic Pearl Unisex Salon</h3>
                    <p className="text-xs text-[#DFBA73]">1st Floor, MNK Arcade, Arekere, Bengaluru</p>
                  </div>

                  <Link
                    href="/book"
                    className="bg-[#17181C]/90 hover:bg-[#22242B] border border-[#C5A059] text-[#DFBA73] hover:text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-center transition-all whitespace-nowrap"
                  >
                    Reserve Slot
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= VISIT US TODAY CTA ================= */}
      <section className="py-20 sm:py-28 bg-[#08090B] border-t border-white/10" id="visit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-b from-[#17181C] via-[#14161B] to-[#121317] border-2 border-[#C5A059]/40 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#DFBA73]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Heading & Contact Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-[#C5A059]/15 border border-[#C5A059]/30 px-3.5 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] text-[#DFBA73] uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>YOU ARE INVITED</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5] leading-tight">
                  Visit Us Today at <span className="italic text-[#DFBA73]">Classic Pearl</span>
                </h2>

                <p className="text-xs sm:text-sm text-[#A39E93] leading-relaxed font-light">
                  Experience hair styling, organic treatments, and advanced skin care from stylists who genuinely care. Walk in or book your preferred slot in seconds.
                </p>

                {/* Detailed Business Info */}
                <div className="space-y-4 pt-2 text-xs">
                  <div className="flex items-start space-x-3.5">
                    <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#FBF9F5] block font-medium">Location</strong>
                      <span className="text-[#A39E93] leading-relaxed block">
                        {businessConfig.address.street}, {businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.postalCode}
                      </span>
                      <span className="text-[11px] text-[#DFBA73]">Landmark: {businessConfig.address.landmark}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#FBF9F5] block font-medium">Phone & WhatsApp</strong>
                      <a
                        href={`tel:${businessConfig.phoneRaw}`}
                        className="text-[#DFBA73] hover:underline font-semibold text-sm block"
                      >
                        {businessConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Clock className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#FBF9F5] block font-medium">Operating Hours</strong>
                      <span className="text-[#DFBA73] font-medium">10:00 AM – 09:00 PM Everyday (Monday – Sunday)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={businessConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#DFBA73] hover:text-white"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Booking Action Box */}
              <div className="lg:col-span-5 bg-[#0E0F12]/90 border border-[#C5A059]/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl text-center">
                <div className="space-y-2">
                  <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold block">
                    FAST RESERVATION
                  </span>
                  <h3 className="font-serif text-2xl text-[#FBF9F5]">Book Your Visit</h3>
                  <p className="text-xs text-[#A39E93] font-light">
                    Select your service online or speak directly with our concierge team.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    href="/book"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#DFBA73] hover:to-[#C5A059] text-[#0E0F12] px-6 py-4 rounded-xl text-xs font-bold tracking-wider uppercase shadow-xl shadow-[#C5A059]/25 transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Appointment Online</span>
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#17181C] hover:bg-[#22242B] border border-emerald-500/40 text-emerald-400 px-6 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Concierge</span>
                  </a>

                  <a
                    href={`tel:${businessConfig.phoneRaw}`}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/5 border border-white/10 text-[#A39E93] hover:text-[#FBF9F5] px-6 py-3 rounded-xl text-xs font-medium uppercase tracking-wider transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Call +91 83107 30322</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <span className="text-[11px] text-[#A39E93] italic">
                    ★ Zero prepayment required • Instant confirmation
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
