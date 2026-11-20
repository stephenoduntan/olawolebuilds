import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MousePointer, ChevronDown, Sparkles, Sliders, Layers, ArrowRight, Check } from 'lucide-react';
import { explorations } from '../data/explorations';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export const MotionLab: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // 1. Magnetic Pill State & Refs
  const magneticBtnRef = useRef<HTMLButtonElement>(null);
  const magneticTextRef = useRef<HTMLSpanElement>(null);

  const handleMagneticMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion || !magneticBtnRef.current || !magneticTextRef.current) return;
    const rect = magneticBtnRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    gsap.to(magneticBtnRef.current, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.3,
      ease: 'power2.out'
    });
    gsap.to(magneticTextRef.current, {
      x: x * 0.15,
      y: y * 0.15,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMagneticLeave = () => {
    if (prefersReducedMotion || !magneticBtnRef.current || !magneticTextRef.current) return;
    gsap.to([magneticBtnRef.current, magneticTextRef.current], {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.4)'
    });
  };

  // 2. Fluid Accordion State & Refs
  const [accordionOpen, setAccordionOpen] = useState(false);
  const accordionContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion || !accordionContentRef.current) return;
    if (accordionOpen) {
      gsap.fromTo(
        accordionContentRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.45, ease: 'power2.out' }
      );
    } else {
      gsap.to(accordionContentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: 'power2.inOut'
      });
    }
  }, [accordionOpen, prefersReducedMotion]);

  // 3. Proximity Dock State
  const dockIcons = ['Cursor', 'Layers', 'Grid', 'Sliders', 'Terminal'];
  const [hoveredDockIndex, setHoveredDockIndex] = useState<number | null>(null);

  // 4. Token Density Switcher
  const [tokenDensity, setTokenDensity] = useState<'compact' | 'comfortable' | 'spacious'>('comfortable');

  return (
    <section
      id="playground"
      ref={containerRef}
      className="py-24 sm:py-32 hairline-border-b bg-canvas-base relative scroll-mt-12"
      aria-label="Playground and Interactive Motion Lab"
    >
      {/* Anchor alias for #lab */}
      <div id="lab" className="absolute -top-12 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                // Playground & Interaction Lab
              </span>
              <span className="h-px w-12 bg-accent/40" />
            </div>
            <h2 className="fluid-h2 font-display font-bold text-canvas-heading tracking-tight">
              Interactive Component & Motion Mechanics
            </h2>
          </div>
          <p className="text-canvas-muted text-sm max-w-md leading-relaxed">
            Focused React + GSAP micro-interactions exploring ergonomic friction, layout mechanics, 
            and design tokens. Every exploration pairs an active playground with its behavioral rationale.
          </p>
        </div>

        {/* Explorations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* EXP-01: Magnetic Action Pill */}
          <div className="p-6 sm:p-8 rounded-2xl bg-canvas-card hairline-border flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                  EXP-01
                </span>
                <span className="font-mono text-xs text-canvas-muted">
                  Cursor Proximity & Physics
                </span>
              </div>
              <h3 className="text-lg font-display font-bold text-canvas-heading mb-2">
                Kinetic Magnetic Action Anchor
              </h3>
              <p className="text-xs text-canvas-body mb-6">
                Resolves static CTA detachment on high-precision pointer displays with spring-damped proximity tracking.
              </p>
            </div>

            {/* Interactive Stage */}
            <div className="h-44 rounded-xl bg-canvas-elevated/70 hairline-border flex items-center justify-center relative overflow-hidden mb-6 p-4">
              <button
                ref={magneticBtnRef}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                className="relative px-6 py-3 rounded-full bg-canvas-base hairline-border hover:border-accent text-canvas-heading text-xs font-mono font-medium shadow-xl cursor-pointer flex items-center gap-2"
                aria-label="Interactive magnetic button study"
              >
                <span ref={magneticTextRef} className="flex items-center gap-2 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  <span>Hover Across Boundary</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent" />
                </span>
              </button>
            </div>

            {/* Architectural Rationale */}
            <div className="p-4 rounded-xl bg-canvas-elevated hairline-border space-y-2 text-xs">
              <div>
                <span className="font-mono text-[10px] text-accent uppercase tracking-wider block">Problem Explored:</span>
                <p className="text-canvas-muted text-[11px] leading-relaxed">
                  Flat buttons feel physically numb on pointer approach, requiring conscious motor targeting from users.
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-canvas-subtle uppercase tracking-wider block">Behavior Rationale:</span>
                <p className="text-canvas-muted text-[11px] leading-relaxed">
                  Subtle GSAP velocity tracking pulls the element gently toward cursor center; spring dampening restores coordinates without disorienting layout flow.
                </p>
              </div>
            </div>
          </div>

          {/* EXP-02: Zero-Jank Fluid Disclosure */}
          <div className="p-6 sm:p-8 rounded-2xl bg-canvas-card hairline-border flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                  EXP-02
                </span>
                <span className="font-mono text-xs text-canvas-muted">
                  Layout Mechanics
                </span>
              </div>
              <h3 className="text-lg font-display font-bold text-canvas-heading mb-2">
                Zero-Jank Structural Disclosure
              </h3>
              <p className="text-xs text-canvas-body mb-6">
                Orchestrates dynamic height transitions with zero Cumulative Layout Shift (CLS) or frame dropping.
              </p>
            </div>

            {/* Interactive Stage */}
            <div className="min-h-[176px] rounded-xl bg-canvas-elevated/70 hairline-border p-4 flex flex-col justify-center mb-6">
              <div className="rounded-lg bg-canvas-base hairline-border overflow-hidden">
                <button
                  onClick={() => setAccordionOpen(!accordionOpen)}
                  className="w-full px-4 py-3 text-left flex items-center justify-between text-xs font-mono text-canvas-heading hover:bg-canvas-card/80 transition-colors"
                  aria-expanded={accordionOpen}
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-accent" />
                    <span>Inspect Token Specification Matrix</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-canvas-muted transition-transform duration-300 ${
                      accordionOpen ? 'rotate-180 text-accent' : ''
                    }`}
                  />
                </button>
                <div
                  ref={accordionContentRef}
                  className="overflow-hidden"
                  style={{ height: 0, opacity: 0 }}
                >
                  <div className="p-4 border-t border-hairline bg-canvas-card/40 space-y-2 text-xs font-mono">
                    <div className="flex justify-between text-canvas-muted text-[11px]">
                      <span>Surface Base</span>
                      <span className="text-accent">#08090b (Deep Obsidian)</span>
                    </div>
                    <div className="flex justify-between text-canvas-muted text-[11px]">
                      <span>Hairline Stroke</span>
                      <span className="text-canvas-heading">rgba(255,255,255,0.08)</span>
                    </div>
                    <div className="flex justify-between text-canvas-muted text-[11px]">
                      <span>Typographic Clamp</span>
                      <span className="text-accent-emerald">clamp(2rem, 5vw, 4.5rem)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Architectural Rationale */}
            <div className="p-4 rounded-xl bg-canvas-elevated hairline-border space-y-2 text-xs">
              <div>
                <span className="font-mono text-[10px] text-accent uppercase tracking-wider block">Problem Explored:</span>
                <p className="text-canvas-muted text-[11px] leading-relaxed">
                  Native CSS cannot cleanly animate to height: auto without jump cuts or forcing expensive full-page reflows.
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-canvas-subtle uppercase tracking-wider block">Behavior Rationale:</span>
                <p className="text-canvas-muted text-[11px] leading-relaxed">
                  Measures DOM scrollHeight via GSAP and applies power2 easing with opacity pairing for a smooth 60fps mechanical slide.
                </p>
              </div>
            </div>
          </div>

          {/* EXP-03: Proximity Spring Tool Dock */}
          <div className="p-6 sm:p-8 rounded-2xl bg-canvas-card hairline-border flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                  EXP-03
                </span>
                <span className="font-mono text-xs text-canvas-muted">
                  Spatial Navigation
                </span>
              </div>
              <h3 className="text-lg font-display font-bold text-canvas-heading mb-2">
                Proximity Spring Tool Dock
              </h3>
              <p className="text-xs text-canvas-body mb-6">
                Dynamic Gaussian scaling expanding hit-targets on cursor approach without ballooning static layout width.
              </p>
            </div>

            {/* Interactive Stage */}
            <div className="h-44 rounded-xl bg-canvas-elevated/70 hairline-border flex items-center justify-center mb-6 p-4">
              <div className="inline-flex items-center gap-2 p-2 rounded-2xl bg-canvas-base hairline-border shadow-2xl">
                {dockIcons.map((label, idx) => {
                  let scale = 1;
                  if (hoveredDockIndex !== null) {
                    const dist = Math.abs(hoveredDockIndex - idx);
                    if (dist === 0) scale = 1.35;
                    else if (dist === 1) scale = 1.15;
                  }

                  return (
                    <button
                      key={label}
                      onMouseEnter={() => setHoveredDockIndex(idx)}
                      onMouseLeave={() => setHoveredDockIndex(null)}
                      style={{
                        transform: `scale(${scale})`,
                        transition: 'transform 0.18s cubic-bezier(0.2, 0, 0, 1)'
                      }}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono text-[11px] hairline-border transition-colors ${
                        hoveredDockIndex === idx
                          ? 'bg-accent text-white border-accent shadow-lg shadow-accent/25'
                          : 'bg-canvas-card text-canvas-muted hover:text-canvas-heading'
                      }`}
                      aria-label={`Tool dock item ${label}`}
                    >
                      {label.substring(0, 2).toUpperCase()}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Architectural Rationale */}
            <div className="p-4 rounded-xl bg-canvas-elevated hairline-border space-y-2 text-xs">
              <div>
                <span className="font-mono text-[10px] text-accent uppercase tracking-wider block">Problem Explored:</span>
                <p className="text-canvas-muted text-[11px] leading-relaxed">
                  Compact toolbars lead to mis-clicks in dense workflow applications like Figma and data consoles.
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-canvas-subtle uppercase tracking-wider block">Behavior Rationale:</span>
                <p className="text-canvas-muted text-[11px] leading-relaxed">
                  Gaussian proximity distribution magnifies the primary target and cushions adjacent elements to prevent jitter.
                </p>
              </div>
            </div>
          </div>

          {/* EXP-04: Live Design Token Density Morpher */}
          <div className="p-6 sm:p-8 rounded-2xl bg-canvas-card hairline-border flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                  EXP-04
                </span>
                <span className="font-mono text-xs text-canvas-muted">
                  Design Systems & Tokens
                </span>
              </div>
              <h3 className="text-lg font-display font-bold text-canvas-heading mb-2">
                Live Design Token Density Morpher
              </h3>
              <p className="text-xs text-canvas-body mb-6">
                Dynamic CSS variable interpolation switching between dense operator tables and comfortable touch targets.
              </p>
            </div>

            {/* Interactive Stage */}
            <div className="min-h-[176px] rounded-xl bg-canvas-elevated/70 hairline-border p-4 flex flex-col justify-center mb-6">
              {/* Density Controls */}
              <div className="flex items-center gap-1.5 p-1 rounded-lg bg-canvas-base hairline-border mb-4 self-start">
                {(['compact', 'comfortable', 'spacious'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setTokenDensity(mode)}
                    className={`px-3 py-1 rounded-md text-[11px] font-mono capitalize transition-all ${
                      tokenDensity === mode
                        ? 'bg-accent text-white font-medium'
                        : 'text-canvas-muted hover:text-canvas-heading'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              {/* Reactive Card based on token */}
              <div
                className={`rounded-lg bg-canvas-base hairline-border transition-all duration-300 ${
                  tokenDensity === 'compact'
                    ? 'p-2 text-xs'
                    : tokenDensity === 'comfortable'
                    ? 'p-4 text-sm'
                    : 'p-6 text-base'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono font-medium text-canvas-heading">
                    Consignment #KP-8942
                  </span>
                  <span className="font-mono text-[11px] text-accent px-2 py-0.5 rounded bg-accent/10">
                    Status: En Route
                  </span>
                </div>
                <div className="text-canvas-muted text-[11px] font-mono mt-1">
                  Active Spacing Token: <span className="text-white">{tokenDensity === 'compact' ? '8px (Dense)' : tokenDensity === 'comfortable' ? '16px (Std)' : '24px (Relaxed)'}</span>
                </div>
              </div>
            </div>

            {/* Architectural Rationale */}
            <div className="p-4 rounded-xl bg-canvas-elevated hairline-border space-y-2 text-xs">
              <div>
                <span className="font-mono text-[10px] text-accent uppercase tracking-wider block">Problem Explored:</span>
                <p className="text-canvas-muted text-[11px] leading-relaxed">
                  Design systems usually fork into separate web and mobile variants instead of unified mathematical tokens.
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-canvas-subtle uppercase tracking-wider block">Behavior Rationale:</span>
                <p className="text-canvas-muted text-[11px] leading-relaxed">
                  Modulates token variables dynamically, proving how a unified design-to-code architecture handles multiple viewports.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
