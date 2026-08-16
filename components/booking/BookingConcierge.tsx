'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ALL_SERVICES, SERVICE_CATEGORIES } from '@/data/services';
import { ARTISANS } from '@/data/artisans';
import { ServiceItem, Artisan, BookingRequest, GenderCategory } from '@/lib/types';
import { bookingConfig, businessConfig } from '@/lib/config';
import { trackEvent } from '@/lib/analytics';
import { getWhatsAppBookingMessage } from '@/lib/whatsapp';
import { downloadCalendarEvent } from '@/lib/calendar';
import {
  Sparkles,
  Calendar as CalendarIcon,
  Clock,
  User,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Search,
  MessageSquare,
  FileCheck,
  ShieldCheck,
  Award
} from 'lucide-react';

interface BookingConciergeProps {
  initialServiceId?: string;
  isModal?: boolean;
}

export default function BookingConcierge({ initialServiceId, isModal = false }: BookingConciergeProps) {
  const searchParams = useSearchParams();
  const urlServiceParam = searchParams ? searchParams.get('service') : null;

  // Wizard Step: 1, 2, 3, 4, 5
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Filters for Step 1
  const [genderFilter, setGenderFilter] = useState<GenderCategory>('women');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Form State
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArtisan, setSelectedArtisan] = useState<Artisan | null>(null);
  const [isAnyArtisan, setIsAnyArtisan] = useState<boolean>(true);

  // Date & Time
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>(bookingConfig.timeSlots[1] || '11:30 AM');

  // Client Details
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientWhatsApp, setClientWhatsApp] = useState<string>('');
  const [occasion, setOccasion] = useState<string>('Regular appointment');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [consent, setConsent] = useState<boolean>(true);

  // Completed State
  const [completedBooking, setCompletedBooking] = useState<BookingRequest | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Initialize date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setPreferredDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Pre-select service from prop or URL query
  useEffect(() => {
    const targetId = initialServiceId || urlServiceParam;
    if (targetId) {
      const found = ALL_SERVICES.find((s) => s.id === targetId);
      if (found) {
        setSelectedService(found);
        setGenderFilter(found.gender);
      }
    } else if (!selectedService) {
      setSelectedService(ALL_SERVICES[0]);
    }
  }, [initialServiceId, urlServiceParam]);

  // Track start
  useEffect(() => {
    trackEvent('booking_started');
  }, []);

  // Filtered Services
  const filteredServices = ALL_SERVICES.filter((service) => {
    const matchesGender = genderFilter === 'all' || service.gender === genderFilter || service.gender === 'all';
    const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGender && matchesCategory && matchesSearch;
  });

  // Validation
  const validateStep4 = () => {
    const newErrors: Record<string, string> = {};
    if (!clientName.trim()) newErrors.name = 'Please enter your full name.';
    if (!clientPhone.trim() || clientPhone.length < 8) newErrors.phone = 'Please enter a valid mobile phone number.';
    if (!clientEmail.trim() || !clientEmail.includes('@')) newErrors.email = 'Please enter a valid email address.';
    if (!consent) newErrors.consent = 'Consent is required to submit an appointment request.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && !selectedService) {
      setErrors({ service: 'Please select a service to proceed.' });
      return;
    }
    if (currentStep === 4) {
      if (!validateStep4()) return;
      submitBookingRequest();
      return;
    }
    setErrors({});
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const submitBookingRequest = () => {
    const reference = `${bookingConfig.referencePrefix}${Math.floor(1000 + Math.random() * 9000)}`;
    const artisanName = isAnyArtisan || !selectedArtisan ? 'First Available Senior Master' : selectedArtisan.name;
    const artisanId = isAnyArtisan || !selectedArtisan ? 'any' : selectedArtisan.id;

    const booking: BookingRequest = {
      reference,
      serviceId: selectedService?.id || '',
      serviceName: selectedService?.name || 'Selected Treatment',
      artisanId,
      artisanName,
      preferredDate,
      preferredTime,
      client: {
        name: clientName,
        phone: clientPhone,
        email: clientEmail,
        whatsapp: clientWhatsApp || clientPhone,
      },
      occasion,
      specialNotes,
      consent,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    setCompletedBooking(booking);
    setCurrentStep(5);

    trackEvent('booking_submitted', {
      serviceName: booking.serviceName,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#14161B] border border-[#C5A059]/30 rounded-xl shadow-2xl overflow-hidden text-[#FBF9F5]">
      {/* Concierge Wizard Top Banner */}
      <div className="bg-[#17181C] border-b border-white/10 p-6 sm:p-8 text-center relative">
        <span className="text-[10px] tracking-[0.28em] text-[#C5A059] uppercase font-bold block mb-1">
          THE PRIVATE CONCIERGE
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5]">
          Tell us how you would like to be cared for.
        </h2>
        <p className="text-xs text-[#A39E93] mt-1">
          {currentStep === 5
            ? 'Your reservation request has been logged into our atelier concierge system.'
            : 'Step-by-step bespoke reservation experience.'}
        </p>

        {/* Step Indicator Bar */}
        {currentStep < 5 && (
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 mt-6 overflow-x-auto py-1">
            {[
              { num: 1, label: 'Ritual' },
              { num: 2, label: 'Artisan' },
              { num: 3, label: 'Schedule' },
              { num: 4, label: 'Details' },
            ].map((s) => (
              <div key={s.num} className="flex items-center space-x-1.5 flex-shrink-0">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors ${
                    currentStep === s.num
                      ? 'bg-[#C5A059] text-[#0E0F12] border-[#C5A059]'
                      : currentStep > s.num
                      ? 'bg-white/10 text-[#DFBA73] border-[#C5A059]/40'
                      : 'bg-transparent text-[#6E6A62] border-white/10'
                  }`}
                >
                  {currentStep > s.num ? '✓' : s.num}
                </div>
                <span
                  className={`text-[11px] uppercase tracking-wider font-medium ${
                    currentStep === s.num ? 'text-[#DFBA73]' : 'text-[#6E6A62]'
                  }`}
                >
                  {s.label}
                </span>
                {s.num < 4 && <span className="text-white/20 text-xs pl-2">›</span>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Concierge Step Content */}
      <div className="p-6 sm:p-8 min-h-[420px] flex flex-col justify-between">
        {/* ================= STEP 1: SELECT SERVICE ================= */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              {/* Gender Segmented Control */}
              <div className="inline-flex rounded-lg bg-[#0E0F12] p-1 border border-white/10">
                <button
                  type="button"
                  onClick={() => setGenderFilter('women')}
                  className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                    genderFilter === 'women'
                      ? 'bg-[#C5A059] text-[#0E0F12] shadow'
                      : 'text-[#A39E93] hover:text-white'
                  }`}
                >
                  Women’s Rituals
                </button>
                <button
                  type="button"
                  onClick={() => setGenderFilter('men')}
                  className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                    genderFilter === 'men'
                      ? 'bg-[#C5A059] text-[#0E0F12] shadow'
                      : 'text-[#A39E93] hover:text-white'
                  }`}
                >
                  Men’s Grooming
                </button>
                <button
                  type="button"
                  onClick={() => setGenderFilter('all')}
                  className={`px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wider transition-all ${
                    genderFilter === 'all'
                      ? 'bg-[#C5A059] text-[#0E0F12] shadow'
                      : 'text-[#A39E93] hover:text-white'
                  }`}
                >
                  All
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#A39E93]" />
                <input
                  type="text"
                  placeholder="Search treatments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#0E0F12] border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059] w-full sm:w-56"
                />
              </div>
            </div>

            {/* Service Grid Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1">
              {filteredServices.map((service) => {
                const isSelected = selectedService?.id === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => {
                      setSelectedService(service);
                      setErrors({});
                      trackEvent('service_selected', { serviceName: service.name });
                    }}
                    className={`p-4 rounded-lg border cursor-pointer transition-all flex justify-between items-start ${
                      isSelected
                        ? 'bg-[#C5A059]/15 border-[#C5A059] shadow-lg shadow-[#C5A059]/10'
                        : 'bg-[#17181C] border-white/5 hover:border-[#C5A059]/40'
                    }`}
                  >
                    <div className="space-y-1 pr-2">
                      <span className="text-[9px] uppercase tracking-wider text-[#C5A059] font-bold block">
                        {service.categoryName}
                      </span>
                      <h4 className="font-serif text-base text-[#FBF9F5] font-semibold">{service.name}</h4>
                      <div className="flex items-center gap-3 text-[11px] text-[#A39E93]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#C5A059]" />
                          {service.duration}
                        </span>
                        {service.tier && <span>• {service.tier}</span>}
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end justify-between self-stretch">
                      <span className="text-[10px] text-[#DFBA73] uppercase tracking-widest font-bold font-sans">
                        Bespoke
                      </span>
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] mt-2 ${
                          isSelected ? 'bg-[#C5A059] text-[#0E0F12] border-[#C5A059]' : 'border-white/20'
                        }`}
                      >
                        {isSelected && '✓'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {selectedService && (
              <div className="p-3 bg-[#0E0F12] border border-[#C5A059]/30 rounded-lg flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#A39E93] block text-[10px] uppercase tracking-wider">Selected Ritual</span>
                  <strong className="text-[#FBF9F5]">{selectedService.name}</strong>
                </div>
                <div className="text-right">
                  <span className="text-[#DFBA73] font-serif font-bold text-xs uppercase tracking-wider block">
                    {selectedService.tier || 'Bespoke Experience'}
                  </span>
                  <span className="text-[#A39E93] text-[10px]">{selectedService.duration}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= STEP 2: SELECT ARTISAN ================= */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <h4 className="font-serif text-xl text-[#FBF9F5]">Choose your preferred Master Artisan</h4>
            <p className="text-xs text-[#A39E93]">
              Select a dedicated specialist or allow our concierge to pair you with the best available director.
            </p>

            <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
              <div
                onClick={() => {
                  setIsAnyArtisan(true);
                  setSelectedArtisan(null);
                  trackEvent('artisan_selected', { artisanName: 'Any Available Master' });
                }}
                className={`p-4 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                  isAnyArtisan
                    ? 'bg-[#C5A059]/15 border-[#C5A059]'
                    : 'bg-[#17181C] border-white/5 hover:border-[#C5A059]/40'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#DFBA73]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-base text-[#FBF9F5] font-semibold">First Available Senior Master</h5>
                    <p className="text-xs text-[#A39E93]">Optimal schedule flexibility & tailored pairing</p>
                  </div>
                </div>
                <span
                  className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                    isAnyArtisan ? 'bg-[#C5A059] text-[#0E0F12] border-[#C5A059]' : 'border-white/20'
                  }`}
                >
                  {isAnyArtisan && '✓'}
                </span>
              </div>

              {ARTISANS.map((artisan) => {
                const isSelected = !isAnyArtisan && selectedArtisan?.id === artisan.id;
                return (
                  <div
                    key={artisan.id}
                    onClick={() => {
                      setIsAnyArtisan(false);
                      setSelectedArtisan(artisan);
                      trackEvent('artisan_selected', { artisanName: artisan.name });
                    }}
                    className={`p-4 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#C5A059]/15 border-[#C5A059]'
                        : 'bg-[#17181C] border-white/5 hover:border-[#C5A059]/40'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={artisan.image}
                        alt={artisan.name}
                        className="w-12 h-12 rounded-full object-cover border border-[#C5A059]/30"
                      />
                      <div>
                        <h5 className="font-serif text-base text-[#FBF9F5] font-semibold">{artisan.name}</h5>
                        <span className="text-[10px] text-[#C5A059] font-medium tracking-wider uppercase block">
                          {artisan.title}
                        </span>
                        <p className="text-xs text-[#A39E93] line-clamp-1">{artisan.speciality}</p>
                      </div>
                    </div>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                        isSelected ? 'bg-[#C5A059] text-[#0E0F12] border-[#C5A059]' : 'border-white/20'
                      }`}
                    >
                      {isSelected && '✓'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= STEP 3: PREFERRED DATE & TIME ================= */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <h4 className="font-serif text-xl text-[#FBF9F5]">Choose your preferred date and time</h4>
            <p className="text-xs text-[#A39E93]">
              *Note: Selection represents your preferred schedule. Our concierge verifies actual artisan slots.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#A39E93] font-bold block">
                  Select Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => {
                    setPreferredDate(e.target.value);
                    trackEvent('date_selected', { date: e.target.value });
                  }}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-[#0E0F12] border border-white/15 rounded-lg p-3 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#C5A059]"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#A39E93] font-bold block">
                  Preferred Time Window
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-[220px] overflow-y-auto pr-1">
                  {bookingConfig.timeSlots.map((slot) => {
                    const isSelected = preferredTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setPreferredTime(slot)}
                        className={`p-2.5 rounded text-xs font-semibold tracking-wider transition-all ${
                          isSelected
                            ? 'bg-[#C5A059] text-[#0E0F12] font-bold shadow'
                            : 'bg-[#0E0F12] text-[#A39E93] border border-white/10 hover:border-[#C5A059]/40'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-[#17181C] p-4 rounded-lg border border-white/5 text-xs text-[#A39E93] flex items-center space-x-3">
              <Clock className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
              <span>
                Standard consultation diagnostic takes place at the start of your appointment.
              </span>
            </div>
          </div>
        )}

        {/* ================= STEP 4: CLIENT DETAILS & CONSENT ================= */}
        {currentStep === 4 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <h4 className="font-serif text-xl text-[#FBF9F5]">Client Details & VIP Preferences</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#A39E93] font-semibold block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Eleanor Vance"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className={`w-full bg-[#0E0F12] border rounded-lg p-2.5 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059] ${
                    errors.name ? 'border-rose-500' : 'border-white/15'
                  }`}
                  required
                />
                {errors.name && <p className="text-rose-400 text-[10px] mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#A39E93] font-semibold block mb-1">
                  Mobile Phone (SMS Confirmation) *
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 00000"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className={`w-full bg-[#0E0F12] border rounded-lg p-2.5 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059] ${
                    errors.phone ? 'border-rose-500' : 'border-white/15'
                  }`}
                  required
                />
                {errors.phone && <p className="text-rose-400 text-[10px] mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#A39E93] font-semibold block mb-1">
                  Email (Calendar Invite) *
                </label>
                <input
                  type="email"
                  placeholder="eleanor@example.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className={`w-full bg-[#0E0F12] border rounded-lg p-2.5 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059] ${
                    errors.email ? 'border-rose-500' : 'border-white/15'
                  }`}
                  required
                />
                {errors.email && <p className="text-rose-400 text-[10px] mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#A39E93] font-semibold block mb-1">
                  Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full bg-[#0E0F12] border border-white/15 rounded-lg p-2.5 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059]"
                >
                  <option>Regular appointment</option>
                  <option>Bridal & Wedding</option>
                  <option>Gala & Red Carpet</option>
                  <option>Birthday & Celebration</option>
                  <option>Photoshoot / Fashion</option>
                  <option>Other Special Event</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#A39E93] font-semibold block mb-1">
                Special Requests or Hair/Skin History (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Mention allergies, past color history, or bespoke refreshment preferences..."
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                className="w-full bg-[#0E0F12] border border-white/15 rounded-lg p-2.5 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059]"
              ></textarea>
            </div>

            {/* Mandatory Consent Statement */}
            <div className="pt-2">
              <label className="flex items-start space-x-2.5 cursor-pointer text-xs text-[#A39E93]">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 rounded border-white/20 text-[#C5A059] focus:ring-[#C5A059]"
                />
                <span>
                  I agree to the{' '}
                  <Link href="/privacy-policy" className="text-[#DFBA73] underline">
                    Privacy Policy
                  </Link>{' '}
                  and understand that submitting this request does not guarantee an appointment until confirmed by
                  Classic Pearls concierge.
                </span>
              </label>
              {errors.consent && <p className="text-rose-400 text-[10px] mt-1">{errors.consent}</p>}
            </div>
          </div>
        )}

        {/* ================= STEP 5: CONFIRMATION TICKET ================= */}
        {currentStep === 5 && completedBooking && (
          <div className="space-y-6 py-4 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#DFBA73] mx-auto shadow-lg shadow-[#C5A059]/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#C5A059] font-bold uppercase block">
                REQUEST RECEIVED
              </span>
              <h3 className="font-serif text-3xl text-[#FBF9F5] mt-1">Thank You, {completedBooking.client.name}</h3>
              <p className="text-xs text-[#A39E93] max-w-md mx-auto mt-2">
                Our atelier concierge team will review artisan availability and contact you shortly to confirm your
                appointment.
              </p>
            </div>

            {/* Luxury Ticket Card */}
            <div className="max-w-md mx-auto bg-[#17181C] border border-dashed border-[#C5A059]/60 rounded-xl p-5 text-left text-xs space-y-2.5 shadow-xl">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#A39E93]">Reference Code</span>
                <strong className="text-[#DFBA73] font-mono tracking-wider">{completedBooking.reference}</strong>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#A39E93]">Ritual</span>
                <strong className="text-[#FBF9F5]">{completedBooking.serviceName}</strong>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#A39E93]">Master Artisan</span>
                <strong className="text-[#FBF9F5]">{completedBooking.artisanName}</strong>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#A39E93]">Preferred Schedule</span>
                <strong className="text-[#DFBA73]">
                  {completedBooking.preferredDate} at {completedBooking.preferredTime}
                </strong>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#A39E93]">Service Scope</span>
                <strong className="text-[#FBF9F5] font-serif text-xs uppercase tracking-wider">
                  Bespoke Atelier Consultation & Ritual
                </strong>
              </div>
            </div>

            {/* Next Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() =>
                  downloadCalendarEvent({
                    reference: completedBooking.reference,
                    serviceName: completedBooking.serviceName,
                    artisanName: completedBooking.artisanName,
                    preferredDate: completedBooking.preferredDate,
                    preferredTime: completedBooking.preferredTime,
                    clientName: completedBooking.client.name,
                  })
                }
                className="bg-[#17181C] hover:bg-[#22242B] border border-[#C5A059]/40 text-[#DFBA73] px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <CalendarIcon className="w-3.5 h-3.5" />
                <span>Add to Calendar (.ics)</span>
              </button>

              <a
                href={getWhatsAppBookingMessage({
                  reference: completedBooking.reference,
                  serviceName: completedBooking.serviceName,
                  artisanName: completedBooking.artisanName,
                  preferredDate: completedBooking.preferredDate,
                  preferredTime: completedBooking.preferredTime,
                  clientName: completedBooking.client.name,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-[#C5A059]/20"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Confirm via WhatsApp</span>
              </a>
            </div>

            <div className="pt-2">
              <Link href="/" className="text-xs text-[#A39E93] hover:text-[#DFBA73] underline">
                Return to Classic Pearls Atelier
              </Link>
            </div>
          </div>
        )}

        {/* Wizard Footer Navigation Controls */}
        {currentStep < 5 && (
          <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-6">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider text-[#A39E93] hover:text-white border border-white/10 flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div></div>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#DFBA73] hover:to-[#C5A059] text-[#0E0F12] px-6 py-2.5 rounded text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-lg shadow-[#C5A059]/15"
            >
              <span>{currentStep === 4 ? 'Submit Request' : 'Continue'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
