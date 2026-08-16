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
    <div className="w-full max-w-3xl mx-auto bg-[#14161B] border border-[#C5A059]/40 rounded-2xl shadow-2xl overflow-hidden text-[#FBF9F5]">
      {/* Top Banner */}
      <div className="bg-[#17181C] border-b border-white/10 p-6 text-center relative">
        <div className="inline-flex items-center space-x-1.5 bg-[#C5A059]/15 border border-[#C5A059]/40 px-3 py-1 rounded-full text-[10px] tracking-wider text-[#DFBA73] uppercase font-bold mb-2">
          <Sparkles className="w-3 h-3 text-[#C5A059]" />
          <span>FAST 30-SECOND APPOINTMENT BOOKING</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5]">
          Book Your Salon Visit
        </h2>
        <p className="text-xs text-[#A39E93] mt-1">
          {currentStep === 4
            ? 'Your booking request is confirmed with instant WhatsApp summary.'
            : 'No prepayment required • Pay at salon after your service.'}
        </p>

        {/* 3 Step Indicator */}
        {currentStep < 4 && (
          <div className="flex items-center justify-center space-x-3 sm:space-x-8 mt-5">
            {[
              { num: 1, label: '1. Select Service' },
              { num: 2, label: '2. Date & Time' },
              { num: 3, label: '3. Your Details' },
            ].map((s) => (
              <div key={s.num} className="flex items-center space-x-1.5">
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
                  className={`text-[11px] uppercase tracking-wider font-semibold ${
                    currentStep === s.num ? 'text-[#DFBA73]' : 'text-[#6E6A62]'
                  }`}
                >
                  {s.label}
                </span>
                {s.num < 3 && <span className="text-white/20 text-xs pl-2">›</span>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Step Content */}
      <div className="p-6 sm:p-8 min-h-[380px] flex flex-col justify-between">
        
        {/* ================= SCREEN 1: CHOOSE SERVICE ================= */}
        {currentStep === 1 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
              {/* Gender Switcher */}
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
                  Women
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
                  Men
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

            {/* Service Selection List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[320px] overflow-y-auto pr-1">
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
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex justify-between items-start ${
                      isSelected
                        ? 'bg-[#C5A059]/20 border-[#C5A059] shadow-lg shadow-[#C5A059]/10'
                        : 'bg-[#17181C] border-white/5 hover:border-[#C5A059]/40'
                    }`}
                  >
                    <div className="space-y-1 pr-2">
                      <span className="text-[9px] uppercase tracking-wider text-[#C5A059] font-bold block">
                        {service.categoryName}
                      </span>
                      <h4 className="font-serif text-base text-[#FBF9F5] font-semibold leading-snug">{service.name}</h4>
                      <div className="flex items-center gap-2 text-[11px] text-[#A39E93]">
                        <Clock className="w-3 h-3 text-[#C5A059]" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    
                    <div className="text-right flex flex-col items-end justify-between self-stretch">
                      <div>
                        <span className="text-[10px] text-[#A39E93] line-through block">₹{service.regularPrice}</span>
                        <span className="font-serif text-sm font-bold text-[#DFBA73]">₹{service.memberPrice}</span>
                      </div>
                      <span
                        className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] mt-2 ${
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
              <div className="p-3.5 bg-[#0E0F12] border border-[#C5A059]/30 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#A39E93] block text-[10px] uppercase tracking-wider">Selected Service</span>
                  <strong className="text-[#FBF9F5] text-sm">{selectedService.name}</strong>
                </div>
                <div className="text-right">
                  <span className="text-[#DFBA73] font-serif font-bold text-base block">
                    ₹{isMember ? selectedService.memberPrice : selectedService.regularPrice}
                  </span>
                  <span className="text-emerald-400 text-[10px] font-semibold">
                    {isMember ? `Save ₹${selectedService.regularPrice - selectedService.memberPrice}` : ''}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= SCREEN 2: CHOOSE DATE & TIME ================= */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h4 className="font-serif text-xl text-[#FBF9F5]">Choose your preferred schedule</h4>
              <p className="text-xs text-[#A39E93]">Open 10:00 AM – 09:00 PM Everyday in Arekere, Bengaluru.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#A39E93] font-bold block">
                  Select Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-[#0E0F12] border border-white/15 rounded-xl p-3 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#C5A059]"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#A39E93] font-bold block">
                  Select Time Slot
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-[200px] overflow-y-auto pr-1">
                  {bookingConfig.timeSlots.map((slot) => {
                    const isSelected = preferredTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setPreferredTime(slot)}
                        className={`p-2.5 rounded-lg text-xs font-semibold tracking-wider transition-all ${
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

            <div className="bg-[#17181C] p-3.5 rounded-xl border border-white/5 text-xs text-[#A39E93] flex items-center justify-between">
              <span>Appointment on: <strong className="text-[#FBF9F5]">{preferredDate}</strong> at <strong className="text-[#DFBA73]">{preferredTime}</strong></span>
              <span className="text-[#C5A059] font-medium">{selectedService?.duration}</span>
            </div>
          </div>
        )}

        {/* ================= SCREEN 3: NAME + WHATSAPP NUMBER ================= */}
        {currentStep === 3 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <h4 className="font-serif text-xl text-[#FBF9F5]">Your Contact Details</h4>
              <p className="text-xs text-[#A39E93]">We will send you an instant booking confirmation via WhatsApp.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#A39E93] font-semibold block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Priya Sharma / Rahul Kumar"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className={`w-full bg-[#0E0F12] border rounded-xl p-3 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059] ${
                    errors.name ? 'border-rose-500' : 'border-white/15'
                  }`}
                  required
                />
                {errors.name && <p className="text-rose-400 text-[10px] mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#A39E93] font-semibold block mb-1">
                  Mobile Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 98765 43210"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className={`w-full bg-[#0E0F12] border rounded-xl p-3 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059] ${
                    errors.phone ? 'border-rose-500' : 'border-white/15'
                  }`}
                  required
                />
                {errors.phone && <p className="text-rose-400 text-[10px] mt-1">{errors.phone}</p>}
              </div>

              {/* Pearl Membership Toggle Banner */}
              <div
                onClick={() => setIsMember(!isMember)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  isMember
                    ? 'bg-gradient-to-r from-[#C5A059]/20 to-[#17181C] border-[#C5A059]'
                    : 'bg-[#17181C] border-white/10'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#DFBA73]">
                    <Tag className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#FBF9F5] text-xs block">Apply Pearl Member Pricing (₹{selectedService?.memberPrice})</strong>
                    <span className="text-[10px] text-[#A39E93]">Save ₹{(selectedService?.regularPrice || 0) - (selectedService?.memberPrice || 0)} today with ₹199/yr Pearl Pass</span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={isMember}
                  onChange={() => {}}
                  className="rounded border-white/20 text-[#C5A059] focus:ring-[#C5A059] w-4 h-4"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#A39E93] font-semibold block mb-1">
                  Special Notes or Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sensitive scalp, hair length, etc."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full bg-[#0E0F12] border border-white/15 rounded-xl p-2.5 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>
          </div>
        )}

        {/* ================= SCREEN 4: CONFIRMATION TICKET ================= */}
        {currentStep === 4 && completedBooking && (
          <div className="space-y-6 py-2 text-center animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#DFBA73] mx-auto shadow-lg shadow-[#C5A059]/20">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#C5A059] font-bold uppercase block">
                BOOKING CONFIRMED
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] mt-1">Thank You, {completedBooking.client.name}!</h3>
              <p className="text-xs text-[#A39E93] max-w-md mx-auto mt-1">
                Your appointment request is registered. Show this reference at the reception.
              </p>
            </div>

            {/* Ticket Card */}
            <div className="max-w-md mx-auto bg-[#17181C] border border-dashed border-[#C5A059]/60 rounded-2xl p-5 text-left text-xs space-y-2.5 shadow-xl">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#A39E93]">Reference Code</span>
                <strong className="text-[#DFBA73] font-mono tracking-wider">{completedBooking.reference}</strong>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#A39E93]">Service</span>
                <strong className="text-[#FBF9F5]">{completedBooking.serviceName}</strong>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#A39E93]">Schedule</span>
                <strong className="text-[#DFBA73]">
                  {completedBooking.preferredDate} at {completedBooking.preferredTime}
                </strong>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#A39E93]">Estimated Price</span>
                <strong className="text-[#FBF9F5] font-serif text-sm">
                  ₹{completedBooking.isMember ? completedBooking.memberPrice : completedBooking.regularPrice} (Pay at Salon)
                </strong>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={getWhatsAppBookingMessage({
                  reference: completedBooking.reference,
                  serviceName: completedBooking.serviceName,
                  artisanName: 'Classic Pearl Team',
                  preferredDate: completedBooking.preferredDate,
                  preferredTime: completedBooking.preferredTime,
                  clientName: completedBooking.client.name,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#C5A059]/20"
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
                    artisanName: 'Classic Pearl Team',
                    preferredDate: completedBooking.preferredDate,
                    preferredTime: completedBooking.preferredTime,
                    clientName: completedBooking.client.name,
                  })
                }
                className="bg-[#17181C] hover:bg-[#22242B] border border-[#C5A059]/40 text-[#DFBA73] px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <CalendarIcon className="w-3.5 h-3.5" />
                <span>Add to Calendar</span>
              </button>
            </div>

            <div className="pt-2">
              <Link href="/" className="text-xs text-[#A39E93] hover:text-[#DFBA73] underline">
                Return to Home
              </Link>
            </div>
          </div>
        )}

        {/* Wizard Controls */}
        {currentStep < 4 && (
          <div className="pt-5 border-t border-white/10 flex items-center justify-between mt-6">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#A39E93] hover:text-white border border-white/10 flex items-center gap-1"
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
              className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#DFBA73] hover:to-[#C5A059] text-[#0E0F12] px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-lg shadow-[#C5A059]/15"
            >
              <span>{currentStep === 3 ? 'Confirm Booking' : 'Continue'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
