/**
 * scripts/generate-static-seo.mts
 *
 * Run AFTER `vite build`. No headless browser, no puppeteer.
 *
 * How it works: your SCRAP_DEALERS and LOCALITIES data files already
 * contain the exact title/description each page's <SeoHead> uses. Instead
 * of running JS in a browser to extract them from the DOM (the puppeteer
 * approach), this script reads that same data directly and writes it
 * straight into a copy of your built index.html for every route.
 *
 * Result: dist/steel-scrap-dealer-bhopal/index.html has the correct
 * <title> and meta tags already in the raw file — exactly what
 * view-source, Bing, and link-preview bots see, with zero JS execution
 * required and no extra dependency beyond `tsx`.
 *
 * Usage:
 *   npm run build            (plain vite build — unchanged)
 *   npm run generate-seo     (this script)
 *   OR: npm run build:seo    (does both — see package.json note below)
 */

import path from 'node:path';
import fs from 'node:fs';

import { SCRAP_DEALERS } from '../src/data/scrapDealers';
import { LOCALITIES } from '../src/data/localities';
import { BUSINESS_INFO } from '../src/data/business';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

interface RouteSeo {
  path: string;
  title: string;
  description: string;
}

// ---------------------------------------------------------------------
// Static pages that aren't driven by a data file. Fill these in to match
// exactly what each page's <SeoHead title="..." description="..." />
// currently passes — copy them straight from the page component.
// Routes left as null are skipped (fall back to the generic index.html
// title) with a console warning so you know what's still missing.
// ---------------------------------------------------------------------
const STATIC_PAGES_SEO: Record<string, { title: string; description: string } | null> = {
  '/': {
    title: 'Kabadiwala Bhopal | Doorstep Scrap Collection Service',
    description:
      'Kabadiwala Bhopal provides convenient doorstep scrap collection across homes, offices, and factories in Bhopal. Call +91 8871600497 for doorstep scrap pickup.'
  },
  '/areas-we-serve/': {
    title: 'Areas We Serve in Bhopal | Doorstep Scrap Collection Hub',
    description:
      'Explore doorstep scrap pickup across all 33 localities in Bhopal including MP Nagar, Arera Colony, Kolar Road, Govindpura, Old City markets & suburbs. Call +91 8871600497.'
  },
  '/scrap-dealers/': {
    title: 'Scrap Dealers in Bhopal | All Scrap Material Categories',
    description:
      'Kabadiwala Bhopal is your one-stop scrap dealer for iron, steel, copper, brass, aluminium, e-waste, paper, plastic and more. Call +91 8871600497.'
  },
  '/services/': {
    title: 'Scrap Collection Services in Bhopal | Kabadiwala Bhopal',
    description:
      'Doorstep scrap collection services in Bhopal for households, offices, shops and factories. Paper, metal, e-waste & appliance pickup. Call +91 8871600497.'
  },
  '/scrap-categories/': {
    title: 'Scrap Categories We Buy in Bhopal | Kabadiwala Bhopal',
    description:
      'Browse all scrap categories Kabadiwala Bhopal buys — paper, metals, e-waste, home appliances, office scrap and plastics. Doorstep pickup across Bhopal.'
  },
  '/how-it-works/': {
    title: 'How Scrap Pickup Works in Bhopal | Kabadiwala Bhopal',
    description:
      'See how doorstep scrap pickup works with Kabadiwala Bhopal — book a slot, get transparent digital weighing, and instant payment. Call +91 8871600497.'
  },
  '/about/': {
    title: 'About Kabadiwala Bhopal | Doorstep Scrap Collection Team',
    description:
      'Learn about Kabadiwala Bhopal, a local doorstep scrap collection service serving households and businesses across Bhopal with transparent weighing.'
  },
  '/faq/': {
    title: 'FAQs | Kabadiwala Bhopal Scrap Pickup Questions Answered',
    description:
      'Answers to common questions about scrap pickup, minimum quantities, payment, and coverage areas for Kabadiwala Bhopal doorstep scrap collection.'
  },
  '/contact/': {
    title: 'Contact Kabadiwala Bhopal | Book Doorstep Scrap Pickup',
    description:
      'Contact Kabadiwala Bhopal to book doorstep scrap pickup in Bhopal. Call or WhatsApp +91 8871600497 for fast, transparent scrap collection.'
  },
};

function getAllRoutes(): RouteSeo[] {
  const staticRoutes: RouteSeo[] = Object.entries(STATIC_PAGES_SEO)
    .filter((entry): entry is [string, { title: string; description: string }] => entry[1] !== null)
    .map(([routePath, seo]) => ({ path: routePath, ...seo }));

  const dealerRoutes: RouteSeo[] = SCRAP_DEALERS.map((d) => ({
    path: d.path,
    title: d.metaTitle,
    description: d.metaDescription,
  }));

  const localityRoutes: RouteSeo[] = LOCALITIES.map((l) => ({
    path: l.path,
    title: l.metaTitle,
    description: l.metaDescription,
  }));

  return [...staticRoutes, ...dealerRoutes, ...localityRoutes];
}

function routeToOutputFile(routePath: string): string {
  const cleanRoute = routePath === '/' ? '' : routePath.replace(/^\/+|\/+$/g, '');
  const dir = cleanRoute ? path.join(DIST_DIR, cleanRoute) : DIST_DIR;
  return path.join(dir, 'index.html');
}

function cleanTitle(title: string): string {
  // Mirrors the same cleanup SeoHead.tsx does client-side
  return title.replace(/Aaj Ka Bhaav/gi, '').trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Replace <title>...</title>, or insert one before </head> if missing.
 */
function setTitle(html: string, title: string): string {
  const safe = escapeHtml(title);
  if (/<title>.*?<\/title>/is.test(html)) {
    return html.replace(/<title>.*?<\/title>/is, `<title>${safe}</title>`);
  }
  return html.replace(/<\/head>/i, `  <title>${safe}</title>\n  </head>`);
}

/**
 * Insert or update a <meta> tag identified by attrName="attrValue"
 * (e.g. name="description" or property="og:title").
 */
function upsertMeta(html: string, attrName: 'name' | 'property', attrValue: string, content: string): string {
  const safeContent = escapeHtml(content);
  const tagRegex = new RegExp(
    `<meta\\s+${attrName}=["']${attrValue}["']\\s+content=["'][^"']*["']\\s*/?>`,
    'i'
  );
  const newTag = `<meta ${attrName}="${attrValue}" content="${safeContent}" />`;

  if (tagRegex.test(html)) {
    return html.replace(tagRegex, newTag);
  }
  return html.replace(/<\/head>/i, `  ${newTag}\n  </head>`);
}

function upsertCanonical(html: string, url: string): string {
  const tagRegex = /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i;
  const newTag = `<link rel="canonical" href="${escapeHtml(url)}" />`;

  if (tagRegex.test(html)) {
    return html.replace(tagRegex, newTag);
  }
  return html.replace(/<\/head>/i, `  ${newTag}\n  </head>`);
}

function buildRouteHtml(template: string, route: RouteSeo): string {
  const title = cleanTitle(route.title);
  const canonicalUrl = `${BUSINESS_INFO.domain}${route.path}`;

  let html = template;
  html = setTitle(html, title);
  html = upsertMeta(html, 'name', 'description', route.description);
  html = upsertMeta(html, 'name', 'robots', 'index, follow');
  html = upsertMeta(html, 'property', 'og:title', title);
  html = upsertMeta(html, 'property', 'og:description', route.description);
  html = upsertMeta(html, 'property', 'og:url', canonicalUrl);
  html = upsertCanonical(html, canonicalUrl);

  return html;
}

function main() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`✗ ${TEMPLATE_PATH} not found. Run "vite build" first.`);
    process.exit(1);
  }

  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
  const routes = getAllRoutes();
  const skipped = Object.entries(STATIC_PAGES_SEO).filter(([, v]) => v === null).map(([k]) => k);

  console.log(`Generating static SEO HTML for ${routes.length} routes...\n`);

  for (const route of routes) {
    const html = buildRouteHtml(template, route);
    const outputFile = routeToOutputFile(route.path);
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    fs.writeFileSync(outputFile, html, 'utf8');
    console.log(`✓ ${route.path.padEnd(45)} -> ${cleanTitle(route.title)}`);
  }

  if (skipped.length > 0) {
    console.log(`\n⚠ Skipped (no title/description configured, left with generic fallback):`);
    skipped.forEach((r) => console.log(`   ${r}`));
    console.log(`  Fill these in STATIC_PAGES_SEO in this script to fix them too.`);
  }

  console.log(`\nDone. ${routes.length} routes written with correct SEO tags into dist/`);
}

main();
