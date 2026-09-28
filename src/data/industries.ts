import { IndustryItem } from '../types';

export const industriesData: IndustryItem[] = [
  {
    id: 'chemicals',
    slug: 'chemical-industry',
    title: 'Chemicals & Specialty Formulations',
    badge: 'Core Industry',
    shortDesc: 'Industrial grade reconditioned carboys tested for chemical resistance, structural wall integrity, and zero cross-contamination.',
    overview: 'Chemical manufacturers consume thousands of carboys monthly. Virgin packaging represents a major cost driver. Our multi-stage alkaline and acidic wash systems ensure zero carryover of prior liquids, while rigorous leak-testing protects your products against transit spills.',
    typicalContainers: ['30L & 50L Narrow Mouth HDPE Carboys', 'Wide Mouth 50L Containers', 'Jerry Cans 20L - 25L'],
    challengesSolved: [
      'Elimination of cross-contamination between chemical batches',
      'Dramatic 40-50% reduction in packaging procurement expense',
      'Reliable supply buffer during peak manufacturing cycles'
    ],
    complianceNotes: 'Container suitability verified per chemical compatibility guidelines. Not intended for food or pharmaceutical active ingredient direct contact unless explicitly designated.'
  },
  {
    id: 'agrochemicals',
    slug: 'agrochemicals-fertilizers',
    title: 'Agrochemicals & Crop Protection',
    badge: 'High Volume',
    shortDesc: 'Sturdy, pressure-tested containers capable of handling emulsifiable concentrates, liquid nutrients, and pesticide suspensions.',
    overview: 'Agrochemical liquids often have strong aromatic residues and active suspensions. We apply specialized solvent degreasing and hot water neutralization to strip organic residues, refitting each carboy with durable EPDM gaskets and breather caps to prevent pressure swelling in warm warehouse conditions.',
    typicalContainers: ['20L, 30L & 50L Heavy-Duty Carboys with venting bungs'],
    challengesSolved: [
      'Prevention of container bulging or collapse via breather-cap refitment',
      'Safe handling of residue during de-sludging and washing',
      'High-speed batch turnaround during monsoon sowing seasons'
    ],
    complianceNotes: 'Rigid inspection ensures no micro-cracking around handle stress points or container corners.'
  },
  {
    id: 'paints-coatings',
    slug: 'paints-resins-coatings',
    title: 'Paints, Resins & Industrial Coatings',
    badge: 'Viscous Residues',
    shortDesc: 'High-temperature wash protocols that effectively strip sticky resins, latex emulsions, pigment binders, and paint vehicles.',
    overview: 'Paints and polymer resins adhere tenaciously to HDPE interior surfaces. Standard washing cannot clean them. Our processing facility employs heated chemical soaking and high-impact rotary wash heads that physically strip cured resin films, returning the interior to a clean, usable condition.',
    typicalContainers: ['30L & 50L Wide-Mouth and Standard HDPE Carboys'],
    challengesSolved: [
      'Stripping of cured resin and latex residues without damaging HDPE polymer',
      'Thorough drying to eliminate moisture in water-sensitive solvent systems',
      'Consistent supply of cost-effective packaging for secondary grades'
    ],
    complianceNotes: 'Every carboy is internally inspected with optical endoscopes to verify total film removal.'
  },
  {
    id: 'lubricants',
    slug: 'industrial-oils-lubricants',
    title: 'Industrial Oils & Metalworking Fluids',
    badge: 'Oil Stripping',
    shortDesc: 'Heavy-duty degreasing cycles removing petroleum oils, hydraulic fluids, gear compounds, and soluble cutting oils.',
    overview: 'Oil-contaminated carboys require specialized emulsification and detergent technology. We utilize dedicated alkaline degreasers followed by steam-assisted flushes that dissolve oil films completely, preventing viscosity alteration or haze in subsequent liquid fillings.',
    typicalContainers: ['20L, 25L, 35L & 50L HDPE Square & Round Carboys'],
    challengesSolved: [
      'Removal of oily slicks and stubborn petroleum hydrocarbon layers',
      'Zero oil sheen in final wash rinse test',
      'Supply of clean, ready-to-fill containers for industrial fluid blenders'
    ],
    complianceNotes: 'Rinse water clarity inspected prior to drying and release.'
  },
  {
    id: 'manufacturing',
    slug: 'general-manufacturing',
    title: 'Manufacturing & Industrial Processing',
    badge: 'Circular Economy',
    shortDesc: 'Closed-loop container return programs for industrial cleaners, coolants, effluent treatment chemicals, and process liquids.',
    overview: 'Modern manufacturing plants generate vast quantities of empty carboys from water treatment, electroplating, floor cleaning, and machinery maintenance. Parth Packaging establishes circular reconditioning loops, collecting empty drums and returning them certified clean and ready for reuse.',
    typicalContainers: ['20L to 100L HDPE Containers & Jerry Cans'],
    challengesSolved: [
      'Drastic reduction of factory scrap clutter and container disposal costs',
      'Support for corporate waste minimization and ESG packaging reuse targets',
      'Predictable monthly packaging supply with standardized pricing'
    ],
    complianceNotes: 'Helps manufacturers avoid single-use plastic disposal issues.'
  }
];
