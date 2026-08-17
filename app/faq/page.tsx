import React from 'react';
import Link from 'next/link';
import { FAQ_ITEMS } from '@/data/faq';
import { businessConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { MessageSquare, Phone, MapPin, Clock, Plus } from 'lucide-react';

export const metadata = {
  title: 'Frequently Asked Questions | Classic Pearl Unisex Salon Bengaluru',
  description: 'Find answers to common questions about services, appointments, treatments, and timings at Classic Pearl Unisex Salon.',
};

export default function FAQPage() {
  return (
    <div className="bg-onyx text-pearl min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center space-y-8 mb-24">
          <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-bold block">
            Etiquette & Details
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl text-pearl leading-[1.1]">
            Frequently Asked <span className="italic text-gold-soft">Questions</span>
          </h1>
          <p className="text-sm text-pearl/60 font-light leading-relaxed max-w-2xl mx-auto">
            Everything you need to know to prepare for your experience at Classic Pearls Unisex Salon.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-0 border-t border-pearl/10">
          {FAQ_ITEMS.map((item, idx) => (
            <details
              key={idx}
              className="group border-b border-pearl/10 py-6 transition-colors duration-300 open:bg-charcoal/30 px-4"
            >
              <summary className="font-serif text-xl text-pearl group-hover:text-gold-soft cursor-pointer list-none flex items-center justify-between">
                <span>{item.question}</span>
                <span className="text-gold group-open:rotate-45 transition-transform duration-500 font-sans">
                  <Plus className="w-4 h-4" />
                </span>
              </summary>
              <p className="text-sm text-pearl/50 leading-relaxed pt-6 font-light max-w-3xl">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        {/* Contact Help Box */}
        <div className="mt-24 bg-charcoal border border-pearl/10 p-12 text-center space-y-8">
          <h3 className="font-serif text-3xl text-pearl">Require Further Assistance?</h3>
          <p className="text-xs text-pearl/50 font-sans tracking-wide max-w-md mx-auto uppercase">
            Our atelier concierge is available to guide you through our service menu, book consultations, or assist with special requests.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="bg-pearl text-onyx hover:bg-gold px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 transition-colors w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4" />
              <span>{businessConfig.phone}</span>
            </a>
            <a
              href={getWhatsAppConciergeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-charcoal border border-pearl/20 text-pearl px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 transition-colors w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-4 h-4 text-gold" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
