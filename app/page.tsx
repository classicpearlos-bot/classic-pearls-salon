'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ALL_SERVICES } from '@/data/services';
import { LOOKBOOK_ITEMS } from '@/data/lookbook';
import { TESTIMONIALS } from '@/data/testimonials';
import { businessConfig, membershipConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { ServiceItem } from '@/lib/types';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import ServiceDetailDrawer from '@/components/ui/ServiceDetailDrawer';
import SmartDiscovery from '@/components/ui/SmartDiscovery';
import {
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  MessageSquare,
  Sparkles,
  Star,
  Tag,
  Scissors,
  Palette,
  Sun,
  Award,
  Zap,
  Users,
  Heart
} from 'lucide-react';

export default function HomePage() {
  const [selectedDrawerService, setSelectedDrawerService] = useState<ServiceItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTabGender, setActiveTabGender] = useState<'women' | 'men'>('women');

  const featuredServices = ALL_SERVICES.filter(
    (s) => s.featured && (s.gender === activeTabGender || s.gender === 'all')
  ).slice(0, 6);

  const openServiceDrawer = (service: ServiceItem) => {
    setSelectedDrawerService(service);
    setIsDrawerOpen(true);
  };

  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] overflow-hidden">
      
      {/* ================= SECTION 1: IMMERSIVE HERO ================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F12]/85 via-[#0E0F12]/65 to-[#0E0F12]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          
          {/* Tagline Biscuit */}
          <div className="inline-flex items-center space-x-2 bg-[#17181C]/90 border border-[#C5A059]/40 px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#DFBA73] uppercase mb-6 shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>CLASSIC PEARL UNISEX SALON • AREKERE, BENGALURU</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#FBF9F5] leading-[1.1] mb-6">
            Premium Hair & Beauty Salon in <span className="italic text-[#DFBA73]">Arekere Bengaluru</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-[#A39E93] font-light max-w-3xl mx-auto leading-relaxed mb-10">
            Transform your style with expert hair, skin and grooming services using professional products, 100% transparent pricing, and personalized care.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#DFBA73] hover:to-[#C5A059] text-[#0E0F12] px-8 py-4 rounded-xl text-xs font-bold tracking-[0.16em] uppercase shadow-2xl shadow-[#C5A059]/25 hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK APPOINTMENT</span>
            </Link>

            <a
              href={getWhatsAppConciergeUrl('Hello Classic Pearl Salon, I would like to book a consultation.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#17181C]/90 hover:bg-[#22242B] border border-emerald-500/40 text-emerald-400 px-8 py-4 rounded-xl text-xs font-semibold tracking-[0.16em] uppercase transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP CONSULTATION</span>
            </a>
          </div>

          {/* Trust Badges Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10 text-center">
            <div className="space-y-0.5">
              <div className="flex items-center justify-center gap-1 text-[#DFBA73] text-sm font-bold">
                <Star className="w-4 h-4 fill-[#DFBA73]" />
                <Star className="w-4 h-4 fill-[#DFBA73]" />
                <Star className="w-4 h-4 fill-[#DFBA73]" />
                <Star className="w-4 h-4 fill-[#DFBA73]" />
                <Star className="w-4 h-4 fill-[#DFBA73]" />
              </div>
              <span className="font-serif text-lg font-bold text-[#FBF9F5] block">4.9/5 Rating</span>
              <span className="text-[11px] uppercase tracking-wider text-[#A39E93]">380+ Google Reviews</span>
            </div>

            <div className="space-y-0.5">
              <span className="font-serif text-2xl font-bold text-[#DFBA73] block">100%</span>
              <span className="text-[11px] uppercase tracking-wider text-[#A39E93]">Certified Professional Products</span>
            </div>

            <div className="space-y-0.5">
              <span className="font-serif text-2xl font-bold text-[#DFBA73] block">10am–9pm</span>
              <span className="text-[11px] uppercase tracking-wider text-[#A39E93]">Open Everyday (Mon–Sun)</span>
            </div>

            <div className="space-y-0.5">
              <span className="font-serif text-2xl font-bold text-[#DFBA73] block">Arekere</span>
              <span className="text-[11px] uppercase tracking-wider text-[#A39E93]">80ft BDA Rd, Bengaluru</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: DIGITAL TRUST WALL ================= */}
      <section className="py-20 bg-[#14161B] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
              THE CLASSIC PEARL STANDARD
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5]">
              Why Customers Choose <span className="italic text-[#DFBA73]">Classic Pearl</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Scissors,
                title: 'Expert Professionals',
                desc: 'Trained hair stylists and aesthetic skin specialists dedicated to understanding your exact style preference.'
              },
              {
                icon: ShieldCheck,
                title: 'Certified Premium Products',
                desc: 'We only use authentic, ammonia-free, formaldehyde-free, and dermatologically tested formulations.'
              },
              {
                icon: Sparkles,
                title: 'Hygiene First Salon',
                desc: 'Sterilized stainless steel instruments, fresh sanitized capes, and spotless styling stations for every client.'
              },
              {
                icon: Tag,
                title: '100% Transparent Pricing',
                desc: 'No hidden charges. Clear menu pricing with extra savings for our ₹199/year Pearl Members.'
              },
              {
                icon: Heart,
                title: 'Personalized Consultation',
                desc: 'We examine your hair porosity, scalp health, and skin undertones before recommending any treatment.'
              },
              {
                icon: Zap,
                title: 'Fast 30-Second Booking',
                desc: 'Pick your slot, enter your WhatsApp number, and receive instant confirmation with zero prepayment.'
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#17181C] p-7 rounded-2xl border border-white/5 hover:border-[#C5A059]/40 transition-all duration-300 space-y-3 shadow-lg group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#DFBA73] group-hover:bg-[#C5A059] group-hover:text-[#0E0F12] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-[#FBF9F5]">{card.title}</h3>
                  <p className="text-xs text-[#A39E93] leading-relaxed font-light">{card.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: SMART SERVICE DISCOVERY ================= */}
      <section className="py-24 bg-[#0E0F12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
              INTERACTIVE DISCOVERY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">
              What are you looking for <span className="italic text-[#DFBA73]">today?</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A39E93] font-light">
              Select your beauty goal below and get instant recommended services tailored for you.
            </p>
          </div>

          <SmartDiscovery />

        </div>
      </section>

      {/* ================= SECTION 4: SIGNATURE SERVICES & TRANSPARENT PRICING ================= */}
      <section className="py-24 bg-[#14161B] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold block mb-1">
                OUR SIGNATURE SERVICES
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">
                Transparent <span className="italic text-[#DFBA73]">Pricing Menu</span>
              </h2>
            </div>

            {/* Gender Switcher */}
            <div className="mt-4 md:mt-0 inline-flex rounded-xl bg-[#0E0F12] p-1 border border-white/10">
              <button
                onClick={() => setActiveTabGender('women')}
                className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTabGender === 'women'
                    ? 'bg-[#C5A059] text-[#0E0F12] shadow'
                    : 'text-[#A39E93] hover:text-white'
                }`}
              >
                Women's Services
              </button>
              <button
                onClick={() => setActiveTabGender('men')}
                className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#17181C] border border-white/5 hover:border-[#C5A059]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0E0F12]/90 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider text-[#DFBA73]">
                      {service.categoryName}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl text-[#FBF9F5] group-hover:text-[#DFBA73] transition-colors leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#A39E93] line-clamp-2 leading-relaxed font-light">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-[11px] text-[#A39E93] pt-1">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="p-6 pt-0 border-t border-white/5 mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#A39E93] block">Regular: <s className="text-[#A39E93]">₹{service.regularPrice}</s></span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-xl font-bold text-[#DFBA73]">₹{service.memberPrice}</span>
                      <span className="text-[9px] font-bold text-emerald-400 uppercase bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                        Member
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => openServiceDrawer(service)}
                      className="px-3 py-2 text-xs font-semibold text-[#A39E93] hover:text-[#DFBA73]"
                    >
                      Details
                    </button>
                    <Link
                      href={`/book?service=${encodeURIComponent(service.id)}`}
                      className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#DFBA73] hover:to-[#C5A059] text-[#0E0F12] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow"
                    >
                      Book
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
              <span>Explore Complete Service Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ================= SECTION 5: REAL TRANSFORMATION GALLERY ================= */}
      <section className="py-24 bg-[#0E0F12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold block">
              REAL CLIENT RESULTS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">
              Real <span className="italic text-[#DFBA73]">Transformations</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A39E93] font-light">
              Slide across our real Before/After transformations to see how our stylists transform hair, skin, and grooming.
            </p>
          </div>

          {/* Interactive Before/After Showcase */}
          <div className="max-w-4xl mx-auto mb-16 space-y-4">
            <BeforeAfterSlider
              beforeImage={LOOKBOOK_ITEMS[0].beforeImage || LOOKBOOK_ITEMS[0].image}
              afterImage={LOOKBOOK_ITEMS[0].afterImage || LOOKBOOK_ITEMS[0].image}
              beforeLabel="BEFORE: FADED BRASSY"
              afterLabel="AFTER: PEARL BALAYAGE"
              altText="Balayage Transformation"
            />
            
            <div className="p-4 bg-[#14161B] rounded-xl border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div>
                <strong className="text-[#FBF9F5] block text-sm">{LOOKBOOK_ITEMS[0].title}</strong>
                <span className="text-[#A39E93]">{LOOKBOOK_ITEMS[0].caption}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="text-[#A39E93] line-through text-[11px] block">₹{LOOKBOOK_ITEMS[0].regularPrice}</span>
                  <span className="font-serif text-base font-bold text-[#DFBA73]">₹{LOOKBOOK_ITEMS[0].memberPrice}</span>
                </div>
                <Link
                  href={`/book?service=${encodeURIComponent(LOOKBOOK_ITEMS[0].serviceId)}`}
                  className="bg-[#C5A059] hover:bg-[#DFBA73] text-[#0E0F12] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                >
                  Book Similar Look
                </Link>
              </div>
            </div>
          </div>

          {/* Grid of Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOOKBOOK_ITEMS.slice(1, 4).map((item) => (
              <div key={item.id} className="bg-[#14161B] rounded-2xl overflow-hidden border border-white/5 hover:border-[#C5A059]/40 transition-all group flex flex-col justify-between shadow-xl">
                <div>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[9px] uppercase tracking-wider text-[#C5A059] font-bold block">{item.categoryLabel}</span>
                    <h4 className="font-serif text-lg text-[#FBF9F5]">{item.title}</h4>
                    <p className="text-xs text-[#A39E93] line-clamp-2 font-light">{item.caption}</p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-white/5 mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#A39E93] line-through block">₹{item.regularPrice}</span>
                    <span className="font-serif text-base font-bold text-[#DFBA73]">₹{item.memberPrice}</span>
                  </div>
                  <Link
                    href={`/book?service=${encodeURIComponent(item.serviceId)}`}
                    className="bg-[#17181C] hover:bg-[#22242B] border border-[#C5A059]/40 text-[#DFBA73] px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider"
                  >
                    Book
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/lookbook"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#DFBA73] hover:text-white"
            >
              <span>View Full Lookbook Gallery →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ================= SECTION 6: PEARL MEMBERSHIP EXPERIENCE (₹199/YEAR) ================= */}
      <section className="py-24 bg-gradient-to-b from-[#14161B] via-[#17181C] to-[#14161B] border-y border-[#C5A059]/25" id="membership">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#C5A059]/15 border border-[#C5A059]/40 px-3.5 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#DFBA73] uppercase">
                <Tag className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>SMART BEAUTY CARE PASS</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5] leading-tight">
                Join the <span className="italic text-[#DFBA73]">Pearl Membership</span>
              </h2>

              <p className="text-sm text-[#A39E93] leading-relaxed font-light">
                Why pay full price when you can enjoy smart savings on every single haircut, facial, hair botox, or grooming session? Valid for 365 days with zero minimum spend requirements.
              </p>

              <div className="space-y-3 pt-2">
                {membershipConfig.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#FBF9F5]">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/book"
                  className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#DFBA73] hover:to-[#C5A059] text-[#0E0F12] px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-xl shadow-[#C5A059]/20"
                >
                  Activate Membership at Salon
                </Link>
                <a
                  href={getWhatsAppConciergeUrl('Hello Classic Pearl, I would like details on joining the ₹199 Pearl Membership.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0E0F12] border border-[#C5A059]/40 text-[#DFBA73] px-5 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Membership VIP Pass Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#1E2028] to-[#121317] border-2 border-[#C5A059] rounded-3xl p-8 shadow-2xl text-center space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="space-y-1">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-bold block">
                    ANNUAL BEAUTY PASS
                  </span>
                  <h3 className="font-serif text-3xl text-[#FBF9F5]">Pearl Member</h3>
                  <p className="text-xs text-[#A39E93]">Save ₹300 - ₹1,200 On Every Visit</p>
                </div>

                <div className="py-4 border-y border-white/10">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-serif text-5xl font-bold text-[#DFBA73]">₹199</span>
                    <span className="text-xs text-[#A39E93]">/ Year</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 block mt-1">365 Days Validity • Immediate Savings</span>
                </div>

                <div className="text-left space-y-2 text-xs text-[#A39E93]">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Korean Facial:</span>
                    <span className="text-[#FBF9F5] font-semibold"><s className="text-[#6E6A62]">₹2800</s> ₹2240 (Save ₹560)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Hair Botox:</span>
                    <span className="text-[#FBF9F5] font-semibold"><s className="text-[#6E6A62]">₹3800</s> ₹2999 (Save ₹801)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Advance Haircut:</span>
                    <span className="text-[#FBF9F5] font-semibold"><s className="text-[#6E6A62]">₹900</s> ₹720 (Save ₹180)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] text-[#A39E93] italic block">
                    Pays for itself in your very first visit!
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 7: GOOGLE REVIEWS & TESTIMONIALS ================= */}
      <section className="py-24 bg-[#0E0F12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
              VERIFIED GOOGLE REVIEWS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">
              Loved by <span className="italic text-[#DFBA73]">Bengaluru</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A39E93] font-light">
              See what our regular clients in Arekere and Bannerghatta Road have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-[#14161B] p-7 rounded-2xl border border-white/5 flex flex-col justify-between shadow-xl">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#DFBA73] text-xs">
                      {'★'.repeat(t.rating)}
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-800/40">
                      Verified Client
                    </span>
                  </div>
                  <strong className="text-sm text-[#FBF9F5] block font-serif">"{t.highlight}"</strong>
                  <p className="text-xs text-[#A39E93] leading-relaxed font-light italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-5 border-t border-white/5 mt-6 flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-[#FBF9F5] block">{t.clientName}</strong>
                    <span className="text-[#A39E93] text-[11px]">{t.clientArea}</span>
                  </div>
                  <span className="text-[10px] text-[#C5A059] font-semibold uppercase">{t.service}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 8: VISIT & CONTACT ================= */}
      <section className="py-24 bg-[#08090B] border-t border-white/10" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
                LOCATION & HOURS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5]">
                Visit Classic Pearl <span className="italic text-[#DFBA73]">Unisex Salon</span>
              </h2>
              <p className="text-sm text-[#A39E93] leading-relaxed">
                Located on 80ft BDA Main Road in Arekere, beside Camry Hospital, Bannerghatta Road, Bengaluru.
              </p>

              <div className="space-y-4 text-xs pt-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FBF9F5] block">Address</strong>
                    <span className="text-[#A39E93]">{businessConfig.address.street}, {businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.postalCode}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FBF9F5] block">Phone / WhatsApp</strong>
                    <a href={`tel:${businessConfig.phoneRaw}`} className="text-[#DFBA73] font-semibold text-sm">
                      {businessConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FBF9F5] block">Hours</strong>
                    <span className="text-[#DFBA73]">10:00 AM – 09:00 PM Everyday (Monday – Sunday)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <a
                  href={businessConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#DFBA73] hover:underline font-bold uppercase tracking-wider"
                >
                  <span>Google Maps Directions →</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#14161B] p-8 rounded-2xl border border-white/10 space-y-6 shadow-2xl">
              <h3 className="font-serif text-2xl text-[#FBF9F5]">Fast Online Appointment</h3>
              <p className="text-xs text-[#A39E93]">
                Pick your service, select your time slot, and receive instant confirmation on WhatsApp.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book"
                  className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center flex-1 shadow-lg"
                >
                  Book Appointment Online
                </Link>
                <a
                  href={getWhatsAppConciergeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#17181C] hover:bg-[#22242B] border border-[#C5A059]/40 text-[#DFBA73] px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Slide-Over Service Detail Drawer */}
      <ServiceDetailDrawer
        service={selectedDrawerService}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
}
