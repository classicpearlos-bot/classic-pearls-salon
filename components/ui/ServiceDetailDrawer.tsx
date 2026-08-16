'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/lib/types';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { X, Clock, Award, CheckCircle2, MessageSquare, Calendar, Sparkles } from 'lucide-react';

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
              {service.categoryName} • {service.gender === 'women' ? "Women's Ritual" : service.gender === 'men' ? "Men's Grooming" : "Unisex Atelier"}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-[#A39E93] hover:text-white rounded-full bg-white/5"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Service Main Title */}
          <h3 className="font-serif text-3xl text-[#FBF9F5] leading-tight mb-2">
            {service.name}
          </h3>
          <p className="text-xs text-[#DFBA73] italic font-serif mb-6">{service.tagline}</p>

          <div className="flex items-center justify-between bg-[#17181C] border border-[#C5A059]/20 p-4 rounded-lg mb-6">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#A39E93] block">Experience Category</span>
              <span className="font-serif text-lg text-[#DFBA73] font-semibold">
                {service.tier || 'Bespoke Atelier Ritual'}
              </span>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1.5 text-xs text-[#C5A059] font-medium justify-end">
                <Clock className="w-3.5 h-3.5" />
                <span>{service.duration}</span>
              </div>
              <span className="text-[11px] text-[#A39E93] block mt-0.5">By Reservation</span>
            </div>
          </div>

          {/* Image & Description */}
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/10 mb-6">
            <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-4 text-sm text-[#A39E93] leading-relaxed mb-6">
            <h4 className="font-serif text-lg text-[#FBF9F5] uppercase tracking-wider">The Ritual Protocol</h4>
            <p>{service.description}</p>
          </div>

          {/* What Is Included */}
          {service.whatsIncluded && service.whatsIncluded.length > 0 && (
            <div className="space-y-3 mb-6 bg-[#1A1C23] p-4 rounded-lg border border-white/5">
              <h4 className="font-serif text-base text-[#DFBA73] uppercase tracking-wider">What Is Included</h4>
              <ul className="space-y-2 text-xs text-[#FBF9F5]">
                {service.whatsIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action CTAs */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <Link
            href={`/book?service=${encodeURIComponent(service.id)}`}
            onClick={() => {
              if (onSelectForBooking) onSelectForBooking(service);
              onClose();
            }}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#DFBA73] hover:to-[#C5A059] text-[#0E0F12] py-3.5 rounded text-xs font-bold tracking-widest uppercase shadow-lg shadow-[#C5A059]/15"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve This Ritual</span>
          </Link>

          <a
            href={getWhatsAppConciergeUrl(`Hello Classic Pearls, I would like to enquire regarding '${service.name}'.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 bg-[#17181C] hover:bg-[#22242B] border border-[#C5A059]/40 text-[#DFBA73] py-3 rounded text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
