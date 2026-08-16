import { SEOLandingPageData } from '@/lib/types';

export const SEO_PAGES: Record<string, SEOLandingPageData> = {
  'korean-facial-bengaluru': {
    slug: 'korean-facial-bengaluru',
    keyword: 'Korean Glass Skin Facial in Bengaluru',
    metaTitle: 'Korean Glass Skin Facial in Arekere, Bengaluru | Classic Pearl Unisex Salon',
    metaDescription: 'Experience authentic Korean Glass Skin Facial in Arekere, Bengaluru. Deep peptide infusion & hyaluronic hydration. Regular ₹2,800 | Member ₹2,240. Book online!',
    h1: 'Authentic Korean Glass Skin Facial in Arekere, Bengaluru',
    subheadline: 'Multi-step cellular hydration, peptide infusion, and hydro-jelly lock for high-gloss porcelain glow with zero downtime.',
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    serviceId: 'korean-glass-facial',
    regularPrice: 2800,
    memberPrice: 2240,
    duration: '75 mins',
    whyChoosePoints: [
      { title: 'Authentic Korean Formulations', desc: 'We use genuine imported peptide ampoules and hyaluronic essences that deeply hydrate without clogging pores.' },
      { title: 'High-Gloss Porcelain Finish', desc: 'Witness immediate glass-like luminescence and skin elasticity right after your 75-minute session.' },
      { title: 'Safe for All Indian Skin Tones', desc: 'Non-irritating, gentle botanical formula designed specifically to treat pollution-induced dullness and dehydration in Bengaluru.' },
      { title: 'Transparent Member Pricing', desc: 'Save ₹560 instantly on every session with our ₹199/year Pearl Membership.' }
    ],
    processSteps: [
      { step: '01', title: 'Double Botanical Cleanse', desc: 'Gentle oil & foam cleanse removing environmental grime and sebum.' },
      { step: '02', title: 'Enzymatic Micro-Peel', desc: 'Soft fruit AHA exfoliation revealing fresh, smooth cellular layers.' },
      { step: '03', title: 'Peptide Ampoule Infusion', desc: 'Deep ultrasonic dermal saturation of active collagen-boosting peptides.' },
      { step: '04', title: 'Hydro-Jelly Glass Mask', desc: 'Cooling antioxidant jelly wrap locking in moisture for 18+ hours.' }
    ],
    faqs: [
      { q: 'How long does the Korean Glass Skin glow last?', a: 'The immediate porcelain radiance is visible right after the session and lasts 3 to 4 weeks with regular skincare maintenance.' },
      { q: 'Is there any redness or downtime after the facial?', a: 'No. Our Korean Glass Skin treatment is completely non-invasive with zero peeling, redness, or downtime.' },
      { q: 'Where is Classic Pearl located in Bengaluru?', a: 'We are located on 80ft BDA Main Road in Arekere, beside Camry Hospital, Bannerghatta Road, Bengaluru 560076.' }
    ],
    relatedLookbookIds: ['lb-korean-glass-skin']
  },

  'hair-botox-bengaluru': {
    slug: 'hair-botox-bengaluru',
    keyword: 'Hair Botox Treatment in Bengaluru',
    metaTitle: 'Hair Botox Treatment in Arekere Bengaluru | Classic Pearl Unisex Salon',
    metaDescription: 'Best Hair Botox treatment in Arekere, Bannerghatta Road Bengaluru. Deep collagen fiber repair & split-end healing. Regular ₹3,800 | Member ₹2,999. Book now!',
    h1: 'Hair BOTOX Fiber Restorative Treatment in Bengaluru',
    subheadline: 'Revive dry, damaged, and chemically treated hair with non-chemical collagen plumping and caviar peptides.',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    serviceId: 'w-botox-hair',
    regularPrice: 3800,
    memberPrice: 2999,
    duration: '120 mins',
    whyChoosePoints: [
      { title: 'Zero Harsh Chemicals', desc: 'Unlike traditional treatments, Hair Botox contains no formaldehyde or harsh relaxers—it is 100% deep conditioning nutrition.' },
      { title: 'Retains Natural Volume & Waves', desc: 'Heals split ends and frizz while maintaining your hair’s natural bounce and texture.' },
      { title: 'Restores Chemically Damaged Strands', desc: 'Ideal for hair damaged by past bleaching, frequent heat styling, or Bengaluru hard water.' },
      { title: 'Long-Lasting 3–5 Months Results', desc: 'Enjoy soft, manageable, silky hair with minimal daily styling effort.' }
    ],
    processSteps: [
      { step: '01', title: 'Clarifying Detox Wash', desc: 'Deep scalp and cuticle cleanse removing silicone buildup.' },
      { step: '02', title: 'Botox Collagen Infusion', desc: 'Section-by-section application of collagen, keratin, and peptide mask.' },
      { step: '03', title: 'Steam Thermo-Seal', desc: 'Gentle heat activation allowing proteins to bond with hair cortex.' },
      { step: '04', title: 'Hydrating Blow-Dry', desc: 'Silky smooth finish with take-home maintenance tips.' }
    ],
    faqs: [
      { q: 'What is the difference between Hair Botox and Keratin?', a: 'Keratin is primarily a smoothing and straightening treatment, while Hair Botox is an intensive deep restorative treatment that heals damaged fibers without flattening your natural volume.' },
      { q: 'How much does Hair Botox cost at Classic Pearl?', a: 'Our regular price is ₹3,800, and Pearl Members pay only ₹2,999 (saving ₹801).' },
      { q: 'Can I color my hair after Hair Botox?', a: 'Yes, but we recommend waiting 1 to 2 weeks after treatment for optimal color adhesion.' }
    ],
    relatedLookbookIds: ['lb-hair-botox']
  },

  'nano-plastia-bengaluru': {
    slug: 'nano-plastia-bengaluru',
    keyword: 'Nano Plastia Hair Treatment in Bengaluru',
    metaTitle: 'Nano Plastia Hair Treatment in Bengaluru | Classic Pearl Unisex Salon',
    metaDescription: 'Organic Nano Plastia silk hair treatment in Arekere, Bengaluru. 100% Formaldehyde-free mirror straightness. Regular ₹4,500 | Member ₹3,600. Book appointment!',
    h1: 'Organic Nano Plastia Silk Mirror Treatment in Bengaluru',
    subheadline: 'The revolutionary organic hair straightening treatment with amino acids, zero formaldehyde, and 6+ months of mirror reflection shine.',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    serviceId: 'w-nano-plastia',
    regularPrice: 4500,
    memberPrice: 3600,
    duration: '180 mins',
    whyChoosePoints: [
      { title: '100% Organic & Formaldehyde-Free', desc: 'No burning eyes, no harsh fumes, and completely safe for long-term hair health.' },
      { title: 'Pin-Straight Mirror Reflection', desc: 'Penetrates deeply at the nano-cellular level to deliver unmatched gloss and smooth straightness.' },
      { title: 'Blocks Humidity & Hard Water Frizz', desc: 'Formulated to keep hair frizz-free even during peak rainy or humid seasons in Bengaluru.' },
      { title: 'Saves Time Every Morning', desc: 'Wake up with salon-ready sleek hair with zero daily flat-ironing needed.' }
    ],
    processSteps: [
      { step: '01', title: 'Deep Clarification', desc: 'Opens hair cuticles to receive organic nanoparticles.' },
      { step: '02', title: 'Nano Bio-Infusion', desc: 'Customized amino acid and organic acid saturation.' },
      { step: '03', title: 'Precision Thermal Lock', desc: 'Micro-controlled titanium sealing for glass reflection.' },
      { step: '04', title: 'Neutralizing Rinse & Style', desc: 'Immediate reveal of soft, glossy straight hair.' }
    ],
    faqs: [
      { q: 'How long does Nano Plastia last?', a: 'Nano Plastia lasts between 6 to 8 months with sulfate-free shampoo aftercare.' },
      { q: 'Is Nano Plastia safe for bleached or colored hair?', a: 'Yes! Because it is organic and rich in amino acids, it restores moisture and adds immense shine to colored hair.' }
    ],
    relatedLookbookIds: ['lb-nano-plastia-silk']
  },

  'balayage-bengaluru': {
    slug: 'balayage-bengaluru',
    keyword: 'Balayage Hair Color in Bengaluru',
    metaTitle: 'French Balayage & Ombre Hair Color in Arekere Bengaluru | Classic Pearl',
    metaDescription: 'Expert French Balayage & Ombre in Arekere, Bengaluru. Seamless hand-painted highlights, ammonia-free glaze. Regular ₹4,200 | Member ₹3,360. Book now!',
    h1: 'Seamless French Balayage & Ombre in Bengaluru',
    subheadline: 'Hand-painted multidimensional highlights customized to your bone structure and skin undertone with soft natural grow-out.',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    serviceId: 'w-balayage-ombre',
    regularPrice: 4200,
    memberPrice: 3360,
    duration: '180 mins',
    whyChoosePoints: [
      { title: 'No Harsh Grow-Out Lines', desc: 'Balayage blends softly into your natural root color, so you never get a harsh line of demarcation as your hair grows.' },
      { title: 'Custom Gloss Glaze Toning', desc: 'Choose from champagne, honey caramel, chocolate mocha, rose gold, or ash blonde tones.' },
      { title: 'Bond-Building Protection', desc: 'We add organic bond-builders to protect hair strength during the lightening process.' },
      { title: 'Expert Colorists in Arekere', desc: 'Our stylists specialize in modern freehand blending for Indian hair textures.' }
    ],
    processSteps: [
      { step: '01', title: 'Chromatic Consultation', desc: 'Matching tone to your skin undertone and hair history.' },
      { step: '02', title: 'Freehand Painting', desc: 'Custom placement highlighting your natural facial geometry.' },
      { step: '03', title: 'Tonal Gloss Glaze', desc: 'Sealing cuticles with high-shine translucent pigment.' },
      { step: '04', title: 'Hydrating Post-Color Wash', desc: 'Nourishing conditioning rinse and bouncy blow-dry.' }
    ],
    faqs: [
      { q: 'How often do I need to touch up Balayage?', a: 'Because of the soft root melt, Balayage only requires touch-ups every 4 to 6 months, making it very low-maintenance!' },
      { q: 'Will Balayage damage my hair?', a: 'At Classic Pearl, we use ammonia-free bond-protecting lighteners that maintain hair integrity and softness.' }
    ],
    relatedLookbookIds: ['lb-balayage-champagne']
  },

  'keratin-treatment-bengaluru': {
    slug: 'keratin-treatment-bengaluru',
    keyword: 'Keratin Hair Treatment in Bengaluru',
    metaTitle: 'Keratin Hair Smoothing Treatment in Bengaluru | Classic Pearl Unisex Salon',
    metaDescription: 'Professional Keratin Hair Smoothing in Arekere Bengaluru. Eliminate humidity frizz and get silky hair. Regular ₹3,500 | Member ₹2,800. Book online!',
    h1: 'Professional Keratin Hair Smoothing in Bengaluru',
    subheadline: 'Eliminate humidity frizz and enjoy soft, manageable, silky hair with long-lasting protein restoration.',
    heroImage: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=80',
    serviceId: 'w-keratin-treatment',
    regularPrice: 3500,
    memberPrice: 2800,
    duration: '150 mins',
    whyChoosePoints: [
      { title: 'Total Frizz Defense', desc: 'Blocks out Bengaluru monsoon and summer humidity completely.' },
      { title: 'Velvet Soft Manageability', desc: 'Cuts your morning blow-dry and styling routine in half.' },
      { title: 'Adds Intense Gloss', desc: 'Seals protein into every cuticle for continuous shine.' }
    ],
    processSteps: [
      { step: '01', title: 'Clarifying Cleanse', desc: 'Prepares hair shaft for deep keratin absorption.' },
      { step: '02', title: 'Keratin Complex Saturation', desc: 'Even coverage of restorative hydrolyzed keratin proteins.' },
      { step: '03', title: 'Thermal Lock', desc: 'Seals the smooth protective layer onto each strand.' }
    ],
    faqs: [
      { q: 'How long does Keratin treatment last?', a: 'Typically 3 to 5 months depending on hair washing frequency and using sulfate-free shampoo.' }
    ],
    relatedLookbookIds: ['lb-nano-plastia-silk']
  },

  'bridal-makeup-bengaluru': {
    slug: 'bridal-makeup-bengaluru',
    keyword: 'Bridal Makeup & Styling in Bengaluru',
    metaTitle: 'Bridal Makeup & Wedding Styling in Bengaluru | Classic Pearl Unisex Salon',
    metaDescription: '18-Hour Waterproof HD Bridal Makeup & Hair Styling in Arekere, Bengaluru. Pre-wedding trial included. Regular ₹9,500 | Member ₹7,999. Book consultation!',
    h1: 'Signature 18-Hour HD Bridal Makeup & Styling in Bengaluru',
    subheadline: 'Waterproof HD airbrush makeup, couture bridal hairstyles, and saree draping designed for your unforgettable wedding day.',
    heroImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80',
    serviceId: 'bridal-complete-package',
    regularPrice: 9500,
    memberPrice: 7999,
    duration: '180 mins',
    whyChoosePoints: [
      { title: '18-Hour Waterproof Durability', desc: 'Formulated to withstand humidity, sweat, tears, and long wedding ceremonies effortlessly.' },
      { title: 'Pre-Wedding Trial Session Included', desc: 'We test your look weeks in advance so your wedding day is 100% stress-free.' },
      { title: 'Complete Bridal Package', desc: 'Includes hair styling with veil/flower setting, HD airbrush makeup, eyelashes, lenses, and saree draping.' }
    ],
    processSteps: [
      { step: '01', title: 'Bridal Consultation & Trial', desc: 'Aligning with your outfit, jewelry, and ceremony lighting.' },
      { step: '02', title: 'Pre-Bridal Skin Prep', desc: 'Oxygenating hydrating facial base.' },
      { step: '03', title: 'HD Airbrush Application', desc: 'Flawless, lightweight coverage.' },
      { step: '04', title: 'Couture Hair & Draping', desc: 'Traditional or contemporary hairstyle with veil & jewelry setting.' }
    ],
    faqs: [
      { q: 'Do you offer destination or on-venue bridal services?', a: 'Yes, our bridal makeup team travels to venues across Bengaluru and destination locations.' }
    ],
    relatedLookbookIds: ['lb-bridal-makeover']
  },

  'mens-salon-arekere': {
    slug: 'mens-salon-arekere',
    keyword: "Men's Salon in Arekere Bengaluru",
    metaTitle: "Best Men's Salon & Grooming in Arekere Bengaluru | Classic Pearl",
    metaDescription: "Top Men's salon in Arekere, Bannerghatta Road Bengaluru. Precision haircuts, beard styling, de-tan, and relaxing massage combos. Regular ₹400 | Member ₹320. Book now!",
    h1: "Premium Men's Grooming & Hair Styling in Arekere, Bengaluru",
    subheadline: "Executive scissor cuts, sharp beard razor lineups, charcoal facials, and complete de-stressing grooming packages.",
    heroImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    serviceId: 'm-haircut-advance',
    regularPrice: 400,
    memberPrice: 320,
    duration: '40 mins',
    whyChoosePoints: [
      { title: 'Sharp Scissor & Fade Cuts', desc: 'Customized to your facial geometry and hair density.' },
      { title: 'Hot Towel Beard Alignment', desc: 'Clean straight-razor contours with soothing after-balm.' },
      { title: 'Value Grooming Combos', desc: 'Haircut + Beard + Head & Foot Massage for just ₹880 (Member price).' }
    ],
    processSteps: [
      { step: '01', title: 'Style Diagnostic', desc: 'Choosing the right fade taper or classic scissor cut.' },
      { step: '02', title: 'Precision Cut & Wash', desc: 'Clean scissor/clipper work with refreshing scalp wash.' },
      { step: '03', title: 'Matte/Shine Finish', desc: 'Styling with premium pomade/matte clay.' }
    ],
    faqs: [
      { q: 'Where are you located in Arekere?', a: 'MNK Arcade, 1st Floor, 80ft BDA Main Road, beside Camry Hospital, Arekere, Bengaluru 560076.' },
      { q: 'What are your salon timings for men?', a: 'We are open 10:00 AM to 09:00 PM everyday from Monday to Sunday.' }
    ],
    relatedLookbookIds: ['lb-mens-fade-beard']
  },

  'hair-color-bengaluru': {
    slug: 'hair-color-bengaluru',
    keyword: 'Hair Color Salon in Bengaluru',
    metaTitle: 'Ammonia-Free Hair Color & Highlights in Bengaluru | Classic Pearl',
    metaDescription: '100% Ammonia-free global hair color, highlights, and root touch-ups in Arekere Bengaluru. Regular ₹2,400 | Member ₹1,920. Book online!',
    h1: 'Ammonia-Free Hair Color & Highlights in Arekere, Bengaluru',
    subheadline: 'Rich, lustrous shades with 100% grey coverage and zero ammonia damage.',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    serviceId: 'w-global-color',
    regularPrice: 2400,
    memberPrice: 1920,
    duration: '90 mins',
    whyChoosePoints: [
      { title: '100% Ammonia-Free', desc: 'Gentle on your scalp and hair shaft with zero unpleasant chemical smell.' },
      { title: 'Complete Grey Coverage', desc: 'Natural uniform shade matching from roots to ends.' },
      { title: 'Gloss Lock Technology', desc: 'Maintains vibrant color brilliance wash after wash.' }
    ],
    processSteps: [
      { step: '01', title: 'Shade Matching', desc: 'Selecting the perfect undertone for your skin.' },
      { step: '02', title: 'Even Application', desc: 'Sectioned application ensuring zero missed patches.' },
      { step: '03', title: 'Color Lock Wash', desc: 'Acidic pH rinse that seals the pigment into the cuticles.' }
    ],
    faqs: [
      { q: 'Is ammonia-free hair color long-lasting?', a: 'Yes! Our professional ammonia-free formulations provide permanent color and 100% grey coverage that lasts until your new roots grow in.' }
    ],
    relatedLookbookIds: ['lb-balayage-champagne']
  }
};
