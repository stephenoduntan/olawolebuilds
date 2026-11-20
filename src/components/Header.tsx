import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Radio } from 'lucide-react';
import { useLagosTime } from '../hooks/useLagosTime';

interface HeaderProps {
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lagosTime = useLagosTime();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Lab', href: '#lab' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Notes', href: '#notes' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas-base/85 backdrop-blur-md hairline-border-b py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Mark */}
          <a
            href="#"
            className="group flex items-center gap-3 text-canvas-heading hover:text-white transition-colors"
            aria-label="Olawole Oduntan home"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-md bg-canvas-card hairline-border group-hover:border-accent/60 transition-colors">
              <span className="font-mono text-xs font-semibold text-accent tracking-tighter">OB</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent animate-pulse-subtle" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-tight text-canvas-heading group-hover:text-white transition-colors">
                olawolebuilds.com
              </span>
              <span className="font-mono text-[10px] text-canvas-muted tracking-wider uppercase">
                Olawole Oduntan
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-canvas-card/60 backdrop-blur-sm px-3 py-1.5 rounded-full hairline-border">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1 text-xs font-medium text-canvas-muted hover:text-canvas-heading hover:bg-canvas-elevated/70 rounded-full transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Area: Lagos Status & Action */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card/40 hairline-border text-[11px] font-mono text-canvas-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
              <span>LOS {lagosTime || 'GMT+1'}</span>
            </div>

            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-accent hover:bg-accent-hover text-white text-xs font-medium tracking-wide transition-all duration-150 shadow-sm shadow-accent/20 active:scale-[0.98]"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-90" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenInquiry}
              className="px-3 py-1.5 rounded-md bg-accent text-white text-xs font-medium"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-canvas-card hairline-border text-canvas-muted hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 px-4 bg-canvas-card rounded-xl hairline-border shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-canvas-body hover:text-accent rounded-lg hover:bg-canvas-elevated transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-hairline flex items-center justify-between text-xs font-mono text-canvas-muted">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                  Lagos: {lagosTime || 'GMT+1'}
                </span>
                <span className="text-accent font-medium">Available Q1/Q2</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
