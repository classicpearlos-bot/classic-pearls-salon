/**
 * Centralized Application & Business Configuration
 * Updated with Verified Real-World Business Information for Classic Pearls, Bengaluru.
 */

export const siteConfig = {
  name: "Classic Pearls",
  tagline: "Haute Coiffure & Luxury Beauty Lounge",
  slogan: "THE ART OF BECOMING.",
  description: "Premier luxury salon in Arekere, Bengaluru offering bespoke hair couture, Korean glass facials, Hydra rituals, Botox, Nano Plastia, bridal atelier, and executive grooming.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://classicpearls.vercel.app",
  ogImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&h=630&q=80",
};

export const businessConfig = {
  name: "Classic Pearls Luxury Salon",
  legalName: "Classic Pearls Luxury Salon",
  phone: "+91 83107 30322",
  phoneRaw: "8310730322",
  email: "concierge@classicpearls.com",
  whatsappNumber: "918310730322",
  
  address: {
    street: "1st floor, Tony Thomas, MNK Arcade, 36, 80ft, BDA Main Rd, beside Camry hospital, Arekere",
    landmark: "Beside Camry Hospital",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560076",
    country: "IN",
    countryName: "India",
  },
  
  geo: {
    latitude: "12.8876",
    longitude: "77.5972",
  },
  
  currency: {
    code: "INR",
    symbol: "₹",
  },
  
  openingHours: [
    { days: "Monday – Saturday", hours: "09:30 AM – 09:00 PM", opens: "09:30", closes: "21:00" },
    { days: "Sunday", hours: "09:30 AM – 08:30 PM", opens: "09:30", closes: "20:30" },
  ],
  
  mapsUrl: "https://maps.google.com/?q=MNK+Arcade+Arekere+Bengaluru+Karnataka+560076",
};

export const verificationConfig = {
  metaDomainVerification: process.env.NEXT_PUBLIC_META_DOMAIN_VERIFICATION || "",
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
};

export const analyticsConfig = {
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
};

export const socialConfig = {
  instagram: "https://instagram.com/classicpearlssalon",
  facebook: "https://facebook.com/classicpearlssalon",
  pinterest: "https://pinterest.com/classicpearlssalon",
};

export const bookingConfig = {
  referencePrefix: "CP-2026-",
  defaultDepositPercent: 0,
  cancellationNoticeHours: 24,
  bridalNoticeHours: 72,
  timeSlots: [
    "09:30 AM",
    "10:30 AM",
    "11:30 AM",
    "01:00 PM",
    "02:30 PM",
    "04:00 PM",
    "05:30 PM",
    "07:00 PM",
    "08:00 PM",
  ],
};
