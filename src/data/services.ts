import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'carboys-reconditioning',
    slug: 'carboys-reconditioning',
    title: 'HDPE Carboys Reconditioning',
    shortDesc: 'Comprehensive industrial refurbishment of high-density polyethylene carboys through automated decanting, multi-stage chemical wash, and pneumatic pressure decay testing.',
    longDesc: 'Our core industrial offering restores used HDPE carboys to pristine packaging standards. Each container undergoes structural inspection, chemical neutralizing washes, contaminant decanting, high-pressure inner jetting, hot-air dehumidification, and 100% leak verification.',
    capacities: ['20 Liters', '25 Liters', '30 Liters', '35 Liters', '50 Liters', '100 Liters'],
    features: [
      'Complete residue decanting and multi-stage neutralizing wash',
      'High-pressure interior 360-degree rotary nozzle jetting',
      'Pneumatic pressure decay leak-tight testing for every unit',
      'Optical inspection for wall thinning, stress crazing, and deformation',
      'Replacement bungs, tamper-evident seals, and EPDM/Viton gaskets',
      'Shrink-wrapped and palletized for safe industrial transit'
    ],
    applications: [
      'Industrial chemical storage & transport',
      'Agrochemical formulations & liquid fertilizers',
      'Paints, resins, primers, and aqueous coatings',
      'Industrial detergents, degreasers & lubricants',
      'Bulk liquid raw materials handling'
    ],
    icon: 'carboy'
  },
  {
    id: 'chemical-decontamination',
    slug: 'chemical-decontamination',
    title: 'Multi-Stage Chemical Decontamination & Wash',
    shortDesc: 'Specialized caustic and acidic wash cycles paired with high-temperature impingement cleaning to completely strip chemical polymers, oils, and residues.',
    longDesc: 'Different liquid products leave distinct chemical coatings inside carboys. Our dedicated washing stations utilize tailored wash chemistry (alkaline degreasing followed by neutralizing acidic flushes and demineralized hot rinses) to ensure containers are chemically inert before reuse.',
    capacities: ['All container sizes from 10L to 200L'],
    features: [
      'Tailored detergent chemistry formulated for specific residue types',
      'Multi-stage temperature-controlled wash cycles (60°C - 85°C)',
      'pH testing of final rinse water to verify total neutralization',
      'High-volume hot air drying to remove any trace moisture condensation',
      'Environmentally responsible closed-loop wastewater treatment'
    ],
    applications: [
      'Solvent and resin container cleaning',
      'Surfactant and detergent residue removal',
      'Oily and lubricant film stripping',
      'Dye and pigment container restoration'
    ],
    icon: 'wash'
  },
  {
    id: 'bung-cap-replacement',
    slug: 'bung-cap-replacement',
    title: 'Cap, Bung & Gasket Refurbishment',
    shortDesc: 'Fitment of brand-new closures, breather valves, tamper-evident caps, and chemical-resistant gaskets to guarantee absolute containment during transit.',
    longDesc: 'Reconditioned carboys are only as reliable as their sealing components. Parth Packaging replaces worn bungs with high-torque, virgin polymer caps, microporous venting membranes where required, and durable gasket materials (EPDM, Viton, or PTFE) to prevent transport leaks.',
    capacities: ['Standard DIN 51, DIN 61, DIN 71 closures', 'Wide-mouth threads'],
    features: [
      'New virgin-grade HDPE bungs and screw closures',
      'Pressure relief & degassing breather valve options',
      'Induction heat-seal foil or tamper-evident tear rings',
      'Torque-calibrated sealing to prevent thread stripping',
      'Gasket materials compatible with aggressive liquids'
    ],
    applications: [
      'Volatile or gas-generating liquid packaging',
      'Hazardous & non-hazardous chemical transport',
      'Export-bound liquid container preparation'
    ],
    icon: 'seal'
  },
  {
    id: 'bulk-reverse-logistics',
    slug: 'bulk-reverse-logistics',
    title: 'Bulk Collection & Reverse Logistics Support',
    shortDesc: 'Organized inbound collection of empty used carboys from manufacturing plants and customer sites across key Indian industrial corridors.',
    longDesc: 'Managing empty container return can be a logistical headache for manufacturing units. Parth Packaging coordinates batch pickups, manifests, transit inspection, and bulk delivery of refurbished carboys back to your production plants on scheduled dispatch cycles.',
    capacities: ['Minimum batch sizes: 50 units', 'Full Truckload (FTL) / Less than Truckload (LTL)'],
    features: [
      'Scheduled plant pickups across Maharashtra, Gujarat and adjacent zones',
      'Manifest documentation and inward batch count verification',
      'Transit strapping and palletized container handling',
      'Dedicated account management for ongoing monthly packaging cycles',
      'Prompt turnaround to prevent production floor packaging bottlenecks'
    ],
    applications: [
      'Closed-loop packaging exchange programs',
      'Multi-plant packaging pooling and reclamation',
      'Contract reconditioning for high-volume liquid formulators'
    ],
    icon: 'truck'
  }
];
