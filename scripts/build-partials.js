const fs = require('fs');
const path = require('path');

function write(relPath, content) {
  const fullPath = path.join(__dirname, '..', relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
  console.log('Created: ' + relPath);
}
// 1. meta-head.ejs
write('src/views/partials/meta-head.ejs', `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><%= typeof pageTitle !== 'undefined' ? pageTitle : site.name + ' — Industrial Carboys Reconditioning' %></title>
<meta name="description" content="<%= typeof metaDescription !== 'undefined' ? metaDescription : site.description %>">
<link rel="canonical" href="<%= typeof canonicalUrl !== 'undefined' ? canonicalUrl : site.domain + currentPath %>">
<meta property="og:type" content="website">
<meta property="og:url" content="<%= typeof canonicalUrl !== 'undefined' ? canonicalUrl : site.domain + currentPath %>">
<meta property="og:title" content="<%= typeof pageTitle !== 'undefined' ? pageTitle : site.name %>">
<meta property="og:description" content="<%= typeof metaDescription !== 'undefined' ? metaDescription : site.description %>">
<meta property="og:image" content="<%= site.domain %>/images/og-parth-packaging.svg">
<meta property="og:site_name" content="<%= site.name %>">
<meta property="og:locale" content="en_IN">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<%= typeof pageTitle !== 'undefined' ? pageTitle : site.name %>">
<meta name="twitter:description" content="<%= typeof metaDescription !== 'undefined' ? metaDescription : site.description %>">
<meta name="twitter:image" content="<%= site.domain %>/images/og-parth-packaging.svg">
<meta name="theme-color" content="#0B1320">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/main.css">
`);

// 2. schema-org.ejs
write('src/views/partials/schema-org.ejs', `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "<%= site.domain %>/#organization",
      "name": "<%= site.name %>",
      "legalName": "<%= site.legalName %>",
      "url": "<%= site.domain %>",
      "logo": "<%= site.domain %>/images/og-parth-packaging.svg",
      "description": "<%= site.description %>",
      "email": "<%= site.email %>",
      "telephone": "<%= site.phoneClean %>",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "<%= site.address.street %>",
        "addressLocality": "<%= site.address.city %>",
        "addressRegion": "<%= site.address.state %>",
        "postalCode": "<%= site.address.pincode %>",
        "addressCountry": "IN"
      },
      "areaServed": { "@type": "Country", "name": "India" },
      "sameAs": ["<%= site.social.linkedin %>", "<%= site.social.twitter %>"]
    },
    {
      "@type": "Service",
      "@id": "<%= site.domain %>/#service-carboys",
      "name": "Industrial Carboys Reconditioning",
      "serviceType": "Packaging Reconditioning & Chemical Decontamination",
      "provider": { "@id": "<%= site.domain %>/#organization" },
      "areaServed": "India",
      "description": "Certified industrial decontamination, washing, high-temperature drying, and 100% pneumatic pressure decay testing of HDPE carboys."
    }
  ]
}
</script>
`);

// 3. top-bar.ejs
write('src/views/partials/top-bar.ejs', `
<div class="top-bar">
  <div class="container top-bar-inner">
    <div class="top-bar-badge">
      <span class="pulse-dot"></span>
      <span>Pan-India Industrial Packaging Reconditioning Services</span>
    </div>
    <div class="top-bar-contact">
      <a href="tel:<%= site.phoneClean %>" class="top-bar-link">
        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        <span><%= site.phone %></span>
      </a>
      <a href="mailto:<%= site.email %>" class="top-bar-link">
        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        <span><%= site.email %></span>
      </a>
      <a href="https://wa.me/<%= site.whatsapp %>?text=<%= encodeURIComponent(site.whatsappMessage) %>" target="_blank" rel="noopener" class="top-bar-link" style="color: #2DD4BF;">
        <strong>WhatsApp Sales Desk</strong>
      </a>
    </div>
  </div>
</div>
`);

// 4. header.ejs
write('src/views/partials/header.ejs', `
<header class="site-header">
  <div class="container site-header-inner">
    <a href="/" class="brand-logo" aria-label="<%= site.name %> Home">
      <div class="logo-symbol">P</div>
      <div class="logo-text-wrap">
        <span class="logo-name">PARTH PACKAGING</span>
        <span class="logo-tagline">Industrial Reconditioning</span>
      </div>
    </a>

    <nav class="nav-menu" aria-label="Main Navigation">
      <a href="/about" class="nav-link <%= activeNav === 'about' ? 'active' : '' %>">About Us</a>
      <a href="/carboys-reconditioning" class="nav-link <%= activeNav === 'carboys-reconditioning' ? 'active' : '' %>">Carboys Reconditioning</a>
      <a href="/services" class="nav-link <%= activeNav === 'services' ? 'active' : '' %>">Services</a>
      <a href="/process" class="nav-link <%= activeNav === 'process' ? 'active' : '' %>">Our Process</a>
      <a href="/industries" class="nav-link <%= activeNav === 'industries' ? 'active' : '' %>">Industries</a>
      <a href="/quality" class="nav-link <%= activeNav === 'quality' ? 'active' : '' %>">Quality</a>
      <a href="/locations" class="nav-link <%= activeNav === 'locations' ? 'active' : '' %>">Locations</a>
      <a href="/faq" class="nav-link <%= activeNav === 'faq' ? 'active' : '' %>">FAQs</a>
      <a href="/contact" class="nav-link <%= activeNav === 'contact' ? 'active' : '' %>">Contact</a>
    </nav>

    <div class="header-actions">
      <button type="button" class="btn btn-primary btn-open-quote" data-open-quote-modal>
        Get a Quote
      </button>
      <button type="button" class="mobile-toggle" id="mobileToggleBtn" aria-label="Toggle Navigation" aria-expanded="false">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  </div>
</header>
`);
// 5. mobile-drawer.ejs
write('src/views/partials/mobile-drawer.ejs', `
<div class="drawer-overlay" id="drawerOverlay"></div>
<div class="mobile-drawer" id="mobileDrawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
  <div class="drawer-header">
    <div class="brand-logo">
      <div class="logo-symbol">P</div>
      <div class="logo-text-wrap">
        <span class="logo-name">PARTH PACKAGING</span>
        <span class="logo-tagline">Reconditioning</span>
      </div>
    </div>
    <button type="button" class="drawer-close" id="drawerCloseBtn" aria-label="Close Navigation">×</button>
  </div>
  <nav class="drawer-nav">
    <a href="/" class="<%= activeNav === 'home' ? 'active' : '' %>">Home</a>
    <a href="/about" class="<%= activeNav === 'about' ? 'active' : '' %>">About Us</a>
    <a href="/carboys-reconditioning" class="<%= activeNav === 'carboys-reconditioning' ? 'active' : '' %>">Carboys Reconditioning</a>
    <a href="/services" class="<%= activeNav === 'services' ? 'active' : '' %>">All Services</a>
    <a href="/process" class="<%= activeNav === 'process' ? 'active' : '' %>">7-Step Process</a>
    <a href="/industries" class="<%= activeNav === 'industries' ? 'active' : '' %>">Industries We Serve</a>
    <a href="/quality" class="<%= activeNav === 'quality' ? 'active' : '' %>">Quality & Testing</a>
    <a href="/gallery" class="<%= activeNav === 'gallery' ? 'active' : '' %>">Facility Gallery</a>
    <a href="/case-studies" class="<%= activeNav === 'case-studies' ? 'active' : '' %>">Case Studies</a>
    <a href="/locations" class="<%= activeNav === 'locations' ? 'active' : '' %>">Pan-India Hubs</a>
    <a href="/blog" class="<%= activeNav === 'blog' ? 'active' : '' %>">Technical Blog</a>
    <a href="/faq" class="<%= activeNav === 'faq' ? 'active' : '' %>">FAQs</a>
    <a href="/contact" class="<%= activeNav === 'contact' ? 'active' : '' %>">Contact Us</a>
  </nav>
  <div class="drawer-footer">
    <button type="button" class="btn btn-primary btn-open-quote" style="width: 100%; margin-bottom: 12px;" data-open-quote-modal>
      Request a Quotation
    </button>
    <p style="font-size: 0.85rem; color: #64748B; margin-bottom: 6px;">📞 Direct: <a href="tel:<%= site.phoneClean %>"><%= site.phone %></a></p>
    <p style="font-size: 0.85rem; color: #64748B;">✉️ Email: <a href="mailto:<%= site.email %>"><%= site.email %></a></p>
  </div>
</div>
`);

// 6. mobile-action-bar.ejs
write('src/views/partials/mobile-action-bar.ejs', `
<div class="mobile-action-bar" aria-label="Quick Contact Actions">
  <a href="tel:<%= site.phoneClean %>" class="mobile-action-btn">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
    <span>Call Sales</span>
  </a>
  <a href="https://wa.me/<%= site.whatsapp %>?text=<%= encodeURIComponent(site.whatsappMessage) %>" target="_blank" rel="noopener" class="mobile-action-btn" style="color: #10B981;">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
    <span>WhatsApp</span>
  </a>
  <button type="button" class="mobile-action-btn btn-cta btn-open-quote" data-open-quote-modal style="border: none; cursor: pointer;">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
    <span>Get Quote</span>
  </button>
</div>
`);

// 7. breadcrumbs.ejs
write('src/views/partials/breadcrumbs.ejs', `
<% if (typeof breadcrumbs !== 'undefined' && breadcrumbs.length > 0) { %>
<nav class="breadcrumb-nav" aria-label="Breadcrumb">
  <div class="container">
    <ol class="breadcrumb-list">
      <% breadcrumbs.forEach((crumb, idx) => { %>
        <% if (idx === breadcrumbs.length - 1) { %>
          <li class="breadcrumb-current" aria-current="page"><%= crumb.label %></li>
        <% } else { %>
          <li>
            <a href="<%= crumb.url %>"><%= crumb.label %></a>
            <span class="breadcrumb-separator" aria-hidden="true">/</span>
          </li>
        <% } %>
      <% }) %>
    </ol>
  </div>
</nav>
<% } %>
`);

// 8. quote-modal.ejs
write('src/views/partials/quote-modal.ejs', `
<dialog id="quoteModal" class="modal-dialog" aria-labelledby="modalQuoteTitle">
  <div class="modal-content">
    <button type="button" class="modal-close-btn" aria-label="Close dialog">×</button>
    <div style="margin-bottom: 24px;">
      <span class="section-eyebrow">Direct Commercial Quotation</span>
      <h3 id="modalQuoteTitle" style="font-size: 1.5rem; margin-bottom: 6px;">Request Industrial Carboys Quotation</h3>
      <p style="font-size: 0.875rem; color: #64748B;">Complete your packaging requirements below. Our commercial sales desk responds with verified pricing within 24 business hours.</p>
    </div>

    <form id="modalQuoteForm" data-ajax-quote enctype="multipart/form-data">
      <div class="form-alert" role="alert"></div>

      <div class="honey-field">
        <label for="modal_website_url_field">Leave this empty</label>
        <input type="text" name="website_url_field" id="modal_website_url_field" tabindex="-1" autocomplete="off">
      </div>

      <div class="form-grid">
        <div>
          <label class="form-label" for="modal_name">Contact Person Name <span class="required">*</span></label>
          <input type="text" id="modal_name" name="name" class="form-control" placeholder="e.g. Rajesh Sharma" required>
        </div>
        <div>
          <label class="form-label" for="modal_company">Company Name <span class="required">*</span></label>
          <input type="text" id="modal_company" name="company" class="form-control" placeholder="e.g. Apex Chemicals" required>
        </div>
        <div>
          <label class="form-label" for="modal_mobile">Mobile Number <span class="required">*</span></label>
          <input type="tel" id="modal_mobile" name="mobile" class="form-control" placeholder="10-digit mobile number" required>
        </div>
        <div>
          <label class="form-label" for="modal_email">Work Email <span class="required">*</span></label>
          <input type="email" id="modal_email" name="email" class="form-control" placeholder="name@company.com" required>
        </div>
        <div>
          <label class="form-label" for="modal_city">Plant City <span class="required">*</span></label>
          <input type="text" id="modal_city" name="city" class="form-control" placeholder="e.g. Vapi / Thane / Pune" required>
        </div>
        <div>
          <label class="form-label" for="modal_state">State <span class="required">*</span></label>
          <select id="modal_state" name="state" class="form-control" required>
            <option value="">Select State</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Telangana">Telangana</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Delhi NCR">Delhi NCR</option>
            <option value="Other">Other State</option>
          </select>
        </div>
        <div>
          <label class="form-label" for="modal_containerType">Container Type <span class="required">*</span></label>
          <select id="modal_containerType" name="containerType" class="form-control" required>
            <option value="">Select Container Type</option>
            <option value="Narrow Mouth HDPE Carboy">Narrow Mouth HDPE Carboy</option>
            <option value="Wide Mouth HDPE Carboy">Wide Mouth HDPE Carboy</option>
            <option value="Square Jerry Can">Square Jerry Can</option>
            <option value="Heavy-Duty 50L Round Carboy">Heavy-Duty 50L Round Carboy</option>
            <option value="100L Carboy">100L Carboy</option>
            <option value="200L HDPE Drum">200L HDPE Drum</option>
          </select>
        </div>
        <div>
          <label class="form-label" for="modal_capacity">Capacity / Volume <span class="required">*</span></label>
          <select id="modal_capacity" name="capacity" class="form-control" required>
            <option value="">Select Capacity</option>
            <option value="20 Liters">20 Liters</option>
            <option value="30 Liters">30 Liters</option>
            <option value="35 Liters">35 Liters</option>
            <option value="50 Liters">50 Liters (Standard)</option>
            <option value="100 Liters">100 Liters</option>
            <option value="200 Liters">200 Liters</option>
          </select>
        </div>
        <div>
          <label class="form-label" for="modal_quantity">Quantity <span class="required">*</span></label>
          <select id="modal_quantity" name="quantity" class="form-control" required>
            <option value="">Select Quantity</option>
            <option value="50 - 150 units">50 – 150 units</option>
            <option value="151 - 500 units">151 – 500 units</option>
            <option value="501 - 1,000 units">501 – 1,000 units</option>
            <option value="1,000+ units">1,000+ units (Regular Contract)</option>
          </select>
        </div>
        <div>
          <label class="form-label" for="modal_pickupRequired">Pickup Required?</label>
          <select id="modal_pickupRequired" name="pickupRequired" class="form-control">
            <option value="Yes - Need Parth Logistics Pickup">Yes – Request Parth Logistics Pickup</option>
            <option value="No - Self Dispatch to Facility">No – Self dispatch to facility</option>
          </select>
        </div>
        <div class="form-group-full">
          <label class="form-label" for="modal_chemicalResidue">Previous Liquid / Chemical Contents</label>
          <input type="text" id="modal_chemicalResidue" name="chemicalResidue" class="form-control" placeholder="e.g. Surfactants, Solvents, Agricultural nutrients, Resins">
        </div>
        <div class="form-group-full">
          <label class="form-label" for="modal_attachment">Attach Photo or Specs (Optional, max 5MB)</label>
          <input type="file" id="modal_attachment" name="attachment" class="form-control" accept=".jpg,.jpeg,.png,.webp,.pdf">
        </div>
        <div class="form-group-full">
          <label class="form-label" for="modal_message">Specific Instructions / Notes</label>
          <textarea id="modal_message" name="message" class="form-control" placeholder="Mention bung type requirement, venting cap preferences..."></textarea>
        </div>
      </div>

      <div style="margin-top: 24px;">
        <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
          Submit Quotation Request
        </button>
      </div>
    </form>
  </div>
</dialog>
`);
// 9. before-after.ejs
write('src/views/partials/before-after.ejs', `
<div class="before-after-container">
  <div class="comparison-slider-wrap">
    <img src="/images/carboy-before.svg" alt="Used Soiled Carboy Before Reconditioning" class="comparison-image-before" width="800" height="600" loading="lazy">
    <div class="slider-badge slider-badge-before">Before Reconditioning</div>

    <div class="comparison-image-after-wrap">
      <img src="/images/carboy-after.svg" alt="Certified Cleaned Carboy After Reconditioning" class="comparison-image-after" width="800" height="600" loading="lazy">
      <div class="slider-badge slider-badge-after">After Reconditioning</div>
    </div>

    <div class="slider-handle">
      <div class="slider-handle-button" aria-label="Drag to compare">↔</div>
    </div>
  </div>
</div>
`);

// 10. roi-calculator.ejs
write('src/views/partials/roi-calculator.ejs', `
<div class="calculator-card">
  <div class="calculator-grid">
    <div>
      <span class="section-eyebrow">B2B Financial Estimator</span>
      <h3 style="font-size: 1.65rem; margin-bottom: 12px;">Packaging ROI & Annual Cost Savings Calculator</h3>
      <p style="font-size: 0.95rem; color: #64748B; margin-bottom: 28px;">
        See how much your enterprise can save annually by switching recurring liquid packaging dispatches from virgin HDPE carboys to Parth certified reconditioned containers.
      </p>

      <div class="calc-control">
        <div class="calc-label">
          <span>Monthly Container Volume:</span>
          <span class="calc-value-display" id="calcVolumeDisplay">1,000 units / month</span>
        </div>
        <input type="range" id="calcVolumeSlider" class="calc-range" min="100" max="10000" step="50" value="1000" aria-label="Monthly Carboy Consumption">
      </div>

      <div class="form-grid" style="margin-top: 20px;">
        <div>
          <label class="form-label" for="calcNewCost">Current Cost of New Carboy (₹)</label>
          <input type="number" id="calcNewCost" class="form-control" value="850" min="400" max="2500" step="10">
        </div>
        <div>
          <label class="form-label" for="calcRecondCost">Parth Reconditioning Cost (₹)</label>
          <input type="number" id="calcRecondCost" class="form-control" value="420" min="200" max="1200" step="10">
        </div>
      </div>
    </div>

    <div class="calc-results-card">
      <div class="calc-savings-banner">
        <div style="font-size: 0.8125rem; text-transform: uppercase; letter-spacing: 0.08em; color: #94A3B8; margin-bottom: 6px;">
          Estimated Annual Cost Savings
        </div>
        <div class="calc-savings-amount" id="calcSavingsAmount">₹ 51,60,000</div>
        <div class="calc-savings-subtext" id="calcSavingsPercent">51% Cost Reduction</div>
      </div>

      <div class="calc-breakdown-row">
        <span>Annual Packaging Volume:</span>
        <strong id="calcAnnualUnits" style="color: #FFFFFF;">12,000 units</strong>
      </div>
      <div class="calc-breakdown-row">
        <span>Virgin Packaging Annual Spend:</span>
        <strong id="calcAnnualNewSpend" style="color: #EF4444;">₹ 1,02,00,000</strong>
      </div>
      <div class="calc-breakdown-row">
        <span>Parth Reconditioned Spend:</span>
        <strong id="calcAnnualRecondSpend" style="color: #10B981;">₹ 50,40,000</strong>
      </div>

      <div style="margin-top: 24px;">
        <button type="button" class="btn btn-accent btn-open-quote" style="width: 100%;" data-open-quote-modal>
          Lock In This Packaging Rate
        </button>
      </div>
    </div>
  </div>
</div>
`);

// 11. cta-banner.ejs
write('src/views/partials/cta-banner.ejs', `
<section class="section section-dark" style="border-top: 1px solid rgba(255, 255, 255, 0.08);">
  <div class="container text-center">
    <span class="section-eyebrow">Pan-India Industrial Partner</span>
    <h2 style="color: #FFFFFF; margin-bottom: 16px;">Looking for a Reliable Carboys Reconditioning Partner?</h2>
    <p class="section-subtitle" style="max-width: 680px; margin: 0 auto 32px;">
      Discuss your container volume, chemical cleaning specifications, and pickup logistics with our engineering team today.
    </p>
    <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
      <button type="button" class="btn btn-accent btn-lg btn-open-quote" data-open-quote-modal>
        Request a Quotation
      </button>
      <a href="tel:<%= site.phoneClean %>" class="btn btn-outline-white btn-lg">
        Speak with Our Sales Desk
      </a>
    </div>
  </div>
</section>
`);

// 12. footer.ejs
write('src/views/partials/footer.ejs', `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="brand-logo" style="margin-bottom: 16px;">
          <div class="logo-symbol">P</div>
          <div class="logo-text-wrap">
            <span class="logo-name" style="color: #FFFFFF;">PARTH PACKAGING</span>
            <span class="logo-tagline" style="color: #14B8A6;">Industrial Reconditioning</span>
          </div>
        </div>
        <p style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 20px;">
          Parth Packaging is an established B2B industrial packaging reconditioning partner in India, providing certified HDPE carboys cleaning, pneumatic leak testing, and sustainable circular logistics.
        </p>
        <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.06); padding: 6px 12px; border-radius: 4px; font-size: 0.8rem; color: #38BDF8;">
          ✓ Pan-India Service Coverage
        </div>
      </div>

      <div>
        <h4 class="footer-col-title">Core Services</h4>
        <ul class="footer-links">
          <li><a href="/carboys-reconditioning">HDPE Carboys Reconditioning</a></li>
          <li><a href="/services">Chemical Decontamination & Wash</a></li>
          <li><a href="/services">Bung & Gasket Replacement</a></li>
          <li><a href="/services">Bulk Reverse Logistics</a></li>
          <li><a href="/process">7-Step Quality Process</a></li>
          <li><a href="/quality">Pressure Leak Testing Protocols</a></li>
        </ul>
      </div>

      <div>
        <h4 class="footer-col-title">Industrial Hubs</h4>
        <ul class="footer-links">
          <li><a href="/locations/mumbai-thane-navi-mumbai">Mumbai & Thane MIDC</a></li>
          <li><a href="/locations/gujarat-industrial-corridor">Gujarat Chemical Belt (Vapi / Ankleshwar)</a></li>
          <li><a href="/locations/pune-chakan-industrial">Pune & Chakan Industrial Zone</a></li>
          <li><a href="/locations/hyderabad-telangana">Hyderabad Pharma-Chemical Hub</a></li>
          <li><a href="/locations/chennai-tamil-nadu">Chennai Manufacturing Belt</a></li>
          <li><a href="/locations/delhi-ncr-industrial">Delhi NCR Industrial Clusters</a></li>
        </ul>
      </div>

      <div>
        <h4 class="footer-col-title">Commercial Desk</h4>
        <div class="footer-contact-info">
          <p>
            📍 <strong>Facility:</strong><br>
            <%= site.address.street %><br>
            <%= site.address.city %>, <%= site.address.state %> - <%= site.address.pincode %>
          </p>
          <p>
            📞 <strong>Direct Sales:</strong> <a href="tel:<%= site.phoneClean %>" style="color: #38BDF8;"><%= site.phone %></a><br>
            ✉️ <strong>Commercial Email:</strong> <a href="mailto:<%= site.email %>" style="color: #38BDF8;"><%= site.email %></a>
          </p>
          <p>
            ⏱️ <strong>Operating Hours:</strong><br>
            <%= site.operatingHours %>
          </p>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div>
        © <%= new Date().getFullYear() %> <%= site.name %>. All rights reserved. Industrial packaging reconditioning partner.
      </div>
      <div class="footer-legal-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/sitemap.xml">XML Sitemap</a>
      </div>
    </div>
  </div>
</footer>
`);

// 13. layouts/main.ejs
write('src/views/layouts/main.ejs', `
<!DOCTYPE html>
<html lang="en">
<head>
  <%- include('../partials/meta-head') %>
  <%- include('../partials/schema-org') %>
</head>
<body>
  <%- include('../partials/top-bar') %>
  <%- include('../partials/header') %>
  <%- include('../partials/mobile-drawer') %>
  <%- include('../partials/breadcrumbs') %>

  <main id="mainContent">
    <%- body %>
  </main>

  <%- include('../partials/footer') %>
  <%- include('../partials/mobile-action-bar') %>
  <%- include('../partials/quote-modal') %>

  <script src="/js/main.js" defer></script>
</body>
</html>
`);

// 14. layouts/error.ejs
write('src/views/layouts/error.ejs', `
<!DOCTYPE html>
<html lang="en">
<head>
  <%- include('../partials/meta-head') %>
</head>
<body>
  <%- include('../partials/top-bar') %>
  <%- include('../partials/header') %>
  <%- include('../partials/mobile-drawer') %>

  <main id="mainContent" style="min-height: 60vh; display: flex; align-items: center; justify-content: center; padding: 60px 0;">
    <%- body %>
  </main>

  <%- include('../partials/footer') %>
  <%- include('../partials/mobile-action-bar') %>
  <%- include('../partials/quote-modal') %>
  <script src="/js/main.js" defer></script>
</body>
</html>
`);

console.log('All layouts and partials successfully written.');
