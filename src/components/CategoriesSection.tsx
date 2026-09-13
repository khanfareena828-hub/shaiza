import React from 'react';
import { CATEGORIES } from '../data/bakeryData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory: (categoryName: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-12 lg:py-18 bg-[#FFF2F5]/60 relative overflow-hidden">
      {/* Organic blob background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5EC] border border-[#FFCCD5] text-xs font-bold text-[#D83A6F]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handmade Delights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#4A2633]">
            Explore Our Sweet Categories 🧁
          </h2>
          <p className="text-[#734B58] text-base font-medium">
            From cloud-soft cupcakes to lavish multi-tiered cakes, choose your indulgence.
          </p>
        </div>

        {/* 5 Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              id={`cat-card-${cat.id.toLowerCase()}`}
              onClick={() => onSelectCategory(cat.name)}
              className="group cursor-pointer bg-white rounded-3xl p-4 sm:p-5 border border-[#FAD2E1] hover:border-[#FF8FAB] shadow-sm hover:shadow-kawaii-hover transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Subtle pastel circular background behind image */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#FFE5EC] to-[#FFF0F4] p-1.5 mb-3 group-hover:scale-105 transition-transform duration-300 relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-full shadow-sm"
                />
                <span className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-base border border-[#FAD2E1]">
                  {cat.icon}
                </span>
              </div>

              {/* Title & Count */}
              <h3 className="font-heading text-lg font-bold text-[#4A2633] group-hover:text-[#D83A6F] transition-colors mb-1">
                {cat.name}
              </h3>
              <p className="text-xs text-[#8A5666] line-clamp-2 mb-3 leading-relaxed">
                {cat.description}
              </p>

              <div className="mt-auto inline-flex items-center gap-1 text-xs font-bold text-[#D83A6F] group-hover:underline">
                <span>Browse {cat.name}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
