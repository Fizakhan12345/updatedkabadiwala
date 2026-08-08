import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { SCRAP_CATEGORIES } from '../data/scrapCategories';
import { BUSINESS_INFO } from '../data/business';
import { getBreadcrumbSchema } from '../lib/seo';
import { CATEGORY_IMAGES } from '../data/scrapImages';

interface ScrapCategoriesPageProps {
  onNavigate: (path: string) => void;
  onRequestPickup: () => void;
}

export const ScrapCategoriesPage: React.FC<ScrapCategoriesPageProps> = ({ onNavigate, onRequestPickup }) => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Scrap Categories', item: '/scrap-categories/' }
  ]);

  const getCatImg = (id: string) => {
    if (id.includes('paper')) return CATEGORY_IMAGES.paper;
    if (id.includes('metal')) return CATEGORY_IMAGES.metal;
    if (id.includes('e-waste')) return CATEGORY_IMAGES.ewaste;
    if (id.includes('plastic')) return CATEGORY_IMAGES.plastic;
    return CATEGORY_IMAGES.appliances;
  };

  return (
    <>
      <SeoHead
        title="Scrap Categories & Recyclable Materials | Kabadiwala Bhopal"
        description="Comprehensive list of accepted scrap categories in Bhopal: Paper, Newspapers, Iron, Steel, Copper, Aluminum, Brass, E-Waste, Appliances & Plastics. Call +91 8871600497."
        canonicalPath="/scrap-categories/"
        jsonLd={[breadcrumbSchema]}
      />

      <section className="bg-[#F7F5F0] py-10 lg:py-14 border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#244E70] mb-3">
              Scrap Categories We Accept in Bhopal
            </h1>
            <p className="text-[#66737D] text-sm sm:text-base leading-relaxed">
              We purchase paper, cardboard, ferrous and non-ferrous metals, e-waste, electronic appliances, and rigid plastics directly at your doorstep in Bhopal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {SCRAP_CATEGORIES.map((cat) => {
            const imgInfo = getCatImg(cat.id);
            return (
              <div key={cat.id} className="bg-[#F7F5F0] rounded-2xl border border-[#E4E0D8] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-4 h-56 lg:h-full">
                    <img
                      src={imgInfo.src}
                      alt={imgInfo.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-8 p-6 sm:p-8 space-y-4">
                    <div>
                      <h2 className="text-xl font-bold text-[#244E70] mb-1">
                        {cat.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#66737D]">
                        {cat.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {cat.acceptedMaterials.map((mat, i) => (
                        <div key={i} className="p-3 bg-white rounded-lg border border-[#E4E0D8]">
                          <div className="flex items-center gap-2 mb-1">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <h3 className="font-bold text-xs text-[#244E70]">{mat.item}</h3>
                          </div>
                          <p className="text-[11px] text-[#66737D] pl-6">
                            {mat.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <span className="inline-block text-[11px] font-semibold text-[#244E70] bg-white px-3 py-1 rounded border border-[#E4E0D8]">
                        📷 {imgInfo.caption}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="bg-[#244E70] text-white p-8 rounded-xl text-center max-w-3xl mx-auto border border-[#3B6B8C]">
            <h2 className="text-xl font-bold mb-2 text-white">Have a Custom Scrap Inventory?</h2>
            <p className="text-xs text-slate-200 mb-6">
              For office clearance, bulk warehouse scrap, or heavy industrial machinery, contact us directly for custom dispatch.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={onRequestPickup}
                className="px-5 py-2.5 bg-[#E56B4F] hover:bg-[#D4583C] text-white font-bold text-xs rounded transition-colors cursor-pointer"
              >
                Request Doorstep Pickup
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-5 py-2.5 bg-white text-[#244E70] hover:bg-[#F7F5F0] font-bold text-xs rounded transition-colors"
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
