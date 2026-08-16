import { businessConfig } from './config';

/**
 * Generate a prefilled, clean WhatsApp Concierge URL
 */
export function getWhatsAppConciergeUrl(message?: string): string {
  const defaultText = `Hello ${businessConfig.name}, I would like to enquire about reserving a bespoke beauty experience.`;
  const encoded = encodeURIComponent(message || defaultText);
  return `https://wa.me/${businessConfig.whatsappNumber}?text=${encoded}`;
}

export function getWhatsAppBookingMessage(booking: {
  reference: string;
  serviceName: string;
  artisanName: string;
  preferredDate: string;
  preferredTime: string;
  clientName: string;
}): string {
  const text = `Hello ${businessConfig.name} Concierge, I have submitted an appointment request:
• Reference: ${booking.reference}
• Client: ${booking.clientName}
• Service: ${booking.serviceName}
• Artisan: ${booking.artisanName}
• Preferred Date: ${booking.preferredDate} at ${booking.preferredTime}

Please let me know once availability is confirmed. Thank you.`;

  return `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
