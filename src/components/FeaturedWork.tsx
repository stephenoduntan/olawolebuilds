import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Layers, ChevronRight, ExternalLink } from 'lucide-react';
import { caseStudies, CaseStudy } from '../data/caseStudies';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface FeaturedWorkProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectCaseStudy }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.work-card');

      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 28,
          duration: 0.65,
          ease: 'power2.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-24 sm:py-32 hairline-border-b bg-canvas-base"
      aria-label="Featured Case Studies and Systems"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                // Index of Selected Work & Case Studies
              </span>
              <span className="h-px w-12 bg-accent/40" />
            </div>
            <h2 className="fluid-h2 font-display font-bold text-canvas-heading tracking-tight">
              Evidence-Led Product Case Studies
            </h2>
          </div>
          <p className="text-canvas-muted text-sm max-w-md leading-relaxed">
            Every case study articulates the core operational friction, information architecture decisions, 
            design token governance, and production front-end implementation.
          </p>
        </div>

        {/* Project List: Numbered Editorial Grid */}
        <div className="space-y-12">
          {caseStudies.map((project) => (
            <article
              key={project.id}
              className="work-card group relative rounded-2xl bg-canvas-card hairline-border hover:border-hairline-bright transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left Content Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  
                  {/* Top Metadata */}
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-semibold text-accent px-2.5 py-0.5 rounded bg-accent/10 border border-accent/20">
                          {project.index}
                        </span>
                        <span className="text-xs font-mono text-canvas-muted">
                          {project.year}
                        </span>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-canvas-elevated text-canvas-muted hairline-border">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Role */}
                    <h3 className="fluid-h3 font-display font-bold text-canvas-heading mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-canvas-muted mb-6 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-accent" />
                      <span>{project.role}</span>
                    </p>

                    {/* Problem & Solution Context */}
                    <p className="text-canvas-body text-sm leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Quantifiable Outcomes / Metrics Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-canvas-elevated/70 hairline-border mb-6">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="font-mono text-base font-bold text-canvas-heading">
                            {metric.value}
                          </span>
                          <span className="text-[11px] font-mono text-canvas-muted tracking-tight">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-mono rounded bg-canvas-base/80 text-canvas-muted border border-hairline/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-hairline">
                    <button
                      onClick={() => onSelectCaseStudy(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-canvas-heading text-canvas-base text-xs font-semibold hover:bg-white transition-all shadow-md active:scale-[0.98]"
                    >
                      <span>Read Deep Case Study</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-canvas-elevated hover:bg-canvas-card text-canvas-muted hover:text-canvas-heading text-xs font-medium hairline-border transition-colors"
                      >
                        <span>Live Product</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </div>

                {/* Right Visual / Architecture Preview with Accessible Alt Text */}
                <div
                  onClick={() => onSelectCaseStudy(project)}
                  className="lg:col-span-5 bg-canvas-elevated relative min-h-[280px] lg:min-h-full cursor-pointer overflow-hidden border-t lg:border-t-0 lg:border-l border-hairline group-hover:bg-canvas-raised transition-colors flex items-center justify-center p-6"
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
                  
                  {/* Clean Visual Frame */}
                  <div className="relative w-full h-full max-h-[380px] rounded-lg overflow-hidden hairline-border shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                    <img
                      src={project.previewImage}
                      alt={`${project.title} — ${project.category} user interface architecture and component layout`}
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                    
                    {/* Informative Architectural Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-canvas-base/95 via-canvas-base/20 to-transparent flex items-end p-4">
                      <div className="w-full flex items-center justify-between text-xs font-mono text-white/90 bg-canvas-card/85 backdrop-blur-md px-3 py-2 rounded-md hairline-border">
                        <span className="truncate pr-2">Case Study {project.index}: {project.title}</span>
                        <span className="inline-flex items-center gap-1 text-accent shrink-0">
                          Inspect UX <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
