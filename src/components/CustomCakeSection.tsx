import React, { useState, useMemo } from 'react';
import { CustomCakeOrder } from '../types';
import { Sparkles, Heart, Calculator, Check, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CustomCakeSectionProps {
  onPlaceCakeOrder: (order: CustomCakeOrder) => void;
}

export const CustomCakeSection: React.FC<CustomCakeSectionProps> = ({ onPlaceCakeOrder }) => {
  // Form States
  const [fullName, setFullName] = useState('Fareena Khan');
  const [mobileNumber, setMobileNumber] = useState('7558239803');
  const [email, setEmail] = useState('khanfareena828@gmail.com');
  const [cakeType, setCakeType] = useState('Vintage Heart Bento Cake');
  const [cakeSize, setCakeSize] = useState('1.0 kg (Serves 6-8)');
  const [flavor, setFlavor] = useState('Red Velvet & Cream Cheese');
  const [filling, setFilling] = useState('Mixed Berry Compote');
  const [frosting, setFrosting] = useState('Silky Swiss Buttercream');
  const [themeColor, setThemeColor] = useState('Pastel Pink & Cream');
  const [isEggless, setIsEggless] = useState(true);
  const [cakeMessage, setCakeMessage] = useState('Happy Birthday Sara ♡');
  const [quantity, setQuantity] = useState(1);
  const [deliveryDate, setDeliveryDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [deliveryTime, setDeliveryTime] = useState('4:00 PM - 6:00 PM (Evening)');
  const [specialInstructions, setSpecialInstructions] = useState('Please add extra edible glitter and pearls around the border ♡');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Options & Pricing
  const cakeTypeOptions = [
    { label: 'Vintage Heart Bento Cake', basePrice: 599, desc: 'Trending Korean bento box with vintage piped ribbons' },
    { label: 'Artisan Layer Sponge Cake', basePrice: 799, desc: 'Tall 3-layer fluffy gourmet celebration cake' },
    { label: 'Deluxe 2-Tier Party Cake', basePrice: 1499, desc: 'Spectacular tiered cake for weddings & grand birthdays' },
    { label: 'Classic Round Birthday Cake', basePrice: 699, desc: 'Timeless bakery silhouette with rosettes & pearls' }
  ];

  const sizeMultipliers: Record<string, { mult: number; label: string }> = {
    '0.5 kg (Bento / 2-3 serves)': { mult: 0.8, label: '0.5 kg' },
    '1.0 kg (Serves 6-8)': { mult: 1.0, label: '1.0 kg' },
    '1.5 kg (Serves 10-12)': { mult: 1.45, label: '1.5 kg' },
    '2.0 kg (Serves 15-18)': { mult: 1.85, label: '2.0 kg' },
    '3.0 kg (Grand Celebration)': { mult: 2.7, label: '3.0 kg' }
  };

  const flavorAddons: Record<string, number> = {
    'Madagascar Vanilla Bean': 0,
    'Dutch Truffle Dark Chocolate': 80,
    'Red Velvet & Cream Cheese': 120,
    'Strawberry Shortcake Cream': 100,
    'Lotus Biscoff Speculoos': 150,
    'Mango Blossom & White Ganache': 120
  };

  const fillingAddons: Record<string, number> = {
    'Mixed Berry Compote': 50,
    'Silky Belgian Choco Fudge': 60,
    'Salted Caramel Drizzle': 50,
    'Bavarian Vanilla Cream': 40,
    'Nutella Hazelnut Crunch': 90,
    'None (Classic Sponge)': 0
  };

  const themePalettes: Record<string, { bg: string; border: string; icing: string; text: string }> = {
    'Pastel Pink & Cream': { bg: '#FFE5EC', border: '#FFCCD5', icing: '#FF758F', text: '#D83A6F' },
    'Lilac Lavender Dreams': { bg: '#F3E8FF', border: '#E9D5FF', icing: '#A855F7', text: '#9333EA' },
    'Peach & Warm Vanilla': { bg: '#FFEDD5', border: '#FED7AA', icing: '#FB923C', text: '#EA580C' },
    'Baby Blue & Cloud White': { bg: '#E0F2FE', border: '#BAE6FD', icing: '#38BDF8', text: '#0284C7' },
    'Vintage Cherry Lambeth': { bg: '#FFE4E6', border: '#FDA4AF', icing: '#E11D48', text: '#BE123C' }
  };

  // Live Price Calculation
  const priceBreakdown = useMemo(() => {
    const selectedTypeObj = cakeTypeOptions.find((t) => t.label === cakeType) || cakeTypeOptions[0];
    const base = selectedTypeObj.basePrice;
    const sizeMultiplier = sizeMultipliers[cakeSize]?.mult || 1.0;
    const flavorCost = flavorAddons[flavor] || 0;
    const fillingCost = fillingAddons[filling] || 0;
    const egglessCharge = isEggless ? 0 : 0; // Eggless is complimentary at Sweet Crumbs!

    const unitPrice = Math.round((base * sizeMultiplier) + flavorCost + fillingCost + egglessCharge);
    const total = unitPrice * quantity;

    return {
      base,
      sizeMultiplier,
      flavorCost,
      fillingCost,
      unitPrice,
      total
    };
  }, [cakeType, cakeSize, flavor, filling, isEggless, quantity]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!fullName.trim()) errors.fullName = 'Please provide your name';
    if (!mobileNumber.trim() || mobileNumber.trim().length < 10) errors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    if (!email.trim() || !email.includes('@')) errors.email = 'Please provide a valid email address';
    if (!deliveryDate) errors.deliveryDate = 'Please pick a delivery date';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const orderData: CustomCakeOrder = {
      fullName: fullName.trim(),
      mobileNumber: mobileNumber.trim(),
      email: email.trim(),
      cakeType,
      cakeSize,
      flavor,
      filling,
      frosting,
      themeColor,
      isEggless,
      cakeMessage: cakeMessage.trim(),
      quantity,
      deliveryDate,
      deliveryTime,
      specialInstructions: specialInstructions.trim(),
      totalPrice: priceBreakdown.total
    };

    onPlaceCakeOrder(orderData);
  };

  const currentTheme = themePalettes[themeColor] || themePalettes['Pastel Pink & Cream'];

  return (
    <section id="custom-cake" className="py-16 lg:py-24 bg-[#FFF5F7]/80 relative overflow-hidden">
      
      {/* Decorative Pastel Background Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#FFE5EC]/70 blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#FFF0E6]/60 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#FFCCD5] shadow-sm text-xs font-extrabold text-[#D83A6F]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B8B]" />
            <span>Interactive Bakery Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#4A2633]">
            “Design Your Dream Cake ♡”
          </h2>
          <p className="text-[#734B58] text-base sm:text-lg font-medium leading-relaxed">
            Customize every single layer, frosting flavor, and sweet piped message. Watch the live 3D cake mockup update in real time with automated transparent pricing!
          </p>
        </div>

        {/* Builder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#FAD2E1] shadow-kawaii space-y-6">
            
            {/* Step 1: Customer Info */}
            <div className="space-y-3 pb-4 border-b border-[#FCE7EC]">
              <h3 className="font-heading text-lg font-bold text-[#4A2633] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FFE5EC] text-[#D83A6F] flex items-center justify-center text-xs font-extrabold">1</span>
                <span>Contact & Order Details</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#5A382D] block mb-1">
                    Full Name *
                  </label>
                  <input
                    id="cake-fullname-input"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1] focus:border-[#FF4D6D] text-xs sm:text-sm font-semibold text-[#4A2633] outline-none"
                  />
                  {formErrors.fullName && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.fullName}</p>}
                </div>

                <div>
                  <label className="text-xs font-bold text-[#5A382D] block mb-1">
                    Mobile Number *
                  </label>
                  <input
                    id="cake-mobile-input"
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="10-digit number"
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1] focus:border-[#FF4D6D] text-xs sm:text-sm font-semibold text-[#4A2633] outline-none"
                  />
                  {formErrors.mobileNumber && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.mobileNumber}</p>}
                </div>

                <div>
                  <label className="text-xs font-bold text-[#5A382D] block mb-1">
                    Email Address *
                  </label>
                  <input
                    id="cake-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@gmail.com"
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1] focus:border-[#FF4D6D] text-xs sm:text-sm font-semibold text-[#4A2633] outline-none"
                  />
                  {formErrors.email && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.email}</p>}
                </div>
              </div>
            </div>

            {/* Step 2: Cake Architecture (Type & Size) */}
            <div className="space-y-4 pb-4 border-b border-[#FCE7EC]">
              <h3 className="font-heading text-lg font-bold text-[#4A2633] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FFE5EC] text-[#D83A6F] flex items-center justify-center text-xs font-extrabold">2</span>
                <span>Cake Type & Size</span>
              </h3>

              {/* Cake Type Cards */}
              <div>
                <label className="text-xs font-bold text-[#5A382D] block mb-2">Cake Style / Type</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cakeTypeOptions.map((opt) => (
                    <div
                      key={opt.label}
                      id={`cake-type-option-${opt.label.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setCakeType(opt.label)}
                      className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                        cakeType === opt.label
                          ? 'bg-[#FFE5EC] border-[#FF4D6D] shadow-sm ring-1 ring-[#FF4D6D]'
                          : 'bg-[#FFF9FA] border-[#FAD2E1] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#4A2633]">{opt.label}</span>
                        <span className="text-xs font-extrabold text-[#D83A6F]">from ₹{opt.basePrice}</span>
                      </div>
                      <p className="text-[11px] text-[#734B58] mt-0.5">{opt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="text-xs font-bold text-[#5A382D] block mb-1">Cake Size & Servings</label>
                  <select
                    id="cake-size-select"
                    value={cakeSize}
                    onChange={(e) => setCakeSize(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1] focus:border-[#FF4D6D] text-xs sm:text-sm font-semibold text-[#4A2633] outline-none"
                  >
                    {Object.keys(sizeMultipliers).map((sz) => (
                      <option key={sz} value={sz}>{sz}</option>
                    ))}
                  </select>
                </div>

                {/* Eggless Option Toggle as explicitly requested */}
                <div>
                  <label className="text-xs font-bold text-[#5A382D] block mb-1">Dietary Preference</label>
                  <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1]">
                    <button
                      type="button"
                      id="eggless-toggle-true"
                      onClick={() => setIsEggless(true)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                        isEggless ? 'bg-[#10B981] text-white shadow-sm' : 'text-[#734B58]'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-white" />
                      <span>100% Eggless 🌱</span>
                    </button>
                    <button
                      type="button"
                      id="eggless-toggle-false"
                      onClick={() => setIsEggless(false)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        !isEggless ? 'bg-[#EA580C] text-white shadow-sm' : 'text-[#734B58]'
                      }`}
                    >
                      <span>Contains Egg 🥚</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Flavor, Filling & Frosting */}
            <div className="space-y-4 pb-4 border-b border-[#FCE7EC]">
              <h3 className="font-heading text-lg font-bold text-[#4A2633] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FFE5EC] text-[#D83A6F] flex items-center justify-center text-xs font-extrabold">3</span>
                <span>Flavors, Fillings & Frosting</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Flavor */}
                <div>
                  <label className="text-xs font-bold text-[#5A382D] block mb-1">Cake Flavor</label>
                  <select
                    id="cake-flavor-select"
                    value={flavor}
                    onChange={(e) => setFlavor(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1] focus:border-[#FF4D6D] text-xs font-semibold text-[#4A2633] outline-none"
                  >
                    {Object.keys(flavorAddons).map((flv) => (
                      <option key={flv} value={flv}>
                        {flv} {flavorAddons[flv] > 0 ? `(+₹${flavorAddons[flv]})` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filling */}
                <div>
                  <label className="text-xs font-bold text-[#5A382D] block mb-1">Inner Filling</label>
                  <select
                    id="cake-filling-select"
                    value={filling}
                    onChange={(e) => setFilling(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1] focus:border-[#FF4D6D] text-xs font-semibold text-[#4A2633] outline-none"
                  >
                    {Object.keys(fillingAddons).map((fil) => (
                      <option key={fil} value={fil}>
                        {fil} {fillingAddons[fil] > 0 ? `(+₹${fillingAddons[fil]})` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Frosting */}
                <div>
                  <label className="text-xs font-bold text-[#5A382D] block mb-1">Frosting Finish</label>
                  <select
                    id="cake-frosting-select"
                    value={frosting}
                    onChange={(e) => setFrosting(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1] focus:border-[#FF4D6D] text-xs font-semibold text-[#4A2633] outline-none"
                  >
                    <option value="Silky Swiss Buttercream">Silky Swiss Buttercream</option>
                    <option value="Whipped Fresh Cream">Whipped Fresh Cream</option>
                    <option value="Cream Cheese Swirl">Cream Cheese Swirl</option>
                    <option value="Belgian Chocolate Ganache">Belgian Chocolate Ganache</option>
                  </select>
                </div>
              </div>

              {/* Theme / Color Selector */}
              <div>
                <label className="text-xs font-bold text-[#5A382D] block mb-2">Theme / Aesthetic Color Palette</label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {Object.keys(themePalettes).map((palette) => (
                    <button
                      type="button"
                      key={palette}
                      id={`palette-btn-${palette.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setThemeColor(palette)}
                      className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                        themeColor === palette
                          ? 'border-[#FF4D6D] bg-[#FFE5EC] shadow-sm ring-1 ring-[#FF4D6D]'
                          : 'border-[#FAD2E1] bg-[#FFF9FA] hover:bg-white'
                      }`}
                    >
                      <span
                        className="w-6 h-6 rounded-full border border-black/10 shadow-sm"
                        style={{ backgroundColor: themePalettes[palette].icing }}
                      />
                      <span className="text-[10px] font-bold text-[#4A2633] truncate w-full leading-tight">
                        {palette}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4: Custom Cake Message & Quantity */}
            <div className="space-y-4 pb-4 border-b border-[#FCE7EC]">
              <h3 className="font-heading text-lg font-bold text-[#4A2633] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FFE5EC] text-[#D83A6F] flex items-center justify-center text-xs font-extrabold">4</span>
                <span>Cake Message & Quantity</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-[#5A382D]">
                      Custom Cake Message (Piped on Top)
                    </label>
                    <span className="text-[10px] text-[#8A5666]">{cakeMessage.length}/35 chars</span>
                  </div>
                  <input
                    id="cake-message-input"
                    type="text"
                    maxLength={35}
                    value={cakeMessage}
                    onChange={(e) => setCakeMessage(e.target.value)}
                    placeholder="e.g. Happy 25th Birthday Sarah! ♡"
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1] focus:border-[#FF4D6D] text-xs sm:text-sm font-semibold text-[#4A2633] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#5A382D] block mb-1">
                    Quantity
                  </label>
                  <input
                    id="cake-quantity-input"
                    type="number"
                    min={1}
                    max={10}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1] focus:border-[#FF4D6D] text-xs sm:text-sm font-bold text-[#4A2633] text-center outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 5: Delivery & Special Instructions */}
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold text-[#4A2633] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FFE5EC] text-[#D83A6F] flex items-center justify-center text-xs font-extrabold">5</span>
                <span>Delivery Date & Special Instructions</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#5A382D] block mb-1">
                    Delivery / Pickup Date *
                  </label>
                  <input
                    id="cake-delivery-date"
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1] focus:border-[#FF4D6D] text-xs sm:text-sm font-semibold text-[#4A2633] outline-none"
                  />
                  {formErrors.deliveryDate && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.deliveryDate}</p>}
                </div>

                <div>
                  <label className="text-xs font-bold text-[#5A382D] block mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    id="cake-delivery-time"
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1] focus:border-[#FF4D6D] text-xs sm:text-sm font-semibold text-[#4A2633] outline-none"
                  >
                    <option value="11:00 AM - 1:00 PM (Morning)">11:00 AM - 1:00 PM (Morning)</option>
                    <option value="2:00 PM - 4:00 PM (Afternoon)">2:00 PM - 4:00 PM (Afternoon)</option>
                    <option value="4:00 PM - 6:00 PM (Evening)">4:00 PM - 6:00 PM (Evening)</option>
                    <option value="7:00 PM - 9:30 PM (Night)">7:00 PM - 9:30 PM (Night)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#5A382D] block mb-1">
                  Special Instructions / Requests
                </label>
                <textarea
                  id="cake-special-instructions"
                  rows={2}
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="e.g., Less sugar, extra candles, ribbon color..."
                  className="w-full px-3 py-2 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1] focus:border-[#FF4D6D] text-xs sm:text-sm text-[#4A2633] outline-none resize-none"
                />
              </div>
            </div>

            {/* Place Order CTA Button */}
            <button
              type="submit"
              id="place-custom-cake-order-btn"
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF758F] to-[#FF4D6D] text-white font-heading text-lg font-bold shadow-lg hover:shadow-xl hover:from-[#FF4D6D] hover:to-[#C9184A] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>Place My Order ♡ (₹{priceBreakdown.total})</span>
            </button>

          </form>

          {/* Right Column: Live Visual Cake Preview & Order Summary */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* Live Visual Cake Mockup Card */}
            <div className="bg-white rounded-3xl p-6 border-2 border-white shadow-kawaii text-center relative overflow-hidden" style={{ backgroundColor: currentTheme.bg }}>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#A24864] bg-white/80 px-3 py-1 rounded-full border border-white">
                  Live Icing Visualizer
                </span>
                {isEggless && (
                  <span className="text-[10px] font-bold bg-[#ECFDF5] text-[#059669] px-2 py-0.5 rounded-full border border-[#A7F3D0]">
                    🌱 Eggless
                  </span>
                )}
              </div>

              {/* Simulated 2D Cake Plate with Live Piped Message */}
              <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-white shadow-2xl p-4 flex flex-col items-center justify-center border-8 border-white/80 transition-all duration-500">
                
                {/* Cake Tier Base */}
                <div
                  className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border-4 flex flex-col items-center justify-center p-3 relative shadow-inner transition-colors duration-500"
                  style={{
                    backgroundColor: currentTheme.bg,
                    borderColor: currentTheme.icing
                  }}
                >
                  {/* Decorative frosting rosettes around rim */}
                  <div className="absolute inset-1 rounded-full border-2 border-dashed opacity-60 pointer-events-none" style={{ borderColor: currentTheme.icing }} />
                  
                  {/* Center Cake Icon / Illustration */}
                  <div className="text-2xl mb-1 select-none">🎂</div>

                  {/* Piped Icing Message */}
                  <div className="text-center z-10 px-2 max-w-full">
                    <span
                      className="font-hand text-lg sm:text-xl font-bold leading-tight block break-words drop-shadow-sm"
                      style={{ color: currentTheme.text }}
                    >
                      {cakeMessage || 'Your Message Here ♡'}
                    </span>
                  </div>

                  {/* Flavor Badge */}
                  <div className="mt-1">
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-white/90 px-2 py-0.5 rounded-full text-[#5A2E3B] shadow-sm border border-black/5">
                      {flavor.split(' ')[0]}
                    </span>
                  </div>
                </div>

                {/* Floating sugar sprinkles decoration */}
                <span className="absolute top-2 right-6 text-sm">✨</span>
                <span className="absolute bottom-4 left-6 text-sm">🍓</span>
                <span className="absolute top-8 left-4 text-sm">🌸</span>
              </div>

              <div className="mt-4 text-xs font-bold text-[#5A2E3B]">
                Theme: <span style={{ color: currentTheme.text }}>{themeColor}</span>
              </div>
            </div>

            {/* Live Price Calculator & Order Summary Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#FAD2E1] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#FCE7EC]">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#D83A6F]" />
                  <h4 className="font-heading text-base font-bold text-[#4A2633]">Live Order Summary</h4>
                </div>
                <span className="text-[11px] font-bold text-[#10B981] bg-[#ECFDF5] px-2 py-0.5 rounded-full border border-[#A7F3D0]">
                  Instant Calculation
                </span>
              </div>

              <div className="space-y-2 text-xs text-[#5A382D]">
                <div className="flex justify-between">
                  <span>Cake Base: <strong>{cakeType}</strong></span>
                  <span>₹{priceBreakdown.base}</span>
                </div>

                <div className="flex justify-between">
                  <span>Size Multiplier: <strong>{cakeSize.split(' ')[0]}</strong></span>
                  <span>x{priceBreakdown.sizeMultiplier}</span>
                </div>

                {priceBreakdown.flavorCost > 0 && (
                  <div className="flex justify-between">
                    <span>Premium Flavor ({flavor})</span>
                    <span>+₹{priceBreakdown.flavorCost}</span>
                  </div>
                )}

                {priceBreakdown.fillingCost > 0 && (
                  <div className="flex justify-between">
                    <span>Artisan Filling ({filling})</span>
                    <span>+₹{priceBreakdown.fillingCost}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#10B981] font-semibold">
                  <span>Eggless Preparation</span>
                  <span>FREE ♡</span>
                </div>

                <div className="flex justify-between text-[#10B981] font-semibold">
                  <span>Hand-Piped Icing Inscription</span>
                  <span>FREE ♡</span>
                </div>

                {quantity > 1 && (
                  <div className="flex justify-between pt-1 border-t border-dashed border-[#FCE7EC] font-semibold">
                    <span>Quantity Multiplier</span>
                    <span>x{quantity}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[#FAD2E1] flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-[#8A5666] block uppercase font-bold">Estimated Total</span>
                  <span className="text-2xl font-heading font-extrabold text-[#D83A6F]">
                    ₹{priceBreakdown.total}
                  </span>
                </div>
                <span className="text-xs text-[#734B58] bg-[#FFF0F4] px-3 py-1 rounded-full border border-[#FFCCD5]">
                  Inclusive of all taxes ♡
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
