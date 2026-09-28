const fs = require('fs');
const path = require('path');

function write(relPath, content) {
  const fullPath = path.join(__dirname, '..', relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
  console.log('Created: ' + relPath);
}

// 1. home.ejs
write('src/views/pages/home.ejs', `
<%- include('../layouts/main', { body: \`
<!-- HERO SECTION -->
<section class="hero-section">
  <div class="container hero-grid">
    <div>
      <div class="hero-badge">
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        B2B Industrial Packaging Reconditioning
      </div>
      <h1 class="hero-headline">
        Industrial Carboys <br>
        <span class="text-gradient">Reconditioning Solutions</span><br>
        Built for Pan-India Scale
      </h1>
      <p class="hero-subheading">
        Helping chemical, agrochemical, coatings, and manufacturing enterprises substantially reduce packaging expenditure through certified multi-stage decontamination, high-pressure washing, 100% leak testing, and reverse logistics.
      </p>

      <div class="hero-cta-group">
        <button type="button" class="btn btn-accent btn-lg btn-open-quote" data-open-quote-modal>
          Request a Quotation
        </button>
        <a href="#processSection" class="btn btn-outline-white btn-lg">
          Explore Our 7-Step Process
        </a>
      </div>

      <div class="hero-trust-strip">
        <div class="hero-trust-item">
          <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>100% Leak Tested</span>
        </div>
        <div class="hero-trust-item">
          <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Multi-Stage Wash Cycle</span>
        </div>
        <div class="hero-trust-item">
          <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>40% - 55% Cost Savings</span>
        </div>
        <div class="hero-trust-item">
          <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>Pan-India Pickup Logistics</span>
        </div>
      </div>
    </div>

    <!-- Technical Specification Card -->
    <div>
      <div class="hero-visual-card">
        <span class="hero-visual-badge">Industrial Grade</span>
        <h3 style="color: #FFFFFF; font-size: 1.25rem; margin-bottom: 6px;">HDPE Carboy Technical Profile</h3>
        <p style="color: #94A3B8; font-size: 0.85rem; margin-bottom: 16px;">Standard 20L / 30L / 50L / 100L Reconditioned Specifications</p>
        
        <img src="/images/carboy-after.svg" alt="Certified Cleaned Industrial HDPE Carboy" style="border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); width: 100%; height: auto;" width="600" height="400" fetchpriority="high">

        <ul class="hero-specs-list">
          <li class="hero-spec-item">
            <div class="hero-spec-label">Polymer Material</div>
            <div class="hero-spec-value">High Molecular Weight HDPE</div>
          </li>
          <li class="hero-spec-item">
            <div class="hero-spec-label">Testing Method</div>
            <div class="hero-spec-value">Pneumatic Pressure Decay</div>
          </li>
          <li class="hero-spec-item">
            <div class="hero-spec-label">Decontamination</div>
            <div class="hero-spec-value">Caustic & Acidic Neutralized</div>
          </li>
          <li class="hero-spec-item">
            <div class="hero-spec-label">Closure Hardware</div>
            <div class="hero-spec-value">New Virgin Caps & EPDM Seals</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 2: TRUST & ADVANTAGES -->
<section class="section section-subtle">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">Enterprise Value Proposition</span>
      <h2 class="section-title">Built for Serious Industrial Reliability</h2>
      <p class="section-subtitle">
        Liquid packaging failure is not an option. Our reconditioning protocols are engineered to match virgin packaging performance at a fraction of procurement cost.
      </p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-number">40-55%</div>
        <div class="stat-title">Packaging Spend Reduction</div>
        <p class="stat-desc">Direct reduction in monthly container procurement budgets compared to new virgin HDPE carboys.</p>
      </div>

      <div class="stat-card">
        <div class="stat-number">100%</div>
        <div class="stat-title">Pneumatic Leak Tested</div>
        <p class="stat-desc">Zero tolerance for micro-punctures or compromised chimes. Every single unit is verified under pressure.</p>
      </div>

      <div class="stat-card">
        <div class="stat-number">Multi-Stage</div>
        <div class="stat-title">Chemical Decontamination</div>
        <p class="stat-desc">Temperature-controlled alkaline and acid wash cycles with pH verification to ensure total surface neutrality.</p>
      </div>

      <div class="stat-card">
        <div class="stat-number">Pan-India</div>
        <div class="stat-title">Logistics Coordination</div>
        <p class="stat-desc">Structured bulk pickup and scheduled exchange programs connecting chemical and manufacturing belts.</p>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 3: ABOUT PARTH PACKAGING -->
<section class="section">
  <div class="container">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center;">
      <div>
        <span class="section-eyebrow">About Parth Packaging</span>
        <h2 class="section-title">A Professional Industrial Reconditioning Partner</h2>
        <p style="font-size: 1.05rem; color: #334155; margin-bottom: 18px; line-height: 1.7;">
          <strong>Parth Packaging</strong> provides scalable, process-disciplined industrial carboys and HDPE packaging reconditioning solutions for enterprises across India.
        </p>
        <p style="color: #64748B; margin-bottom: 24px; line-height: 1.65;">
          We operate as a strategic circular packaging partner to chemical formulators, paint manufacturers, agrochemical producers, and bulk fluid distributors. By combining automated washing systems, rigorous pneumatic testing benches, and scheduled reverse logistics, we turn discarded packaging into a dependable, reusable asset.
        </p>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <a href="/about" class="btn btn-primary">Know More About Us</a>
          <a href="/quality" class="btn btn-outline">Our Quality Standards</a>
        </div>
      </div>

      <div>
        <div class="image-placeholder-box" style="min-height: 380px;">
          <div class="image-placeholder-label">[REAL FACTORY IMAGE – EXTERIOR & DISPATCH YARD]</div>
          <div class="image-placeholder-subtext">Parth Packaging processing facility staging yard showing organized container palletization and automated washing infrastructure.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 4: WHAT WE DO (SERVICES) -->
<section class="section section-muted">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">Comprehensive Solutions</span>
      <h2 class="section-title">Our Industrial Packaging Services</h2>
      <p class="section-subtitle">
        Precision cleaning, structural refurbishment, closure replacement, and reverse logistics tailored to industrial specifications.
      </p>
    </div>

    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon-wrap">
          <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
        </div>
        <h3 class="service-card-title">HDPE Carboys Reconditioning</h3>
        <p class="service-card-desc">Complete refurbishment of 20L, 30L, 50L, and 100L narrow and wide mouth HDPE containers with structural wall inspection and pressure leak testing.</p>
        <div class="service-tags">
          <span class="service-tag">20L - 100L</span>
          <span class="service-tag">100% Tested</span>
          <span class="service-tag">High-Density PE</span>
        </div>
      </div>

      <div class="service-card">
        <div class="service-icon-wrap">
          <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
        </div>
        <h3 class="service-card-title">Chemical Decontamination & Wash</h3>
        <p class="service-card-desc">High-pressure rotary nozzle washing deploying heated alkaline and acidic neutralizing chemistry to strip stubborn industrial polymers, surfactants, and oils.</p>
        <div class="service-tags">
          <span class="service-tag">60°C - 75°C Wash</span>
          <span class="service-tag">pH Neutralized</span>
          <span class="service-tag">Hot Air Dried</span>
        </div>
      </div>

      <div class="service-card">
        <div class="service-icon-wrap">
          <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        </div>
        <h3 class="service-card-title">Cap, Bung & Gasket Refurbishment</h3>
        <p class="service-card-desc">Replacement of damaged or worn closures with brand-new virgin HDPE caps, tamper-evident tear rings, degassing breather valves, and chemical-resistant EPDM/Viton seals.</p>
        <div class="service-tags">
          <span class="service-tag">DIN Closures</span>
          <span class="service-tag">Venting Bungs</span>
          <span class="service-tag">EPDM / Viton</span>
        </div>
      </div>

      <div class="service-card">
        <div class="service-icon-wrap">
          <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
        </div>
        <h3 class="service-card-title">Bulk Reverse Logistics Support</h3>
        <p class="service-card-desc">End-to-end management of empty used container pickups from manufacturing plants and regional customer locations, with verified inward manifests and prompt turnaround.</p>
        <div class="service-tags">
          <span class="service-tag">Scheduled Loops</span>
          <span class="service-tag">FTL / LTL</span>
          <span class="service-tag">Batch Tracking</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 5: WHY RECONDITIONING? (THE B2B ECONOMICS) -->
<section class="section">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">The Business Case</span>
      <h2 class="section-title">New Virgin Packaging vs. Parth Reconditioned Containers</h2>
      <p class="section-subtitle">
        Comparing structural integrity, economic impact, and operational advantages for high-volume manufacturing facilities.
      </p>
    </div>

    <div class="quality-table-wrap">
      <table class="quality-table">
        <thead>
          <tr>
            <th>Assessment Metric</th>
            <th>New Virgin HDPE Carboy</th>
            <th>Parth Reconditioned Carboy</th>
            <th>Commercial Advantage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Procurement Unit Cost</strong></td>
            <td>High (₹ 800 – ₹ 1,200+ depending on crude polymer prices)</td>
            <td><strong>Cost-Effective (₹ 380 – ₹ 550)</strong></td>
            <td><span class="case-result-pill">40% – 55% Cost Reduction</span></td>
          </tr>
          <tr>
            <td><strong>Leak-Proof Reliability</strong></td>
            <td>Sample lot tested by manufacturer</td>
            <td><strong>100% Pneumatically Tested (Every Single Unit)</strong></td>
            <td>Zero leakage risk on dispatch</td>
          </tr>
          <tr>
            <td><strong>Polymer Structural Integrity</strong></td>
            <td>Virgin Polymer</td>
            <td><strong>High-Tensile HDPE (Inspected for wall thickness)</strong></td>
            <td>Equivalent stacking strength</td>
          </tr>
          <tr>
            <td><strong>Closures & Sealing Gaskets</strong></td>
            <td>Factory Fitted</td>
            <td><strong>Brand-New Virgin Cap & Gasket Refitted</strong></td>
            <td>Tamper-evident sealing</td>
          </tr>
          <tr>
            <td><strong>Procurement Lead Time</strong></td>
            <td>2 – 4 Weeks during polymer shortages</td>
            <td><strong>3 – 7 Days (Buffer Stock Available)</strong></td>
            <td>Uninterrupted plant filling</td>
          </tr>
          <tr>
            <td><strong>Corporate ESG & Sustainability</strong></td>
            <td>High Carbon & Plastic Footprint</td>
            <td><strong>Circular Packaging Reuse Model</strong></td>
            <td>Supports waste minimization</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- SECTION 6: OUR 7-STEP RECONDITIONING PROCESS -->
<section class="section section-subtle" id="processSection">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">Engineered Discipline</span>
      <h2 class="section-title">Our 7-Step Industrial Reconditioning Process</h2>
      <p class="section-subtitle">
        Every single carboy passes through a standardized, quality-controlled multi-stage workflow from collection to dispatch sign-off.
      </p>
    </div>

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

<!-- SECTION 7: BEFORE & AFTER COMPARISON -->
<section class="section">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">Visual Quality Proof</span>
      <h2 class="section-title">Before & After Reconditioning</h2>
      <p class="section-subtitle">
        Drag the center handle to see how soiled, chemically coated industrial containers are restored to certified, leak-tested packaging standards.
      </p>
    </div>

    <%- include('../partials/before-after') %>
  </div>
</section>

<!-- SECTION 8: INTERACTIVE ROI CALCULATOR -->
<section class="section section-muted">
  <div class="container">
    <%- include('../partials/roi-calculator') %>
  </div>
</section>

<!-- SECTION 9: INDUSTRIES WE SERVE -->
<section class="section">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">Sector Expertise</span>
      <h2 class="section-title">Industries We Partner With</h2>
      <p class="section-subtitle">
        Container specifications, chemical wash formulations, and closure choices engineered for critical industrial sectors.
      </p>
    </div>

    <div class="industries-grid">
      <% industries.forEach((ind) => { %>
        <div class="industry-card">
          <span class="industry-card-badge"><%= ind.badge %></span>
          <h3 class="industry-card-title"><%= ind.title %></h3>
          <p class="industry-card-desc"><%= ind.shortDesc %></p>

          <div class="industry-containers-list">
            <div class="industry-containers-title">Typical Containers:</div>
            <% ind.typicalContainers.forEach((c) => { %>
              <div class="industry-container-item">
                <span>•</span>
                <span><%= c %></span>
              </div>
            <% }) %>
          </div>

          <a href="/industries/<%= ind.slug %>" class="btn btn-outline" style="margin-top: auto; width: 100%;">
            Explore Industry Solutions
          </a>
        </div>
      <% }) %>
    </div>
  </div>
</section>

<!-- SECTION 10: QUALITY ASSURANCE & TESTING PROTOCOLS -->
<section class="section section-subtle">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">Zero Leakage Commitment</span>
      <h2 class="section-title">Multi-Point Quality Control Matrix</h2>
      <p class="section-subtitle">
        Every reconditioned carboy passes rigorous physical, chemical, and pressure decay validation gates.
      </p>
    </div>

    <div class="stats-grid" style="margin-bottom: 40px;">
      <div class="stat-card">
        <div style="font-size: 1.75rem; margin-bottom: 8px;">🔬</div>
        <div class="stat-title">Wall Thickness Ultrasonic Gauging</div>
        <p class="stat-desc">Ensures minimum wall thickness is preserved and containers showing environmental stress cracking are culled.</p>
      </div>

      <div class="stat-card">
        <div style="font-size: 1.75rem; margin-bottom: 8px;">💨</div>
        <div class="stat-title">Pneumatic Pressure Decay Test</div>
        <p class="stat-desc">Digital pressure sensors detect microscopic leaks or faulty seals that cannot be observed visually.</p>
      </div>

      <div class="stat-card">
        <div style="font-size: 1.75rem; margin-bottom: 8px;">🧪</div>
        <div class="stat-title">Surface pH & Residue Checks</div>
        <p class="stat-desc">Final wash rinse effluent tested to ensure pH neutrality (6.5 - 7.5) and total absence of chemical film.</p>
      </div>

      <div class="stat-card">
        <div style="font-size: 1.75rem; margin-bottom: 8px;">🔒</div>
        <div class="stat-title">Torque-Calibrated Sealing</div>
        <p class="stat-desc">New virgin bungs fitted with torque control to guarantee leak-free containment during rough road transit.</p>
      </div>
    </div>

    <div class="image-placeholder-box">
      <div class="image-placeholder-label">[REAL PROCESS IMAGE – PNEUMATIC PRESSURE DECAY TEST RIG]</div>
      <div class="image-placeholder-subtext">Calibrated pneumatic test bench with digital pressure transducers testing 50L HDPE carboys.</div>
    </div>
  </div>
</section>

<!-- SECTION 11: FACILITY & INFRASTRUCTURE -->
<section class="section">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">Facility & Processing Capability</span>
      <h2 class="section-title">Engineered Infrastructure for Scalable Operations</h2>
      <p class="section-subtitle">
        Equipped to process high-volume monthly container turnover with dedicated washing, drying, testing, and staging bays.
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
      <div class="image-placeholder-box" style="min-height: 220px;">
        <div class="image-placeholder-label">[REAL FACILITY BAY – INWARD STAGING YARD]</div>
        <div class="image-placeholder-subtext">Organized receiving yard with classified batch bays for arriving empty carboys.</div>
      </div>
      <div class="image-placeholder-box" style="min-height: 220px;">
        <div class="image-placeholder-label">[REAL FACILITY BAY – AUTOMATED WASHING RIGS]</div>
        <div class="image-placeholder-subtext">Multi-stage 360-degree rotary nozzle chemical wash stations with heated circulation.</div>
      </div>
      <div class="image-placeholder-box" style="min-height: 220px;">
        <div class="image-placeholder-label">[REAL FACILITY BAY – HOT AIR DRYING TUNNEL]</div>
        <div class="image-placeholder-subtext">High-velocity dehumidified hot air diffusers for total moisture evacuation.</div>
      </div>
      <div class="image-placeholder-box" style="min-height: 220px;">
        <div class="image-placeholder-label">[REAL FACILITY BAY – DISPATCH PALLET STAGING]</div>
        <div class="image-placeholder-subtext">Stretch-wrapped, dust-protected reconditioned carboy stacks ready for fleet loading.</div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 12: CASE STUDIES -->
<section class="section section-muted">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">Proven Results</span>
      <h2 class="section-title">Real Industrial Outgrowth & Spend Optimization</h2>
      <p class="section-subtitle">
        How chemical, resin, and agrochemical manufacturers across India reduce packaging spend with our closed-loop reconditioning services.
      </p>
    </div>

    <div class="case-studies-grid">
      <% caseStudies.forEach((cs) => { %>
        <div class="case-study-card">
          <div class="case-study-meta"><%= cs.clientIndustry %> • <%= cs.region %></div>
          <h3 class="case-study-title"><%= cs.title %></h3>
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

<!-- SECTION 13: TESTIMONIALS (CLIENT FEEDBACK PLACEHOLDERS) -->
<section class="section">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">Enterprise Feedback</span>
      <h2 class="section-title">What Procurement & Plant Heads Say</h2>
      <p class="section-subtitle">
        Reliable B2B relationships built on consistent packaging quality, zero transit leakage, and reliable reverse logistics.
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px;">
      <div class="stat-card">
        <p style="font-style: italic; color: #334155; margin-bottom: 20px; font-size: 0.95rem;">
          "[REAL CLIENT TESTIMONIAL PLACEHOLDER — Switching our 50L surfactant carboys to Parth Packaging closed-loop reconditioning cut our packaging budget by 46% with zero quality complaints over two continuous manufacturing years.]"
        </p>
        <div style="border-top: 1px solid #E2E8F0; padding-top: 14px;">
          <div style="font-weight: 700; color: #0F172A;">[General Manager - Supply Chain]</div>
          <div style="font-size: 0.825rem; color: #64748B;">Specialty Surfactants Manufacturer, Gujarat Industrial Corridor</div>
        </div>
      </div>

      <div class="stat-card">
        <p style="font-style: italic; color: #334155; margin-bottom: 20px; font-size: 0.95rem;">
          "[REAL CLIENT TESTIMONIAL PLACEHOLDER — Their 100% pneumatic pressure testing benchmark completely solved the transit leakage issues we experienced with unorganized local drum cleaners. Highly dependable team.]"
        </p>
        <div style="border-top: 1px solid #E2E8F0; padding-top: 14px;">
          <div style="font-weight: 700; color: #0F172A;">[Plant Operations Head]</div>
          <div style="font-size: 0.825rem; color: #64748B;">Industrial Coatings & Resins, Pune MIDC</div>
        </div>
      </div>

      <div class="stat-card">
        <p style="font-style: italic; color: #334155; margin-bottom: 20px; font-size: 0.95rem;">
          "[REAL CLIENT TESTIMONIAL PLACEHOLDER — Scheduled reverse pickup from our distributor points in Maharashtra solved our storage clutter and gave us guaranteed packaging availability during seasonal surges.]"
        </p>
        <div style="border-top: 1px solid #E2E8F0; padding-top: 14px;">
          <div style="font-weight: 700; color: #0F172A;">[Procurement Lead]</div>
          <div style="font-size: 0.825rem; color: #64748B;">Agrochemical Formulations Company, Thane-Belapur Belt</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 14: FREQUENTLY ASKED QUESTIONS (FAQ) -->
<section class="section section-subtle">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">Common Queries</span>
      <h2 class="section-title">Frequently Asked Questions</h2>
      <p class="section-subtitle">
        Everything you need to know about industrial carboy reconditioning, chemical washing protocols, and pickup logistics.
      </p>
    </div>

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

<!-- SECTION 15: ADVANCED QUOTATION FORM -->
<section class="section" id="quoteSection">
  <div class="container container-narrow">
    <%- include('../partials/quote-form') %>
  </div>
</section>

<!-- SECTION 16: PAN-INDIA LOGISTICS CLUSTERS -->
<section class="section section-muted">
  <div class="container">
    <div class="section-header text-center">
      <span class="section-eyebrow">Logistics Reach</span>
      <h2 class="section-title">Pan-India Industrial Coverage Hubs</h2>
      <p class="section-subtitle">
        Direct collection and dispatch capabilities servicing major manufacturing and chemical corridors across India.
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
      <% locations.forEach((loc) => { %>
        <div class="stat-card">
          <div style="font-size: 0.75rem; font-weight: 700; color: #0F766E; text-transform: uppercase; margin-bottom: 6px;"><%= loc.state %></div>
          <h3 style="font-size: 1.15rem; margin-bottom: 10px;"><%= loc.name %></h3>
          <p style="font-size: 0.875rem; color: #64748B; margin-bottom: 16px;"><%= loc.logisticsCapabilities %></p>
          <div style="font-size: 0.8rem; font-weight: 600; color: #0284C7; margin-bottom: 14px;">⏱️ Turnaround: <%= loc.turnaroundTime %></div>
          <a href="/locations/<%= loc.slug %>" class="btn btn-outline btn-sm" style="width: 100%;">View Cluster Details</a>
        </div>
      <% }) %>
    </div>
  </div>
</section>

<!-- SECTION 17: URGENT CTA BANNER -->
<%- include('../partials/cta-banner') %>
\` }) %>
`);

console.log('Finished writing home.ejs');
