import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { BUSINESS_INFO } from '../data/business';
import { getBreadcrumbSchema } from '../lib/seo';
import { WORKFLOW_IMAGES } from '../data/scrapImages';

interface HowItWorksPageProps {
  onNavigate: (path: string) => void;
  onRequestPickup: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate, onRequestPickup }) => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'How It Works', item: '/how-it-works/' }
  ]);

  return (
    <>
      <SeoHead
        title="How Doorstep Scrap Pickup Works | Kabadiwala Bhopal"
        description="Learn how doorstep scrap collection works in Bhopal. Easy 4-step process: Book request, slot coordination, digital weighing, and clean handover. Call +91 8871600497."
        canonicalPath="/how-it-works/"
        jsonLd={[breadcrumbSchema]}
      />

      <section className="bg-[#F7F5F0] py-10 lg:py-14 border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#244E70] mb-3">
              How Doorstep Scrap Pickup Works
            </h1>
            <p className="text-[#66737D] text-sm sm:text-base leading-relaxed">
              Disposing of household scrap or commercial waste in Bhopal is straightforward with Kabadiwala Bhopal. Follow these simple steps for clean, punctual doorstep pickup.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Step 1 */}
          <div className="bg-[#F7F5F0] rounded-2xl border border-[#E4E0D8] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 h-48 md:h-full">
              <img
                src={WORKFLOW_IMAGES[0].src}
                alt={WORKFLOW_IMAGES[0].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 p-6 space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#E56B4F] text-white font-bold flex items-center justify-center text-xs">
                  01
                </span>
                <h2 className="text-lg font-bold text-[#244E70]">
                  Contact Us & Request Pickup
                </h2>
              </div>
              <p className="text-[#66737D] text-xs sm:text-sm leading-relaxed">
                Submit an online pickup request form or contact us directly via Phone or WhatsApp at <strong>+91 8871600497</strong>. Provide your full name, location in Bhopal, and approximate scrap type.
              </p>
              <span className="inline-block text-[11px] font-semibold text-[#244E70] bg-white px-3 py-1 rounded border border-[#E4E0D8]">
                📍 {WORKFLOW_IMAGES[0].caption}
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#F7F5F0] rounded-2xl border border-[#E4E0D8] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 h-48 md:h-full md:order-2">
              <img
                src={WORKFLOW_IMAGES[1].src}
                alt={WORKFLOW_IMAGES[1].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 p-6 space-y-2 md:order-1">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#244E70] text-white font-bold flex items-center justify-center text-xs">
                  02
                </span>
                <h2 className="text-lg font-bold text-[#244E70]">
                  Share Your Bhopal Location & Schedule Pickup
                </h2>
              </div>
              <p className="text-[#66737D] text-xs sm:text-sm leading-relaxed">
                Tell us your Bhopal locality (MP Nagar, Arera Colony, Kolar Road, Govindpura, etc.) and preferred pickup slot so our nearby collection team coordinates dispatch directly to your gate.
              </p>
              <span className="inline-block text-[11px] font-semibold text-[#244E70] bg-white px-3 py-1 rounded border border-[#E4E0D8]">
                📦 {WORKFLOW_IMAGES[1].caption}
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#F7F5F0] rounded-2xl border border-[#E4E0D8] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 h-48 md:h-full">
              <img
                src={WORKFLOW_IMAGES[2].src}
                alt={WORKFLOW_IMAGES[2].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 p-6 space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#244E70] text-white font-bold flex items-center justify-center text-xs">
                  03
                </span>
                <h2 className="text-lg font-bold text-[#244E70]">
                  Doorstep Pickup & Calibrated Weighing
                </h2>
              </div>
              <p className="text-[#66737D] text-xs sm:text-sm leading-relaxed">
                Our collection personnel arrive at your doorstep equipped with accurate electronic weighing instruments. Every item is weighed transparently in front of you.
              </p>
              <span className="inline-block text-[11px] font-semibold text-[#244E70] bg-white px-3 py-1 rounded border border-[#E4E0D8]">
                ⚖️ {WORKFLOW_IMAGES[2].caption}
              </span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-[#F7F5F0] rounded-2xl border border-[#E4E0D8] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 h-48 md:h-full md:order-2">
              <img
                src={WORKFLOW_IMAGES[3].src}
                alt={WORKFLOW_IMAGES[3].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 p-6 space-y-2 md:order-1">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#3B6B8C] text-white font-bold flex items-center justify-center text-xs">
                  04
                </span>
                <h2 className="text-lg font-bold text-[#244E70]">
                  Complete Transaction & Clean Handover
                </h2>
              </div>
              <p className="text-[#66737D] text-xs sm:text-sm leading-relaxed">
                Scrap is cleanly loaded onto our pickup vehicles and routed for eco-friendly recycling, leaving your property neat and uncluttered.
              </p>
              <span className="inline-block text-[11px] font-semibold text-[#244E70] bg-white px-3 py-1 rounded border border-[#E4E0D8]">
                🚛 {WORKFLOW_IMAGES[3].caption}
              </span>
            </div>
          </div>

          <div className="pt-6 text-center">
            <button
              onClick={onRequestPickup}
              className="px-6 py-3.5 bg-[#E56B4F] hover:bg-[#D4583C] text-white font-bold text-sm rounded shadow-2xs transition-colors cursor-pointer"
            >
              Request Doorstep Pickup Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
