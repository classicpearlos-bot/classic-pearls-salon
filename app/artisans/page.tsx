'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ARTISANS } from '@/data/artisans';
import { Artisan } from '@/lib/types';
import Modal from '@/components/ui/Modal';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { Calendar, Award, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ArtisansPage() {
  const [selectedArtisanModal, setSelectedArtisanModal] = useState<Artisan | null>(null);

  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            THE ATELIER MASTERS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FBF9F5]">
            Mastery is <span className="italic text-[#DFBA73]">Personal</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed">
            Our Creative Directors and Specialists bring decades of international editorial mastery to every private consultation.
          </p>
        </div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {ARTISANS.map((artisan) => (
            <div
              key={artisan.id}
              className="bg-[#14161B] border border-white/10 hover:border-[#C5A059]/50 rounded-xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold block">
                    {artisan.title}
                  </span>
                  <h3 className="font-serif text-2xl text-[#FBF9F5]">{artisan.name}</h3>
                  <p className="text-xs text-[#DFBA73] font-serif italic">{artisan.speciality}</p>
                  <p className="text-xs text-[#A39E93] line-clamp-3 font-light leading-relaxed">
                    {artisan.bio}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2 border-t border-white/5">
                <button
                  onClick={() => setSelectedArtisanModal(artisan)}
                  className="w-full py-2 text-xs font-semibold text-[#DFBA73] hover:text-white transition-colors text-left flex items-center justify-between"
                >
                  <span>Full Biography & Rituals</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <Link
                  href={`/book?artisan=${encodeURIComponent(artisan.id)}`}
                  className="w-full bg-[#C5A059] hover:bg-[#DFBA73] text-[#0E0F12] py-2.5 rounded text-xs font-bold uppercase tracking-wider text-center block transition-colors"
                >
                  Reserve with {artisan.name.split(' ')[0]}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Card */}
        <div className="bg-[#17181C] border border-[#C5A059]/30 rounded-xl p-10 max-w-4xl mx-auto shadow-2xl flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#DFBA73] flex-shrink-0">
            <Award className="w-10 h-10" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl text-[#FBF9F5]">Our Commitment to Undivided Artistry</h3>
            <p className="text-xs text-[#A39E93] leading-relaxed">
              At Classic Pearls, our master stylists never double-book appointments. When you sit in our atelier chair, you receive 100% focused attention from diagnostic consultation through final refinement.
            </p>
          </div>
        </div>

      </div>

      {/* Artisan Profile Modal */}
      <Modal
        isOpen={!!selectedArtisanModal}
        onClose={() => setSelectedArtisanModal(null)}
        title={selectedArtisanModal?.name}
        subtitle={selectedArtisanModal?.title}
      >
        {selectedArtisanModal && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <img
                src={selectedArtisanModal.image}
                alt={selectedArtisanModal.name}
                className="w-28 h-28 rounded-full object-cover border-2 border-[#C5A059]/40"
              />
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs text-[#DFBA73] font-serif italic block">
                  {selectedArtisanModal.speciality}
                </span>
                <p className="text-xs text-[#A39E93] leading-relaxed">
                  {selectedArtisanModal.bio}
                </p>
              </div>
            </div>

            <div className="space-y-3 bg-[#17181C] p-4 rounded-lg border border-white/5">
              <h4 className="font-serif text-base text-[#FBF9F5] uppercase tracking-wider">
                Signature Signature Rituals
              </h4>
              <ul className="space-y-1.5 text-xs text-[#FBF9F5]">
                {selectedArtisanModal.signatureServices.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href={`/book?artisan=${encodeURIComponent(selectedArtisanModal.id)}`}
                onClick={() => setSelectedArtisanModal(null)}
                className="flex-1 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] py-3 rounded text-xs font-bold uppercase tracking-wider text-center"
              >
                Reserve Consultation
              </Link>
              <a
                href={getWhatsAppConciergeUrl(`Hello Classic Pearls, I would like to enquire about appointments with ${selectedArtisanModal.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#17181C] border border-[#C5A059]/40 text-[#DFBA73] py-3 rounded text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
