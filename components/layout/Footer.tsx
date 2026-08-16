import React from 'react';
import Link from 'next/link';
import { siteConfig, businessConfig, socialConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { MapPin, Phone, Clock, ShieldCheck, Lock, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#08090B] border-t border-[#C5A059]/20 text-[#A39E93] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-[0.18em] text-[#FBF9F5]">
                CLASSIC PEARL
              </span>
              <span className="block text-[9px] tracking-[0.32em] text-[#C5A059] uppercase font-sans font-medium">
                UNISEX SALON & SPA • BENGALURU
              </span>
            </Link>
            <p className="text-sm text-[#A39E93] leading-relaxed max-w-sm">
              Premier luxury unisex salon in Arekere, Bengaluru specializing in precision hair styling, Korean glass skin facials, Hydra treatments, Botox, Nano Plastia, and bridal makeovers.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={getWhatsAppConciergeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#17181C] border border-[#C5A059]/30 flex items-center justify-center text-[#DFBA73] hover:bg-[#C5A059] hover:text-[#0E0F12] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={socialConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#17181C] border border-white/10 flex items-center justify-center text-[#FBF9F5] hover:bg-[#C5A059] hover:text-[#0E0F12] transition-colors text-xs font-semibold"
                aria-label="Instagram Profile"
              >
                IG
              </a>
              <a
                href={socialConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#17181C] border border-white/10 flex items-center justify-center text-[#FBF9F5] hover:bg-[#C5A059] hover:text-[#0E0F12] transition-colors text-xs font-semibold"
                aria-label="Facebook Page"
              >
                FB
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif text-base text-[#FBF9F5] uppercase tracking-wider mb-4 border-b border-[#C5A059]/20 pb-1">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/services" className="hover:text-[#DFBA73] transition-colors">Hair Styling & Cuts</Link></li>
              <li><Link href="/services" className="hover:text-[#DFBA73] transition-colors">Color, Balayage & Highlights</Link></li>
              <li><Link href="/services" className="hover:text-[#DFBA73] transition-colors">Korean Glass & Hydra Facials</Link></li>
              <li><Link href="/services" className="hover:text-[#DFBA73] transition-colors">Botox & Nano Plastia</Link></li>
              <li><Link href="/bridal" className="hover:text-[#DFBA73] transition-colors">Bridal Studio</Link></li>
              <li><Link href="/services" className="hover:text-[#DFBA73] transition-colors">Men's Grooming Lounge</Link></li>
              <li><Link href="/lookbook" className="hover:text-[#DFBA73] transition-colors">Transformations Lookbook</Link></li>
            </ul>
          </div>

          {/* Verified NAP & Location Column */}
          <div>
            <h4 className="font-serif text-base text-[#FBF9F5] uppercase tracking-wider mb-4 border-b border-[#C5A059]/20 pb-1">
              Visit & Contact
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>{businessConfig.address.street}, {businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.postalCode}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <a href={`tel:${businessConfig.phoneRaw}`} className="hover:text-[#DFBA73] font-semibold text-[#FBF9F5]">
                  {businessConfig.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-[#DFBA73]">
                <Clock className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>10:00 AM – 09:00 PM Everyday</span>
              </div>
              <div className="pt-1">
                <a
                  href={businessConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#DFBA73] hover:underline font-medium"
                >
                  <span>Google Maps Directions →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Legal Compliance Column */}
          <div>
            <h4 className="font-serif text-base text-[#FBF9F5] uppercase tracking-wider mb-4 border-b border-[#C5A059]/20 pb-1">
              Information & Policies
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/privacy-policy" className="hover:text-[#DFBA73] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#DFBA73] transition-colors">Terms of Service</Link></li>
              <li><Link href="/cancellation-policy" className="hover:text-[#DFBA73] transition-colors">Appointment & Cancellation Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-[#DFBA73] transition-colors">Satisfaction & Adjustment Policy</Link></li>
              <li><Link href="/faq" className="hover:text-[#DFBA73] transition-colors">Salon FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-[#DFBA73] transition-colors">Contact & Directions</Link></li>
            </ul>
          </div>
        </div>

        {/* Compliance Trust Signals */}
        <div className="py-6 border-b border-white/5 flex flex-wrap items-center justify-center gap-8 text-xs text-[#A39E93]">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>Meta Ads & Commercial Policy Ready</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-[#C5A059]" />
            <span>SSL Secured Global Vercel Edge Hosting</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
            <span>Google Business Location Verified</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs space-y-2 text-[#6E6A62]">
          <p>© {new Date().getFullYear()} {businessConfig.legalName}. All Rights Reserved. Hosted at <code className="text-[#C5A059]">classicpearls.vercel.app</code>.</p>
          <p className="text-[11px] max-w-2xl mx-auto">
            {businessConfig.address.street}, {businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.postalCode} | Phone: {businessConfig.phone} | Open: 10:00 AM – 09:00 PM Everyday
          </p>
        </div>

      </div>
    </footer>
  );
}
