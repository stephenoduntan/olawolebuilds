# olawolebuilds.com — Personal Portfolio & Engineering Architecture

The personal portfolio and engineering showcase for **Olawole Oduntan (Stephen Oduntan)**, Digital Product Designer and Front-End Developer based in Lagos, Nigeria. Built from scratch with **React 18**, **Tailwind CSS**, and **GSAP (ScrollTrigger)** for deployment to `https://olawolebuilds.com`.

---

## 1. Role & Positioning

- **Identity**: Olawole Oduntan (Stephen Oduntan)
- **Base of Operations**: Lagos, Nigeria (`6.5244° N, 3.3792° E`, West Africa Time / GMT+1)
- **Discipline**: Digital Product Design, UX/UI Architecture, Design Systems, and Front-End Production Engineering.
- **Design Philosophy**: High craft, clarity, and usability first. Intentional interaction and zero layout jank over gimmicky 3D effects that obscure content.

---

## 2. Design System & Visual Direction

Synthesized from reference benchmarks (*timmadeit.com*, *wildyriftian.com*, *emishovictor.com*, *hellodani.co*, *anuragrankja.com*):

### Color & Surface System (Dark Obsidian Canvas)
- **Base Canvas (`bg-canvas-base`)**: `#08090b` — Deep charcoal/obsidian for low-fatigue reading and contrast.
- **Raised Surfaces (`bg-canvas-raised`, `bg-canvas-card`)**: `#0e1115` & `#101319` — High-clarity elevated cards.
- **Hairline Borders (`border-hairline`)**: `rgba(255, 255, 255, 0.08)` / `0.16` — Crisp 1px geometric grid borders.
- **Signature Accent (`text-accent`, `bg-accent`)**: `#ff5c00` — Restrained cadmium/solar amber used purposefully for active index markers, status badges, and primary CTAs.
- **Status Indicator (`bg-accent-emerald`)**: `#10b981` — Live availability indicator and station clock pulse.
- **High-Contrast Typography**: `#f3f4f6` (Headings), `#d1d5db` (Body copy), `#8b949e` (Secondary metadata). WCAG AA/AAA compliant.

### Typography Hierarchy & Fluid Clamping
- **Display / Grotesk**: `Plus Jakarta Sans` & `Inter` with fluid `clamp(2.25rem, 5.5vw + 1rem, 5rem)` scaling.
- **Body**: `Inter` for optimal reading rhythm and legibility.
- **Monospace**: `JetBrains Mono` for index numbers (`01`, `02`, `03`...), technical tags, spatial coordinates, and Lagos wall-clock telemetry.

---

## 3. Information Architecture & Key Sections

1. **Minimal Header & Navigation (`Header.tsx`)**:
   - Monogram brand mark (`OB` / `olawolebuilds.com` / `Olawole Oduntan`).
   - Clean navigation links: `Work`, `Lab`, `Capabilities`, `Notes`, `About`.
   - Live Lagos station time clock (`LOS HH:MM:SS AM/PM WAT`) with active status pulse.
   - Primary "Start Project" action button and mobile responsive drawer toggle.

2. **Hero Section (`Hero.tsx`)**:
   - Authoritative value proposition: *"Designing intentional systems. Engineering interfaces that scale."*
   - Subheadline positioning design systems and front-end production code.
   - Primary CTA to explore featured work + secondary CTA to initiate an engagement.
   - Spatial telemetry bar: Lagos coordinates (`6.5244° N, 3.3792° E`), local time, availability status, and core stack.

3. **Featured Case Studies (`FeaturedWork.tsx`)**:
   - Numbered index rhythm (`01`, `02`, `03`, `04`).
   - Project cards featuring role, summary problem/solution, quantifiable metrics badges, stack tags, and live links.
   - Authentic case study data:
     - `01` **The Sahara Centre** (Institutional Knowledge & Research Database)
     - `02` **Kargoplex** (B2B Freight Logistics & Tracking System)
     - `03` **Cloudrock** (Enterprise Cloud Infrastructure & SaaS Platform)
     - `04` **Geken Network** (Crypto Exchange & Digital Asset Trading Interface)

4. **Case Study Detail View (`CaseStudyModal.tsx`)**:
   - Full evidence-led deep dive view accessible directly or via shareable URL (`?project=sahara-centre`).
   - Structured breakdown:
     - **Problem Context & Operational Friction**: Identified bottlenecks and failure modes.
     - **System Architecture & UX Strategy**: Strategic structural paradigms.
     - **Front-End Execution & Performance**: React hook architecture, GSAP scroll triggers, accessibility, zero CLS.
     - **Deliberate Trade-offs**: Intentional sacrifices made for clarity and user safety.
     - **Quantifiable Outcomes**: Production impact metrics.
     - **Next/Prev Project Navigation** & keyboard escape handling.

5. **Interactive UI & Motion Lab (`MotionLab.tsx`)**:
   - Dedicated playground of interactive React + GSAP micro-interactions:
     - `EXP-01`: **Kinetic Magnetic Action Anchor** (Proximity-based cursor tracking with spring dampening).
     - `EXP-02`: **Zero-Jank Structural Disclosure** (Dynamic scrollHeight calculation with cubic-bezier easing).
     - `EXP-03`: **Proximity Spring Tool Dock** (Gaussian magnification expanding target affordance).
     - `EXP-04`: **Live Design Token Density Morpher** (Real-time CSS variable interpolation).
   - Each card includes clear problem exploration and behavioral rationale.

6. **Capabilities Matrix (`Capabilities.tsx`)**:
   - Breakdown across:
     - **Product & UX Architecture**
     - **Design Systems & UI Engineering**
     - **Front-End Production Implementation**
   - Highlighting focus areas, stack, and production deliverables.

7. **Essays & Notes (`NotesSection.tsx`)**:
   - Long-form technical essays and UX architecture reflections:
     - *"The Friction Paradox: Why Fewer Clicks Don't Always Mean Better UX"*
     - *"Design Systems for Engineers Who Dread Figma Files"*
     - *"Building Zero-Jank Micro-Interactions with GSAP & React"*

8. **About Olawole Oduntan (`AboutSection.tsx`)**:
   - Authentic bio and design principles: *Intentionality Over Novelty*, *Usability First*, *Design for Recovery*, and *Design-to-Code Scalability*.

9. **Contact & Inquiries (`ContactSection.tsx` & `InquiryDrawer.tsx`)**:
   - One-click email copy with tactile feedback (`hello@olawolebuilds.com`).
   - Direct Cal.com booking link (`https://cal.com/oocreativ`).
   - Project inquiry scope picker and submission flow.

10. **Footer (`Footer.tsx`)**:
    - Lagos station telemetry, coordinates, copyright, back to top button, and social links (GitHub, LinkedIn, Behance, Dribbble, Instagram).

---

## 4. Motion & GSAP Architecture

- **Scoped Context**: All GSAP animations use `gsap.context()` inside `useEffect` with automatic cleanup (`ctx.revert()`) to prevent ghost triggers and memory leaks.
- **Accessibility & Reduced Motion**: Full adherence to `prefers-reduced-motion: reduce`. When active, all entrance and scrub animations immediately render in their final state with zero delay or translate offset.
- **First Contentful Paint (FCP)**: Above-the-fold hero elements run crisp staggered entrance animations (~0.6s–0.9s total) without blocking DOM rendering.
- **ScrollTrigger Reliability**: Below-the-fold reveals use `start: 'top 85%'` and `toggleActions: 'play none none none'` to ensure content is never trapped at `opacity: 0`.

---

## 5. Development & Build

### Prerequisites
- Node.js `v18+` or `v20+` (tested on Node v22.11.0)
- npm, pnpm, or yarn

### Installation
```bash
npm install
```

### Run Locally (Dev Server)
```bash
npm run dev
```
Starts the Vite dev server at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Typechecks with `tsc` and bundles optimized production assets into `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## 6. Deployment to https://olawolebuilds.com

The build output in `dist/` is completely static and ready for instant deployment on:

- **Vercel**: Import repository, framework preset `Vite`, build command `npm run build`, output directory `dist`.
- **Netlify**: Build command `npm run build`, publish directory `dist`.
- **Cloudflare Pages**: Framework `Vite`, build command `npm run build`, output directory `dist`.

Add custom domain `olawolebuilds.com` in your DNS settings (CNAME or A records) with SSL auto-provisioned.
