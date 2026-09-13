import React, { useState } from 'react';
import { Sparkles, Copy, Check, ArrowRight, Gift } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface SpecialOfferProps {
  onOrderNow: () => void;
}

export const SpecialOffer: React.FC<SpecialOfferProps> = ({ onOrderNow }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BAKERY_INFO.discountCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cute Pastel Offer Banner Box */}
        <div className="relative rounded-[36px] bg-gradient-to-r from-[#FFE5EC] via-[#FFF0F4] to-[#FFE0E9] border-3 border-white p-8 sm:p-12 shadow-kawaii overflow-hidden">
          
          {/* Background Decorative Sprinkles & Hearts */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/40 blur-xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#FFD6E0]/40 blur-xl pointer-events-none" />
          <span className="absolute top-6 right-8 text-2xl animate-float pointer-events-none opacity-80">🎁</span>
          <span className="absolute bottom-6 left-12 text-2xl animate-float-delayed pointer-events-none opacity-80">🎀</span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-[#FFCCD5] text-xs font-extrabold text-[#D83A6F] shadow-sm">
                <Gift className="w-3.5 h-3.5" />
                <span>Sweet Welcome Treat</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#4A2633] tracking-tight">
                “A Little Extra Sweetness! ♡”
              </h2>

              <p className="text-base sm:text-lg text-[#734B58] font-medium max-w-xl">
                Get <span className="font-extrabold text-[#D83A6F] underline decoration-wavy decoration-[#FF8FAB]">20% OFF</span> your first custom cake order or celebration dessert box in Aurangabad!
              </p>

              {/* Coupon Code Pill */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <div className="flex items-center bg-white rounded-full px-4 py-2 border-2 border-dashed border-[#FF8FAB] shadow-sm">
                  <span className="text-xs text-[#8A5666] font-bold mr-2 uppercase tracking-wider">Coupon Code:</span>
                  <span className="font-heading font-extrabold text-sm sm:text-base text-[#D83A6F] tracking-wider">
                    {BAKERY_INFO.discountCode}
                  </span>
                  <button
                    id="copy-coupon-code-btn"
                    onClick={handleCopy}
                    className="ml-3 p-1.5 rounded-full hover:bg-[#FFE5EC] text-[#734B58] hover:text-[#D83A6F] transition-colors"
                    title="Copy code"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-xs font-bold text-[#10B981] animate-in fade-in">
                    Copied to clipboard! ♡
                  </span>
                )}
              </div>
            </div>

            {/* Right Action Button & Graphic */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <button
                id="special-offer-order-now-btn"
                onClick={onOrderNow}
                className="px-9 py-4 rounded-full bg-gradient-to-r from-[#FF758F] to-[#FF4D6D] text-white font-heading text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2.5"
              >
                <span>Order Now ♡</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <span className="text-xs text-[#8A5666] font-medium mt-2">
                Valid on all custom orders this month
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
