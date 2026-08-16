/**
 * CLASSIC PEARL AI ENGINE
 * ========================
 * Fully independent, client-side AI salon consultant engine.
 * 
 * Features:
 * - Intent Classification (greeting, booking, pricing, recommendation, comparison, info, farewell)
 * - Entity Extraction (services, body areas, hair/skin types, occasions, budgets)
 * - Fuzzy String Matching for service recognition
 * - Conversation Context Memory (tracks gender, concerns, budget, past questions)
 * - Multi-Turn Guided Consultation Flows
 * - Personalized Service Recommendations
 * - Smart Follow-Up Questions
 */

import { ALL_SERVICES } from '@/data/services';
import { ServiceItem } from '@/lib/types';
import { businessConfig, membershipConfig } from '@/lib/config';

// ========================
// TYPES
// ========================

export type Intent =
  | 'greeting'
  | 'farewell'
  | 'booking'
  | 'pricing'
  | 'recommendation'
  | 'comparison'
  | 'membership'
  | 'location'
  | 'hours'
  | 'hair_concern'
  | 'skin_concern'
  | 'bridal'
  | 'mens_grooming'
  | 'kids'
  | 'aftercare'
  | 'products'
  | 'duration'
  | 'thanks'
  | 'complaint'
  | 'unknown';

export interface ConversationContext {
  gender: 'women' | 'men' | 'unknown';
  concerns: string[];
  mentionedServices: string[];
  budget: 'budget' | 'mid' | 'premium' | 'unknown';
  occasion: string | null;
  hairType: string | null;
  skinType: string | null;
  turnCount: number;
  lastIntent: Intent;
  consultationMode: 'idle' | 'hair' | 'skin' | 'bridal' | 'mens';
  consultationStep: number;
  askedAboutMembership: boolean;
  name: string | null;
}

export interface AIResponse {
  text: string;
  services?: ServiceItem[];
  quickReplies?: string[];
  isConsultation?: boolean;
}

// ========================
// INITIAL CONTEXT
// ========================

export function createInitialContext(): ConversationContext {
  return {
    gender: 'unknown',
    concerns: [],
    mentionedServices: [],
    budget: 'unknown',
    occasion: null,
    hairType: null,
    skinType: null,
    turnCount: 0,
    lastIntent: 'greeting',
    consultationMode: 'idle',
    consultationStep: 0,
    askedAboutMembership: false,
    name: null,
  };
}

// ========================
// FUZZY MATCHING
// ========================

function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

function fuzzyMatch(input: string, target: string, threshold = 0.65): boolean {
  const a = input.toLowerCase().trim();
  const b = target.toLowerCase().trim();
  if (b.includes(a) || a.includes(b)) return true;
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return true;
  const dist = levenshtein(a, b);
  return (1 - dist / maxLen) >= threshold;
}

function containsAny(text: string, keywords: string[]): boolean {
  const lower = text.toLowerCase();
  return keywords.some(k => lower.includes(k.toLowerCase()));
}

// ========================
// SYNONYM EXPANSION
// ========================

const SYNONYMS: Record<string, string[]> = {
  'haircut': ['hair cut', 'cutting', 'trim', 'trimming', 'cut my hair', 'chop', 'layers', 'bob', 'bangs', 'fringe'],
  'hair color': ['colour', 'coloring', 'colouring', 'dye', 'dyeing', 'tint', 'shade', 'grey coverage', 'gray coverage', 'white hair'],
  'balayage': ['balyage', 'balayaj', 'balaige', 'ombre', 'highlights', 'streaks', 'sun-kissed', 'babylights'],
  'keratin': ['karatin', 'keratin treatment', 'smoothing', 'smoothening', 'anti frizz', 'frizz control'],
  'botox': ['hair botox', 'botox treatment', 'hair repair', 'fiber repair', 'deep repair'],
  'nano plastia': ['nanoplastia', 'nano', 'organic straightening', 'straightening', 'rebonding'],
  'facial': ['face treatment', 'skin treatment', 'glow', 'glowing skin', 'face glow', 'brightening'],
  'korean': ['korean facial', 'glass skin', 'k-beauty', 'korean glass', 'glass facial', 'porcelain skin'],
  'hydra': ['hydra facial', 'hydrafacial', 'hydra dermabrasion', 'pore cleaning', 'blackhead', 'blackheads'],
  'de-tan': ['detan', 'tan removal', 'sun tan', 'tanning', 'dark skin', 'pigmentation', 'tan'],
  'waxing': ['wax', 'rica', 'brazilian', 'hair removal', 'body wax', 'full body'],
  'threading': ['thread', 'eyebrow', 'eyebrows', 'brow', 'upper lip', 'chin hair'],
  'pedicure': ['pedi', 'feet', 'foot care', 'cracked heels', 'callus'],
  'manicure': ['mani', 'nails', 'nail care', 'hand care', 'cuticle'],
  'beard': ['beard trim', 'beard styling', 'shave', 'shaving', 'mustache', 'moustache', 'razor'],
  'bridal': ['bride', 'wedding', 'marriage', 'shaadi', 'reception', 'engagement', 'mehendi', 'sangeet', 'haldi'],
  'dandruff': ['flakes', 'itchy scalp', 'dry scalp', 'scalp problem', 'scalp issue'],
  'hair fall': ['hairfall', 'hair loss', 'falling hair', 'thinning', 'bald', 'receding'],
  'acne': ['pimple', 'pimples', 'breakout', 'acne scars', 'oily skin'],
  'dry skin': ['dehydrated', 'flaky skin', 'rough skin', 'dryness'],
  'oily skin': ['greasy', 'shiny face', 'excess oil', 'sebum'],
  'anti aging': ['wrinkles', 'fine lines', 'aging', 'ageing', 'saggy', 'sagging'],
  'massage': ['head massage', 'foot massage', 'relaxation', 'stress relief', 'de-stress'],
  'combo': ['package', 'deal', 'offer', 'value', 'bundle', 'save'],
  'cheap': ['affordable', 'budget', 'low cost', 'inexpensive', 'economical', 'pocket friendly'],
  'expensive': ['premium', 'luxury', 'high end', 'best quality', 'top'],
};

function expandSynonyms(text: string): string[] {
  const lower = text.toLowerCase();
  const expanded: string[] = [lower];
  for (const [canonical, syns] of Object.entries(SYNONYMS)) {
    if (syns.some(s => lower.includes(s)) || lower.includes(canonical)) {
      expanded.push(canonical);
    }
  }
  return expanded;
}

// ========================
// INTENT CLASSIFICATION
// ========================

const INTENT_PATTERNS: Record<Intent, string[]> = {
  greeting: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'namaste', 'hii', 'hiii', 'sup', 'yo', 'howdy'],
  farewell: ['bye', 'goodbye', 'see you', 'thank you bye', 'later', 'cya', 'tata', 'ok bye', 'thanks bye'],
  thanks: ['thank', 'thanks', 'thx', 'appreciate', 'helpful', 'great help', 'awesome'],
  booking: ['book', 'appointment', 'slot', 'schedule', 'reserve', 'visit', 'come', 'walk in', 'walkin', 'available'],
  pricing: ['price', 'cost', 'charge', 'rate', 'how much', 'kitna', 'fees', 'fee', 'expensive', 'cheap', 'affordable', 'budget', 'worth'],
  recommendation: ['recommend', 'suggest', 'which', 'what should', 'best', 'good for', 'suitable', 'right for', 'perfect for', 'ideal', 'help me choose', 'confused', 'not sure', 'which one'],
  comparison: ['difference', 'vs', 'versus', 'compare', 'better', 'or', 'which is better', 'what is the difference'],
  membership: ['member', 'membership', 'pearl member', 'pearl pass', 'annual', 'yearly', '199', 'loyalty', 'savings card', 'discount card'],
  location: ['where', 'location', 'address', 'direction', 'map', 'reach', 'how to reach', 'route', 'near', 'area', 'landmark'],
  hours: ['time', 'timing', 'hours', 'open', 'close', 'when', 'working hours', 'sunday', 'monday', 'holiday', 'today'],
  hair_concern: ['hair', 'frizz', 'frizzy', 'dry hair', 'damaged', 'split ends', 'rough', 'curly', 'straight', 'wavy', 'volume', 'thin hair', 'thick hair'],
  skin_concern: ['skin', 'face', 'glow', 'pimple', 'acne', 'dark spots', 'pigmentation', 'tan', 'wrinkle', 'aging', 'dull', 'oily', 'dry skin', 'sensitive'],
  bridal: ['bridal', 'bride', 'wedding', 'shaadi', 'marriage', 'reception', 'engagement', 'pre-bridal', 'pre bridal', 'mehendi', 'sangeet'],
  mens_grooming: ['men', 'gents', 'male', 'beard', 'shave', 'fade', 'mens', "men's", 'guy', 'bro', 'gentleman'],
  kids: ['kid', 'kids', 'child', 'children', 'boy', 'girl', 'baby', 'son', 'daughter', 'toddler'],
  aftercare: ['aftercare', 'after care', 'maintenance', 'maintain', 'how long', 'last', 'lasts', 'duration of result', 'wash', 'shampoo after'],
  products: ['product', 'brand', 'which brand', 'what product', 'organic', 'ammonia', 'chemical', 'formaldehyde', 'ingredients'],
  duration: ['how long', 'time taken', 'duration', 'minutes', 'hours', 'how many hours', 'sitting time'],
  complaint: ['bad', 'worst', 'terrible', 'disappointed', 'unhappy', 'not good', 'complaint', 'problem', 'issue', 'refund', 'damage'],
  unknown: [],
};

function classifyIntent(text: string, context: ConversationContext): Intent {
  const lower = text.toLowerCase().trim();
  const expanded = expandSynonyms(lower);
  const combined = expanded.join(' ');

  // Score each intent
  let bestIntent: Intent = 'unknown';
  let bestScore = 0;

  for (const [intent, patterns] of Object.entries(INTENT_PATTERNS) as [Intent, string[]][]) {
    if (intent === 'unknown') continue;
    let score = 0;
    for (const pattern of patterns) {
      if (combined.includes(pattern)) {
        score += pattern.length; // Longer match = higher confidence
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  // If in consultation mode, bias toward the active domain
  if (bestIntent === 'unknown' && context.consultationMode !== 'idle') {
    if (context.consultationMode === 'hair') bestIntent = 'hair_concern';
    if (context.consultationMode === 'skin') bestIntent = 'skin_concern';
    if (context.consultationMode === 'bridal') bestIntent = 'bridal';
    if (context.consultationMode === 'mens') bestIntent = 'mens_grooming';
  }

  return bestIntent;
}

// ========================
// ENTITY EXTRACTION
// ========================

function extractGender(text: string, context: ConversationContext): 'women' | 'men' | 'unknown' {
  const lower = text.toLowerCase();
  if (containsAny(lower, ['woman', 'women', 'female', 'lady', 'ladies', 'girl', 'she', 'her', 'wife', 'sister', 'mother', 'mom', 'bride'])) return 'women';
  if (containsAny(lower, ['man', 'men', 'male', 'gents', 'gentleman', 'guy', 'he', 'him', 'husband', 'brother', 'father', 'dad', 'bro', 'dude'])) return 'men';
  return context.gender;
}

function extractBudget(text: string): 'budget' | 'mid' | 'premium' | 'unknown' {
  const lower = text.toLowerCase();
  if (containsAny(lower, ['cheap', 'budget', 'affordable', 'low cost', 'basic', 'minimum', 'economical'])) return 'budget';
  if (containsAny(lower, ['premium', 'best', 'luxury', 'top', 'expensive', 'high end', 'advanced'])) return 'premium';
  if (containsAny(lower, ['mid', 'medium', 'moderate', 'normal', 'regular', 'standard'])) return 'mid';
  return 'unknown';
}

function extractHairType(text: string): string | null {
  const lower = text.toLowerCase();
  if (containsAny(lower, ['curly', 'curl', 'coily'])) return 'curly';
  if (containsAny(lower, ['wavy', 'wave'])) return 'wavy';
  if (containsAny(lower, ['straight', 'flat'])) return 'straight';
  if (containsAny(lower, ['frizzy', 'frizz', 'unmanageable'])) return 'frizzy';
  if (containsAny(lower, ['thin', 'fine', 'limp'])) return 'thin';
  if (containsAny(lower, ['thick', 'dense', 'coarse'])) return 'thick';
  if (containsAny(lower, ['damaged', 'dry', 'brittle', 'rough'])) return 'damaged';
  if (containsAny(lower, ['oily', 'greasy'])) return 'oily';
  if (containsAny(lower, ['colored', 'coloured', 'bleached', 'highlighted'])) return 'color-treated';
  return null;
}

function extractSkinType(text: string): string | null {
  const lower = text.toLowerCase();
  if (containsAny(lower, ['oily', 'greasy', 'shiny', 'sebum'])) return 'oily';
  if (containsAny(lower, ['dry', 'flaky', 'dehydrated', 'rough skin'])) return 'dry';
  if (containsAny(lower, ['sensitive', 'redness', 'irritation', 'reactive'])) return 'sensitive';
  if (containsAny(lower, ['combination', 'combo', 't-zone'])) return 'combination';
  if (containsAny(lower, ['acne', 'pimple', 'breakout'])) return 'acne-prone';
  if (containsAny(lower, ['pigment', 'dark spot', 'uneven', 'hyperpigmentation'])) return 'pigmented';
  if (containsAny(lower, ['tan', 'tanning', 'sun damage', 'dark'])) return 'sun-damaged';
  if (containsAny(lower, ['aging', 'ageing', 'wrinkle', 'fine line', 'mature'])) return 'mature';
  return null;
}

// Category groupings — used by both findMatchingServices and recommendation engine
const HAIR_CATEGORIES = ['haircut-styling', 'color-balayage', 'advance-hair-treatments', 'hair-care-deep-conditioning'];
const SKIN_CATEGORIES = ['facials-cleanup-detan'];
const GROOMING_CATEGORIES = ['mens-grooming'];

function findMatchingServices(text: string, limit = 3): ServiceItem[] {
  const expanded = expandSynonyms(text);
  const combined = expanded.join(' ');
  const lower = text.toLowerCase();

  // Detect the domain of the query to prioritize matching categories
  const isHairQuery = containsAny(lower, ['hair', 'frizz', 'frizzy', 'keratin', 'botox', 'nano', 'balayage', 'color', 'colour', 'highlight', 'haircut', 'straighten', 'smoothing', 'dandruff', 'scalp']);
  const isSkinQuery = containsAny(lower, ['skin', 'facial', 'face', 'glow', 'tan', 'acne', 'pimple', 'detan', 'cleanup', 'hydra', 'korean']);
  const isMensQuery = containsAny(lower, ['men', 'beard', 'shave', 'gents', 'male', 'fade']);
  const isBridalQuery = containsAny(lower, ['bridal', 'wedding', 'bride', 'makeup']);

  const scored = ALL_SERVICES.map(service => {
    let score = 0;
    const nameWords = service.name.toLowerCase().split(/\s+/);
    const descWords = service.description.toLowerCase();
    const catWords = service.categoryName.toLowerCase();
    const allServiceText = (service.id + ' ' + service.name + ' ' + service.description + ' ' + catWords + ' ' + (service.benefits || []).join(' ')).toLowerCase();

    // Direct name match
    for (const word of nameWords) {
      if (word.length > 2 && combined.includes(word)) score += 3;
    }

    // Category match
    if (combined.includes(catWords)) score += 2;

    // Description keyword match
    for (const exp of expanded) {
      if (exp.length > 2 && descWords.includes(exp)) score += 1;
    }

    // Fuzzy match on service name
    for (const exp of expanded) {
      if (exp.length > 3 && fuzzyMatch(exp, service.name.toLowerCase(), 0.5)) score += 2;
    }

    // Benefits match
    if (service.benefits) {
      for (const benefit of service.benefits) {
        for (const exp of expanded) {
          if (exp.length > 2 && benefit.toLowerCase().includes(exp)) score += 1;
        }
      }
    }

    // DOMAIN PENALTY: Penalize services from wrong domain heavily
    if (isHairQuery && !HAIR_CATEGORIES.includes(service.category)) score -= 5;
    if (isSkinQuery && !SKIN_CATEGORIES.includes(service.category) && service.category !== 'facials-cleanup-detan') score -= 5;
    if (isMensQuery && service.category !== 'mens-grooming' && service.gender !== 'men') score -= 3;
    if (isBridalQuery && service.category !== 'bridal-makeover') score -= 3;

    return { service, score };
  })
  .filter(s => s.score > 0)
  .sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    // Prefer featured services as tiebreaker
    return (b.service.featured ? 1 : 0) - (a.service.featured ? 1 : 0);
  })
  .slice(0, limit);

  return scored.map(s => s.service);
}

// ========================
// RECOMMENDATION ENGINE
// ========================

// (Category constants defined above findMatchingServices)

function getHairRecommendations(context: ConversationContext): ServiceItem[] {
  const { concerns, gender, budget } = context;

  // STEP 1: Start with ONLY hair-related services — never facials, pedicure, waxing
  let candidates = ALL_SERVICES.filter(s => HAIR_CATEGORIES.includes(s.category));

  // STEP 2: Filter by gender (but if unknown, show all — don't exclude anything)
  if (gender !== 'unknown') {
    const genderFiltered = candidates.filter(s => s.gender === gender || s.gender === 'all');
    // Only apply gender filter if it produces results
    if (genderFiltered.length > 0) candidates = genderFiltered;
  }

  // STEP 3: Filter by specific concern keywords
  const allConcerns = concerns.join(' ').toLowerCase();
  let concerned: ServiceItem[] = [];

  if (containsAny(allConcerns, ['frizz', 'frizzy', 'unmanageable', 'humidity', 'puffy', 'flyaway'])) {
    concerned = candidates.filter(s => containsAny(
      (s.id + ' ' + s.name + ' ' + s.description + ' ' + (s.benefits || []).join(' ')).toLowerCase(),
      ['keratin', 'nano', 'botox', 'smoothing', 'smoothening', 'frizz', 'anti-frizz']
    ));
  } else if (containsAny(allConcerns, ['damage', 'damaged', 'dry hair', 'split end', 'split ends', 'brittle', 'rough hair', 'broken'])) {
    concerned = candidates.filter(s => containsAny(
      (s.id + ' ' + s.name + ' ' + s.description + ' ' + (s.benefits || []).join(' ')).toLowerCase(),
      ['botox', 'repair', 'restorative', 'conditioning', 'nourish', 'deep condition', 'fiber']
    ));
  } else if (containsAny(allConcerns, ['straight', 'straightening', 'rebond', 'rebonding', 'curly to straight'])) {
    concerned = candidates.filter(s => containsAny(
      (s.id + ' ' + s.name + ' ' + s.description).toLowerCase(),
      ['nano', 'keratin', 'straighten', 'smooth']
    ));
  } else if (containsAny(allConcerns, ['color', 'colour', 'grey', 'gray', 'white hair', 'highlight', 'balayage', 'streak', 'dye'])) {
    concerned = candidates.filter(s => s.category === 'color-balayage');
  } else if (containsAny(allConcerns, ['dandruff', 'flake', 'flaky scalp', 'itchy scalp', 'scalp'])) {
    concerned = candidates.filter(s => containsAny(
      (s.id + ' ' + s.name + ' ' + s.description).toLowerCase(),
      ['dandruff', 'scalp', 'anti-dandruff']
    ));
  } else if (containsAny(allConcerns, ['hair fall', 'hairfall', 'thinning', 'hair loss', 'bald', 'receding'])) {
    concerned = candidates.filter(s => containsAny(
      (s.id + ' ' + s.name + ' ' + s.description).toLowerCase(),
      ['hair fall', 'anti-hair', 'scalp', 'botox', 'growth']
    ));
  } else if (containsAny(allConcerns, ['haircut', 'trim', 'cut', 'layers', 'bob', 'bangs', 'style', 'styling'])) {
    concerned = candidates.filter(s => s.category === 'haircut-styling');
  }

  // STEP 4: Use concerned results if found, else fallback to all hair candidates sorted by popularity
  if (concerned.length > 0) {
    candidates = concerned;
  } else {
    // Default to featured/popular hair services
    candidates.sort((a, b) => {
      const aScore = (a.featured ? 2 : 0) + (a.isPopular ? 1 : 0);
      const bScore = (b.featured ? 2 : 0) + (b.isPopular ? 1 : 0);
      return bScore - aScore;
    });
  }

  // STEP 5: Budget sort
  if (budget === 'budget') {
    candidates.sort((a, b) => a.memberPrice - b.memberPrice);
  } else if (budget === 'premium') {
    candidates.sort((a, b) => b.memberPrice - a.memberPrice);
  }

  return candidates.slice(0, 3);
}

function getSkinRecommendations(context: ConversationContext): ServiceItem[] {
  const { skinType, concerns } = context;
  let candidates = ALL_SERVICES.filter(s => s.category === 'facials-cleanup-detan');

  if (skinType === 'oily' || skinType === 'acne-prone') {
    candidates = candidates.filter(s => containsAny(s.name.toLowerCase() + ' ' + s.description.toLowerCase(), ['hydra', 'cleanup', 'herbal', 'fruit']));
  } else if (skinType === 'dry' || skinType === 'sensitive') {
    candidates = candidates.filter(s => containsAny(s.name.toLowerCase(), ['aroma', 'gold', 'raaga', 'herbal']));
  } else if (skinType === 'sun-damaged' || skinType === 'pigmented') {
    candidates = candidates.filter(s => containsAny(s.name.toLowerCase() + ' ' + s.description.toLowerCase(), ['whitening', 'o3', 'detan', 'tan', 'brightening']));
  } else if (skinType === 'mature') {
    candidates = candidates.filter(s => containsAny(s.name.toLowerCase(), ['gold', 'korean', 'o3']));
  } else if (containsAny(concerns.join(' '), ['glow', 'radiance', 'party', 'event', 'wedding'])) {
    candidates = candidates.filter(s => containsAny(s.name.toLowerCase(), ['korean', 'gold', 'o3', 'bridal']));
  }

  if (candidates.length === 0) {
    candidates = ALL_SERVICES.filter(s => s.category === 'facials-cleanup-detan').slice(0, 3);
  }

  return candidates.slice(0, 3);
}

// ========================
// RESPONSE GENERATION
// ========================

function greetingResponse(context: ConversationContext): AIResponse {
  const greetings = [
    `Hello! 👋 Welcome to Classic Pearl Unisex Salon's AI Beauty Consultant.\n\nI can help you with:\n• Finding the perfect hair or skin treatment\n• Transparent pricing & comparisons\n• Booking appointments\n• Pearl Membership savings\n\nWhat brings you here today?`,
    `Hi there! ✨ I'm your personal beauty consultant at Classic Pearl Unisex Salon, Arekere.\n\nTell me what you're looking for and I'll recommend the perfect service with transparent pricing. You can ask me anything!`,
    `Welcome to Classic Pearl! 🌟\n\nI'm here to help you find the right treatment, check pricing, or book your visit.\n\nAre you looking for hair services, skin treatments, or grooming today?`
  ];
  return {
    text: greetings[Math.floor(Math.random() * greetings.length)],
    quickReplies: ['Hair treatments', 'Skin & facials', "Men's grooming", 'Bridal makeup', 'View pricing', 'Pearl Membership ₹199']
  };
}

function farewellResponse(): AIResponse {
  return {
    text: `Thank you for chatting with us! 😊\n\nBook anytime at classicpearls.vercel.app/book or WhatsApp us at ${businessConfig.phone}.\n\nWe look forward to seeing you at Classic Pearl Unisex Salon, Arekere! ✨`,
    quickReplies: ['Book appointment', 'WhatsApp us']
  };
}

function thanksResponse(): AIResponse {
  return {
    text: `You're welcome! 😊 Happy to help.\n\nIs there anything else you'd like to know about our services, pricing, or membership?`,
    quickReplies: ['View all services', 'Pearl Membership', 'Book appointment']
  };
}

function locationResponse(): AIResponse {
  return {
    text: `📍 **Classic Pearl Unisex Salon**\n\n**Address:** 1st Floor, Tony Thomas, MNK Arcade, 36, 80ft BDA Main Road, beside Camry Hospital, Arekere, Bengaluru, Karnataka 560076\n\n**Landmark:** Beside Camry Hospital on 80ft BDA Main Road\n\n**Google Maps:** Just search "Classic Pearl Unisex Salon Arekere" on Google Maps for instant directions.\n\n📞 **Phone:** ${businessConfig.phone}`,
    quickReplies: ['Opening hours', 'Book appointment', 'WhatsApp directions']
  };
}

function hoursResponse(): AIResponse {
  return {
    text: `⏰ **Opening Hours**\n\nWe are open **10:00 AM to 09:00 PM**, every single day — Monday through Sunday. No weekly off!\n\n✅ Walk-ins are always welcome, but we recommend booking in advance during weekends and evenings to avoid waiting.\n\n📞 Call: ${businessConfig.phone}\n📱 WhatsApp: Same number for instant slot booking`,
    quickReplies: ['Book a slot', 'View services', 'Get directions']
  };
}

function membershipResponse(context: ConversationContext): AIResponse {
  context.askedAboutMembership = true;
  const savings = [
    { service: 'Korean Glass Facial', regular: 2800, member: 2240, save: 560 },
    { service: 'Hair BOTOX', regular: 3800, member: 2999, save: 801 },
    { service: 'Nano Plastia', regular: 4500, member: 3600, save: 900 },
    { service: 'Balayage', regular: 4200, member: 3360, save: 840 },
    { service: 'Advance Haircut', regular: 900, member: 720, save: 180 },
    { service: 'Bridal Package', regular: 9500, member: 7999, save: 1501 },
  ];

  let savingsTable = savings.map(s => `• ${s.service}: ~~₹${s.regular}~~ → **₹${s.member}** (Save ₹${s.save})`).join('\n');

  return {
    text: `💎 **Pearl Membership — ₹199/Year**\n\nThe smartest way to save on every salon visit!\n\n**What you get:**\n${membershipConfig.benefits.map(b => `✅ ${b}`).join('\n')}\n\n**Example Savings:**\n${savingsTable}\n\n💡 **The membership pays for itself in your very first visit!** Just ask at the reception when you come in, or book your appointment online and mention "Pearl Member" pricing.\n\nValid for 365 days with zero minimum spend.`,
    quickReplies: ['Book appointment', 'View all services', 'How to activate?']
  };
}

function pricingResponse(text: string, context: ConversationContext): AIResponse {
  const services = findMatchingServices(text, 4);

  if (services.length > 0) {
    const priceList = services.map(s =>
      `**${s.name}**\n   ⏱ ${s.duration} | Regular: ~~₹${s.regularPrice}~~ | 💎 Member: **₹${s.memberPrice}** (Save ₹${s.regularPrice - s.memberPrice})`
    ).join('\n\n');

    return {
      text: `💰 Here's the transparent pricing:\n\n${priceList}\n\n${!context.askedAboutMembership ? '💡 **Tip:** Get the Pearl Membership for just ₹199/year to unlock member rates on ALL services and save ₹300–₹1,200 on every visit!' : ''}`,
      services: services.slice(0, 3),
      quickReplies: ['Book this service', 'Pearl Membership', 'Compare options', 'See all prices']
    };
  }

  // General pricing question
  const popular = ALL_SERVICES.filter(s => s.isPopular).slice(0, 4);
  const priceList = popular.map(s =>
    `• **${s.name}** — ₹${s.memberPrice} (Member) / ₹${s.regularPrice}`
  ).join('\n');

  return {
    text: `Here are some of our most popular services with transparent pricing:\n\n${priceList}\n\nWould you like pricing for a specific treatment? Just tell me what you're looking for — haircut, facial, hair color, or any treatment!`,
    services: popular.slice(0, 3),
    quickReplies: ['Haircut prices', 'Facial prices', 'Hair color prices', 'Treatment prices', 'All services']
  };
}

function comparisonResponse(text: string): AIResponse {
  const lower = text.toLowerCase();

  if (containsAny(lower, ['botox', 'keratin']) || (containsAny(lower, ['botox']) && containsAny(lower, ['keratin']))) {
    return {
      text: `Great question! Here's a clear comparison:\n\n**Hair BOTOX (₹2,999 Member)**\n• Deep conditioning & fiber repair treatment\n• Fills damaged gaps with collagen & peptides\n• Keeps your natural volume, waves, and curls\n• Heals split ends, adds plumpness\n• Best for: Damaged, dry, or chemically treated hair\n• Lasts: 3–5 months\n\n**Keratin Treatment (₹2,800 Member)**\n• Smoothing & frizz elimination treatment\n• Coats hair with protective keratin protein layer\n• Makes hair straighter, sleeker, and more manageable\n• Blocks Bengaluru humidity frizz\n• Best for: Frizzy, unmanageable, wavy-to-curly hair\n• Lasts: 3–5 months\n\n**In short:** Choose BOTOX if your hair is damaged and you want repair. Choose Keratin if you want smooth, frizz-free, manageable hair.`,
      quickReplies: ['Book Hair Botox', 'Book Keratin', 'What about Nano Plastia?', 'Price comparison']
    };
  }

  if (containsAny(lower, ['nano', 'keratin'])) {
    return {
      text: `Here's how they differ:\n\n**Nano Plastia (₹3,600 Member)**\n• 100% Organic & Formaldehyde-free\n• Pin-straight mirror reflection result\n• Penetrates at nano-cellular level\n• Lasts 6–8 months (longest lasting!)\n• Best for: Anyone wanting organic straightening\n\n**Keratin Treatment (₹2,800 Member)**\n• Smoothing with natural movement\n• Not as pin-straight as Nano Plastia\n• More affordable option\n• Lasts 3–5 months\n• Best for: Moderate frizz control on a budget\n\n**In short:** Nano Plastia is the premium organic choice for mirror-straight results. Keratin is the value option for smooth, manageable hair.`,
      quickReplies: ['Book Nano Plastia', 'Book Keratin', 'Compare with Botox']
    };
  }

  if (containsAny(lower, ['korean', 'hydra'])) {
    return {
      text: `Both are excellent! Here's the difference:\n\n**Korean Glass Skin Facial (₹2,240 Member)**\n• Multi-step hydration + peptide infusion\n• Gives high-gloss "glass skin" luminescence\n• 75 minutes of deep cellular hydration\n• Best for: Dull, dehydrated skin needing intense glow\n\n**Hydra Facial (₹1,999 Member)**\n• Vortex suction deep-pore extraction\n• Removes blackheads + infuses hyaluronic acid\n• 60 minutes with zero downtime\n• Best for: Oily skin, congested pores, blackheads\n\n**In short:** Korean Glass Skin for maximum glow & hydration. Hydra Facial for deep cleaning & blackhead removal.`,
      quickReplies: ['Book Korean Facial', 'Book Hydra Facial', 'Other facial options']
    };
  }

  // Generic comparison
  const services = findMatchingServices(text, 2);
  if (services.length >= 2) {
    return {
      text: `Here's a quick comparison:\n\n**${services[0].name}**\n⏱ ${services[0].duration} | 💎 ₹${services[0].memberPrice} (Member)\n${services[0].tagline}\n\n**${services[1].name}**\n⏱ ${services[1].duration} | 💎 ₹${services[1].memberPrice} (Member)\n${services[1].tagline}\n\nWould you like me to explain the detailed differences or help you choose?`,
      services,
      quickReplies: ['Help me choose', `Book ${services[0].name.split(' ').slice(0, 3).join(' ')}`, `Book ${services[1].name.split(' ').slice(0, 3).join(' ')}`]
    };
  }

  return {
    text: `I'd be happy to compare treatments for you! Which two services would you like me to compare? For example:\n\n• "Botox vs Keratin"\n• "Korean Facial vs Hydra Facial"\n• "Nano Plastia vs Keratin"`,
    quickReplies: ['Botox vs Keratin', 'Korean vs Hydra Facial', 'Nano Plastia vs Keratin']
  };
}

function hairConsultation(text: string, context: ConversationContext): AIResponse {
  context.consultationMode = 'hair';
  const hairType = extractHairType(text);
  if (hairType) context.hairType = hairType;

  const lower = text.toLowerCase();
  context.concerns.push(lower);

  // Update gender from text
  context.gender = extractGender(text, context);

  const recommendations = getHairRecommendations(context);

  if (recommendations.length > 0) {
    const topPick = recommendations[0];
    const othersText = recommendations.slice(1).map(s => `• **${s.name}** — ₹${s.memberPrice} (Member) | ${s.duration}`).join('\n');

    return {
      text: `Based on your concern, here's my recommendation:\n\n🏆 **Top Pick: ${topPick.name}**\n${topPick.tagline}\n⏱ ${topPick.duration} | 💎 Member: **₹${topPick.memberPrice}** (Regular: ₹${topPick.regularPrice})\n\n**Key Benefits:**\n${topPick.benefits?.map(b => `✅ ${b}`).join('\n') || ''}\n\n${recommendations.length > 1 ? `**Also consider:**\n${othersText}` : ''}\n\nWould you like to book this, or need more details?`,
      services: recommendations,
      quickReplies: [`Book ${topPick.name.split('(')[0].trim().split(' ').slice(0, 3).join(' ')}`, 'Compare options', 'Something different', 'Pearl Membership']
    };
  }

  return {
    text: `I'd love to help with your hair! Could you tell me more about:\n\n1. What's your main concern? (frizz, damage, color, dandruff, hair fall, styling)\n2. What's your hair type? (curly, wavy, straight, thick, thin)\n3. Any specific treatment you've heard about?`,
    quickReplies: ['Frizzy hair fix', 'Damaged hair repair', 'Hair color options', 'Dandruff treatment', 'Hair fall solution']
  };
}

function skinConsultation(text: string, context: ConversationContext): AIResponse {
  context.consultationMode = 'skin';
  const skinType = extractSkinType(text);
  if (skinType) context.skinType = skinType;

  context.concerns.push(text.toLowerCase());

  const recommendations = getSkinRecommendations(context);

  if (recommendations.length > 0) {
    const topPick = recommendations[0];
    const othersText = recommendations.slice(1).map(s => `• **${s.name}** — ₹${s.memberPrice} (Member) | ${s.duration}`).join('\n');

    return {
      text: `For your skin concern, here's my recommendation:\n\n🏆 **Top Pick: ${topPick.name}**\n${topPick.tagline}\n⏱ ${topPick.duration} | 💎 Member: **₹${topPick.memberPrice}** (Regular: ₹${topPick.regularPrice})\n\n**Key Benefits:**\n${topPick.benefits?.map(b => `✅ ${b}`).join('\n') || ''}\n\n${recommendations.length > 1 ? `**Also consider:**\n${othersText}` : ''}\n\nShall I book this for you?`,
      services: recommendations,
      quickReplies: [`Book ${topPick.name.split(' ').slice(0, 3).join(' ')}`, 'Compare facials', 'Budget options', 'Pearl Membership']
    };
  }

  return {
    text: `I'd love to help with your skin! Tell me:\n\n1. What's your main concern? (glow, tan, acne, pigmentation, aging, dryness)\n2. Is this for a special occasion?\n3. Any specific facial you've heard about?`,
    quickReplies: ['Tan removal', 'Instant glow facial', 'Acne/oily skin', 'Anti-aging', 'Pre-wedding glow']
  };
}

function bridalResponse(context: ConversationContext): AIResponse {
  context.consultationMode = 'bridal';
  context.gender = 'women';

  const bridalService = ALL_SERVICES.find(s => s.id === 'bridal-complete-package');

  return {
    text: `👰 **Bridal Services at Classic Pearl**\n\nCongratulations on your upcoming wedding! Here's what we offer:\n\n💍 **Signature Bridal Makeover Package**\n• 18-Hour Waterproof HD Airbrush Makeup\n• Couture Bridal Hair Styling (Veil/Flower setting)\n• Saree / Lehenga Draping\n• Premium Mink Eyelashes & Lens Setting\n• Complimentary Pre-Wedding Trial Session\n⏱ 180 mins | Regular: ₹9,500 | 💎 **Member: ₹7,999**\n\n🌸 **Pre-Bridal Prep (3 Sessions)**\nO3+ Bridal Facial + Hair Treatment + Chocolate Crystal Pedicure & Manicure + Full Body Waxing + Threading\nRegular: ₹6,500 | 💎 **Member: ₹5,200**\n\n💃 **Bridesmaid & Party Glam**\nHD Party Makeup + Hair Styling + Draping\nRegular: ₹3,200 | 💎 **Member: ₹2,560**\n\n💡 **Pro Tip:** Book your Pearl Membership (₹199) to save up to ₹1,500 on the complete bridal package!\n\nWhen is your wedding? I can help you plan the perfect timeline.`,
    services: bridalService ? [bridalService] : [],
    quickReplies: ['Book bridal consultation', 'Pre-bridal packages', 'Bridesmaid makeup', 'When to start prep?']
  };
}

function mensResponse(context: ConversationContext): AIResponse {
  context.consultationMode = 'mens';
  context.gender = 'men';

  const mensServices = ALL_SERVICES.filter(s => s.gender === 'men' || (s.gender === 'all' && containsAny(s.categoryName.toLowerCase(), ['combo', 'grooming']))).slice(0, 4);

  const serviceList = mensServices.map(s =>
    `• **${s.name}** — ⏱ ${s.duration} | 💎 ₹${s.memberPrice}`
  ).join('\n');

  return {
    text: `💈 **Men's Grooming at Classic Pearl**\n\nHere are our most popular men's services:\n\n${serviceList}\n\n🏆 **Best Value:** Men Executive Grooming Combo — Haircut + Beard Styling + Head & Foot Massage for just **₹880** (Member price)!\n\nWhat are you looking for today?`,
    services: mensServices.slice(0, 3),
    quickReplies: ['Book haircut', 'Beard styling', 'Hair color/grey coverage', 'Executive combo', 'Hair Botox for men']
  };
}

function aftercareResponse(text: string): AIResponse {
  const lower = text.toLowerCase();

  if (containsAny(lower, ['nano', 'straighten'])) {
    return {
      text: `🧴 **Nano Plastia Aftercare Guide:**\n\n• Don't wash hair for 72 hours after treatment\n• Use ONLY sulfate-free shampoo & conditioner\n• Avoid tying hair tightly for the first week\n• No swimming in chlorinated water for 2 weeks\n• Apply silk serum on damp hair after every wash\n• Results last 6–8 months with proper care\n• Touch-up needed only at new root growth`,
      quickReplies: ['Book Nano Plastia', 'What about Keratin aftercare?', 'Product recommendations']
    };
  }
  if (containsAny(lower, ['keratin'])) {
    return {
      text: `🧴 **Keratin Treatment Aftercare:**\n\n• Don't wash or tie hair for 48 hours\n• Use sulfate-free shampoo only\n• Avoid heavy oils on the hair shaft\n• Sleep on a silk pillowcase (reduces friction)\n• Results last 3–5 months\n• Safe to color hair 2 weeks after treatment`,
      quickReplies: ['Book Keratin', 'Compare with Nano Plastia', 'Sulfate-free products?']
    };
  }
  if (containsAny(lower, ['botox'])) {
    return {
      text: `🧴 **Hair BOTOX Aftercare:**\n\n• Can wash after 24 hours (gentler than Keratin/Nano)\n• Use sulfate-free products\n• Natural curls and waves will remain\n• Apply leave-in conditioner weekly\n• Results last 3–5 months\n• Can be repeated every 3 months for cumulative repair`,
      quickReplies: ['Book Hair Botox', 'Compare Botox vs Keratin']
    };
  }
  if (containsAny(lower, ['color', 'balayage', 'highlight'])) {
    return {
      text: `🧴 **Hair Color Aftercare:**\n\n• Wait 48 hours before first wash\n• Use color-safe, sulfate-free shampoo\n• Use UV protection spray outdoors\n• Deep condition weekly to maintain shine\n• Touch-up roots every 6–8 weeks\n• Balayage needs touch-up only every 4–6 months!`,
      quickReplies: ['Book color service', 'Root touch-up pricing']
    };
  }

  return {
    text: `Great question about aftercare! Which treatment would you like aftercare tips for?\n\n• Nano Plastia\n• Keratin\n• Hair BOTOX\n• Hair Color / Balayage\n• Facial treatments`,
    quickReplies: ['Nano Plastia aftercare', 'Keratin aftercare', 'Botox aftercare', 'Color aftercare']
  };
}

function productsResponse(): AIResponse {
  return {
    text: `🧪 **Our Product Standards:**\n\nAt Classic Pearl, we exclusively use:\n\n✅ **100% Ammonia-Free Hair Colors** — gentle on scalp, zero burning\n✅ **Formaldehyde-Free Nano Plastia** — organic amino acid formula\n✅ **O3+ Professional Skincare** — clinical-grade facials\n✅ **Italian Rica Liposoluble Wax** — 98% less pain than regular wax\n✅ **Bond-Building Lighteners** — protects hair during balayage\n✅ **Dermatologically Tested Serums** — safe for sensitive skin\n\nWe never use cheap local substitutes. Every product used is authentic, sealed, and certified.\n\nWould you like to know about products used in a specific service?`,
    quickReplies: ['Nano Plastia products', 'Color brands', 'Facial products', 'Book appointment']
  };
}

function complaintResponse(): AIResponse {
  return {
    text: `We're really sorry to hear that! 😔 Your satisfaction is our top priority.\n\nPlease contact our salon directly so we can make it right:\n\n📞 **Call:** ${businessConfig.phone}\n💬 **WhatsApp:** Same number\n\nOur team will personally look into your concern and ensure a resolution. We take every feedback seriously.\n\n⏰ Response within 2 hours during salon hours (10 AM – 9 PM).`,
    quickReplies: ['Call salon', 'WhatsApp salon', 'View refund policy']
  };
}

function bookingResponse(context: ConversationContext): AIResponse {
  return {
    text: `📅 **Book Your Appointment:**\n\nYou can book in just 30 seconds! Here's how:\n\n1️⃣ **Online:** Visit our booking page — pick service, date, time, and enter your WhatsApp number\n2️⃣ **WhatsApp:** Message us at ${businessConfig.phone} with your preferred service and time\n3️⃣ **Call:** Ring us at ${businessConfig.phone}\n4️⃣ **Walk-in:** Just visit us in Arekere (walk-ins welcome!)\n\n✅ No prepayment required — pay at the salon\n✅ Instant WhatsApp confirmation\n✅ Easy rescheduling\n\n⏰ Open 10 AM – 9 PM, Every Day`,
    quickReplies: ['Book online now', 'WhatsApp booking', 'View services first', 'Get directions']
  };
}

function unknownResponse(text: string, context: ConversationContext): AIResponse {
  // Try to find any matching services as a last resort
  const services = findMatchingServices(text, 3);

  if (services.length > 0) {
    const serviceList = services.map(s =>
      `• **${s.name}** — ₹${s.memberPrice} (Member) | ${s.duration}`
    ).join('\n');

    return {
      text: `Here are the services I found that might match what you're looking for:\n\n${serviceList}\n\nWould you like more details or want to book any of these?`,
      services,
      quickReplies: ['Tell me more', 'Book appointment', 'Something different']
    };
  }

  return {
    text: `I'd love to help! Could you tell me more about what you're looking for? I can assist with:\n\n🔹 **Hair:** Cuts, color, Balayage, Botox, Nano Plastia, Keratin\n🔹 **Skin:** Korean Glass Facial, Hydra Facial, De-Tan, Cleanup\n🔹 **Grooming:** Men's haircuts, beard styling, combos\n🔹 **Bridal:** HD makeup, pre-bridal packages\n🔹 **Info:** Pricing, membership, location, hours\n\nJust type naturally — for example: "I have frizzy hair" or "facial for oily skin" or "men's grooming combo price"`,
    quickReplies: ['Hair treatments', 'Facial options', "Men's grooming", 'Bridal packages', 'View all services', 'Pearl Membership']
  };
}

// ========================
// MAIN AI FUNCTION
// ========================

export function processMessage(userMessage: string, context: ConversationContext): { response: AIResponse; updatedContext: ConversationContext } {
  const ctx = { ...context };
  ctx.turnCount++;

  // Update gender
  ctx.gender = extractGender(userMessage, ctx);

  // Update budget
  const budget = extractBudget(userMessage);
  if (budget !== 'unknown') ctx.budget = budget;

  // Update hair/skin type
  const hairType = extractHairType(userMessage);
  if (hairType) ctx.hairType = hairType;
  const skinType = extractSkinType(userMessage);
  if (skinType) ctx.skinType = skinType;

  // Classify intent
  const intent = classifyIntent(userMessage, ctx);
  ctx.lastIntent = intent;

  let response: AIResponse;

  switch (intent) {
    case 'greeting':
      response = greetingResponse(ctx);
      break;
    case 'farewell':
      response = farewellResponse();
      break;
    case 'thanks':
      response = thanksResponse();
      break;
    case 'location':
      response = locationResponse();
      break;
    case 'hours':
      response = hoursResponse();
      break;
    case 'membership':
      response = membershipResponse(ctx);
      break;
    case 'pricing':
      response = pricingResponse(userMessage, ctx);
      break;
    case 'comparison':
      response = comparisonResponse(userMessage);
      break;
    case 'booking':
      response = bookingResponse(ctx);
      break;
    case 'hair_concern':
      response = hairConsultation(userMessage, ctx);
      break;
    case 'skin_concern':
      response = skinConsultation(userMessage, ctx);
      break;
    case 'bridal':
      response = bridalResponse(ctx);
      break;
    case 'mens_grooming':
      response = mensResponse(ctx);
      break;
    case 'kids':
      response = {
        text: `👧🧒 **Kids Haircuts at Classic Pearl:**\n\nWe welcome children (boys & girls below 10 years) with patient, gentle, and trendy haircuts!\n\n**Price:** Regular ₹300 | 💎 Member ₹240\n**Duration:** ~25 minutes\n\nOur stylists are experienced with kids and make the session fun and comfortable.\n\nWould you like to book a kids' haircut?`,
        services: ALL_SERVICES.filter(s => s.id === 'kids-haircut'),
        quickReplies: ['Book kids haircut', 'Adult haircuts', 'View all services']
      };
      break;
    case 'aftercare':
      response = aftercareResponse(userMessage);
      break;
    case 'products':
      response = productsResponse();
      break;
    case 'duration':
      const durationServices = findMatchingServices(userMessage, 3);
      if (durationServices.length > 0) {
        const durations = durationServices.map(s => `• **${s.name}** — ⏱ ${s.duration}`).join('\n');
        response = {
          text: `Here are the durations:\n\n${durations}\n\nPlease note these are approximate — your stylist may adjust based on hair length and condition.`,
          quickReplies: ['Book appointment', 'View pricing', 'Other services']
        };
      } else {
        response = {
          text: `Which service would you like to know the duration for? I can tell you the exact sitting time for any treatment!`,
          quickReplies: ['Hair Botox duration', 'Nano Plastia duration', 'Facial duration', 'Balayage duration']
        };
      }
      break;
    case 'complaint':
      response = complaintResponse();
      break;
    case 'recommendation':
      // Check what they want recommendations for
      if (containsAny(userMessage.toLowerCase(), ['hair', 'frizz', 'damage', 'color', 'straight', 'curl'])) {
        response = hairConsultation(userMessage, ctx);
      } else if (containsAny(userMessage.toLowerCase(), ['skin', 'face', 'glow', 'tan', 'acne', 'pimple'])) {
        response = skinConsultation(userMessage, ctx);
      } else if (containsAny(userMessage.toLowerCase(), ['bridal', 'wedding', 'bride'])) {
        response = bridalResponse(ctx);
      } else if (containsAny(userMessage.toLowerCase(), ['men', 'beard', 'male', 'gents'])) {
        response = mensResponse(ctx);
      } else {
        response = {
          text: `I'd love to recommend the perfect service! What area would you like help with?`,
          quickReplies: ['Hair problems', 'Skin & facials', "Men's grooming", 'Bridal makeover', 'Best value combos']
        };
      }
      break;
    default:
      response = unknownResponse(userMessage, ctx);
  }

  // Proactive membership suggestion (once per conversation, after 3rd turn)
  if (!ctx.askedAboutMembership && ctx.turnCount === 3 && intent !== 'membership') {
    response.text += `\n\n💡 **Quick tip:** Have you heard about our Pearl Membership? For just ₹199/year, you get member pricing on every service — saving ₹300 to ₹1,200 per visit!`;
    if (response.quickReplies) {
      response.quickReplies.push('Tell me about membership');
    }
    ctx.askedAboutMembership = true;
  }

  return { response, updatedContext: ctx };
}
