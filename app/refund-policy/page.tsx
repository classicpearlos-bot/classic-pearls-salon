import React from 'react';
import { businessConfig } from '@/lib/config';
import { ShieldCheck, HeartHandshake } from 'lucide-react';

export const metadata = {
  title: 'Satisfaction & Refund Policy | Classic Pearls',
  description: 'Our 7-day service adjustment guarantee and satisfaction commitment at Classic Pearls luxury salon.',
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-[#0E0F12] text-[#FBF9F5] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border-b border-white/10 pb-8 mb-10 space-y-2">
          <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
            OUR ARTISTRY GUARANTEE
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5]">Satisfaction & Refund Policy</h1>
          <p className="text-xs text-[#A39E93]">Dedicated to perfection in every hair and skin ritual.</p>
        </div>

        <div className="space-y-8 text-sm text-[#A39E93] leading-relaxed font-light">
          
          <div className="p-5 bg-[#14161B] rounded-lg border border-[#C5A059]/30 flex items-start gap-4">
            <HeartHandshake className="w-6 h-6 text-[#C5A059] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif text-lg text-[#FBF9F5] font-semibold mb-1">Complimentary 7-Day Adjustment Guarantee</h3>
              <p className="text-xs text-[#A39E93]">
                If any aspect of your haircut, balayage tone, or styling requires refinement, notify us within <strong>7 days</strong> of your visit, and our Creative Directors will gladly provide complimentary adjustments.
              </p>
            </div>
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">1. Service Philosophy & Adjustments</h2>
            <p>
              Due to the bespoke artistic time and customized formulations expended during salon services, direct monetary refunds are generally not offered once a treatment is complete. However, our primary goal is your total delight, and we will perform any necessary color or cutting adjustments free of charge within the guarantee window.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">2. Retail & Take-Home Botanical Products</h2>
            <p>
              Unopened, sealed retail products in original packaging may be returned or exchanged within 14 days of purchase with valid proof of receipt.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="font-serif text-xl text-[#FBF9F5] font-semibold">3. Concierge Support</h2>
            <p>
              For any questions regarding service care or refinement requests, please email <a href={`mailto:${businessConfig.email}`} className="text-[#DFBA73] underline">{businessConfig.email}</a> or connect via WhatsApp.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
