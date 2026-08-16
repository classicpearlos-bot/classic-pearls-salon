'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { businessConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { Menu, X, Phone, MessageSquare, Calendar } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'The Experience', href: '/experience' },
    { label: 'Lookbook', href: '/lookbook' },
    { label: 'Bridal Studio', href: '/bridal' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <aside aria-label="Announcement" className="bg-[#121317] border-b border-[#C5A059]/20 text-[11px] py-1.5 px-4 text-[#F3EFE6] tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[#C5A059]">✦</span>
            <span className="font-medium text-[#DFBA73]">Arekere, Bengaluru • Open 10:00 AM – 09:00 PM Everyday</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-[#A39E93]">
            <a href={`tel:${businessConfig.phoneRaw}`} className="hover:text-[#C5A059] flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>{businessConfig.phone}</span>
            </a>
            <span>|</span>
            <span className="text-[#A39E93]">Beside Camry Hospital, Arekere, Bengaluru</span>
            <span>|</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full text-[10px] border border-emerald-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Open Today
            </span>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E0F12]/95 backdrop-blur-md border-b border-[#C5A059]/25 py-3 shadow-xl'
            : 'bg-[#0E0F12]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col group focus:outline-none focus:ring-1 focus:ring-[#C5A059]">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#FBF9F5] group-hover:text-[#DFBA73] transition-colors">
              CLASSIC PEARL
            </span>
            <span className="text-[9px] tracking-[0.32em] text-[#C5A059] uppercase font-sans font-medium -mt-0.5">
              UNISEX SALON • BENGALURU
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[12px] uppercase tracking-[0.14em] font-medium transition-all py-1 relative ${
                    isActive ? 'text-[#DFBA73]' : 'text-[#A39E93] hover:text-[#FBF9F5]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A059]"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={getWhatsAppConciergeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#DFBA73] hover:text-white bg-[#17181C] hover:bg-[#22242B] border border-[#C5A059]/30 rounded transition-colors flex items-center gap-1.5 text-xs px-3"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden xl:inline text-[11px] uppercase tracking-wider font-semibold">WhatsApp</span>
            </a>

            <Link
              href="/book"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#DFBA73] hover:to-[#C5A059] text-[#0E0F12] px-5 py-2.5 rounded text-[11px] font-bold tracking-[0.14em] uppercase shadow-lg shadow-[#C5A059]/10 hover:shadow-[#C5A059]/25 hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Link
              href="/book"
              className="bg-[#C5A059] text-[#0E0F12] px-3 py-1.5 rounded text-[10px] font-bold tracking-wider uppercase sm:hidden"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FBF9F5] hover:text-[#C5A059] focus:outline-none focus:ring-1 focus:ring-[#C5A059] rounded"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0E0F12]/98 backdrop-blur-2xl flex flex-col justify-between p-6 lg:hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-[0.2em] text-[#FBF9F5]">CLASSIC PEARL</span>
              <span className="text-[8px] tracking-[0.3em] text-[#C5A059] uppercase">UNISEX SALON • BENGALURU</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#A39E93] hover:text-white rounded-full bg-white/5"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 my-auto py-6" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-2xl text-[#FBF9F5] hover:text-[#DFBA73] transition-colors py-1 flex items-center justify-between border-b border-white/5"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#C5A059] tracking-widest font-sans">→</span>
              </Link>
            ))}
          </nav>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <Link
              href="/book"
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] py-3.5 rounded text-xs font-bold tracking-widest uppercase"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>

            <a
              href={getWhatsAppConciergeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-[#17181C] border border-[#C5A059]/40 text-[#DFBA73] py-3 rounded text-xs font-semibold tracking-wider uppercase"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
