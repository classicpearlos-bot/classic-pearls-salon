import React from 'react';
import Link from 'next/link';
import { businessConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { Sparkles, Calendar, MessageSquare, CheckCircle2, Heart, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Bridal Studio & Makeover Packages | Classic Pearl Unisex Salon Bengaluru',
  description: 'Signature 18-hour waterproof HD airbrush bridal makeup, couture hair styling, and saree draping in Arekere, Bengaluru. Transparent pricing & pre-wedding trial included.',
};

export default function BridalPage() {
  const packages = [
    {
      id: 'bridal-complete',
      name: 'Signature Bridal Makeover Suite',
      subtitle: 'Complete 18-Hour HD Airbrush Experience',
      regularPrice: 9500,
      memberPrice: 7999,
      duration: '180 mins',
      popular: true,
      features: [
        'Complimentary Pre-Wedding Trial Session',
        '18-Hour Waterproof HD Airbrush Makeup',
        'Couture Bridal Hair Styling with Fresh Flowers / Veil',
        'Saree or Lehenga Draping',
        'Premium Mink Eyelashes & Lens Setting',
        'Emergency Touch-Up Kit for the Wedding Day',
      ],
    },
    {
      id: 'bridal-pre-care',
      name: 'Pre-Bridal Radiance Prep Package',
      subtitle: '3-Session Cellular Skin & Hair Glow',
      regularPrice: 6500,
      memberPrice: 5200,
      duration: '3 Sessions',
      popular: false,
      features: [
        'O3+ Bridal Glow Oxygen Facial',
        'Hair BOTOX or Deep Nourishing Treatment',
        'Chocolate Crystal Pedicure & Manicure',
        'Full Body Rica Liposoluble Waxing & De-Tan',
        'Eyebrow & Full Face Threading Shaping',
      ],
    },
    {
      id: 'bridesmaid-party',
      name: 'Bridesmaid & Family Party Glam',
      subtitle: 'HD Makeup & Contemporary Hair Styling',
      regularPrice: 3200,
      memberPrice: 2560,
      duration: '75 mins',
      popular: false,
      features: [
        'HD Party Makeup with Glow Finish',
        'Hair Styling (Hollywood Waves, Ironing or Updo)',
        'Saree / Dupatta Draping',
        'Eyelash Application',
      ],
    },
  ];

  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#17181C] border border-[#C5A059]/40 px-3.5 py-1 rounded-full text-[10px] tracking-wider text-[#DFBA73] uppercase font-bold">
            <Heart className="w-3 h-3 text-[#C5A059]" />
            <span>BRIDAL MAKEUP SUITE • AREKERE, BENGALURU</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FBF9F5]">
            Bridal Artistry & <span className="italic text-[#DFBA73]">Makeovers</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed">
            Flawless 18-hour waterproof HD makeup, couture bridal hair, and personalized pre-wedding skin preparation.
          </p>
        </div>

        {/* Hero Banner with Bridal Image */}
        <div className="relative rounded-3xl overflow-hidden border border-[#C5A059]/30 aspect-[21/9] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1600&q=80"
            alt="Classic Pearl Bridal Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-[#0E0F12]/40 to-transparent flex items-end p-8 sm:p-12">
            <div className="max-w-xl space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">PRE-WEDDING TRIAL INCLUDED</span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#FBF9F5]">Your Vision, Perfectly Executed</h2>
              <p className="text-xs text-[#A39E93]">We test every shade, lash, and hairstyle in advance so you walk down the aisle in 100% confidence.</p>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#1E2028] via-[#14161B] to-[#14161B] border-2 border-[#C5A059] scale-[1.02]'
                  : 'bg-[#14161B] border border-white/10 hover:border-[#C5A059]/40'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow">
                  Most Popular Bridal Choice
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold block">{pkg.subtitle}</span>
                  <h3 className="font-serif text-2xl text-[#FBF9F5] mt-1">{pkg.name}</h3>
                  <span className="text-xs text-[#A39E93] flex items-center gap-1 mt-1">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" /> {pkg.duration}
                  </span>
                </div>

                {/* Price */}
                <div className="p-4 bg-[#0E0F12] border border-white/5 rounded-2xl">
                  <span className="text-[10px] text-[#A39E93] block">Regular: <s className="text-[#A39E93]">₹{pkg.regularPrice}</s></span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-serif text-3xl font-bold text-[#DFBA73]">₹{pkg.memberPrice}</span>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase">Member Rate</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 block mt-1">Save ₹{pkg.regularPrice - pkg.memberPrice} with Pearl Pass</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 text-xs text-[#FBF9F5]">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 space-y-3">
                <Link
                  href={`/book?service=bridal-complete-package`}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#C5A059]/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Bridal Date</span>
                </Link>

                <a
                  href={getWhatsAppConciergeUrl(`Hello Classic Pearl Bridal Team, I would like to consult for ${pkg.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#17181C] hover:bg-[#22242B] border border-[#C5A059]/40 text-[#DFBA73] py-3 rounded-xl text-xs font-semibold uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Bridal Stylist</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Venue / Destination Travel Alert */}
        <div className="bg-[#14161B] border border-white/10 rounded-2xl p-8 text-center space-y-3 max-w-3xl mx-auto shadow-xl">
          <ShieldCheck className="w-8 h-8 text-[#C5A059] mx-auto" />
          <h3 className="font-serif text-2xl text-[#FBF9F5]">Destination & On-Venue Bridal Services</h3>
          <p className="text-xs text-[#A39E93] leading-relaxed">
            Our bridal team is available for destination weddings and on-venue hair & makeup services across Bengaluru and South India. Contact our bridal coordinator on WhatsApp for custom group estimates.
          </p>
        </div>

      </div>
    </div>
  );
}
