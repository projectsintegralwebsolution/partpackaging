const fs = require('fs');
const path = require('path');

function write(relPath, content) {
  const fullPath = path.join(__dirname, '..', relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
  console.log('Created: ' + relPath);
}

// 5. industries.ejs
write('src/views/pages/industries.ejs', `
<%- include('../layouts/main', { body: \`
<section class="section section-dark">
  <div class="container text-center">
    <span class="section-eyebrow">Target Sectors</span>
    <h1 style="color: #FFFFFF; margin-bottom: 16px;">Industries We Serve</h1>
    <p class="section-subtitle" style="max-width: 720px; margin: 0 auto;">
      Tailored packaging reconditioning, chemical decontamination, and closure systems designed for critical manufacturing sectors.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="industries-grid">
      <% industries.forEach((ind) => { %>
        <div class="industry-card">
          <span class="industry-card-badge"><%= ind.badge %></span>
          <h3 class="industry-card-title"><%= ind.title %></h3>
          <p class="industry-card-desc"><%= ind.overview %></p>

          <div class="industry-containers-list">
            <div class="industry-containers-title">Typical Containers Refurbished:</div>
            <% ind.typicalContainers.forEach((c) => { %>
              <div class="industry-container-item">
                <span>•</span>
                <span><%= c %></span>
              </div>
            <% }) %>
          </div>

          <h5 style="font-size: 0.9rem; margin-bottom: 6px; color: #0F172A;">Specific Solutions:</h5>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px;">
            <% ind.challengesSolved.forEach((ch) => { %>
              <li style="font-size: 0.85rem; color: #475569; display: flex; align-items: center; gap: 6px;">
                <span style="color: var(--color-brand); font-weight: bold;">✓</span>
                <span><%= ch %></span>
              </li>
            <% }) %>
          </ul>

          <a href="/industries/<%= ind.slug %>" class="btn btn-outline" style="margin-top: auto; width: 100%;">
            View <%= ind.title %> Details →
          </a>
        </div>
      <% }) %>
    </div>
  </div>
</section>

<%- include('../partials/cta-banner') %>
\` }) %>
`);

// 6. industry-detail.ejs
write('src/views/pages/industry-detail.ejs', `
<%- include('../layouts/main', { body: \`
<section class="section section-dark">
  <div class="container text-center">
    <span class="section-eyebrow"><%= industry.badge %></span>
    <h1 style="color: #FFFFFF; margin-bottom: 16px;"><%= industry.title %></h1>
    <p class="section-subtitle" style="max-width: 720px; margin: 0 auto 28px;">
      <%= industry.shortDesc %>
    </p>
    <div>
      <button type="button" class="btn btn-accent btn-lg btn-open-quote" data-open-quote-modal>
        Inquire for <%= industry.title %>
      </button>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center;">
      <div>
        <span class="section-eyebrow">Industry Specifics</span>
        <h2 class="section-title">Packaging Requirements & Decontamination Protocols</h2>
        <p style="font-size: 1.05rem; color: #334155; line-height: 1.7; margin-bottom: 20px;">
          <%= industry.overview %>
        </p>
        
        <h4 style="margin-bottom: 12px; font-size: 1.1rem;">Challenges Solved by Parth Packaging:</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
          <% industry.challengesSolved.forEach((ch) => { %>
            <li style="display: flex; align-items: center; gap: 10px; font-size: 0.925rem; color: #334155;">
              <span style="color: var(--color-brand); font-weight: bold;">✓</span>
              <span><%= ch %></span>
            </li>
          <% }) %>
        </ul>

        <div style="background: #FFFBEB; border-left: 4px solid #F59E0B; padding: 16px; border-radius: 0 8px 8px 0; margin-top: 24px;">
          <p style="font-size: 0.85rem; color: #92400E; margin: 0;">
            <strong>Compliance Note:</strong> <%= industry.complianceNotes %>
          </p>
        </div>
      </div>

      <div>
        <div class="image-placeholder-box" style="min-height: 380px;">
          <div class="image-placeholder-label">[REAL APPLICATION IMAGE — <%= industry.title.toUpperCase() %>]</div>
          <div class="image-placeholder-subtext">Reconditioned carboys prepared specifically for <%= industry.title.toLowerCase() %> with certified closures and leak testing.</div>
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

// 7. quality.ejs
write('src/views/pages/quality.ejs', `
<%- include('../layouts/main', { body: \`
<section class="section section-dark">
  <div class="container text-center">
    <span class="section-eyebrow">Process Reliability</span>
    <h1 style="color: #FFFFFF; margin-bottom: 16px;">Quality Assurance & Testing Protocols</h1>
    <p class="section-subtitle" style="max-width: 740px; margin: 0 auto;">
      We treat packaging reconditioning with engineering rigor. Explore our 4-tier inspection framework and 100% pneumatic pressure decay testing benchmark.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center;">
      <div>
        <span class="section-eyebrow">Zero Leakage Target</span>
        <h2 class="section-title">Why 100% Pneumatic Pressure Testing Matters</h2>
        <p style="font-size: 1.05rem; color: #334155; line-height: 1.7; margin-bottom: 18px;">
          Visual inspection alone can never detect micro-fissures, hairline handle cracks, or imperfect neck sealing surfaces. In industrial chemical and fluid transit across Indian highways, vibrations and thermal expansion quickly cause hairline flaws to develop into hazardous leaks.
        </p>
        <p style="color: #64748B; line-height: 1.65; margin-bottom: 24px;">
          At Parth Packaging, every single container is mounted on a pneumatic test rig, sealed, and charged with compressed air to calibrated pressure thresholds. Sensitive digital pressure decay transducers monitor the chamber for pressure loss. If even a fractional drop occurs, the container is rejected instantly and diverted to polymer recycling.
        </p>
        <div class="quality-gate-badge" style="font-size: 0.95rem; padding: 10px 18px;">
          🛡️ Verified: 100% of reconditioned units tested before palletization
        </div>
      </div>

      <div>
        <div class="image-placeholder-box" style="min-height: 360px;">
          <div class="image-placeholder-label">[REAL INSPECTION BENCH – PRESSURE DECAY RIG]</div>
          <div class="image-placeholder-subtext">Calibrated pneumatic test station with digital pressure sensors for 30L and 50L carboys.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-subtle">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">Quality Checkpoints</span>
      <h2 class="section-title">The 4-Tier Inspection Framework</h2>
      <p class="section-subtitle">A multi-layered defense ensuring flawless packaging performance.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div style="font-size: 1.75rem; margin-bottom: 10px;">👁️</div>
        <div class="stat-title">Tier 1: Optical & Physical Gate</div>
        <p class="stat-desc">Visual endoscope inspection for wall gouges, chemical blistering, UV embrittlement, and deformities.</p>
      </div>

      <div class="stat-card">
        <div style="font-size: 1.75rem; margin-bottom: 10px;">📏</div>
        <div class="stat-title">Tier 2: Ultrasonic Wall Thickness</div>
        <p class="stat-desc">Ensures structural polymer thickness meets heavy-duty stacking and transit specifications.</p>
      </div>

      <div class="stat-card">
        <div style="font-size: 1.75rem; margin-bottom: 10px;">🧪</div>
        <div class="stat-title">Tier 3: Neutralization & pH Test</div>
        <p class="stat-desc">Rinse water testing ensures zero carryover of prior acid or alkaline cleaning solutions.</p>
      </div>

      <div class="stat-card">
        <div style="font-size: 1.75rem; margin-bottom: 10px;">💨</div>
        <div class="stat-title">Tier 4: Pneumatic Pressure Decay</div>
        <p class="stat-desc">Pneumatic hold test to verify absolute airtight containment under simulated transport conditions.</p>
      </div>
    </div>
  </div>
</section>

<%- include('../partials/cta-banner') %>
\` }) %>
`);

// 8. gallery.ejs
write('src/views/pages/gallery.ejs', `
<%- include('../layouts/main', { body: \`
<section class="section section-dark">
  <div class="container text-center">
    <span class="section-eyebrow">Visual Tour</span>
    <h1 style="color: #FFFFFF; margin-bottom: 16px;">Facility & Reconditioning Gallery</h1>
    <p class="section-subtitle" style="max-width: 720px; margin: 0 auto;">
      A transparent look at our industrial washing stations, drying bays, pneumatic test rigs, and dispatch staging yards.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px;">
      <div class="image-placeholder-box" style="min-height: 280px;">
        <div class="image-placeholder-label">[REAL PROCESS IMAGE – INWARD RECEIVING YARD]</div>
        <div class="image-placeholder-subtext">Arrival and manifest verification of empty industrial carboys from manufacturing plants.</div>
      </div>
      <div class="image-placeholder-box" style="min-height: 280px;">
        <div class="image-placeholder-label">[REAL PROCESS IMAGE – HIGH-PRESSURE WASH STATION]</div>
        <div class="image-placeholder-subtext">Automated 360-degree rotary nozzle washing rigs deploying heated neutralizing chemistry.</div>
      </div>
      <div class="image-placeholder-box" style="min-height: 280px;">
        <div class="image-placeholder-label">[REAL PROCESS IMAGE – HOT AIR DRYING TUNNEL]</div>
        <div class="image-placeholder-subtext">Cleaned carboys inverted over filtered dehumidified hot air diffusers to eliminate trace moisture.</div>
      </div>
      <div class="image-placeholder-box" style="min-height: 280px;">
        <div class="image-placeholder-label">[REAL PROCESS IMAGE – PNEUMATIC LEAK BENCH]</div>
        <div class="image-placeholder-subtext">100% individual pressure decay testing verifying airtight, leak-proof containment.</div>
      </div>
      <div class="image-placeholder-box" style="min-height: 280px;">
        <div class="image-placeholder-label">[REAL PROCESS IMAGE – NEW CLOSURE FITMENT]</div>
        <div class="image-placeholder-subtext">Installation of brand-new virgin HDPE caps, EPDM gaskets, and tamper-evident tear seals.</div>
      </div>
      <div class="image-placeholder-box" style="min-height: 280px;">
        <div class="image-placeholder-label">[REAL PROCESS IMAGE – STRETCH WRAPPED PALLETS]</div>
        <div class="image-placeholder-subtext">Clean, palletized, dust-protected finished carboys ready for scheduled Pan-India fleet dispatch.</div>
      </div>
    </div>
  </div>
</section>

<%- include('../partials/cta-banner') %>
\` }) %>
`);

// 9. case-studies.ejs
write('src/views/pages/case-studies.ejs', `
<%- include('../layouts/main', { body: \`
<section class="section section-dark">
  <div class="container text-center">
    <span class="section-eyebrow">Proven Outcomes</span>
    <h1 style="color: #FFFFFF; margin-bottom: 16px;">B2B Case Studies & Results</h1>
    <p class="section-subtitle" style="max-width: 720px; margin: 0 auto;">
      Examine real commercial scenarios demonstrating how industrial manufacturers reduce packaging budgets by 40% to 55%.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="case-studies-grid">
      <% caseStudies.forEach((cs) => { %>
        <div class="case-study-card">
          <div class="case-study-meta"><%= cs.clientIndustry %> • <%= cs.region %></div>
          <h2 class="case-study-title" style="font-size: 1.35rem;"><%= cs.title %></h2>
          <p class="case-study-challenge"><strong>Challenge:</strong> <%= cs.challenge %></p>
          <p class="case-study-solution"><strong>Solution:</strong> <%= cs.solution %></p>
          
          <div class="case-study-results">
            <span class="case-result-pill">✓ <%= cs.results.costSaved %></span>
            <span class="case-result-pill">✓ <%= cs.results.turnaround %></span>
            <span class="case-result-pill">✓ <%= cs.results.wasteDiverted %></span>
          </div>
        </div>
      <% }) %>
    </div>
  </div>
</section>

<%- include('../partials/cta-banner') %>
\` }) %>
`);

// 10. faq.ejs
write('src/views/pages/faq.ejs', `
<%- include('../layouts/main', { body: \`
<section class="section section-dark">
  <div class="container text-center">
    <span class="section-eyebrow">Knowledge Center</span>
    <h1 style="color: #FFFFFF; margin-bottom: 16px;">Frequently Asked Questions</h1>
    <p class="section-subtitle" style="max-width: 720px; margin: 0 auto;">
      Detailed answers covering carboy reconditioning processes, chemical compatibility, leak testing, logistics, and pricing.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="faq-accordion">
      <% faqs.forEach((faq, index) => { %>
        <div class="faq-item <%= index === 0 ? 'active' : '' %>">
          <button type="button" class="faq-question-btn" aria-expanded="<%= index === 0 ? 'true' : 'false' %>">
            <span><%= faq.question %></span>
            <svg class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="faq-answer">
            <%= faq.answer %>
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

console.log('Finished inner pages part 2');
