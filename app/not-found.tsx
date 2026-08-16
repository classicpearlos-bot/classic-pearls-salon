import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'The Page Has Left The Atelier | 404 | Classic Pearls',
  description: 'The requested page could not be located in our salon directory.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#0E0F12] text-[#FBF9F5] px-4 py-20">
      <div className="max-w-md mx-auto text-center space-y-6">
        <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
          404 • ATELIER NOTICE
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5] leading-tight">
          THE PAGE HAS LEFT THE <span className="italic text-[#DFBA73]">ATELIER.</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#A39E93] leading-relaxed font-light">
          The sanctuary room or ritual you are seeking has either moved or is undergoing aesthetic refinement.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-6 py-3 rounded text-xs font-bold tracking-widest uppercase shadow-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Classic Pearls</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
