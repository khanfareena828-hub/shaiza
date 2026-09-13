import React, { useState } from 'react';
import { CartItem, CustomizedCard } from '../types';
import { X, Plus, Minus, Trash2, Sparkles, Heart, ArrowRight, Tag, ShoppingBag } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface CartDrawerProps {
  isOpen: boolean;
  cartItems: CartItem[];
  attachedCard: CustomizedCard | null;
  onClose: () => void;
  onUpdateQty: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onRemoveAttachedCard: () => void;
  onCheckout: (finalTotal: number, discountAmount: number) => void;
  onOpenWishingCards: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  cartItems,
  attachedCard,
  onClose,
  onUpdateQty,
  onRemoveItem,
  onRemoveAttachedCard,
  onCheckout,
  onOpenWishingCards
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');

    if (!couponCode.trim()) return;

    if (couponCode.trim().toUpperCase() === BAKERY_INFO.discountCode) {
      const discount = Math.round(rawSubtotal * 0.2);
      setAppliedDiscount(discount);
      setCouponSuccess('20% Sweet Discount Applied! ♡');
    } else {
      setCouponError(`Invalid coupon code. Try ${BAKERY_INFO.discountCode}!`);
      setAppliedDiscount(0);
    }
  };

  const deliveryFee = rawSubtotal > 499 || rawSubtotal === 0 ? 0 : 49;
  const finalTotal = Math.max(0, rawSubtotal - appliedDiscount + deliveryFee);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#4A2633]/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div
          id="slide-cart-drawer"
          className="w-screen max-w-md bg-[#FFF9F9] shadow-2xl border-l-2 border-[#FFD0DC] flex flex-col justify-between"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Cart Header */}
          <div className="p-5 bg-gradient-to-r from-[#FFE5EC] via-[#FFF0F4] to-[#FFE5EC] border-b border-[#FAD2E1] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#D83A6F] shadow-sm border border-[#FAD2E1]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[#4A2633] flex items-center gap-1.5">
                  Your Sweet Cart
                  <Heart className="w-4 h-4 fill-[#FF8FAB] text-[#FF8FAB]" />
                </h3>
                <span className="text-xs text-[#8A5666]">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your box
                </span>
              </div>
            </div>

            <button
              id="close-cart-drawer-btn"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white text-[#734B58] border border-[#FAD2E1] hover:bg-[#FFE5EC] flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="p-5 overflow-y-auto flex-1 space-y-4">
            
            {/* Free Delivery Tracker */}
            {rawSubtotal > 0 && (
              <div className="bg-white rounded-2xl p-3 border border-[#FAD2E1] shadow-sm space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold text-[#4A2633]">
                  <span>
                    {rawSubtotal >= 499
                      ? '🎉 You unlocked FREE Delivery in Aurangabad!'
                      : `Add ₹${499 - rawSubtotal} more for FREE Delivery!`}
                  </span>
                  <span className="text-[#D83A6F]">{Math.min(100, Math.round((rawSubtotal / 499) * 100))}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#FFE5EC] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FF758F] to-[#FF4D6D] rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (rawSubtotal / 499) * 100)}%` }}
                  />
                </div>
              </div>
            )}

            {/* Attached Wishing Card Pill if present */}
            {attachedCard && (
              <div className="bg-[#FFF0F4] rounded-2xl p-3.5 border border-[#FFCCD5] shadow-sm relative space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C9184A] flex items-center gap-1.5">
                    <span>💌</span> Attached Wishing Card (FREE)
                  </span>
                  <button
                    onClick={onRemoveAttachedCard}
                    className="text-[#A24864] hover:text-[#C9184A] p-1"
                    title="Remove card"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-xs font-bold text-[#4A2633]">
                  {attachedCard.title} — For {attachedCard.recipientName}
                </div>
                <div className="text-[11px] text-[#734B58] italic truncate">
                  "{attachedCard.message}"
                </div>
              </div>
            )}

            {/* If Cart is Empty */}
            {cartItems.length === 0 ? (
              <div className="py-12 text-center space-y-3">
                <span className="text-5xl block select-none">🧁</span>
                <h4 className="font-heading text-base font-bold text-[#4A2633]">
                  Your dessert box is empty!
                </h4>
                <p className="text-xs text-[#8A5666] max-w-xs mx-auto">
                  Treat yourself or a friend to delicious cupcakes, melt-in-mouth cakes, and cookies.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF758F] to-[#FF4D6D] text-white text-xs font-bold shadow-md hover:from-[#FF4D6D] hover:to-[#C9184A]"
                >
                  Explore Treats ♡
                </button>
              </div>
            ) : (
              /* Item Cards */
              cartItems.map((item) => (
                <div
                  key={item.id}
                  id={`cart-item-card-${item.id}`}
                  className="bg-white rounded-2xl p-3.5 border border-[#FAD2E1] shadow-sm flex gap-3 items-center"
                >
                  {/* Image */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#FFF0F4] border border-[#FCE7EC] shrink-0">
                    <img
                      src={
                        item.product?.image ||
                        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=200&q=80'
                      }
                      alt={item.product?.name || 'Bakery Item'}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-heading text-xs sm:text-sm font-bold text-[#4A2633] truncate">
                        {item.product?.name || item.customCake?.cakeType}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#A26D7C] hover:text-[#E11D48] p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-xs font-extrabold text-[#D83A6F]">
                      ₹{item.unitPrice * item.quantity}
                      <span className="text-[10px] text-[#A26D7C] font-normal ml-1">
                        (₹{item.unitPrice} each)
                      </span>
                    </div>

                    {/* Quantity Adjustment */}
                    <div className="flex items-center gap-2 pt-1">
                      <div className="flex items-center bg-[#FFF2F5] rounded-full p-0.5 border border-[#FAD2E1]">
                        <button
                          onClick={() => onUpdateQty(item.id, -1)}
                          className="w-5 h-5 rounded-full bg-white text-[#734B58] flex items-center justify-center text-xs shadow-sm"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#4A2633]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.id, 1)}
                          className="w-5 h-5 rounded-full bg-white text-[#734B58] flex items-center justify-center text-xs shadow-sm"
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Prompt to add a wishing card if none attached yet */}
            {cartItems.length > 0 && !attachedCard && (
              <div
                onClick={() => {
                  onClose();
                  onOpenWishingCards();
                }}
                className="bg-gradient-to-r from-[#FFF0F4] to-[#FFE5EC] rounded-2xl p-3.5 border border-dashed border-[#FF8FAB] cursor-pointer hover:bg-[#FFE0E9] transition-all flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">💌</span>
                  <div>
                    <span className="font-bold text-[#C9184A] block">Add a FREE Digital Wishing Card</span>
                    <span className="text-[11px] text-[#734B58]">Birthday, Anniversary, Thank You & more</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#D83A6F] underline">Add Now ♡</span>
              </div>
            )}

          </div>

          {/* Cart Footer: Summary & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 bg-white border-t border-[#FAD2E1] space-y-4">
              
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-[#A26D7C] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Coupon: SWEETLOVE20"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1] focus:border-[#FF4D6D] text-xs font-bold text-[#4A2633] uppercase outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#FFF0F4] text-[#D83A6F] border border-[#FFCCD5] text-xs font-bold hover:bg-[#FFE0E9] transition-all"
                >
                  Apply
                </button>
              </form>

              {couponSuccess && (
                <div className="text-[11px] font-bold text-[#10B981] bg-[#ECFDF5] px-3 py-1 rounded-lg border border-[#A7F3D0]">
                  {couponSuccess}
                </div>
              )}
              {couponError && (
                <div className="text-[11px] font-bold text-red-500 bg-red-50 px-3 py-1 rounded-lg border border-red-200">
                  {couponError}
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#5A382D]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{rawSubtotal}</span>
                </div>

                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-[#10B981] font-semibold">
                    <span>Discount (20% OFF)</span>
                    <span>-₹{appliedDiscount}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Delivery in Aurangabad</span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? (
                      <span className="text-[#10B981]">FREE ♡</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>

                <div className="pt-2 border-t border-[#FCE7EC] flex justify-between items-center text-sm font-extrabold text-[#4A2633]">
                  <span>Total Amount</span>
                  <span className="text-xl font-heading text-[#D83A6F]">
                    ₹{finalTotal}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                id="cart-checkout-btn"
                onClick={() => onCheckout(finalTotal, appliedDiscount)}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF758F] to-[#FF4D6D] text-white font-heading font-bold text-sm shadow-md hover:from-[#FF4D6D] hover:to-[#C9184A] transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout ♡</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
