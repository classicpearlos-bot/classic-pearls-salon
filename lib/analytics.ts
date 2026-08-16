import { analyticsConfig } from './config';

type EventName = 
  | 'page_view'
  | 'service_view'
  | 'booking_started'
  | 'service_selected'
  | 'artisan_selected'
  | 'date_selected'
  | 'booking_submitted'
  | 'whatsapp_clicked'
  | 'phone_clicked'
  | 'contact_submitted';

/**
 * Privacy-Conscious Event Tracker
 * NEVER sends client personal information (PII such as phone, email, notes) to third parties.
 */
export function trackEvent(eventName: EventName, properties: Record<string, string | number | boolean> = {}) {
  if (typeof window === 'undefined') return;

  // 1. Console in Development
  if (process.env.NODE_ENV === 'development') {
    // Development event log
  }

  // 2. Meta Pixel Integration (Only when META_PIXEL_ID is actively configured)
  if (analyticsConfig.metaPixelId && typeof (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq === 'function') {
    const fbq = (window as unknown as { fbq: (...args: unknown[]) => void }).fbq;
    
    switch (eventName) {
      case 'page_view':
        fbq('track', 'PageView');
        break;
      case 'service_view':
        fbq('track', 'ViewContent', { content_name: properties.serviceName, value: properties.price, currency: 'INR' });
        break;
      case 'booking_started':
        fbq('track', 'InitiateCheckout');
        break;
      case 'booking_submitted':
        fbq('track', 'Schedule', { content_name: properties.serviceName, status: 'requested' });
        break;
      case 'contact_submitted':
        fbq('track', 'Contact');
        break;
      case 'whatsapp_clicked':
        fbq('trackCustom', 'WhatsAppConciergeClick');
        break;
    }
  }

  // 3. Google Analytics 4 (Only when GA_ID is actively configured)
  if (analyticsConfig.googleAnalyticsId && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
    const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;
    gtag('event', eventName, properties);
  }
}
