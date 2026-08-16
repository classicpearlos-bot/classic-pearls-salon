export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'services' | 'policies' | 'bridal';
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'booking',
    question: 'How do I schedule an appointment with Classic Pearls?',
    answer: 'You can submit an appointment request directly through our online Private Concierge booking engine on this website, or connect directly with our atelier team via our official WhatsApp Concierge. Once received, our concierge team will reach out to confirm your scheduled time.'
  },
  {
    id: 'faq-2',
    category: 'booking',
    question: 'Can I request a specific Master Stylist or Aesthetician?',
    answer: 'Yes. During the online booking concierge flow or phone consultation, you may choose your preferred Master Artisan (Creative Director, Master Colorist, or Chief Aesthetician) or select the first available senior master for optimal scheduling flexibility.'
  },
  {
    id: 'faq-3',
    category: 'policies',
    question: 'What is your appointment rescheduling and cancellation policy?',
    answer: 'We kindly request a minimum of 24 hours advance notice for standard service cancellations or reschedulings. Private bridal suite bookings require 72 hours notice to allow our master styling teams to be reallocated.'
  },
  {
    id: 'faq-4',
    category: 'services',
    question: 'Are your hair coloring and smoothing treatments safe and non-damaging?',
    answer: 'Every chemical and color ritual at Classic Pearls incorporates organic bond-multiplying elixirs and amino acid peptide shields. Our smoothing treatments are 100% formaldehyde-free and designed to preserve the structural integrity of the hair shaft.'
  },
  {
    id: 'faq-5',
    category: 'bridal',
    question: 'Do you offer bridal trial sessions and on-location styling?',
    answer: 'Yes. We recommend scheduling an in-person bridal preview and diagnostic session 4 to 8 weeks prior to your event. Our senior bridal team is available for both private atelier appointments and worldwide on-location styling.'
  },
  {
    id: 'faq-6',
    category: 'policies',
    question: 'What happens after I submit a booking request online?',
    answer: 'Your submission generates a unique booking reference code (e.g., CP-2026-XXXX). Our concierge verifies artisan availability and contacts you via your preferred channel (Phone, WhatsApp, or Email) to finalize confirmation and answer any custom requests.'
  }
];
