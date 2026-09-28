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
<%- include('../partials/layout-top') %>

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

<%- include('../partials/cta-banner') %>

<%- include('../partials/layout-bottom') %>
`);
// 2. about.ejs
write('src/views/pages/about.ejs', `
<%- include('../partials/layout-top') %>

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

<%- include('../partials/layout-bottom') %>
`);

// 3. carboys-reconditioning.ejs
write('src/views/pages/carboys-reconditioning.ejs', `
<%- include('../partials/layout-top') %>

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

<section class="section section-muted">
  <div class="container container-narrow">
    <%- include('../partials/quote-form') %>
  </div>
</section>

<%- include('../partials/cta-banner') %>

<%- include('../partials/layout-bottom') %>
`);

// 4. services.ejs
write('src/views/pages/services.ejs', `
<%- include('../partials/layout-top') %>

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

<%- include('../partials/layout-bottom') %>
`);
// 5. process.ejs
write('src/views/pages/process.ejs', `
<%- include('../partials/layout-top') %>

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

<%- include('../partials/layout-bottom') %>
`);

// 6. industries.ejs
write('src/views/pages/industries.ejs', `
<%- include('../partials/layout-top') %>

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

<%- include('../partials/layout-bottom') %>
`);

// 7. industry-detail.ejs
write('src/views/pages/industry-detail.ejs', `
<%- include('../partials/layout-top') %>

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

<%- include('../partials/layout-bottom') %>
`);

// 8. quality.ejs
write('src/views/pages/quality.ejs', `
<%- include('../partials/layout-top') %>

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

<%- include('../partials/layout-bottom') %>
`);
// 9. gallery.ejs
write('src/views/pages/gallery.ejs', `
<%- include('../partials/layout-top') %>

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

<%- include('../partials/layout-bottom') %>
`);

// 10. case-studies.ejs
write('src/views/pages/case-studies.ejs', `
<%- include('../partials/layout-top') %>

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

<%- include('../partials/layout-bottom') %>
`);

// 11. faq.ejs
write('src/views/pages/faq.ejs', `
<%- include('../partials/layout-top') %>

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

<%- include('../partials/layout-bottom') %>
`);

// 12. locations.ejs
write('src/views/pages/locations.ejs', `
<%- include('../partials/layout-top') %>

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

<%- include('../partials/layout-bottom') %>
`);

// 13. location-detail.ejs
write('src/views/pages/location-detail.ejs', `
<%- include('../partials/layout-top') %>

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

<%- include('../partials/layout-bottom') %>
`);
// 14. blog-index.ejs
write('src/views/pages/blog-index.ejs', `
<%- include('../partials/layout-top') %>

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

<%- include('../partials/layout-bottom') %>
`);

// 15. blog-post.ejs
write('src/views/pages/blog-post.ejs', `
<%- include('../partials/layout-top') %>

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

<%- include('../partials/layout-bottom') %>
`);

// 16. contact.ejs
write('src/views/pages/contact.ejs', `
<%- include('../partials/layout-top') %>

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

<%- include('../partials/layout-bottom') %>
`);

// 17. 404.ejs
write('src/views/pages/404.ejs', `
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
  </main>

  <%- include('../partials/footer') %>
  <%- include('../partials/mobile-action-bar') %>
  <%- include('../partials/quote-modal') %>
  <script src="/js/main.js" defer></script>
</body>
</html>
`);

// 18. 500.ejs
write('src/views/pages/500.ejs', `
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
  </main>

  <%- include('../partials/footer') %>
  <%- include('../partials/mobile-action-bar') %>
  <%- include('../partials/quote-modal') %>
  <script src="/js/main.js" defer></script>
</body>
</html>
`);

console.log('Finished rebuilding all pages successfully.');
