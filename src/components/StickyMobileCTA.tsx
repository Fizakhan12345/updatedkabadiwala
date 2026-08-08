import React from 'react';
import { Phone, Truck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO } from '../data/business';

interface StickyMobileCTAProps {
  onRequestPickup: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onRequestPickup }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-[#E4E0D8] p-2 shadow-lg">
      <div className="grid grid-cols-3 gap-1.5 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-md bg-[#244E70] text-white hover:bg-[#3B6B8C] transition-colors text-center"
        >
          <Phone className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-bold leading-none">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Kabadiwala Bhopal, I want to book a scrap pickup.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-md bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors text-center shadow-xs"
        >
          <WhatsAppIcon className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-bold leading-none">WhatsApp</span>
        </a>

        {/* Request Pickup */}
        <button
          onClick={onRequestPickup}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-md bg-[#E56B4F] text-white hover:bg-[#D4583C] transition-colors text-center cursor-pointer"
        >
          <Truck className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold leading-none">Pickup</span>
        </button>
      </div>
    </div>
  );
};
