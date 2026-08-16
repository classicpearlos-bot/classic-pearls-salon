'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ALL_SERVICES } from '@/data/services';
import { ARTISANS } from '@/data/artisans';
import { LOOKBOOK_ITEMS } from '@/data/lookbook';
import { TESTIMONIALS } from '@/data/testimonials';
import { businessConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { ServiceItem } from '@/lib/types';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import ServiceDetailDrawer from '@/components/ui/ServiceDetailDrawer';
import {
  Sparkles,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Crown
} from 'lucide-react';

export default function HomePage() {
  const [selectedDrawerService, setSelectedDrawerService] = useState<ServiceItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTabGender, setActiveTabGender] = useState<'women' | 'men'>('women');

  const featuredServices = ALL_SERVICES.filter(
    (s) => s.gender === activeTabGender || s.gender === 'all'
  ).slice(0, 4);

  const openServiceDrawer = (service: ServiceItem) => {
    setSelectedDrawerService(service);
    setIsDrawerOpen(true);
  };

  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] overflow-hidden">
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F12]/85 via-[#0E0F12]/60 to-[#0E0F12]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="inline-flex items-center space-x-2 bg-[#17181C]/90 border border-[#C5A059]/40 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.25em] text-[#DFBA73] uppercase mb-6 shadow-xl">
            <Crown className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>CLASSIC PEARLS • PRIVATE BEAUTY ATELIER • BENGALURU</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#FBF9F5] leading-[1.1] mb-6">
            THE ART OF <span className="italic text-[#DFBA73]">BECOMING.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#A39E93] font-light max-w-2xl mx-auto leading-relaxed mb-10">
            A private luxury salon experience where bespoke hair architecture, Korean glass facials, Hydra skin rituals, and timeless elegance meet.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#DFBA73] hover:to-[#C5A059] text-[#0E0F12] px-8 py-4 rounded text-xs font-bold tracking-[0.16em] uppercase shadow-2xl shadow-[#C5A059]/20 hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>RESERVE AN EXPERIENCE</span>
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#17181C]/80 hover:bg-[#22242B] border border-white/20 hover:border-[#C5A059] text-[#FBF9F5] px-8 py-4 rounded text-xs font-semibold tracking-[0.16em] uppercase transition-all"
            >
              <span>EXPLORE SERVICES</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </Link>
          </div>

          {/* Luxury Atelier Pillars Trust Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10 text-center">
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#DFBA73] block">Bespoke</span>
              <span className="text-[11px] uppercase tracking-wider text-[#A39E93]">Private Diagnostic Suites</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#DFBA73] block">100%</span>
              <span className="text-[11px] uppercase tracking-wider text-[#A39E93]">Formaldehyde-Free Botanical Care</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#DFBA73] block">VIP</span>
              <span className="text-[11px] uppercase tracking-wider text-[#A39E93]">Bridal & Red Carpet Lounge</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#DFBA73] block">Arekere</span>
              <span className="text-[11px] uppercase tracking-wider text-[#A39E93]">Bengaluru Sanctuary</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. BRAND INTRODUCTION ================= */}
      <section className="py-24 bg-[#14161B] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5] leading-tight">
                BEAUTY, <span className="italic text-[#DFBA73]">REFINED.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#A39E93] leading-relaxed font-light">
                Classic Pearls is not merely a salon—it is an architectural beauty atelier where precision French cutting, multidimensional balayage, Korean glass facials, Nano Plastia, and Hydra skin rituals converge.
              </p>
              <p className="text-sm text-[#A39E93] leading-relaxed font-light">
                Every reservation begins with a private diagnostic consultation that honors facial bone structure, natural hair movement, and dermatological harmony.
              </p>

              <div className="pt-4 flex items-center space-x-6">
                <Link
                  href="/about"
                  className="text-xs uppercase tracking-[0.18em] font-bold text-[#DFBA73] hover:text-white flex items-center gap-2"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/experience"
                  className="text-xs uppercase tracking-[0.18em] font-medium text-[#A39E93] hover:text-white"
                >
                  The 5 Pillars →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden border border-[#C5A059]/30 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
                  alt="Classic Pearls Atelier"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#14161B]/90 backdrop-blur-md rounded border border-white/10 text-xs">
                  <span className="text-[#C5A059] font-bold uppercase tracking-wider block text-[10px]">
                    Signature Distinction
                  </span>
                  <p className="text-[#FBF9F5] mt-0.5">
                    "Artistry begins where routine ends. Every silhouette is individually sculpted."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. SIGNATURE SERVICES ================= */}
      <section className="py-24 bg-[#0E0F12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block mb-1">
                RITUALS & OFFERINGS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">
                Signature <span className="italic text-[#DFBA73]">Portfolio</span>
              </h2>
            </div>

            {/* Gender Switcher */}
            <div className="mt-4 md:mt-0 inline-flex rounded-lg bg-[#17181C] p-1 border border-white/10">
              <button
                onClick={() => setActiveTabGender('women')}
                className={`px-5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTabGender === 'women'
                    ? 'bg-[#C5A059] text-[#0E0F12] shadow'
                    : 'text-[#A39E93] hover:text-white'
                }`}
              >
                Women's Rituals
              </button>
              <button
                onClick={() => setActiveTabGender('men')}
                className={`px-5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTabGender === 'men'
                    ? 'bg-[#C5A059] text-[#0E0F12] shadow'
                    : 'text-[#A39E93] hover:text-white'
                }`}
              >
                Men's Grooming
              </button>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#14161B] border border-white/10 hover:border-[#C5A059]/50 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-[10px] tracking-[0.2em] text-[#C5A059] font-bold uppercase">
                      {service.categoryName}
                    </span>
                    <div className="flex items-center gap-1.5 text-[#A39E93]">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#FBF9F5] group-hover:text-[#DFBA73] transition-colors mb-2">
                    {service.name}
                  </h3>

                  <p className="text-xs text-[#A39E93] line-clamp-2 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#A39E93] uppercase tracking-wider block">Experience Tier</span>
                    <span className="font-serif text-sm font-bold text-[#DFBA73] uppercase tracking-wider">
                      {service.tier || 'Bespoke Atelier Ritual'}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => openServiceDrawer(service)}
                      className="px-3 py-2 text-xs font-semibold text-[#DFBA73] hover:text-white transition-colors"
                    >
                      Details
                    </button>
                    <Link
                      href={`/book?service=${encodeURIComponent(service.id)}`}
                      className="bg-[#C5A059] hover:bg-[#DFBA73] text-[#0E0F12] px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Reserve
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#DFBA73] hover:text-white border-b border-[#C5A059] pb-1 transition-colors"
            >
              <span>View Full Service Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ================= 4. THE 5 PILLARS EXPERIENCE ================= */}
      <section className="py-24 bg-[#14161B] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block mb-1">
            HOSPITALITY PROTOCOL
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5] mb-4">
            The Five Pillars of <span className="italic text-[#DFBA73]">Excellence</span>
          </h2>
          <p className="text-sm text-[#A39E93] max-w-xl mx-auto mb-16 font-light">
            How every appointment at Classic Pearls unfolds from arrival to aftercare.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            {[
              { step: '01', title: 'Consultation', desc: 'In-depth diagnostic of bone structure, hair texture & aesthetic goals.' },
              { step: '02', title: 'Curation', desc: 'Personalized formulation of organic bond protectors and pigment tones.' },
              { step: '03', title: 'Artistry', desc: 'Flawless execution by designated Creative Directors & Master Artisans.' },
              { step: '04', title: 'Refinement', desc: 'Meticulous finishing, blow-dry styling, and diagnostic review.' },
              { step: '05', title: 'Return', desc: 'Take-home botanical maintenance plan and scheduled refresh timelines.' },
            ].map((pillar) => (
              <div key={pillar.step} className="bg-[#17181C] p-6 rounded-xl border border-white/5 hover:border-[#C5A059]/40 transition-colors">
                <span className="font-serif text-3xl font-bold text-[#C5A059] block mb-3">{pillar.step}</span>
                <h4 className="font-serif text-lg text-[#FBF9F5] mb-2">{pillar.title}</h4>
                <p className="text-xs text-[#A39E93] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. TRANSFORMATIONS / BEFORE-AFTER ================= */}
      <section className="py-24 bg-[#0E0F12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
                EVIDENCE OF ARTISTRY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5] leading-tight">
                Transformations in <span className="italic text-[#DFBA73]">Light & Form.</span>
              </h2>
              <p className="text-sm text-[#A39E93] leading-relaxed font-light">
                Interact with our transformation slider to witness how precision color lifting and botanical bond restoration redefine texture and shine.
              </p>
              <div className="space-y-3 pt-2 text-xs text-[#A39E93]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Zero structural breakage or cuticle stress</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Tailored chromatic toners matching natural skin undertones</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/lookbook"
                  className="inline-flex items-center space-x-2 bg-[#17181C] hover:bg-[#22242B] border border-[#C5A059]/40 text-[#DFBA73] px-6 py-3 rounded text-xs font-bold tracking-widest uppercase transition-colors"
                >
                  <span>Explore Full Lookbook</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <BeforeAfterSlider
                beforeImage={LOOKBOOK_ITEMS[0].beforeImage || LOOKBOOK_ITEMS[0].image}
                afterImage={LOOKBOOK_ITEMS[0].afterImage || LOOKBOOK_ITEMS[0].image}
                beforeLabel="INITIAL STATE"
                afterLabel="PEARL BALAYAGE"
                altText="Champagne Pearl Balayage Transformation"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= 6. MASTER ARTISANS ================= */}
      <section className="py-24 bg-[#14161B] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block mb-1">
            THE ATELIER MASTERS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5] mb-4">
            Mastery is <span className="italic text-[#DFBA73]">Personal.</span>
          </h2>
          <p className="text-sm text-[#A39E93] max-w-xl mx-auto mb-16 font-light">
            Meet the Creative Directors and Specialists who shape the Classic Pearls standard.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {ARTISANS.slice(0, 3).map((artisan) => (
              <div key={artisan.id} className="bg-[#17181C] rounded-xl overflow-hidden border border-white/5 hover:border-[#C5A059]/40 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold block mb-1">
                    {artisan.title}
                  </span>
                  <h3 className="font-serif text-2xl text-[#FBF9F5] mb-2">{artisan.name}</h3>
                  <p className="text-xs text-[#A39E93] line-clamp-2 leading-relaxed mb-4">{artisan.bio}</p>
                  <Link
                    href={`/book?artisan=${encodeURIComponent(artisan.id)}`}
                    className="inline-flex items-center gap-1 text-xs text-[#DFBA73] hover:underline font-bold uppercase tracking-wider"
                  >
                    <span>Request with {artisan.name.split(' ')[0]}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/artisans"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#DFBA73] hover:text-white"
            >
              <span>View All Master Artisans →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 7. BRIDAL ATELIER SPOTLIGHT ================= */}
      <section className="py-24 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-[#0E0F12]/85 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            PRIVATE PENTHOUSE SUITE
          </span>
          <h2 className="font-serif text-3xl sm:text-6xl text-[#FBF9F5]">
            The Haute Bridal <span className="italic text-[#DFBA73]">Atelier</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A39E93] max-w-2xl mx-auto leading-relaxed font-light">
            Dedicated bridal suite sanctuaries, comprehensive pre-wedding trials, 18-hour HD airbrush makeup, and all-day couture hair coordination.
          </p>

          <div className="pt-4">
            <Link
              href="/bridal"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-8 py-4 rounded text-xs font-bold tracking-[0.16em] uppercase shadow-2xl shadow-[#C5A059]/20"
            >
              <span>BEGIN YOUR BRIDAL JOURNEY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 8. TESTIMONIALS / CLIENT NOTES ================= */}
      <section className="py-24 bg-[#14161B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block mb-1">
            CLIENT COMMENDATIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5] mb-16">
            Client <span className="italic text-[#DFBA73]">Notes</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#17181C] p-8 rounded-xl border border-white/5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="text-[#DFBA73] text-sm">★★★★★</div>
                  <p className="font-serif text-lg text-[#FBF9F5] italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-[#FBF9F5] block">{testimonial.clientName}</strong>
                    <span className="text-[#A39E93] text-[11px]">{testimonial.clientLocation}</span>
                  </div>
                  <span className="text-[10px] text-[#C5A059] uppercase tracking-wider">{testimonial.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 9. CONCIERGE BOOKING CTA ================= */}
      <section className="py-20 bg-gradient-to-b from-[#14161B] to-[#0E0F12] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            BESPOKE RESERVATIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">
            Reserve Your Classic Pearls <span className="italic text-[#DFBA73]">Experience.</span>
          </h2>
          <p className="text-sm text-[#A39E93] max-w-xl mx-auto leading-relaxed">
            Select your preferred treatment, master artisan, and schedule. Our concierge team will orchestrate the rest.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book"
              className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-8 py-4 rounded text-xs font-bold tracking-widest uppercase shadow-xl"
            >
              Launch Private Concierge
            </Link>
            <a
              href={getWhatsAppConciergeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#17181C] hover:bg-[#22242B] border border-[#C5A059]/40 text-[#DFBA73] px-6 py-4 rounded text-xs font-semibold tracking-wider uppercase flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= 10. VISIT / CONTACT SECTION ================= */}
      <section className="py-24 bg-[#08090B] border-t border-white/10" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
                LOCATION & HOURS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5]">
                Visit Classic Pearls <span className="italic text-[#DFBA73]">Atelier</span>
              </h2>
              <p className="text-sm text-[#A39E93] leading-relaxed">
                Experience our peaceful Arekere sanctuary featuring private suites and personalized beverage curation.
              </p>

              <div className="space-y-4 text-xs pt-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FBF9F5] block">Physical Address</strong>
                    <span className="text-[#A39E93]">{businessConfig.address.street}, {businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.postalCode}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FBF9F5] block">Telephone Concierge</strong>
                    <a href={`tel:${businessConfig.phone.replace(/[^0-9+]/g, '')}`} className="text-[#DFBA73]">
                      {businessConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FBF9F5] block">Official Inquiries</strong>
                    <a href={`mailto:${businessConfig.email}`} className="text-[#DFBA73]">
                      {businessConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={businessConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#DFBA73] hover:underline font-bold uppercase tracking-wider"
                >
                  <span>Open in Google Maps Directions →</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#14161B] p-8 rounded-xl border border-white/10 space-y-6">
              <h3 className="font-serif text-2xl text-[#FBF9F5]">Atelier Operating Schedule</h3>
              <div className="space-y-3 text-xs">
                {businessConfig.openingHours.map((schedule, idx) => (
                  <div key={idx} className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-[#A39E93]">{schedule.days}</span>
                    <strong className="text-[#FBF9F5]">{schedule.hours}</strong>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#17181C] rounded-lg border border-[#C5A059]/20 flex items-center gap-3 text-xs text-[#DFBA73]">
                <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                <span>Private VIP bookings available upon request during non-standard hours.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Detail Drawer */}
      <ServiceDetailDrawer
        service={selectedDrawerService}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
}
