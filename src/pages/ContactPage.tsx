import React, { useState } from 'react';
import { Phone, Mail, MapPin, Truck, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { SeoHead } from '../components/SeoHead';
import { BUSINESS_INFO } from '../data/business';
import { LOCALITIES } from '../data/localities';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../lib/seo';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const localBusinessSchema = getLocalBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Contact Us', item: '/contact/' }
  ]);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('MP Nagar');
  const [scrapType, setScrapType] = useState('Paper & Newspaper Raddi');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
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

    setSubmitted(true);
  };

  return (
    <>
      <SeoHead
        title="Contact Kabadiwala Bhopal | Phone, WhatsApp & Address"
        description="Contact Kabadiwala Bhopal for doorstep scrap pickup. Phone & WhatsApp: +91 8871600497. Address: Sharda Nagar, Rajeev Nagar, Nariyalkheda, Bhopal MP 462100."
        canonicalPath="/contact/"
        jsonLd={[localBusinessSchema, breadcrumbSchema]}
      />

      <section className="bg-[#F7F5F0] py-10 lg:py-14 border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#244E70] mb-3">
              Contact Kabadiwala Bhopal
            </h1>
            <p className="text-[#66737D] text-sm sm:text-base leading-relaxed">
              Reach our dispatch team directly for doorstep scrap pickup in Bhopal. Call, WhatsApp, or submit an enquiry below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Left: Verified Contact Info */}
            <div className="space-y-6">
              <div className="bg-[#F7F5F0] p-6 sm:p-8 rounded-xl border border-[#E4E0D8] space-y-6">
                <h2 className="text-xl font-bold text-[#244E70] border-b border-[#E4E0D8] pb-3">
                  Verified Contact Information
                </h2>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#244E70] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-[#66737D] block font-semibold">Phone Helpline</span>
                      <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-[#244E70] hover:underline">
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border border-[#25D366]/30">
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-[#128C7E] block font-bold">WhatsApp Direct</span>
                      <a
                        href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Kabadiwala Bhopal, I want to request doorstep scrap pickup.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#128C7E] hover:underline"
                      >
                        {BUSINESS_INFO.whatsapp}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#244E70] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-[#66737D] block font-semibold">Email Address</span>
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="font-semibold text-[#244E70] hover:underline">
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#244E70] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-[#66737D] block font-semibold">Physical Location</span>
                      <p className="font-medium text-[#1F2933]">
                        {BUSINESS_INFO.address.fullAddress}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E4E0D8] space-y-2 text-xs">
                  <a
                    href={BUSINESS_INFO.googleBusinessProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-[#244E70] hover:underline"
                  >
                    <span>Google Business Profile</span>
                  </a>
                  <p className="text-[#66737D]">
                    Google par apna experience share karein: <a href={BUSINESS_INFO.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="text-[#244E70] underline font-semibold">Google Review Link</a>
                  </p>
                </div>
              </div>

              <div className="bg-[#244E70] text-white p-6 rounded-xl border border-[#3B6B8C]">
                <h3 className="font-bold text-base mb-2 text-white">Service Coverage</h3>
                <p className="text-xs text-slate-200 leading-relaxed mb-4">
                  We provide doorstep scrap collection across all 33 Bhopal localities including MP Nagar, Arera Colony, Kolar Road, Govindpura Industrial Area, Bairagarh, and Old Bhopal markets.
                </p>
                <a
                  href="/areas-we-serve/"
                  onClick={(e) => { e.preventDefault(); onNavigate('/areas-we-serve/'); }}
                  className="text-xs font-bold text-[#E9B949] hover:underline"
                >
                  View All 33 Locality Pages →
                </a>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="bg-[#F7F5F0] p-6 sm:p-8 rounded-xl border border-[#E4E0D8]">
              <h2 className="text-xl font-bold text-[#244E70] mb-2">
                Send a Pickup Enquiry
              </h2>
              <p className="text-xs text-[#66737D] mb-6">
                Fill out this quick form for doorstep scrap pickup dispatch in Bhopal.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block font-semibold text-[#1F2933] mb-1">
                      Full Name <span className="text-[#E56B4F]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
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
                      Locality in Bhopal <span className="text-[#E56B4F]">*</span>
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
                      Scrap Category
                    </label>
                    <select
                      value={scrapType}
                      onChange={(e) => setScrapType(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#E4E0D8] rounded-md focus:border-[#244E70] outline-none"
                    >
                      <option value="Paper & Newspaper Raddi">Paper & Newspaper Raddi</option>
                      <option value="Metals (Iron, Copper, Brass, Aluminum)">Metals (Iron, Copper, Brass, Aluminum)</option>
                      <option value="Electronics & IT Waste">Electronics & IT Waste</option>
                      <option value="Home Appliances (AC, Fridge, Cooler)">Home Appliances (AC, Fridge, Cooler)</option>
                      <option value="Office / Commercial Scrap">Office / Commercial Scrap</option>
                      <option value="Industrial Factory Scrap">Industrial Factory Scrap</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#1F2933] mb-1">
                      Message / Landmark Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Near Board Office Square, 100 kg newspapers and old cooler."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#E4E0D8] rounded-md focus:border-[#244E70] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#E56B4F] hover:bg-[#D4583C] text-white font-bold text-sm rounded-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Truck className="w-4 h-4" />
                    <span>Send Pickup Request</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#1F2933]">Enquiry Received!</h3>
                  <p className="text-xs text-[#66737D]">
                    Reference ID: <strong className="font-mono text-[#244E70] bg-white px-2 py-0.5 rounded border border-[#E4E0D8]">{refId}</strong>
                  </p>
                  <p className="text-xs text-[#66737D]">
                    Our team will contact you shortly to confirm your doorstep pickup time.
                  </p>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#244E70] text-white font-bold text-xs rounded hover:bg-[#3B6B8C]"
                  >
                    <Phone className="w-4 h-4 text-white" />
                    <span>Call +91 8871600497 Now</span>
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
