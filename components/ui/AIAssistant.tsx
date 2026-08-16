'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Send,
  X,
  Bot,
  ArrowRight,
  Calendar,
  MessageSquare,
  Minimize2,
  ChevronDown,
} from 'lucide-react';
import { getWhatsAppConciergeUrl } from '@/lib/whatsapp';
import {
  processMessage,
  createInitialContext,
  ConversationContext,
  AIResponse,
} from '@/lib/ai-engine';
import { ServiceItem } from '@/lib/types';

// ========================
// TYPES
// ========================

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  services?: ServiceItem[];
  quickReplies?: string[];
  timestamp: Date;
}

// ========================
// HELPER: TYPING INDICATOR
// ========================

function TypingIndicator() {
  return (
    <div className="flex items-start gap-2.5 animate-fade-in-up">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C5A059] to-[#DFBA73] flex items-center justify-center flex-shrink-0 shadow-md">
        <Bot className="w-3.5 h-3.5 text-[#0E0F12]" />
      </div>
      <div className="bg-[#1A1C22] border border-white/10 rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-[#C5A059] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="w-2 h-2 bg-[#C5A059] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="w-2 h-2 bg-[#C5A059] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>
      </div>
    </div>
  );
}

// ========================
// HELPER: SERVICE CARD
// ========================

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="bg-[#14161B] border border-white/10 rounded-xl p-3 hover:border-[#C5A059]/40 transition-colors group">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="text-[11px] font-bold text-[#FBF9F5] leading-tight flex-1">
          {service.name}
        </h4>
        <span className="text-[10px] font-bold text-[#C5A059] whitespace-nowrap">
          ₹{service.memberPrice}
        </span>
      </div>
      <p className="text-[10px] text-[#A39E93] mb-2 line-clamp-2">{service.tagline}</p>
      <div className="flex items-center justify-between">
        <span className="text-[9px] text-[#A39E93]">{service.duration}</span>
        <Link
          href="/book"
          className="text-[9px] font-bold text-[#C5A059] hover:text-[#DFBA73] flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Book <ArrowRight className="w-2.5 h-2.5" />
        </Link>
      </div>
    </div>
  );
}

// ========================
// HELPER: FORMAT MESSAGE TEXT
// ========================

function FormatText({ text }: { text: string }) {
  // Parse markdown-like formatting
  const lines = text.split('\n');

  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        // Bold: **text**
        const formatted = line.replace(
          /\*\*(.*?)\*\*/g,
          '<strong class="text-[#FBF9F5] font-semibold">$1</strong>'
        );
        // Strikethrough: ~~text~~
        const withStrike = formatted.replace(
          /~~(.*?)~~/g,
          '<del class="text-[#A39E93]/60">$1</del>'
        );
        // Emoji bullets
        const isListItem = /^[•✅🔹🏆💍🌸💃💡🧴📍⏰📞📱1️⃣2️⃣3️⃣4️⃣]/.test(line.trim());
        const isEmpty = line.trim() === '';

        if (isEmpty) return <div key={i} className="h-1.5" />;

        return (
          <p
            key={i}
            className={`text-[12px] leading-[1.6] ${isListItem ? 'pl-0.5' : ''}`}
            dangerouslySetInnerHTML={{ __html: withStrike }}
          />
        );
      })}
    </div>
  );
}

// ========================
// MAIN COMPONENT
// ========================

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<ConversationContext>(createInitialContext());
  const [hasSeenWelcome, setHasSeenWelcome] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Detect scroll position for "scroll down" button
  const handleScroll = useCallback(() => {
    const container = messagesContainerRef.current;
    if (!container) return;
    const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
    setShowScrollDown(!isNearBottom);
  }, []);

  // Send welcome message on first open
  const handleOpen = () => {
    setIsOpen(true);
    if (!hasSeenWelcome) {
      setHasSeenWelcome(true);
      const welcomeResponse = processMessage('hello', context);
      const welcomeMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        text: welcomeResponse.response.text,
        quickReplies: welcomeResponse.response.quickReplies,
        timestamp: new Date(),
      };
      setMessages([welcomeMsg]);
      setContext(welcomeResponse.updatedContext);
    }
  };

  // Process and send a message
  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      text: text.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate thinking delay (200-800ms for realistic feel)
    const delay = 400 + Math.random() * 400;

    setTimeout(() => {
      const { response, updatedContext } = processMessage(text.trim(), context);

      const assistantMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        text: response.text,
        services: response.services,
        quickReplies: response.quickReplies,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMsg]);
      setContext(updatedContext);
      setIsTyping(false);
    }, delay);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleQuickReply = (reply: string) => {
    // Map quick reply labels to actionable routes or send as message
    if (reply === 'Book appointment' || reply === 'Book online now' || reply === 'Book a slot') {
      window.open('/book', '_blank');
      return;
    }
    if (reply === 'WhatsApp us' || reply === 'WhatsApp booking' || reply === 'WhatsApp salon' || reply === 'WhatsApp consultation' || reply === 'WhatsApp directions') {
      window.open(getWhatsAppConciergeUrl('Hi! I found you via the website.'), '_blank');
      return;
    }
    if (reply === 'Call salon') {
      window.open('tel:+918310730322', '_self');
      return;
    }
    if (reply === 'View refund policy') {
      window.open('/refund-policy', '_blank');
      return;
    }
    if (reply === 'View all services' || reply === 'All services' || reply === 'See all prices') {
      window.open('/services', '_blank');
      return;
    }
    if (reply === 'Get directions') {
      window.open('https://maps.google.com/?q=Classic+Pearl+Unisex+Salon+Arekere+Bengaluru', '_blank');
      return;
    }
    sendMessage(reply);
  };

  return (
    <>
      {/* ======= FLOATING ACTION BUTTON ======= */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#C5A059] to-[#DFBA73] text-[#0E0F12] flex items-center justify-center shadow-2xl shadow-[#C5A059]/30 hover:scale-110 transition-transform duration-300 group"
          aria-label="Open AI Beauty Consultant"
        >
          <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#C5A059]/20 animate-ping pointer-events-none"></span>
        </button>
      )}

      {/* ======= CHAT PANEL ======= */}
      {isOpen && (
        <div
          className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[400px] h-[100dvh] sm:h-[600px] bg-[#0E0F12] sm:rounded-2xl shadow-2xl border-0 sm:border sm:border-[#C5A059]/25 flex flex-col overflow-hidden"
          style={{
            animation: 'fadeInUp 0.3s ease-out',
          }}
        >
          {/* ---- HEADER ---- */}
          <div className="relative bg-gradient-to-r from-[#17181C] to-[#1A1C22] border-b border-[#C5A059]/20 px-4 py-3.5 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C5A059] to-[#DFBA73] flex items-center justify-center shadow-lg">
                <Bot className="w-4.5 h-4.5 text-[#0E0F12]" />
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-[#FBF9F5] tracking-wide">Pearl AI Consultant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] text-emerald-400 font-medium">Always Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Minimize chat"
              >
                <Minimize2 className="w-4 h-4 text-[#A39E93]" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 text-[#A39E93]" />
              </button>
            </div>
          </div>

          {/* ---- MESSAGES ---- */}
          <div
            ref={messagesContainerRef}
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto px-3 py-4 space-y-4 scrollbar-none"
          >
            {messages.map((msg) => (
              <div key={msg.id}>
                {msg.role === 'user' ? (
                  /* User Message */
                  <div className="flex justify-end animate-fade-in-up">
                    <div className="bg-gradient-to-br from-[#C5A059] to-[#DFBA73] text-[#0E0F12] rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[80%] shadow-md">
                      <p className="text-[12px] font-medium leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ) : (
                  /* Assistant Message */
                  <div className="animate-fade-in-up">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C5A059] to-[#DFBA73] flex items-center justify-center flex-shrink-0 shadow-md mt-0.5">
                        <Bot className="w-3.5 h-3.5 text-[#0E0F12]" />
                      </div>
                      <div className="bg-[#1A1C22] border border-white/8 rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%] shadow-sm">
                        <FormatText text={msg.text} />
                      </div>
                    </div>

                    {/* Service Cards */}
                    {msg.services && msg.services.length > 0 && (
                      <div className="ml-[38px] mt-2 grid grid-cols-1 gap-2">
                        {msg.services.slice(0, 3).map((service) => (
                          <ServiceCard key={service.id} service={service} />
                        ))}
                      </div>
                    )}

                    {/* Quick Replies */}
                    {msg.quickReplies && msg.quickReplies.length > 0 && (
                      <div className="ml-[38px] mt-2 flex flex-wrap gap-1.5">
                        {msg.quickReplies.map((reply, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleQuickReply(reply)}
                            className="text-[10px] font-semibold text-[#DFBA73] bg-[#14161B] border border-[#C5A059]/30 hover:border-[#C5A059] hover:bg-[#C5A059]/10 px-3 py-1.5 rounded-full transition-all"
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && <TypingIndicator />}

            <div ref={messagesEndRef} />
          </div>

          {/* Scroll Down Button */}
          {showScrollDown && (
            <button
              onClick={scrollToBottom}
              className="absolute bottom-[72px] left-1/2 -translate-x-1/2 bg-[#1A1C22] border border-[#C5A059]/30 text-[#C5A059] p-1.5 rounded-full shadow-lg hover:bg-[#C5A059]/10 transition-all z-10"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          )}

          {/* ---- INPUT BAR ---- */}
          <div className="border-t border-white/10 bg-[#14161B] px-3 py-3 flex-shrink-0">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about hair, skin, pricing, booking..."
                className="flex-1 bg-[#0E0F12] border border-white/10 focus:border-[#C5A059]/50 text-[#FBF9F5] text-[12px] rounded-xl px-4 py-3 outline-none transition-colors placeholder:text-[#A39E93]/60"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C5A059] to-[#DFBA73] text-[#0E0F12] flex items-center justify-center disabled:opacity-30 hover:shadow-lg hover:shadow-[#C5A059]/20 transition-all disabled:hover:shadow-none"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Action Bar */}
            <div className="flex items-center justify-between mt-2 px-1">
              <Link
                href="/book"
                className="flex items-center gap-1 text-[9px] font-bold text-[#C5A059] hover:text-[#DFBA73] transition-colors"
              >
                <Calendar className="w-3 h-3" />
                <span>BOOK NOW</span>
              </Link>
              <a
                href={getWhatsAppConciergeUrl('Hi, I was chatting with the AI consultant on your website.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[9px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3 h-3" />
                <span>WHATSAPP</span>
              </a>
              <span className="text-[8px] text-[#A39E93]/50">
                Powered by Classic Pearl AI
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
