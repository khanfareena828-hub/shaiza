import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Heart, Sparkles, Phone, Cake } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onSelectCategory: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onSelectCategory }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string, categoryName?: string) => {
    setMobileMenuOpen(false);
    if (categoryName) {
      onSelectCategory(categoryName);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8F8]/95 backdrop-blur-md border-b border-[#FCE7EC] transition-all">
      {/* Cute top announcement bar */}
      <div className="bg-gradient-to-r from-[#FFE5EC] via-[#FFF0F3] to-[#FFE5EC] px-4 py-1.5 text-center text-xs font-semibold text-[#A24864] flex items-center justify-center gap-2 border-b border-[#FAD2E1]/60">
        <span className="animate-pulse">🌸</span>
        <span>Free delivery on orders over ₹499 in Aurangabad! Use code <strong className="bg-white/80 px-2 py-0.5 rounded-full text-[#D83A6F] border border-[#FAD2E1]">{BAKERY_INFO.discountCode}</strong> for 20% OFF ♡</span>
        <span className="hidden sm:inline">🧁</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFCCD5] to-[#FFB3C6] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200 border-2 border-white">
              <Cake className="w-6 h-6 text-[#9E3A5A]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-2xl font-bold tracking-tight text-[#5A2E3B] group-hover:text-[#D83A6F] transition-colors">
                  Sweet Crumbs
                </span>
                <Heart className="w-4 h-4 fill-[#FF8FAB] text-[#FF8FAB] animate-bounce" />
              </div>
              <span className="text-[11px] font-medium tracking-wide text-[#A66D7C] block -mt-0.5 font-hand text-sm">
                Baked with Love, Served with Happiness ♡
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className="px-3 py-2 text-sm font-semibold text-[#5A382D] hover:text-[#D83A6F] rounded-full hover:bg-[#FFEAEF] transition-colors"
            >
              Home
            </button>
            <button
              id="nav-link-about"
              onClick={() => handleNavClick('story')}
              className="px-3 py-2 text-sm font-semibold text-[#5A382D] hover:text-[#D83A6F] rounded-full hover:bg-[#FFEAEF] transition-colors"
            >
              About
            </button>
            <button
              id="nav-link-menu"
              onClick={() => handleNavClick('bestsellers')}
              className="px-3 py-2 text-sm font-semibold text-[#5A382D] hover:text-[#D83A6F] rounded-full hover:bg-[#FFEAEF] transition-colors"
            >
              Menu
            </button>
            <button
              id="nav-link-cakes"
              onClick={() => handleNavClick('bestsellers', 'Cakes')}
              className="px-3 py-2 text-sm font-semibold text-[#5A382D] hover:text-[#D83A6F] rounded-full hover:bg-[#FFEAEF] transition-colors"
            >
              Cakes
            </button>
            <button
              id="nav-link-cupcakes"
              onClick={() => handleNavClick('bestsellers', 'Cupcakes')}
              className="px-3 py-2 text-sm font-semibold text-[#5A382D] hover:text-[#D83A6F] rounded-full hover:bg-[#FFEAEF] transition-colors"
            >
              Cupcakes
            </button>
            <button
              id="nav-link-cookies"
              onClick={() => handleNavClick('bestsellers', 'Cookies')}
              className="px-3 py-2 text-sm font-semibold text-[#5A382D] hover:text-[#D83A6F] rounded-full hover:bg-[#FFEAEF] transition-colors"
            >
              Cookies
            </button>
            <button
              id="nav-link-wishing-cards"
              onClick={() => handleNavClick('wishing-cards')}
              className="px-3 py-2 text-sm font-semibold text-[#D83A6F] hover:text-[#9E1C48] rounded-full bg-[#FFF0F4] hover:bg-[#FFE1E9] border border-[#FFD0DC] transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B8B]" />
              Wishing Cards
            </button>
            <button
              id="nav-link-contact"
              onClick={() => handleNavClick('contact')}
              className="px-3 py-2 text-sm font-semibold text-[#5A382D] hover:text-[#D83A6F] rounded-full hover:bg-[#FFEAEF] transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              id="cart-drawer-trigger-btn"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-white text-[#5A2E3B] border border-[#FAD2E1] hover:bg-[#FFF0F3] hover:border-[#FFB3C6] transition-all shadow-sm group"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-[#9E3A5A] group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#FF4D6D] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Rounded Order Now Button */}
            <button
              id="nav-order-now-btn"
              onClick={() => handleNavClick('custom-cake')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF758F] to-[#FF4D6D] text-white text-sm font-bold shadow-md hover:shadow-lg hover:from-[#FF4D6D] hover:to-[#C9184A] transition-all transform hover:-translate-y-0.5 border border-white/40"
            >
              <span>Order Now ♡</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#5A2E3B] hover:bg-[#FFEAEF] transition-colors"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF9F9] border-b border-[#FCE7EC] px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              id="mobile-nav-home"
              onClick={() => handleNavClick('home')}
              className="text-left px-4 py-2.5 rounded-2xl bg-white border border-[#FCE7EC] text-sm font-semibold text-[#5A382D]"
            >
              🌸 Home
            </button>
            <button
              id="mobile-nav-about"
              onClick={() => handleNavClick('story')}
              className="text-left px-4 py-2.5 rounded-2xl bg-white border border-[#FCE7EC] text-sm font-semibold text-[#5A382D]"
            >
              🧁 About Us
            </button>
            <button
              id="mobile-nav-menu"
              onClick={() => handleNavClick('bestsellers')}
              className="text-left px-4 py-2.5 rounded-2xl bg-white border border-[#FCE7EC] text-sm font-semibold text-[#5A382D]"
            >
              🎂 Full Menu
            </button>
            <button
              id="mobile-nav-cakes"
              onClick={() => handleNavClick('bestsellers', 'Cakes')}
              className="text-left px-4 py-2.5 rounded-2xl bg-white border border-[#FCE7EC] text-sm font-semibold text-[#5A382D]"
            >
              🍰 Cakes
            </button>
            <button
              id="mobile-nav-cupcakes"
              onClick={() => handleNavClick('bestsellers', 'Cupcakes')}
              className="text-left px-4 py-2.5 rounded-2xl bg-white border border-[#FCE7EC] text-sm font-semibold text-[#5A382D]"
            >
              🧁 Cupcakes
            </button>
            <button
              id="mobile-nav-cookies"
              onClick={() => handleNavClick('bestsellers', 'Cookies')}
              className="text-left px-4 py-2.5 rounded-2xl bg-white border border-[#FCE7EC] text-sm font-semibold text-[#5A382D]"
            >
              🍪 Cookies
            </button>
          </div>

          <button
            id="mobile-nav-wishing-cards"
            onClick={() => handleNavClick('wishing-cards')}
            className="w-full text-left px-4 py-3 rounded-2xl bg-gradient-to-r from-[#FFE5EC] to-[#FFF0F4] border border-[#FFCCD5] text-sm font-bold text-[#C9184A] flex items-center justify-between shadow-sm"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF4D6D]" />
              Send a Little Sweetness (Wishing Cards)
            </span>
            <span className="text-xs bg-white px-2 py-0.5 rounded-full border border-[#FFCCD5]">Main Feature ♡</span>
          </button>

          <button
            id="mobile-nav-order-cake"
            onClick={() => handleNavClick('custom-cake')}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#FF758F] to-[#FF4D6D] text-white text-sm font-bold shadow text-center block"
          >
            Design Your Dream Cake ♡
          </button>

          <div className="pt-2 flex items-center justify-between text-xs text-[#8A5666] px-2">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#D83A6F]" />
              7558239803
            </span>
            <span>Aurangabad, Maharashtra</span>
          </div>
        </div>
      )}
    </header>
  );
};
