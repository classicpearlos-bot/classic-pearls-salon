import { businessConfig } from './config';

/**
 * Generate an .ics calendar file for appointment requests
 * Strictly labeled as 'Appointment Request' until verified by salon staff
 */
export function downloadCalendarEvent(booking: {
  reference: string;
  serviceName: string;
  artisanName: string;
  preferredDate: string; // YYYY-MM-DD
  preferredTime: string; // e.g. "11:00 AM"
  clientName: string;
}) {
  const [hoursStr, minutesPart] = booking.preferredTime.split(':');
  const [minutesStr, meridian] = minutesPart.split(' ');
  let hours = parseInt(hoursStr, 10);
  if (meridian === 'PM' && hours < 12) hours += 12;
  if (meridian === 'AM' && hours === 12) hours = 0;

  const dateParts = booking.preferredDate.split('-');
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];

  const pad = (n: number) => n.toString().padStart(2, '0');
  const startStr = `${year}${month}${day}T${pad(hours)}${pad(parseInt(minutesStr, 10))}00`;
  const endStr = `${year}${month}${day}T${pad(hours + 2)}${pad(parseInt(minutesStr, 10))}00`;

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Classic Pearls Luxury Salon//NONSGML v1.0//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
UID:${booking.reference}@classicpearls.vercel.app
DTSTAMP:${year}${month}${day}T000000Z
DTSTART:${startStr}
DTEND:${endStr}
SUMMARY:Classic Pearls — Appointment Request (${booking.serviceName})
DESCRIPTION:Your appointment request with ${businessConfig.name} is received.\\nService: ${booking.serviceName}\\nArtisan: ${booking.artisanName}\\nReference Code: ${booking.reference}\\nNote: Our concierge team will contact you to confirm availability.
LOCATION:${businessConfig.address.street}, ${businessConfig.address.city}, ${businessConfig.address.state}
STATUS:TENTATIVE
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `ClassicPearls_Request_${booking.reference}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
