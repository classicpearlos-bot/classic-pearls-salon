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
      <aside aria-label="Announcement" className="bg-charcoal border-b border-gold/20 text-[11px] py-1.5 px-4 text-cashmere tracking-wider">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-gold">✦</span>
            <span className="font-medium text-gold-soft">Arekere, Bengaluru • Open 10:00 AM – 09:00 PM Everyday</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-pearl/60">
            <a href={`tel:${businessConfig.phoneRaw}`} className="hover:text-gold flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-gold" />
              <span>{businessConfig.phone}</span>
            </a>
            <span>|</span>
            <span className="text-pearl/60">Beside Camry Hospital, Arekere, Bengaluru</span>
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
        className={`sticky top-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-onyx/95 backdrop-blur-md border-b border-gold/20 py-4 shadow-xl'
            : 'bg-onyx/80 backdrop-blur-sm border-b border-pearl/5 py-5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col group focus:outline-none focus:ring-1 focus:ring-gold">
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.18em] text-pearl group-hover:text-gold-soft transition-colors">
              CLASSIC PEARLS
            </span>
            <span className="text-[9px] tracking-[0.35em] text-gold uppercase font-sans font-medium -mt-1 pl-1">
              UNISEX SALON • BENGALURU
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.15em] font-medium transition-all py-1 relative ${
                    isActive ? 'text-gold-soft' : 'text-pearl/60 hover:text-pearl'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={getWhatsAppConciergeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pearl/70 hover:text-gold transition-colors flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden xl:inline">Enquire</span>
            </a>

            <Link
              href="/book"
              className="inline-flex items-center space-x-2 bg-pearl text-onyx hover:bg-gold px-6 py-3 rounded-none text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center space-x-4 lg:hidden">
            <Link
              href="/book"
              className="bg-pearl text-onyx px-4 py-2 rounded-none text-[10px] font-bold tracking-wider uppercase sm:hidden"
            >
              Reserve
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-pearl hover:text-gold focus:outline-none focus:ring-1 focus:ring-gold"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-7 h-7 stroke-[1.5]" /> : <Menu className="w-7 h-7 stroke-[1.5]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-onyx/98 backdrop-blur-2xl flex flex-col justify-between p-8 lg:hidden animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-pearl/10 pb-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-normal tracking-[0.2em] text-pearl">CLASSIC PEARLS</span>
              <span className="text-[9px] tracking-[0.3em] text-gold uppercase">UNISEX SALON • BENGALURU</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-pearl/60 hover:text-pearl"
              aria-label="Close menu"
            >
              <X className="w-8 h-8 stroke-[1.5]" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 my-auto py-8" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-3xl text-pearl hover:text-gold-soft transition-colors py-2 flex items-center justify-between border-b border-pearl/5"
              >
                <span>{link.label}</span>
                <span className="text-xs text-gold tracking-widest font-sans">→</span>
              </Link>
            ))}
          </nav>

          <div className="space-y-4 pt-8 border-t border-pearl/10">
            <Link
              href="/book"
              className="w-full flex items-center justify-center space-x-3 bg-pearl text-onyx hover:bg-gold transition-colors py-4 rounded-none text-xs font-bold tracking-[0.2em] uppercase"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Appointment</span>
            </Link>

            <a
              href={getWhatsAppConciergeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-3 border border-gold/40 text-gold hover:bg-gold/10 py-4 rounded-none text-xs font-semibold tracking-wider uppercase transition-colors"
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
