import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../data/business';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: string;
  jsonLd?: object[];
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  jsonLd = []
}) => {
  useEffect(() => {
    // Ensure title does NOT contain banned phrase
    const cleanTitle = title.replace(/Aaj Ka Bhaav/gi, '').trim();
    document.title = cleanTitle;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Canonical link
    const canonicalUrl = `${BUSINESS_INFO.domain}${canonicalPath.endsWith('/') ? canonicalPath : canonicalPath + '/'}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Robots meta
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'index, follow');

    // OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', cleanTitle);

    // OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    // OpenGraph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonicalUrl);

    // Inject JSON-LD
    const existingJsonLd = document.querySelectorAll('script[type="application/ld+json"].dynamic-seo');
    existingJsonLd.forEach(el => el.remove());

    jsonLd.forEach((schemaData) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = 'dynamic-seo';
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    });

  }, [title, description, canonicalPath, jsonLd, ogType]);

  return null;
};
