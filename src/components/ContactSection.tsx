import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, Calendar, Mail, Send, Sparkles } from 'lucide-react';
import { useLagosTime } from '../hooks/useLagosTime';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Product Design & Front-End',
    message: ''
  });

  const lagosTime = useLagosTime();
  const emailAddress = 'hello@olawolebuilds.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 hairline-border-b bg-canvas-base relative"
      aria-label="Contact and Inquiries"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            // Engagement & Inquiries
          </span>
          <span className="h-px w-12 bg-accent/40" />
        </div>
        <h2 className="fluid-h2 font-display font-bold text-canvas-heading tracking-tight mb-16">
          Let’s Build Something Intentional
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact & Calendar */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-xl font-display font-bold text-canvas-heading mb-3">
                Have a project in mind or looking for design leadership?
              </h3>
              <p className="text-canvas-muted text-sm leading-relaxed">
                I am currently open to select contract engagements, design system architecture sprints, 
                and senior full-time product design / front-end roles globally or remote.
              </p>
            </div>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-canvas-card hairline-border space-y-4">
              <span className="font-mono text-[11px] text-canvas-subtle uppercase tracking-wider block">
                Direct Communication:
              </span>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-canvas-elevated hairline-border">
                <span className="font-mono text-xs sm:text-sm text-canvas-heading truncate">
                  {emailAddress}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md bg-canvas-card hover:bg-canvas-base hairline-border text-xs font-mono text-canvas-muted hover:text-white transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent-emerald" />
                      <span className="text-accent-emerald">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-accent" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Cal.com booking link */}
              <a
                href="https://cal.com/oocreativ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-canvas-elevated hover:bg-canvas-raised hairline-border text-xs font-mono text-canvas-heading hover:text-white transition-all shadow-sm"
              >
                <Calendar className="w-4 h-4 text-accent" />
                <span>Schedule a 30-Min Discovery Call (Cal.com)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-canvas-muted" />
              </a>
            </div>

            {/* Status & Time Detail */}
            <div className="p-4 rounded-xl bg-canvas-card/60 hairline-border text-xs font-mono space-y-2">
              <div className="flex items-center justify-between text-canvas-muted">
                <span>Location Station</span>
                <span className="text-canvas-heading">Lagos, NG (6.52° N, 3.37° E)</span>
              </div>
              <div className="flex items-center justify-between text-canvas-muted">
                <span>Station Clock</span>
                <span className="text-accent-emerald">{lagosTime || 'GMT+1'}</span>
              </div>
              <div className="flex items-center justify-between text-canvas-muted">
                <span>Response Window</span>
                <span className="text-canvas-heading">&lt; 24 Hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-canvas-card hairline-border">
              <div className="font-mono text-xs text-accent uppercase tracking-wider mb-2">
                Project Scope Inquiry
              </div>
              <h3 className="text-lg font-display font-bold text-canvas-heading mb-6">
                Tell me about your product vision
              </h3>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-canvas-elevated hairline-border text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-canvas-heading text-lg">Inquiry Received</h4>
                  <p className="text-xs text-canvas-muted max-w-sm mx-auto leading-relaxed">
                    Thank you! I will review your requirements and respond within 24 business hours to set up our discovery conversation.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="font-mono text-xs text-accent hover:underline pt-2 block mx-auto"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] text-canvas-subtle uppercase tracking-wider block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-lg bg-canvas-elevated hairline-border focus:border-accent text-canvas-heading text-xs font-mono outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] text-canvas-subtle uppercase tracking-wider block">
                        Your Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-canvas-elevated hairline-border focus:border-accent text-canvas-heading text-xs font-mono outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-canvas-subtle uppercase tracking-wider block">
                      Project Engagement Focus
                    </label>
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-canvas-elevated hairline-border focus:border-accent text-canvas-heading text-xs font-mono outline-none transition-colors"
                    >
                      <option value="Product Design & Front-End">Full Product Design & Front-End Build</option>
                      <option value="Design System Architecture">Design System & Token Architecture</option>
                      <option value="UX/UI Redesign & Heuristic Audit">Complex Web Application Redesign</option>
                      <option value="Front-End Engineering (React/Tailwind)">Front-End Production Implementation</option>
                      <option value="Full-Time / Advisory Role">Senior Product Design / Engineering Role</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-canvas-subtle uppercase tracking-wider block">
                      Project Overview & Timeline
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you are building, the current friction, and your target timeline..."
                      className="w-full px-4 py-2.5 rounded-lg bg-canvas-elevated hairline-border focus:border-accent text-canvas-heading text-xs font-mono outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-xs font-mono font-medium transition-all shadow-md active:scale-[0.98]"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
