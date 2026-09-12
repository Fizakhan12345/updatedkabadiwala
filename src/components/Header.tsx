import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, Truck, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO } from '../data/business';
import logoSvg from '../assets/logo.svg';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onRequestPickup: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onRequestPickup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services/' },
    { label: 'Scrap Categories', path: '/scrap-categories/' },
    { label: 'Areas We Serve', path: '/areas-we-serve/' },
    { label: 'How It Works', path: '/how-it-works/' },
    { label: 'About', path: '/about/' },
    { label: 'FAQ', path: '/faq/' },
    { label: 'Contact', path: '/contact/' },
  ];

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white border-b border-[#E4E0D8] shadow-2xs">
      {/* Auto-scrolling Notice Bar */}
      <div className="bg-[#FCE9A8] border-b border-[#E9B949] flex items-center gap-2 px-2 sm:px-4">
        <style>
          {`
            @keyframes marquee-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: inline-block;
              animation: marquee-scroll 26s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}
        </style>
        <div className="flex-1 overflow-hidden whitespace-nowrap py-1.5">
          <div className="marquee-track">
            <span className="inline-block px-8 text-[12.5px] sm:text-[13px] font-semibold text-[#6B4E00]">
              ⚠️ Note: Pickup service available for bulk quantities only — Paper &amp; Raddi: minimum 50 kg | Metals (Iron, Steel, Copper, Brass, Aluminum): minimum 20 kg | E-waste &amp; Electronics: minimum 5 kg or 2+ items | Home Appliances (AC, Fridge, Washing Machine, Cooler): 1 unit minimum | Office/Industrial Scrap: bulk pickup only. Send us a message on WhatsApp with your item details, quantity, preferred date, and address to book a pickup.
            </span>
            <span className="inline-block px-8 text-[12.5px] sm:text-[13px] font-semibold text-[#6B4E00]" aria-hidden="true">
              ⚠️ Note: Pickup service available for bulk quantities only — Paper &amp; Raddi: minimum 50 kg | Metals (Iron, Steel, Copper, Brass, Aluminum): minimum 20 kg | E-waste &amp; Electronics: minimum 5 kg or 2+ items | Home Appliances (AC, Fridge, Washing Machine, Cooler): 1 unit minimum | Office/Industrial Scrap: bulk pickup only. Send us a message on WhatsApp with your item details, quantity, preferred date, and address to book a pickup.
            </span>
          </div>
        </div>

        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
            'Hello Kabadiwala Bhopal, I want to book a scrap pickup.\nItem details:\nQuantity:\nPreferred pickup date & time:\nAddress:\nAdditional notes:\n\n(Note: Pickup service available only for bulk quantities - Paper & Raddi: min 50 kg | Plastic: min 30 kg)'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 shrink-0 px-2.5 py-1 my-1 text-[11.5px] font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-md shadow-xs transition-colors whitespace-nowrap"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
          <span>Send Details on WhatsApp</span>
        </a>
      </div>

      {/* Slim, Elegant Top Bar */}
      <div className="bg-[#F7F5F0] border-b border-[#E4E0D8] text-[13px] py-1.5 px-4 text-[#66737D]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-[#244E70] font-semibold hover:text-[#E56B4F] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E56B4F]" />
              <span>Call: +91 8871600497</span>
            </a>
            <span className="hidden sm:inline text-[#E4E0D8]">|</span>
            <div className="hidden sm:flex items-center gap-1.5 text-[#66737D]">
              <MapPin className="w-3.5 h-3.5 text-[#3B6B8C]" />
              <span>Bhopal, Madhya Pradesh</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 text-xs">
            <a
              href={BUSINESS_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#244E70] hover:text-[#E56B4F] font-medium transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#E9B949]"></span>
              <span>Review Us on Google</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-2 lg:gap-2.5 xl:gap-4 2xl:gap-6">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick('/', e)}
          className="flex items-center shrink-0 py-0.5"
        >
          <img
            src={logoSvg}
            alt="Kabadiwala Bhopal - Doorstep Scrap Collection"
            width="220"
            height="44"
            className="w-[145px] sm:w-[165px] lg:w-[150px] xl:w-[175px] 2xl:w-[200px] h-auto object-contain block shrink-0"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 2xl:gap-2 shrink-0">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(link.path, e)}
                className={`whitespace-nowrap px-1.5 xl:px-2 2xl:px-3 py-1.5 text-[11.5px] xl:text-[13px] 2xl:text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-[#244E70] bg-[#F7F5F0] font-semibold'
                    : 'text-[#1F2933] hover:text-[#244E70] hover:bg-[#F7F5F0]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Header Right CTAs */}
        <div className="hidden lg:flex items-center shrink-0 gap-1.5 xl:gap-2 2xl:gap-2.5">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 2xl:px-3 py-1.5 xl:py-2 text-[11px] xl:text-xs font-semibold text-[#244E70] bg-[#F7F5F0] border border-[#E4E0D8] rounded-md hover:bg-[#E4E0D8]/50 transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#244E70]" />
            <span>Call Now</span>
          </a>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
              'Hello Kabadiwala Bhopal, I want to book a scrap pickup.\nItem details:\nQuantity:\nPreferred pickup date & time:\nAddress:\nAdditional notes:\n\n(Note: Pickup service available only for bulk quantities - Paper & Raddi: min 50 kg | Plastic: min 30 kg)'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 xl:gap-1.5 px-2 xl:px-2.5 2xl:px-3 py-1.5 xl:py-2 text-[11px] xl:text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-md transition-all shadow-xs whitespace-nowrap shrink-0"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onRequestPickup}
            className="inline-flex items-center gap-1 xl:gap-1.5 px-2.5 xl:px-3 2xl:px-3.5 py-1.5 xl:py-2 text-[11px] xl:text-xs font-semibold text-white bg-[#E56B4F] hover:bg-[#D4583C] rounded-md transition-colors cursor-pointer shadow-2xs whitespace-nowrap shrink-0"
          >
            <span>Request Pickup</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="p-2 text-[#244E70] bg-[#F7F5F0] rounded-md border border-[#E4E0D8]"
            aria-label="Call Kabadiwala Bhopal"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={onRequestPickup}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#E56B4F] rounded-md"
          >
            Request Pickup
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[#1F2933] hover:bg-[#F7F5F0] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E4E0D8] px-4 pt-2 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(link.path, e)}
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#244E70] text-white font-semibold'
                      : 'text-[#1F2933] hover:bg-[#F7F5F0]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E4E0D8] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestPickup();
              }}
              className="w-full py-2.5 text-center text-xs font-bold text-white bg-[#E56B4F] hover:bg-[#D4583C] rounded-md transition-colors"
            >
              Request Doorstep Scrap Pickup
            </button>

            <div className="grid grid-cols-2 gap-2 text-center">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="py-2 px-3 text-xs font-semibold text-[#244E70] bg-[#F7F5F0] rounded-md border border-[#E4E0D8] flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#244E70]" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                  'Hello Kabadiwala Bhopal, I want to book a scrap pickup.\nItem details:\nQuantity:\nPreferred pickup date & time:\nAddress:\nAdditional notes:\n\n(Note: Pickup service available only for bulk quantities - Paper & Raddi: min 50 kg | Plastic: min 30 kg)'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-md flex items-center justify-center gap-1.5 shadow-xs transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};