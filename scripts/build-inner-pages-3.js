const fs = require('fs');
const path = require('path');

function write(relPath, content) {
  const fullPath = path.join(__dirname, '..', relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
  console.log('Created: ' + relPath);
}

// 11. locations.ejs
write('src/views/pages/locations.ejs', `
<%- include('../layouts/main', { body: \`
<section class="section section-dark">
  <div class="container text-center">
    <span class="section-eyebrow">Pan-India Network</span>
    <h1 style="color: #FFFFFF; margin-bottom: 16px;">Industrial Service Corridors</h1>
    <p class="section-subtitle" style="max-width: 720px; margin: 0 auto;">
      Scheduled bulk pickup and certified reconditioning logistics connecting chemical, pharmaceutical, and manufacturing clusters across India.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px;">
      <% locations.forEach((loc) => { %>
        <div class="stat-card" style="display: flex; flex-direction: column;">
          <div style="font-size: 0.8rem; font-weight: 700; color: #0F766E; text-transform: uppercase; margin-bottom: 6px;"><%= loc.state %></div>
          <h2 style="font-size: 1.35rem; margin-bottom: 12px;"><%= loc.name %></h2>
          <p style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;"><%= loc.logisticsCapabilities %></p>
          
          <div style="margin-bottom: 20px;">
            <div style="font-size: 0.775rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #0F172A; margin-bottom: 6px;">Key Industrial Areas Served:</div>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 4px; font-size: 0.85rem; color: #475569;">
              <% loc.keyIndustrialAreas.slice(0, 4).forEach((area) => { %>
                <li>• <%= area %></li>
              <% }) %>
            </ul>
          </div>

          <div style="font-size: 0.85rem; font-weight: 600; color: #0284C7; margin-bottom: 16px; margin-top: auto;">
            ⏱️ Turnaround: <%= loc.turnaroundTime %>
          </div>

          <a href="/locations/<%= loc.slug %>" class="btn btn-primary" style="width: 100%;">
            View <%= loc.name.split('(')[0].trim() %> Hub →
          </a>
        </div>
      <% }) %>
    </div>
  </div>
</section>

<%- include('../partials/cta-banner') %>
\` }) %>
`);

// 12. location-detail.ejs
write('src/views/pages/location-detail.ejs', `
<%- include('../layouts/main', { body: \`
<section class="section section-dark">
  <div class="container text-center">
    <span class="section-eyebrow"><%= location.state %> Regional Hub</span>
    <h1 style="color: #FFFFFF; margin-bottom: 16px;"><%= location.name %></h1>
    <p class="section-subtitle" style="max-width: 720px; margin: 0 auto 28px;">
      Dedicated B2B carboy reconditioning and bulk pickup logistics for manufacturing plants in this region.
    </p>
    <div>
      <button type="button" class="btn btn-accent btn-lg btn-open-quote" data-open-quote-modal>
        Inquire for This Hub
      </button>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center;">
      <div>
        <span class="section-eyebrow">Cluster Capabilities</span>
        <h2 class="section-title">Industrial Reconditioning & Pickup Logistics</h2>
        <p style="font-size: 1.05rem; color: #334155; line-height: 1.7; margin-bottom: 20px;">
          <%= location.logisticsCapabilities %>
        </p>

        <h4 style="margin-bottom: 12px; font-size: 1.1rem;">Industrial Areas & Estates Covered:</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px;">
          <% location.keyIndustrialAreas.forEach((area) => { %>
            <li style="display: flex; align-items: center; gap: 10px; font-size: 0.925rem; color: #334155;">
              <span style="color: var(--color-brand); font-weight: bold;">✓</span>
              <span><%= area %></span>
            </li>
          <% }) %>
        </ul>

        <h4 style="margin-bottom: 12px; font-size: 1.1rem;">Services Available in This Corridor:</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px;">
          <% location.servicesAvailable.forEach((svc) => { %>
            <li style="display: flex; align-items: center; gap: 10px; font-size: 0.925rem; color: #334155;">
              <span style="color: var(--color-info); font-weight: bold;">•</span>
              <span><%= svc %></span>
            </li>
          <% }) %>
        </ul>

        <div style="background: var(--color-canvas-subtle); padding: 18px; border-radius: 8px; border: 1px solid var(--color-border);">
          <div style="font-size: 0.85rem; font-weight: 700; color: #0F172A; margin-bottom: 4px;">Standard Turnaround Time:</div>
          <div style="font-size: 1.15rem; font-weight: 800; color: var(--color-brand);"><%= location.turnaroundTime %></div>
        </div>
      </div>

      <div>
        <div class="image-placeholder-box" style="min-height: 360px;">
          <div class="image-placeholder-label">[REAL LOGISTICS FLEET — <%= location.name.split('(')[0].trim().toUpperCase() %>]</div>
          <div class="image-placeholder-subtext">Dedicated transport vehicles coordinating scheduled carboy collection from plants in <%= location.name %>.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-muted">
  <div class="container container-narrow">
    <%- include('../partials/quote-form') %>
  </div>
</section>

<%- include('../partials/cta-banner') %>
\` }) %>
`);

// 13. blog-index.ejs
write('src/views/pages/blog-index.ejs', `
<%- include('../layouts/main', { body: \`
<section class="section section-dark">
  <div class="container text-center">
    <span class="section-eyebrow">Knowledge Center</span>
    <h1 style="color: #FFFFFF; margin-bottom: 16px;">Industrial Packaging Insights</h1>
    <p class="section-subtitle" style="max-width: 720px; margin: 0 auto;">
      Technical guides, packaging economics, and reverse logistics strategies for procurement and plant managers.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 32px;">
      <% blogPosts.forEach((post) => { %>
        <article class="stat-card" style="display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; font-size: 0.8rem; color: #64748B;">
            <span style="font-weight: 700; color: var(--color-brand); text-transform: uppercase;"><%= post.category %></span>
            <span><%= post.readTime %></span>
          </div>
          <h2 style="font-size: 1.3rem; margin-bottom: 12px; line-height: 1.35;">
            <a href="/blog/<%= post.slug %>" style="color: #0F172A;"><%= post.title %></a>
          </h2>
          <p style="font-size: 0.9rem; color: #64748B; margin-bottom: 20px; line-height: 1.6;"><%= post.summary %></p>
          <div style="margin-top: auto; padding-top: 16px; border-top: 1px solid var(--color-canvas-muted); display: flex; justify-content: space-between; align-items: center; font-size: 0.825rem; color: #94A3B8;">
            <span>By <%= post.author %></span>
            <a href="/blog/<%= post.slug %>" style="font-weight: 600; color: var(--color-brand);">Read Article →</a>
          </div>
        </article>
      <% }) %>
    </div>
  </div>
</section>

<%- include('../partials/cta-banner') %>
\` }) %>
`);

// 14. blog-post.ejs
write('src/views/pages/blog-post.ejs', `
<%- include('../layouts/main', { body: \`
<article class="section" style="padding-top: 40px;">
  <div class="container container-narrow">
    <div style="margin-bottom: 30px;">
      <span class="section-eyebrow"><%= post.category %></span>
      <h1 style="font-size: clamp(1.8rem, 3.5vw, 2.5rem); margin-bottom: 14px; line-height: 1.25;"><%= post.title %></h1>
      <div style="display: flex; gap: 16px; font-size: 0.875rem; color: #64748B; border-bottom: 1px solid var(--color-border); padding-bottom: 18px;">
        <span>Published: <%= post.date %></span>
        <span>•</span>
        <span><%= post.readTime %></span>
        <span>•</span>
        <span>By <%= post.author %></span>
      </div>
    </div>

    <div style="font-size: 1.05rem; color: #334155; line-height: 1.8; margin-bottom: 50px;">
      <%- post.contentHtml %>
    </div>

    <div style="background: var(--color-canvas-subtle); padding: 32px; border-radius: 12px; border: 1px solid var(--color-border); margin-bottom: 60px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 8px;">Explore Reconditioning for Your Plant</h3>
      <p style="font-size: 0.95rem; color: #64748B; margin-bottom: 20px;">
        Speak with our engineering team to calculate your enterprise packaging savings and schedule a trial batch pickup.
      </p>
      <button type="button" class="btn btn-primary btn-open-quote" data-open-quote-modal>
        Request a Trial Batch Quote
      </button>
    </div>
  </div>
</article>

<%- include('../partials/cta-banner') %>
\` }) %>
`);

// 15. contact.ejs
write('src/views/pages/contact.ejs', `
<%- include('../layouts/main', { body: \`
<section class="section section-dark">
  <div class="container text-center">
    <span class="section-eyebrow">Direct Commercial Desk</span>
    <h1 style="color: #FFFFFF; margin-bottom: 16px;">Contact Parth Packaging</h1>
    <p class="section-subtitle" style="max-width: 720px; margin: 0 auto;">
      Get in touch with our commercial sales engineers for bulk carboys reconditioning quotations, pickup requests, and facility visits.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px;">
      <div>
        <div class="form-card">
          <h2 style="font-size: 1.5rem; margin-bottom: 8px;">Send a Direct Message</h2>
          <p style="font-size: 0.9rem; color: #64748B; margin-bottom: 24px;">Complete the form below for commercial or general inquiries.</p>

          <form id="contactForm" data-ajax-contact>
            <div class="form-alert" role="alert"></div>

            <div class="honey-field">
              <label for="contact_website_url_field">Website</label>
              <input type="text" name="website_url_field" id="contact_website_url_field" tabindex="-1" autocomplete="off">
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <label class="form-label" for="contact_name">Full Name <span class="required">*</span></label>
                <input type="text" id="contact_name" name="name" class="form-control" placeholder="Rajesh Sharma" required>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div>
                  <label class="form-label" for="contact_company">Company Name</label>
                  <input type="text" id="contact_company" name="company" class="form-control" placeholder="Apex Industrial">
                </div>
                <div>
                  <label class="form-label" for="contact_mobile">Mobile Number <span class="required">*</span></label>
                  <input type="tel" id="contact_mobile" name="mobile" class="form-control" placeholder="10-digit number" required>
                </div>
              </div>
              <div>
                <label class="form-label" for="contact_email">Corporate Email <span class="required">*</span></label>
                <input type="email" id="contact_email" name="email" class="form-control" placeholder="name@company.com" required>
              </div>
              <div>
                <label class="form-label" for="contact_subject">Subject</label>
                <input type="text" id="contact_subject" name="subject" class="form-control" placeholder="Carboys Reconditioning Inquiry">
              </div>
              <div>
                <label class="form-label" for="contact_message">Your Message <span class="required">*</span></label>
                <textarea id="contact_message" name="message" class="form-control" placeholder="Describe your monthly volumes, container types, and requirements..." required></textarea>
              </div>
              <div>
                <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                  Send Commercial Enquiry
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div>
        <div style="background: var(--color-canvas-subtle); border: 1px solid var(--color-border); border-radius: 16px; padding: 36px; margin-bottom: 28px;">
          <span class="section-eyebrow">Corporate Headquarters</span>
          <h3 style="font-size: 1.35rem; margin-bottom: 20px;">Parth Packaging India</h3>

          <div style="display: flex; flex-direction: column; gap: 18px; font-size: 0.95rem;">
            <p>
              📍 <strong>Facility Address:</strong><br>
              <%= site.address.street %><br>
              <%= site.address.city %>, <%= site.address.state %> - <%= site.address.pincode %>, India
            </p>
            <p>
              📞 <strong>Sales Desk:</strong> <a href="tel:<%= site.phoneClean %>" style="color: var(--color-brand); font-weight: 600;"><%= site.phone %></a><br>
              ✉️ <strong>Commercial Email:</strong> <a href="mailto:<%= site.email %>" style="color: var(--color-brand);"><%= site.email %></a>
            </p>
            <p>
              ⏱️ <strong>Operating Hours:</strong><br>
              <%= site.operatingHours %>
            </p>
          </div>
        </div>

        <div class="image-placeholder-box" style="min-height: 240px;">
          <div class="image-placeholder-label">[GOOGLE MAPS / INDUSTRIAL ESTATE EMBED]</div>
          <div class="image-placeholder-subtext">Geographic location map displaying Parth Packaging staging plant in the industrial corridor.</div>
        </div>
      </div>
    </div>
  </div>
</section>
\` }) %>
`);

// 16. privacy-policy.ejs
write('src/views/pages/privacy-policy.ejs', `
<%- include('../layouts/main', { body: \`
<section class="section">
  <div class="container container-narrow">
    <span class="section-eyebrow">Legal & Compliance</span>
    <h1 style="margin-bottom: 20px;">Privacy Policy</h1>
    <div style="font-size: 1rem; color: #334155; line-height: 1.8;">
      <p>Last Updated: September 2026</p>
      <p><strong>Parth Packaging</strong> is committed to respecting the privacy of business representatives and visitors interacting with our website (parthpackaging.com).</p>
      <h3>Information We Collect</h3>
      <p>When you submit a quotation request or contact form, we collect commercial contact information including your name, company name, phone number, email address, plant location, and container specifications.</p>
      <h3>Use of Information</h3>
      <p>Commercial data is utilized solely for technical assessment, generating price quotations, communicating regarding batch pickups, and administering packaging contracts. We do not sell or share business contact data with external third-party advertisers.</p>
      <h3>Data Security</h3>
      <p>We employ technical and organizational measures, including secure transport layer security (HTTPS) and restricted administrative access, to protect your commercial inquiries.</p>
    </div>
  </div>
</section>
\` }) %>
`);

// 17. terms.ejs
write('src/views/pages/terms.ejs', `
<%- include('../layouts/main', { body: \`
<section class="section">
  <div class="container container-narrow">
    <span class="section-eyebrow">Legal & Compliance</span>
    <h1 style="margin-bottom: 20px;">Terms of Service</h1>
    <div style="font-size: 1rem; color: #334155; line-height: 1.8;">
      <p>Last Updated: September 2026</p>
      <p>These terms govern the use of the <strong>Parth Packaging</strong> website and outline the general commercial framework for packaging reconditioning services.</p>
      <h3>Commercial Quotations</h3>
      <p>All online quotes and calculations are estimates subject to formal batch inspection, residual liquid verification, and agreed freight terms.</p>
      <h3>Container Suitability & Inspection</h3>
      <p>Containers submitted for reconditioning are inspected per our quality guidelines. Severely structurally compromised units that cannot safely pass pneumatic pressure decay testing are diverted to polymer recycling.</p>
      <h3>Intended Use</h3>
      <p>Unless explicitly certified, reconditioned chemical carboys are intended for industrial chemicals, agrochemicals, paints, lubricants, and technical formulations, and are not intended for direct food or active pharmaceutical ingredient contact.</p>
    </div>
  </div>
</section>
\` }) %>
`);

// 18. 404.ejs
write('src/views/pages/404.ejs', `
<%- include('../layouts/error', { body: \`
<div class="container text-center">
  <div style="font-family: var(--font-heading); font-size: 6rem; font-weight: 800; color: var(--color-brand); line-height: 1; margin-bottom: 12px;">404</div>
  <h1 style="font-size: 2rem; margin-bottom: 16px;">Page Not Found</h1>
  <p style="color: #64748B; max-width: 500px; margin: 0 auto 30px;">
    The industrial page or document you are looking for has been moved or does not exist.
  </p>
  <div style="display: flex; gap: 14px; justify-content: center;">
    <a href="/" class="btn btn-primary">Return to Homepage</a>
    <a href="/carboys-reconditioning" class="btn btn-outline">Carboys Reconditioning</a>
  </div>
</div>
\` }) %>
`);

// 19. 500.ejs
write('src/views/pages/500.ejs', `
<%- include('../layouts/error', { body: \`
<div class="container text-center">
  <div style="font-family: var(--font-heading); font-size: 6rem; font-weight: 800; color: #DC2626; line-height: 1; margin-bottom: 12px;">500</div>
  <h1 style="font-size: 2rem; margin-bottom: 16px;">Server Processing Error</h1>
  <p style="color: #64748B; max-width: 500px; margin: 0 auto 30px;">
    An unexpected error occurred while processing your request. Please call our commercial sales desk directly.
  </p>
  <div style="display: flex; gap: 14px; justify-content: center;">
    <a href="/" class="btn btn-primary">Return to Homepage</a>
    <a href="tel:<%= site.phoneClean %>" class="btn btn-outline">Call Sales: <%= site.phone %></a>
  </div>
</div>
\` }) %>
`);

console.log('Finished all inner pages part 3');
