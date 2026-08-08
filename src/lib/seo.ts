import { BUSINESS_INFO } from '../data/business';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RecyclingCenter',
    '@id': `${BUSINESS_INFO.domain}/#organization`,
    'name': BUSINESS_INFO.name,
    'legalName': BUSINESS_INFO.legalName,
    'url': BUSINESS_INFO.domain,
    'telephone': BUSINESS_INFO.phone,
    'email': BUSINESS_INFO.email,
    'image': `${BUSINESS_INFO.domain}/assets/kabadiwala-bhopal.jpg`,
    'logo': `${BUSINESS_INFO.domain}/assets/logo.png`,
    'description': BUSINESS_INFO.shortDesc,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': BUSINESS_INFO.address.street,
      'addressLocality': BUSINESS_INFO.address.city,
      'addressRegion': BUSINESS_INFO.address.state,
      'postalCode': BUSINESS_INFO.address.pincode,
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '23.2796',
      'longitude': '77.3980'
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Bhopal',
        'sameAs': 'https://en.wikipedia.org/wiki/Bhopal'
      }
    ],
    'sameAs': [
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.linkedin,
      BUSINESS_INFO.googleBusinessProfile
    ],
    'priceRange': '₹₹'
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; item: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((it, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': it.name,
      'item': `${BUSINESS_INFO.domain}${it.item}`
    }))
  };
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

export function getServiceSchema(serviceName: string, serviceDesc: string, urlPath: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': serviceName,
    'name': `${serviceName} in Bhopal`,
    'description': serviceDesc,
    'provider': {
      '@type': 'RecyclingCenter',
      'name': BUSINESS_INFO.name,
      'telephone': BUSINESS_INFO.phone,
      'url': BUSINESS_INFO.domain
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Bhopal'
    },
    'url': `${BUSINESS_INFO.domain}${urlPath}`
  };
}
