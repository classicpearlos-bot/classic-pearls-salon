/**
 * Centralized Application & Business Configuration
 * Clean, verified business configuration for Classic Pearls, Bengaluru.
 */

export const siteConfig = {
  name: "Classic Pearls",
  tagline: "Luxury Salon & Spa",
  slogan: "THE ART OF BECOMING.",
  description: "Premier luxury salon in Arekere, Bengaluru offering bespoke hair styling, Korean glass facials, Hydra treatments, Botox, Nano Plastia, bridal makeovers, and grooming.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://classicpearls.vercel.app",
  ogImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&h=630&q=80",
};

export const businessConfig = {
  name: "Classic Pearls Luxury Salon",
  legalName: "Classic Pearls Luxury Salon",
  phone: "+91 83107 30322",
  phoneRaw: "8310730322",
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
  
  openingHours: [
    { days: "Everyday (Monday – Sunday)", hours: "10:00 AM – 09:00 PM", opens: "10:00", closes: "21:00" },
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
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:30 PM",
    "03:00 PM",
    "04:30 PM",
    "06:00 PM",
    "07:30 PM",
    "08:30 PM",
  ],
};
