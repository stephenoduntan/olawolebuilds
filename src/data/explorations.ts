export interface Exploration {
  id: string;
  number: string;
  title: string;
  category: string;
  problemExplored: string;
  behaviorRationale: string;
  techStack: string[];
  interactiveType: 'magnetic' | 'accordion' | 'dock' | 'tokens' | 'scrubber' | 'stepper';
}

export const explorations: Exploration[] = [
  {
    id: 'magnetic-pill',
    number: 'EXP-01',
    title: 'Kinetic Magnetic Action Anchor',
    category: 'Cursor Physics & Micro-Affordance',
    problemExplored: 'Standard CTA buttons feel static and detached from pointer movement on high-precision desktop screens, failing to signal readiness.',
    behaviorRationale: 'Uses GSAP quickTo tracking pointer velocity within a 90px proximity field with spring recovery. A secondary counter-offset on the label creates parallax depth without jitter.',
    techStack: ['React', 'GSAP quickTo', 'Vector Math'],
    interactiveType: 'magnetic'
  },
  {
    id: 'fluid-accordion',
    number: 'EXP-02',
    title: 'Zero-Jank Structural Disclosure',
    category: 'Layout Mechanics & Accordion Flow',
    problemExplored: 'Standard height: auto CSS transitions either snap abruptly or cause awkward layout recalculations that drop frames on mobile browsers.',
    behaviorRationale: 'Calculates exact scrollHeight in a RAF pass, orchestrating a synchronized height expansion and stagger-fade on inner content blocks while preserving keyboard accessibility.',
    techStack: ['React', 'GSAP autoHeight', 'Semantic ARIA'],
    interactiveType: 'accordion'
  },
  {
    id: 'spring-dock',
    number: 'EXP-03',
    title: 'Proximity Spring Tool Dock',
    category: 'Navigation & Spatial Ergonomics',
    problemExplored: 'Compact icon toolbars in complex creative or analytics software cause high target miss rates without wasting massive permanent screen real estate.',
    behaviorRationale: 'Applies a Gaussian falloff curve to scale nearby icons based on cursor distance. Smoothly reallocates horizontal flex spacing with instant spring snap-back upon pointer leave.',
    techStack: ['React', 'GSAP Context', 'Gaussian Scaling'],
    interactiveType: 'dock'
  },
  {
    id: 'token-morpher',
    number: 'EXP-04',
    title: 'Live Design Token Density Switcher',
    category: 'Design Systems & UI Engineering',
    problemExplored: 'Enterprise applications must support both high-density data desks (traders, dispatchers) and spacious touch screens without branching the component library.',
    behaviorRationale: 'Directly mutates scoped CSS custom properties (--spacing-density, --radius-ui, --font-scale) with smooth transitional easing, demonstrating fluid token inheritance.',
    techStack: ['React', 'CSS Custom Properties', 'Tokens'],
    interactiveType: 'tokens'
  },
  {
    id: 'metric-scrubber',
    number: 'EXP-05',
    title: 'Kinetic Time-Series KPI Scrubber',
    category: 'Data Visualization & Momentum',
    problemExplored: 'Static metric cards show aggregate numbers but fail to convey velocity, acceleration, and historical inflection points to decision makers.',
    behaviorRationale: 'Provides a drag-and-scrub interaction that interpolates live metrics with smooth number rolling and reactive sparkline indicator tracking using GSAP ticker synchronization.',
    techStack: ['React', 'GSAP Draggable Math', 'SVG Paths'],
    interactiveType: 'scrubber'
  },
  {
    id: 'stepper-reveal',
    number: 'EXP-06',
    title: 'Spatial Multi-Step Transition Rail',
    category: 'Checkout & Transaction Flows',
    problemExplored: 'Multi-screen wizards cause mental disorientation when previous steps disappear with hard cutoffs, increasing checkout abandonment.',
    behaviorRationale: 'Maintains horizontal spatial continuity through directional clip-path wipes and synchronized step indicators, keeping the user anchored in their progression.',
    techStack: ['React', 'GSAP ClipPath', 'Keyboard Focus'],
    interactiveType: 'stepper'
  }
];
