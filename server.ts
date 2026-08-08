import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All 33 locality slugs from verified list
const LOCALITY_SLUGS = [
  'kabadiwala-mp-nagar-bhopal',
  'kabadiwala-arera-colony-bhopal',
  'kabadiwala-kolar-road-bhopal',
  'kabadiwala-habibganj-bhopal',
  'kabadiwala-bairagarh-bhopal',
  'kabadiwala-shahpura-bhopal',
  'kabadiwala-ayodhya-nagar-bhopal',
  'kabadiwala-govindpura-industrial-area-bhopal',
  'kabadiwala-bagh-sewania-bhopal',
  'kabadiwala-hoshangabad-road-bhopal',
  'kabadiwala-chowk-bazaar-bhopal',
  'kabadiwala-ibrahimpura-bhopal',
  'kabadiwala-jumerati-bhopal',
  'kabadiwala-itwara-bhopal',
  'kabadiwala-peer-gate-bhopal',
  'kabadiwala-ghoda-nakkas-bhopal',
  'kabadiwala-jama-masjid-bhopal',
  'kabadiwala-lakherapura-bhopal',
  'kabadiwala-kotwali-bhopal',
  'kabadiwala-kali-basti-bhopal',
  'kabadiwala-shahjahanabad-bhopal',
  'kabadiwala-kamla-park-bhopal',
  'kabadiwala-jinsi-bhopal',
  'kabadiwala-moti-masjid-bhopal',
  'kabadiwala-mangalwara-bhopal',
  'kabadiwala-koh-e-fiza-bhopal',
  'kabadiwala-nayapura-bhopal',
  'kabadiwala-nazirabad-bhopal',
  'kabadiwala-nariyal-kheda-bhopal',
  'kabadiwala-karond-bhopal',
  'kabadiwala-jehangirabad-bhopal',
  'kabadiwala-sultania-road-bhopal',
  'kabadiwala-budhwara-bhopal'
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Health Check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'Kabadiwala Bhopal' });
  });

  // Pickup request API
  app.post('/api/pickup-request', (req, res) => {
    const { refId, fullName, phone, locality, scrapType, notes } = req.body || {};
    console.log(`[Pickup Request] Ref: ${refId}, Name: ${fullName}, Phone: ${phone}, Locality: ${locality}`);
    res.json({ success: true, refId: refId || `KB-${Date.now()}` });
  });

  // Robots.txt
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send(
      `User-agent: *\nAllow: /\n\nSitemap: https://kabadiwalabhopal.com/sitemap.xml\n`
    );
  });

  // Sitemap.xml
  app.get('/sitemap.xml', (req, res) => {
    res.type('application/xml');
    const domain = 'https://kabadiwalabhopal.com';
    const lastMod = new Date().toISOString().split('T')[0];

    const mainPages = [
      '',
      '/services/',
      '/scrap-categories/',
      '/areas-we-serve/',
      '/how-it-works/',
      '/about/',
      '/faq/',
      '/contact/'
    ];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">\n`;

    mainPages.forEach((p) => {
      xml += `  <url>\n`;
      xml += `    <loc>${domain}${p}</loc>\n`;
      xml += `    <lastmod>${lastMod}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>${p === '' ? '1.0' : '0.8'}</priority>\n`;
      xml += `  </url>\n`;
    });

    LOCALITY_SLUGS.forEach((slug) => {
      xml += `  <url>\n`;
      xml += `    <loc>${domain}/${slug}/</loc>\n`;
      xml += `    <lastmod>${lastMod}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.7</priority>\n`;
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;
    res.send(xml);
  });

  // Vite Middleware in dev or static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Kabadiwala Bhopal server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
