'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ALL_SERVICES, SERVICE_CATEGORIES } from '@/data/services';
import { ServiceItem, BookingRequest, GenderCategory } from '@/lib/types';
import { bookingConfig, businessConfig, membershipConfig } from '@/lib/config';
import { trackEvent } from '@/lib/analytics';
import { getWhatsAppBookingMessage } from '@/lib/whatsapp';
import { downloadCalendarEvent } from '@/lib/calendar';
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Search,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Tag
} from 'lucide-react';

interface BookingConciergeProps {
  initialServiceId?: string;
  isModal?: boolean;
}

export default function BookingConcierge({ initialServiceId, isModal = false }: BookingConciergeProps) {
  const searchParams = useSearchParams();
  const urlServiceParam = searchParams ? searchParams.get('service') : null;

  // Maximum 3 Screens: 1. Service, 2. Schedule, 3. Name & WhatsApp -> 4. Confirmed
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Filters for Screen 1
  const [genderFilter, setGenderFilter] = useState<GenderCategory>('women');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Form State
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isMember, setIsMember] = useState<boolean>(true); // Default to member pricing interest

  // Date & Time
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>(bookingConfig.timeSlots[1] || '11:00 AM');

  // Client Details
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');

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

  // Validation for Step 3
  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!clientName.trim()) newErrors.name = 'Please enter your name.';
    if (!clientPhone.trim() || clientPhone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && !selectedService) {
      setErrors({ service: 'Please select a service to proceed.' });
      return;
    }
    if (currentStep === 3) {
      if (!validateStep3()) return;
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

    const booking: BookingRequest = {
      reference,
      serviceId: selectedService?.id || '',
      serviceName: selectedService?.name || 'Selected Service',
      regularPrice: selectedService?.regularPrice,
      memberPrice: selectedService?.memberPrice,
      preferredDate,
      preferredTime,
      client: {
        name: clientName,
        phone: clientPhone,
        whatsapp: clientPhone,
      },
      isMember,
      specialNotes,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    setCompletedBooking(booking);
    setCurrentStep(4);

    trackEvent('booking_submitted', {
      serviceName: booking.serviceName,
      price: (isMember ? booking.memberPrice : booking.regularPrice) || 0,
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-onyx border border-pearl/10 rounded-none overflow-hidden text-pearl font-sans">
      {/* Top Banner */}
      <div className="bg-charcoal border-b border-pearl/10 p-8 text-center relative">
        <span className="text-[10px] tracking-[0.2em] text-gold uppercase font-bold mb-4 block">
          Fast 30-Second Appointment
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-pearl mb-2">
          Reserve Your Visit
        </h2>
        <p className="text-xs text-pearl/50">
          {currentStep === 4
            ? 'Your booking request is confirmed.'
            : 'No prepayment required. Settle at the salon.'}
        </p>

        {/* 3 Step Indicator */}
        {currentStep < 4 && (
          <div className="flex items-center justify-center space-x-4 sm:space-x-12 mt-8">
            {[
              { num: 1, label: 'Service' },
              { num: 2, label: 'Schedule' },
              { num: 3, label: 'Details' },
            ].map((s) => (
              <div key={s.num} className="flex items-center space-x-2">
                <div
                  className={`w-5 h-5 flex items-center justify-center text-[9px] font-bold transition-colors ${
                    currentStep === s.num
                      ? 'bg-pearl text-onyx'
                      : currentStep > s.num
                      ? 'bg-transparent text-gold border border-gold/40'
                      : 'bg-transparent text-pearl/30 border border-pearl/10'
                  }`}
                >
                  {currentStep > s.num ? '✓' : s.num}
                </div>
                <span
                  className={`text-[9px] uppercase tracking-[0.2em] ${
                    currentStep === s.num ? 'text-pearl font-semibold' : 'text-pearl/40'
                  }`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Step Content */}
      <div className="p-6 sm:p-10 min-h-[420px] flex flex-col justify-between">
        
        {/* ================= SCREEN 1: CHOOSE SERVICE ================= */}
        {currentStep === 1 && (
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-pearl/10 pb-6">
              {/* Gender Switcher */}
              <div className="flex w-full sm:w-auto">
                {['women', 'men', 'all'].map((gender) => (
                  <button
                    key={gender}
                    type="button"
                    onClick={() => setGenderFilter(gender as GenderCategory)}
                    className={`flex-1 sm:flex-none px-6 py-2 text-[9px] font-sans uppercase tracking-[0.2em] transition-all duration-300 ${
                      genderFilter === gender
                        ? 'bg-pearl text-onyx'
                        : 'bg-transparent text-pearl/50 hover:text-pearl border-y border-r first:border-l border-pearl/10'
                    }`}
                  >
                    {gender === 'women' ? 'Womens' : gender === 'men' ? 'Mens' : 'All'}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 absolute left-0 top-1/2 -translate-y-1/2 text-pearl/40" />
                <input
                  type="text"
                  placeholder="Search treatments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-b border-pearl/20 pl-8 pr-4 py-2 text-xs font-sans tracking-widest uppercase text-pearl placeholder:text-pearl/30 focus:outline-none focus:border-gold transition-colors rounded-none"
                />
              </div>
            </div>

            {/* Service Selection List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
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
                    className={`p-5 border cursor-pointer transition-all flex justify-between items-start ${
                      isSelected
                        ? 'bg-charcoal border-gold'
                        : 'bg-transparent border-pearl/10 hover:border-pearl/30'
                    }`}
                  >
                    <div className="space-y-3 pr-4">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-gold block">
                        {service.categoryName}
                      </span>
                      <h4 className="font-serif text-lg text-pearl leading-snug">{service.name}</h4>
                      <div className="flex items-center gap-2 text-[10px] text-pearl/50 tracking-[0.1em] uppercase">
                        <Clock className="w-3 h-3 text-gold/50" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    
                    <div className="text-right flex flex-col items-end justify-between self-stretch">
                      <div>
                        <span className="text-[9px] text-pearl/30 uppercase tracking-wider block">Reg: ₹{service.regularPrice}</span>
                        <span className="font-serif text-base text-pearl">₹{service.memberPrice}</span>
                      </div>
                      <div
                        className={`w-4 h-4 border flex items-center justify-center text-[8px] mt-4 ${
                          isSelected ? 'bg-gold text-onyx border-gold' : 'border-pearl/20'
                        }`}
                      >
                        {isSelected && '✓'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {selectedService && (
              <div className="p-5 bg-charcoal border border-pearl/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-4">
                <div>
                  <span className="text-pearl/40 block text-[9px] uppercase tracking-[0.2em] mb-1">Selected Canvas</span>
                  <strong className="text-pearl font-serif text-lg font-normal">{selectedService.name}</strong>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-pearl font-serif text-xl block">
                    ₹{isMember ? selectedService.memberPrice : selectedService.regularPrice}
                  </span>
                  <span className="text-gold text-[9px] font-sans uppercase tracking-[0.1em]">
                    {isMember ? `Member Savings: ₹${selectedService.regularPrice - selectedService.memberPrice}` : ''}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= SCREEN 2: CHOOSE DATE & TIME ================= */}
        {currentStep === 2 && (
          <div className="space-y-10 animate-fade-in-up">
            <div>
              <h4 className="font-serif text-3xl text-pearl mb-2">Preferred Schedule</h4>
              <p className="text-xs text-pearl/50">Operating Hours: 10:00 AM – 09:00 PM Everyday.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gold block">
                  Select Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-transparent border-b border-pearl/20 py-3 text-sm font-sans text-pearl focus:outline-none focus:border-gold transition-colors rounded-none"
                  required
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gold block">
                  Select Time Slot
                </label>
                <div className="grid grid-cols-2 gap-3 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                  {bookingConfig.timeSlots.map((slot) => {
                    const isSelected = preferredTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setPreferredTime(slot)}
                        className={`p-3 text-[10px] uppercase tracking-[0.2em] transition-all ${
                          isSelected
                            ? 'bg-pearl text-onyx font-bold'
                            : 'bg-transparent text-pearl/60 border border-pearl/10 hover:border-pearl/40'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-charcoal p-5 border border-pearl/10 text-xs text-pearl/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span>Appointment Date: <strong className="text-pearl font-normal">{preferredDate}</strong> at <strong className="text-pearl font-normal">{preferredTime}</strong></span>
              <span className="text-gold font-sans uppercase tracking-[0.1em] text-[10px]">{selectedService?.duration} required</span>
            </div>
          </div>
        )}

        {/* ================= SCREEN 3: NAME + WHATSAPP NUMBER ================= */}
        {currentStep === 3 && (
          <div className="space-y-10 animate-fade-in-up">
            <div>
              <h4 className="font-serif text-3xl text-pearl mb-2">Client Details</h4>
              <p className="text-xs text-pearl/50">Your confirmation will be delivered via WhatsApp instantly.</p>
            </div>

            <div className="space-y-8">
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-gold block mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className={`w-full bg-transparent border-b py-3 text-sm text-pearl focus:outline-none transition-colors rounded-none ${
                    errors.name ? 'border-rose-500' : 'border-pearl/20 focus:border-gold'
                  }`}
                  required
                />
                {errors.name && <p className="text-rose-400 text-[10px] mt-2 font-sans">{errors.name}</p>}
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-gold block mb-2">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className={`w-full bg-transparent border-b py-3 text-sm text-pearl focus:outline-none transition-colors rounded-none ${
                    errors.phone ? 'border-rose-500' : 'border-pearl/20 focus:border-gold'
                  }`}
                  required
                />
                {errors.phone && <p className="text-rose-400 text-[10px] mt-2 font-sans">{errors.phone}</p>}
              </div>

              {/* Pearl Membership Toggle Banner */}
              <div
                onClick={() => setIsMember(!isMember)}
                className={`p-5 border cursor-pointer transition-all flex items-center justify-between ${
                  isMember
                    ? 'bg-charcoal border-gold'
                    : 'bg-transparent border-pearl/10 hover:border-pearl/30'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center text-gold">
                    <Tag className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-pearl text-xs font-sans tracking-widest uppercase block mb-1">Apply Pearl Pricing (₹{selectedService?.memberPrice})</strong>
                    <span className="text-[10px] text-pearl/50 font-sans block">Unlock savings today with the ₹199/yr Pass</span>
                  </div>
                </div>
                <div className={`w-4 h-4 border flex items-center justify-center text-[8px] transition-colors ${isMember ? 'bg-gold border-gold text-onyx' : 'border-pearl/20'}`}>
                  {isMember && '✓'}
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-gold block mb-2">
                  Special Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Any allergies, previous treatments, or specific requests"
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full bg-transparent border-b border-pearl/20 py-3 text-sm text-pearl focus:outline-none focus:border-gold transition-colors rounded-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* ================= SCREEN 4: CONFIRMATION TICKET ================= */}
        {currentStep === 4 && completedBooking && (
          <div className="space-y-8 py-6 text-center animate-fade-in-up">
            <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center text-gold mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <span className="text-[10px] tracking-[0.3em] text-gold font-bold uppercase block mb-4">
                Reservation Confirmed
              </span>
              <h3 className="font-serif text-4xl text-pearl mb-4">Thank You, {completedBooking.client.name}.</h3>
              <p className="text-xs text-pearl/60 max-w-sm mx-auto">
                Your appointment is securely logged in our system. Please present your reference at the reception.
              </p>
            </div>

            {/* Ticket Card */}
            <div className="max-w-md mx-auto bg-charcoal border border-pearl/10 p-8 text-left text-xs space-y-4 font-sans tracking-wide uppercase">
              <div className="flex justify-between border-b border-pearl/10 pb-3">
                <span className="text-pearl/40">Reference</span>
                <strong className="text-gold tracking-[0.2em]">{completedBooking.reference}</strong>
              </div>
              <div className="flex justify-between border-b border-pearl/10 pb-3">
                <span className="text-pearl/40">Canvas</span>
                <strong className="text-pearl">{completedBooking.serviceName}</strong>
              </div>
              <div className="flex justify-between border-b border-pearl/10 pb-3">
                <span className="text-pearl/40">Time</span>
                <strong className="text-pearl">
                  {completedBooking.preferredDate} | {completedBooking.preferredTime}
                </strong>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-pearl/40">Est. Total</span>
                <strong className="text-pearl font-serif text-lg font-normal normal-case tracking-normal">
                  ₹{completedBooking.isMember ? completedBooking.memberPrice : completedBooking.regularPrice}
                </strong>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={getWhatsAppBookingMessage({
                  reference: completedBooking.reference,
                  serviceName: completedBooking.serviceName,
                  artisanName: 'Classic Pearls',
                  preferredDate: completedBooking.preferredDate,
                  preferredTime: completedBooking.preferredTime,
                  clientName: completedBooking.client.name,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pearl text-onyx hover:bg-gold px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 transition-colors w-full sm:w-auto justify-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() =>
                  downloadCalendarEvent({
                    reference: completedBooking.reference,
                    serviceName: completedBooking.serviceName,
                    artisanName: 'Classic Pearls',
                    preferredDate: completedBooking.preferredDate,
                    preferredTime: completedBooking.preferredTime,
                    clientName: completedBooking.client.name,
                  })
                }
                className="bg-transparent hover:bg-charcoal border border-pearl/20 text-pearl px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 transition-colors w-full sm:w-auto justify-center"
              >
                <CalendarIcon className="w-4 h-4 text-gold" />
                <span>Save to Calendar</span>
              </button>
            </div>
          </div>
        )}

        {/* Wizard Controls */}
        {currentStep < 4 && (
          <div className="pt-8 border-t border-pearl/10 flex items-center justify-between mt-12">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-pearl/50 hover:text-pearl flex items-center gap-2 transition-colors"
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
              className="bg-pearl text-onyx hover:bg-gold px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 transition-colors"
            >
              <span>{currentStep === 3 ? 'Finalize' : 'Continue'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
