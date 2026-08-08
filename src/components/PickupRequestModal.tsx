import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Truck, Calendar, MapPin, Package } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO } from '../data/business';
import { LOCALITIES } from '../data/localities';

interface PickupRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLocalitySlug?: string;
}

export const PickupRequestModal: React.FC<PickupRequestModalProps> = ({
  isOpen,
  onClose,
  defaultLocalitySlug
}) => {
  const defaultLocality = LOCALITIES.find(l => l.slug === defaultLocalitySlug)?.name || 'MP Nagar';

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState(defaultLocality);
  const [scrapType, setScrapType] = useState('Paper & Raddi');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !locality) return;

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
        preferredDate,
        notes
      })
    }).catch(() => {});

    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Kabadiwala Bhopal, I want to confirm my scrap pickup.\n` +
    `Ref ID: ${refId}\n` +
    `Name: ${fullName}\n` +
    `Phone: ${phone}\n` +
    `Locality: ${locality}\n` +
    `Scrap Category: ${scrapType}\n` +
    `Preferred Date: ${preferredDate || 'Earliest Available'}\n` +
    `Details: ${notes || 'None'}`
  );

  const resetForm = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setNotes('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F2933]/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl border border-[#E4E0D8] overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#244E70] text-white p-4 sm:p-5 flex items-center justify-between border-b border-[#3B6B8C]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#E56B4F] flex items-center justify-center text-white shrink-0">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-bold text-base sm:text-lg leading-tight text-white">Request Doorstep Scrap Pickup</h2>
              <p className="text-xs text-slate-200">Convenient doorstep collection in Bhopal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-200 hover:text-white hover:bg-[#3B6B8C] transition-colors"
            aria-label="Close Pickup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-[#1F2933] mb-1">
                  Your Full Name <span className="text-[#E56B4F]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#E4E0D8] rounded-md focus:border-[#244E70] focus:ring-1 focus:ring-[#244E70] outline-none"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-semibold text-[#1F2933] mb-1">
                  Mobile Number <span className="text-[#E56B4F]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#E4E0D8] rounded-md focus:border-[#244E70] focus:ring-1 focus:ring-[#244E70] outline-none"
                />
              </div>

              {/* Locality in Bhopal */}
              <div>
                <label className="block text-xs font-semibold text-[#1F2933] mb-1">
                  Locality / Area in Bhopal <span className="text-[#E56B4F]">*</span>
                </label>
                <select
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#E4E0D8] rounded-md focus:border-[#244E70] focus:ring-1 focus:ring-[#244E70] outline-none bg-white"
                >
                  {LOCALITIES.map((loc) => (
                    <option key={loc.slug} value={loc.name}>
                      {loc.name}
                    </option>
                  ))}
                  <option value="Other Locality in Bhopal">Other Locality in Bhopal</option>
                </select>
              </div>

              {/* Scrap Category */}
              <div>
                <label className="block text-xs font-semibold text-[#1F2933] mb-1">
                  Scrap Category
                </label>
                <select
                  value={scrapType}
                  onChange={(e) => setScrapType(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#E4E0D8] rounded-md focus:border-[#244E70] focus:ring-1 focus:ring-[#244E70] outline-none bg-white"
                >
                  <option value="Paper & Newspaper Raddi">Paper & Newspaper Raddi</option>
                  <option value="Metals (Iron, Steel, Copper, Brass, Aluminum)">Metals (Iron, Steel, Copper, Brass, Aluminum)</option>
                  <option value="Electronics & E-Waste">Electronics & E-Waste</option>
                  <option value="Household Appliances (AC, Fridge, Washing Machine, Cooler)">Household Appliances (AC, Fridge, Washing Machine, Cooler)</option>
                  <option value="Office & Commercial Scrap">Office & Commercial Scrap</option>
                  <option value="Industrial Factory Scrap">Industrial Factory Scrap</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-semibold text-[#1F2933] mb-1">
                  Preferred Date / Time Slot (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tomorrow Morning"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#E4E0D8] rounded-md focus:border-[#244E70] focus:ring-1 focus:ring-[#244E70] outline-none"
                />
              </div>

              {/* Additional Details */}
              <div>
                <label className="block text-xs font-semibold text-[#1F2933] mb-1">
                  Scrap Details / Message (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Approx 50 kg old newspapers and 1 discarded cooler"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#E4E0D8] rounded-md focus:border-[#244E70] focus:ring-1 focus:ring-[#244E70] outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#E56B4F] hover:bg-[#D4583C] text-white font-bold text-sm rounded-md shadow-2xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Truck className="w-4 h-4" />
                  <span>Request Pickup</span>
                </button>
              </div>

              <p className="text-[11px] text-[#66737D] text-center">
                Or call us directly at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-[#244E70] underline">{BUSINESS_INFO.phone}</a>
              </p>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#1F2933]">Pickup Request Received!</h3>
                <p className="text-xs text-[#66737D] mt-1">
                  Reference ID: <span className="font-mono font-bold text-[#244E70] bg-[#F7F5F0] px-2 py-0.5 rounded border border-[#E4E0D8]">{refId}</span>
                </p>
              </div>

              <div className="bg-[#F7F5F0] border border-[#E4E0D8] rounded-lg p-3 text-left text-xs text-[#1F2933] space-y-1">
                <p className="font-semibold text-[#244E70]">Summary of your request:</p>
                <p><span className="text-[#66737D]">Name:</span> {fullName}</p>
                <p><span className="text-[#66737D]">Locality:</span> {locality}</p>
                <p><span className="text-[#66737D]">Scrap Type:</span> {scrapType}</p>
              </div>

              <p className="text-xs text-[#66737D]">
                To get immediate confirmation, send your details on WhatsApp or Call us:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded-md flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Send via WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="py-2.5 px-4 bg-[#244E70] hover:bg-[#3B6B8C] text-white font-semibold text-xs rounded-md flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call +91 8871600497</span>
                </a>
              </div>

              <div className="pt-3 border-t border-[#E4E0D8]">
                <button
                  onClick={resetForm}
                  className="text-xs text-[#66737D] hover:text-[#1F2933] underline"
                >
                  Submit another pickup request
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
