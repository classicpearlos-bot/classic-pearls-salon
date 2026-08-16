'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { businessConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiries',
    message: '',
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    trackEvent('contact_submitted');
  };

  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            CONCIERGE & LOCATION
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FBF9F5]">
            Connect with <span className="italic text-[#DFBA73]">Classic Pearls</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A39E93] font-light leading-relaxed">
            Our atelier concierge team is at your disposal for appointments, private suite reservations, and bespoke styling consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Column: Verified NAP & Contact Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#14161B] p-8 rounded-xl border border-white/10 space-y-6 shadow-xl">
              <h2 className="font-serif text-2xl text-[#FBF9F5]">Atelier Headquarters</h2>
              
              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FBF9F5] block">Physical Address</strong>
                    <span className="text-[#A39E93]">{businessConfig.address.street}, {businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.postalCode}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FBF9F5] block">Telephone Concierge</strong>
                    <a href={`tel:${businessConfig.phone.replace(/[^0-9+]/g, '')}`} className="text-[#DFBA73]">
                      {businessConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FBF9F5] block">Official Email</strong>
                    <a href={`mailto:${businessConfig.email}`} className="text-[#DFBA73]">
                      {businessConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FBF9F5] block">WhatsApp Concierge</strong>
                    <a href={getWhatsAppConciergeUrl()} target="_blank" rel="noopener noreferrer" className="text-[#DFBA73] hover:underline">
                      Chat directly with Concierge →
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5">
                <a
                  href={businessConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#DFBA73] hover:underline font-bold uppercase tracking-wider"
                >
                  <span>Open in Google Maps Directions →</span>
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-[#14161B] p-8 rounded-xl border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <h3 className="font-serif text-xl text-[#FBF9F5]">Atelier Operating Schedule</h3>
              </div>
              <div className="space-y-2.5 text-xs">
                {businessConfig.openingHours.map((sched, idx) => (
                  <div key={idx} className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-[#A39E93]">{sched.days}</span>
                    <strong className="text-[#FBF9F5]">{sched.hours}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#14161B] p-8 sm:p-10 rounded-xl border border-white/10 shadow-2xl">
              <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold block mb-1">
                ONLINE INQUIRIES
              </span>
              <h2 className="font-serif text-3xl text-[#FBF9F5] mb-2">Send a Message</h2>
              <p className="text-xs text-[#A39E93] mb-8 font-light">
                Have a specialized treatment request or corporate inquiry? Fill out the form below.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#DFBA73] mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#FBF9F5]">Inquiry Transmitted</h3>
                  <p className="text-xs text-[#A39E93] max-w-sm mx-auto">
                    Thank you for connecting with Classic Pearls. Our concierge will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs text-[#DFBA73] underline uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#A39E93] font-semibold block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Eleanor Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full bg-[#0E0F12] border border-white/15 rounded-lg p-2.5 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#A39E93] font-semibold block mb-1">
                        Mobile Phone *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="w-full bg-[#0E0F12] border border-white/15 rounded-lg p-2.5 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#A39E93] font-semibold block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-[#0E0F12] border border-white/15 rounded-lg p-2.5 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#A39E93] font-semibold block mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#0E0F12] border border-white/15 rounded-lg p-2.5 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option>General Inquiries</option>
                      <option>Bridal Penthouse Booking</option>
                      <option>Private Suite Rental</option>
                      <option>Editorial / Media Request</option>
                      <option>Career Opportunities</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#A39E93] font-semibold block mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="How may our concierge assist you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full bg-[#0E0F12] border border-white/15 rounded-lg p-2.5 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059]"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start space-x-2 text-xs text-[#A39E93] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        required
                        className="mt-0.5 rounded border-white/20 text-[#C5A059] focus:ring-[#C5A059]"
                      />
                      <span>I agree to the <Link href="/privacy-policy" className="text-[#DFBA73] underline">Privacy Policy</Link> for contact communications.</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#DFBA73] hover:to-[#C5A059] text-[#0E0F12] py-3.5 rounded text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
                  >
                    Transmit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
