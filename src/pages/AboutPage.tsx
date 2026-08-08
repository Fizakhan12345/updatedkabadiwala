import React from 'react';
import { ShieldCheck, Scale, Truck } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { BUSINESS_INFO } from '../data/business';
import { getBreadcrumbSchema } from '../lib/seo';
import { ABOUT_TEAM_IMAGE } from '../data/scrapImages';
import logoSvg from '../assets/logo.svg';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onRequestPickup: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onRequestPickup }) => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'About', item: '/about/' }
  ]);

  return (
    <>
      <SeoHead
        title="About Kabadiwala Bhopal | Local Doorstep Scrap Collection Service"
        description="Learn about Kabadiwala Bhopal. Local scrap collection and scrap buying business serving homes, offices, and factories across Bhopal. Call +91 8871600497."
        canonicalPath="/about/"
        jsonLd={[breadcrumbSchema]}
      />

      <section className="bg-[#F7F5F0] py-10 lg:py-14 border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#244E70] mb-3">
              About Kabadiwala Bhopal
            </h1>
            <p className="text-[#66737D] text-sm sm:text-base leading-relaxed">
              Your trusted local doorstep scrap collection partner operating out of Nariyalkheda, Bhopal. Dedicated to hassle-free, transparent scrap collection for residential and commercial customers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Ground Work Real Photo Banner */}
          <div className="bg-[#F7F5F0] rounded-2xl border border-[#E4E0D8] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-6 h-64 md:h-full">
              <img
                src={ABOUT_TEAM_IMAGE.src}
                alt={ABOUT_TEAM_IMAGE.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-6 p-6 sm:p-8 space-y-3">
              <div className="mb-2">
                <img
                  src={logoSvg}
                  alt="Kabadiwala Bhopal - Doorstep Scrap Collection"
                  width="200"
                  height="43"
                  className="w-[180px] h-auto object-contain block"
                />
              </div>
              <span className="text-xs font-bold text-[#E56B4F] uppercase tracking-wider block">
                Ground Operation in Bhopal
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#244E70]">
                Who We Are
              </h2>
              <p className="text-[#66737D] text-xs sm:text-sm leading-relaxed">
                <strong>Kabadiwala Bhopal</strong> is a genuine, active local scrap collection business based in Bhopal, Madhya Pradesh. We specialize in doorstep scrap pickup, taking the effort out of clearing old newspapers, discarded iron, e-waste, office paper files, and broken home appliances.
              </p>
              <p className="text-[#66737D] text-xs sm:text-sm leading-relaxed">
                We operate across 33 key Bhopal localities including MP Nagar, Arera Colony, Kolar Road, Govindpura Industrial Area, Bairagarh, Koh-e-Fiza, and Old Bhopal markets.
              </p>
              <span className="inline-block text-[11px] font-semibold text-[#244E70] bg-white px-3 py-1 rounded border border-[#E4E0D8]">
                {ABOUT_TEAM_IMAGE.caption}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F7F5F0] p-6 rounded-xl border border-[#E4E0D8]">
              <Scale className="w-8 h-8 text-[#E56B4F] mb-3" />
              <h3 className="font-bold text-[#244E70] text-base mb-1">Accurate Weighing</h3>
              <p className="text-[#66737D] text-xs leading-relaxed">
                We use calibrated digital scales directly in front of the customer to ensure accurate weight verification.
              </p>
            </div>

            <div className="bg-[#F7F5F0] p-6 rounded-xl border border-[#E4E0D8]">
              <Truck className="w-8 h-8 text-[#244E70] mb-3" />
              <h3 className="font-bold text-[#244E70] text-base mb-1">Doorstep Pickup</h3>
              <p className="text-[#66737D] text-xs leading-relaxed">
                Punctual collection personnel handle all heavy lifting and loading, keeping your property clean.
              </p>
            </div>

            <div className="bg-[#F7F5F0] p-6 rounded-xl border border-[#E4E0D8]">
              <ShieldCheck className="w-8 h-8 text-[#3B6B8C] mb-3" />
              <h3 className="font-bold text-[#244E70] text-base mb-1">Local Business</h3>
              <p className="text-[#66737D] text-xs leading-relaxed">
                Operating with verified business information, reachable at Sharda Nagar, Nariyalkheda, Bhopal.
              </p>
            </div>
          </div>

          <div className="bg-[#F7F5F0] p-6 rounded-xl border border-[#E4E0D8] text-xs text-[#1F2933] space-y-2">
            <h3 className="font-bold text-sm text-[#244E70] mb-2">Verified Business Information:</h3>
            <p><strong>Business Name:</strong> {BUSINESS_INFO.name}</p>
            <p><strong>Address:</strong> {BUSINESS_INFO.address.fullAddress}</p>
            <p><strong>Phone:</strong> {BUSINESS_INFO.phone}</p>
            <p><strong>Email:</strong> {BUSINESS_INFO.email}</p>
            <p><strong>Google Business Profile:</strong> <a href={BUSINESS_INFO.googleBusinessProfile} target="_blank" rel="noopener noreferrer" className="text-[#244E70] underline font-semibold">View Profile</a></p>
          </div>
        </div>
      </section>
    </>
  );
};
