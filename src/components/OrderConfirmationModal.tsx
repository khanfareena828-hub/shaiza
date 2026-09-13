import React from 'react';
import { CustomCakeOrder, CartItem } from '../types';
import { X, Check, Heart, Sparkles, Download, Calendar, Phone, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OrderConfirmationModalProps {
  isOpen: boolean;
  orderData: CustomCakeOrder | null;
  cartItems?: CartItem[];
  totalAmount: number;
  onClose: () => void;
  onConfirmFinal: () => void;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  isOpen,
  orderData,
  cartItems,
  totalAmount,
  onClose,
  onConfirmFinal
}) => {
  if (!isOpen) return null;

  const handleDownloadSlip = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#4A2633]/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-300">
      <div
        id="order-confirmation-popup"
        className="relative w-full max-w-lg bg-gradient-to-b from-[#FFF5F8] via-[#FFF9F9] to-white rounded-[36px] border-4 border-white shadow-2xl p-6 sm:p-8 text-center overflow-hidden"
      >
        {/* Decorative background stars & hearts */}
        <div className="absolute top-4 left-6 text-2xl animate-float pointer-events-none">🌸</div>
        <div className="absolute top-6 right-8 text-2xl animate-float-delayed pointer-events-none">✨</div>
        <div className="absolute bottom-6 left-6 text-2xl animate-float pointer-events-none">💖</div>
        <div className="absolute bottom-8 right-6 text-2xl animate-float-delayed pointer-events-none">🍓</div>

        {/* Close Button */}
        <button
          id="close-confirmation-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white text-[#734B58] border border-[#FAD2E1] hover:bg-[#FFE5EC] flex items-center justify-center transition-colors shadow-sm"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Cute Cupcake Illustration & Animated Badge */}
        <div className="relative mx-auto w-28 h-28 rounded-full bg-gradient-to-tr from-[#FFCCD5] to-[#FFE5EC] p-3 shadow-kawaii mb-4 border-4 border-white flex items-center justify-center animate-bounce">
          <span className="text-6xl select-none">🧁</span>
          <span className="absolute -top-1 -right-1 text-2xl animate-pulse">✨</span>
          <span className="absolute -bottom-1 -left-1 text-2xl animate-pulse">💖</span>
        </div>

        {/* Headings Matching Prompt */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFE5EC] border border-[#FFCCD5] text-xs font-extrabold text-[#D83A6F]">
            <Heart className="w-3.5 h-3.5 fill-[#D83A6F]" />
            <span>Order Placed With Love</span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#4A2633] tracking-tight">
            Yay! Your Sweet Order is Ready! ♡
          </h3>

          <p className="text-xs sm:text-sm text-[#734B58] font-medium leading-relaxed px-2">
            “Thank you for choosing Sweet Crumbs Bakery! Your delicious creation is being prepared with lots of love.”
          </p>
        </div>

        {/* Order Details Receipt Card */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#FAD2E1] shadow-sm text-left space-y-3 mb-6">
          
          <div className="flex items-center justify-between border-b border-[#FCE7EC] pb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E3A5A]">
              Sweet Receipt #{Math.floor(100000 + Math.random() * 900000)}
            </span>
            <span className="text-xs font-extrabold bg-[#ECFDF5] text-[#059669] px-2 py-0.5 rounded-full border border-[#A7F3D0]">
              Confirmed
            </span>
          </div>

          {/* If Custom Cake Order */}
          {orderData && (
            <div className="space-y-1.5 text-xs text-[#5A382D]">
              <div className="flex justify-between font-bold text-sm text-[#4A2633]">
                <span>{orderData.cakeType} ({orderData.cakeSize})</span>
                <span className="text-[#D83A6F]">₹{orderData.totalPrice}</span>
              </div>

              <div className="text-[11px] text-[#734B58]">
                <span>Flavor: <strong>{orderData.flavor}</strong></span> • <span>Frosting: <strong>{orderData.frosting}</strong></span>
              </div>

              {orderData.cakeMessage && (
                <div className="bg-[#FFF0F4] rounded-xl p-2 text-[11px] border border-[#FFCCD5] text-[#882946] italic font-medium">
                  Icing Inscription: "{orderData.cakeMessage}"
                </div>
              )}

              <div className="pt-2 border-t border-[#FDF2F4] text-[11px] text-[#734B58] space-y-1">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D83A6F]" />
                  <span>Scheduled: <strong>{orderData.deliveryDate || 'Today'}</strong> at <strong>{orderData.deliveryTime || 'Evening'}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#D83A6F]" />
                  <span>Customer: <strong>{orderData.fullName}</strong> ({orderData.mobileNumber})</span>
                </div>
              </div>
            </div>
          )}

          {/* If standard cart items */}
          {cartItems && cartItems.length > 0 && !orderData && (
            <div className="space-y-2 text-xs">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-[#5A382D]">
                  <span className="font-semibold">
                    {item.quantity}x {item.product?.name || item.customCake?.cakeType}
                  </span>
                  <span className="font-bold text-[#D83A6F]">₹{item.unitPrice * item.quantity}</span>
                </div>
              ))}
            </div>
          )}

          <div className="pt-3 border-t border-[#FAD2E1] flex justify-between items-center text-sm font-extrabold text-[#4A2633]">
            <span>Grand Total</span>
            <span className="text-lg text-[#D83A6F] font-heading">₹{totalAmount}</span>
          </div>

          <div className="bg-[#FFF8F8] rounded-xl p-2 text-[11px] text-[#8A5666] flex items-center gap-1.5 border border-[#FCE7EC]">
            <MapPin className="w-3.5 h-3.5 text-[#D83A6F] shrink-0" />
            <span>Pickup / Delivery: TV Centre, Aurangabad, Maharashtra</span>
          </div>
        </div>

        {/* Buttons as explicitly requested in prompt: Confirm Order | Edit Order */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            id="edit-order-back-btn"
            onClick={onClose}
            className="w-full sm:flex-1 py-3 rounded-full bg-white text-[#734B58] border-2 border-[#FAD2E1] font-bold text-xs sm:text-sm hover:bg-[#FFE5EC] transition-all"
          >
            Edit Order
          </button>

          <button
            id="confirm-order-finish-btn"
            onClick={onConfirmFinal}
            className="w-full sm:flex-1 py-3 rounded-full bg-gradient-to-r from-[#FF758F] to-[#FF4D6D] text-white font-bold text-xs sm:text-sm shadow-md hover:from-[#FF4D6D] hover:to-[#C9184A] transition-all flex items-center justify-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>Confirm Order ♡</span>
          </button>
        </div>

        <button
          onClick={handleDownloadSlip}
          className="mt-4 text-[11px] font-bold text-[#A26D7C] hover:text-[#D83A6F] inline-flex items-center gap-1 transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download Sweet Order Slip</span>
        </button>
      </div>
    </div>
  );
};
