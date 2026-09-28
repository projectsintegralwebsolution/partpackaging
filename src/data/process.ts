import { ProcessStep } from '../types';

export const processStepsData: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Inward Collection & Receiving',
    subtitle: 'Manifest verification and batch segregation',
    description: 'Used carboys arrive at our staging yard via manifested industrial logistics. Each shipment is inspected for batch volume, container type, prior liquid labels, and physical transit integrity before receiving sign-off.',
    technicalDetails: [
      'Batch tagging with inward tracking codes',
      'Classification by container size (20L, 30L, 50L, 100L)',
      'Segregation by previous chemical contents to prevent cross-contamination in staging'
    ],
    qualityGate: 'Receiving Gate: Unsafe or unidentifiable hazardous containers rejected immediately.',
    icon: 'box-receive'
  },
  {
    stepNumber: '02',
    title: 'Sorting & Physical Inspection',
    subtitle: 'Structural integrity and flaw detection',
    description: 'Every carboy is individually examined by trained inspectors. Containers with deep gouges, stress fractures, excessive wall-thinning, UV brittleness, or severe physical deformities are culled and sent for polymer recycling.',
    technicalDetails: [
      'Wall thickness ultrasonic / optical check',
      'Inspection of handle welds and structural chimes',
      'Thread inspection on container neck for deformation'
    ],
    qualityGate: 'Sorting Gate: Only structurally sound HDPE carboys proceed to washing.',
    icon: 'magnifier'
  },
  {
    stepNumber: '03',
    title: 'Decanting & High-Pressure Chemical Wash',
    subtitle: 'Residual liquid decanting and chemical jetting',
    description: 'Any remaining liquid heel is safely decanted into dedicated containment systems. The container is then mounted on specialized wash rigs equipped with 360-degree rotating high-pressure impingement nozzles deploying alkaline or acidic wash chemistry.',
    technicalDetails: [
      'High-pressure jetting at 80-140 PSI',
      'Heated wash solution (60°C - 75°C) to dissolve stubborn residues',
      'Targeted exterior wash to strip outer dirt, grime, and old labels'
    ],
    qualityGate: 'Wash Gate: Visual verification of interior wall cleanliness under fiber-optic lights.',
    icon: 'spray'
  },
  {
    stepNumber: '04',
    title: 'Neutralization & Demineralized Rinse',
    subtitle: 'Chemical neutralizer and fresh water flush',
    description: 'To guarantee zero chemical carryover, containers undergo a neutralizing flush followed by high-volume fresh water rinsing. This strips all residual cleaning agents, leaving the internal polymer surface chemically inert.',
    technicalDetails: [
      'Neutralization bath to bring pH of effluent to neutral 6.5 - 7.5',
      'High-flow clean water internal purge',
      'Continuous monitoring of wash effluent conductivity and pH'
    ],
    qualityGate: 'Neutrality Gate: pH spot checks on inner surface to ensure complete chemical neutrality.',
    icon: 'neutralize'
  },
  {
    stepNumber: '05',
    title: 'Heated Dehumidification & Hot-Air Drying',
    subtitle: 'Total moisture elimination and vapor evacuation',
    description: 'Moisture inside a chemical carboy can ruin sensitive moisture-reactive formulations. Cleaned carboys are inverted over high-velocity hot air diffusers that circulate filtered, dehumidified air, evaporating all internal water droplets.',
    technicalDetails: [
      'Filtered hot air at 55°C - 65°C',
      '100% moisture-free interior verification',
      'Prevents mold, bacterial film, or chemical reactivity in subsequent fills'
    ],
    qualityGate: 'Drying Gate: Optical hygrometer check confirming zero internal water pockets.',
    icon: 'wind'
  },
  {
    stepNumber: '06',
    title: '100% Pneumatic Leak & Pressure Test',
    subtitle: 'Precision pressure decay and submerge verification',
    description: 'Every single reconditioned carboy is fitted to a pneumatic test bench. The container is pressurized to calibrated test levels and monitored on precision pressure decay gauges. Any microscopic puncture or faulty seal triggers immediate rejection.',
    technicalDetails: [
      'Calibrated pneumatic pressure decay testing',
      'Water immersion bubble test on statistical sample batches',
      'Neck sealing surface integrity check to guarantee leak-tight capping'
    ],
    qualityGate: 'Leak-Test Gate: Zero tolerance for pressure loss. Failed units are immediately shredded.',
    icon: 'gauge'
  },
  {
    stepNumber: '07',
    title: 'Final QC, Cap Fitment & Dispatch Staging',
    subtitle: 'New bungs, tamper wrapping, and palletization',
    description: 'Approved carboys receive brand-new HDPE bungs and gaskets. Units are wiped clean, dust-capped, stacked on standardized pallets, and stretch-wrapped in protective film to protect them from environmental dust during storage and transport.',
    technicalDetails: [
      'Fitment of virgin closures with specified gasket material',
      'Protective poly-stretch wrapping around pallet stacks',
      'Quality release sign-off ready for dispatch across India'
    ],
    qualityGate: 'Dispatch Gate: Final visual sign-off by QC supervisor prior to transport loading.',
    icon: 'shield-check'
  }
];
