import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight, Compass, Calendar, Terminal } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useLagosTime } from '../hooks/useLagosTime';
import { CANONICAL_AVAILABILITY } from '../data/caseStudies';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const lagosTime = useLagosTime();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        opacity: 0,
        y: 16,
        duration: 0.5,
      })
      .from('.hero-title-line', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.12,
      }, '-=0.3')
      .from('.hero-sub', {
        opacity: 0,
        y: 18,
        duration: 0.5,
      }, '-=0.25')
      .from('.hero-cta-group', {
        opacity: 0,
        y: 16,
        duration: 0.5,
      }, '-=0.2')
      .from('.hero-meta-panel', {
        opacity: 0,
        y: 14,
        duration: 0.5,
      }, '-=0.2');
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden hairline-border-b bg-gradient-to-b from-canvas-base via-canvas-base to-canvas-raised/40"
      aria-label="Introduction and positioning"
    >
      {/* Background Subtle Spatial Grid (No Blocking Screen) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl">
          
          {/* Status & Personal Identity Badge */}
          <div className="hero-badge inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-canvas-card hairline-border mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-mono text-xs text-canvas-muted tracking-tight">
              Olawole Oduntan <span className="text-hairline-bright mx-1">|</span> Product Designer & Front-End Developer
            </span>
          </div>

          {/* Value Proposition Headline */}
          <h1 className="fluid-hero font-display font-extrabold text-canvas-heading tracking-tight mb-8">
            <span className="hero-title-line block">
              Designing intentional systems.
            </span>
            <span className="hero-title-line block text-transparent bg-clip-text bg-gradient-to-r from-canvas-heading via-canvas-body to-canvas-muted">
              Engineering interfaces that scale.
            </span>
          </h1>

          {/* Subheadline & Bio Positioning */}
          <p className="hero-sub fluid-body-lg text-canvas-muted font-normal max-w-2xl mb-10 leading-relaxed">
            I am Olawole Oduntan, a digital product designer and front-end developer based in Lagos, Nigeria. 
            I bridge UX/UI architecture, systematic design tokens, and production front-end engineering 
            with high craft, clarity, and usability first.
          </p>

          {/* Action Callouts: Work, Cal.com Booking, and Inquiry */}
          <div className="hero-cta-group flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-canvas-heading hover:bg-white text-canvas-base font-medium text-sm transition-all duration-200 shadow-lg shadow-white/5 active:scale-[0.98]"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="https://cal.com/oocreativ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-canvas-card hover:bg-canvas-elevated text-canvas-heading hairline-border hover:border-accent/50 font-medium text-sm transition-all duration-200 active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-accent" />
              <span>Book a Call (Cal.com)</span>
              <ArrowUpRight className="w-4 h-4 text-canvas-muted" />
            </a>

            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 font-medium text-sm transition-all duration-200 active:scale-[0.98]"
            >
              <span>Start an Engagement</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Spatial / Telemetry Strip */}
          <div className="hero-meta-panel grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-canvas-card/80 backdrop-blur-sm hairline-border text-xs font-mono">
            
            <div className="flex flex-col gap-1 border-r border-hairline/60 pr-2">
              <span className="text-canvas-subtle uppercase tracking-wider text-[10px]">Station Location</span>
              <div className="flex items-center gap-1.5 text-canvas-body font-medium">
                <Compass className="w-3.5 h-3.5 text-accent" />
                <span>Lagos, Nigeria</span>
              </div>
              <span className="text-[10px] text-canvas-muted">6.5244° N, 3.3792° E</span>
            </div>

            <div className="flex flex-col gap-1 border-r border-hairline/60 pr-2">
              <span className="text-canvas-subtle uppercase tracking-wider text-[10px]">Lagos Time Indicator</span>
              <span className="text-canvas-body font-medium">
                {lagosTime.formatted}
              </span>
              <span className="text-[10px] text-canvas-muted">West Africa Time</span>
            </div>

            <div className="flex flex-col gap-1 border-r border-hairline/60 pr-2">
              <span className="text-canvas-subtle uppercase tracking-wider text-[10px]">Availability Status</span>
              <div className="flex items-center gap-1.5 text-accent font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse shrink-0" />
                <span className="truncate">{CANONICAL_AVAILABILITY}</span>
              </div>
              <span className="text-[10px] text-canvas-muted">Single Active Status</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-canvas-subtle uppercase tracking-wider text-[10px]">Core Stack</span>
              <span className="text-canvas-body font-medium truncate">
                React / TS / Tailwind
              </span>
              <span className="text-[10px] text-canvas-muted">GSAP & Design Tokens</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
