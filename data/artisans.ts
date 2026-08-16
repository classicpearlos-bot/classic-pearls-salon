import { Artisan } from '@/lib/types';

export const ARTISANS: Artisan[] = [
  {
    id: 'artisan-claire',
    name: 'Claire Dubois',
    title: 'Creative Director & Master Stylist',
    speciality: 'Precision Dry Architecture & French Silhouettes',
    bio: 'With over 16 years of international atelier experience, Claire specializes in effortless bespoke cuts that honor natural hair movement and face structure.',
    experienceYears: 16,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    signatureServices: [
      'The Signature Cut & Architectural Blowout',
      'Pearl Renewal Silk Keratin Smoothing'
    ],
    genderFocus: 'women',
    featured: true
  },
  {
    id: 'artisan-julian',
    name: 'Julian Vance',
    title: 'Master Colorist & Balayage Pioneer',
    speciality: 'Luminous Balayage, Pearl Blonde & Color Corrections',
    bio: 'Julian is renowned for his delicate French hand-painted lighting techniques and zero-damage bond-building color transformations.',
    experienceYears: 14,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    signatureServices: [
      'Champagne Pearl Balayage & French Glaze',
      'Root Melt Shadow Blend'
    ],
    genderFocus: 'all',
    featured: true
  },
  {
    id: 'artisan-sofia',
    name: 'Sofia Chen',
    title: 'Chief Aesthetician & Dermatological Specialist',
    speciality: 'Cellular Pearl Rejuvenation & Lymphatic Contouring',
    bio: 'Specializing in advanced non-invasive clinical aesthetics, Sofia combines hyperbaric oxygen domes with micro-current facial lifting rituals.',
    experienceYears: 12,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    signatureServices: [
      'The Radiance Atelier Pearl Glow Facial',
      'Gentleman’s Charcoal Detox Facial'
    ],
    genderFocus: 'all',
    featured: true
  },
  {
    id: 'artisan-elena',
    name: 'Elena Rostova',
    title: 'Head of Bridal Couture & Red Carpet Artistry',
    speciality: 'Haute Bridal Sculpting & 18-Hour Airbrush Artistry',
    bio: 'Elena curates timeless, romantic looks for high-profile weddings and gala events, providing complete peace of mind in our private bridal suites.',
    experienceYears: 10,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    signatureServices: [
      'The Haute Bridal Penthouse Atelier'
    ],
    genderFocus: 'women',
    featured: true
  }
];
