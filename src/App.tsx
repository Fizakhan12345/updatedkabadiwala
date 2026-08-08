import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { PickupRequestModal } from './components/PickupRequestModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';

import { HomePage } from './pages/HomePage';
import { LocalityDetailPage } from './pages/LocalityDetailPage';
import { AreasWeServeHubPage } from './pages/AreasWeServeHubPage';
import { ServicesPage } from './pages/ServicesPage';
import { ScrapCategoriesPage } from './pages/ScrapCategoriesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

import { LOCALITIES } from './data/localities';
import { SeoHead } from './components/SeoHead';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname || '/';
  });

  const [pickupModalOpen, setPickupModalOpen] = useState(false);
  const [activeLocalitySlug, setActiveLocalitySlug] = useState<string | undefined>(undefined);

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Google Analytics SPA page view tracking on route change
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-1BCL29DSGZ', {
        page_path: currentPath,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    // Normalize trailing slash
    const normalizedPath = path === '/' ? '/' : (path.endsWith('/') ? path : `${path}/`);
    if (window.location.pathname !== normalizedPath) {
      window.history.pushState({}, '', normalizedPath);
    }
    setCurrentPath(normalizedPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPickupModal = (localitySlug?: string) => {
    setActiveLocalitySlug(localitySlug);
    setPickupModalOpen(true);
  };

  // Helper function to resolve current route
  const renderPage = () => {
    const path = currentPath.toLowerCase();

    // Standard static routes
    if (path === '/' || path === '') {
      return (
        <HomePage
          onNavigate={handleNavigate}
          onRequestPickup={() => handleOpenPickupModal()}
        />
      );
    }

    if (path === '/services/' || path === '/services') {
      return (
        <ServicesPage
          onNavigate={handleNavigate}
          onRequestPickup={() => handleOpenPickupModal()}
        />
      );
    }

    if (path === '/scrap-categories/' || path === '/scrap-categories') {
      return (
        <ScrapCategoriesPage
          onNavigate={handleNavigate}
          onRequestPickup={() => handleOpenPickupModal()}
        />
      );
    }

    if (path === '/areas-we-serve/' || path === '/areas-we-serve') {
      return (
        <AreasWeServeHubPage
          onNavigate={handleNavigate}
          onRequestPickup={() => handleOpenPickupModal()}
        />
      );
    }

    if (path === '/how-it-works/' || path === '/how-it-works') {
      return (
        <HowItWorksPage
          onNavigate={handleNavigate}
          onRequestPickup={() => handleOpenPickupModal()}
        />
      );
    }

    if (path === '/about/' || path === '/about') {
      return (
        <AboutPage
          onNavigate={handleNavigate}
          onRequestPickup={() => handleOpenPickupModal()}
        />
      );
    }

    if (path === '/faq/' || path === '/faq') {
      return (
        <FAQPage
          onNavigate={handleNavigate}
          onRequestPickup={() => handleOpenPickupModal()}
        />
      );
    }

    if (path === '/contact/' || path === '/contact') {
      return <ContactPage onNavigate={handleNavigate} />;
    }

    // Check locality pages (33 preserved URLs)
    const cleanSlug = path.replace(/^\/+|\/+$/g, '');
    const matchedLocality = LOCALITIES.find((loc) => loc.slug === cleanSlug);

    if (matchedLocality) {
      return (
        <LocalityDetailPage
          locality={matchedLocality}
          onNavigate={handleNavigate}
          onRequestPickup={() => handleOpenPickupModal(matchedLocality.slug)}
        />
      );
    }

    // 404 Fallback
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-slate-50">
        <SeoHead
          title="Page Not Found | Kabadiwala Bhopal"
          description="The requested page could not be found. Return to Kabadiwala Bhopal homepage."
          canonicalPath={currentPath}
        />
        <h1 className="text-3xl font-extrabold text-navy-900 mb-2">404 - Page Not Found</h1>
        <p className="text-slate-600 text-sm mb-6 max-w-md">
          The requested page could not be located. Explore our 33 Bhopal locality pages or return to the homepage.
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavigate('/')}
            className="px-5 py-2.5 bg-navy-900 text-white font-bold text-xs rounded hover:bg-navy-800 transition-colors cursor-pointer"
          >
            Go to Homepage
          </button>
          <button
            onClick={() => handleNavigate('/areas-we-serve/')}
            className="px-5 py-2.5 bg-accent-orange text-white font-bold text-xs rounded hover:bg-accent-orange-dark transition-colors cursor-pointer"
          >
            Areas We Serve Hub
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-accent-orange selection:text-white">
      {/* Header */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onRequestPickup={() => handleOpenPickupModal()}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky CTA */}
      <StickyMobileCTA onRequestPickup={() => handleOpenPickupModal()} />

      {/* Floating Interactive WhatsApp Chat Popup Widget */}
      <WhatsAppWidget onRequestPickup={() => handleOpenPickupModal()} />

      {/* Pickup Request Modal Dialog */}
      <PickupRequestModal
        isOpen={pickupModalOpen}
        onClose={() => setPickupModalOpen(false)}
        defaultLocalitySlug={activeLocalitySlug}
      />
    </div>
  );
}
