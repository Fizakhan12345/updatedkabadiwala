import React from 'react';
import {
  Phone, Truck, MapPin, CheckCircle2, Star, ChevronRight,
  Scale, Clock, ShieldCheck, HelpCircle
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { SeoHead } from '../components/SeoHead';
import { BUSINESS_INFO } from '../data/business';
import { LOCALITIES, Locality } from '../data/localities';
import { getLocalBusinessSchema, getBreadcrumbSchema, getFAQSchema } from '../lib/seo';
import { getLocalityImage } from '../data/scrapImages';

interface LocalityDetailPageProps {
  locality: Locality;
  onNavigate: (path: string) => void;
  onRequestPickup: () => void;
}

export const LocalityDetailPage: React.FC<LocalityDetailPageProps> = ({
  locality,
  onNavigate,
  onRequestPickup
}) => {
  const localBusinessSchema = getLocalBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Areas We Serve', item: '/areas-we-serve/' },
    { name: locality.name, item: locality.path }
  ]);
  const faqSchema = getFAQSchema(locality.faqs);

  const neighborLocalities = LOCALITIES.filter(l => locality.neighborSlugs.includes(l.slug));
  const locIdx = LOCALITIES.findIndex(l => l.slug === locality.slug);
  const locPhoto = getLocalityImage(locIdx >= 0 ? locIdx : 0, locality.name);

  return (
    <>
      <SeoHead
        title={locality.metaTitle}
        description={locality.metaDescription}
        canonicalPath={locality.path}
        jsonLd={[localBusinessSchema, breadcrumbSchema, faqSchema]}
      />

      {/* BREADCRUMB */}
      <div className="bg-[#F7F5F0] border-b border-[#E4E0D8] py-2.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 flex-wrap text-[#66737D]">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); onNavigate('/'); }}
            className="hover:text-[#244E70]"
          >
            Home
          </a>
          <span>/</span>
          <a
            href="/areas-we-serve/"
            onClick={(e) => { e.preventDefault(); onNavigate('/areas-we-serve/'); }}
            className="hover:text-[#244E70]"
          >
            Areas We Serve
          </a>
          <span>/</span>
          <span className="font-semibold text-[#244E70]">{locality.name}</span>
        </div>
      </div>

      {/* LOCAL HERO - Warm Ivory Header */}
      <section className="bg-[#F7F5F0] py-10 lg:py-14 border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E0D8] text-[#3B6B8C] text-xs font-semibold mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#E56B4F]" />
              <span>Doorstep Scrap Collection in {locality.name}, Bhopal</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#244E70] mb-3 leading-tight">
              Kabadiwala {locality.name} Bhopal
            </h1>

            <p className="text-[#66737D] text-sm sm:text-base leading-relaxed mb-6">
              {locality.shortDesc}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onRequestPickup}
                className="px-5 py-3 bg-[#E56B4F] hover:bg-[#D4583C] text-white font-bold text-xs sm:text-sm rounded-md shadow-2xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Truck className="w-4 h-4" />
                <span>Book Pickup in {locality.name}</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-4 py-3 bg-white text-[#244E70] border border-[#244E70] hover:bg-[#F7F5F0] font-bold text-xs sm:text-sm rounded-md transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#244E70]" />
                <span>Call +91 8871600497</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(`Hello Kabadiwala Bhopal, I want to request scrap pickup in ${locality.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm rounded-md transition-all shadow-xs flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AEO / DIRECT LOCAL ANSWER */}
      <section className="py-8 bg-white border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F7F5F0] border border-[#E4E0D8] rounded-xl p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded bg-[#244E70] text-white flex items-center justify-center shrink-0 mt-0.5">
                <HelpCircle className="w-4 h-4 text-[#E9B949]" />
              </div>
              <div>
                <h2 className="text-base font-bold text-[#244E70] mb-1">
                  How can I sell scrap in {locality.name}, Bhopal?
                </h2>
                <p className="text-[#66737D] text-xs sm:text-sm leading-relaxed">
                  {locality.detailedContent.intro} To arrange doorstep collection, call or WhatsApp Kabadiwala Bhopal at <strong>+91 8871600497</strong>. Specify your location in {locality.name}, scrap items available, and preferred pickup slot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL PROFILE & PRIMARY SCRAP FOCUS */}
      <section className="py-12 bg-white border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Locality Explanation */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#F7F5F0] rounded-xl border border-[#E4E0D8] overflow-hidden">
                <div className="relative h-52 sm:h-60 overflow-hidden border-b border-[#E4E0D8]">
                  <img
                    src={locPhoto.src}
                    alt={locPhoto.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-white">
                    <p className="text-xs font-medium text-slate-100 flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-[#E9B949] shrink-0" />
                      <span>{locPhoto.caption} in {locality.name} Bhopal</span>
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#244E70] mb-3">
                    Scrap Collection Overview for {locality.name}
                  </h2>
                  <p className="text-[#66737D] text-xs sm:text-sm leading-relaxed mb-4">
                    {locality.detailedContent.localityProfile}
                  </p>
                  <p className="text-[#66737D] text-xs sm:text-sm leading-relaxed">
                    {locality.detailedContent.pickupProcessText}
                  </p>
                </div>
              </div>

              {/* Primary Scrap Focus Cards */}
              <div className="bg-[#F7F5F0] p-6 rounded-xl border border-[#E4E0D8]">
                <h3 className="text-base font-bold text-[#244E70] mb-3 border-b border-[#E4E0D8] pb-2">
                  Scrap Categories Commonly Collected in {locality.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {locality.detailedContent.primaryScrapFocus.map((focusItem, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-lg border border-[#E4E0D8] flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-[#1F2933] font-medium">{focusItem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Landmarks Served */}
              {locality.detailedContent.landmarksServed.length > 0 && (
                <div className="bg-[#F7F5F0] p-6 rounded-xl border border-[#E4E0D8]">
                  <h3 className="text-base font-bold text-[#244E70] mb-3 border-b border-[#E4E0D8] pb-2">
                    Major Vicinities & Landmarks Covered Near {locality.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {locality.detailedContent.landmarksServed.map((lm, i) => (
                      <span key={i} className="px-3 py-1 bg-white text-[#1F2933] rounded-md text-xs border border-[#E4E0D8]">
                        📍 {lm}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Col: Quick Booking Box */}
            <div>
              <div className="bg-[#244E70] text-white p-6 rounded-xl border border-[#3B6B8C] sticky top-20">
                <h3 className="font-bold text-lg mb-2 text-white">Book Pickup in {locality.name}</h3>
                <p className="text-xs text-slate-200 mb-4">
                  Doorstep scrap collection with digital weighing and clean handling.
                </p>

                <div className="space-y-3 mb-6 text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Scale className="w-4 h-4 text-[#E9B949]" />
                    <span>Digital Scales at Doorstep</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <Clock className="w-4 h-4 text-[#E9B949]" />
                    <span>Flexible Time Slots</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-[#E9B949]" />
                    <span>Verified Bhopal Business</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={onRequestPickup}
                    className="w-full py-3 bg-[#E56B4F] hover:bg-[#D4583C] text-white font-bold text-xs rounded-md transition-colors cursor-pointer text-center"
                  >
                    Request Doorstep Pickup
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="w-full py-2.5 bg-white text-[#244E70] hover:bg-[#F7F5F0] font-bold text-xs rounded-md transition-colors text-center flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#244E70]" />
                    <span>Call +91 8871600497</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL FAQS */}
      <section className="py-12 bg-[#F7F5F0] border-b border-[#E4E0D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#244E70] mb-6 text-center">
            Frequently Asked Questions for {locality.name}
          </h2>

          <div className="space-y-3">
            {locality.faqs.map((faq, i) => (
              <div key={i} className="p-4 bg-white rounded-lg border border-[#E4E0D8]">
                <h3 className="font-bold text-sm text-[#244E70] mb-1 flex items-start gap-2">
                  <span className="text-[#E56B4F] font-mono">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#66737D] pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY LOCALITIES INTERNAL LINKING GRAPH */}
      {neighborLocalities.length > 0 && (
        <section className="py-12 bg-white border-b border-[#E4E0D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-[#244E70] mb-4">
              Scrap Collection in Neighboring Localities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {neighborLocalities.map((n) => (
                <a
                  key={n.slug}
                  href={n.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(n.path);
                  }}
                  className="p-4 bg-[#F7F5F0] hover:bg-[#244E70] hover:text-white rounded-lg border border-[#E4E0D8] text-xs transition-colors group flex items-center justify-between"
                >
                  <div>
                    <span className="font-bold block group-hover:text-white text-[#244E70]">
                      {n.name}
                    </span>
                    <span className="text-[11px] text-[#66737D] group-hover:text-slate-200">
                      Doorstep Scrap Buyer
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#E56B4F]" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GOOGLE REVIEW & CONTACT CALLOUT */}
      <section className="py-12 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-xl max-w-2xl mx-auto border border-[#E4E0D8]">
            <div className="inline-flex items-center gap-1 text-[#244E70] font-semibold text-xs mb-2">
              <Star className="w-4 h-4 fill-[#E9B949] text-[#E9B949]" />
              <span>Google Business Review</span>
            </div>
            <h3 className="text-xl font-bold text-[#244E70] mb-2">
              Sell Your Scrap Cleanly in {locality.name}
            </h3>
            <p className="text-xs text-[#66737D] mb-6 leading-relaxed">
              Contact Kabadiwala Bhopal today for fast doorstep collection. Google par apna experience share karein: <a href={BUSINESS_INFO.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="underline font-semibold text-[#244E70]">Write a Review</a>.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={onRequestPickup}
                className="px-5 py-2.5 bg-[#E56B4F] hover:bg-[#D4583C] text-white font-bold text-xs rounded transition-colors cursor-pointer"
              >
                Request Pickup Now
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-5 py-2.5 bg-[#244E70] text-white hover:bg-[#3B6B8C] font-bold text-xs rounded transition-colors"
              >
                Call +91 8871600497
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
