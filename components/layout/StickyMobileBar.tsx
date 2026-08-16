'use client';

import React from 'react';
import Link from 'next/link';
import { businessConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { Phone, Calendar, MessageSquare } from 'lucide-react';

export default function StickyMobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0E0F12]/95 backdrop-blur-lg border-t border-[#C5A059]/30 p-2.5 px-4 flex items-center justify-between gap-2 shadow-2xl">
      {/* Direct Call */}
      <a
        href={`tel:${businessConfig.phoneRaw}`}
        className="flex-1 bg-[#17181C] hover:bg-[#22242B] border border-white/15 text-[#FBF9F5] py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
        <span>Call</span>
      </a>

      {/* Direct WhatsApp */}
      <a
        href={getWhatsAppConciergeUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#17181C] hover:bg-[#22242B] border border-emerald-500/40 text-emerald-400 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* Book Now */}
      <Link
        href="/book"
        className="flex-[1.5] bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-[#C5A059]/20"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Now</span>
      </Link>
    </div>
  );
}
