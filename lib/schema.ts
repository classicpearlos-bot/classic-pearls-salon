import { businessConfig, siteConfig } from './config';

/**
 * Generate Google LocalBusiness / BeautySalon JSON-LD Structured Data
 */
export function getSalonSchemaJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": businessConfig.name,
    "image": [
      siteConfig.ogImage,
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
    ],
    "@id": siteConfig.url,
    "url": siteConfig.url,
    "telephone": businessConfig.phone,
    "email": businessConfig.email,
    "priceRange": "$$$$",
    "currenciesAccepted": businessConfig.currency.code,
    "paymentAccepted": "Cash, Credit Card, UPI, Apple Pay",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessConfig.address.street,
      "addressLocality": businessConfig.address.city,
      "addressRegion": businessConfig.address.state,
      "postalCode": businessConfig.address.postalCode,
      "addressCountry": businessConfig.address.country,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": Number(businessConfig.geo.latitude),
      "longitude": Number(businessConfig.geo.longitude),
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://instagram.com/classicpearlssalon",
      "https://facebook.com/classicpearlssalon"
    ]
  };
}
