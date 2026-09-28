const fs = require('fs');
const path = require('path');

function write(relPath, content) {
  const fullPath = path.join(__dirname, '..', relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
  console.log('Created: ' + relPath);
}

// 1. about.ejs
write('src/views/pages/about.ejs', `
<%- include('../layouts/main', { body: \`
<section class="section section-dark">
  <div class="container text-center">
    <span class="section-eyebrow">Corporate Profile</span>
    <h1 style="color: #FFFFFF; margin-bottom: 16px;">About Parth Packaging</h1>
    <p class="section-subtitle" style="max-width: 720px; margin: 0 auto;">
      A dedicated industrial partner engineered to deliver high-quality, leak-tested reconditioned HDPE packaging solutions for manufacturing businesses across India.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center;">
      <div>
        <span class="section-eyebrow">Our Mission</span>
        <h2 class="section-title">Enabling Industrial Packaging Circularity</h2>
        <p style="font-size: 1.05rem; color: #334155; line-height: 1.7; margin-bottom: 18px;">
          At <strong>Parth Packaging</strong>, we believe that industrial containers should not be treated as disposable single-use items. High-Density Polyethylene (HDPE) is an extraordinarily robust, engineered thermoplastic capable of enduring multiple rigorous industrial lifecycles when decontaminated and refurbished properly.
        </p>
        <p style="color: #64748B; line-height: 1.65; margin-bottom: 24px;">
          Our processing operations are structured to solve two core challenges facing manufacturing procurement heads in India: volatile packaging procurement costs and the operational headache of accumulated used containers. Through standardized chemical washing, heated drying tunnels, 100% pneumatic pressure testing, and reverse logistics, we provide containers that match new virgin carboy performance at 40% to 55% lower cost.
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px;">
          <div style="background: var(--color-canvas-subtle); padding: 20px; border-radius: 8px; border: 1px solid var(--color-border);">
            <div style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; color: var(--color-brand); margin-bottom: 4px;">40% - 55%</div>
            <div style="font-size: 0.85rem; font-weight: 600; color: #0F172A;">Packaging Cost Savings</div>
          </div>
          <div style="background: var(--color-canvas-subtle); padding: 20px; border-radius: 8px; border: 1px solid var(--color-border);">
            <div style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; color: #0284C7; margin-bottom: 4px;">100%</div>
            <div style="font-size: 0.85rem; font-weight: 600; color: #0F172A;">Pneumatic Leak Testing</div>
          </div>
        </div>
      </div>

      <div>
        <div class="image-placeholder-box" style="min-height: 380px;">
          <div class="image-placeholder-label">[REAL FACTORY IMAGE – EXTERIOR & FACILITY INFRASTRUCTURE]</div>
          <div class="image-placeholder-subtext">Parth Packaging reconditioning facility staging yard and industrial processing plant.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-muted">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">Operating Principles</span>
      <h2 class="section-title">The Pillars of Our Process Discipline</h2>
      <p class="section-subtitle">Why industrial manufacturers trust Parth Packaging for their recurring liquid packaging needs.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-title">Process Transparency</div>
        <p class="stat-desc">Clear batch tracking from inward receipt through chemical washing, drying, leak testing, and dispatch sign-off.</p>
      </div>
      <div class="stat-card">
        <div class="stat-title">Zero Cross-Contamination</div>
        <p class="stat-desc">Segregated wash stations and tailored cleaning chemistry ensuring complete residue neutralization before reuse.</p>
      </div>
      <div class="stat-card">
        <div class="stat-title">Quality Without Compromise</div>
        <p class="stat-desc">Units failing ultrasonic wall thickness checks or pressure decay tests are shredded for polymer recycling—never patched.</p>
      </div>
      <div class="stat-card">
        <div class="stat-title">Pan-India Reach</div>
        <p class="stat-desc">Reliable logistics coordination connecting major industrial corridors in Maharashtra, Gujarat, South India, and North India.</p>
      </div>
    </div>
  </div>
</section>

<%- include('../partials/cta-banner') %>
\` }) %>
`);

// 2. carboys-reconditioning.ejs (Flagship Page)
write('src/views/pages/carboys-reconditioning.ejs', `
<%- include('../layouts/main', { body: \`
<section class="section section-dark">
  <div class="container text-center">
    <span class="section-eyebrow">Flagship Solution</span>
    <h1 style="color: #FFFFFF; margin-bottom: 16px;">HDPE Carboys Reconditioning Services</h1>
    <p class="section-subtitle" style="max-width: 760px; margin: 0 auto 32px;">
      Certified, leak-tested, and chemically decontaminated 20L to 100L industrial HDPE carboys engineered for chemicals, agrochemicals, paints, and manufacturing liquids.
    </p>
    <div style="display: flex; gap: 16px; justify-content: center;">
      <button type="button" class="btn btn-accent btn-lg btn-open-quote" data-open-quote-modal>
        Get Carboy Quotation
      </button>
      <a href="#specifications" class="btn btn-outline-white btn-lg">
        View Specifications
      </a>
    </div>
  </div>
</section>

<!-- Overview & Value -->
<section class="section">
  <div class="container">
    <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center;">
      <div>
        <span class="section-eyebrow">Definition & Scope</span>
        <h2 class="section-title">What is Certified Carboy Reconditioning?</h2>
        <p style="font-size: 1.05rem; color: #334155; line-height: 1.7; margin-bottom: 16px;">
          Carboy reconditioning is the specialized industrial process of converting used high-density polyethylene (HDPE) containers into clean, leak-tight, structurally verified packaging units ready for refilling.
        </p>
        <p style="color: #64748B; line-height: 1.65; margin-bottom: 20px;">
          Rather than discarding durable polymer containers after a single shipment, our systematic refurbishment cycle strips prior chemical coatings, replaces worn closures and gaskets with brand-new virgin fittings, verifies 100% pneumatic seal integrity, and prepares the containers for reliable secondary filling.
        </p>

        <h4 style="margin-bottom: 12px; font-size: 1.1rem;">Key Engineering Features:</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
          <% service.features.forEach((feat) => { %>
            <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.925rem; color: #334155;">
              <span style="color: var(--color-brand); font-weight: bold;">✓</span>
              <span><%= feat %></span>
            </li>
          <% }) %>
        </ul>
      </div>

      <div>
        <%- include('../partials/before-after') %>
      </div>
    </div>
  </div>
</section>

<!-- Specifications & Sizes Table -->
<section class="section section-subtle" id="specifications">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">Product Range</span>
      <h2 class="section-title">Standard Carboy Capacities & Technical Specs</h2>
      <p class="section-subtitle">We recondition both narrow-mouth and wide-mouth HDPE carboys across all standard Indian industrial dimensions.</p>
    </div>

    <div class="quality-table-wrap">
      <table class="quality-table">
        <thead>
          <tr>
            <th>Nominal Capacity</th>
            <th>Container Configuration</th>
            <th>Mouth / Thread Size</th>
            <th>Closure Hardware</th>
            <th>Typical Industry Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>20 Liters / 25 Liters</strong></td>
            <td>Square Jerry Can / Round Carboy</td>
            <td>DIN 51 / DIN 61 Thread</td>
            <td>New Virgin Cap + Tamper Tear Ring</td>
            <td>Specialty chemicals, coolants, liquid detergents</td>
          </tr>
          <tr>
            <td><strong>30 Liters / 35 Liters</strong></td>
            <td>Narrow Mouth with Heavy Handle</td>
            <td>DIN 61 Sealing Ring</td>
            <td>Virgin Bung with EPDM Gasket</td>
            <td>Agrochemicals, acids, liquid fertilizers</td>
          </tr>
          <tr>
            <td><strong>50 Liters (Standard)</strong></td>
            <td>Narrow Mouth / Wide Mouth</td>
            <td>DIN 61 / DIN 71 Thread</td>
            <td>Venting Breather Cap / Solid Bung</td>
            <td>Resins, paints, chemical bulk intermediates</td>
          </tr>
          <tr>
            <td><strong>100 Liters</strong></td>
            <td>Large Industrial Carboy</td>
            <td>Wide Mouth with Lifting Rings</td>
            <td>Heavy-Duty Threaded Bung + Viton Seal</td>
            <td>Textile chemicals, water treatment coagulants</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- Process Stepper -->
<section class="section">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">Quality Protocol</span>
      <h2 class="section-title">How Your Carboys Are Reconditioned</h2>
      <p class="section-subtitle">Every container undergoes our verified 7-stage decontamination and inspection cycle.</p>
    </div>

    <div class="process-timeline">
      <% processSteps.slice(0, 4).forEach((step) => { %>
        <div class="process-step-card">
          <div class="process-step-number"><%= step.stepNumber %></div>
          <div class="process-step-content">
            <h3><%= step.title %></h3>
            <div class="process-step-subtitle"><%= step.subtitle %></div>
            <p class="process-step-desc"><%= step.description %></p>
            <div class="quality-gate-badge">🛡️ <%= step.qualityGate %></div>
          </div>
        </div>
      <% }) %>
    </div>
    <div style="text-align: center; margin-top: 32px;">
      <a href="/process" class="btn btn-outline">View Full 7-Step Process Workflow →</a>
    </div>
  </div>
</section>

<!-- Request Quotation Form -->
<section class="section section-muted">
  <div class="container container-narrow">
    <%- include('../partials/quote-form') %>
  </div>
</section>

<%- include('../partials/cta-banner') %>
\` }) %>
`);

// 3. services.ejs
write('src/views/pages/services.ejs', `
<%- include('../layouts/main', { body: \`
<section class="section section-dark">
  <div class="container text-center">
    <span class="section-eyebrow">Full Capabilities</span>
    <h1 style="color: #FFFFFF; margin-bottom: 16px;">Our Reconditioning & Packaging Services</h1>
    <p class="section-subtitle" style="max-width: 720px; margin: 0 auto;">
      Comprehensive industrial container decontamination, structural inspection, pressure leak testing, and reverse logistics across India.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <% services.forEach((svc, index) => { %>
        <div style="display: grid; grid-template-columns: <%= index % 2 === 0 ? '1.2fr 0.8fr' : '0.8fr 1.2fr' %>; gap: 40px; align-items: center; background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 40px; box-shadow: var(--shadow-sm);">
          <div style="<%= index % 2 === 1 ? 'order: 2;' : '' %>">
            <span class="section-eyebrow"><%= svc.capacities[0] %></span>
            <h2 style="font-size: 1.75rem; margin-bottom: 14px;"><%= svc.title %></h2>
            <p style="font-size: 1.05rem; color: #334155; line-height: 1.65; margin-bottom: 16px;"><%= svc.longDesc %></p>
            
            <h4 style="font-size: 1rem; margin-bottom: 10px; color: #0F172A;">Key Specifications:</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px;">
              <% svc.features.forEach((feat) => { %>
                <li style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: #475569;">
                  <span style="color: var(--color-brand); font-weight: bold;">✓</span>
                  <span><%= feat %></span>
                </li>
              <% }) %>
            </ul>

            <button type="button" class="btn btn-primary btn-open-quote" data-open-quote-modal>
              Inquire About <%= svc.title %>
            </button>
          </div>

          <div style="<%= index % 2 === 1 ? 'order: 1;' : '' %>">
            <div class="image-placeholder-box" style="min-height: 280px;">
              <div class="image-placeholder-label">[REAL PROCESS IMAGE — <%= svc.title.toUpperCase() %>]</div>
              <div class="image-placeholder-subtext">Dedicated industrial workstation for <%= svc.title.toLowerCase() %> at Parth Packaging facility.</div>
            </div>
          </div>
        </div>
      <% }) %>
    </div>
  </div>
</section>

<%- include('../partials/cta-banner') %>
\` }) %>
`);

// 4. process.ejs
write('src/views/pages/process.ejs', `
<%- include('../layouts/main', { body: \`
<section class="section section-dark">
  <div class="container text-center">
    <span class="section-eyebrow">Engineered Methodology</span>
    <h1 style="color: #FFFFFF; margin-bottom: 16px;">Our 7-Step Industrial Reconditioning Process</h1>
    <p class="section-subtitle" style="max-width: 740px; margin: 0 auto;">
      A standardized, multi-stage workflow combining automated chemical wash systems, hot air dehumidification drying, and 100% pneumatic pressure decay testing.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="process-timeline">
      <% processSteps.forEach((step) => { %>
        <div class="process-step-card">
          <div class="process-step-number"><%= step.stepNumber %></div>
          <div class="process-step-content">
            <h3><%= step.title %></h3>
            <div class="process-step-subtitle"><%= step.subtitle %></div>
            <p class="process-step-desc"><%= step.description %></p>
            
            <div class="process-details-grid">
              <% step.technicalDetails.forEach((detail) => { %>
                <div class="process-detail-item">
                  <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                  <span><%= detail %></span>
                </div>
              <% }) %>
            </div>

            <div class="quality-gate-badge">
              🛡️ <%= step.qualityGate %>
            </div>
          </div>
        </div>
      <% }) %>
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

console.log('Finished inner pages part 1');
