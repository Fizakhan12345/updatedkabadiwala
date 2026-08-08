import React, { useState } from 'react';
import { MapPin, Search, ChevronRight, Building2, Home as HomeIcon, Factory, Store } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { LOCALITIES, Locality } from '../data/localities';
import { BUSINESS_INFO } from '../data/business';
import { getBreadcrumbSchema } from '../lib/seo';

interface AreasWeServeHubPageProps {
  onNavigate: (path: string) => void;
  onRequestPickup: () => void;
}

export const AreasWeServeHubPage: React.FC<AreasWeServeHubPageProps> = ({
  onNavigate,
  onRequestPickup
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Areas We Serve', item: '/areas-we-serve/' }
  ]);

  const filteredLocalities = LOCALITIES.filter((loc) =>
    loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loc.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [
    'Commercial & Office Hub',
    'Residential Colony',
    'Industrial & Manufacturing',
    'Old City & Market Area',
    'Suburban & Housing Corridor'
  ] as const;

  return (
    <>
      <SeoHead
        title="Areas We Serve in Bhopal | Doorstep Scrap Collection Hub"
        description="Explore doorstep scrap pickup across all 33 localities in Bhopal including MP Nagar, Arera Colony, Kolar Road, Govindpura, Old City markets & suburbs. Call +91 8871600497."
        canonicalPath="/areas-we-serve/"
        jsonLd={[breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="bg-[#F7F5F0] text-[#1F2933] py-10 lg:py-14 border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E0D8] text-[#3B6B8C] text-xs font-semibold mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#E56B4F]" />
              <span>Full Bhopal Service Network</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#244E70] mb-3">
              Areas We Serve in Bhopal
            </h1>

            <p className="text-[#66737D] text-sm sm:text-base leading-relaxed mb-6">
              Kabadiwala Bhopal provides door-to-door scrap collection across 33 key localities in Bhopal. Search or select your neighborhood below to view locality-specific scrap services.
            </p>

            {/* Search Input */}
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-[#66737D] absolute left-3 top-3.5" />
              <input
                type="text"
                placeholder="Search your locality (e.g. MP Nagar, Arera Colony, Kolar)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-white text-[#1F2933] rounded-md border border-[#E4E0D8] focus:outline-none focus:ring-2 focus:ring-[#244E70] placeholder:text-[#66737D]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locality Hub Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm ? (
            <div>
              <h2 className="text-lg font-bold text-[#244E70] mb-4">
                Search Results ({filteredLocalities.length} Localities Found)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredLocalities.map((loc) => (
                  <LocalityCard key={loc.slug} locality={loc} onNavigate={onNavigate} />
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-10">
              {categories.map((cat) => {
                const groupLocalities = LOCALITIES.filter((l) => l.zoneCategory === cat);
                if (groupLocalities.length === 0) return null;

                return (
                  <div key={cat} className="bg-[#F7F5F0] p-6 rounded-xl border border-[#E4E0D8]">
                    <div className="flex items-center gap-2 mb-4 border-b border-[#E4E0D8] pb-3">
                      {cat === 'Commercial & Office Hub' && <Building2 className="w-5 h-5 text-[#244E70]" />}
                      {cat === 'Residential Colony' && <HomeIcon className="w-5 h-5 text-[#244E70]" />}
                      {cat === 'Industrial & Manufacturing' && <Factory className="w-5 h-5 text-[#244E70]" />}
                      {cat === 'Old City & Market Area' && <Store className="w-5 h-5 text-[#244E70]" />}
                      {cat === 'Suburban & Housing Corridor' && <MapPin className="w-5 h-5 text-[#244E70]" />}
                      <h2 className="text-lg font-bold text-[#244E70]">
                        {cat}s ({groupLocalities.length})
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {groupLocalities.map((loc) => (
                        <LocalityCard key={loc.slug} locality={loc} onNavigate={onNavigate} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-12 bg-[#244E70] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2 text-white">Can't Find Your Specific Area?</h2>
          <p className="text-xs sm:text-sm text-slate-200 mb-6">
            We provide doorstep scrap pickup across the entire city of Bhopal. Call or WhatsApp our dispatch team to confirm immediate pickup at your location.
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

const LocalityCard: React.FC<{ locality: Locality; onNavigate: (path: string) => void }> = ({
  locality,
  onNavigate
}) => {
  return (
    <a
      href={locality.path}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(locality.path);
      }}
      className="p-3.5 bg-white hover:bg-[#244E70] hover:text-white rounded-lg border border-[#E4E0D8] transition-colors group flex items-center justify-between"
    >
      <div>
        <span className="font-bold text-xs block group-hover:text-white text-[#244E70]">
          {locality.name}
        </span>
        <span className="text-[10px] text-[#66737D] group-hover:text-slate-200 block mt-0.5">
          Doorstep Scrap Buyer
        </span>
      </div>
      <ChevronRight className="w-4 h-4 text-[#E56B4F] group-hover:translate-x-0.5 transition-transform" />
    </a>
  );
};
