import React from 'react';
import { HelpCircle, Phone } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { SeoHead } from '../components/SeoHead';
import { MAIN_FAQS } from '../data/faqs';
import { BUSINESS_INFO } from '../data/business';
import { getBreadcrumbSchema, getFAQSchema } from '../lib/seo';

interface FAQPageProps {
  onNavigate: (path: string) => void;
  onRequestPickup: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate, onRequestPickup }) => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'FAQ', item: '/faq/' }
  ]);
  const faqSchema = getFAQSchema(MAIN_FAQS);

  return (
    <>
      <SeoHead
        title="Frequently Asked Questions | Kabadiwala Bhopal"
        description="Find direct answers regarding doorstep scrap pickup, accepted materials, digital weighing, and local coverage in Bhopal. Call +91 8871600497."
        canonicalPath="/faq/"
        jsonLd={[breadcrumbSchema, faqSchema]}
      />

      <section className="bg-[#F7F5F0] py-10 lg:py-14 border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#244E70] mb-3">
              Frequently Asked Questions
            </h1>
            <p className="text-[#66737D] text-sm sm:text-base leading-relaxed">
              Clear, factual answers regarding scrap pickup requests, accepted recyclable items, and service locations in Bhopal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {MAIN_FAQS.map((faq, idx) => (
            <div key={idx} className="bg-[#F7F5F0] p-6 rounded-xl border border-[#E4E0D8]">
              <h2 className="font-bold text-base text-[#244E70] mb-2 flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-[#E56B4F] shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#66737D] leading-relaxed pl-7">
                {faq.answer}
              </p>
            </div>
          ))}

          <div className="bg-[#244E70] text-white p-8 rounded-xl text-center mt-10 border border-[#3B6B8C]">
            <h2 className="text-xl font-bold mb-2 text-white">Have Additional Questions?</h2>
            <p className="text-xs text-slate-200 mb-6">
              Our local Bhopal team is available via Phone or WhatsApp to answer your specific scrap pickup queries.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-5 py-2.5 bg-white text-[#244E70] hover:bg-[#F7F5F0] font-bold text-xs rounded transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#244E70]" />
                <span>Call +91 8871600497</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Kabadiwala Bhopal, I have a question regarding scrap pickup.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded transition-all shadow-xs flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
