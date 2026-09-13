import React, { useState } from 'react';
import { GALLERY_IMAGES, REVIEWS } from '../data/bakeryData';
import { Star, Heart, Camera, MessageCircleHeart, Sparkles, X } from 'lucide-react';

export const GalleryAndReviews: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof GALLERY_IMAGES)[0] | null>(null);

  const tags = ['All', 'Bespoke Cakes', 'Cupcakes', 'Celebration', 'Donuts', 'Pastries', 'Breakfast Sweet'];

  const filteredGallery = GALLERY_IMAGES.filter((img) =>
    activeTag === 'All' ? true : img.tag.toLowerCase() === activeTag.toLowerCase()
  );

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[#FFF9F9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ================= PINTEREST-STYLE GALLERY ================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFE5EC] border border-[#FFCCD5] text-xs font-bold text-[#D83A6F]">
              <Camera className="w-3.5 h-3.5" />
              <span>Aesthetic Moments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#4A2633]">
              The Sweet Crumbs Gallery 📸
            </h2>
            <p className="text-[#734B58] text-base font-medium">
              Snapshots of our recent bespoke creations, sprinkles, and celebration spreads.
            </p>
          </div>

          {/* Filter Tags */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {tags.map((tag) => (
              <button
                key={tag}
                id={`gallery-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeTag === tag
                    ? 'bg-[#FF4D6D] text-white shadow-sm'
                    : 'bg-white text-[#734B58] border border-[#FAD2E1] hover:bg-[#FFE5EC]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Masonry / Pinterest Style Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((img, idx) => (
              <div
                key={img.id}
                id={`gallery-card-${img.id}`}
                onClick={() => setSelectedPhoto(img)}
                className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-kawaii-hover transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer border border-[#FCE7EC]"
              >
                <div className={`w-full overflow-hidden ${idx % 2 === 0 ? 'h-72' : 'h-88'}`}>
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Pastel Caption Card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 border border-white/80 shadow-md flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D83A6F] block">
                        {img.tag}
                      </span>
                      <h4 className="font-heading text-sm font-bold text-[#4A2633] truncate">
                        {img.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#E11D48] font-bold">
                      <Heart className="w-3.5 h-3.5 fill-[#E11D48]" />
                      <span>{img.likes}</span>
                    </div>
                  </div>
                </div>

                {/* Corner Tag */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-white/80 text-[11px] font-bold text-[#5A2E3B] shadow-sm">
                  {img.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CUSTOMER REVIEWS ================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF0E6] border border-[#FED7AA] text-xs font-bold text-[#EA580C]">
              <MessageCircleHeart className="w-3.5 h-3.5" />
              <span>Loved by Aurangabad</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#4A2633]">
              What Our Sweet Friends Say ♡
            </h2>
            <p className="text-[#734B58] text-base font-medium">
              Real reviews from real dessert lovers who celebrated with our cakes and wishing cards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                id={`review-card-${rev.id}`}
                className="bg-white rounded-3xl p-6 border border-[#FAD2E1] shadow-sm hover:shadow-kawaii-hover transition-all duration-300 flex flex-col justify-between relative"
              >
                <div className="space-y-4">
                  {/* Star Rating & Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>
                    <span className="text-xs text-[#A26D7C]">{rev.date}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-[#5A382D] leading-relaxed font-medium italic">
                    "{rev.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#FDF2F4] flex items-center gap-3 mt-4">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#FFCCD5]"
                  />
                  <div>
                    <h4 className="font-heading text-sm font-bold text-[#4A2633]">
                      {rev.name}
                    </h4>
                    <span className="text-[11px] text-[#D83A6F] font-semibold block">
                      Ordered: {rev.favoriteDessert}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-[#4A2633]/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl overflow-hidden max-w-lg w-full border-4 border-white shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-[#4A2633] flex items-center justify-center shadow-md z-10 hover:bg-[#FFE5EC]"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-full h-80 overflow-hidden">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#D83A6F] font-bold block">{selectedPhoto.tag}</span>
                <h4 className="font-heading text-base font-bold text-[#4A2633]">{selectedPhoto.title}</h4>
              </div>
              <div className="flex items-center gap-1 text-xs text-[#E11D48] font-bold bg-[#FFE5EC] px-3 py-1.5 rounded-full">
                <Heart className="w-3.5 h-3.5 fill-[#E11D48]" />
                <span>{selectedPhoto.likes} Likes</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
