export interface CaseStudy {
  id: string;
  slug: string;
  index: string; // '01', '02', etc.
  title: string;
  client: string;
  year: string;
  category: string;
  role: string;
  summary: string;
  metrics: { label: string; value: string }[];
  problem: string;
  friction: string[];
  architecture: { title: string; description: string }[];
  frontEndExecution: string[];
  tradeoffs: string[];
  outcomes: string[];
  stack: string[];
  liveUrl?: string;
  prototypeUrl?: string;
  previewImage: string;
  accent: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'sahara-centre',
    slug: 'sahara-centre',
    index: '01',
    title: 'The Sahara Centre',
    client: 'The Sahara Centre for Cultural & Socio-Economic Impact',
    year: '2025 – 2026',
    category: 'Institutional Knowledge & Research Database',
    role: 'Experience Designer & Visual Developer',
    summary: 'Restructured institutional knowledge into a high-performance, searchable research platform. Re-engineered information architecture and taxonomy to cut resource discovery friction for policy researchers across West Africa.',
    metrics: [
      { label: 'Resource Discovery', value: '+64%' },
      { label: 'Avg Retrieval Time', value: '-42s' },
      { label: 'Document Downloads', value: '18k+' },
      { label: 'Lighthouse Score', value: '98/100' }
    ],
    problem: 'The Sahara Centre produces vital socio-economic toolkits, sector research, and cultural policy case studies. However, legacy content fragmentation made discovering and referencing deep research nearly impossible on mobile devices and low-bandwidth connections.',
    friction: [
      'Unstructured PDF silos: Hundreds of high-value policy whitepapers were buried in unstructured archives.',
      'Cognitive overload: Academic readers experienced high search fatigue when seeking specific research subsets.',
      'Mobile bandwidth bottlenecks: Heavy unoptimized document previews stalled downloads on mobile network connections in Nigeria and West Africa.'
    ],
    architecture: [
      {
        title: 'Taxonomic Knowledge Architecture',
        description: 'Structured custom content entities mapping research disciplines, document types, publication dates, and regional policy tags into a two-level indexed taxonomy.'
      },
      {
        title: 'Instant Filter & Search Index',
        description: 'Designed a zero-latency client-side search and faceted filter interface that operates seamlessly with zero page reloads and keyboard-navigable shortcuts.'
      },
      {
        title: 'Editorial Typography & Spatial Rhythm',
        description: 'Crafted an intellectual, minimalist dark/light editorial grid emphasizing readability, generous margins, and WCAG AAA contrast ratios for long-form study.'
      }
    ],
    frontEndExecution: [
      'Engineered modular custom UI components with strict semantic HTML landmarks (<main>, <article>, <aside>).',
      'Implemented progressive document streaming and asynchronous PDF payload chunking for low-bandwidth resilience.',
      'Added keyboard shortcuts (`/` to focus research index, `Esc` to reset filters, arrow keys to cycle results).',
      'Applied GSAP micro-reveals with layout stability checks to eliminate Cumulative Layout Shift (CLS: 0.00).'
    ],
    tradeoffs: [
      'Prioritized fast text-first content scans over elaborate splash imagery to protect first-input latency on 3G/4G connections.',
      'Limited deep modal nesting in favor of direct inline disclosure accordions for research methodology notes.'
    ],
    outcomes: [
      '64% increase in research toolkit downloads within the first 90 days post-launch.',
      'Average user time-to-resource reduced from 68 seconds down to 26 seconds.',
      'Institutional adoption across civil society organizations and academic research libraries.'
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Figma Systems', 'Taxonomy Architecture', 'Performance Optimization'],
    liveUrl: 'https://thesaharacentre.org',
    previewImage: 'https://framerusercontent.com/images/BMGEhz1v99V9mqI3nmem0L06I.png?scale-down-to=1024',
    accent: '#ff5c00'
  },
  {
    id: 'kargoplex',
    slug: 'kargoplex',
    index: '02',
    title: 'Kargoplex',
    client: 'Kargoplex Logistics Technologies',
    year: '2025',
    category: 'B2B Freight Logistics & Tracking System',
    role: 'Lead Product Designer & UI Architect',
    summary: 'Transformed dense B2B freight logistics into a unified digital operations workspace. Streamlined multi-tier shipper and forwarder journeys, cutting quote booking cycle times by 38%.',
    metrics: [
      { label: 'Booking Cycle', value: '-38%' },
      { label: 'Quote Completion', value: '+52%' },
      { label: 'Exception Resolution', value: '3.2x faster' },
      { label: 'Active Forwarders', value: '450+' }
    ],
    problem: 'Freight forwarding across emerging markets involves chaotic email threads, manual waybill calculations, and fragmented milestone tracking across land, sea, and air corridors. Shippers faced zero end-to-end visibility.',
    friction: [
      'Multi-tenant cognitive friction: Shippers, customs brokers, and forwarders each needed radically different data views from the exact same shipment record.',
      'Dense data fatigue: Critical customs hold alerts were getting lost within walls of raw shipment coordinates.',
      'Error-prone multi-step bookings: High form abandon rate due to rigid validation and unrecoverable draft states.'
    ],
    architecture: [
      {
        title: 'Role-Adaptive Workspace Matrix',
        description: 'Separated UI layers into high-level status monitors for shippers and dense, keyboard-driven operational consoles for freight operators.'
      },
      {
        title: 'Contextual Exception Timeline',
        description: 'Designed a live milestone progression rail highlighting customs clearance flags, demurrage risks, and GPS telemetry updates in real-time.'
      },
      {
        title: 'Modular Design Token Pipeline',
        description: 'Built a shared design token system spanning color semantics, density scales (compact vs comfortable), and tabular typography.'
      }
    ],
    frontEndExecution: [
      'Created custom virtualized data tables rendering 1,000+ active freight consignments with zero frame drops.',
      'Engineered optimistic UI updates with rollback states for shipment status transitions and tag assignments.',
      'Crafted interactive GSAP timeline scrubbing visualizing cargo movement across multi-modal shipping legs.',
      'Ensured WCAG AA compliance across dark mode control rooms with strict minimum 4.5:1 text-to-background contrast.'
    ],
    tradeoffs: [
      'Chose dense tabular density over airy whitespace for freight operations screens to maximize above-the-fold consignment visibility.',
      'Restricted animated card flippers to maintain instant data scanning for fast-paced logistics dispatchers.'
    ],
    outcomes: [
      'Cut booking cycle time from 14 minutes down to 8.5 minutes per consignment.',
      '52% increase in digital quote-to-booked conversion over phone/email alternatives.',
      'Zero catastrophic data entry errors recorded during 6-month pilot rollout.'
    ],
    stack: ['React', 'Tailwind CSS', 'TypeScript', 'GSAP', 'Figma Tokens', 'Information Architecture', 'Design Systems'],
    liveUrl: 'https://kargoplex.com',
    previewImage: 'https://framerusercontent.com/images/UKp0meAn5h0EUtXhMA7YiSWEzw.png',
    accent: '#3b82f6'
  },
  {
    id: 'cloudrock',
    slug: 'cloudrock',
    index: '03',
    title: 'Cloudrock',
    client: 'Cloudrock Technologies',
    year: '2024 – 2025',
    category: 'Enterprise Cloud Infrastructure & SaaS Platform',
    role: 'Principal UX/UI Designer & Front-End Developer',
    summary: 'Redesigned the digital footprint for an enterprise cloud and ERP solutions provider. Translated distributed computing and custom software offerings into clear, benefit-driven product tiers that increased qualified inbound leads by 47%.',
    metrics: [
      { label: 'Inbound Leads', value: '+47%' },
      { label: 'Time on Page', value: '3m 12s' },
      { label: 'Bounce Rate', value: '-29%' },
      { label: 'Demo Conversions', value: '2.4x' }
    ],
    problem: 'Cloudrock offered high-capability cloud services, ERP migrations, and custom systems engineering, but their legacy digital presence was choked by dense technical jargon and failed to communicate concrete business ROI to enterprise CTOs.',
    friction: [
      'Jargon paralysis: Enterprise decision makers could not immediately match their operational challenges with Cloudrock services.',
      'Opaque pricing & scope: Prospective clients were reluctant to initiate contact without clear visibility into engagement frameworks.',
      'Weak visual authority: The visual system failed to reflect the enterprise-grade stability and security of the underlying engineering.'
    ],
    architecture: [
      {
        title: 'Solution-First Visual Architecture',
        description: 'Organized navigation around customer operational stages (Migration, Optimization, Security, Scalability) rather than internal team divisions.'
      },
      {
        title: 'Interactive Cloud ROI Calculator',
        description: 'Designed a lightweight interactive estimator allowing prospective clients to calculate infrastructure cost savings before booking a call.'
      },
      {
        title: 'Precision Dark Editorial Canvas',
        description: 'Implemented an obsidian canvas with refined geometric hairline grids, subtle status glows, and crisp typographic hierarchy.'
      }
    ],
    frontEndExecution: [
      'Built reactive architecture using componentized React hooks and Tailwind CSS utility tokens.',
      'Developed buttery smooth ScrollTrigger narrative sequences highlighting serverless transitions and data security protocols.',
      'Created accessible form flows with real-time field validation, draft persistence, and anti-spam protection.',
      'Optimized asset delivery pipeline to achieve under 0.8s First Contentful Paint (FCP) across global CDN nodes.'
    ],
    tradeoffs: [
      'Replaced heavy 3D WebGL server room models with lightweight SVG vector animations and GSAP path morphs to save 4.2MB in bundle payload.',
      'Used explicit technical tooltips rather than hiding complex definitions behind external documentation links.'
    ],
    outcomes: [
      '47% lift in qualified B2B enterprise demonstration requests within 60 days of launch.',
      'Site bounce rate dropped by 29% across organic and direct referral traffic.',
      'Recognized by regional enterprise tech benchmarks for design craft and interaction fidelity.'
    ],
    stack: ['React', 'Tailwind CSS', 'GSAP ScrollTrigger', 'UI Engineering', 'Content Strategy', 'Design Systems'],
    liveUrl: 'https://cloudrock.io',
    previewImage: 'https://framerusercontent.com/images/rV1akeuWdH2kyEIWtE2GVFmc.png',
    accent: '#10b981'
  },
  {
    id: 'geken',
    slug: 'geken',
    index: '04',
    title: 'Geken Network',
    client: 'Geken Digital Asset Exchange',
    year: '2024',
    category: 'Crypto Exchange & Web3 Trading Interface',
    role: 'Lead UX Designer & Interaction Engineer',
    summary: 'Crafted a security-first, high-clarity trading interface for a multi-asset cryptocurrency platform. Balanced complex order-book mechanics with intuitive onboarding for both novice and high-frequency traders.',
    metrics: [
      { label: 'Trade Execution Err', value: '-81%' },
      { label: 'User Retention', value: '+43%' },
      { label: 'Avg Session Depth', value: '8.4 pages' },
      { label: 'System Trust Rating', value: '4.8 / 5.0' }
    ],
    problem: 'Cryptocurrency trading platforms often overwhelm users with blinking numbers, fragmented order slips, and anxiety-inducing confirmations that lead to costly user execution errors.',
    friction: [
      'Slippage anxiety: Users frequently aborted market orders due to confusing fee structures and unpredictable gas/spread estimates.',
      'Order slip clutter: Mixing limit, stop-loss, and market orders into a single dense box caused repeated erroneous trades.',
      'Weak security transparency: Security confirmations felt mechanical rather than reassuring, lowering platform trust.'
    ],
    architecture: [
      {
        title: 'Cognitive Calm Trading Workspace',
        description: 'Isolated high-velocity market data into dedicated modular docks, preventing visual blinking from hijacking trader attention.'
      },
      {
        title: 'Two-Tier Order Confirmation Safety',
        description: 'Engineered an interactive confirmation mechanic showing net cost, max slippage, and estimated execution speed before order execution.'
      },
      {
        title: 'Adaptive Data Density',
        description: 'Built a dual-mode interface allowing users to toggle between "Simple Swap" and "Advanced Terminal" without losing current order context.'
      }
    ],
    frontEndExecution: [
      'Implemented zero-latency order book components using memoized React render trees and CSS transform rendering.',
      'Crafted tactile GSAP feedback micro-interactions for biometric authentication and order fills.',
      'Designed a responsive mobile web interface matching native app speed and gesture ergonomics.',
      'Enforced WCAG AAA contrast for financial numbers (green profit/red loss indicators paired with directional geometric glyphs).'
    ],
    tradeoffs: [
      'Enforced a mandatory 1.5s review delay on high-slippage market orders, choosing financial user safety over instant sub-second trigger speed.',
      'Limited flashy token price particles in order to preserve device battery life on mobile OLED screens.'
    ],
    outcomes: [
      '81% decrease in user-reported erroneous order executions during live trading sessions.',
      '43% improvement in 30-day user retention compared to the benchmark industry average.',
      'Platform achieved a 4.8/5.0 user trust and security rating across 5,000+ early access traders.'
    ],
    stack: ['React', 'Tailwind CSS', 'GSAP', 'TypeScript', 'Web3 Architecture', 'Design Tokens', 'User Research'],
    liveUrl: 'https://geken.network',
    previewImage: 'https://framerusercontent.com/images/gI9ImUwEFip2axRkcDuZdXExggY.png',
    accent: '#8b5cf6'
  }
];
