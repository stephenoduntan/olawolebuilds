import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLagosTime } from '../hooks/useLagosTime';

export const Footer: React.FC = () => {
  const lagosTime = useLagosTime();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/stephenoduntan',
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      )
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/olawole-oduntan/',
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      label: 'Behance',
      href: 'https://www.behance.net/olawoleoduntan',
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.167 0-5.467-2.146-5.467-5.5 0-3.238 2.227-5.5 5.378-5.5 3.513 0 5.089 2.576 4.673 6.136h-7.391c.077 1.54 1.077 2.464 2.544 2.464 1.043 0 1.948-.52 2.385-1.1h2.604zm-4.757-4.636c-.035-1.161-.689-1.964-1.99-1.964-1.189 0-1.895.803-2.036 1.964h4.026zm-10.969-7.364h-8v14h8.215c3.273 0 5.785-1.554 5.785-4.654 0-1.821-.99-3.08-2.527-3.649 1.229-.623 1.979-1.737 1.979-3.284 0-2.883-2.548-4.413-5.452-4.413zm-4.999 5.5h4.153c1.074 0 1.847.464 1.847 1.557 0 1.042-.773 1.543-1.847 1.543h-4.153v-3.1zm0 5.4h4.437c1.199 0 2.063.535 2.063 1.75 0 1.165-.864 1.75-2.063 1.75h-4.437v-3.5z" />
        </svg>
      )
    },
    {
      label: 'Dribbble',
      href: 'https://dribbble.com/tish_stef',
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.163 10.741c-.347-.074-2.899-.597-5.83-.223-.178-.396-.367-.791-.567-1.178 3.518-1.583 4.908-3.486 5.011-3.633 1.011 1.455 1.584 3.197 1.584 5.034 0 .001-.998.001-.198 0zm-2.091-6.192c-.104.14-.1.135-4.836 2.09-1.75-3.064-3.69-5.698-3.791-5.834 1.428-.488 2.96-.759 4.555-.759 1.538 0 3.016.252 4.072.503zm-10.428-3.666c.106.143 1.996 2.709 3.738 5.733-2.617.767-6.529 1.258-9.983 1.267.893-3.189 3.256-5.772 6.245-7zm-7.644 8.948c3.856-.008 8.163-.538 10.985-1.391.205.405.4.819.584 1.236-4.507 1.341-8.739 5.309-8.91 5.474-1.637-1.442-2.659-3.535-2.659-5.319zm3.567 6.786c.148-.139 3.729-3.473 8.358-4.945 1.139 2.97 1.638 5.768 1.766 6.559-1.64.937-3.538 1.47-5.556 1.47-1.706 0-3.321-.383-4.568-.084zm11.75-2.348c-.145-.873-.664-3.456-1.724-6.273 2.652-.375 4.906.12 5.228.196-.445 2.502-1.748 4.675-3.504 6.077z" />
        </svg>
      )
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/oo_creativ/',
      svg: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-canvas-base py-16 hairline-border-t text-xs font-mono" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-hairline">
          
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base text-canvas-heading">
                olawolebuilds.com
              </span>
              <span className="text-canvas-subtle">/</span>
              <span className="text-accent font-medium">Stephen Oduntan</span>
            </div>
            <p className="text-canvas-muted text-[11px]">
              Digital Product Designer & Front-End Developer • Lagos, Nigeria
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-canvas-card hover:bg-canvas-elevated text-canvas-muted hover:text-white hairline-border transition-colors flex items-center gap-2"
                aria-label={link.label}
              >
                {link.svg}
                <span className="text-[11px]">{link.label}</span>
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="px-3 py-2 rounded-lg bg-canvas-elevated hover:bg-canvas-card text-canvas-muted hover:text-white hairline-border transition-colors flex items-center gap-1.5 ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-accent" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Tier: Station Data & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-canvas-muted text-[11px]">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
              <span>LOS Station: {lagosTime || 'WAT'}</span>
            </span>
            <span>•</span>
            <span>6.5244° N, 3.3792° E</span>
            <span>•</span>
            <span>Built with React + Tailwind + GSAP</span>
          </div>

          <div>
            <span>© 2026 Olawole Oduntan. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
