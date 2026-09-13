import React from 'react';
import { Heart, Sparkles, UtensilsCrossed, Sun, Award } from 'lucide-react';

export const BakeryStory: React.FC = () => {
  return (
    <section id="story" className="py-16 lg:py-24 relative overflow-hidden bg-[#FFF8F8]">
      
      {/* Decorative Pastel Background Blobs */}
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-[#FFEAEF]/70 blur-3xl -z-10" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-[#FFF0E6]/70 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
        
        {/* Story Section 1: Baked With Love */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image with Organic Pastel Blob */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1 relative">
            <div className="relative">
              {/* Organic blob background */}
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-[40%_60%_70%_30%/40%_50%_60%_55%] bg-gradient-to-tr from-[#FFCCD5] to-[#FFE5EC] absolute inset-0 -rotate-6 animate-pulse-subtle -z-10" />
              
              {/* Circular dessert image with pastel rim */}
              <div className="w-64 h-64 sm:w-84 sm:h-84 rounded-full p-3 bg-white shadow-kawaii border-4 border-[#FFF0F4]">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80"
                  alt="Pastry Chef decorating chocolate cake with love"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating cute badge */}
              <div className="absolute -bottom-4 right-2 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl border border-[#FFCCD5] shadow-kawaii flex items-center gap-2">
                <span className="text-xl">👩‍🍳</span>
                <div>
                  <div className="text-xs font-bold text-[#4A2633]">Handcrafted Recipe</div>
                  <div className="text-[11px] text-[#D83A6F] font-semibold">100% Real Butter</div>
                </div>
              </div>

              {/* Decorative floating hearts */}
              <span className="absolute -top-3 left-4 text-2xl animate-float">💖</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE5EC] border border-[#FFCCD5] text-xs font-bold text-[#D83A6F]">
              <Heart className="w-3.5 h-3.5 fill-[#D83A6F]" />
              <span>Our Wholesome Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#4A2633] leading-tight">
              Baked With <span className="font-hand text-[#D83A6F] text-5xl sm:text-6xl">Love ♡</span>
            </h2>
            <p className="text-[#734B58] text-base sm:text-lg leading-relaxed font-medium">
              At Sweet Crumbs Bakery, we believe that the secret ingredient is always pure affection. Every batch of sponge, every batch of cookies, and every swirl of frosting is prepared from scratch with warmth, patience, and meticulous attention to detail.
            </p>
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#FAD2E1] text-xs font-bold text-[#5A2E3B] shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF758F]" />
                Zero Artificial Preservatives
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#FAD2E1] text-xs font-bold text-[#5A2E3B] shadow-sm flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#FF758F]" />
                Pure Belgian Chocolates
              </span>
            </div>
          </div>
        </div>

        {/* Story Section 2: Made Fresh Every Day */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF0E6] border border-[#FED7AA] text-xs font-bold text-[#EA580C]">
              <Sun className="w-3.5 h-3.5" />
              <span>Oven to Counter Everyday</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#4A2633] leading-tight">
              Made Fresh <span className="font-hand text-[#EA580C] text-5xl sm:text-6xl">Every Day ☀️</span>
            </h2>
            <p className="text-[#734B58] text-base sm:text-lg leading-relaxed font-medium">
              Our ovens preheat before sunrise at 6:00 AM. That enticing aroma of roasting vanilla bean, melted chocolate, and toasted almond fills TV Centre in Aurangabad every single morning. We never sell day-old baked goods — only melt-in-mouth freshness.
            </p>
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#FED7AA] text-xs font-bold text-[#5A2E3B] shadow-sm flex items-center gap-1.5">
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#EA580C]" />
                Fresh Morning Batches
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#FED7AA] text-xs font-bold text-[#5A2E3B] shadow-sm flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#EA580C]" />
                Locally Sourced Farm Dairy
              </span>
            </div>
          </div>

          {/* Image with Organic Pastel Blob */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative">
              {/* Organic peach/cream blob */}
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-[60%_40%_30%_70%/50%_60%_40%_50%] bg-gradient-to-tr from-[#FFE5D9] to-[#FFF0E6] absolute inset-0 rotate-6 animate-pulse-subtle -z-10" />
              
              {/* Circular dessert image */}
              <div className="w-64 h-64 sm:w-84 sm:h-84 rounded-full p-3 bg-white shadow-kawaii border-4 border-[#FFF5EB]">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80"
                  alt="Freshly baked artisan pastries and bread"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating cute badge */}
              <div className="absolute -top-3 right-2 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl border border-[#FED7AA] shadow-kawaii flex items-center gap-2">
                <span className="text-xl">🥐</span>
                <div>
                  <div className="text-xs font-bold text-[#4A2633]">Warm Croissants</div>
                  <div className="text-[11px] text-[#EA580C] font-semibold">Baked at 6:00 AM</div>
                </div>
              </div>

              <span className="absolute bottom-2 left-2 text-2xl animate-float-delayed">✨</span>
            </div>
          </div>
        </div>

        {/* Story Section 3: Sweetness in Every Bite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image with Organic Pastel Blob */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1 relative">
            <div className="relative">
              {/* Organic pink/lavender blob */}
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-[50%_50%_60%_40%/40%_60%_50%_50%] bg-gradient-to-tr from-[#FCE7F3] to-[#FDF2F8] absolute inset-0 -rotate-3 animate-pulse-subtle -z-10" />
              
              {/* Circular dessert image */}
              <div className="w-64 h-64 sm:w-84 sm:h-84 rounded-full p-3 bg-white shadow-kawaii border-4 border-[#FDF2F8]">
                <img
                  src="https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=700&q=80"
                  alt="Close up of silky frosting and berry sprinkles"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating cute badge */}
              <div className="absolute -bottom-3 left-2 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl border border-[#FBCFE8] shadow-kawaii flex items-center gap-2">
                <span className="text-xl">🧁</span>
                <div>
                  <div className="text-xs font-bold text-[#4A2633]">Silky Buttercream</div>
                  <div className="text-[11px] text-[#DB2777] font-semibold">Perfect Sugar Balance</div>
                </div>
              </div>

              <span className="absolute top-2 right-4 text-2xl animate-float">🍓</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCE7F3] border border-[#FBCFE8] text-xs font-bold text-[#DB2777]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pure Culinary Delight</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#4A2633] leading-tight">
              Sweetness in <br />
              <span className="font-hand text-[#DB2777] text-5xl sm:text-6xl">Every Bite 🍰</span>
            </h2>
            <p className="text-[#734B58] text-base sm:text-lg leading-relaxed font-medium">
              We balance sugar delicately so that the rich notes of pure cocoa, fresh strawberries, real vanilla bean, and toasted hazelnut take center stage. Indulge without feeling overwhelmed — sweetness that feels like a warm hug!
            </p>
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#FBCFE8] text-xs font-bold text-[#5A2E3B] shadow-sm flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#DB2777]" />
                Less Sugar, More Flavor
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#FBCFE8] text-xs font-bold text-[#5A2E3B] shadow-sm flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#DB2777]" />
                Artisanal Confectionery
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
