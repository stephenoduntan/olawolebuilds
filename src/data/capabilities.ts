export interface CapabilityDomain {
  id: string;
  index: string;
  title: string;
  tagline: string;
  focusAreas: string[];
  toolsAndStack: string[];
  deliverables: string[];
}

export const capabilities: CapabilityDomain[] = [
  {
    id: 'product-ux',
    index: '01',
    title: 'Product & UX Architecture',
    tagline: 'Transforming ambiguous, complex operational problems into intuitive, clear, and sustainable digital flows.',
    focusAreas: [
      'Information Architecture & Taxonomy Structuring',
      'Complex B2B & Enterprise Journey Mapping',
      'User Research, Contextual Inquiries & Heuristic Audits',
      'High-Fidelity Interactive Wireframing & Clickable Prototypes',
      'Cognitive Load Reduction & Error Recovery Flows'
    ],
    toolsAndStack: ['Figma', 'FigJam', 'Miro', 'UserTesting', 'Whimsical', 'Notion'],
    deliverables: ['System Architecture Maps', 'User Journey Blueprints', 'Validated Interactive Prototypes', 'UX Audit Reports']
  },
  {
    id: 'design-systems',
    index: '02',
    title: 'Design Systems & UI Engineering',
    tagline: 'Bridging design decisions directly into clean, scalable, and tokenized component architectures.',
    focusAreas: [
      'Multi-Tier Design Token Pipelines (Color, Spacing, Typography, Radii)',
      'Figma Component Architecture & Variant Property Sets',
      'WCAG AA/AAA Accessibility & Contrast Compliance',
      'Design System Documentation & Governance',
      'Component Library Versioning & Handoff Specifications'
    ],
    toolsAndStack: ['Figma Tokens (Tokens Studio)', 'Style Dictionary', 'Storybook', 'Git', 'CSS Variables'],
    deliverables: ['Production Design Token Sets', 'Comprehensive Component Libraries', 'Accessibility Guidelines', 'Design-to-Code Schemas']
  },
  {
    id: 'frontend-production',
    index: '03',
    title: 'Front-End Production Implementation',
    tagline: 'Writing clean, accessible, and high-performance production code with zero layout jank.',
    focusAreas: [
      'Modern React (Hooks, Context, Memoization, State Machines)',
      'Tailwind CSS Utility Architecture & Modular Custom Classes',
      'GSAP & ScrollTrigger High-Performance Motion Systems',
      'Core Web Vitals Optimization (LCP < 1.2s, CLS = 0, INP < 100ms)',
      'Responsive Fluid Layouts & Mobile-First Ergonomics'
    ],
    toolsAndStack: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Vite', 'Next.js', 'Git / GitHub'],
    deliverables: ['Production Web Applications', 'Accessible Interactive Interfaces', 'Zero-Jank Micro-Interactions', 'Automated Build Pipelines']
  }
];
