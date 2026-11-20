import React from 'react';
import { Layout, Palette, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';
import { capabilities } from '../data/capabilities';

interface CapabilitiesProps {
  onOpenInquiry: () => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onOpenInquiry }) => {
  const getIcon = (index: string) => {
    switch (index) {
      case '01':
        return <Layout className="w-5 h-5 text-accent" />;
      case '02':
        return <Palette className="w-5 h-5 text-accent" />;
      default:
        return <Terminal className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section
      id="capabilities"
      className="py-24 sm:py-32 hairline-border-b bg-canvas-base"
      aria-label="Capabilities and How I Work"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                // Disciplines & Production Matrix
              </span>
              <span className="h-px w-12 bg-accent/40" />
            </div>
            <h2 className="fluid-h2 font-display font-bold text-canvas-heading tracking-tight">
              Capabilities & Craft Architecture
            </h2>
          </div>
          <p className="text-canvas-muted text-sm max-w-md leading-relaxed">
            Bridging intentional product thinking, systematic Figma token governance, and production-grade React engineering without loss of fidelity.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="p-6 sm:p-8 rounded-2xl bg-canvas-card hairline-border hover:border-hairline-bright transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-lg bg-canvas-elevated hairline-border">
                    {getIcon(cap.index)}
                  </div>
                  <span className="font-mono text-xs font-semibold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                    {cap.index}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-canvas-heading mb-3">
                  {cap.title}
                </h3>
                <p className="text-xs text-canvas-muted leading-relaxed mb-6">
                  {cap.tagline}
                </p>

                {/* Focus Areas List */}
                <div className="space-y-2.5 mb-8">
                  <span className="font-mono text-[11px] text-canvas-subtle uppercase tracking-wider block">
                    Core Focus:
                  </span>
                  {cap.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-canvas-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Deliverables & Stack */}
              <div className="pt-6 border-t border-hairline space-y-4">
                <div>
                  <span className="font-mono text-[10px] text-canvas-subtle uppercase tracking-wider block mb-2">
                    Key Deliverables:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.deliverables.map((d) => (
                      <span
                        key={d}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-canvas-elevated text-canvas-muted hairline-border"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-canvas-subtle uppercase tracking-wider block mb-2">
                    Tools & Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.toolsAndStack.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-canvas-base text-accent/80 border border-hairline"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-canvas-card via-canvas-elevated to-canvas-card hairline-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-canvas-heading text-base">
              Need a bespoke product designer who writes production front-end?
            </h4>
            <p className="text-xs text-canvas-muted">
              Available for select Q1/Q2 enterprise consulting, design system buildouts, and contract roles.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white text-xs font-mono font-medium transition-all shadow-md active:scale-[0.98] shrink-0"
          >
            <span>Discuss Engagement Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
