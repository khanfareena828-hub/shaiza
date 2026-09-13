import React, { useState } from 'react';
import { Product, CartItem, CustomizedCard, CustomCakeOrder } from './types';
import { PRODUCTS } from './data/bakeryData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoriesSection } from './components/CategoriesSection';
import { BakeryStory } from './components/BakeryStory';
import { BestSellers } from './components/BestSellers';
import { WishingCardsSection } from './components/WishingCardsSection';
import { CustomCakeSection } from './components/CustomCakeSection';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { SpecialOffer } from './components/SpecialOffer';
import { GalleryAndReviews } from './components/GalleryAndReviews';
import { LocationAndContact } from './components/LocationAndContact';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { Heart, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'initial-item-1',
      type: 'product',
      product: PRODUCTS[0], // Strawberry Cupcake
      quantity: 2,
      unitPrice: PRODUCTS[0].price
    }
  ]);
  const [attachedWishingCard, setAttachedWishingCard] = useState<CustomizedCard | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Category filter state for syncing categories section with best sellers
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');

  // Order Confirmation State
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [confirmedCustomCake, setConfirmedCustomCake] = useState<CustomCakeOrder | null>(null);
  const [confirmedTotal, setConfirmedTotal] = useState<number>(0);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Add standard product to cart
  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product?.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product?.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: `item-${Date.now()}-${product.id}`,
          type: 'product',
          product,
          quantity,
          unitPrice: product.price
        }
      ];
    });

    showToast(`Added ${quantity}x ${product.name} to your sweet box! 🧁♡`);
  };

  // Update cart item quantity
  const handleUpdateQty = (itemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove cart item
  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
    showToast('Removed item from your cart.');
  };

  // Add customized wishing card to current order
  const handleAddWishingCardToOrder = (card: CustomizedCard) => {
    setAttachedWishingCard(card);
    showToast(`Attached "${card.title}" Wishing Card to your order! 💌♡`);
    setIsCartOpen(true);
  };

  const handleRemoveAttachedCard = () => {
    setAttachedWishingCard(null);
    showToast('Removed wishing card from your order.');
  };

  // Custom cake order placed directly from Custom Cake Section
  const handlePlaceCustomCakeOrder = (order: CustomCakeOrder) => {
    setConfirmedCustomCake(order);
    setConfirmedTotal(order.totalPrice);
    setIsConfirmationOpen(true);
  };

  // Checkout from Cart Drawer
  const handleCartCheckout = (finalTotal: number) => {
    setIsCartOpen(false);
    setConfirmedCustomCake(null);
    setConfirmedTotal(finalTotal);
    setIsConfirmationOpen(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // Confirm final order from Confirmation Modal
  const handleConfirmFinalOrder = () => {
    setIsConfirmationOpen(false);
    setCartItems([]);
    setAttachedWishingCard(null);
    setConfirmedCustomCake(null);
    showToast('Order confirmed! We are baking your treats with lots of love! 🌸♡');
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFF8F8] text-[#4A352F] flex flex-col selection:bg-[#FFCCD5] selection:text-[#882946]">
      
      {/* Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={(category) => {
          setSelectedCategoryFilter(category);
          scrollTo('bestsellers');
        }}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        
        {/* 🧁 Hero Section */}
        <Hero
          onExploreTreats={() => scrollTo('bestsellers')}
          onOrderCustomCake={() => scrollTo('custom-cake')}
        />

        {/* 🍪 Categories Section */}
        <CategoriesSection
          onSelectCategory={(categoryName) => {
            setSelectedCategoryFilter(categoryName);
            scrollTo('bestsellers');
          }}
        />

        {/* 🌸 Bakery Story ("Baked With Love", "Made Fresh Every Day", "Sweetness in Every Bite") */}
        <BakeryStory />

        {/* 🧁 Best Sellers Section (All 8 prompt products + INR prices) */}
        <BestSellers
          selectedCategoryFilter={selectedCategoryFilter}
          onAddToCart={handleAddToCart}
        />

        {/* 💌 Wishing Cards — Main Feature ("Send a Little Sweetness ♡") */}
        <WishingCardsSection
          onAddCardToOrder={handleAddWishingCardToOrder}
        />

        {/* 🎂 Custom Cake Order ("Design Your Dream Cake ♡" with Live Price & Preview) */}
        <CustomCakeSection
          onPlaceCakeOrder={handlePlaceCustomCakeOrder}
        />

        {/* 🎁 Special Offer (20% OFF Custom Cake) */}
        <SpecialOffer
          onOrderNow={() => scrollTo('custom-cake')}
        />

        {/* 📸 Gallery & Customer Reviews */}
        <GalleryAndReviews />

        {/* 📍 Contact & Location ("Find Our Bakery ♡" TV Centre, Aurangabad) */}
        <LocationAndContact />

      </main>

      {/* Footer */}
      <Footer />

      {/* 🛒 Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        cartItems={cartItems}
        attachedCard={attachedWishingCard}
        onClose={() => setIsCartOpen(false)}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onRemoveAttachedCard={handleRemoveAttachedCard}
        onCheckout={handleCartCheckout}
        onOpenWishingCards={() => scrollTo('wishing-cards')}
      />

      {/* 💗 Order Confirmation Popup Modal */}
      <OrderConfirmationModal
        isOpen={isConfirmationOpen}
        orderData={confirmedCustomCake}
        cartItems={cartItems}
        totalAmount={confirmedTotal}
        onClose={() => setIsConfirmationOpen(false)}
        onConfirmFinal={handleConfirmFinalOrder}
      />

      {/* Sweet Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-white/95 backdrop-blur-md text-[#4A2633] px-5 py-3 rounded-2xl shadow-kawaii border-2 border-[#FFCCD5] flex items-center gap-2.5 animate-in slide-in-from-bottom duration-200">
          <div className="w-7 h-7 rounded-full bg-[#FFE5EC] text-[#D83A6F] flex items-center justify-center text-xs font-extrabold shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs sm:text-sm font-bold">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
