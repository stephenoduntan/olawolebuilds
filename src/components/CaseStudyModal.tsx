import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, ArrowUpRight, ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, Cpu, Sliders, ExternalLink } from 'lucide-react';
import { CaseStudy, caseStudies } from '../data/caseStudies';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onSelectStudy: (study: CaseStudy) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose, onSelectStudy }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Entrance and exit GSAP animation
  useEffect(() => {
    if (!study) return;

    // Lock body scroll while modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (!prefersReducedMotion && modalRef.current && contentRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          modalRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
        gsap.fromTo(
          contentRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', delay: 0.05 }
        );
      });

      return () => {
        document.body.style.overflow = originalOverflow;
        ctx.revert();
      };
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [study, prefersReducedMotion]);

  if (!study) return null;

  // Find next project
  const currentIndex = caseStudies.findIndex((c) => c.id === study.id);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
  const prevStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-canvas-base/90 backdrop-blur-xl flex justify-center p-0 sm:p-4 md:p-6 lg:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        ref={contentRef}
        className="relative w-full max-w-5xl bg-canvas-card rounded-none sm:rounded-2xl hairline-border shadow-2xl overflow-hidden my-auto min-h-screen sm:min-h-0 flex flex-col"
      >
        {/* Sticky Control Header */}
        <div className="sticky top-0 z-30 bg-canvas-card/95 backdrop-blur-md px-6 py-4 hairline-border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
              {study.index}
            </span>
            <span className="font-mono text-xs text-canvas-muted hidden sm:inline">
              {study.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-canvas-elevated hover:bg-canvas-raised text-canvas-heading text-xs font-mono hairline-border transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5 text-accent" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-md bg-canvas-elevated hover:bg-canvas-raised text-canvas-muted hover:text-white transition-colors hairline-border"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Case Study Body */}
        <div className="p-6 sm:p-10 md:p-12 space-y-16">
          
          {/* Header Title Area */}
          <div>
            <div className="font-mono text-xs text-accent tracking-wider uppercase mb-2">
              Deep UX & Architecture Case Study
            </div>
            <h1 id="modal-project-title" className="fluid-h2 font-display font-extrabold text-canvas-heading mb-4">
              {study.title}
            </h1>
            <p className="text-canvas-muted text-base leading-relaxed max-w-3xl mb-8">
              {study.summary}
            </p>

            {/* Metadata Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-canvas-elevated hairline-border text-xs font-mono">
              <div>
                <span className="text-canvas-subtle block text-[10px] uppercase">Client / Org</span>
                <span className="text-canvas-heading font-medium">{study.client}</span>
              </div>
              <div>
                <span className="text-canvas-subtle block text-[10px] uppercase">Timeline</span>
                <span className="text-canvas-heading font-medium">{study.year}</span>
              </div>
              <div>
                <span className="text-canvas-subtle block text-[10px] uppercase">Role Owned</span>
                <span className="text-canvas-heading font-medium">{study.role}</span>
              </div>
              <div>
                <span className="text-canvas-subtle block text-[10px] uppercase">Verification</span>
                <span className="text-accent-emerald font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Production Ready
                </span>
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div>
            <div className="font-mono text-xs text-canvas-muted uppercase tracking-wider mb-4">
              // Measured Product Impact
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {study.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-canvas-elevated/80 hairline-border flex flex-col justify-between">
                  <span className="font-mono text-2xl font-bold text-accent mb-1">{m.value}</span>
                  <span className="font-mono text-xs text-canvas-muted">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="rounded-xl overflow-hidden hairline-border bg-canvas-elevated p-4 sm:p-8 flex items-center justify-center">
            <img
              src={study.previewImage}
              alt={`${study.title} full architecture interface`}
              className="w-full max-h-[500px] object-cover rounded-lg hairline-border shadow-2xl"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Section 1: Problem Context & User Friction */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-hairline">
            <div className="md:col-span-4">
              <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-2">01 / Friction</span>
              <h3 className="text-xl font-display font-bold text-canvas-heading mb-2">The Problem & Operational Friction</h3>
              <p className="text-xs text-canvas-muted">What broke down before the redesign and why standard assumptions failed.</p>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-canvas-body text-sm leading-relaxed">
                {study.problem}
              </p>
              <div className="space-y-3">
                <span className="font-mono text-xs text-canvas-subtle uppercase tracking-wider block">Observed Friction Points:</span>
                {study.friction.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-canvas-elevated hairline-border text-xs text-canvas-body">
                    <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Architecture & Design Decisions */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-hairline">
            <div className="md:col-span-4">
              <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-2">02 / Decisions</span>
              <h3 className="text-xl font-display font-bold text-canvas-heading mb-2">System Architecture & UX Strategy</h3>
              <p className="text-xs text-canvas-muted">Core architectural paradigms implemented to eliminate cognitive bottlenecks.</p>
            </div>
            <div className="md:col-span-8 space-y-4">
              {study.architecture.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-canvas-elevated hairline-border">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-accent font-semibold">0{idx + 1}.</span>
                    <h4 className="font-display font-semibold text-canvas-heading text-sm">{item.title}</h4>
                  </div>
                  <p className="text-canvas-muted text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Front-End Build Execution */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-hairline">
            <div className="md:col-span-4">
              <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-2">03 / Engineering</span>
              <h3 className="text-xl font-display font-bold text-canvas-heading mb-2">Front-End Execution & Performance</h3>
              <p className="text-xs text-canvas-muted">Component engineering, accessibility hooks, and rendering optimizations.</p>
            </div>
            <div className="md:col-span-8 space-y-3">
              {study.frontEndExecution.map((spec, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-canvas-elevated/70 hairline-border text-xs text-canvas-body font-mono">
                  <Cpu className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
              <div className="flex flex-wrap gap-2 pt-2">
                {study.stack.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-[11px] font-mono rounded bg-canvas-base text-canvas-muted border border-hairline">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Trade-offs & Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-hairline">
            <div className="md:col-span-4">
              <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-2">04 / Trade-offs</span>
              <h3 className="text-xl font-display font-bold text-canvas-heading mb-2">Trade-offs & Measured Outcomes</h3>
              <p className="text-xs text-canvas-muted">Intentional sacrifices made for clarity and business validation.</p>
            </div>
            <div className="md:col-span-8 space-y-6">
              <div>
                <span className="font-mono text-xs text-canvas-subtle uppercase tracking-wider block mb-3">Deliberate Trade-offs:</span>
                <div className="space-y-2">
                  {study.tradeoffs.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-canvas-muted">
                      <Sliders className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-mono text-xs text-canvas-subtle uppercase tracking-wider block mb-3">Validated Outcomes:</span>
                <div className="space-y-2">
                  {study.outcomes.map((o, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-canvas-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald shrink-0 mt-0.5" />
                      <span>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Next / Previous Project Navigation */}
          <div className="pt-12 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => onSelectStudy(prevStudy)}
              className="inline-flex items-center gap-2 text-xs font-mono text-canvas-muted hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Prev: {prevStudy.title}</span>
            </button>

            <button
              onClick={() => onSelectStudy(nextStudy)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-xs font-mono font-medium transition-colors shadow-sm"
            >
              <span>Next Case Study: {nextStudy.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
