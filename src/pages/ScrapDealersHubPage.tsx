import React, { useState } from 'react';
import { Recycle, Search, ChevronRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { SCRAP_DEALERS, ScrapDealer } from '../data/scrapDealers';
import { BUSINESS_INFO } from '../data/business';
import { getBreadcrumbSchema } from '../lib/seo';

interface ScrapDealersHubPageProps {
  onNavigate: (path: string) => void;
  onRequestPickup: () => void;
}

export const ScrapDealersHubPage: React.FC<ScrapDealersHubPageProps> = ({
  onNavigate,
  onRequestPickup
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Scrap Dealers', item: '/scrap-dealers/' }
  ]);

  const filteredDealers = SCRAP_DEALERS.filter((d) =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SeoHead
        title="Scrap Dealers in Bhopal | All Scrap Material Categories"
        description="Kabadiwala Bhopal is your one-stop scrap dealer for iron, steel, copper, brass, aluminium, e-waste, paper, plastic and more. Call +91 8871600497."
        canonicalPath="/scrap-dealers/"
        jsonLd={[breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="bg-[#F7F5F0] text-[#1F2933] py-10 lg:py-14 border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E0D8] text-[#3B6B8C] text-xs font-semibold mb-3">
              <Recycle className="w-3.5 h-3.5 text-[#E56B4F]" />
              <span>All Scrap Material Categories</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#244E70] mb-3">
              Scrap Dealers in Bhopal
            </h1>

            <p className="text-[#66737D] text-sm sm:text-base leading-relaxed mb-6">
              Kabadiwala Bhopal buys all major scrap categories — metals, electronics, office waste, paper, and plastics. Search or browse below to find the right service for your scrap material.
            </p>

            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-[#66737D] absolute left-3 top-3.5" />
              <input
                type="text"
                placeholder="Search scrap type (e.g. copper, iron, e-waste)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-white text-[#1F2933] rounded-md border border-[#E4E0D8] focus:outline-none focus:ring-2 focus:ring-[#244E70] placeholder:text-[#66737D]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dealer Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-[#244E70] mb-4">
            {searchTerm
              ? `Search Results (${filteredDealers.length} Found)`
              : `All Scrap Dealer Services (${SCRAP_DEALERS.length})`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredDealers.map((dealer) => (
              <DealerCard key={dealer.slug} dealer={dealer} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-12 bg-[#244E70] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2 text-white">Can't Find Your Scrap Type?</h2>
          <p className="text-xs sm:text-sm text-slate-200 mb-6">
            We buy nearly every recyclable material. Call or WhatsApp our dispatch team to confirm pickup for your specific scrap.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={onRequestPickup}
              className="px-6 py-3 bg-[#E56B4F] hover:bg-[#D4583C] text-white font-bold text-xs rounded transition-colors cursor-pointer"
            >
              Request Doorstep Pickup
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-6 py-3 bg-white text-[#244E70] hover:bg-[#F7F5F0] font-bold text-xs rounded transition-colors"
            >
              Call +91 8871600497
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

const DealerCard: React.FC<{ dealer: ScrapDealer; onNavigate: (path: string) => void }> = ({
  dealer,
  onNavigate
}) => {
  return (
    <a
      href={dealer.path}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(dealer.path);
      }}
      className="p-3.5 bg-white hover:bg-[#244E70] hover:text-white rounded-lg border border-[#E4E0D8] transition-colors group flex items-center justify-between"
    >
      <div>
        <span className="font-bold text-xs block group-hover:text-white text-[#244E70]">
          {dealer.name}
        </span>
        <span className="text-[10px] text-[#66737D] group-hover:text-slate-200 block mt-0.5">
          Doorstep Scrap Buyer
        </span>
      </div>
      <ChevronRight className="w-4 h-4 text-[#E56B4F] group-hover:translate-x-0.5 transition-transform" />
    </a>
  );
};
