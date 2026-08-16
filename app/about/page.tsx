import React from 'react';
import Link from 'next/link';
import { businessConfig } from '@/lib/config';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Us | Classic Pearl Unisex Salon Bengaluru',
  description: 'Learn about the philosophy, craftsmanship, and standards of Classic Pearl Unisex Salon in Arekere, Bengaluru.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            ABOUT CLASSIC PEARL
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FBF9F5]">
            Craftsmanship & <span className="italic text-[#DFBA73]">Hospitality</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed">
            Welcome to Classic Pearl Unisex Salon, where world-class beauty treatments meet warm, personalized hospitality in Arekere, Bengaluru.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl text-[#FBF9F5]">Our Heritage & Vision</h2>
            <p className="text-xs sm:text-sm text-[#A39E93] leading-relaxed font-light">
              Classic Pearl Unisex Salon was founded with a clear mission: to provide the highest standard of hair styling, aesthetic skin treatments, and grooming in an atmosphere of refined comfort.
            </p>
            <p className="text-xs sm:text-sm text-[#A39E93] leading-relaxed font-light">
              From our signature Korean glass skin facials and Hydra pore treatments to organic Nano Plastia, Botox, and Balayage, every service is tailored to enhance each guest's unique individuality.
            </p>
            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#DFBA73] hover:text-white"
              >
                <span>View Our Service Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-xl overflow-hidden border border-white/10 aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
              alt="Classic Pearl Unisex Salon Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#14161B] p-8 rounded-xl border border-white/5 space-y-3">
            <Sparkles className="w-8 h-8 text-[#C5A059]" />
            <h3 className="font-serif text-2xl text-[#FBF9F5]">Premium Formulations</h3>
            <p className="text-xs text-[#A39E93] leading-relaxed">
              We exclusively use authentic, certified, ammonia-free and organic formulations to protect hair and skin health.
            </p>
          </div>

          <div className="bg-[#14161B] p-8 rounded-xl border border-white/5 space-y-3">
            <HeartHandshake className="w-8 h-8 text-[#C5A059]" />
            <h3 className="font-serif text-2xl text-[#FBF9F5]">Personalized Care</h3>
            <p className="text-xs text-[#A39E93] leading-relaxed">
              Every appointment begins with a thorough consultation to understand your hair texture, skin needs, and style goals.
            </p>
          </div>

          <div className="bg-[#14161B] p-8 rounded-xl border border-white/5 space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
            <h3 className="font-serif text-2xl text-[#FBF9F5]">Strict Hygiene Standards</h3>
            <p className="text-xs text-[#A39E93] leading-relaxed">
              Autoclaved instruments, single-use fresh towels, and sanitized stations ensure complete safety.
            </p>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="bg-[#17181C] border border-[#C5A059]/30 rounded-xl p-10 text-center space-y-6 max-w-4xl mx-auto shadow-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5]">Experience Classic Pearl Unisex Salon</h2>
          <p className="text-xs text-[#A39E93] max-w-xl mx-auto">
            Visit us in Arekere, Bengaluru or book your appointment online today.
          </p>
          <div className="pt-2">
            <Link
              href="/book"
              className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-8 py-3.5 rounded text-xs font-bold uppercase tracking-wider"
            >
              Book Appointment
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
