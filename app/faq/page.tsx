'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FAQ_ITEMS } from '@/data/faq';
import { ChevronDown, Sparkles, MessageSquare, Calendar } from 'lucide-react';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': false,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            ATELIER INQUIRIES
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">
            Frequently Asked <span className="italic text-[#DFBA73]">Questions</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#A39E93] font-light">
            Everything you need to know regarding appointment scheduling, artisan selection, and salon policies.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-16">
          {FAQ_ITEMS.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className="bg-[#14161B] border border-white/10 hover:border-[#C5A059]/40 rounded-xl overflow-hidden transition-all shadow-lg"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#FBF9F5] font-medium">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C5A059] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#DFBA73]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-[#A39E93] leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="bg-[#17181C] border border-[#C5A059]/30 rounded-xl p-8 text-center space-y-4 shadow-2xl">
          <h3 className="font-serif text-2xl text-[#FBF9F5]">Have an unlisted question?</h3>
          <p className="text-xs text-[#A39E93] max-w-md mx-auto">
            Our atelier concierge team is always available to assist with custom beauty plans and special event requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={getWhatsAppConciergeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#14161B] hover:bg-[#22242B] border border-[#C5A059]/40 text-[#DFBA73] px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask via WhatsApp</span>
            </a>
            <Link
              href="/book"
              className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider"
            >
              Reserve An Experience
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
