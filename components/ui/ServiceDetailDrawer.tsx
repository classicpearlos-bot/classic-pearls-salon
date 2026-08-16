'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/lib/types';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { X, Clock, CheckCircle2, MessageSquare, Calendar, Sparkles, Tag, ShieldCheck } from 'lucide-react';

interface ServiceDetailDrawerProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectForBooking?: (service: ServiceItem) => void;
}

export default function ServiceDetailDrawer({
  service,
  isOpen,
  onClose,
  onSelectForBooking
}: ServiceDetailDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const savings = service.regularPrice - service.memberPrice;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#14161B] border-l border-[#C5A059]/30 h-full overflow-y-auto p-6 sm:p-8 flex flex-col justify-between text-[#FBF9F5] shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
              {service.categoryName} • {service.gender === 'women' ? "Women" : service.gender === 'men' ? "Men" : "Unisex"}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-[#A39E93] hover:text-white rounded-full bg-white/5"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Service Title */}
          <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] leading-tight mb-1">
            {service.name}
          </h3>
          <p className="text-xs text-[#DFBA73] font-serif italic mb-6">{service.tagline}</p>

          {/* Dual Transparent Pricing Box */}
          <div className="bg-[#17181C] border border-[#C5A059]/30 p-4 rounded-xl mb-6 flex items-center justify-between shadow-lg">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#A39E93] block">Regular Price</span>
              <span className="text-sm text-[#A39E93] line-through">₹{service.regularPrice}</span>
            </div>
            
            <div className="text-right">
              <div className="flex items-baseline gap-1.5 justify-end">
                <span className="font-serif text-2xl font-bold text-[#DFBA73]">₹{service.memberPrice}</span>
                <span className="text-[10px] font-bold text-emerald-400 uppercase bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  Pearl Member
                </span>
              </div>
              <span className="text-[11px] text-emerald-400 font-medium block mt-0.5">
                Save ₹{savings} with ₹199/yr Membership
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 mb-6">
            <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
          </div>

          {/* Description */}
          <div className="space-y-3 text-xs sm:text-sm text-[#A39E93] leading-relaxed mb-6 font-light">
            <h4 className="font-serif text-base text-[#FBF9F5] uppercase tracking-wider">About This Service</h4>
            <p>{service.description}</p>
          </div>

          {/* Benefits */}
          {service.benefits && (
            <div className="space-y-3 mb-6 bg-[#1A1C23] p-4 rounded-xl border border-white/5">
              <h4 className="font-serif text-sm text-[#DFBA73] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>Key Benefits</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#FBF9F5]">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center gap-4 text-xs text-[#A39E93] pb-4">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#C5A059]" /> Duration: {service.duration}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C5A059]" /> 100% Certified Products</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <Link
            href={`/book?service=${encodeURIComponent(service.id)}`}
            onClick={() => {
              if (onSelectForBooking) onSelectForBooking(service);
              onClose();
            }}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#DFBA73] hover:to-[#C5A059] text-[#0E0F12] py-3.5 rounded-xl text-xs font-bold tracking-widest uppercase shadow-lg shadow-[#C5A059]/15"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment (₹{service.memberPrice})</span>
          </Link>

          <a
            href={getWhatsAppConciergeUrl(`Hello Classic Pearl, I would like to enquire regarding '${service.name}'.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 bg-[#17181C] hover:bg-[#22242B] border border-[#C5A059]/40 text-[#DFBA73] py-3 rounded-xl text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
