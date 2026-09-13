import React, { useState } from 'react';
import { BAKERY_INFO } from '../data/bakeryData';
import { MapPin, Phone, Mail, Clock, Send, Check, Heart, Sparkles, MessageSquare } from 'lucide-react';

export const LocationAndContact: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryMessage.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMessage('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-[#FFF9F9] to-[#FFF0F4] relative overflow-hidden">
      
      {/* Decorative Pastel Background */}
      <div className="absolute top-0 right-1/3 w-80 h-80 rounded-full bg-[#FFE5EC]/50 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#FFF0E6]/60 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching prompt: Find Our Bakery ♡ */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white border border-[#FFCCD5] text-xs font-bold text-[#D83A6F] shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-[#D83A6F]" />
            <span>We would Love to See You</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#4A2633]">
            “Find Our Bakery ♡”
          </h2>
          <p className="text-[#734B58] text-base sm:text-lg font-medium leading-relaxed">
            Drop by for a warm cup of coffee and freshly frosted cupcakes, or reach out to us for bulk orders, party catering, and customized dessert tables.
          </p>
        </div>

        {/* 2 Column Layout: Bakery Location Info Cards & Send Us a Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Official Contact & Location Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#FAD2E1] shadow-kawaii flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFE5EC] flex items-center justify-center text-2xl border border-[#FFCCD5]">
                  🧁
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-extrabold text-[#4A2633]">
                    {BAKERY_INFO.name}
                  </h3>
                  <p className="font-hand text-base text-[#D83A6F]">
                    {BAKERY_INFO.tagline}
                  </p>
                </div>
              </div>

              {/* Contact Info Items matching prompt details exactly */}
              <div className="space-y-4 text-sm text-[#5A382D]">
                {/* Location */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9FA] border border-[#FCE7EC]">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#D83A6F] border border-[#FAD2E1] shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9E3A5A] block">
                      Bakery Location
                    </span>
                    <span className="font-bold text-[#4A2633] text-base">
                      {BAKERY_INFO.address}
                    </span>
                    <span className="text-xs text-[#8A5666] block mt-0.5">
                      Landmark: Near TV Centre Circle, Aurangabad (Chhatrapati Sambhajinagar)
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9FA] border border-[#FCE7EC]">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#D83A6F] border border-[#FAD2E1] shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#9E3A5A] block">
                        Call & WhatsApp
                      </span>
                      <a
                        href={`tel:${BAKERY_INFO.phone}`}
                        className="font-bold text-[#4A2633] text-base hover:text-[#D83A6F] transition-colors"
                      >
                        +91 {BAKERY_INFO.phone}
                      </a>
                    </div>
                    <a
                      href={`https://wa.me/91${BAKERY_INFO.phone}?text=Hi%20Sweet%20Crumbs%20Bakery!%20I%20would%20love%20to%20order%20some%20sweet%20treats%20♡`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-[#10B981] text-white text-xs font-bold shadow-sm hover:bg-[#059669] transition-all flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9FA] border border-[#FCE7EC]">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#D83A6F] border border-[#FAD2E1] shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9E3A5A] block">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${BAKERY_INFO.email}`}
                      className="font-bold text-[#4A2633] text-base hover:text-[#D83A6F] transition-colors break-all"
                    >
                      {BAKERY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFF9FA] border border-[#FCE7EC]">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#D83A6F] border border-[#FAD2E1] shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9E3A5A] block">
                      Bakery Timings
                    </span>
                    <span className="font-bold text-[#4A2633]">
                      {BAKERY_INFO.hours}
                    </span>
                    <span className="text-xs text-[#10B981] font-semibold block mt-0.5">
                      • Open all 7 days with fresh hot oven batches
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Location Map Preview Card */}
            <div className="rounded-2xl overflow-hidden border border-[#FAD2E1] bg-[#FFF0F4] p-4 text-center space-y-2 relative">
              <span className="text-2xl block">🗺️</span>
              <h4 className="font-heading text-sm font-bold text-[#4A2633]">
                Visiting Sweet Crumbs in Aurangabad
              </h4>
              <p className="text-xs text-[#734B58] max-w-sm mx-auto">
                We are conveniently located at TV Centre. Parking available for pickup orders!
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=TV+Centre+Aurangabad+Maharashtra`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#D83A6F] hover:underline pt-1"
              >
                <span>Open in Google Maps</span>
                <MapPin className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Send Us A Sweet Note Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#FAD2E1] shadow-kawaii flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5EC] text-xs font-bold text-[#D83A6F] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quick Inquiry</span>
              </div>
              
              <h3 className="font-heading text-2xl font-extrabold text-[#4A2633] mb-2">
                Send Us a Sweet Note ♡
              </h3>
              
              <p className="text-xs sm:text-sm text-[#734B58] font-medium leading-relaxed mb-6">
                Have a question about allergens, custom tier cake consultation, or corporate gifting? Write to us and our head baker will reply within an hour!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-[#5A382D] block mb-1">
                    Your Name *
                  </label>
                  <input
                    id="inquiry-name-input"
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Priyadarshini"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1] focus:border-[#FF4D6D] focus:ring-2 focus:ring-[#FF4D6D]/20 text-xs sm:text-sm font-semibold text-[#4A2633] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#5A382D] block mb-1">
                    Email / Phone *
                  </label>
                  <input
                    id="inquiry-contact-input"
                    type="text"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="e.g. 7558239803 or email@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1] focus:border-[#FF4D6D] focus:ring-2 focus:ring-[#FF4D6D]/20 text-xs sm:text-sm font-semibold text-[#4A2633] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#5A382D] block mb-1">
                    How can we make your day sweeter? *
                  </label>
                  <textarea
                    id="inquiry-message-input"
                    rows={4}
                    required
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Tell us what delicious dream you have in mind..."
                    className="w-full p-3.5 rounded-xl bg-[#FFF9FA] border border-[#FAD2E1] focus:border-[#FF4D6D] focus:ring-2 focus:ring-[#FF4D6D]/20 text-xs sm:text-sm text-[#4A2633] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="send-inquiry-btn"
                  className={`w-full py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all ${
                    submitted
                      ? 'bg-[#10B981] text-white'
                      : 'bg-gradient-to-r from-[#FF758F] to-[#FF4D6D] text-white hover:from-[#FF4D6D] hover:to-[#C9184A]'
                  }`}
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Message Sent! We will contact you shortly ♡</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Sweet Message ♡</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="pt-4 border-t border-[#FCE7EC] text-center text-xs text-[#8A5666]">
              <span>We usually respond within 30 minutes during open hours ♡</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
