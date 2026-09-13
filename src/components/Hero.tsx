import React from 'react';
import { Heart, Sparkles, ArrowRight, Star, Clock, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreTreats: () => void;
  onOrderCustomCake: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreTreats, onOrderCustomCake }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative Pastel Background Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#FFE4E8]/80 to-[#FFF0F3]/30 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 -right-28 w-96 h-96 rounded-full bg-gradient-to-bl from-[#FFD6E0]/60 to-[#FFF5EB]/40 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-10 left-1/3 w-80 h-80 rounded-full bg-[#FFF0E6]/70 blur-2xl -z-10 pointer-events-none" />

      {/* Floating 2D Decorative Kawaii Elements */}
      <div className="absolute top-12 left-10 text-2xl animate-float pointer-events-none select-none opacity-80">
        🌸
      </div>
      <div className="absolute top-28 left-1/4 text-xl animate-float-delayed pointer-events-none select-none opacity-70">
        ✨
      </div>
      <div className="absolute top-16 right-16 text-3xl animate-float pointer-events-none select-none opacity-90">
        💖
      </div>
      <div className="absolute bottom-20 left-12 text-2xl animate-float-delayed pointer-events-none select-none opacity-80">
        🍓
      </div>
      <div className="absolute top-1/3 right-1/3 text-lg animate-float pointer-events-none select-none opacity-70">
        🌷
      </div>
      <div className="absolute bottom-12 right-20 text-2xl animate-float pointer-events-none select-none opacity-80">
        🧁
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
            {/* Cute Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFF0F3] to-[#FFE5EC] border border-[#FFCCD5] shadow-sm">
              <span className="text-base">🎀</span>
              <span className="text-xs font-bold tracking-wide uppercase text-[#B8325B]">
                Aurangabad’s Favorite Boutique Bakery
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B8B]" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#4A2633] tracking-tight leading-[1.15]">
              Freshly Baked <br />
              <span className="relative inline-block text-[#D83A6F] font-hand text-5xl sm:text-6xl lg:text-7xl font-bold">
                Happiness!
                {/* Handwritten Underline SVG */}
                <svg className="absolute -bottom-3 left-0 w-full h-3 text-[#FFB3C6]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M3 8.5C50 2 150 2 197 9.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#734B58] max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Sweet little treats made with love, just for you. Every cupcake, customized birthday cake, and buttery cookie is whipped to perfection.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-explore-treats-btn"
                onClick={onExploreTreats}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FF758F] to-[#FF4D6D] text-white font-bold text-base shadow-lg shadow-[#FF4D6D]/25 hover:shadow-xl hover:shadow-[#FF4D6D]/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group"
              >
                <span>Explore Our Treats</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-order-custom-cake-btn"
                onClick={onOrderCustomCake}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFF0F4] text-[#C9184A] font-bold text-base border-2 border-[#FFB3C6] hover:bg-[#FFE0E9] hover:border-[#FF8FAB] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Order Custom Cake ♡</span>
              </button>
            </div>

            {/* Value Props Row */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-[#FCD5DF] max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1 text-[#D83A6F] font-bold text-sm">
                  <Star className="w-4 h-4 fill-[#FFB703] text-[#FFB703]" />
                  <span>4.9 / 5</span>
                </div>
                <span className="text-xs text-[#8F5969]">Over 500+ Sweet Reviews</span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1 text-[#D83A6F] font-bold text-sm">
                  <Clock className="w-4 h-4 text-[#D83A6F]" />
                  <span>Fresh Daily</span>
                </div>
                <span className="text-xs text-[#8F5969]">Baked at 6:00 AM</span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1 text-[#D83A6F] font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#D83A6F]" />
                  <span>100% Pure</span>
                </div>
                <span className="text-xs text-[#8F5969]">Eggless Options</span>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Desserts Arranged on Pastel Pink Plate */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* The Ceramic Pastel Pink Plate Background */}
            <div className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] md:w-[480px] md:h-[480px] rounded-full bg-gradient-to-tr from-[#FFCCD5] via-[#FFE5EC] to-[#FFF0F3] p-4 sm:p-7 shadow-2xl border-4 border-white flex items-center justify-center">
              
              {/* Inner Plate Rim */}
              <div className="w-full h-full rounded-full border-2 border-dashed border-[#FFB3C6]/70 relative overflow-hidden bg-white/60 backdrop-blur-sm p-4 flex items-center justify-center">
                
                {/* Main Hero Platter Image: Cupcakes & Cake arranged on pink setting */}
                <img
                  src="https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=900&q=85"
                  alt="Pastel Strawberry Cupcakes and Cakes on Plate"
                  className="w-full h-full object-cover rounded-full shadow-inner transform hover:scale-105 transition-transform duration-500"
                />

                {/* Shading ring */}
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/5 pointer-events-none" />
              </div>

              {/* Floating Mini Treat Card 1 - Red Velvet */}
              <div className="absolute -top-3 -left-4 sm:top-2 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-kawaii border border-[#FFD0DC] flex items-center gap-2.5 animate-float">
                <img
                  src="https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=140&q=80"
                  alt="Red Velvet Cake"
                  className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl object-cover"
                />
                <div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#E11D48]">
                    <span>Best Seller</span>
                    <Heart className="w-3 h-3 fill-[#E11D48]" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#4A2633]">Red Velvet Cake</div>
                  <div className="text-xs font-semibold text-[#D83A6F]">₹799</div>
                </div>
              </div>

              {/* Floating Mini Treat Card 2 - Strawberry Cupcake */}
              <div className="absolute -bottom-4 -right-2 sm:bottom-4 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-kawaii border border-[#FFD0DC] flex items-center gap-2.5 animate-float-delayed">
                <img
                  src="https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=140&q=80"
                  alt="Vanilla Cupcake"
                  className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl object-cover"
                />
                <div>
                  <div className="text-[11px] font-semibold text-[#734B58]">Handcrafted</div>
                  <div className="text-xs sm:text-sm font-bold text-[#4A2633]">Strawberry Swirl</div>
                  <div className="text-xs font-semibold text-[#D83A6F]">₹149 / pc</div>
                </div>
              </div>

              {/* Cute Floating Wishing Card Badge */}
              <div className="absolute top-1/2 -left-6 sm:-left-10 bg-gradient-to-r from-[#FFF0F4] to-[#FFE0E9] rounded-2xl px-3 py-2 border border-[#FFB3C6] shadow-md -translate-y-1/2 flex items-center gap-2 animate-pulse-subtle">
                <span className="text-xl">💌</span>
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#A24864]">Free Feature</div>
                  <div className="text-xs font-extrabold text-[#701A33]">Add Wishing Card ♡</div>
                </div>
              </div>

              {/* Sprinkles Decorators */}
              <div className="absolute -bottom-6 left-1/4 flex gap-1.5 pointer-events-none">
                <span className="w-2.5 h-1 rounded-full bg-[#FF758F] rotate-45" />
                <span className="w-2.5 h-1 rounded-full bg-[#FFB703] -rotate-12" />
                <span className="w-2.5 h-1 rounded-full bg-[#70E000] rotate-45" />
                <span className="w-2.5 h-1 rounded-full bg-[#9D4EDD] rotate-90" />
                <span className="w-2.5 h-1 rounded-full bg-[#FF4D6D] -rotate-45" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
