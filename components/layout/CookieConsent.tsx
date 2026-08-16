'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('classic_pearls_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('classic_pearls_consent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('classic_pearls_consent', 'essential_only');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 bg-[#14161B]/95 backdrop-blur-md border border-[#C5A059]/30 rounded-lg p-5 shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-start space-x-3">
        <Shield className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
        <div className="space-y-2 text-xs">
          <h4 className="font-serif text-sm text-[#FBF9F5] font-semibold">Privacy & Atelier Experience</h4>
          <p className="text-[#A39E93] leading-relaxed">
            We use privacy-conscious analytics and secure session cookies to optimize your appointment booking and ensure seamless communication. Review our{' '}
            <Link href="/privacy-policy" className="text-[#DFBA73] underline hover:text-white">
              Privacy Policy
            </Link>.
          </p>
          <div className="flex items-center space-x-2 pt-1">
            <button
              onClick={handleAccept}
              className="bg-[#C5A059] hover:bg-[#DFBA73] text-[#0E0F12] px-4 py-1.5 rounded text-[11px] font-bold tracking-wider uppercase transition-colors"
            >
              Accept
            </button>
            <button
              onClick={handleReject}
              className="bg-transparent hover:bg-white/5 border border-white/20 text-[#A39E93] hover:text-white px-3 py-1.5 rounded text-[11px] font-medium transition-colors"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
