'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ALL_SERVICES, SERVICE_CATEGORIES } from '@/data/services';
import { ServiceItem, GenderCategory } from '@/lib/types';
import ServiceDetailDrawer from '@/components/ui/ServiceDetailDrawer';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { Clock, Award, Calendar, Search, Sparkles, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  const [genderFilter, setGenderFilter] = useState<GenderCategory>('women');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDrawerService, setSelectedDrawerService] = useState<ServiceItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const filteredServices = ALL_SERVICES.filter((service) => {
    const matchesGender = genderFilter === 'all' || service.gender === genderFilter || service.gender === 'all';
    const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGender && matchesCategory && matchesSearch;
  });

  const openDrawer = (service: ServiceItem) => {
    setSelectedDrawerService(service);
    setIsDrawerOpen(true);
  };

  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            RITUALS & GASTRONOMY OF BEAUTY
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FBF9F5]">
            The Curated <span className="italic text-[#DFBA73]">Portfolio</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed">
            Every treatment is customized to your unique biology. Experience bespoke care delivered by our designated Creative Directors and Master Specialists.
          </p>
        </div>

        {/* Gender Selector + Search + Category Navigation */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
            
            {/* Gender Toggle */}
            <div className="inline-flex rounded-lg bg-[#17181C] p-1 border border-white/10">
              <button
                onClick={() => setGenderFilter('women')}
                className={`px-6 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                  genderFilter === 'women'
                    ? 'bg-[#C5A059] text-[#0E0F12] shadow'
                    : 'text-[#A39E93] hover:text-white'
                }`}
              >
                Women's Rituals
              </button>
              <button
                onClick={() => setGenderFilter('men')}
                className={`px-6 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                  genderFilter === 'men'
                    ? 'bg-[#C5A059] text-[#0E0F12] shadow'
                    : 'text-[#A39E93] hover:text-white'
                }`}
              >
                Men's Grooming
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#A39E93]" />
              <input
                type="text"
                placeholder="Search rituals & treatments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#17181C] border border-white/15 rounded-lg pl-10 pr-4 py-2 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059]"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                categoryFilter === 'all'
                  ? 'bg-[#C5A059] text-[#0E0F12]'
                  : 'bg-[#17181C] text-[#A39E93] hover:text-white border border-white/5'
              }`}
            >
              All Categories
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                  categoryFilter === cat.id
                    ? 'bg-[#C5A059] text-[#0E0F12]'
                    : 'bg-[#17181C] text-[#A39E93] hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#14161B] border border-white/10 hover:border-[#C5A059]/40 rounded-xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] tracking-[0.2em] text-[#C5A059] font-bold uppercase">
                    {service.categoryName}
                  </span>
                  <div className="flex items-center gap-2 text-[#A39E93]">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-[#FBF9F5]">{service.name}</h3>
                <p className="text-xs text-[#DFBA73] font-serif italic">{service.tagline}</p>
                <p className="text-xs text-[#A39E93] leading-relaxed line-clamp-3 font-light">
                  {service.description}
                </p>

                {/* What's Included Preview */}
                {service.whatsIncluded && (
                  <div className="pt-2 space-y-1.5 text-xs text-[#FBF9F5]">
                    {service.whatsIncluded.slice(0, 2).map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-[#A39E93]">
                        <CheckCircle2 className="w-3 h-3 text-[#C5A059] flex-shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-[#17181C] px-6 sm:px-8 py-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#A39E93] uppercase tracking-wider block">Service Tier</span>
                  <span className="font-serif text-sm font-bold text-[#DFBA73] uppercase tracking-wider">
                    {service.tier || 'Bespoke Atelier Ritual'}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => openDrawer(service)}
                    className="px-3 py-2 text-xs font-semibold text-[#DFBA73] hover:text-white"
                  >
                    View Details
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

        {/* Custom Multi-Treatment Inquiries Banner */}
        <div className="bg-[#17181C] border border-[#C5A059]/30 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-2xl text-[#FBF9F5]">Seeking a tailored full-day transformation package?</h3>
            <p className="text-xs text-[#A39E93]">
              Our concierge curates bespoke multi-service rituals including private hair coloring, oxygen facials, and couture styling.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/book"
              className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-6 py-3 rounded text-xs font-bold uppercase tracking-wider"
            >
              Reserve With Concierge
            </Link>
            <a
              href={getWhatsAppConciergeUrl('Hello Classic Pearls, I would like to enquire regarding a full-day custom beauty package.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#14161B] border border-[#C5A059]/40 text-[#DFBA73] px-4 py-3 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

      </div>

      {/* Slide-Over Service Drawer */}
      <ServiceDetailDrawer
        service={selectedDrawerService}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
}
