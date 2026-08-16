'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, MessageSquare, Send, X, Bot, ArrowRight, UserCheck } from 'lucide-react';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';

interface FAQAnswer {
  keywords: string[];
  answer: string;
  recommendedServiceId?: string;
  recommendedServiceName?: string;
  recommendedPrice?: string;
}

const AI_KNOWLEDGE_BASE: FAQAnswer[] = [
  {
    keywords: ['pigmentation', 'tan', 'dark spots', 'tanning', 'dullness'],
    answer: 'For stubborn pigmentation and sun tan, we highly recommend our O3+ Whitening Facial (₹1,920 for Members) or our Korean Glass Skin Facial (₹2,240 for Members). Both actively oxygenate the dermis and break down sun-induced melanin.',
    recommendedServiceId: 'korean-glass-facial',
    recommendedServiceName: 'Korean Glass Skin Facial',
    recommendedPrice: 'Member: ₹2,240'
  },
  {
    keywords: ['botox', 'hair botox', 'frizz', 'damage', 'split ends'],
    answer: 'Hair BOTOX is our top non-chemical restorative treatment. It infuses collagen, amino acids, and peptides into damaged hair fibers. It eliminates frizz while keeping your natural volume and waves (Member: ₹2,999, lasts 3–5 months).',
    recommendedServiceId: 'w-botox-hair',
    recommendedServiceName: 'Hair BOTOX Fiber Restorative',
    recommendedPrice: 'Member: ₹2,999'
  },
  {
    keywords: ['nano', 'nano plastia', 'straight', 'straightening'],
    answer: 'Nano Plastia is our 100% organic, formaldehyde-free hair straightening treatment. It gives pin-straight mirror shine reflection that lasts 6 to 8 months (Member: ₹3,600).',
    recommendedServiceId: 'w-nano-plastia',
    recommendedServiceName: 'Nano Plastia Silk Mirror Treatment',
    recommendedPrice: 'Member: ₹3,600'
  },
  {
    keywords: ['balayage', 'highlights', 'color', 'grey', 'hair color'],
    answer: 'Our French Balayage is hand-painted freehand with zero harsh grow-out lines (Member: ₹3,360). For 100% grey coverage, we use gentle ammonia-free global colors (Member: ₹1,920).',
    recommendedServiceId: 'w-balayage-ombre',
    recommendedServiceName: 'French Balayage & Ombre',
    recommendedPrice: 'Member: ₹3,360'
  },
  {
    keywords: ['bridal', 'wedding', 'makeup', 'airbrush'],
    answer: 'Our Signature Bridal Package includes 18-hour waterproof HD airbrush makeup, couture hair styling, and saree draping with a complimentary pre-wedding trial (Member: ₹7,999).',
    recommendedServiceId: 'bridal-complete-package',
    recommendedServiceName: 'Signature Bridal Makeover',
    recommendedPrice: 'Member: ₹7,999'
  },
  {
    keywords: ['men', 'beard', 'shave', 'grooming', 'fade'],
    answer: 'For gentlemen, our Executive Grooming Combo includes an advance haircut, beard styling with hot towel steam, hair wash, and head & foot massage for just ₹880 (Member price).',
    recommendedServiceId: 'm-combo-executive',
    recommendedServiceName: 'Men Executive Grooming Combo',
    recommendedPrice: 'Member: ₹880'
  },
  {
    keywords: ['membership', 'pearl member', 'discount', '199'],
    answer: 'The Pearl Membership costs just ₹199 for 365 days. It gives you 20% to 30% savings on every salon service, priority slot booking, and complimentary scalp analysis with no minimum spend.',
    recommendedServiceId: 'membership',
    recommendedServiceName: 'Pearl Membership (₹199/yr)',
    recommendedPrice: 'Save ₹300–₹1,200/visit'
  },
  {
    keywords: ['location', 'address', 'timing', 'time', 'hours', 'where', 'open'],
    answer: 'Classic Pearl Unisex Salon is located at MNK Arcade, 1st Floor, 80ft BDA Main Road, beside Camry Hospital, Arekere, Bengaluru 560076. We are open 10:00 AM to 09:00 PM everyday (Monday to Sunday).',
  }
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string; linkId?: string; linkName?: string; price?: string }>>([
    {
      sender: 'ai',
      text: 'Hello! I am your Classic Pearl Beauty AI Assistant. Ask me anything about hair treatments, skin facials, prices, or recommendations for your hair/skin type!'
    }
  ]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || userInput).trim().toLowerCase();
    if (!query) return;

    const newMessages = [...messages, { sender: 'user' as const, text: textToSend || userInput }];
    setUserInput('');

    // Search knowledge base
    let matched = AI_KNOWLEDGE_BASE.find(item => 
      item.keywords.some(k => query.includes(k))
    );

    let responseText = matched
      ? matched.answer
      : `I recommend visiting our salon in Arekere or messaging our expert stylists on WhatsApp for a personalized consultation. You can also ask me about "Hair Botox", "Nano Plastia", "Korean Facial", "Bridal", or "Pearl Membership"!`;

    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          sender: 'ai',
          text: responseText,
          linkId: matched?.recommendedServiceId,
          linkName: matched?.recommendedServiceName,
          price: matched?.recommendedPrice
        }
      ]);
    }, 300);
  };

  return (
    <div className="fixed bottom-20 right-4 sm:right-6 z-50">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#DFBA73] hover:to-[#C5A059] text-[#0E0F12] p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl flex items-center space-x-2 font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 border border-white/20"
          aria-label="Open AI Beauty Assistant"
        >
          <Sparkles className="w-4 h-4" />
          <span className="hidden sm:inline">Ask AI Beauty Assistant</span>
          <span className="sm:hidden font-sans">AI Guide</span>
        </button>
      )}

      {/* Interactive Modal Box */}
      {isOpen && (
        <div className="w-[90vw] sm:w-96 bg-[#14161B] border border-[#C5A059]/40 rounded-2xl shadow-2xl overflow-hidden text-[#FBF9F5] flex flex-col h-[480px] animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="bg-[#17181C] p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#DFBA73]">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-[#FBF9F5]">Classic Pearl AI Guide</h4>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Instant Hair & Skin Answers
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#A39E93] hover:text-white p-1 rounded-full bg-white/5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Prompts Bar */}
          <div className="bg-[#0E0F12] px-3 py-2 border-b border-white/5 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-[11px]">
            {['Hair Botox', 'Korean Facial', 'Nano Plastia', 'Membership ₹199', 'Timings'].map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="bg-[#17181C] hover:bg-[#22242B] border border-[#C5A059]/30 text-[#DFBA73] px-2.5 py-1 rounded-full whitespace-nowrap transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#C5A059] text-[#0E0F12] font-medium rounded-tr-none'
                      : 'bg-[#1A1C22] text-[#FBF9F5] border border-white/5 rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>

                {/* Service Recommendation Card inside Chat */}
                {m.linkName && (
                  <div className="mt-2 p-2.5 bg-[#0E0F12] border border-[#C5A059]/40 rounded-lg max-w-[85%] flex items-center justify-between gap-2 shadow">
                    <div>
                      <strong className="text-[#FBF9F5] block text-[11px]">{m.linkName}</strong>
                      {m.price && <span className="text-[#DFBA73] font-bold text-[10px] block">{m.price}</span>}
                    </div>
                    <Link
                      href={m.linkId === 'membership' ? '/#membership' : `/book?service=${encodeURIComponent(m.linkId || '')}`}
                      onClick={() => setIsOpen(false)}
                      className="bg-[#C5A059] text-[#0E0F12] px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider whitespace-nowrap"
                    >
                      Book
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input & WhatsApp Action */}
          <div className="p-3 bg-[#17181C] border-t border-white/10 space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about treatments, pricing..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-1 bg-[#0E0F12] border border-white/15 rounded-lg px-3 py-2 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#C5A059]"
              />
              <button
                type="submit"
                className="bg-[#C5A059] hover:bg-[#DFBA73] text-[#0E0F12] p-2 rounded-lg transition-colors"
                aria-label="Send"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <a
              href={getWhatsAppConciergeUrl('Hello Classic Pearl, I would like advice on finding the right treatment.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-[10px] text-[#A39E93] hover:text-[#DFBA73] flex items-center justify-center gap-1 py-0.5"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>Or chat with human stylist on WhatsApp</span>
            </a>
          </div>

        </div>
      )}
    </div>
  );
}
