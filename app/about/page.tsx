import React from 'react';
import Link from 'next/link';
import { siteConfig, businessConfig } from '@/lib/config';
import { Sparkles, Calendar, Award, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About the Atelier | Heritage & Artistry | Classic Pearls',
  description: 'Learn about the philosophy, architectural standards, and dedicated craftsmanship behind Classic Pearls luxury beauty lounge.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            ATELIER HERITAGE
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FBF9F5]">
            The Architecture of <span className="italic text-[#DFBA73]">Elegance</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed">
            Classic Pearls was created with a singular mandate: to elevate hair and skin artistry into a bespoke, serene, and uncompromising luxury ritual.
          </p>
        </div>

        {/* Brand Story Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5] leading-tight">
              Where Parisian Technique Meets Botanical Biology
            </h2>
            <p className="text-sm text-[#A39E93] leading-relaxed font-light">
              We believe true luxury is invisible—it is found in the weightless movement of perfectly cut hair, the natural luminescence of undamaged color, and the deep peace of an unhurried, private appointment.
            </p>
            <p className="text-sm text-[#A39E93] leading-relaxed font-light">
              From our custom Italian styling stations to our organic amino acid formulations, every element of Classic Pearls is designed to eliminate the harsh chemical rush of commercial salons and replace it with bespoke care.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-white/10">
              <div>
                <span className="font-serif text-2xl font-bold text-[#DFBA73] block">1-on-1</span>
                <span className="text-xs text-[#A39E93]">Undivided artisan dedication</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#DFBA73] block">100%</span>
                <span className="text-xs text-[#A39E93]">Cruelty-free & organic peptides</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-[#C5A059]/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                alt="Classic Pearls Sanctuary"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>

        {/* Our 3 Core Commitments */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
              THE THREE COMMITMENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5]">Our Atelier Standards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#14161B] p-8 rounded-xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#C5A059]/15 flex items-center justify-center text-[#DFBA73]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#FBF9F5]">Biological Integrity</h3>
              <p className="text-xs text-[#A39E93] leading-relaxed font-light">
                We never compromise hair or skin health for temporary speed. Every lightening treatment includes continuous bond-multiplying elixirs.
              </p>
            </div>

            <div className="bg-[#14161B] p-8 rounded-xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#C5A059]/15 flex items-center justify-center text-[#DFBA73]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#FBF9F5]">Architectural Precision</h3>
              <p className="text-xs text-[#A39E93] leading-relaxed font-light">
                Every haircut and color glaze is mathematically designed to enhance cheekbone elevation, eye color, and natural growth patterns.
              </p>
            </div>

            <div className="bg-[#14161B] p-8 rounded-xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#C5A059]/15 flex items-center justify-center text-[#DFBA73]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#FBF9F5]">Private Sanctuary</h3>
              <p className="text-xs text-[#A39E93] leading-relaxed font-light">
                Enjoy private styling suites, tailored ambient acoustics, and an atmosphere designed to respect personal privacy.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#17181C] border border-[#C5A059]/30 rounded-xl p-12 max-w-3xl mx-auto shadow-2xl">
          <h3 className="font-serif text-3xl text-[#FBF9F5] mb-4">Step into the Atelier</h3>
          <p className="text-xs text-[#A39E93] max-w-md mx-auto mb-8">
            Experience the difference of individualized luxury and master craftsmanship.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-8 py-4 rounded text-xs font-bold tracking-widest uppercase shadow-xl"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve An Experience</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
