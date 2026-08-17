'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ALL_SERVICES, SERVICE_CATEGORIES } from '@/data/services';
import { ServiceItem, GenderCategory } from '@/lib/types';
import ServiceDetailDrawer from '@/components/ui/ServiceDetailDrawer';
import { Clock, Search, ArrowRight } from 'lucide-react';

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
    <div className="bg-onyx text-pearl min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Page Editorial Header */}
        <div className="text-center max-w-4xl mx-auto mb-24 space-y-8">
          <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-bold block">
            Transparent Pricing
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl text-pearl leading-[1.1]">
            The Service <span className="italic text-gold-soft">Menu</span>
          </h1>
          <p className="text-sm text-pearl/60 font-light leading-relaxed max-w-2xl mx-auto">
            Every service is performed with premium certified products and tailored consultations. Enjoy unparalleled savings on every visit with our Pearl Membership.
          </p>
        </div>

        {/* Gender Selector + Search + Category Navigation */}
        <div className="mb-20 space-y-12">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 border-b border-pearl/10 pb-8">
            {/* Gender Toggle */}
            <div className="flex w-full lg:w-auto">
              {['women', 'men', 'all'].map((gender) => (
                <button
                  key={gender}
                  onClick={() => setGenderFilter(gender as GenderCategory)}
                  className={`flex-1 lg:flex-none px-8 py-3 text-[10px] font-sans uppercase tracking-[0.2em] transition-all duration-300 ${
                    genderFilter === gender
                      ? 'bg-pearl text-onyx shadow-[0_0_15px_rgba(251,249,245,0.1)]'
                      : 'bg-transparent text-pearl/50 hover:text-pearl border-y border-r first:border-l border-pearl/10'
                  }`}
                >
                  {gender === 'women' ? 'Womens' : gender === 'men' ? 'Mens' : 'All'}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 absolute left-0 top-1/2 -translate-y-1/2 text-pearl/40" />
              <input
                type="text"
                placeholder="Search treatments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-pearl/20 pl-8 pr-4 py-3 text-xs font-sans tracking-widest uppercase text-pearl placeholder:text-pearl/30 focus:outline-none focus:border-gold transition-colors rounded-none"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-6 py-2 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                categoryFilter === 'all'
                  ? 'border-b border-gold text-gold-soft'
                  : 'border-b border-transparent text-pearl/50 hover:text-pearl'
              }`}
            >
              All Categories
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-6 py-2 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  categoryFilter === cat.id
                    ? 'border-b border-gold text-gold-soft'
                    : 'border-b border-transparent text-pearl/50 hover:text-pearl'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services List (Editorial Format) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16 mb-24 animate-fade-in-up">
          {filteredServices.length === 0 && (
            <div className="col-span-1 lg:col-span-2 text-center py-20 text-pearl/50 text-sm tracking-widest uppercase font-sans">
              No services found matching your criteria.
            </div>
          )}
          
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col sm:flex-row gap-6 border-b border-pearl/10 pb-12 cursor-pointer"
              onClick={() => openDrawer(service)}
            >
              <div className="w-full sm:w-1/3 shrink-0">
                <div className="aspect-[4/5] bg-charcoal overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 bg-onyx/80 backdrop-blur px-3 py-1.5 text-[9px] font-sans uppercase tracking-[0.2em] text-gold">
                    {service.gender === 'women' ? "W" : service.gender === 'men' ? "M" : "U"}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between flex-1 py-2">
                <div className="space-y-4">
                  <span className="text-[9px] font-sans tracking-[0.25em] uppercase text-gold">
                    {service.categoryName}
                  </span>
                  
                  <h3 className="font-serif text-2xl text-pearl group-hover:text-gold-soft transition-colors leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-xs text-pearl/50 leading-relaxed font-light line-clamp-3">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-pearl/40 font-sans">
                    <Clock className="w-3.5 h-3.5 text-gold/50" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-pearl/5 flex items-center justify-between">
                  <div>
                    <span className="font-serif text-xl text-pearl block">₹{service.memberPrice}</span>
                    <span className="text-[9px] font-sans text-pearl/30 uppercase tracking-[0.2em]">
                      Regular: ₹{service.regularPrice}
                    </span>
                  </div>

                  <Link
                    href={`/book?service=${encodeURIComponent(service.id)}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-gold hover:text-pearl transition-colors flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pearl Membership Promo Banner */}
        <div className="bg-charcoal border border-pearl/10 p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">THE SAVINGS PASS</span>
            <h3 className="font-serif text-3xl text-pearl">Get the Pearl Membership for just ₹199/year.</h3>
            <p className="text-xs text-pearl/50 leading-relaxed font-light">
              Unlock member rates on all services. Save an average of ₹300 to ₹1,200 every time you visit.
            </p>
          </div>
          <Link
            href="/#membership"
            className="bg-pearl text-onyx hover:bg-gold px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-colors"
          >
            Discover Membership
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
