import React, { useState } from 'react';
import { WishingCardTemplate, CustomizedCard, CardCategory } from '../types';
import { WISHING_CARDS } from '../data/bakeryData';
import { X, Sparkles, Heart, Check, ArrowRight, RotateCcw, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WishingCardModalProps {
  isOpen: boolean;
  initialTemplate: WishingCardTemplate | null;
  onClose: () => void;
  onAddCardToOrder: (card: CustomizedCard) => void;
}

export const WishingCardModal: React.FC<WishingCardModalProps> = ({
  isOpen,
  initialTemplate,
  onClose,
  onAddCardToOrder
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState<WishingCardTemplate>(
    initialTemplate || WISHING_CARDS[0]
  );
  const [recipientName, setRecipientName] = useState('Sara');
  const [senderName, setSenderName] = useState('Aarav');
  const [message, setMessage] = useState(
    initialTemplate?.defaultMessage ||
    'Wishing you a day filled with sweetness, happiness and beautiful moments! ♡'
  );
  const [selectedStickers, setSelectedStickers] = useState<string[]>(['🎂', '💖', '✨', '🌸']);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isCardFolded, setIsCardFolded] = useState(false);

  // Sync if initialTemplate changes
  React.useEffect(() => {
    if (initialTemplate) {
      setSelectedTemplate(initialTemplate);
      setMessage(initialTemplate.defaultMessage);
      setSelectedStickers(initialTemplate.stickers.slice(0, 4));
      setIsPreviewOpen(false);
      setIsCardFolded(false);
    }
  }, [initialTemplate]);

  if (!isOpen) return null;

  const availableStickers = ['🎂', '💕', '🌸', '🧁', '🍓', '🎀', '✨', '🧸', '🌷', '🎉', '🥂', '💌'];

  const sweetPresetMessages: Record<CardCategory, string[]> = {
    'Birthday': [
      'Wishing you a day filled with sweetness, happiness and beautiful moments! 🎂♡',
      'Happy Birthday! May your day be as sweet and special as you are! 🍰✨',
      'Cheers to another fabulous year around the sun! Enjoy every sugary bite! 🎉'
    ],
    'Anniversary': [
      'Every day with you is as delightful as freshly baked sweetness. Happy Anniversary! 💕♡',
      'To the sweetest partnership! Here is to endless love and lots of dessert! 🥂',
      'Baked with love for the most wonderful couple in the world! 🌹'
    ],
    'Thank You': [
      'A little sweet gesture to say thank you for everything you do! 🌸♡',
      'Your kindness means the world to me. Thank you from the bottom of my heart! 💌',
      'Sending sugary hugs to show how grateful I am for your warm support! 🧁'
    ],
    'Congratulations': [
      'You did it! Time to celebrate your victory with lots of sugary joy! 🎉♡',
      'So immensely proud of your accomplishment! Keep shining bright! ⭐',
      'Huge congratulations! You deserve all the sweetness coming your way! 🏆'
    ],
    'Get Well Soon': [
      'Sending healing love and sugary comfort to make you smile again! 🌷♡',
      'Rest up and get well soon! Cozy hugs and sweet treats for a speedy recovery. 🧸',
      'Hope this sweet treat brings a warm smile to your day. Feel better soon! 🍯'
    ],
    'Best Wishes': [
      'May all your dreams rise high and taste sweet like honey! 🎓✨',
      'Wishing you the greatest success on your exciting new adventure! 🌟',
      'All the very best! You are going to do extraordinary things! 🚀'
    ],
    'Just For You': [
      'No special reason needed — just wanted to treat someone so sweet! ❤️♡',
      'A little box of happiness sent your way just to brighten your day! 🍓',
      'Thinking of you and sending lots of bakery love and smiles! 🍩'
    ],
    'Celebration': [
      'Let us turn every little milestone into a celebration of sweetness! 🎉♡',
      'Party time! Bring on the cake, laughter, and magical memories! 🎊',
      'Celebrating you today and always! Enjoy the sugary goodness! 🍰'
    ]
  };

  const toggleSticker = (sticker: string) => {
    setSelectedStickers((prev) =>
      prev.includes(sticker)
        ? prev.filter((s) => s !== sticker)
        : prev.length < 6 ? [...prev, sticker] : prev
    );
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FF758F', '#FFCCD5', '#FFF0F3', '#FFB703', '#C084FC']
    });
  };

  const handlePreviewToggle = () => {
    setIsPreviewOpen(!isPreviewOpen);
    if (!isPreviewOpen) {
      triggerConfetti();
    }
  };

  const handleAddCard = () => {
    const customized: CustomizedCard = {
      id: `card-${Date.now()}`,
      templateId: selectedTemplate.id,
      title: selectedTemplate.title,
      category: selectedTemplate.category,
      recipientName: recipientName.trim() || 'Sweet Friend',
      senderName: senderName.trim() || 'A Secret Admirer',
      message: message.trim(),
      stickers: selectedStickers,
      coverImage: selectedTemplate.coverImage,
      bgColor: selectedTemplate.bgColor,
      accentColor: selectedTemplate.accentColor
    };

    triggerConfetti();
    onAddCardToOrder(customized);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#4A2633]/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        id="wishing-card-customizer-modal"
        className="relative w-full max-w-4xl bg-[#FFF9F9] rounded-[32px] border-4 border-white shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#FFE5EC] via-[#FFF0F4] to-[#FFE5EC] border-b border-[#FAD2E1] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl border border-[#FAD2E1]">
              💌
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-[#4A2633] flex items-center gap-1.5">
                Send a Little Sweetness ♡
                <span className="text-xs bg-white text-[#D83A6F] px-2.5 py-0.5 rounded-full border border-[#FFCCD5] font-semibold">
                  {selectedTemplate.category}
                </span>
              </h3>
              <p className="text-xs text-[#8A5666] font-medium">
                Personalize your digital greeting card to accompany your sweet bakery treats
              </p>
            </div>
          </div>

          <button
            id="close-wishing-card-modal-btn"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-[#FFE5EC] text-[#734B58] border border-[#FAD2E1] flex items-center justify-center transition-colors shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Top Toggle: Edit Mode vs. Physical Card Preview */}
          <div className="flex items-center justify-between bg-white p-1.5 rounded-2xl border border-[#FAD2E1] max-w-sm mx-auto shadow-sm">
            <button
              id="wishing-card-edit-tab-btn"
              onClick={() => setIsPreviewOpen(false)}
              className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                !isPreviewOpen
                  ? 'bg-gradient-to-r from-[#FF758F] to-[#FF4D6D] text-white shadow-sm'
                  : 'text-[#734B58] hover:bg-[#FFF0F4]'
              }`}
            >
              ✏️ Personalize Details
            </button>
            <button
              id="wishing-card-preview-tab-btn"
              onClick={handlePreviewToggle}
              className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                isPreviewOpen
                  ? 'bg-gradient-to-r from-[#FF758F] to-[#FF4D6D] text-white shadow-sm'
                  : 'text-[#734B58] hover:bg-[#FFF0F4]'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#FF4D6D]" />
              <span>Preview Card ♡</span>
            </button>
          </div>

          {!isPreviewOpen ? (
            /* ================= EDIT MODE ================= */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Choose Template & Inputs */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* Choose Template Carousel / Pills */}
                <div>
                  <label className="text-xs font-extrabold uppercase tracking-wider text-[#A26D7C] block mb-2">
                    1. Choose Card Design
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {WISHING_CARDS.map((card) => (
                      <button
                        key={card.id}
                        id={`select-template-${card.id}`}
                        onClick={() => {
                          setSelectedTemplate(card);
                          setMessage(card.defaultMessage);
                          setSelectedStickers(card.stickers.slice(0, 4));
                        }}
                        className={`p-2 rounded-2xl border text-center transition-all flex flex-col items-center gap-1 ${
                          selectedTemplate.id === card.id
                            ? 'border-[#FF4D6D] bg-[#FFE5EC] shadow-md scale-102 ring-2 ring-[#FF4D6D]/30'
                            : 'border-[#FAD2E1] bg-white hover:bg-[#FFF0F4]'
                        }`}
                      >
                        <span className="text-xl">{card.icon}</span>
                        <span className="text-[11px] font-bold text-[#4A2633] truncate w-full">
                          {card.category}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recipient and Sender Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#5A382D] block mb-1">
                      Recipient Name (Who is this for?) *
                    </label>
                    <input
                      id="card-recipient-input"
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="e.g., Sara / Mom / Alex"
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#FAD2E1] focus:border-[#FF4D6D] focus:ring-2 focus:ring-[#FF4D6D]/20 text-sm font-semibold text-[#4A2633] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#5A382D] block mb-1">
                      Sender Name (From) *
                    </label>
                    <input
                      id="card-sender-input"
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g., Aarav / Your Bestie"
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#FAD2E1] focus:border-[#FF4D6D] focus:ring-2 focus:ring-[#FF4D6D]/20 text-sm font-semibold text-[#4A2633] outline-none"
                    />
                  </div>
                </div>

                {/* Personal Message */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-[#5A382D]">
                      Your Personal Heartfelt Message *
                    </label>
                    <span className="text-[11px] text-[#8A5666]">
                      {message.length}/200
                    </span>
                  </div>
                  <textarea
                    id="card-message-textarea"
                    rows={3}
                    maxLength={200}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your sweet words here..."
                    className="w-full p-3 rounded-2xl bg-white border border-[#FAD2E1] focus:border-[#FF4D6D] focus:ring-2 focus:ring-[#FF4D6D]/20 text-sm text-[#4A2633] font-medium outline-none resize-none leading-relaxed"
                  />

                  {/* Sweet preset message quick chips */}
                  <div className="mt-2 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A26D7C] block">
                      Quick Sweet Greetings (Click to use):
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(sweetPresetMessages[selectedTemplate.category] || []).map((preset, idx) => (
                        <button
                          key={idx}
                          id={`preset-msg-${idx}`}
                          onClick={() => setMessage(preset)}
                          className="text-[11px] bg-white border border-[#FCE7EC] hover:bg-[#FFE5EC] hover:border-[#FFCCD5] text-[#734B58] px-2.5 py-1 rounded-full text-left transition-colors font-medium truncate max-w-xs"
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sticker Decorator Selection */}
                <div>
                  <label className="text-xs font-extrabold uppercase tracking-wider text-[#A26D7C] block mb-1.5">
                    Select Cute Stickers / Decorations ({selectedStickers.length}/6)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableStickers.map((stk) => {
                      const isSelected = selectedStickers.includes(stk);
                      return (
                        <button
                          key={stk}
                          id={`sticker-btn-${stk}`}
                          onClick={() => toggleSticker(stk)}
                          className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg border transition-all ${
                            isSelected
                              ? 'bg-[#FFE5EC] border-[#FF4D6D] scale-110 shadow-sm'
                              : 'bg-white border-[#FAD2E1] hover:bg-[#FFF0F4]'
                          }`}
                        >
                          {stk}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right Column: Live Mini Preview Card */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#A26D7C] mb-2 self-start">
                  Live Card Mockup
                </div>

                {/* The Greeting Card Shell */}
                <div
                  className="w-full max-w-sm rounded-3xl p-5 shadow-kawaii border-2 border-white relative overflow-hidden transition-all duration-300"
                  style={{ backgroundColor: selectedTemplate.bgColor }}
                >
                  {/* Decorative corner ribbons */}
                  <div className="absolute top-2 right-2 text-base">🌸</div>
                  <div className="absolute bottom-2 left-2 text-base">💖</div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-[#FAD2E1]/60 space-y-3">
                    
                    {/* Header line */}
                    <div className="text-center pb-2 border-b border-[#FCE7EC]">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#9E3A5A]">
                        Sweet Crumbs Greeting Note
                      </span>
                      <h4 className="font-heading text-lg font-bold text-[#4A2633] mt-0.5">
                        Happy {selectedTemplate.category}, {recipientName || 'Friend'}! {selectedTemplate.icon}♡
                      </h4>
                    </div>

                    {/* Message Body */}
                    <div className="font-hand text-lg text-[#5A2E3B] leading-relaxed italic min-h-[72px] text-center px-1">
                      "{message || 'Wishing you the sweetest moments!'}"
                    </div>

                    {/* Sign-off */}
                    <div className="text-right pt-2 border-t border-[#FCE7EC]/80">
                      <span className="text-xs text-[#8A5666] block font-medium">With Love,</span>
                      <span className="font-heading text-sm font-bold text-[#D83A6F]">
                        {senderName || 'Sweet Crumbs'} ♡
                      </span>
                    </div>

                    {/* Selected Stickers row */}
                    {selectedStickers.length > 0 && (
                      <div className="flex items-center justify-center gap-2 pt-1 border-t border-dashed border-[#FAD2E1]">
                        {selectedStickers.map((s, idx) => (
                          <span key={idx} className="text-lg animate-bounce" style={{ animationDelay: `${idx * 0.15}s` }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Preview CTA Button */}
                <button
                  id="trigger-open-preview-btn"
                  onClick={handlePreviewToggle}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#FFF0F4] text-[#D83A6F] border-2 border-[#FFB3C6] text-xs sm:text-sm font-bold hover:bg-[#FFE0E9] transition-all flex items-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-[#FF4D6D]" />
                  <span>Open Animated Greeting Card Experience ♡</span>
                </button>
              </div>

            </div>
          ) : (
            /* ================= PHYSICAL GREETING CARD ANIMATION VIEW ================= */
            <div className="space-y-6 py-4">
              
              <div className="text-center max-w-md mx-auto">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#D83A6F] bg-[#FFE5EC] px-3 py-1 rounded-full border border-[#FFCCD5]">
                  Interactive Greeting Card
                </span>
                <p className="text-xs text-[#734B58] mt-1.5">
                  Click the card below to fold / unfold just like a real paper card!
                </p>
              </div>

              {/* Physical Card Container with 3D Fold Effect */}
              <div className="flex justify-center items-center py-4">
                
                {isCardFolded ? (
                  /* CLOSED CARD FRONT COVER */
                  <div
                    id="folded-card-cover"
                    onClick={() => {
                      setIsCardFolded(false);
                      triggerConfetti();
                    }}
                    className="w-[300px] sm:w-[380px] h-[400px] sm:h-[460px] rounded-3xl p-6 shadow-2xl border-4 border-white cursor-pointer transform hover:scale-102 transition-all duration-500 relative flex flex-col justify-between items-center text-center group"
                    style={{ backgroundColor: selectedTemplate.bgColor }}
                  >
                    {/* Gold Foil Style Frame */}
                    <div className="absolute inset-4 rounded-2xl border-2 border-dashed border-[#E5A99B]/80 pointer-events-none" />
                    
                    {/* Post stamp top right */}
                    <div className="absolute top-6 right-6 w-12 h-14 bg-white/90 rounded-md border border-[#FAD2E1] p-1 flex flex-col items-center justify-center shadow-sm">
                      <span className="text-base">🍰</span>
                      <span className="text-[8px] font-bold text-[#A24864]">AURANGABAD</span>
                    </div>

                    <div className="pt-8">
                      <span className="text-4xl">{selectedTemplate.icon}</span>
                      <h4 className="font-heading text-2xl font-extrabold text-[#4A2633] mt-2">
                        {selectedTemplate.title}
                      </h4>
                      <p className="text-xs text-[#734B58] font-hand text-lg mt-1">
                        A Little Sweetness Inside
                      </p>
                    </div>

                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <img
                        src={selectedTemplate.coverImage}
                        alt="Card Cover"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="w-full bg-white/90 rounded-xl p-3 border border-[#FAD2E1] shadow-sm">
                      <div className="text-xs font-bold text-[#4A2633]">
                        To: <span className="text-[#D83A6F]">{recipientName || 'You'}</span>
                      </div>
                      <div className="text-[11px] text-[#734B58] mt-0.5">
                        From: <span className="font-semibold">{senderName || 'Someone Sweet'}</span>
                      </div>
                    </div>

                    <div className="text-xs font-bold text-[#D83A6F] flex items-center gap-1 group-hover:scale-110 transition-transform">
                      <span>Click to Open Card ♡</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                ) : (
                  /* OPEN CARD (SPREAD 2 PAGES) */
                  <div
                    id="unfolded-card-spread"
                    className="w-full max-w-2xl bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border-4 border-[#FFF0F4] relative transition-all duration-500"
                    style={{ backgroundColor: selectedTemplate.bgColor }}
                  >
                    {/* Card fold spine divider in middle */}
                    <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-transparent via-[#E2B6C0]/50 to-transparent -translate-x-1/2 pointer-events-none" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                      
                      {/* Left Page: Illustration & Stickers */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#FAD2E1] flex flex-col items-center text-center justify-between min-h-[300px]">
                        <div className="w-full flex justify-between items-center text-xs text-[#8A5666]">
                          <span>🌸 Handcrafted</span>
                          <span>Sweet Crumbs Bakery ♡</span>
                        </div>

                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md my-2">
                          <img
                            src={selectedTemplate.coverImage}
                            alt="Cake Illustration"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="space-y-1">
                          <div className="font-heading text-base font-bold text-[#4A2633]">
                            "Baked With Love"
                          </div>
                          <p className="text-[11px] text-[#8A5666] italic">
                            May your sweet dreams come true!
                          </p>
                        </div>

                        {/* Floating Selected Stickers */}
                        <div className="flex items-center gap-2 pt-2">
                          {selectedStickers.map((stk, i) => (
                            <span key={i} className="text-xl animate-bounce" style={{ animationDelay: `${i * 0.12}s` }}>
                              {stk}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Page: Handwritten Message & Sign Off */}
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#FAD2E1] flex flex-col justify-between min-h-[300px] relative">
                        
                        <div>
                          <div className="text-right text-[10px] font-bold text-[#C9184A] uppercase tracking-wider mb-2">
                            Sweet Wishes ♡
                          </div>
                          
                          <h4 className="font-heading text-lg font-extrabold text-[#4A2633] mb-3">
                            Dear {recipientName || 'Dearest'},
                          </h4>

                          <p className="font-hand text-xl text-[#5A2E3B] leading-relaxed italic">
                            "{message}"
                          </p>
                        </div>

                        <div className="pt-4 border-t border-[#FCE7EC] text-right">
                          <span className="text-xs text-[#8A5666] font-medium block">With Lots of Love & Hugs,</span>
                          <span className="font-heading text-base font-bold text-[#D83A6F]">
                            {senderName || 'Me'} ♡
                          </span>
                        </div>

                      </div>

                    </div>

                    {/* Card fold toggle button */}
                    <div className="mt-4 flex items-center justify-between pt-2">
                      <button
                        onClick={() => setIsCardFolded(true)}
                        className="text-xs font-bold text-[#734B58] hover:text-[#D83A6F] flex items-center gap-1.5 transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Fold Card Back</span>
                      </button>

                      <button
                        onClick={triggerConfetti}
                        className="text-xs font-bold text-[#D83A6F] hover:text-[#9E1C48] flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#FF6B8B]" />
                        <span>Sprinkle Hearts & Joy!</span>
                      </button>
                    </div>

                  </div>
                )}

              </div>

            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-white border-t border-[#FAD2E1] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#734B58]">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>Card attaches for <strong>FREE</strong> with your bakery box! ♡</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              id="wishing-card-secondary-preview-btn"
              onClick={handlePreviewToggle}
              className="px-5 py-2.5 rounded-full bg-[#FFF0F4] text-[#D83A6F] border border-[#FFCCD5] text-xs sm:text-sm font-bold hover:bg-[#FFE5EC] transition-all"
            >
              {isPreviewOpen ? 'Edit Message' : 'Preview Card ♡'}
            </button>

            <button
              id="add-card-to-order-submit-btn"
              onClick={handleAddCard}
              className="flex-1 sm:flex-none px-7 py-2.5 rounded-full bg-gradient-to-r from-[#FF758F] to-[#FF4D6D] text-white text-xs sm:text-sm font-bold shadow-md hover:from-[#FF4D6D] hover:to-[#C9184A] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Add Card to Order ♡</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
