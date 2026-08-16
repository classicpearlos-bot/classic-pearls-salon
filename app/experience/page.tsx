import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { businessConfig } from '@/lib/config';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import {
  Sparkles,
  Scissors,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Star,
  Award,
  Search,
  HeartHandshake,
  Calendar,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Salon Experience & 5 Standards of Excellence | Classic Pearl Unisex Salon Bengaluru',
  description:
    'Experience the elevated salon standard at Classic Pearl Unisex Salon in Arekere, Bengaluru. Explore our 5 pillars: personal consultations, 100% certified products, master stylists, hospital-grade hygiene, and transparent pricing.',
};

export default function ExperiencePage() {
  const pillars = [
    {
      num: '01',
      title: 'Personalized Consultation & Hair Diagnosis',
      badge: 'The Diagnostic Foundation',
      icon: Search,
      desc: 'Every visit begins with a one-on-one diagnostic assessment. Our senior stylists and skin specialists analyze your hair porosity, scalp health, facial contour, and skin undertones before recommending any treatment or cut.',
      highlights: [
        'High-definition scalp & strand condition check',
        'Facial symmetry & personal lifestyle alignment',
        'Transparent recommendations tailored to your goals',
        'Complimentary consultation with zero pushy sales',
      ],
    },
    {
      num: '02',
      title: '100% Certified Professional Products Only',
      badge: 'Pure Authentic Formulations',
      icon: ShieldCheck,
      desc: 'We never compromise on product integrity. Every hair color, bond builder, botox formula, and Korean dermatological ampoule comes straight from certified global manufacturers in sealed containers.',
      highlights: [
        "Authentic L'Oréal Professionnel, Schwarzkopf & Olaplex",
        'Ammonia-free organic color & bond-protecting formulas',
        'Genuine Korean Glass Skin & Hydra aesthetic solutions',
        'Zero counterfeit, diluted, or unverified chemicals',
      ],
    },
    {
      num: '03',
      title: 'Expert Trained Stylists & Skin Specialists',
      badge: 'Mastery & Artistry',
      icon: Scissors,
      desc: 'Our artisans hold advanced certifications in international styling, French Balayage, AirTouch coloring, Korean aesthetics, and precision beard sculpting. Regular academy refresher training keeps our craft at peak refinement.',
      highlights: [
        'Master stylists with 8+ years average experience',
        'Specialists in Balayage, Nano-Plastia, & Hair Botox',
        'Certified clinical skin aestheticians',
        'Continuous technique training on latest global trends',
      ],
    },
    {
      num: '04',
      title: 'Spotless Hygiene & Sanitized Equipment',
      badge: 'Clinical Grade Cleanliness',
      icon: Sparkles,
      desc: 'Your safety is sacred. All metal shears, trimmer attachments, and skin tools undergo high-grade UV and chemical sterilization between every single guest. Fresh, single-use sanitized towels and capes are standard.',
      highlights: [
        'Multi-tier chemical & UV sterilization for all tools',
        'Fresh single-use sanitized towels & disposable capes',
        'Disinfected styling stations & wash chairs after each service',
        'Pristine, odor-free, allergen-conscious environment',
      ],
    },
    {
      num: '05',
      title: 'Transparent Pricing & Easy WhatsApp Booking',
      badge: 'Honesty & Convenience',
      icon: Award,
      desc: 'No hidden taxes, surprise add-ons, or awkward checkout moments. You receive an itemized quote before service begins, enjoy substantial Pearl Member savings, and can book anytime via WhatsApp or online in seconds.',
      highlights: [
        '100% upfront quote before your service begins',
        'Exclusive Pearl Member savings of up to 30%',
        'Instant WhatsApp concierge confirmation & reminders',
        'Flexible payments: UPI, Credit/Debit Cards & Cash',
      ],
    },
  ];

  const journeySteps = [
    {
      step: '01',
      title: 'Welcome & Diagnostic',
      desc: 'Enjoy a warm welcome and a detailed hair & skin analysis with our specialists.',
    },
    {
      step: '02',
      title: 'Custom Formulation',
      desc: 'We prepare 100% certified, premium formulations calibrated for your specific texture.',
    },
    {
      step: '03',
      title: 'Masterful Execution',
      desc: 'Relax while our trained artisans perform your transformation with precision and care.',
    },
    {
      step: '04',
      title: 'Finishing & Aftercare',
      desc: 'Walk out with confidence plus personalized home care tips to keep your look vibrant.',
    },
  ];

  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ================================================================= */}
        {/* HERO SECTION */}
        {/* ================================================================= */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#17181C] border border-[#C5A059]/40 px-4 py-1.5 rounded-full text-[11px] tracking-[0.25em] text-[#DFBA73] uppercase font-bold shadow-sm">
            <Star className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
            <span>THE CLASSIC PEARL STANDARD • AREKERE, BENGALURU</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#FBF9F5] leading-[1.15] tracking-tight">
            The Classic Pearl <span className="italic text-[#DFBA73]">Experience</span>
          </h1>

          <p className="text-base sm:text-lg text-[#A39E93] font-light leading-relaxed max-w-2xl mx-auto">
            Discover Bengaluru’s standard in hair artistry, aesthetic skincare, and bespoke hospitality.
            Every visit to <span className="text-[#FBF9F5] font-medium">Classic Pearl Unisex Salon</span> is an unhurried ritual of precision, hygiene, and elevated care.
          </p>

          {/* Trust Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 max-w-3xl mx-auto">
            <div className="bg-[#14161B] border border-white/5 p-4 rounded-xl text-center">
              <div className="text-[#DFBA73] font-serif text-2xl font-bold">4.9 ★</div>
              <p className="text-[11px] text-[#A39E93] mt-0.5 uppercase tracking-wider">380+ Google Reviews</p>
            </div>
            <div className="bg-[#14161B] border border-white/5 p-4 rounded-xl text-center">
              <div className="text-[#DFBA73] font-serif text-2xl font-bold">100%</div>
              <p className="text-[11px] text-[#A39E93] mt-0.5 uppercase tracking-wider">Certified Formulations</p>
            </div>
            <div className="bg-[#14161B] border border-white/5 p-4 rounded-xl text-center">
              <div className="text-[#DFBA73] font-serif text-2xl font-bold">7 Days</div>
              <p className="text-[11px] text-[#A39E93] mt-0.5 uppercase tracking-wider">10 AM – 9 PM Everyday</p>
            </div>
            <div className="bg-[#14161B] border border-white/5 p-4 rounded-xl text-center">
              <div className="text-[#DFBA73] font-serif text-2xl font-bold">Arekere</div>
              <p className="text-[11px] text-[#A39E93] mt-0.5 uppercase tracking-wider">80ft BDA Main Road</p>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* STOREFRONT SHOWCASE SECTION */}
        {/* ================================================================= */}
        <section className="space-y-6">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#C5A059]/30 bg-[#14161B] shadow-2xl">
            {/* Image Container with Luxury Overlay */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
              <Image
                src="/salon-storefront.jpg"
                alt="Classic Pearl Unisex Salon storefront on 80ft BDA Main Road, Arekere, Bengaluru"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-[#0E0F12]/35 to-transparent pointer-events-none" />
              
              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <span className="inline-flex items-center space-x-1.5 bg-[#0E0F12]/85 backdrop-blur-md border border-[#C5A059]/50 text-[#DFBA73] text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>VISIT OUR AREKERE SALON</span>
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="max-w-2xl bg-[#0E0F12]/90 backdrop-blur-md border border-[#C5A059]/30 p-4 sm:p-5 rounded-2xl">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold block mb-1">
                    OUR SIGNATURE LOCATION
                  </span>
                  <p className="font-serif text-lg sm:text-2xl text-[#FBF9F5] font-medium leading-snug">
                    Our Salon on 80ft BDA Main Road, Arekere, Bengaluru
                  </p>
                  <p className="text-xs text-[#A39E93] mt-1 font-light flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                    <span>{businessConfig.address.street}, {businessConfig.address.area}, Bengaluru {businessConfig.address.postalCode}</span>
                  </p>
                </div>

                {/* Quick Storefront Actions */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <a
                    href={businessConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#17181C]/90 hover:bg-[#22242B] border border-[#C5A059]/40 text-[#DFBA73] px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg transition-all"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`tel:${businessConfig.phoneRaw}`}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] text-[#0E0F12] px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Salon</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Location & Schedule Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-[#C5A059]/20 bg-[#17181C]">
              <div className="p-4 sm:p-5 flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A39E93] font-bold block">Location</span>
                  <p className="text-xs text-[#FBF9F5] font-medium leading-relaxed mt-0.5">
                    1st Floor, MNK Arcade, 80ft BDA Main Rd, Beside Camry Hospital, Arekere
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex items-start space-x-3.5">
                <Clock className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A39E93] font-bold block">Operating Hours</span>
                  <p className="text-xs text-[#FBF9F5] font-medium leading-relaxed mt-0.5">
                    10:00 AM – 09:00 PM • Open Everyday (Mon–Sun)
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex items-start space-x-3.5">
                <Phone className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A39E93] font-bold block">Direct Contact</span>
                  <p className="text-xs text-[#FBF9F5] font-medium leading-relaxed mt-0.5">
                    +91 83107 30322 • Walk-ins & Appointments Welcome
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5 PILLARS OF OUR STANDARD */}
        {/* ================================================================= */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
              OUR UNCOMPROMISING BENCHMARKS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">
              5 Pillars of Our <span className="italic text-[#DFBA73]">Standard</span>
            </h2>
            <p className="text-sm text-[#A39E93] font-light leading-relaxed">
              Every haircut, color transformation, texture treatment, and skin ritual at Classic Pearl Unisex Salon is executed to these five fundamental commitments.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {pillars.map((p) => {
              const IconComponent = p.icon;
              return (
                <div
                  key={p.num}
                  className="bg-[#14161B] border border-white/10 hover:border-[#C5A059]/60 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-[#C5A059]/10 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    {/* Number and Header */}
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="flex flex-col items-center">
                        <span className="font-serif text-4xl sm:text-5xl font-bold text-[#C5A059] group-hover:text-[#DFBA73] transition-colors flex-shrink-0">
                          {p.num}
                        </span>
                        <div className="w-8 h-0.5 bg-[#C5A059]/30 mt-2 rounded-full" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold px-2.5 py-0.5 bg-[#17181C] border border-[#C5A059]/30 rounded-md">
                            {p.badge}
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] leading-snug group-hover:text-[#DFBA73] transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#A39E93] leading-relaxed font-light pt-1 max-w-2xl">
                          {p.desc}
                        </p>
                      </div>
                    </div>

                    {/* Icon Accent */}
                    <div className="hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl bg-[#17181C] border border-[#C5A059]/30 group-hover:border-[#C5A059] group-hover:scale-105 transition-all flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-[#DFBA73]" />
                    </div>
                  </div>

                  {/* Feature Checkpoints */}
                  <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {p.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-2.5 text-xs text-[#FBF9F5]/90">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================================================================= */}
        {/* THE GUEST EXPERIENCE JOURNEY */}
        {/* ================================================================= */}
        <section className="bg-gradient-to-b from-[#14161B] to-[#17181C] border border-[#C5A059]/20 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
              YOUR VISIT BLUEPRINT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FBF9F5]">
              What to Expect on <span className="italic text-[#DFBA73]">Your Visit</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A39E93] font-light">
              From the moment you step into our 1st-floor salon in Arekere, your experience is smooth, restorative, and attentive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((j) => (
              <div
                key={j.step}
                className="bg-[#0E0F12] border border-white/5 hover:border-[#C5A059]/40 p-6 rounded-2xl space-y-3 transition-all relative group"
              >
                <span className="text-xs font-mono font-bold text-[#C5A059] block tracking-wider">
                  STEP {j.step}
                </span>
                <h3 className="font-serif text-xl text-[#FBF9F5] group-hover:text-[#DFBA73] transition-colors">
                  {j.title}
                </h3>
                <p className="text-xs text-[#A39E93] leading-relaxed font-light">
                  {j.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================= */}
        {/* BOTTOM CTA */}
        {/* ================================================================= */}
        <section className="bg-gradient-to-r from-[#17181C] via-[#1E2028] to-[#17181C] border-2 border-[#C5A059]/40 rounded-3xl p-10 sm:p-14 text-center space-y-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
              RESERVE YOUR BESPOKE SESSION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">
              Ready for the Classic Pearl <span className="italic text-[#DFBA73]">Standard</span>?
            </h2>
            <p className="text-xs sm:text-sm text-[#A39E93] font-light leading-relaxed">
              Book your customized appointment online or connect directly with our salon concierge on WhatsApp for prompt scheduling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#DFBA73] hover:to-[#C5A059] text-[#0E0F12] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-xl shadow-[#C5A059]/20 transition-all"
            >
              <Calendar className="w-4 h-4 text-[#0E0F12]" />
              <span>Book Your Experience</span>
              <ArrowRight className="w-4 h-4 text-[#0E0F12]" />
            </Link>

            <a
              href={getWhatsAppConciergeUrl('Hello Classic Pearl Unisex Salon, I would like to book a salon experience.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#0E0F12] hover:bg-[#22242B] border border-[#C5A059]/50 text-[#DFBA73] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>

          {/* Footer Info Strip */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-[11px] text-[#A39E93]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              MNK Arcade, 80ft BDA Main Rd, Arekere, Bengaluru
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              10:00 AM – 09:00 PM Everyday
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              +91 83107 30322
            </span>
          </div>
        </section>

      </div>
    </div>
  );
}
