export type GenderCategory = 'women' | 'men' | 'all';

export type ServiceCategory = 
  | 'haircut-styling' 
  | 'color-balayage' 
  | 'advance-hair-treatments'
  | 'hair-care-deep-conditioning' 
  | 'facials-cleanup-detan' 
  | 'manicure-pedicure' 
  | 'waxing-threading' 
  | 'mens-grooming'
  | 'combos-packages'
  | 'bridal-makeover';

export interface ServiceItem {
  id: string;
  name: string;
  gender: GenderCategory;
  category: ServiceCategory;
  categoryName: string;
  tagline: string;
  description: string;
  duration: string;
  durationMinutes: number;
  regularPrice: number;
  memberPrice: number;
  benefits: string[];
  whatsIncluded?: string[];
  image: string;
  seoSlug?: string;
  featured?: boolean;
  isPopular?: boolean;
}

export interface LookbookItem {
  id: string;
  title: string;
  category: 'color' | 'treatments' | 'skin' | 'bridal' | 'mens';
  categoryLabel: string;
  serviceName: string;
  serviceId: string;
  regularPrice: number;
  memberPrice: number;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  caption: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientArea?: string;
  service: string;
  rating: number;
  verifiedReview: boolean;
  date: string;
  quote: string;
  highlight: string;
}

export interface BookingRequest {
  reference: string;
  serviceId: string;
  serviceName: string;
  regularPrice?: number;
  memberPrice?: number;
  preferredDate: string;
  preferredTime: string;
  client: {
    name: string;
    phone: string;
    whatsapp?: string;
  };
  isMember?: boolean;
  occasion?: string;
  specialNotes?: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'rescheduled' | 'cancelled';
}

export interface SEOLandingPageData {
  slug: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subheadline: string;
  heroImage: string;
  serviceId: string;
  regularPrice: number;
  memberPrice: number;
  duration: string;
  whyChoosePoints: { title: string; desc: string }[];
  processSteps: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedLookbookIds: string[];
}
