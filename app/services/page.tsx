'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ALL_SERVICES, SERVICE_CATEGORIES } from '@/data/services';
import { ServiceItem, GenderCategory } from '@/lib/types';
import ServiceDetailDrawer from '@/components/ui/ServiceDetailDrawer';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { Clock, Calendar, Search, Sparkles, MessageSquare, ArrowRight, CheckCircle2, Tag } from 'lucide-react';

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
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#17181C] border border-[#C5A059]/40 px-3.5 py-1 rounded-full text-[10px] tracking-wider text-[#DFBA73] uppercase font-bold">
            <Tag className="w-3 h-3 text-[#C5A059]" />
            <span>100% TRANSPARENT PRICING MENU</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FBF9F5]">
            Our Services & <span className="italic text-[#DFBA73]">Pricing</span>
          </h1>
          <p className="text-xs sm:text-base text-[#A39E93] font-light leading-relaxed">
            Every service is performed with premium certified products and tailored consultations. Enjoy extra savings on every visit with our ₹199/yr Pearl Membership.
          </p>
        </div>

        {/* Gender Selector + Search + Category Navigation */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
            
            {/* Gender Toggle */}
            <div className="inline-flex rounded-xl bg-[#17181C] p-1 border border-white/10">
              <button
                onClick={() => setGenderFilter('women')}
                className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  genderFilter === 'women'
                    ? 'bg-[#C5A059] text-[#0E0F12] shadow'
                    : 'text-[#A39E93] hover:text-white'
                }`}
              >
                Women's Services
              </button>
              <button
                onClick={() => setGenderFilter('men')}
                className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  genderFilter === 'men'
                    ? 'bg-[#C5A059] text-[#0E0F12] shadow'
                    : 'text-[#A39E93] hover:text-white'
                }`}
              >
                Men's Grooming
              </button>
              <button
                onClick={() => setGenderFilter('all')}
                className={`px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wider transition-all ${
                  genderFilter === 'all'
                    ? 'bg-[#C5A059] text-[#0E0F12] shadow'
                    : 'text-[#A39E93] hover:text-white'
                }`}
              >
                All
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#A39E93]" />
              <input
                type="text"
                placeholder="Search treatments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#17181C] border border-white/15 rounded-xl pl-10 pr-4 py-2 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059]"
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
              All Categories ({filteredServices.length})
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#14161B] border border-white/10 hover:border-[#C5A059]/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0E0F12]/90 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-wider text-[#DFBA73]">
                    {service.categoryName}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] tracking-wider text-[#C5A059] font-bold uppercase">
                      {service.gender === 'women' ? "Women" : service.gender === 'men' ? "Men" : "Unisex"}
                    </span>
                    <div className="flex items-center gap-1.5 text-[#A39E93]">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-[#FBF9F5] group-hover:text-[#DFBA73] transition-colors leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-xs text-[#A39E93] leading-relaxed line-clamp-2 font-light">
                    {service.description}
                  </p>

                  {/* Key Benefits Preview */}
                  {service.benefits && (
                    <div className="pt-1 space-y-1">
                      {service.benefits.slice(0, 2).map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-[#A39E93]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
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
                    onClick={() => openDrawer(service)}
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

        {/* Pearl Membership Promo Banner */}
        <div className="bg-gradient-to-r from-[#17181C] via-[#1E2028] to-[#17181C] border-2 border-[#C5A059]/50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">SAVINGS PASS</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5]">Get the Pearl Membership for just ₹199/year</h3>
            <p className="text-xs text-[#A39E93]">
              Unlock member rates on all services. Save an average of ₹300 to ₹1,200 every time you visit.
            </p>
          </div>
          <Link
            href="/#membership"
            className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-xl"
          >
            Learn About Membership
          </Link>
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
