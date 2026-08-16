import React from 'react';
import Link from 'next/link';
import { FAQ_ITEMS } from '@/data/faq';
import { businessConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { MessageSquare, Phone, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Frequently Asked Questions | Classic Pearl Unisex Salon Bengaluru',
  description: 'Find answers to common questions about services, appointments, treatments, and timings at Classic Pearl Unisex Salon.',
};

export default function FAQPage() {
  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            COMMON QUESTIONS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FBF9F5]">
            Frequently Asked <span className="italic text-[#DFBA73]">Questions</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed max-w-2xl mx-auto">
            Everything you need to know before visiting Classic Pearl Unisex Salon in Arekere, Bengaluru.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <details
              key={idx}
              className="group bg-[#14161B] border border-white/5 open:border-[#C5A059]/40 rounded-xl p-6 transition-colors"
            >
              <summary className="font-serif text-lg text-[#FBF9F5] group-hover:text-[#DFBA73] cursor-pointer list-none flex items-center justify-between">
                <span>{item.question}</span>
                <span className="text-[#C5A059] group-open:rotate-45 transition-transform duration-200 text-xl font-sans">
                  +
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-[#A39E93] leading-relaxed pt-4 font-light">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        {/* Contact Help Box */}
        <div className="bg-[#17181C] border border-[#C5A059]/30 rounded-xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="font-serif text-2xl text-[#FBF9F5]">Have More Questions?</h3>
          <p className="text-xs text-[#A39E93] max-w-md mx-auto">
            Our salon reception is happy to assist you with inquiries regarding hair treatments, facials, or bridal bookings.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {businessConfig.phone}</span>
            </a>
            <a
              href={getWhatsAppConciergeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#14161B] border border-[#C5A059]/40 text-[#DFBA73] px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
