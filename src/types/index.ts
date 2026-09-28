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
  category: 'General' | 'Process' | 'Logistics' | 'Quality' | string;
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
