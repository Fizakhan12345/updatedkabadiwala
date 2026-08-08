import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO } from '../data/business';
import logoSvg from '../assets/logo.svg';

interface WhatsAppWidgetProps {
  onRequestPickup?: () => void;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ onRequestPickup }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [customMessage, setCustomMessage] = useState<string>('');
  const [hasNewMessage, setHasNewMessage] = useState<boolean>(true);
  const [showTeaser, setShowTeaser] = useState<boolean>(false);

  // Auto show teaser after 3 seconds on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTeaser(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setHasNewMessage(false);
    setShowTeaser(false);
  };

  const handleQuickReply = (text: string) => {
    setCustomMessage(text);
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const messageToSend = customMessage.trim() || 'Hello Kabadiwala Bhopal, I want to book a scrap pickup at my doorstep.';
    const url = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(messageToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-16 sm:bottom-6 right-3 sm:right-6 z-50 flex flex-col items-end">
      {/* Teaser Bubble (Visible when collapsed) */}
      {!isOpen && showTeaser && (
        <div className="mb-2 max-w-[260px] sm:max-w-xs bg-white text-[#1F2933] p-3 rounded-2xl shadow-xl border border-[#25D366]/30 animate-bounce flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            </div>
            <div className="text-xs">
              <p className="font-bold text-[#1F2933]">Kabadiwala Bhopal</p>
              <p className="text-[#66737D] text-[11px] leading-tight">Need doorstep scrap pickup?</p>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTeaser(false);
            }}
            className="text-[#66737D] hover:text-[#1F2933] p-1 rounded-full hover:bg-slate-100"
            aria-label="Close message teaser"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Expanded WhatsApp Chat Box */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[360px] bg-white rounded-2xl shadow-2xl border border-[#E4E0D8] overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white p-1 flex items-center justify-center shadow-inner">
                  <img src={logoSvg} alt="Kabadiwala Bhopal Logo" className="w-full h-full object-contain" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] border-2 border-[#075E54] rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h4 className="font-bold text-sm leading-none text-white">Kabadiwala Bhopal</h4>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                </div>
                <p className="text-[11px] text-emerald-100 font-medium">Online | Instant Doorstep Pickup</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-100 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-3.5 bg-[#E5DDD5] space-y-3 min-h-[220px] max-h-[300px] overflow-y-auto text-xs">
            {/* Timestamp */}
            <div className="text-center">
              <span className="bg-white/80 text-[#66737D] text-[10px] px-2 py-0.5 rounded-full shadow-2xs">
                Today
              </span>
            </div>

            {/* Welcome Message */}
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-xs text-[#1F2933] max-w-[88%] space-y-1.5 border-l-2 border-[#128C7E]">
              <p className="font-semibold text-[#128C7E] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#E56B4F]" />
                Namaste! Welcome to Kabadiwala Bhopal
              </p>
              <p className="leading-relaxed">
                Need doorstep scrap pickup in Bhopal? Select an option or type your request below:
              </p>
            </div>

            {/* Quick Reply Chips */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#66737D] px-1">
                Quick Options:
              </p>
              <div className="flex flex-col gap-1.5">
                <button
                  type="button"
                  onClick={() => handleQuickReply('Hello Kabadiwala Bhopal, I want to book a scrap pickup at my doorstep.')}
                  className="text-left bg-white hover:bg-[#F7F5F0] text-[#244E70] font-semibold p-2 rounded-lg border border-[#E4E0D8] shadow-2xs transition-colors flex items-center justify-between"
                >
                  <span>📦 Book Household Scrap Pickup</span>
                  <span className="text-xs font-bold text-[#25D366]">→</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickReply('Hello, please send me today scrap rates for paper, metal, and plastic.')}
                  className="text-left bg-white hover:bg-[#F7F5F0] text-[#244E70] font-semibold p-2 rounded-lg border border-[#E4E0D8] shadow-2xs transition-colors flex items-center justify-between"
                >
                  <span>💰 Check Today's Scrap Rates</span>
                  <span className="text-xs font-bold text-[#25D366]">→</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickReply('Hello, we have office paper files & commercial scrap in Bhopal for bulk pickup.')}
                  className="text-left bg-white hover:bg-[#F7F5F0] text-[#244E70] font-semibold p-2 rounded-lg border border-[#E4E0D8] shadow-2xs transition-colors flex items-center justify-between"
                >
                  <span>🏢 Office / Factory Scrap Request</span>
                  <span className="text-xs font-bold text-[#25D366]">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Input Area */}
          <form onSubmit={handleSend} className="p-2.5 bg-white border-t border-[#E4E0D8] space-y-2">
            <div className="flex items-center gap-1.5">
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-[#F7F5F0] border border-[#E4E0D8] text-[#1F2933] text-xs rounded-full px-3.5 py-2 focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
              />
              <button
                type="submit"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-2 rounded-full transition-transform active:scale-95 shadow-md flex items-center justify-center shrink-0"
                title="Send via WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded-lg shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Start WhatsApp Chat (+91 8871600497)</span>
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={isOpen ? () => setIsOpen(false) : handleOpen}
        className="relative group bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2.5 cursor-pointer ring-4 ring-white/80"
        aria-label="Open WhatsApp Chat with Kabadiwala Bhopal"
      >
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        <span className="hidden sm:inline-block font-bold text-xs text-white pr-1">
          WhatsApp Us
        </span>

        {/* Pulse online ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
        </span>

        {hasNewMessage && (
          <span className="absolute -top-2 -left-1 bg-[#E56B4F] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full shadow-sm animate-pulse">
            1
          </span>
        )}
      </button>
    </div>
  );
};
