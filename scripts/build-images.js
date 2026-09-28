const fs = require('fs');
const path = require('path');

const imgDir = path.join('public', 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// 1. carboy-before.svg (Raw soiled inward carboy)
const carboyBeforeSvg = `
<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#1E293B"/>
  <!-- Industrial floor/background -->
  <rect y="450" width="800" height="150" fill="#0F172A"/>
  <line x1="0" y1="450" x2="800" y2="450" stroke="#334155" stroke-width="2"/>
  
  <!-- Container Body (Soiled, stained HDPE Carboy) -->
  <g transform="translate(250, 100)">
    <!-- Shadow -->
    <ellipse cx="150" cy="360" rx="140" ry="25" fill="#020617" opacity="0.6"/>
    
    <!-- Main Carboy Bottle -->
    <rect x="20" y="80" width="260" height="270" rx="28" fill="#94A3B8"/>
    <!-- Dirty Chemical Stains / Polymer discoloration -->
    <path d="M 30,120 Q 90,160 80,240 Q 60,310 130,340 L 40,340 Z" fill="#64748B" opacity="0.8"/>
    <path d="M 170,100 Q 220,130 200,220 Q 230,280 270,300 L 270,120 Z" fill="#475569" opacity="0.75"/>
    <ellipse cx="120" cy="200" rx="45" ry="30" fill="#475569" opacity="0.5"/>
    <!-- Soiled torn label -->
    <rect x="70" y="160" width="130" height="90" rx="4" fill="#CBD5E1" opacity="0.6"/>
    <path d="M 70,230 L 110,250 L 70,250 Z" fill="#94A3B8"/>
    <line x1="85" y1="185" x2="160" y2="185" stroke="#475569" stroke-width="4"/>
    <line x1="85" y1="205" x2="180" y2="205" stroke="#475569" stroke-width="3"/>
    
    <!-- Heavy-Duty Handle (Worn) -->
    <path d="M 60,80 C 60,30 240,30 240,80" fill="none" stroke="#64748B" stroke-width="26" stroke-linecap="round"/>
    
    <!-- Container Neck & Worn Dirty Bung -->
    <rect x="115" y="45" width="70" height="40" rx="6" fill="#64748B"/>
    <rect x="110" y="35" width="80" height="15" rx="4" fill="#475569"/>
    
    <!-- Chemical Residue Warning Graphic -->
    <polygon points="175,175 195,210 155,210" fill="#D97706" opacity="0.85"/>
    <text x="175" y="205" font-family="Arial" font-size="16" font-weight="bold" fill="#1E293B" text-anchor="middle">!</text>
  </g>
  
  <!-- Overlay Status Text -->
  <rect x="40" y="40" width="280" height="42" rx="8" fill="#B91C1C" opacity="0.9"/>
  <text x="180" y="67" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF" text-anchor="middle">BEFORE: SOILED INWARD UNIT</text>
  <text x="400" y="540" font-family="Arial, sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">Chemical residue coatings • Scuffed exterior • Used closures requiring replacement</text>
</svg>
`;
fs.writeFileSync(path.join(imgDir, 'carboy-before.svg'), carboyBeforeSvg.trim(), 'utf8');

// 2. carboy-after.svg (Pristine, decontaminated, pressure-tested carboy)
const carboyAfterSvg = `
<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cleanHdpe" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#E2E8F0"/>
      <stop offset="100%" stop-color="#CBD5E1"/>
    </linearGradient>
    <linearGradient id="brandTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14B8A6"/>
      <stop offset="100%" stop-color="#0F766E"/>
    </linearGradient>
  </defs>
  
  <rect width="100%" height="100%" fill="#0B1320"/>
  <!-- Clean staging floor -->
  <rect y="450" width="800" height="150" fill="#08101D"/>
  <line x1="0" y1="450" x2="800" y2="450" stroke="#0F766E" stroke-width="2" stroke-dasharray="8 8"/>
  
  <!-- Container Body (Pristine Reconditioned HDPE Carboy) -->
  <g transform="translate(250, 100)">
    <!-- Crisp Floor Shadow -->
    <ellipse cx="150" cy="360" rx="145" ry="24" fill="#020617" opacity="0.8"/>
    
    <!-- Main Sparkling Clean Body -->
    <rect x="20" y="80" width="260" height="270" rx="28" fill="url(#cleanHdpe)" stroke="#FFFFFF" stroke-width="2"/>
    
    <!-- Gloss Highlights -->
    <path d="M 40,100 L 40,330" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity="0.7"/>
    <path d="M 60,100 L 60,280" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
    
    <!-- Rigid Mold Chimes / Structural Ribs (Pristine) -->
    <line x1="30" y1="170" x2="270" y2="170" stroke="#CBD5E1" stroke-width="2"/>
    <line x1="30" y1="260" x2="270" y2="260" stroke="#CBD5E1" stroke-width="2"/>
    
    <!-- Brand-New High-Tensile Handle -->
    <path d="M 60,80 C 60,25 240,25 240,80" fill="none" stroke="#CBD5E1" stroke-width="26" stroke-linecap="round"/>
    <path d="M 60,80 C 60,25 240,25 240,80" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity="0.8"/>
    
    <!-- Brand-New Virgin Cap with Tamper Ring -->
    <rect x="115" y="42" width="70" height="42" rx="6" fill="url(#brandTeal)"/>
    <rect x="110" y="32" width="80" height="15" rx="4" fill="#0D5D57"/>
    
    <!-- Parth Packaging QC Stamp / Leak Tested Badge -->
    <circle cx="150" cy="215" r="42" fill="#0F766E" stroke="#2DD4BF" stroke-width="3"/>
    <polygon points="150,190 157,205 174,206 161,216 166,232 150,222 134,232 139,216 126,206 143,205" fill="#FFFFFF"/>
    <text x="150" y="246" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#CCFBF1" text-anchor="middle">LEAK TESTED: 100%</text>
  </g>
  
  <!-- Overlay Status Text -->
  <rect x="40" y="40" width="320" height="42" rx="8" fill="#0F766E" opacity="0.95"/>
  <text x="200" y="67" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF" text-anchor="middle">AFTER: CERTIFIED RECONDITIONED</text>
  <text x="400" y="540" font-family="Arial, sans-serif" font-size="14" fill="#2DD4BF" text-anchor="middle">Multi-stage decontaminated • Hot-air dried • Pneumatic pressure decay certified</text>
</svg>
`;
fs.writeFileSync(path.join(imgDir, 'carboy-after.svg'), carboyAfterSvg.trim(), 'utf8');

// 3. og-parth-packaging.svg
const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0B1320"/>
  <!-- Decorative Grid Lines -->
  <line x1="100" y1="0" x2="100" y2="630" stroke="#1E293B" stroke-width="1"/>
  <line x1="300" y1="0" x2="300" y2="630" stroke="#1E293B" stroke-width="1"/>
  <line x1="900" y1="0" x2="900" y2="630" stroke="#1E293B" stroke-width="1"/>
  <line x1="1100" y1="0" x2="1100" y2="630" stroke="#1E293B" stroke-width="1"/>
  
  <rect x="100" y="100" width="1000" height="430" rx="16" fill="#111D30" stroke="#0F766E" stroke-width="2"/>
  
  <!-- Brand Header -->
  <g transform="translate(160, 160)">
    <rect width="60" height="60" rx="10" fill="#0F766E"/>
    <text x="30" y="42" font-family="Arial, sans-serif" font-size="34" font-weight="bold" fill="#FFFFFF" text-anchor="middle">P</text>
    <text x="80" y="34" font-family="Arial, sans-serif" font-size="32" font-weight="800" fill="#FFFFFF">PARTH PACKAGING</text>
    <text x="80" y="54" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#14B8A6" letter-spacing="2">INDUSTRIAL RECONDITIONING</text>
  </g>
  
  <!-- Headline -->
  <text x="160" y="300" font-family="Arial, sans-serif" font-size="44" font-weight="800" fill="#FFFFFF">
    World-Class Carboys Reconditioning
  </text>
  <text x="160" y="355" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#38BDF8">
    Certified Industrial Packaging Solutions Across India
  </text>
  
  <!-- Value Props -->
  <g transform="translate(160, 420)">
    <rect width="260" height="48" rx="8" fill="#0B1320" stroke="#334155"/>
    <text x="130" y="30" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#2DD4BF" text-anchor="middle">✓ 100% Leak Tested</text>
    
    <rect x="280" width="280" height="48" rx="8" fill="#0B1320" stroke="#334155"/>
    <text x="420" y="30" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#2DD4BF" text-anchor="middle">✓ Multi-Stage Wash Cycle</text>
    
    <rect x="580" width="280" height="48" rx="8" fill="#0B1320" stroke="#334155"/>
    <text x="720" y="30" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#2DD4BF" text-anchor="middle">✓ 40-55% Cost Savings</text>
  </g>
</svg>
`;
fs.writeFileSync(path.join(imgDir, 'og-parth-packaging.svg'), ogSvg.trim(), 'utf8');

console.log('Finished generating SVG graphics.');
