export type GenderCategory = 'women' | 'men' | 'all';

export type ServiceCategory = 
  | 'haute-coiffure' 
  | 'color-balayage' 
  | 'skincare-facials' 
  | 'bridal-red-carpet' 
  | 'nail-artistry' 
  | 'mens-grooming'
  | 'wellness-rituals';

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
  priceTag?: string;
  tier?: string;
  whatsIncluded: string[];
  addons?: { name: string; duration: string }[];
  preparationTips?: string[];
  image: string;
  featured?: boolean;
}

export interface Artisan {
  id: string;
  name: string;
  title: string;
  speciality: string;
  bio: string;
  experienceYears?: number;
  image: string;
  signatureServices: string[];
  genderFocus?: GenderCategory;
  featured?: boolean;
}

export interface LookbookItem {
  id: string;
  title: string;
  category: 'hair' | 'color' | 'bridal' | 'skin' | 'nails' | 'mens';
  categoryLabel: string;
  artisanName: string;
  serviceName: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientLocation?: string;
  service: string;
  rating: number;
  isPlaceholder?: boolean;
}

export interface BookingRequest {
  reference: string;
  serviceId: string;
  serviceName: string;
  artisanId: string;
  artisanName: string;
  preferredDate: string;
  preferredTime: string;
  client: {
    name: string;
    phone: string;
    email: string;
    whatsapp?: string;
  };
  occasion?: string;
  specialNotes?: string;
  consent: boolean;
  createdAt: string;
  status: 'pending' | 'contacted' | 'confirmed' | 'rescheduled' | 'cancelled';
}
