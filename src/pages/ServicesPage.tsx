import React from 'react';
import { CheckCircle2, Home, Building2, Factory, FileText, Layers, Cpu } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { SERVICES } from '../data/services';
import { getBreadcrumbSchema } from '../lib/seo';
import { CATEGORY_IMAGES, HERO_IMAGE } from '../data/scrapImages';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onRequestPickup: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onRequestPickup }) => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services/' }
  ]);

  const getSrvImage = (id: string) => {
    if (id === 'household-scrap') return HERO_IMAGE;
    if (id === 'paper-newspaper-scrap') return CATEGORY_IMAGES.paper;
    if (id === 'metal-scrap' || id === 'industrial-scrap') return CATEGORY_IMAGES.metal;
    if (id === 'e-waste-appliances') return CATEGORY_IMAGES.ewaste;
    return CATEGORY_IMAGES.plastic;
  };

  return (
    <>
      <SeoHead
        title="Scrap Collection Services in Bhopal | Kabadiwala Bhopal"
        description="Verified scrap collection services in Bhopal: household doorstep pickup, office e-waste clearance, factory metal scrap, and bulk paper recycling. Call +91 8871600497."
        canonicalPath="/services/"
        jsonLd={[breadcrumbSchema]}
      />

      <section className="bg-[#F7F5F0] py-10 lg:py-14 border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#244E70] mb-3">
              Our Scrap Collection Services in Bhopal
            </h1>
            <p className="text-[#66737D] text-sm sm:text-base leading-relaxed">
              Kabadiwala Bhopal delivers dependable doorstep scrap collection tailored for residential households, corporate offices, commercial shops, educational institutions, and industrial factories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {SERVICES.map((srv) => {
            const imgInfo = getSrvImage(srv.id);
            return (
              <div
                key={srv.id}
                id={srv.slug}
                className="bg-[#F7F5F0] rounded-xl border border-[#E4E0D8] overflow-hidden grid grid-cols-1 lg:grid-cols-12"
              >
                <div className="lg:col-span-4 h-56 lg:h-auto relative border-b lg:border-b-0 lg:border-r border-[#E4E0D8]">
                  <img
                    src={imgInfo.src}
                    alt={imgInfo.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-white">
                    <span className="text-[11px] font-medium text-slate-100">
                      📷 {imgInfo.caption}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-8 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#244E70] text-white flex items-center justify-center shrink-0">
                        {srv.id === 'household-scrap' && <Home className="w-5 h-5 text-white" />}
                        {srv.id === 'office-commercial-scrap' && <Building2 className="w-5 h-5 text-white" />}
                        {srv.id === 'industrial-scrap' && <Factory className="w-5 h-5 text-white" />}
                        {srv.id === 'paper-newspaper-scrap' && <FileText className="w-5 h-5 text-white" />}
                        {srv.id === 'metal-scrap' && <Layers className="w-5 h-5 text-white" />}
                        {srv.id === 'e-waste-appliances' && <Cpu className="w-5 h-5 text-white" />}
                      </div>
                      <h2 className="text-xl font-bold text-[#244E70]">
                        {srv.title}
                      </h2>
                    </div>

                    <p className="text-[#66737D] text-xs sm:text-sm leading-relaxed">
                      {srv.fullDesc}
                    </p>

                    <div>
                      <h3 className="font-bold text-xs uppercase text-[#3B6B8C] tracking-wider mb-2">
                        Accepted Materials:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {srv.acceptedItems.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-xs text-[#1F2933] bg-white p-2 rounded border border-[#E4E0D8]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 bg-white p-5 rounded-lg border border-[#E4E0D8] flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-bold text-xs text-[#244E70] mb-2">Ideal For:</h3>
                      <ul className="space-y-1.5 text-xs text-[#66737D] mb-4">
                        {srv.idealFor.map((tgt, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E56B4F]"></span>
                            <span>{tgt}</span>
                          </li>
                        ))}
                      </ul>

                      <h3 className="font-bold text-xs text-[#244E70] mb-2">Service Process:</h3>
                      <ol className="space-y-1.5 text-[11px] text-[#66737D] list-decimal list-inside">
                        {srv.processSteps.map((step, sIdx) => (
                          <li key={sIdx}>{step}</li>
                        ))}
                      </ol>
                    </div>

                    <button
                      onClick={onRequestPickup}
                      className="w-full py-2.5 bg-[#E56B4F] hover:bg-[#D4583C] text-white font-bold text-xs rounded transition-colors cursor-pointer text-center"
                    >
                      Book This Service
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
