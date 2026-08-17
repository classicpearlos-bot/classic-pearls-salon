'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ALL_SERVICES } from '@/data/services';
import { LOOKBOOK_ITEMS } from '@/data/lookbook';
import { businessConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { ServiceItem } from '@/lib/types';
import ServiceDetailDrawer from '@/components/ui/ServiceDetailDrawer';
import SmartDiscovery from '@/components/ui/SmartDiscovery';
import { ArrowRight, MapPin, Calendar, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function HomePage() {
  const [selectedDrawerService, setSelectedDrawerService] = useState<ServiceItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openServiceDrawer = (service: ServiceItem) => {
    setSelectedDrawerService(service);
    setIsDrawerOpen(true);
  };

  // Select 6 highly visual signature services
  const signatureServices = ALL_SERVICES.filter(s => s.featured).slice(0, 6);

  return (
    <div className="bg-onyx text-pearl overflow-hidden">
      
      {/* ================= SECTION 01 — CINEMATIC HERO ================= */}
      <section className="relative min-h-[100svh] flex flex-col justify-end pb-24 md:pb-32 bg-cover bg-center" style={{ backgroundImage: "url('/salon-storefront.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
        <div className="absolute inset-0 bg-onyx/20 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-12">
          
          <div className="max-w-3xl animate-fade-in-up">
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase font-bold mb-6 block">
              CLASSIC PEARLS
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[7rem] leading-[0.9] font-normal tracking-tight text-pearl mb-6">
              The art of<br />
              <span className="italic font-light text-gold-soft">becoming.</span>
            </h1>
            <p className="text-sm md:text-base text-pearl/70 font-light tracking-wide max-w-md">
              Arekere • Bengaluru
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto shrink-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link
              href="/book"
              className="group flex items-center justify-between gap-8 bg-pearl text-onyx px-8 py-5 rounded-none font-sans text-xs font-semibold tracking-[0.15em] uppercase hover:bg-gold transition-colors duration-500"
            >
              <span>Reserve Your Experience</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/services"
              className="group flex items-center justify-between gap-8 bg-transparent border border-pearl/20 text-pearl px-8 py-5 rounded-none font-sans text-xs font-semibold tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-colors duration-500"
            >
              <span>Explore The Atelier</span>
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          
        </div>
      </section>

      {/* ================= SECTION 02 — BRAND STATEMENT ================= */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-onyx">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-pearl font-light leading-tight">
            BEAUTY IS PERSONAL.
          </h2>
          <p className="font-serif text-xl md:text-3xl text-pearl/60 font-light leading-relaxed max-w-3xl mx-auto">
            No two faces are identical.<br />
            No two textures behave the same.<br />
            No two occasions deserve the same treatment.<br />
            <br />
            <span className="text-pearl">At Classic Pearls, every appointment begins with understanding you.</span>
          </p>
        </div>
      </section>

      {/* ================= SECTION 03 — ENTER THE ATELIER ================= */}
      <section className="py-0">
        <div className="w-full flex flex-col lg:flex-row">
          
          <div className="w-full lg:w-1/2 min-h-[60vh] bg-surface relative overflow-hidden group">
            <img 
              src="/salon-storefront.jpg" 
              alt="Classic Pearl Salon Exterior" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
            />
          </div>
          
          <div className="w-full lg:w-1/2 bg-charcoal p-12 md:p-24 lg:p-32 flex flex-col justify-center">
            <span className="text-[10px] tracking-[0.2em] text-gold uppercase font-bold mb-8 block">
              OUR ATELIER
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-pearl mb-10 leading-tight">
              Step inside <span className="italic text-gold-soft">Classic Pearls.</span>
            </h2>
            <p className="font-sans text-sm md:text-base text-pearl/60 font-light leading-relaxed mb-12 max-w-md">
              Located on 80ft BDA Main Road in Arekere. A modern, hygienic sanctuary dedicated to premium styling, certified products, and uncompromising precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={businessConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-pearl hover:text-gold transition-colors"
              >
                <MapPin className="w-4 h-4 text-gold" />
                <span>Get Directions</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-pearl hover:text-gold transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-gold" />
                <span>Visit Us</span>
              </Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* ================= SECTION 04 — DISCOVER YOUR EXPERIENCE ================= */}
      <section className="py-32 md:py-40 px-6 md:px-12 bg-onyx">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="font-serif text-4xl md:text-6xl text-pearl font-light">
              Discover your<br /><span className="italic text-gold-soft">experience.</span>
            </h2>
            <SmartDiscovery />
          </div>

          {/* Asymmetric Editorial Grid for Categories */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
            
            {/* Hair */}
            <Link href="/services#hair" className="md:col-span-8 group relative min-h-[400px] overflow-hidden bg-surface">
              <div className="absolute inset-0 bg-onyx/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src="/salon-storefront.jpg" alt="Hair Styling" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1s]" />
              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="font-serif text-4xl text-pearl mb-2">Hair</h3>
                <span className="text-xs font-sans tracking-widest uppercase text-gold">Cut • Color • Treatment</span>
              </div>
            </Link>

            {/* Skin */}
            <Link href="/services#skin" className="md:col-span-4 group relative min-h-[400px] overflow-hidden bg-surface">
              <div className="absolute inset-0 bg-onyx/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src="/salon-storefront.jpg" alt="Skin Care" className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-[1s]" />
              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="font-serif text-4xl text-pearl mb-2">Skin</h3>
                <span className="text-xs font-sans tracking-widest uppercase text-gold">Facials • Aesthetic</span>
              </div>
            </Link>

            {/* Bridal */}
            <Link href="/bridal" className="md:col-span-4 group relative min-h-[400px] overflow-hidden bg-surface">
              <div className="absolute inset-0 bg-onyx/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src="/salon-storefront.jpg" alt="Bridal Makeover" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-[1s]" />
              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="font-serif text-4xl text-pearl mb-2">Bridal</h3>
                <span className="text-xs font-sans tracking-widest uppercase text-gold">The Atelier</span>
              </div>
            </Link>

            {/* Men */}
            <Link href="/services#men" className="md:col-span-8 group relative min-h-[400px] overflow-hidden bg-surface">
              <div className="absolute inset-0 bg-onyx/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src="/salon-storefront.jpg" alt="Men Grooming" className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-[1s]" />
              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="font-serif text-4xl text-pearl mb-2">Men</h3>
                <span className="text-xs font-sans tracking-widest uppercase text-gold">The Gentleman's Room</span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ================= SECTION 05 — SIGNATURE SERVICES ================= */}
      <section className="py-32 md:py-40 bg-charcoal border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="text-[10px] tracking-[0.2em] text-gold uppercase font-bold mb-6 block">
                CURATED RITUALS
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-pearl leading-tight">
                Signature <span className="italic text-gold-soft">Experiences.</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-pearl hover:text-gold transition-colors border-b border-gold/30 pb-1 hover:border-gold"
            >
              <span>View Complete Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Minimal Information Blocks instead of heavy cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16">
            {signatureServices.map((service, idx) => (
              <div key={service.id} className="group border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-8 relative">
                
                <div className="flex-1 space-y-4 pr-8">
                  <h3 className="font-serif text-2xl md:text-3xl text-pearl group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-pearl/50 font-light leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-6 pt-4 text-xs tracking-wider uppercase font-semibold">
                    <button 
                      onClick={() => openServiceDrawer(service)}
                      className="text-pearl/60 hover:text-gold transition-colors flex items-center gap-2"
                    >
                      View Details
                    </button>
                    <Link 
                      href={`/book?service=${encodeURIComponent(service.id)}`}
                      className="text-gold hover:text-pearl transition-colors"
                    >
                      Reserve
                    </Link>
                  </div>
                </div>

                <div className="shrink-0 flex flex-col md:items-end justify-between">
                  <div className="text-left md:text-right">
                    <span className="font-serif text-2xl text-pearl block">₹{service.memberPrice}</span>
                    {service.memberPrice < service.regularPrice && (
                      <span className="text-[10px] font-sans text-pearl/40 uppercase tracking-widest block mt-1">
                        Regular: ₹{service.regularPrice}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 md:mt-0 text-xs font-sans text-gold/60 tracking-widest uppercase">
                    {service.duration}
                  </div>
                </div>

              </div>
            ))}
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
