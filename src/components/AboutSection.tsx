import React from 'react';
import { Compass, CheckCircle2, Shield, HeartHandshake, Eye, Sparkles } from 'lucide-react';
import { useLagosTime } from '../hooks/useLagosTime';
import { CANONICAL_AVAILABILITY } from '../data/caseStudies';

export const AboutSection: React.FC = () => {
  const lagosTime = useLagosTime();

  const philosophies = [
    {
      title: 'Intentionality Over Novelty',
      desc: 'Every layout decision, spacing token, and motion curve must serve human task completion. If an animation does not improve comprehension, it is removed.'
    },
    {
      title: 'Usability First',
      desc: 'Aesthetic elegance is an outcome of rigorous usability, predictable hierarchy, and cognitive calm—never superficial surface decoration.'
    },
    {
      title: 'Design for Recovery',
      desc: 'Real users make mistakes and networks drop packets. Great architecture provides transparent status, undo states, and non-destructive paths.'
    },
    {
      title: 'Design-to-Code Scalability',
      desc: 'Design systems must live in production code. By matching Figma tokens directly to CSS custom properties and React props, interfaces scale without friction.'
    }
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 hairline-border-b bg-canvas-base relative"
      aria-label="About Olawole Oduntan"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            // Personal Background & Philosophy
          </span>
          <span className="h-px w-12 bg-accent/40" />
        </div>
        <h2 className="fluid-h2 font-display font-bold text-canvas-heading tracking-tight mb-16">
          Architectural Intent & Philosophy
        </h2>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Authentic Bio */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-display font-bold text-canvas-heading">
              Hi, I’m Olawole Oduntan (Stephen Oduntan).
            </h3>
            
            <p className="text-canvas-body text-sm leading-relaxed">
              I am a digital product designer and front-end developer based in Lagos, Nigeria. 
              Over the last several years, I have worked at the intersection of UX/UI architecture, 
              scalable design systems, and production web engineering—helping startups, NGOs, and enterprise 
              firms transform complicated technical domains into frictionless digital products.
            </p>

            <p className="text-canvas-muted text-sm leading-relaxed">
              My core conviction is that the best digital products are built when design and engineering 
              do not speak through fragmented handoffs, but collaborate through a unified architectural language. 
              I design in Figma with production constraints in mind, and I build in React with obsessive 
              attention to typographic hierarchy, accessible semantic landmarks, and 60fps interaction polish.
            </p>

            <div className="p-5 rounded-xl bg-canvas-card hairline-border space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-canvas-muted">
                <span className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-accent" />
                  <span>Base of Operations</span>
                </span>
                <span className="text-canvas-heading">Lagos, Nigeria (WAT)</span>
              </div>
              <div className="flex items-center justify-between text-canvas-muted">
                <span>Lagos Station Clock</span>
                <span className="text-accent-emerald">{lagosTime.formatted}</span>
              </div>
              <div className="flex items-center justify-between text-canvas-muted">
                <span>Availability Status</span>
                <span className="text-accent font-medium">{CANONICAL_AVAILABILITY}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="font-mono text-xs text-canvas-subtle uppercase tracking-wider mb-2">
              Core Principles I Build By:
            </div>

            {philosophies.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-canvas-card hairline-border hover:border-hairline-bright transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-xs text-accent font-semibold">0{idx + 1}.</span>
                  <h4 className="font-display font-semibold text-canvas-heading text-sm">{p.title}</h4>
                </div>
                <p className="text-canvas-muted text-xs leading-relaxed pl-5">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
