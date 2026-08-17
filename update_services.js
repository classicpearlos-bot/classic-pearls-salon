const fs = require('fs');
const path = require('path');

const rawFile = path.join(__dirname, 'raw_services.txt');
const outputFile = path.join(__dirname, 'data', 'services.ts');

const rawData = fs.readFileSync(rawFile, 'utf8');

const lines = rawData.split('\n').filter(l => l.trim().length > 0);

// We need to map the raw categories to our defined categories
const CATEGORY_MAP = {
  'Men - Haircut': { id: 'mens-grooming', label: "Men's Hair & Grooming", icon: 'UserCheck' },
  'Men - Beard': { id: 'mens-grooming', label: "Men's Hair & Grooming", icon: 'UserCheck' },
  'Men - Hair Wash': { id: 'mens-grooming', label: "Men's Hair & Grooming", icon: 'UserCheck' },
  'Men - Head Massage': { id: 'mens-grooming', label: "Men's Hair & Grooming", icon: 'UserCheck' },
  'Men - Hair Spa': { id: 'hair-care-deep-conditioning', label: 'Hair Spa & Treatments', icon: 'Sparkles' },
  'Men - Hair Treatment': { id: 'hair-care-deep-conditioning', label: 'Hair Spa & Treatments', icon: 'Sparkles' },
  'Men - Hair Color': { id: 'mens-grooming', label: "Men's Hair & Grooming", icon: 'UserCheck' },
  'Men - Advanced Hair Treatment': { id: 'advance-hair-treatments', label: 'Botox, Nano Plastia & Keratin', icon: 'Sparkles' },
  'Men - Combo': { id: 'combos-packages', label: 'Super Saver Combos', icon: 'Gift' },
  'Women - Haircut': { id: 'haircut-styling', label: 'Haircuts & Styling', icon: 'Scissors' },
  'Women - Hair Color': { id: 'color-balayage', label: 'Color, Balayage & Highlights', icon: 'Palette' },
  'Women - Hair Spa': { id: 'hair-care-deep-conditioning', label: 'Hair Spa & Treatments', icon: 'Sparkles' },
  'Women - Hair Treatment': { id: 'hair-care-deep-conditioning', label: 'Hair Spa & Treatments', icon: 'Sparkles' },
  'Women - Advanced Hair Treatment': { id: 'advance-hair-treatments', label: 'Botox, Nano Plastia & Keratin', icon: 'Sparkles' },
  'Women - Head Massage': { id: 'hair-care-deep-conditioning', label: 'Hair Spa & Treatments', icon: 'Sparkles' },
  'Women - Styling & Makeover': { id: 'haircut-styling', label: 'Haircuts & Styling', icon: 'Scissors' },
  'Women - Face Waxing': { id: 'waxing-threading', label: 'Waxing & Threading', icon: 'Feather' },
  'Women - Threading': { id: 'waxing-threading', label: 'Waxing & Threading', icon: 'Feather' },
  'Women - Rica Waxing': { id: 'waxing-threading', label: 'Waxing & Threading', icon: 'Feather' },
  'Women - Brazilian Waxing': { id: 'waxing-threading', label: 'Waxing & Threading', icon: 'Feather' },
  'Women - Combo': { id: 'combos-packages', label: 'Super Saver Combos', icon: 'Gift' },
  'Both - Facial': { id: 'facials-cleanup-detan', label: 'Facials, Clean-Up & De-Tan', icon: 'Sun' },
  'Both - Clean Up': { id: 'facials-cleanup-detan', label: 'Facials, Clean-Up & De-Tan', icon: 'Sun' },
  'Both - De-Tan': { id: 'facials-cleanup-detan', label: 'Facials, Clean-Up & De-Tan', icon: 'Sun' },
  'Both - Manicure': { id: 'manicure-pedicure', label: 'Manicure & Pedicure', icon: 'Sparkle' },
  'Both - Pedicure': { id: 'manicure-pedicure', label: 'Manicure & Pedicure', icon: 'Sparkle' },
  'Both - Massage': { id: 'manicure-pedicure', label: 'Manicure & Pedicure', icon: 'Sparkle' },
  'Hair': { id: 'haircut-styling', label: 'Haircuts & Styling', icon: 'Scissors' },
};

const uniqueCategories = {};

let servicesStr = `import { ServiceItem } from '@/lib/types';

export const ALL_SERVICES: ServiceItem[] = [\n`;

lines.forEach((line, i) => {
  const parts = line.split('\t');
  if (parts.length < 4) return;
  
  const rawName = parts[0].trim();
  const rawCategory = parts[1].trim();
  // parts[2] is 'Custom' or '10', ignoring
  const price = parseInt(parts[3].trim());
  
  if (isNaN(price)) return;
  
  const mapping = CATEGORY_MAP[rawCategory] || { id: 'other', label: 'Other Services', icon: 'Sparkles' };
  
  let gender = 'all';
  if (rawCategory.startsWith('Men')) gender = 'men';
  else if (rawCategory.startsWith('Women')) gender = 'women';
  
  uniqueCategories[mapping.id] = mapping;
  
  // Calculate a mock member price (20% off)
  const memberPrice = Math.floor(price * 0.8);
  
  // Create an ID
  const id = rawName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  servicesStr += `  {
    id: '${id}-${i}',
    name: '${rawName.replace(/'/g, "\\'")}',
    gender: '${gender}',
    category: '${mapping.id}',
    categoryName: '${mapping.label.replace(/'/g, "\\'")}',
    tagline: 'Premium service at Classic Pearls Unisex Salon.',
    description: 'Experience our high-quality ${rawName.replace(/'/g, "\\'")} delivered by professional stylists in a luxury environment.',
    duration: 'Contact us',
    durationMinutes: 45,
    regularPrice: ${price},
    memberPrice: ${memberPrice},
    benefits: ['Professional care', 'Luxury experience'],
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    isPopular: ${price > 1000 ? 'true' : 'false'}
  },\n`;
});

servicesStr += `];\n\nexport const SERVICE_CATEGORIES = [\n`;
Object.values(uniqueCategories).forEach(cat => {
  servicesStr += `  { id: '${cat.id}', label: '${cat.label.replace(/'/g, "\\'")}', icon: '${cat.icon}' },\n`;
});
servicesStr += `];\n`;

fs.writeFileSync(outputFile, servicesStr);
console.log('Successfully updated services.ts');
