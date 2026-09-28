import { CaseStudyItem } from '../types';

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'specialty-chemicals-vapi',
    title: '46% Packaging Cost Reduction for Specialty Chemical Manufacturer in Vapi',
    clientIndustry: 'Specialty Chemicals & Surfactants',
    region: 'Vapi Industrial Zone, Gujarat',
    challenge: 'The client was purchasing over 2,500 new virgin 50L HDPE carboys every month to distribute surfactant concentrates. Rising virgin polymer prices severely squeezed their profit margins, while accumulated empty containers at customer sites caused disposal complaints.',
    solution: 'Parth Packaging instituted a closed-loop collection and reconditioning program. We established scheduled weekly reverse logistics pickups, implemented a specialized multi-stage degreasing wash cycle for surfactant residues, fitted brand-new tamper-evident closures, and delivered certified leak-tested containers on a rolling schedule.',
    results: {
      costSaved: '46% Annual Packaging Spend Saved',
      turnaround: '5-Day Rolling Batch Exchange',
      wasteDiverted: '30+ Metric Tonnes Virgin HDPE Preserved Annually'
    }
  },
  {
    id: 'industrial-coatings-pune',
    title: 'Zero-Leakage Reconditioning System for High-Viscosity Coating Manufacturer in Pune',
    clientIndustry: 'Industrial Paints & Epoxy Resins',
    region: 'Chakan & Bhosari Industrial Corridor, Pune',
    challenge: 'Used carboys returned with sticky resin coats that conventional local drum cleaners could not strip without damaging the HDPE. High rejection rates and occasional transit leaks from worn bungs threatened client relationships.',
    solution: 'We deployed our heated solvent-assisted wash line and 100% pneumatic pressure decay testing benches. Every unit was fitted with heavy-duty EPDM gaskets and new virgin caps, backed by optical internal inspection.',
    results: {
      costSaved: '39% Reduction in Monthly Container Costs',
      turnaround: '0.0% Transit Leakage Rate Over 18 Months',
      wasteDiverted: '1,800 Containers Reconditioned Per Month'
    }
  },
  {
    id: 'agrochemical-formulator-thane',
    title: 'Seasonal Surge Supply & Decontamination for Crop Protection Formulator',
    clientIndustry: 'Agrochemical Liquid Formulations',
    region: 'Thane-Belapur & Taloja MIDC, Maharashtra',
    challenge: 'During peak agricultural seasons, lead times for new carboys stretched to 4 weeks, delaying critical fertilizer and pesticide dispatches to distributors across central and western India.',
    solution: 'Parth Packaging built a dedicated seasonal reserve inventory of 30L and 50L reconditioned carboys with certified venting breather bungs. Inward empty carboys were processed through our automated wash bays with 48-hour emergency turnaround.',
    results: {
      costSaved: '42% Packaging Cost Savings',
      turnaround: '48-Hour Rapid Replenishment Guarantee',
      wasteDiverted: 'Zero Dispatch Delays During Peak Kharif Sowing'
    }
  }
];
