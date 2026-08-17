import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'The Page Has Left The Atelier | 404 | Classic Pearls',
  description: 'The requested page could not be located in our salon directory.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-onyx text-pearl px-6 py-20 pt-32">
      <div className="max-w-md mx-auto text-center space-y-8">
        <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-bold block">
          404 • Atelier Notice
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-pearl leading-tight">
          The page has left the <span className="italic text-gold-soft">Atelier.</span>
        </h1>
        <p className="text-sm text-pearl/50 leading-relaxed font-light">
          The sanctuary room or ritual you are seeking has either moved or is undergoing aesthetic refinement.
        </p>

        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-3 bg-pearl hover:bg-gold text-onyx px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Classic Pearls</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
