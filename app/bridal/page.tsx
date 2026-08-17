import React from 'react';
import Link from 'next/link';
import { businessConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { Calendar, MessageSquare, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Bridal Studio & Makeover Packages | Classic Pearls Unisex Salon Bengaluru',
  description: 'Signature 18-hour waterproof HD airbrush bridal makeup, couture hair styling, and saree draping in Arekere, Bengaluru. Transparent pricing & pre-wedding trial included.',
};

export default function BridalPage() {
  const packages = [
    {
      id: 'bridal-complete',
      name: 'Signature Bridal Makeover',
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
      name: 'Bridal Radiance Prep',
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
      name: 'Bridesmaid & Family Glam',
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
    <div className="bg-onyx text-pearl min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-bold block">
            Bridal Suite • Arekere, Bengaluru
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl text-pearl leading-[1.1]">
            Bridal <span className="italic text-gold-soft">Artistry</span>
          </h1>
          <p className="text-sm text-pearl/60 font-light leading-relaxed max-w-2xl mx-auto">
            Flawless 18-hour waterproof HD makeup, couture bridal hair, and personalized pre-wedding skin preparation.
          </p>
        </div>

        {/* Hero Banner with Bridal Image */}
        <div className="relative border border-pearl/10 bg-charcoal aspect-[21/9] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1600&q=80"
            alt="Classic Pearls Bridal Studio"
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-onyx/20 mix-blend-multiply pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 right-6 flex items-end p-4 sm:p-8">
            <div className="max-w-xl space-y-4 bg-onyx/90 backdrop-blur-md border border-pearl/10 p-6 sm:p-10">
              <span className="text-[9px] uppercase tracking-[0.2em] text-gold font-bold block">
                Pre-Wedding Trial Included
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-pearl leading-snug">
                Your Vision, <span className="italic text-gold-soft">Executed</span>
              </h2>
              <p className="text-xs text-pearl/50 font-light leading-relaxed">
                We test every shade, lash, and hairstyle in advance so you walk down the aisle with absolute confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-8 sm:p-12 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-charcoal border-2 border-gold scale-100 lg:scale-[1.02] z-10'
                  : 'bg-transparent border border-pearl/10 hover:border-gold'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-pearl text-onyx px-4 py-1 text-[9px] font-bold uppercase tracking-[0.2em]">
                  Most Popular
                </div>
              )}

              <div className="space-y-8">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-gold block">
                    {pkg.subtitle}
                  </span>
                  <h3 className="font-serif text-3xl text-pearl mt-2 leading-tight">
                    {pkg.name}
                  </h3>
                  <span className="text-xs text-pearl/50 flex items-center gap-2 mt-4 font-light uppercase tracking-wider font-sans">
                    <Clock className="w-3 h-3 text-gold" /> {pkg.duration}
                  </span>
                </div>

                {/* Price */}
                <div className="p-6 border border-pearl/10 bg-onyx space-y-2">
                  <span className="text-[10px] text-pearl/40 block font-sans tracking-wide uppercase">
                    Standard Rate: <s className="text-pearl/30">₹{pkg.regularPrice}</s>
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-4xl text-gold">₹{pkg.memberPrice}</span>
                    <span className="text-[9px] font-bold text-pearl/50 uppercase tracking-widest">Member Rate</span>
                  </div>
                  <span className="text-[10px] text-pearl/50 block font-serif italic pt-2">
                    Save ₹{pkg.regularPrice - pkg.memberPrice} with Pearl Pass
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 pt-4 border-t border-pearl/10">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-xs text-pearl/80">
                      <span className="w-1.5 h-1.5 bg-gold mt-1.5 rounded-full flex-shrink-0"></span>
                      <span className="leading-relaxed font-light">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-12 space-y-4">
                <Link
                  href={`/book?service=bridal-complete-package`}
                  className="w-full flex items-center justify-center space-x-3 bg-pearl hover:bg-gold text-onyx py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Date</span>
                </Link>

                <a
                  href={getWhatsAppConciergeUrl(`Hello Classic Pearls Bridal Team, I would like to consult for ${pkg.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-3 bg-transparent hover:bg-charcoal border border-pearl/20 text-pearl py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-gold" />
                  <span>Consult Stylist</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Venue / Destination Travel Alert */}
        <div className="bg-charcoal border border-pearl/10 p-12 sm:p-16 text-center space-y-6 max-w-4xl mx-auto">
          <ShieldCheck className="w-8 h-8 text-gold mx-auto" />
          <h3 className="font-serif text-3xl sm:text-4xl text-pearl">
            Destination & On-Venue <span className="italic text-gold-soft">Services</span>
          </h3>
          <p className="text-sm text-pearl/50 leading-relaxed font-light max-w-2xl mx-auto">
            Our bridal team is available for destination weddings and on-venue hair & makeup services across Bengaluru and South India. Connect with our bridal coordinator for custom estimates.
          </p>
        </div>

      </div>
    </div>
  );
}
