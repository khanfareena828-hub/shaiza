import React, { useState } from 'react';
import { WishingCardTemplate, CardCategory, CustomizedCard } from '../types';
import { WISHING_CARDS } from '../data/bakeryData';
import { WishingCardModal } from './WishingCardModal';
import { Sparkles, Heart, ArrowRight, PenTool } from 'lucide-react';

interface WishingCardsSectionProps {
  onAddCardToOrder: (card: CustomizedCard) => void;
}

export const WishingCardsSection: React.FC<WishingCardsSectionProps> = ({ onAddCardToOrder }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTemplate, setSelectedTemplate] = useState<WishingCardTemplate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories: string[] = [
    'All',
    'Birthday',
    'Anniversary',
    'Thank You',
    'Congratulations',
    'Get Well Soon',
    'Best Wishes',
    'Just For You',
    'Celebration'
  ];

  const filteredCards = WISHING_CARDS.filter((card) => {
    if (activeCategory === 'All') return true;
    return card.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const handleOpenCustomizer = (template: WishingCardTemplate) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  return (
    <section id="wishing-cards" className="py-16 lg:py-24 bg-gradient-to-b from-[#FFF5F8] via-[#FFF9F9] to-[#FFF0F4] relative overflow-hidden">
      {/* Decorative Pastel Backdrops */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#FFE5EC]/60 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#FFF0E6]/50 blur-3xl -z-10 pointer-events-none" />

      {/* Floating 2D Kawaii Stickers */}
      <div className="absolute top-16 left-8 text-2xl animate-float pointer-events-none opacity-80">💌</div>
      <div className="absolute top-24 right-12 text-2xl animate-float-delayed pointer-events-none opacity-80">🌸</div>
      <div className="absolute bottom-16 left-16 text-3xl animate-float pointer-events-none opacity-80">🎀</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#FFB3C6] shadow-sm text-xs font-extrabold text-[#D83A6F]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B8B]" />
            <span>Exclusive Bakery Feature</span>
            <span className="text-[10px] bg-[#FFE5EC] px-2 py-0.5 rounded-full">Free With Orders ♡</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#4A2633]">
            “Send a Little Sweetness ♡”
          </h2>
          <p className="text-[#734B58] text-base sm:text-lg font-medium leading-relaxed">
            Attach a custom digital Wishing Card right inside your dessert box! Choose from our lovely pastel themes, pen your message, and surprise someone dear.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`wishing-cat-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#FF758F] to-[#FF4D6D] text-white shadow-md shadow-[#FF4D6D]/20 scale-105'
                  : 'bg-white text-[#734B58] border border-[#FAD2E1] hover:bg-[#FFE5EC] hover:text-[#4A2633]'
              }`}
            >
              {cat === 'All' ? '✨ All Cards' : cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              id={`wishing-card-item-${card.id}`}
              onClick={() => handleOpenCustomizer(card)}
              className="group bg-white rounded-3xl p-5 border-2 border-[#FCE7EC] hover:border-[#FF8FAB] shadow-sm hover:shadow-kawaii-hover transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between relative overflow-hidden"
              style={{ backgroundColor: card.bgColor }}
            >
              {/* Card top banner badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-[#FAD2E1] text-xs font-bold text-[#4A2633] flex items-center gap-1.5 shadow-sm">
                  <span>{card.icon}</span>
                  <span>{card.category}</span>
                </span>
                <span className="text-xs text-[#D83A6F] font-bold bg-white/80 px-2 py-0.5 rounded-full">
                  Free Card ♡
                </span>
              </div>

              {/* Cover Preview Image */}
              <div className="w-full h-44 rounded-2xl overflow-hidden bg-white/80 p-1.5 border border-white shadow-inner mb-4 relative">
                <img
                  src={card.coverImage}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating sticker preview */}
                <div className="absolute bottom-3 right-3 bg-white/95 rounded-full px-2.5 py-1 text-xs font-bold shadow-md flex items-center gap-1 text-[#4A2633]">
                  <span>{card.stickers[0]}</span>
                  <span>{card.stickers[1]}</span>
                </div>
              </div>

              {/* Card Content & Quote */}
              <div className="space-y-2 mb-4 bg-white/70 backdrop-blur-sm p-3.5 rounded-2xl border border-white/60">
                <h3 className="font-heading text-lg font-bold text-[#4A2633] group-hover:text-[#D83A6F] transition-colors leading-snug">
                  {card.title}
                </h3>
                <p className="font-hand text-base text-[#683C49] leading-snug italic">
                  "{card.quoteSnippet}"
                </p>
              </div>

              {/* Customize Button CTA */}
              <button
                id={`customize-card-btn-${card.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenCustomizer(card);
                }}
                className="w-full py-2.5 px-4 rounded-full bg-white text-[#D83A6F] hover:bg-[#FF4D6D] hover:text-white border border-[#FFCCD5] text-xs sm:text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-1.5 group-hover:bg-[#FF4D6D] group-hover:text-white"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>Personalize Card ♡</span>
              </button>
            </div>
          ))}
        </div>

        {/* Feature Highlights Row */}
        <div className="mt-14 bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#FFCCD5] shadow-kawaii max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-3xl block">💌</span>
            <h4 className="font-heading text-sm font-bold text-[#4A2633]">Physical Printed Note</h4>
            <p className="text-xs text-[#734B58]">
              We print your card on glossy embossed cream paper and tuck it into the ribbon box.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-3xl block">🎨</span>
            <h4 className="font-heading text-sm font-bold text-[#4A2633]">Custom Handwritten Look</h4>
            <p className="text-xs text-[#734B58]">
              Your recipient's name and message are formatted in an adorable cursive calligraphy style.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-3xl block">💖</span>
            <h4 className="font-heading text-sm font-bold text-[#4A2633]">Always 100% Free</h4>
            <p className="text-xs text-[#734B58]">
              Every order can include a customized wishing card at absolutely zero extra charge.
            </p>
          </div>
        </div>

      </div>

      {/* Modal Customizer Popup */}
      <WishingCardModal
        isOpen={isModalOpen}
        initialTemplate={selectedTemplate}
        onClose={() => setIsModalOpen(false)}
        onAddCardToOrder={onAddCardToOrder}
      />
    </section>
  );
};
