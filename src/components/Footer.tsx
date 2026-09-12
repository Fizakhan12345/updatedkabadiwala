import React from 'react';
import { Phone, Mail, MapPin, Truck, ArrowRight, Star, Facebook, Instagram, Linkedin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO } from '../data/business';
import logoWhiteSvg from '../assets/logo-white.svg';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-[#244E70] text-white pt-12 pb-8 border-t border-[#3B6B8C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-[#3B6B8C]/60">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="/"
              onClick={(e) => handleLinkClick('/', e)}
              className="inline-block"
            >
              <img
                src={logoWhiteSvg}
                alt="Kabadiwala Bhopal - Doorstep Scrap Collection"
                width="210"
                height="42"
                className="w-[180px] sm:w-[210px] h-auto object-contain block"
              />
            </a>

            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-sm">
              Reliable doorstep scrap collection service in Bhopal. We collect paper, cardboard, metals, e-waste, and household appliances with transparent weighing and easy contact.
            </p>

            <div className="space-y-2 text-xs text-slate-200 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E9B949] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E9B949] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:underline font-semibold">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E9B949] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:underline">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-md bg-[#3B6B8C]/60 hover:bg-[#E9B949] text-white hover:text-[#163A5F] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-md bg-[#3B6B8C]/60 hover:bg-[#E9B949] text-white hover:text-[#163A5F] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-md bg-[#3B6B8C]/60 hover:bg-[#E9B949] text-white hover:text-[#163A5F] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Highlighted Google Review Badge in Column 1 */}
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-3.5 py-2 rounded-lg bg-white text-[#244E70] hover:bg-[#F7F5F0] transition-all shadow-sm border border-[#E4E0D8] group"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.15C3.25 21.3 7.31 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.27C.46 8.2.0 10.04.0 12s.46 3.8 1.27 5.42l4.01-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.27 6.58l4.01 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
                <div className="flex flex-col leading-tight">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-xs text-[#244E70]">Review Us on Google</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#66737D]">
                    <div className="flex text-amber-500">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    </div>
                    <span className="font-semibold text-amber-600">4.9 ★</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-bold text-sm text-white uppercase tracking-wider mb-3">
              Services
            </h3>
            <ul className="space-y-2 text-xs text-slate-200">
              <li>
                <a href="/services/" onClick={(e) => handleLinkClick('/services/', e)} className="hover:text-[#E9B949] transition-colors">
                  Household Scrap
                </a>
              </li>
              <li>
                <a href="/services/" onClick={(e) => handleLinkClick('/services/', e)} className="hover:text-[#E9B949] transition-colors">
                  Office Scrap
                </a>
              </li>
              <li>
                <a href="/services/" onClick={(e) => handleLinkClick('/services/', e)} className="hover:text-[#E9B949] transition-colors">
                  Commercial Scrap
                </a>
              </li>
              <li>
                <a href="/services/" onClick={(e) => handleLinkClick('/services/', e)} className="hover:text-[#E9B949] transition-colors">
                  Metal & Iron Scrap
                </a>
              </li>
              <li>
                <a href="/services/" onClick={(e) => handleLinkClick('/services/', e)} className="hover:text-[#E9B949] transition-colors">
                  Paper & Newspaper
                </a>
              </li>
              <li>
                <a href="/services/" onClick={(e) => handleLinkClick('/services/', e)} className="hover:text-[#E9B949] transition-colors">
                  E-Waste & Appliances
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Areas We Serve */}
          <div>
            <h3 className="font-bold text-sm text-white uppercase tracking-wider mb-3">
              Areas We Serve
            </h3>
            <ul className="space-y-2 text-xs text-slate-200">
              <li>
                <a href="/kabadiwala-mp-nagar-bhopal/" onClick={(e) => handleLinkClick('/kabadiwala-mp-nagar-bhopal/', e)} className="hover:text-[#E9B949] transition-colors">
                  MP Nagar
                </a>
              </li>
              <li>
                <a href="/kabadiwala-arera-colony-bhopal/" onClick={(e) => handleLinkClick('/kabadiwala-arera-colony-bhopal/', e)} className="hover:text-[#E9B949] transition-colors">
                  Arera Colony
                </a>
              </li>
              <li>
                <a href="/kabadiwala-kolar-road-bhopal/" onClick={(e) => handleLinkClick('/kabadiwala-kolar-road-bhopal/', e)} className="hover:text-[#E9B949] transition-colors">
                  Kolar Road
                </a>
              </li>
              <li>
                <a href="/kabadiwala-govindpura-industrial-area-bhopal/" onClick={(e) => handleLinkClick('/kabadiwala-govindpura-industrial-area-bhopal/', e)} className="hover:text-[#E9B949] transition-colors">
                  Govindpura
                </a>
              </li>
              <li>
                <a href="/kabadiwala-shahpura-bhopal/" onClick={(e) => handleLinkClick('/kabadiwala-shahpura-bhopal/', e)} className="hover:text-[#E9B949] transition-colors">
                  Shahpura
                </a>
              </li>
              <li>
                <a href="/areas-we-serve/" onClick={(e) => handleLinkClick('/areas-we-serve/', e)} className="font-semibold text-[#E9B949] hover:underline">
                  View All Areas →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Connect */}
          <div>
            <h3 className="font-bold text-sm text-white uppercase tracking-wider mb-3">
              Company & Social
            </h3>
            <ul className="space-y-2 text-xs text-slate-200 mb-4">
              <li>
                <a href="/about/" onClick={(e) => handleLinkClick('/about/', e)} className="hover:text-[#E9B949] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/how-it-works/" onClick={(e) => handleLinkClick('/how-it-works/', e)} className="hover:text-[#E9B949] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/faq/" onClick={(e) => handleLinkClick('/faq/', e)} className="hover:text-[#E9B949] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact/" onClick={(e) => handleLinkClick('/contact/', e)} className="hover:text-[#E9B949] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>

            <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-2.5">
              Connect With Us
            </h4>
            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                  'Hello Kabadiwala Bhopal, I want to book a scrap pickup.\nItem details:\nQuantity:\nPreferred pickup date & time:\nAddress:\nAdditional notes:\n\n(Note: Pickup service available only for bulk quantities - Paper & Raddi: min 50 kg | Plastic: min 30 kg)'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="Chat with Kabadiwala Bhopal on WhatsApp"
                className="w-9 h-9 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </a>
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kabadiwala Bhopal on Facebook"
                title="Kabadiwala Bhopal on Facebook"
                className="w-9 h-9 rounded-lg bg-[#3B6B8C]/60 hover:bg-[#E9B949] text-white hover:text-[#163A5F] flex items-center justify-center transition-all duration-200 shadow-2xs"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kabadiwala Bhopal on Instagram"
                title="Kabadiwala Bhopal on Instagram"
                className="w-9 h-9 rounded-lg bg-[#3B6B8C]/60 hover:bg-[#E9B949] text-white hover:text-[#163A5F] flex items-center justify-center transition-all duration-200 shadow-2xs"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href={BUSINESS_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kabadiwala Bhopal on LinkedIn"
                title="Kabadiwala Bhopal on LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#3B6B8C]/60 hover:bg-[#E9B949] text-white hover:text-[#163A5F] flex items-center justify-center transition-all duration-200 shadow-2xs"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-[#3B6B8C]/60">
              <a
                href={BUSINESS_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-[#E56B4F] hover:bg-[#D4583C] text-white font-bold text-xs shadow-sm transition-all"
              >
                <svg className="w-4 h-4 bg-white rounded-full p-0.5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.15C3.25 21.3 7.31 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.27C.46 8.2.0 10.04.0 12s.46 3.8 1.27 5.42l4.01-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.27 6.58l4.01 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
                <div className="flex items-center gap-1">
                  <span>Review Us on Google</span>
                  <Star className="w-3.5 h-3.5 fill-[#E9B949] text-[#E9B949] ml-0.5" />
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-300 gap-2">
          <p>© {new Date().getFullYear()} Kabadiwala Bhopal. All rights reserved.</p>
          <p>Doorstep Scrap Collection & Scrap Buying Service in Bhopal, MP</p>
        </div>
      </div>
    </footer>
  );
};