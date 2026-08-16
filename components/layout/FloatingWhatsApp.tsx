'use client';

import React from 'react';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppConciergeUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#17181C]/90 hover:bg-[#C5A059] text-[#DFBA73] hover:text-[#0E0F12] border border-[#C5A059]/40 hover:border-[#C5A059] p-3 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
      aria-label="Chat with Classic Pearls WhatsApp Concierge"
    >
      <MessageSquare className="w-5 h-5 flex-shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold tracking-wider uppercase pr-1">
        WhatsApp Concierge
      </span>
    </a>
  );
}
