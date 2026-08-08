import React, { useState } from 'react';
import {
  Phone, Truck, Scale, ShieldCheck, CheckCircle2,
  ChevronRight, Star, Building2, Home as HomeIcon, Factory, FileText,
  Cpu, Layers, ArrowRight, MapPin, Award
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { SeoHead } from '../components/SeoHead';
import { BUSINESS_INFO } from '../data/business';
import { SERVICES } from '../data/services';
import { SCRAP_CATEGORIES } from '../data/scrapCategories';
import { MAIN_FAQS } from '../data/faqs';
import { LOCALITIES } from '../data/localities';
import { getLocalBusinessSchema, getFAQSchema } from '../lib/seo';
import { HERO_IMAGE, WORKFLOW_IMAGES, CATEGORY_IMAGES, ABOUT_TEAM_IMAGE } from '../data/scrapImages';
import logoSvg from '../assets/logo.svg';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onRequestPickup: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onRequestPickup }) => {
  const localBusinessSchema = getLocalBusinessSchema();
  const faqSchema = getFAQSchema(MAIN_FAQS);

  // Form state for Contact section on homepage
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('MP Nagar');
  const [scrapType, setScrapType] = useState('Paper & Newspaper Raddi');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    const generatedRef = `KB-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedRef);

    fetch('/api/pickup-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        refId: generatedRef,
        fullName,
        phone,
        locality,
        scrapType,
        notes: message
      })
    }).catch(() => {});

    setFormSubmitted(true);
  };

  return (
    <>
      <SeoHead
        title="Kabadiwala Bhopal | Doorstep Scrap Collection Service"
        description="Kabadiwala Bhopal provides convenient doorstep scrap collection across homes, offices, and factories in Bhopal. Call +91 8871600497 for doorstep scrap pickup."
        canonicalPath="/"
        jsonLd={[localBusinessSchema, faqSchema]}
      />

      {/* 1. HOMEPAGE HERO SECTION - Light Ivory Background */}
      <section className="bg-[#F7F5F0] py-12 lg:py-16 border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E0D8] text-[#3B6B8C] text-xs font-semibold shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#E56B4F]" />
                <span>SCRAP COLLECTION IN BHOPAL</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1F2933] leading-tight">
                Sell Your Kabad with Kabadiwala Bhopal
              </h1>

              <p className="text-[#66737D] text-base sm:text-lg leading-relaxed max-w-2xl">
                Kabadiwala Bhopal collects household raddi, office paper files, metal scrap, old electronics, and home appliances directly from your doorstep across Bhopal. We ensure a clean, convenient pickup process right at your location.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onRequestPickup}
                  className="px-6 py-3.5 bg-[#E56B4F] hover:bg-[#D4583C] text-white font-bold text-sm sm:text-base rounded-md transition-colors shadow-2xs flex items-center gap-2 cursor-pointer"
                >
                  <Truck className="w-5 h-5" />
                  <span>Request Scrap Pickup</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="px-5 py-3.5 bg-white text-[#244E70] border border-[#244E70] hover:bg-[#F7F5F0] font-bold text-sm sm:text-base rounded-md transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#244E70]" />
                  <span>Call +91 8871600497</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Kabadiwala Bhopal, I want to book a scrap pickup.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base rounded-md transition-all shadow-md flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* 3 Simple Trust Points */}
              <div className="pt-6 border-t border-[#E4E0D8] grid grid-cols-3 gap-3 text-xs sm:text-sm font-semibold text-[#244E70]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E56B4F]"></span>
                  <span>Doorstep Pickup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E9B949]"></span>
                  <span>Transparent Weighing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3B6B8C]"></span>
                  <span>Serving Bhopal</span>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Working Photography Card */}
            <div className="lg:col-span-5">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E4E0D8] shadow-sm space-y-4">
                <div className="relative rounded-xl overflow-hidden border border-[#E4E0D8]">
                  <img
                    src={HERO_IMAGE.src}
                    alt={HERO_IMAGE.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-56 sm:h-64 object-cover"
                  />
                  {/* Official Branding Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1.5 rounded-lg border border-[#E4E0D8] shadow-sm flex items-center gap-2">
                    <img src={logoSvg} alt="Kabadiwala Bhopal Logo" className="h-6 w-auto" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-white">
                    <p className="text-xs font-medium flex items-center gap-1.5 text-slate-100">
                      <Truck className="w-3.5 h-3.5 text-[#E9B949] shrink-0" />
                      <span>{HERO_IMAGE.caption}</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-[#1F2933]">
                  <div className="p-2.5 bg-[#F7F5F0] rounded-lg border border-[#E4E0D8] flex items-start gap-2.5">
                    <Scale className="w-4 h-4 text-[#E56B4F] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-[#244E70]">Calibrated Digital Scales</span>
                      <span className="text-[#66737D]">Weighing completed directly at your doorstep in front of you.</span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#F7F5F0] rounded-lg border border-[#E4E0D8] flex items-start gap-2.5">
                    <HomeIcon className="w-4 h-4 text-[#244E70] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-[#244E70]">Homes & Commercial Premises</span>
                      <span className="text-[#66737D]">Pickup available for households, offices, shops, and institutions.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-1 text-center">
                  <button
                    onClick={onRequestPickup}
                    className="w-full py-3 bg-[#244E70] hover:bg-[#3B6B8C] text-white font-bold text-xs rounded-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Truck className="w-4 h-4 text-[#E9B949]" />
                    <span>Schedule Doorstep Pickup Slot</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. "WHAT CAN YOU SELL?" SECTION */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#E56B4F] uppercase tracking-wider block mb-1">
              Recyclable Items
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#244E70]">
              What Scrap Can You Sell?
            </h2>
            <p className="text-[#66737D] text-sm mt-2">
              We purchase household raddi, metals, e-waste, appliances, and plastic scrap directly at your door.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. Paper */}
            <div className="bg-[#F7F5F0] p-5 rounded-xl border border-[#E4E0D8] flex flex-col justify-between hover:border-[#3B6B8C] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#244E70] text-white flex items-center justify-center mb-3">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-base text-[#244E70] mb-1">
                  Paper & Newspaper Raddi
                </h3>
                <p className="text-xs text-[#66737D] leading-relaxed mb-4">
                  Old newspapers, books, cardboard cartons, magazines, and office paper files.
                </p>
              </div>
              <button
                onClick={onRequestPickup}
                className="w-full py-2 bg-white text-[#244E70] border border-[#E4E0D8] hover:border-[#244E70] font-semibold text-xs rounded transition-colors cursor-pointer text-center"
              >
                Sell This Scrap
              </button>
            </div>

            {/* 2. Iron & Ferrous */}
            <div className="bg-[#F7F5F0] p-5 rounded-xl border border-[#E4E0D8] flex flex-col justify-between hover:border-[#3B6B8C] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#244E70] text-white flex items-center justify-center mb-3">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-base text-[#244E70] mb-1">
                  Ferrous Metals & Iron
                </h3>
                <p className="text-xs text-[#66737D] leading-relaxed mb-4">
                  Iron rods, grills, heavy metal sheets, tin containers, structural steel, and machinery.
                </p>
              </div>
              <button
                onClick={onRequestPickup}
                className="w-full py-2 bg-white text-[#244E70] border border-[#E4E0D8] hover:border-[#244E70] font-semibold text-xs rounded transition-colors cursor-pointer text-center"
              >
                Sell This Scrap
              </button>
            </div>

            {/* 3. Non-Ferrous */}
            <div className="bg-[#F7F5F0] p-5 rounded-xl border border-[#E4E0D8] flex flex-col justify-between hover:border-[#3B6B8C] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#244E70] text-white flex items-center justify-center mb-3">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-base text-[#244E70] mb-1">
                  Copper, Brass & Aluminum
                </h3>
                <p className="text-xs text-[#66737D] leading-relaxed mb-4">
                  Copper wiring, brass utensils, aluminum window frames, beverage cans, and alloy items.
                </p>
              </div>
              <button
                onClick={onRequestPickup}
                className="w-full py-2 bg-white text-[#244E70] border border-[#E4E0D8] hover:border-[#244E70] font-semibold text-xs rounded transition-colors cursor-pointer text-center"
              >
                Sell This Scrap
              </button>
            </div>

            {/* 4. Electronics */}
            <div className="bg-[#F7F5F0] p-5 rounded-xl border border-[#E4E0D8] flex flex-col justify-between hover:border-[#3B6B8C] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#244E70] text-white flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-base text-[#244E70] mb-1">
                  Electronics & E-Waste
                </h3>
                <p className="text-xs text-[#66737D] leading-relaxed mb-4">
                  Computers, CPUs, monitors, old TVs, circuit boards, printers, and office IT waste.
                </p>
              </div>
              <button
                onClick={onRequestPickup}
                className="w-full py-2 bg-white text-[#244E70] border border-[#E4E0D8] hover:border-[#244E70] font-semibold text-xs rounded transition-colors cursor-pointer text-center"
              >
                Sell This Scrap
              </button>
            </div>

            {/* 5. Appliances */}
            <div className="bg-[#F7F5F0] p-5 rounded-xl border border-[#E4E0D8] flex flex-col justify-between hover:border-[#3B6B8C] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#244E70] text-white flex items-center justify-center mb-3">
                  <HomeIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-base text-[#244E70] mb-1">
                  Home Appliances
                </h3>
                <p className="text-xs text-[#66737D] leading-relaxed mb-4">
                  Air conditioners, fridges, washing machines, desert coolers, microwave ovens, and geysers.
                </p>
              </div>
              <button
                onClick={onRequestPickup}
                className="w-full py-2 bg-white text-[#244E70] border border-[#E4E0D8] hover:border-[#244E70] font-semibold text-xs rounded transition-colors cursor-pointer text-center"
              >
                Sell This Scrap
              </button>
            </div>

            {/* 6. Office Scrap */}
            <div className="bg-[#F7F5F0] p-5 rounded-xl border border-[#E4E0D8] flex flex-col justify-between hover:border-[#3B6B8C] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#244E70] text-white flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-base text-[#244E70] mb-1">
                  Office & Commercial Waste
                </h3>
                <p className="text-xs text-[#66737D] leading-relaxed mb-4">
                  Shredded documents, old file folders, discarded steel desks, chairs, and shop clearance scrap.
                </p>
              </div>
              <button
                onClick={onRequestPickup}
                className="w-full py-2 bg-white text-[#244E70] border border-[#E4E0D8] hover:border-[#244E70] font-semibold text-xs rounded transition-colors cursor-pointer text-center"
              >
                Sell This Scrap
              </button>
            </div>

            {/* 7. Factory Scrap */}
            <div className="bg-[#F7F5F0] p-5 rounded-xl border border-[#E4E0D8] flex flex-col justify-between hover:border-[#3B6B8C] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#244E70] text-white flex items-center justify-center mb-3">
                  <Factory className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-base text-[#244E70] mb-1">
                  Industrial Factory Scrap
                </h3>
                <p className="text-xs text-[#66737D] leading-relaxed mb-4">
                  Factory metal turnings, manufacturing scrap, obsolete machinery parts, and industrial cut-offs.
                </p>
              </div>
              <button
                onClick={onRequestPickup}
                className="w-full py-2 bg-white text-[#244E70] border border-[#E4E0D8] hover:border-[#244E70] font-semibold text-xs rounded transition-colors cursor-pointer text-center"
              >
                Sell This Scrap
              </button>
            </div>

            {/* 8. Plastics */}
            <div className="bg-[#F7F5F0] p-5 rounded-xl border border-[#E4E0D8] flex flex-col justify-between hover:border-[#3B6B8C] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#244E70] text-white flex items-center justify-center mb-3">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-base text-[#244E70] mb-1">
                  Rigid Plastics & Containers
                </h3>
                <p className="text-xs text-[#66737D] leading-relaxed mb-4">
                  Plastic chairs, storage drums, buckets, PVC pipes, and hard plastic items.
                </p>
              </div>
              <button
                onClick={onRequestPickup}
                className="w-full py-2 bg-white text-[#244E70] border border-[#E4E0D8] hover:border-[#244E70] font-semibold text-xs rounded transition-colors cursor-pointer text-center"
              >
                Sell This Scrap
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('/scrap-categories/')}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#244E70] hover:bg-[#3B6B8C] text-white text-xs font-bold rounded-md transition-colors cursor-pointer"
            >
              <span>View All Scrap Categories</span>
              <ArrowRight className="w-4 h-4 text-[#E9B949]" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. HOW SCRAP PICKUP WORKS */}
      <section className="py-12 sm:py-16 bg-[#F7F5F0] border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#E56B4F] uppercase tracking-wider block mb-1">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#244E70]">
              How Scrap Pickup Works
            </h2>
            <p className="text-[#66737D] text-sm mt-2">
              Disposing of scrap in Bhopal takes just four straightforward steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_IMAGES.map((item) => (
              <div key={item.step} className="bg-white rounded-xl border border-[#E4E0D8] overflow-hidden flex flex-col justify-between shadow-2xs">
                <div>
                  <div className="relative h-44 overflow-hidden border-b border-[#E4E0D8]">
                    <img
                      src={item.src}
                      alt={item.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#E56B4F] text-white font-bold flex items-center justify-center text-xs shadow-md">
                      0{item.step}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-base text-[#244E70] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#66737D] leading-relaxed mb-2">
                      {item.step === 1 && 'Call or WhatsApp us (+91 8871600497) with your scrap details and preferred time slot.'}
                      {item.step === 2 && 'Our doorstep collection team arrives at your residential or commercial location in Bhopal.'}
                      {item.step === 3 && 'Scrap is accurately weighed on calibrated electronic scales directly in front of you.'}
                      {item.step === 4 && 'Materials are loaded cleanly into our collection vehicle and transported for recycling.'}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <span className="inline-block text-[10px] font-semibold text-[#244E70] bg-[#F7F5F0] px-2.5 py-1 rounded border border-[#E4E0D8] w-full text-center">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SCRAP COLLECTION SERVICES IN BHOPAL */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#E56B4F] uppercase tracking-wider block mb-1">
              Verified Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#244E70]">
              Scrap Collection Services in Bhopal
            </h2>
            <p className="text-[#66737D] text-sm mt-2">
              Dedicated scrap pickup for households, corporate offices, shops, and factories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-[#F7F5F0] rounded-xl p-6 border border-[#E4E0D8] flex flex-col justify-between hover:border-[#3B6B8C] transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#244E70] text-white flex items-center justify-center mb-3">
                    {srv.id === 'household-scrap' && <HomeIcon className="w-5 h-5 text-white" />}
                    {srv.id === 'office-commercial-scrap' && <Building2 className="w-5 h-5 text-white" />}
                    {srv.id === 'industrial-scrap' && <Factory className="w-5 h-5 text-white" />}
                    {srv.id === 'paper-newspaper-scrap' && <FileText className="w-5 h-5 text-white" />}
                    {srv.id === 'metal-scrap' && <Layers className="w-5 h-5 text-white" />}
                    {srv.id === 'e-waste-appliances' && <Cpu className="w-5 h-5 text-white" />}
                  </div>

                  <h3 className="text-lg font-bold text-[#244E70] mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-[#66737D] text-xs leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E4E0D8] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('/services/')}
                    className="text-xs font-bold text-[#244E70] hover:text-[#E56B4F] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={onRequestPickup}
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-[#E56B4F] hover:bg-[#D4583C] rounded transition-colors cursor-pointer"
                  >
                    Request Pickup
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AREAS WE SERVE IN BHOPAL */}
      <section className="py-12 sm:py-16 bg-[#F7F5F0] border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-[#E56B4F] uppercase tracking-wider block mb-1">
                Locality Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#244E70]">
                Areas We Serve in Bhopal
              </h2>
              <p className="text-[#66737D] text-sm mt-1">
                Doorstep scrap collection available across Bhopal localities.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/areas-we-serve/')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#244E70] hover:bg-[#3B6B8C] text-white text-xs font-bold rounded-md transition-colors shrink-0 cursor-pointer"
            >
              <span>View All Areas</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E9B949]" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {LOCALITIES.slice(0, 18).map((loc) => (
              <a
                key={loc.slug}
                href={loc.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(loc.path);
                }}
                className="p-3 bg-white hover:bg-[#244E70] hover:text-white rounded-lg border border-[#E4E0D8] text-xs font-medium transition-all group flex flex-col justify-between"
              >
                <span className="group-hover:text-white font-semibold block text-[#1F2933]">
                  {loc.name}
                </span>
                <span className="text-[10px] text-[#66737D] group-hover:text-slate-200 mt-1 block">
                  Scrap Pickup
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE KABADIWALA BHOPAL? */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#E56B4F] uppercase tracking-wider block mb-1">
              Genuine Service Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#244E70]">
              Why Choose Kabadiwala Bhopal?
            </h2>
            <p className="text-[#66737D] text-sm mt-2">
              We focus on convenience, clean transaction, and reliable local service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-[#F7F5F0] rounded-xl border border-[#E4E0D8]">
              <Truck className="w-7 h-7 text-[#E56B4F] mb-3" />
              <h3 className="font-bold text-base text-[#244E70] mb-1">Doorstep Convenience</h3>
              <p className="text-xs text-[#66737D] leading-relaxed">
                No need to carry heavy scrap to local markets; our vehicle comes straight to your gate.
              </p>
            </div>

            <div className="p-5 bg-[#F7F5F0] rounded-xl border border-[#E4E0D8]">
              <Phone className="w-7 h-7 text-[#244E70] mb-3" />
              <h3 className="font-bold text-base text-[#244E70] mb-1">Easy Contact</h3>
              <p className="text-xs text-[#66737D] leading-relaxed">
                Reach us directly via phone or WhatsApp (+91 8871600497) to request or confirm scrap pickup.
              </p>
            </div>

            <div className="p-5 bg-[#F7F5F0] rounded-xl border border-[#E4E0D8]">
              <MapPin className="w-7 h-7 text-[#3B6B8C] mb-3" />
              <h3 className="font-bold text-base text-[#244E70] mb-1">Bhopal Local Service</h3>
              <p className="text-xs text-[#66737D] leading-relaxed">
                Local team based out of Nariyalkheda serving all residential and commercial areas in Bhopal.
              </p>
            </div>

            <div className="p-5 bg-[#F7F5F0] rounded-xl border border-[#E4E0D8]">
              <Scale className="w-7 h-7 text-[#E56B4F] mb-3" />
              <h3 className="font-bold text-base text-[#244E70] mb-1">Clear Weighing Process</h3>
              <p className="text-xs text-[#66737D] leading-relaxed">
                Digital weighing instruments used directly in front of you for simple, open assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SHARE YOUR EXPERIENCE / GOOGLE REVIEW SECTION */}
      <section className="py-12 bg-[#F7F5F0] border-b border-[#E4E0D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-2xl border border-[#E4E0D8] shadow-2xs space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F7F5F0] text-[#244E70] font-semibold text-xs rounded-full border border-[#E4E0D8]">
              <Star className="w-4 h-4 fill-[#E9B949] text-[#E9B949]" />
              <span>Customer Reviews</span>
            </div>

            <h2 className="text-2xl font-bold text-[#244E70]">
              Share Your Experience
            </h2>

            <p className="text-xs sm:text-sm text-[#66737D] max-w-lg mx-auto leading-relaxed">
              If you have used our doorstep scrap collection service in Bhopal, please share your feedback on Google. Your review helps us continue improving our service.
            </p>

            <div>
              <a
                href={BUSINESS_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#244E70] hover:bg-[#3B6B8C] text-white font-bold text-xs rounded-md transition-colors"
              >
                <Star className="w-4 h-4 fill-[#E9B949] text-[#E9B949]" />
                <span>Review Us on Google</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION & ENQUIRY FORM */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Left: Contact Info */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-[#E56B4F] uppercase tracking-wider block mb-1">
                  Contact Us
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#244E70]">
                  Get in Touch with Kabadiwala Bhopal
                </h2>
                <p className="text-[#66737D] text-sm mt-2">
                  Call or WhatsApp our team for doorstep scrap pickup anywhere in Bhopal.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 bg-[#F7F5F0] rounded-xl border border-[#E4E0D8] flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#244E70] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-[#66737D] block font-semibold">Call Us</span>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-base text-[#244E70] hover:underline">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-[#25D366]/30 flex items-start gap-3">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-[#128C7E] block font-bold">WhatsApp Direct</span>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Kabadiwala Bhopal, I want to book a scrap pickup.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-base text-[#128C7E] hover:underline"
                    >
                      {BUSINESS_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-[#F7F5F0] rounded-xl border border-[#E4E0D8] flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#244E70] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-[#66737D] block font-semibold">Address</span>
                    <p className="font-medium text-[#1F2933]">
                      {BUSINESS_INFO.address.fullAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Short Contact Form */}
            <div className="bg-[#F7F5F0] p-6 sm:p-8 rounded-2xl border border-[#E4E0D8]">
              <h3 className="font-bold text-lg text-[#244E70] mb-1">
                Request Scrap Pickup
              </h3>
              <p className="text-xs text-[#66737D] mb-5">
                Fill out this form and our local team will contact you.
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs sm:text-sm">
                  <div>
                    <label className="block font-semibold text-[#1F2933] mb-1">
                      Full Name <span className="text-[#E56B4F]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suresh Patel"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#E4E0D8] rounded-md focus:border-[#244E70] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#1F2933] mb-1">
                      Phone Number <span className="text-[#E56B4F]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#E4E0D8] rounded-md focus:border-[#244E70] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#1F2933] mb-1">
                      Bhopal Area <span className="text-[#E56B4F]">*</span>
                    </label>
                    <select
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#E4E0D8] rounded-md focus:border-[#244E70] outline-none"
                    >
                      {LOCALITIES.map((loc) => (
                        <option key={loc.slug} value={loc.name}>
                          {loc.name}
                        </option>
                      ))}
                      <option value="Other Area in Bhopal">Other Area in Bhopal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#1F2933] mb-1">
                      Scrap Type
                    </label>
                    <select
                      value={scrapType}
                      onChange={(e) => setScrapType(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#E4E0D8] rounded-md focus:border-[#244E70] outline-none"
                    >
                      <option value="Paper & Newspaper Raddi">Paper & Newspaper Raddi</option>
                      <option value="Metals (Iron, Copper, Brass, Aluminum)">Metals (Iron, Copper, Brass, Aluminum)</option>
                      <option value="Electronics & E-Waste">Electronics & E-Waste</option>
                      <option value="Home Appliances (AC, Fridge, Cooler)">Home Appliances (AC, Fridge, Cooler)</option>
                      <option value="Office / Commercial Scrap">Office / Commercial Scrap</option>
                      <option value="Industrial Factory Scrap">Industrial Factory Scrap</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#1F2933] mb-1">
                      Message / Scrap Details
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Old newspapers and discarded iron items"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#E4E0D8] rounded-md focus:border-[#244E70] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#E56B4F] hover:bg-[#D4583C] text-white font-bold text-xs rounded-md transition-colors cursor-pointer"
                  >
                    Request Pickup
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-3">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-[#1F2933]">Request Submitted!</h4>
                  <p className="text-xs text-[#66737D]">
                    Ref ID: <strong className="font-mono text-[#244E70]">{refId}</strong>
                  </p>
                  <p className="text-xs text-[#66737D]">
                    We will contact you shortly to confirm your doorstep pickup slot.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
