import React, { useState } from 'react';
import { BAKERY_INFO } from '../data/bakeryData';
import { Heart, Cake, Phone, Mail, MapPin, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 3000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#FFF0F4] via-[#FFE5EC] to-[#FFDDE5] border-t-2 border-[#FFCCD5] pt-16 pb-12 relative overflow-hidden">
      
      {/* Decorative Kawaii elements in footer */}
      <span className="absolute top-8 left-8 text-3xl opacity-70 pointer-events-none select-none">🌸</span>
      <span className="absolute top-12 right-12 text-2xl opacity-60 pointer-events-none select-none">✨</span>
      <span className="absolute bottom-6 left-1/3 text-2xl opacity-70 pointer-events-none select-none">🍓</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FAD2E1]">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border-2 border-[#FFCCD5]">
                <Cake className="w-6 h-6 text-[#D83A6F]" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-extrabold text-[#4A2633]">
                  {BAKERY_INFO.name}
                </h3>
                <p className="font-hand text-base text-[#C9184A]">
                  {BAKERY_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#734B58] font-medium leading-relaxed max-w-sm">
              Crafting dreamy cakes, cloud-soft cupcakes, and personalized digital wishing cards in Aurangabad with 100% pure butter and unconditional love.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-[#5A2E3B] font-bold">
              <span>Follow our bakery journey:</span>
              <span className="bg-white/80 px-2.5 py-1 rounded-full text-[#D83A6F] border border-[#FFCCD5]">
                {BAKERY_INFO.instagram}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#4A2633]">
              Quick Bakery Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[#734B58]">
              <li>
                <button onClick={() => scrollTo('home')} className="hover:text-[#D83A6F] transition-colors">
                  🌸 Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('story')} className="hover:text-[#D83A6F] transition-colors">
                  🧁 Our Story
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('bestsellers')} className="hover:text-[#D83A6F] transition-colors">
                  🎂 Best Sellers Menu
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('wishing-cards')} className="hover:text-[#D83A6F] transition-colors">
                  💌 Wishing Cards
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('custom-cake')} className="hover:text-[#D83A6F] transition-colors">
                  🍰 Custom Cake Studio
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('gallery')} className="hover:text-[#D83A6F] transition-colors">
                  📸 Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-[#D83A6F] transition-colors">
                  📍 Find Our Bakery
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#4A2633]">
              Bakery Counter
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5A382D]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D83A6F] shrink-0 mt-0.5" />
                <span>{BAKERY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D83A6F] shrink-0" />
                <a href={`tel:${BAKERY_INFO.phone}`} className="hover:underline font-bold">
                  +91 {BAKERY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D83A6F] shrink-0" />
                <a href={`mailto:${BAKERY_INFO.email}`} className="hover:underline break-all">
                  {BAKERY_INFO.email}
                </a>
              </li>
              <li className="text-[11px] text-[#734B58] pt-1">
                Hours: <strong>{BAKERY_INFO.hours}</strong>
              </li>
            </ul>
          </div>

          {/* Sweet Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#4A2633]">
              Weekend Sweet Club
            </h4>
            <p className="text-xs text-[#734B58]">
              Receive secret weekend pastry drops, seasonal flavors, and special discount vouchers.
            </p>

            <form onSubmit={handleNewsletter} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your sweet email..."
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-full bg-white border border-[#FFCCD5] focus:border-[#FF4D6D] text-xs font-semibold text-[#4A2633] outline-none shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#FF4D6D] text-white flex items-center justify-center hover:bg-[#C9184A] transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {newsletterSubscribed && (
                <div className="text-[11px] font-bold text-[#10B981] flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Welcome to the Sweet Club! ♡</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Credits & Love */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A5666] font-medium text-center">
          <p>© {new Date().getFullYear()} Sweet Crumbs Bakery. All rights reserved.</p>
          <div className="flex items-center gap-1.5 font-hand text-base text-[#D83A6F] font-bold">
            <span>“Baked with Love, Served with Happiness ♡”</span>
          </div>
          <p>Handcrafted in TV Centre, Aurangabad, Maharashtra</p>
        </div>

      </div>
    </footer>
  );
};
