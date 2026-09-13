import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/bakeryData';
import { Star, Plus, Minus, Check, Heart, Search, Sparkles } from 'lucide-react';

interface BestSellersProps {
  onAddToCart: (product: Product, quantity: number) => void;
  selectedCategoryFilter?: string;
}

export const BestSellers: React.FC<BestSellersProps> = ({ onAddToCart, selectedCategoryFilter }) => {
  const [activeTab, setActiveTab] = useState<string>(selectedCategoryFilter || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [justAdded, setJustAdded] = useState<Record<string, boolean>>({});

  // Sync category filter if changed from parent
  React.useEffect(() => {
    if (selectedCategoryFilter) {
      setActiveTab(selectedCategoryFilter);
    }
  }, [selectedCategoryFilter]);

  const categories = ['All', 'Cakes', 'Cupcakes', 'Cookies', 'Pastries', 'Donuts', 'Muffins', 'Waffles'];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesTab = activeTab === 'All' ? true : p.category.toLowerCase() === activeTab.toLowerCase();
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getQty = (id: string) => quantities[id] || 1;

  const handleQtyChange = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const updated = Math.max(1, Math.min(10, current + delta));
      return { ...prev, [id]: updated };
    });
  };

  const handleAdd = (product: Product) => {
    const qty = getQty(product.id);
    onAddToCart(product, qty);
    setJustAdded((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setJustAdded((prev) => ({ ...prev, [product.id]: false }));
    }, 1400);
  };

  return (
    <section id="bestsellers" className="py-16 lg:py-24 bg-[#FFF9F9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5EC] border border-[#FFCCD5] text-xs font-bold text-[#D83A6F]">
            <Heart className="w-3.5 h-3.5 fill-[#D83A6F]" />
            <span>Our Most Loved Treats</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#4A2633]">
            Bakery Best Sellers 🧁
          </h2>
          <p className="text-[#734B58] text-base sm:text-lg font-medium">
            Handcrafted with organic flours, churned sweet butter, and lots of hugs.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-[#FCE7EC]">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-tab-${cat.toLowerCase()}`}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === cat
                    ? 'bg-[#FF4D6D] text-white shadow-md shadow-[#FF4D6D]/20 scale-105'
                    : 'bg-white text-[#6F4E5A] border border-[#FAD2E1] hover:bg-[#FFE5EC] hover:text-[#4A2633]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#A26D7C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="product-search-input"
              type="text"
              placeholder="Search cupcakes, cakes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#FAD2E1] focus:border-[#FF4D6D] focus:ring-2 focus:ring-[#FF4D6D]/20 text-xs sm:text-sm font-medium placeholder-[#B88B97] text-[#4A2633] outline-none shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.map((product) => {
            const isAdded = justAdded[product.id];
            const qty = getQty(product.id);

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group bg-white rounded-3xl p-4 sm:p-5 border border-[#FCE7EC] hover:border-[#FFB3C6] shadow-sm hover:shadow-kawaii-hover transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Product Badge */}
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#FFE5EC]/95 backdrop-blur-sm border border-[#FFCCD5] text-[11px] font-extrabold text-[#D83A6F] shadow-sm">
                    {product.badge}
                  </span>
                )}

                {/* Eggless tag */}
                {product.isEggless && (
                  <span className="absolute top-4 right-4 z-10 px-2 py-0.5 rounded-md bg-[#ECFDF5] border border-[#A7F3D0] text-[10px] font-bold text-[#059669] flex items-center gap-1 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#059669]" />
                    Eggless
                  </span>
                )}

                {/* Image with cute hover zoom */}
                <div className="w-full h-52 sm:h-56 rounded-2xl overflow-hidden bg-[#FFF0F4] relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Title & Rating */}
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#A26D7C] uppercase tracking-wider">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 bg-[#FFF9EB] px-2 py-0.5 rounded-full border border-[#FDE68A]">
                      <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                      <span className="text-xs font-bold text-[#92400E]">{product.rating}</span>
                      <span className="text-[10px] text-[#B45309]">({product.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#4A2633] group-hover:text-[#D83A6F] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#734B58] line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price & Add to Cart Controls */}
                <div className="pt-3 border-t border-[#FDF2F4] flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#A26D7C] block uppercase font-bold">Price</span>
                      <span className="text-xl font-heading font-extrabold text-[#D83A6F]">
                        ₹{product.price}
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center bg-[#FFF2F5] rounded-full p-1 border border-[#FAD2E1]">
                      <button
                        id={`qty-dec-${product.id}`}
                        onClick={() => handleQtyChange(product.id, -1)}
                        className="w-6 h-6 rounded-full bg-white text-[#734B58] hover:bg-[#FFE5EC] flex items-center justify-center text-xs shadow-sm transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-bold text-[#4A2633]">
                        {qty}
                      </span>
                      <button
                        id={`qty-inc-${product.id}`}
                        onClick={() => handleQtyChange(product.id, 1)}
                        className="w-6 h-6 rounded-full bg-white text-[#734B58] hover:bg-[#FFE5EC] flex items-center justify-center text-xs shadow-sm transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Add To Cart Button */}
                  <button
                    id={`add-to-cart-btn-${product.id}`}
                    onClick={() => handleAdd(product)}
                    className={`w-full py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm ${
                      isAdded
                        ? 'bg-[#10B981] text-white scale-[0.98]'
                        : 'bg-gradient-to-r from-[#FF758F] to-[#FF4D6D] text-white hover:from-[#FF4D6D] hover:to-[#C9184A] hover:shadow-md'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart! ♡</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Add to Cart • ₹{product.price * qty}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search Result */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#FAD2E1] p-8 max-w-md mx-auto">
            <span className="text-4xl block mb-2">🧁</span>
            <h3 className="font-heading text-lg font-bold text-[#4A2633]">No treats found!</h3>
            <p className="text-xs text-[#8A5666] mt-1 mb-4">
              Try searching with another keyword or pick from our categories.
            </p>
            <button
              onClick={() => {
                setActiveTab('All');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full bg-[#FF4D6D] text-white text-xs font-bold shadow-sm"
            >
              View All Treats
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
