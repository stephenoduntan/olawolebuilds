export interface NoteItem {
  id: string;
  slug: string;
  date: string;
  readTime: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
}

export const notes: NoteItem[] = [
  {
    id: 'friction-paradox',
    slug: 'the-friction-paradox',
    date: 'OCT 2025',
    readTime: '5 min read',
    title: 'The Friction Paradox: Why Fewer Clicks Don’t Always Mean Better UX',
    category: 'UX Philosophy',
    excerpt: 'The obsession with "one-click everything" has created hazardous interfaces in fintech, logistics, and healthcare. Here is when intentional friction saves users from disaster.',
    content: [
      'For the last decade, product design dogmas preached a single metric: eliminate friction at all costs. Every click was treated as friction, every modal as failure. But in complex systems—cryptocurrency transactions, freight waybill dispatches, or medical dosages—zero friction is reckless.',
      'Intentional friction introduces cognitive pauses at irreversible decision points. When a user is about to execute a trade with 3.8% slippage, an extra deliberate confirmation step is not an obstacle; it is a seatbelt.',
      'The secret lies in distinguishing "accidental friction" (bad navigation, hidden buttons, unclear wording) from "protective friction" (double-entry validation, impact previews, and intentional delay timers). Great UX architecture eliminates the former while strategically engineering the latter.'
    ]
  },
  {
    id: 'design-systems-engineers',
    slug: 'design-systems-for-engineers',
    date: 'AUG 2025',
    readTime: '6 min read',
    title: 'Design Systems for Engineers Who Dread Figma Files',
    category: 'Design Systems',
    excerpt: 'How bridging Figma tokens directly into semantic CSS custom properties and Tailwind tokens eliminates 90% of designer-developer friction.',
    content: [
      'Engineers don’t hate design systems; they hate ambiguity. When a designer hands over a mock with 27 slightly different shades of gray and arbitrary 13px padding, the engineering team loses trust in the system.',
      'By defining mathematical token scales for spacing (4px, 8px, 12px, 16px, 24px, 32px), strict typography clamps, and semantic color aliases (canvas-base, surface-card, hairline-border), both design and code speak the exact same language.',
      'When tokens compile automatically from Figma to JSON to Tailwind configuration, designers can refine aesthetic subtleties without breaking production layouts, and engineers can build without guessing hex codes.'
    ]
  },
  {
    id: 'zero-jank-motion',
    slug: 'zero-jank-gsap-react',
    date: 'MAY 2025',
    readTime: '7 min read',
    title: 'Building Zero-Jank Micro-Interactions with GSAP & React',
    category: 'Front-End Engineering',
    excerpt: 'Why raw CSS transitions stumble on dynamic heights, why bulky runtime physics packages drop frames, and how GSAP context guarantees rock-solid 60fps animations.',
    content: [
      'Web animation is easy to build poorly and hard to engineer well. Many modern websites ship megabytes of runtime physics libraries that hijack the browser thread, causing stutters and layout shifts during fast scrolling.',
      'GSAP provides unmatched precision because it bypasses React reconciliation bottlenecks for high-frequency updates using transform and opacity properties on the GPU compositor thread.',
      'By utilizing gsap.context() inside React effects, every timeline, scroll trigger, and event listener is safely scoped and cleaned up upon component unmount, preventing memory leaks and ghost triggers.',
      'Most importantly: always honor prefers-reduced-motion. High craft means respecting user neurological comfort and device capability first.'
    ]
  }
];
