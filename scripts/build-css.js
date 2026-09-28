const fs = require('fs');
fs.writeFileSync('public/css/main.css', '', 'utf8');
console.log('Initialized public/css/main.css');
fs.appendFileSync('public/css/main.css', `
:root {
  --color-primary-dark: #0B1320;
  --color-secondary-dark: #1E293B;
  --color-surface-dark: #111D30;
  --color-brand: #0F766E;
  --color-brand-light: #14B8A6;
  --color-brand-tint: #CCFBF1;
  --color-brand-dark: #0D5D57;
  --color-accent: #D97706;
  --color-accent-hover: #B45309;
  --color-accent-light: #FEF3C7;
  --color-info: #0284C7;
  --color-canvas: #FFFFFF;
  --color-canvas-subtle: #F8FAFC;
  --color-canvas-muted: #F1F5F9;
  --color-text-primary: #0F172A;
  --color-text-secondary: #334155;
  --color-text-muted: #64748B;
  --color-text-inverse: #F8FAFC;
  --color-text-inverse-muted: #94A3B8;
  --color-border: #E2E8F0;
  --color-border-subtle: #CBD5E1;
  --color-border-dark: #334155;
  --color-success: #16A34A;
  --color-danger: #DC2626;

  --font-heading: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  --shadow-sm: 0 1px 2px 0 rgba(15, 23, 42, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.05);
  --shadow-lg: 0 10px 25px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04);
  --shadow-xl: 0 20px 30px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.05);
  --shadow-card-hover: 0 16px 32px -4px rgba(15, 23, 42, 0.12);

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-smooth: 350ms cubic-bezier(0.16, 1, 0.3, 1);

  --container-max: 1280px;
  --container-narrow: 960px;
  --header-height: 80px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
body {
  font-family: var(--font-body);
  color: var(--color-text-secondary);
  background-color: var(--color-canvas);
  line-height: 1.65;
  overflow-x: hidden;
}
@media (max-width: 991px) { body { padding-bottom: 64px; } }

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--color-text-primary);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
}
h1 { font-size: clamp(2.25rem, 4.5vw, 3.5rem); font-weight: 800; }
h2 { font-size: clamp(1.85rem, 3vw, 2.5rem); }
h3 { font-size: clamp(1.35rem, 2vw, 1.75rem); }
h4 { font-size: 1.25rem; }
p { margin-bottom: 1rem; }
p:last-child { margin-bottom: 0; }
a { color: var(--color-brand); text-decoration: none; transition: color var(--transition-fast); }
a:hover { color: var(--color-brand-dark); }
img, svg { display: block; max-width: 100%; height: auto; }
button, input, select, textarea { font: inherit; }
:focus-visible { outline: 2px solid var(--color-brand); outline-offset: 3px; }

.container { width: 100%; max-width: var(--container-max); margin: 0 auto; padding: 0 24px; }
.container-narrow { width: 100%; max-width: var(--container-narrow); margin: 0 auto; padding: 0 24px; }
.section { padding: 80px 0; position: relative; }
.section-lg { padding: 100px 0; }
@media (max-width: 768px) { .section { padding: 56px 0; } .section-lg { padding: 64px 0; } }

.section-dark { background-color: var(--color-primary-dark); color: var(--color-text-inverse-muted); }
.section-dark h1, .section-dark h2, .section-dark h3, .section-dark h4 { color: #FFFFFF; }
.section-subtle { background-color: var(--color-canvas-subtle); }
.section-muted { background-color: var(--color-canvas-muted); }

.section-header { margin-bottom: 50px; max-width: 760px; }
.section-header.text-center { margin-left: auto; margin-right: auto; text-align: center; }
.section-eyebrow {
  display: inline-flex; align-items: center; gap: 8px; font-size: 0.8125rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-brand); background: var(--color-brand-tint);
  padding: 4px 12px; border-radius: var(--radius-full); margin-bottom: 14px;
}
.section-dark .section-eyebrow { background: rgba(20, 184, 166, 0.15); color: var(--color-brand-light); border: 1px solid rgba(20, 184, 166, 0.25); }
.section-title { margin-bottom: 16px; }
.section-subtitle { font-size: 1.125rem; color: var(--color-text-muted); line-height: 1.6; }
.section-dark .section-subtitle { color: var(--color-text-inverse-muted); }

.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 24px;
  font-family: var(--font-heading); font-size: 0.95rem; font-weight: 600; border-radius: var(--radius-md);
  border: 1px solid transparent; cursor: pointer; transition: all var(--transition-fast); white-space: nowrap;
}
.btn-primary { background-color: var(--color-brand); color: #FFFFFF; box-shadow: 0 2px 4px rgba(15, 118, 110, 0.2); }
.btn-primary:hover { background-color: var(--color-brand-dark); color: #FFFFFF; transform: translateY(-1px); }
.btn-accent { background-color: var(--color-accent); color: #FFFFFF; box-shadow: 0 2px 4px rgba(217, 119, 6, 0.2); }
.btn-accent:hover { background-color: var(--color-accent-hover); color: #FFFFFF; transform: translateY(-1px); }
.btn-outline { background-color: transparent; border-color: var(--color-border-subtle); color: var(--color-text-primary); }
.btn-outline:hover { border-color: var(--color-brand); color: var(--color-brand); background-color: var(--color-brand-tint); }
.btn-outline-white { background-color: transparent; border-color: rgba(255, 255, 255, 0.3); color: #FFFFFF; }
.btn-outline-white:hover { border-color: #FFFFFF; background-color: rgba(255, 255, 255, 0.1); color: #FFFFFF; }
.btn-lg { padding: 15px 32px; font-size: 1.05rem; }
.btn-sm { padding: 7px 14px; font-size: 0.85rem; }
`, 'utf8');
fs.appendFileSync('public/css/main.css', `
.top-bar { background-color: #060B14; color: #94A3B8; font-size: 0.8125rem; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding: 8px 0; }
.top-bar-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
.top-bar-badge { display: inline-flex; align-items: center; gap: 6px; color: #38BDF8; font-weight: 500; }
.pulse-dot { width: 8px; height: 8px; background-color: #10B981; border-radius: 50%; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); animation: pulse-ring 2s infinite; }
@keyframes pulse-ring { 0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); } 70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); } 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); } }
.top-bar-contact { display: flex; align-items: center; gap: 20px; }
.top-bar-link { color: #94A3B8; display: inline-flex; align-items: center; gap: 6px; }
.top-bar-link:hover { color: #FFFFFF; }

.site-header { position: sticky; top: 0; z-index: 1000; background-color: rgba(255, 255, 255, 0.96); backdrop-filter: blur(12px); border-bottom: 1px solid var(--color-border); height: var(--header-height); display: flex; align-items: center; }
.site-header-inner { display: flex; align-items: center; justify-content: space-between; width: 100%; }
.brand-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
.logo-symbol { width: 42px; height: 42px; background: linear-gradient(135deg, var(--color-primary-dark), var(--color-brand)); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-weight: 800; font-size: 1.2rem; }
.logo-text-wrap { display: flex; flex-direction: column; }
.logo-name { font-family: var(--font-heading); font-size: 1.35rem; font-weight: 800; color: var(--color-primary-dark); line-height: 1.1; letter-spacing: -0.03em; }
.logo-tagline { font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-brand); }

.nav-menu { display: flex; align-items: center; gap: 24px; list-style: none; }
.nav-link { font-family: var(--font-heading); font-size: 0.925rem; font-weight: 600; color: var(--color-text-secondary); padding: 8px 0; position: relative; }
.nav-link:hover, .nav-link.active { color: var(--color-brand); }
.nav-link.active::after { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; background-color: var(--color-brand); border-radius: 2px; }
.header-actions { display: flex; align-items: center; gap: 14px; }
.mobile-toggle { display: none; background: none; border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 8px; cursor: pointer; color: var(--color-text-primary); }
@media (max-width: 1024px) { .nav-menu { display: none; } .mobile-toggle { display: block; } }

.mobile-drawer { position: fixed; top: 0; right: -100%; width: 320px; max-width: 85vw; height: 100%; background-color: #FFFFFF; box-shadow: -10px 0 30px rgba(0,0,0,0.15); z-index: 2000; transition: right var(--transition-smooth); display: flex; flex-direction: column; overflow-y: auto; }
.mobile-drawer.open { right: 0; }
.drawer-overlay { position: fixed; inset: 0; background-color: rgba(11, 19, 32, 0.6); backdrop-filter: blur(4px); z-index: 1999; opacity: 0; visibility: hidden; transition: all var(--transition-base); }
.drawer-overlay.open { opacity: 1; visibility: visible; }
.drawer-header { display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; border-bottom: 1px solid var(--color-border); }
.drawer-close { background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--color-text-muted); }
.drawer-nav { padding: 20px 24px; display: flex; flex-direction: column; gap: 14px; }
.drawer-nav a { font-family: var(--font-heading); font-size: 1.05rem; font-weight: 600; color: var(--color-text-primary); padding: 8px 0; border-bottom: 1px solid var(--color-canvas-muted); }
.drawer-nav a.active { color: var(--color-brand); }
.drawer-footer { margin-top: auto; padding: 24px; background-color: var(--color-canvas-subtle); border-top: 1px solid var(--color-border); }

.mobile-action-bar { display: none; position: fixed; bottom: 0; left: 0; width: 100%; height: 60px; background-color: #FFFFFF; border-top: 1px solid var(--color-border); box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.08); z-index: 1500; grid-template-columns: 1fr 1fr 1.3fr; }
@media (max-width: 991px) { .mobile-action-bar { display: grid; } }
.mobile-action-btn { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; font-size: 0.725rem; font-weight: 600; color: var(--color-text-secondary); text-decoration: none; border-right: 1px solid var(--color-border); }
.mobile-action-btn:last-child { border-right: none; }
.mobile-action-btn.btn-cta { background-color: var(--color-brand); color: #FFFFFF; }
.mobile-action-btn svg { width: 20px; height: 20px; }

.hero-section { position: relative; background: linear-gradient(175deg, #0B1320 0%, #111D30 65%, #0B1320 100%); color: #F8FAFC; padding: 90px 0 100px; overflow: hidden; }
.hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 48px; align-items: center; }
@media (max-width: 991px) { .hero-grid { grid-template-columns: 1fr; gap: 40px; } .hero-section { padding: 60px 0 80px; } }
.hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(15, 118, 110, 0.2); border: 1px solid rgba(20, 184, 166, 0.35); color: #2DD4BF; padding: 6px 14px; border-radius: var(--radius-full); font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 20px; }
.hero-headline { color: #FFFFFF; margin-bottom: 20px; font-size: clamp(2.3rem, 4.5vw, 3.75rem); line-height: 1.15; }
.hero-headline .text-gradient { background: linear-gradient(135deg, #38BDF8 0%, #2DD4BF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.hero-subheading { font-size: 1.15rem; color: #94A3B8; line-height: 1.65; margin-bottom: 32px; max-width: 600px; }
.hero-cta-group { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; margin-bottom: 40px; }
.hero-trust-strip { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 24px; }
.hero-trust-item { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: #CBD5E1; font-weight: 500; }
.hero-trust-item svg { color: #10B981; width: 18px; height: 18px; flex-shrink: 0; }

.hero-visual-card { position: relative; background: rgba(17, 29, 48, 0.85); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: var(--radius-xl); padding: 24px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); backdrop-filter: blur(16px); }
.hero-visual-badge { position: absolute; top: 16px; right: 16px; background: #0F766E; color: #FFFFFF; font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: var(--radius-sm); letter-spacing: 0.05em; text-transform: uppercase; }
.hero-specs-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 20px; }
.hero-spec-item { background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-md); padding: 12px 14px; }
.hero-spec-label { font-size: 0.75rem; color: #94A3B8; text-transform: uppercase; margin-bottom: 2px; }
.hero-spec-value { font-size: 1rem; font-weight: 700; color: #FFFFFF; }
`, 'utf8');
fs.appendFileSync('public/css/main.css', `
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
@media (max-width: 991px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 540px) { .stats-grid { grid-template-columns: 1fr; } }
.stat-card { background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 30px 24px; box-shadow: var(--shadow-sm); transition: transform var(--transition-fast), box-shadow var(--transition-fast); }
.stat-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-card-hover); border-color: var(--color-brand-light); }
.stat-number { font-family: var(--font-heading); font-size: 2.25rem; font-weight: 800; color: var(--color-brand); line-height: 1; margin-bottom: 10px; }
.stat-title { font-size: 1.1rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 8px; }
.stat-desc { font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.55; }

.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 28px; }
.service-card { background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 36px 28px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; transition: all var(--transition-base); }
.service-card:hover { border-color: var(--color-brand); box-shadow: var(--shadow-lg); transform: translateY(-4px); }
.service-icon-wrap { width: 52px; height: 52px; border-radius: var(--radius-md); background-color: var(--color-brand-tint); color: var(--color-brand); display: flex; align-items: center; justify-content: center; margin-bottom: 22px; }
.service-card-title { font-size: 1.3rem; margin-bottom: 12px; }
.service-card-desc { font-size: 0.925rem; color: var(--color-text-muted); margin-bottom: 20px; line-height: 1.6; }
.service-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; padding-top: 20px; border-top: 1px solid var(--color-canvas-muted); }
.service-tag { font-size: 0.75rem; font-weight: 600; background: var(--color-canvas-muted); color: var(--color-text-secondary); padding: 3px 8px; border-radius: var(--radius-sm); }

.process-timeline { display: flex; flex-direction: column; gap: 24px; position: relative; }
.process-step-card { display: grid; grid-template-columns: 80px 1fr; gap: 28px; background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 30px; box-shadow: var(--shadow-sm); transition: all var(--transition-fast); }
.process-step-card:hover { border-color: var(--color-brand); box-shadow: var(--shadow-md); }
@media (max-width: 640px) { .process-step-card { grid-template-columns: 1fr; gap: 16px; } }
.process-step-number { font-family: var(--font-heading); font-size: 2.25rem; font-weight: 800; color: var(--color-brand); background: var(--color-brand-tint); width: 72px; height: 72px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; line-height: 1; }
.process-step-content h3 { font-size: 1.35rem; margin-bottom: 4px; }
.process-step-subtitle { font-size: 0.875rem; font-weight: 600; color: var(--color-brand); margin-bottom: 12px; }
.process-step-desc { font-size: 0.95rem; color: var(--color-text-secondary); margin-bottom: 16px; }
.process-details-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; margin-bottom: 16px; }
.process-detail-item { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: var(--color-text-muted); }
.process-detail-item svg { color: var(--color-brand); width: 16px; height: 16px; flex-shrink: 0; }
.quality-gate-badge { display: inline-flex; align-items: center; gap: 8px; background: #EFF6FF; border: 1px solid #BFDBFE; color: #1D4ED8; padding: 6px 14px; border-radius: var(--radius-md); font-size: 0.8125rem; font-weight: 600; }

.before-after-container { max-width: 900px; margin: 0 auto; border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-xl); border: 2px solid var(--color-border); }
.comparison-slider-wrap { position: relative; width: 100%; height: 460px; user-select: none; overflow: hidden; background-color: #0B1320; }
@media (max-width: 640px) { .comparison-slider-wrap { height: 320px; } }
.comparison-image-before, .comparison-image-after { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; }
.comparison-image-after-wrap { position: absolute; top: 0; left: 0; width: 50%; height: 100%; overflow: hidden; border-right: 3px solid #FFFFFF; }
.comparison-image-after-wrap img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; }
.slider-handle { position: absolute; top: 0; bottom: 0; left: 50%; width: 4px; background-color: #FFFFFF; cursor: ew-resize; transform: translateX(-50%); z-index: 20; box-shadow: 0 0 12px rgba(0, 0, 0, 0.4); }
.slider-handle-button { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 44px; height: 44px; background-color: var(--color-brand); border: 3px solid #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #FFFFFF; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); font-weight: 800; }
.slider-badge { position: absolute; bottom: 20px; padding: 6px 14px; border-radius: var(--radius-md); font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; z-index: 10; }
.slider-badge-before { right: 20px; background: rgba(185, 28, 28, 0.9); color: #FFFFFF; backdrop-filter: blur(8px); }
.slider-badge-after { left: 20px; background: rgba(15, 118, 110, 0.9); color: #FFFFFF; backdrop-filter: blur(8px); }

.calculator-card { background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 40px; box-shadow: var(--shadow-lg); }
.calculator-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; align-items: center; }
@media (max-width: 860px) { .calculator-grid { grid-template-columns: 1fr; gap: 32px; } }
.calc-control { margin-bottom: 24px; }
.calc-label { display: flex; justify-content: space-between; align-items: center; font-weight: 600; color: var(--color-text-primary); margin-bottom: 8px; font-size: 0.95rem; }
.calc-value-display { color: var(--color-brand); font-weight: 700; font-size: 1.1rem; }
.calc-range { width: 100%; height: 8px; background: var(--color-canvas-muted); border-radius: var(--radius-full); outline: none; cursor: pointer; accent-color: var(--color-brand); }
.calc-results-card { background: var(--color-primary-dark); color: #FFFFFF; padding: 32px; border-radius: var(--radius-lg); border: 1px solid var(--color-secondary-dark); }
.calc-savings-banner { text-align: center; padding-bottom: 24px; margin-bottom: 24px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
.calc-savings-amount { font-family: var(--font-heading); font-size: 2.75rem; font-weight: 800; color: #2DD4BF; line-height: 1.1; margin-bottom: 6px; }
.calc-savings-subtext { font-size: 0.875rem; color: #94A3B8; }
.calc-breakdown-row { display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; padding: 8px 0; color: #CBD5E1; }

.industries-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px; }
.industry-card { background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 32px 28px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; transition: all var(--transition-fast); }
.industry-card:hover { border-color: var(--color-brand); transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.industry-card-badge { display: inline-block; align-self: flex-start; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; background: var(--color-brand-tint); color: var(--color-brand); padding: 3px 10px; border-radius: var(--radius-sm); margin-bottom: 16px; }
.industry-card-title { font-size: 1.35rem; margin-bottom: 10px; }
.industry-card-desc { font-size: 0.925rem; color: var(--color-text-muted); margin-bottom: 20px; }
.industry-containers-list { background: var(--color-canvas-subtle); border-radius: var(--radius-md); padding: 14px; margin-bottom: 20px; }
.industry-containers-title { font-size: 0.775rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-secondary); margin-bottom: 6px; }
.industry-container-item { font-size: 0.85rem; color: var(--color-text-primary); display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }

.quality-table-wrap { background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-lg); overflow-x: auto; box-shadow: var(--shadow-sm); }
.quality-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.925rem; }
.quality-table th { background: var(--color-canvas-subtle); padding: 16px 20px; font-family: var(--font-heading); font-weight: 700; color: var(--color-text-primary); border-bottom: 2px solid var(--color-border); }
.quality-table td { padding: 16px 20px; border-bottom: 1px solid var(--color-canvas-muted); vertical-align: middle; }
.quality-table tr:last-child td { border-bottom: none; }

.case-studies-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 28px; }
.case-study-card { background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 32px 28px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; }
.case-study-meta { font-size: 0.8125rem; font-weight: 600; color: var(--color-brand); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 10px; }
.case-study-title { font-size: 1.25rem; margin-bottom: 14px; line-height: 1.35; }
.case-study-challenge, .case-study-solution { font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 14px; }
.case-study-results { margin-top: auto; padding-top: 20px; border-top: 1px solid var(--color-canvas-muted); display: flex; flex-direction: column; gap: 8px; }
.case-result-pill { display: inline-flex; align-items: center; gap: 8px; background: #ECFDF5; color: #065F46; font-weight: 600; font-size: 0.85rem; padding: 6px 12px; border-radius: var(--radius-md); }

.faq-accordion { display: flex; flex-direction: column; gap: 14px; max-width: 860px; margin: 0 auto; }
.faq-item { background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); }
.faq-question-btn { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; font-family: var(--font-heading); font-size: 1.05rem; font-weight: 600; color: var(--color-text-primary); text-align: left; cursor: pointer; transition: background-color var(--transition-fast); }
.faq-question-btn:hover { background-color: var(--color-canvas-subtle); }
.faq-icon { width: 20px; height: 20px; transition: transform var(--transition-fast); color: var(--color-brand); flex-shrink: 0; }
.faq-item.active .faq-icon { transform: rotate(180deg); }
.faq-answer { display: none; padding: 0 24px 20px 24px; font-size: 0.95rem; color: var(--color-text-secondary); line-height: 1.65; border-top: 1px solid var(--color-canvas-muted); padding-top: 16px; }
.faq-item.active .faq-answer { display: block; }

.form-card { background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 40px; box-shadow: var(--shadow-lg); }
@media (max-width: 640px) { .form-card { padding: 24px; } }
.form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
@media (max-width: 640px) { .form-grid { grid-template-columns: 1fr; } }
.form-group-full { grid-column: 1 / -1; }
.form-label { display: block; font-size: 0.875rem; font-weight: 600; color: var(--color-text-primary); margin-bottom: 6px; }
.form-label .required { color: var(--color-danger); }
.form-control { width: 100%; padding: 12px 16px; border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); background-color: #FFFFFF; color: var(--color-text-primary); font-size: 0.95rem; transition: border-color var(--transition-fast), box-shadow var(--transition-fast); }
.form-control:focus { border-color: var(--color-brand); box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.15); outline: none; }
textarea.form-control { min-height: 110px; resize: vertical; }
.form-file-hint { font-size: 0.75rem; color: var(--color-text-muted); margin-top: 4px; }
.honey-field { display: none !important; visibility: hidden !important; }
.form-alert { padding: 14px 18px; border-radius: var(--radius-md); margin-bottom: 20px; font-size: 0.925rem; font-weight: 500; display: none; }
.form-alert.alert-success { background-color: #ECFDF5; color: #065F46; border: 1px solid #A7F3D0; display: block; }
.form-alert.alert-danger { background-color: #FEF2F2; color: #991B1B; border: 1px solid #FECACA; display: block; }

.modal-dialog { border: none; border-radius: var(--radius-xl); padding: 0; max-width: 680px; width: 90vw; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); margin: auto; }
.modal-dialog::backdrop { background: rgba(11, 19, 32, 0.7); backdrop-filter: blur(4px); }
.modal-content { background: #FFFFFF; padding: 36px; position: relative; max-height: 90vh; overflow-y: auto; }
.modal-close-btn { position: absolute; top: 20px; right: 20px; background: var(--color-canvas-muted); border: none; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--color-text-muted); font-size: 1.25rem; }
.modal-close-btn:hover { background-color: var(--color-border); color: var(--color-text-primary); }

.site-footer { background-color: #060B14; color: #94A3B8; padding: 80px 0 30px; border-top: 1px solid rgba(255, 255, 255, 0.08); }
.footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1.2fr; gap: 40px; margin-bottom: 60px; }
@media (max-width: 991px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; } }
@media (max-width: 580px) { .footer-grid { grid-template-columns: 1fr; } }
.footer-col-title { color: #FFFFFF; font-family: var(--font-heading); font-size: 1.1rem; font-weight: 700; margin-bottom: 20px; }
.footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.footer-links a { color: #94A3B8; font-size: 0.9rem; transition: color var(--transition-fast); }
.footer-links a:hover { color: #38BDF8; }
.footer-contact-info { display: flex; flex-direction: column; gap: 12px; font-size: 0.9rem; }
.footer-bottom { padding-top: 30px; border-top: 1px solid rgba(255, 255, 255, 0.08); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; font-size: 0.8125rem; }
.footer-legal-links { display: flex; gap: 20px; }

.image-placeholder-box { width: 100%; min-height: 240px; background: #F1F5F9; border: 2px dashed #CBD5E1; border-radius: var(--radius-lg); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 24px; text-align: center; color: #475569; }
.image-placeholder-label { font-family: var(--font-heading); font-weight: 700; font-size: 0.875rem; color: var(--color-brand); background: var(--color-brand-tint); padding: 4px 10px; border-radius: var(--radius-sm); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em; }
.image-placeholder-subtext { font-size: 0.8125rem; color: var(--color-text-muted); max-width: 320px; }

.breadcrumb-nav { padding: 16px 0; font-size: 0.875rem; color: var(--color-text-muted); }
.breadcrumb-list { display: flex; align-items: center; gap: 8px; list-style: none; flex-wrap: wrap; }
.breadcrumb-separator { color: var(--color-border-subtle); }
.breadcrumb-current { color: var(--color-text-primary); font-weight: 600; }

@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; } }
@media print { .site-header, .top-bar, .mobile-action-bar, .site-footer, .btn, .modal-dialog { display: none !important; } body { color: #000; background: #FFF; } }
`, 'utf8');
console.log('Finished writing public/css/main.css');
