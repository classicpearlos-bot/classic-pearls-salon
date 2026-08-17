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
  ArrowRight,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Search,
  Award,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Salon Experience & 5 Standards of Excellence | Classic Pearls Unisex Salon Bengaluru',
  description:
    'Experience the elevated salon standard at Classic Pearls Unisex Salon in Arekere, Bengaluru. Explore our 5 pillars: personal consultations, certified products, master stylists, hospital-grade hygiene, and transparent pricing.',
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
    <div className="bg-onyx text-pearl min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
        
        {/* ================================================================= */}
        {/* HERO SECTION */}
        {/* ================================================================= */}
        <section className="text-center max-w-4xl mx-auto space-y-8">
          <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-bold block">
            The Classic Pearls Standard
          </span>

          <h1 className="font-serif text-5xl sm:text-7xl text-pearl leading-[1.1]">
            The Atelier <span className="italic text-gold-soft">Experience</span>
          </h1>

          <p className="text-sm text-pearl/60 font-light leading-relaxed max-w-2xl mx-auto">
            Discover Bengaluru’s standard in hair artistry, aesthetic skincare, and bespoke hospitality.
            Every visit to <span className="text-pearl font-normal">Classic Pearls Unisex Salon</span> is an unhurried ritual of precision, hygiene, and elevated care.
          </p>
        </section>

        {/* ================================================================= */}
        {/* STOREFRONT SHOWCASE SECTION */}
        {/* ================================================================= */}
        <section className="space-y-6">
          <div className="relative overflow-hidden border border-pearl/10 bg-charcoal">
            {/* Image Container with Luxury Overlay */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden group">
              <Image
                src="/salon-storefront.jpg"
                alt="Classic Pearls Unisex Salon storefront on 80ft BDA Main Road, Arekere, Bengaluru"
                fill
                priority
                className="object-cover object-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
              <div className="absolute inset-0 bg-onyx/20 mix-blend-multiply pointer-events-none" />
              
              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl bg-onyx/90 backdrop-blur-md border border-pearl/10 p-6 sm:p-8">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-gold block mb-2 font-bold">
                    Our Signature Location
                  </span>
                  <p className="font-serif text-2xl sm:text-3xl text-pearl leading-snug">
                    Arekere, Bengaluru
                  </p>
                  <p className="text-xs text-pearl/50 mt-2 font-light tracking-wide font-sans uppercase">
                    {businessConfig.address.street}, {businessConfig.address.area}, Bengaluru {businessConfig.address.postalCode}
                  </p>
                </div>

                {/* Quick Storefront Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={businessConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent hover:bg-charcoal border border-pearl/20 text-pearl px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 transition-colors"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gold" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Location & Schedule Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-pearl/10 border-t border-pearl/10 bg-charcoal">
              <div className="p-8 space-y-2">
                <span className="text-[9px] uppercase tracking-[0.2em] text-gold block">Location</span>
                <p className="text-xs text-pearl leading-relaxed">
                  1st Floor, MNK Arcade, 80ft BDA Main Rd, Beside Camry Hospital, Arekere
                </p>
              </div>

              <div className="p-8 space-y-2">
                <span className="text-[9px] uppercase tracking-[0.2em] text-gold block">Operating Hours</span>
                <p className="text-xs text-pearl leading-relaxed">
                  10:00 AM – 09:00 PM<br/>Monday – Sunday
                </p>
              </div>

              <div className="p-8 space-y-2">
                <span className="text-[9px] uppercase tracking-[0.2em] text-gold block">Contact</span>
                <p className="text-xs text-pearl leading-relaxed">
                  {businessConfig.phone}<br/>Walk-ins & Appointments
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5 PILLARS OF OUR STANDARD */}
        {/* ================================================================= */}
        <section className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-[10px] tracking-[0.3em] text-gold uppercase font-bold block">
              Uncompromising Benchmarks
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-pearl">
              Pillars of <span className="italic text-gold-soft">Excellence</span>
            </h2>
            <p className="text-sm text-pearl/50 font-light leading-relaxed">
              Every haircut, color transformation, texture treatment, and skin ritual at Classic Pearls Unisex Salon is executed to these five fundamental commitments.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {pillars.map((p) => {
              const IconComponent = p.icon;
              return (
                <div
                  key={p.num}
                  className="bg-charcoal border border-pearl/10 p-8 sm:p-12 transition-all duration-300 hover:border-gold group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                    {/* Number and Header */}
                    <div className="flex items-start gap-6 sm:gap-8">
                      <div className="flex flex-col items-center">
                        <span className="font-serif text-5xl sm:text-6xl text-gold group-hover:text-gold-soft transition-colors flex-shrink-0">
                          {p.num}
                        </span>
                      </div>

                      <div className="space-y-4">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-gold block">
                          {p.badge}
                        </span>
                        <h3 className="font-serif text-3xl sm:text-4xl text-pearl leading-snug">
                          {p.title}
                        </h3>
                        <p className="text-xs text-pearl/60 leading-relaxed font-light max-w-2xl">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Feature Checkpoints */}
                  <div className="mt-8 pt-8 border-t border-pearl/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {p.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-4 text-xs text-pearl/80">
                        <span className="w-1.5 h-1.5 bg-gold mt-1.5 rounded-full flex-shrink-0"></span>
                        <span className="leading-relaxed">{h}</span>
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
        <section className="bg-charcoal border border-pearl/10 p-12 sm:p-20">
          <div className="text-center max-w-2xl mx-auto space-y-6 mb-16">
            <span className="text-[10px] tracking-[0.3em] text-gold uppercase font-bold block">
              The Journey
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-pearl">
              Your <span className="italic text-gold-soft">Blueprint</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((j) => (
              <div
                key={j.step}
                className="border-l border-pearl/20 pl-6 space-y-4"
              >
                <span className="text-[10px] font-sans font-bold text-gold block tracking-[0.2em] uppercase">
                  Phase {j.step}
                </span>
                <h3 className="font-serif text-2xl text-pearl">
                  {j.title}
                </h3>
                <p className="text-xs text-pearl/50 leading-relaxed font-light">
                  {j.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================= */}
        {/* BOTTOM CTA */}
        {/* ================================================================= */}
        <section className="text-center space-y-12 max-w-4xl mx-auto pt-16 border-t border-pearl/10">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl sm:text-5xl text-pearl">
              Ready for the Classic Pearls <span className="italic text-gold-soft">Standard</span>?
            </h2>
            <p className="text-sm text-pearl/50 font-light leading-relaxed">
              Book your customized appointment online or connect directly with our salon concierge for prompt scheduling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/book"
              className="bg-pearl text-onyx hover:bg-gold px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-colors w-full sm:w-auto"
            >
              <span>Reserve Your Experience</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={getWhatsAppConciergeUrl('Hello Classic Pearl Unisex Salon, I would like to book a salon experience.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-charcoal border border-pearl/20 text-pearl px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-colors w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 text-gold" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
