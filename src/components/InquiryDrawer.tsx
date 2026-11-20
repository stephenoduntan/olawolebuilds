import React, { useState, useEffect } from 'react';
import { X, Calendar, Copy, Check, Send, ArrowUpRight } from 'lucide-react';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Product Design & UX Architecture',
    budget: '$5k – $15k',
    details: ''
  });

  const email = 'hello@olawolebuilds.com';

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-canvas-base/85 backdrop-blur-md flex justify-end animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
    >
      <div className="relative w-full max-w-xl min-h-screen bg-canvas-card hairline-border-l shadow-2xl p-6 sm:p-10 flex flex-col justify-between animate-in slide-in-from-right duration-300">
        
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-hairline mb-8">
            <div>
              <span className="font-mono text-xs text-accent uppercase tracking-wider block">
                Initiate Project
              </span>
              <h2 id="drawer-title" className="text-xl font-display font-bold text-canvas-heading">
                Start an Engagement
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-md bg-canvas-elevated hover:bg-canvas-raised text-canvas-muted hover:text-white hairline-border transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Schedule Booking Option */}
          <div className="mb-8 p-4 rounded-xl bg-canvas-elevated hairline-border space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-canvas-heading font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                <span>Prefer an instant meeting?</span>
              </span>
              <a
                href="https://cal.com/oocreativ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-accent hover:underline"
              >
                <span>Book 30-min call</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Direct Form */}
          {submitted ? (
            <div className="p-8 rounded-xl bg-canvas-elevated hairline-border text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-canvas-heading text-lg">Thank You</h3>
              <p className="text-xs text-canvas-muted leading-relaxed">
                Your message has been received. I will review your project details and get back to you within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-md bg-accent text-white text-xs font-mono font-medium"
              >
                Close Drawer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="font-mono text-[11px] text-canvas-subtle uppercase tracking-wider block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-canvas-elevated hairline-border focus:border-accent text-canvas-heading text-xs font-mono outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[11px] text-canvas-subtle uppercase tracking-wider block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-canvas-elevated hairline-border focus:border-accent text-canvas-heading text-xs font-mono outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] text-canvas-subtle uppercase tracking-wider block">
                    Scope
                  </label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-canvas-elevated hairline-border focus:border-accent text-canvas-heading text-xs font-mono outline-none"
                  >
                    <option value="Product Design & UX Architecture">Product & UX Architecture</option>
                    <option value="Design System & UI Tokens">Design System & UI Tokens</option>
                    <option value="Front-End Production Build">Front-End Production Build</option>
                    <option value="Full-Stack Product Redesign">Full Product Redesign</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] text-canvas-subtle uppercase tracking-wider block">
                    Budget Tier
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-canvas-elevated hairline-border focus:border-accent text-canvas-heading text-xs font-mono outline-none"
                  >
                    <option value="< $5k">&lt; $5k</option>
                    <option value="$5k – $15k">$5k – $15k</option>
                    <option value="$15k – $30k">$15k – $30k</option>
                    <option value="$30k+">$30k+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[11px] text-canvas-subtle uppercase tracking-wider block">
                  Project Context
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline the product context, target goals, and timeline..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-canvas-elevated hairline-border focus:border-accent text-canvas-heading text-xs font-mono outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-xs font-mono font-medium transition-all shadow-md active:scale-[0.98]"
              >
                <span>Submit Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Drawer Footer Email Copy */}
        <div className="pt-8 border-t border-hairline mt-8 flex items-center justify-between text-xs font-mono text-canvas-muted">
          <span>{email}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-accent-emerald" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
