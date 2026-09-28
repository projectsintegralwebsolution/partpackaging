const fs = require('fs');
const path = require('path');

function write(relPath, content) {
  const fullPath = path.join(__dirname, '..', relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
  console.log('Created: ' + relPath);
}

// 1. src/config/site.ts
write('src/config/site.ts', 
export const siteConfig = {
  name: 'Parth Packaging',
  legalName: 'Parth Packaging India Pvt. Ltd. [Placeholder]',
  domain: 'https://parthpackaging.com',
  tagline: 'Industrial Carboys Reconditioning Solutions Built for Pan-India Scale',
  description: 'Parth Packaging provides certified industrial carboys reconditioning, multi-stage chemical decontamination, pneumatic leak testing, and sustainable packaging lifecycle management across India.',
  phone: '+91-8010708622',
  phoneClean: '+918010708622',
  whatsapp: '918010708622',
  whatsappMessage: 'Hello Parth Packaging team, I would like to inquire about industrial carboys reconditioning services.',
  email: 'pratapbhanushali23@yahoo.com',
  supportEmail: 'info@parthpackaging.com',
  address: {
    street: '[REAL INDUSTRIAL PLOT / MIDC / GIDC ESTATE PLACEHOLDER]',
    city: 'Thane / Navi Mumbai / Vapi Industrial Belt',
    state: 'Maharashtra / Gujarat',
    pincode: '400001',
    country: 'India'
  },
  operatingHours: 'Mon - Sat: 8:30 AM - 7:00 PM IST',
  social: {
    linkedin: 'https://linkedin.com/company/parthpackaging',
    twitter: 'https://x.com/parthpackaging'
  },
  meta: {
    themeColor: '#0B1320',
    accentColor: '#0F766E',
    ogImage: '/images/og-parth-packaging.png'
  },
  keyAdvantages: [
    {
      title: '40% - 55% Cost Reduction',
      desc: 'Substantial packaging expenditure savings compared to purchasing new virgin HDPE carboys, directly lowering unit operational costs.'
    },
    {
      title: '100% Pneumatic Leak Tested',
      desc: 'Every single reconditioned unit undergoes pressure decay verification to guarantee leak-proof integrity for liquids and dangerous goods.'
    },
    {
      title: 'Multi-Stage Chemical Decontamination',
      desc: 'Alkaline neutralization, high-pressure hot water jetting, and high-temp drying ensure zero residue and high chemical purity.'
    },
    {
      title: 'Pan-India Reverse Logistics',
      desc: 'Organized bulk collection and dispatch logistics serving manufacturing hubs across Maharashtra, Gujarat, South India, and North India.'
    }
  ]
};
);

// 2. src/types/index.ts
write('src/types/index.ts', 
export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  capacities: string[];
  features: string[];
  applications: string[];
  icon: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  badge: string;
  shortDesc: string;
  overview: string;
  typicalContainers: string[];
  challengesSolved: string[];
  complianceNotes: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  technicalDetails: string[];
  qualityGate: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Logistics' | 'Quality';
}

export interface CaseStudyItem {
  id: string;
  title: string;
  clientIndustry: string;
  region: string;
  challenge: string;
  solution: string;
  results: {
    costSaved: string;
    turnaround: string;
    wasteDiverted: string;
  };
}

export interface LocationHub {
  slug: string;
  name: string;
  state: string;
  keyIndustrialAreas: string[];
  servicesAvailable: string[];
  logisticsCapabilities: string;
  turnaroundTime: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  contentHtml: string;
  author: string;
}

export interface QuotePayload {
  name: string;
  company: string;
  mobile: string;
  email: string;
  city: string;
  state: string;
  containerType: string;
  capacity: string;
  quantity: string;
  chemicalResidue?: string;
  pickupRequired?: string;
  message?: string;
}
);

console.log('Finished writing config and types.');
