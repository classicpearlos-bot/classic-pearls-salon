import React from 'react';
import Link from 'next/link';
import { siteConfig, businessConfig, socialConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { MapPin, Phone, Clock, ShieldCheck, Lock, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-onyx border-t border-gold/20 text-pearl/60 pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16 border-b border-pearl/10">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl font-normal tracking-[0.18em] text-pearl">
                CLASSIC PEARLS
              </span>
              <span className="block text-[9px] tracking-[0.35em] text-gold uppercase font-sans font-medium mt-1">
                UNISEX SALON • BENGALURU
              </span>
            </Link>
            <p className="text-xs text-pearl/50 leading-relaxed max-w-sm">
              Premier luxury unisex salon in Arekere, Bengaluru specializing in precision hair styling, Korean glass skin facials, Hydra treatments, Botox, Nano Plastia, and bridal makeovers.
            </p>

            <div className="pt-4 flex items-center space-x-4">
              <a
                href={getWhatsAppConciergeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-charcoal border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-onyx transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={socialConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-charcoal border border-pearl/10 flex items-center justify-center text-pearl hover:bg-gold hover:text-onyx transition-colors text-xs font-semibold tracking-widest"
                aria-label="Instagram Profile"
              >
                IG
              </a>
              <a
                href={socialConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-charcoal border border-pearl/10 flex items-center justify-center text-pearl hover:bg-gold hover:text-onyx transition-colors text-xs font-semibold tracking-widest"
                aria-label="Facebook Page"
              >
                FB
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif text-xl text-pearl mb-6 pb-2 border-b border-gold/20 inline-block pr-8">
              The Atelier
            </h4>
            <ul className="space-y-4 text-xs font-sans tracking-widest uppercase">
              <li><Link href="/services" className="hover:text-gold transition-colors">Hair Styling & Cuts</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Color & Balayage</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Skin & Aesthetics</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Botox & Texture</Link></li>
              <li><Link href="/bridal" className="hover:text-gold transition-colors">Bridal Studio</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">The Gentleman's Room</Link></li>
            </ul>
          </div>

          {/* Verified NAP & Location Column */}
          <div>
            <h4 className="font-serif text-xl text-pearl mb-6 pb-2 border-b border-gold/20 inline-block pr-8">
              Visit Us
            </h4>
            <div className="space-y-5 text-xs leading-relaxed font-sans tracking-wide">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{businessConfig.address.street}, {businessConfig.address.city},<br/>{businessConfig.address.state} {businessConfig.address.postalCode}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={`tel:${businessConfig.phoneRaw}`} className="hover:text-gold font-semibold text-pearl">
                  {businessConfig.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gold-soft">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                <span>10:00 AM – 09:00 PM Everyday</span>
              </div>
              <div className="pt-2">
                <a
                  href={businessConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] text-gold uppercase tracking-widest hover:text-pearl transition-colors"
                >
                  <span>Get Directions</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Legal Compliance Column */}
          <div>
            <h4 className="font-serif text-xl text-pearl mb-6 pb-2 border-b border-gold/20 inline-block pr-8">
              Information
            </h4>
            <ul className="space-y-4 text-xs font-sans tracking-widest uppercase">
              <li><Link href="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link></li>
              <li><Link href="/cancellation-policy" className="hover:text-gold transition-colors">Cancellation Policy</Link></li>
              <li><Link href="/faq" className="hover:text-gold transition-colors">Client FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Compliance Trust Signals */}
        <div className="py-8 border-b border-pearl/5 flex flex-wrap items-center justify-between gap-6 text-[10px] font-sans tracking-widest uppercase text-pearl/40">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-4 h-4 text-gold/50" />
            <span>Commercial Policy Ready</span>
          </div>
          <div className="flex items-center space-x-3">
            <Lock className="w-4 h-4 text-gold/50" />
            <span>Secured Global Edge Hosting</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-4 h-4 text-gold/50" />
            <span>Location Verified</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-sans tracking-widest uppercase text-pearl/30">
          <p>© {new Date().getFullYear()} {businessConfig.legalName}.</p>
          <p className="mt-2 md:mt-0">
            A Premium Beauty Destination
          </p>
        </div>

      </div>
    </footer>
  );
}
