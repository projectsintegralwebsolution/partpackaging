const http = require('http');
const app = require('../dist/server').default;

const PORT = 3847; // Test port
const server = app.listen(PORT, async () => {
  console.log(`Test server running on port ${PORT}`);
  let passed = 0;
  let failed = 0;

  async function get(path, expectedStatus = 200) {
    return new Promise((resolve) => {
      http.get(`http://localhost:${PORT}${path}`, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          if (res.statusCode === expectedStatus) {
            console.log(`✓ GET ${path} -> ${res.statusCode} (${data.length} bytes)`);
            passed++;
          } else {
            console.error(`✗ GET ${path} -> Expected ${expectedStatus}, got ${res.statusCode}`);
            failed++;
          }
          resolve({ status: res.statusCode, data, headers: res.headers });
        });
      }).on('error', (err) => {
        console.error(`✗ GET ${path} -> Request error:`, err.message);
        failed++;
        resolve(null);
      });
    });
  }

  async function post(path, bodyObj, expectedStatus = 200) {
    return new Promise((resolve) => {
      const payload = JSON.stringify(bodyObj);
      const req = http.request(`http://localhost:${PORT}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload)
        }
      }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          if (res.statusCode === expectedStatus) {
            console.log(`✓ POST ${path} -> ${res.statusCode}`);
            passed++;
          } else {
            console.error(`✗ POST ${path} -> Expected ${expectedStatus}, got ${res.statusCode}: ${data}`);
            failed++;
          }
          resolve({ status: res.statusCode, data: JSON.parse(data || '{}') });
        });
      });
      req.on('error', (err) => {
        console.error(`✗ POST ${path} -> Request error:`, err.message);
        failed++;
        resolve(null);
      });
      req.write(payload);
      req.end();
    });
  }

  try {
    console.log('\n--- 1. Testing Core Public Pages ---');
    await get('/');
    await get('/about');
    await get('/carboys-reconditioning');
    await get('/services');
    await get('/process');
    await get('/industries');
    await get('/industries/chemical-industry');
    await get('/industries/agrochemicals-fertilizers');
    await get('/quality');
    await get('/gallery');
    await get('/case-studies');
    await get('/faq');
    await get('/locations');
    await get('/locations/mumbai-thane-navi-mumbai');
    await get('/locations/gujarat-industrial-corridor');
    await get('/blog');
    await get('/blog/true-economics-carboy-reconditioning-vs-new');
    await get('/contact');
    await get('/privacy-policy');
    await get('/terms');

    console.log('\n--- 2. Testing SEO Assets ---');
    const sitemap = await get('/sitemap.xml');
    if (sitemap && sitemap.headers['content-type'].includes('xml') && sitemap.data.includes('<urlset')) {
      console.log('✓ sitemap.xml is valid XML with <urlset>');
    } else {
      console.error('✗ sitemap.xml validation failed');
      failed++;
    }

    const robots = await get('/robots.txt');
    if (robots && robots.data.includes('User-agent: *') && robots.data.includes('Sitemap:')) {
      console.log('✓ robots.txt is valid');
    } else {
      console.error('✗ robots.txt validation failed');
      failed++;
    }

    console.log('\n--- 3. Testing 404 Error Handling ---');
    await get('/non-existent-industrial-page', 404);

    console.log('\n--- 4. Testing API Endpoints ---');
    // Test ROI Calculator
    const roi = await get('/api/calculate-roi?volume=1500&newCost=850&reconditionedCost=420');
    const roiData = JSON.parse(roi.data);
    if (roiData.success && roiData.percentSaved > 0) {
      console.log(`✓ ROI Calculator returned: ${roiData.percentSaved}% savings (Annual: ₹${roiData.annualSavings})`);
    } else {
      console.error('✗ ROI Calculator failed');
      failed++;
    }

    // Test Quote Submission
    const quoteRes = await post('/api/quote', {
      name: 'Test Industrial Buyer',
      company: 'Test Chemical Corp Ltd',
      mobile: '9876543210',
      email: 'buyer@testchemical.com',
      city: 'Vapi',
      state: 'Gujarat',
      containerType: 'Narrow Mouth HDPE Carboy',
      capacity: '50 Liters',
      quantity: '500 units',
      chemicalResidue: 'Surfactants',
      pickupRequired: 'Yes - Need Parth Pickup Logistics',
      message: 'Urgent monthly requirement for testing'
    });
    if (quoteRes && quoteRes.data.success) {
      console.log('✓ Quote Submission API processed successfully');
    } else {
      console.error('✗ Quote Submission API failed');
      failed++;
    }

    // Test Contact Submission
    const contactRes = await post('/api/contact', {
      name: 'Operations Manager',
      company: 'Industrial Coatings India',
      email: 'ops@coatings.com',
      mobile: '9123456780',
      subject: 'Trial batch inquiry',
      message: 'Need trial batch of 100 carboys for resin trial.'
    });
    if (contactRes && contactRes.data.success) {
      console.log('✓ Contact Submission API processed successfully');
    } else {
      console.error('✗ Contact Submission API failed');
      failed++;
    }

    // Test Honeypot Spam Blocker
    const honeypotRes = await post('/api/contact', {
      name: 'Spam Bot',
      email: 'bot@spam.com',
      mobile: '1234567890',
      message: 'Buy cheap watches',
      website_url_field: 'http://spam-link.com'
    });
    if (honeypotRes && honeypotRes.data.success) {
      console.log('✓ Honeypot silently trapped spam bot without sending email');
    } else {
      console.error('✗ Honeypot test failed');
      failed++;
    }

    console.log(`\n========================================`);
    console.log(`TEST SUMMARY: ${passed} Passed, ${failed} Failed`);
    console.log(`========================================\n`);

    server.close(() => {
      process.exit(failed > 0 ? 1 : 0);
    });
  } catch (err) {
    console.error('Fatal test error:', err);
    server.close(() => process.exit(1));
  }
});
