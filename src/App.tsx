import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { MotionLab } from './components/MotionLab';
import { Capabilities } from './components/Capabilities';
import { NotesSection } from './components/NotesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { InquiryDrawer } from './components/InquiryDrawer';
import { CaseStudy, caseStudies } from './data/caseStudies';

export const App: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  // Check URL query parameters or hash to open deep case studies directly
  useEffect(() => {
    const handleUrlRouting = () => {
      const params = new URLSearchParams(window.location.search);
      const projectParam = params.get('project');
      const hash = window.location.hash.replace('#', '');

      const found = caseStudies.find(
        (c) => c.slug === projectParam || c.slug === hash || c.id === hash
      );

      if (found) {
        setSelectedCaseStudy(found);
      }
    };

    handleUrlRouting();
    window.addEventListener('hashchange', handleUrlRouting);
    return () => window.removeEventListener('hashchange', handleUrlRouting);
  }, []);

  const handleSelectCaseStudy = (study: CaseStudy) => {
    setSelectedCaseStudy(study);
    // update URL query parameter without full reload for shareable links
    window.history.pushState(null, '', `?project=${study.slug}`);
  };

  const handleCloseCaseStudy = () => {
    setSelectedCaseStudy(null);
    window.history.pushState(null, '', window.location.pathname);
  };

  return (
    <div className="min-h-screen bg-canvas-base text-canvas-body selection:bg-accent selection:text-white font-sans flex flex-col justify-between">
      {/* Skip to Main Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent text-white font-mono text-xs rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      {/* Global Minimal Header */}
      <Header onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Main Landmark Structure */}
      <main id="main-content" className="flex-1">
        <Hero onOpenInquiry={() => setInquiryOpen(true)} />
        <FeaturedWork onSelectCaseStudy={handleSelectCaseStudy} />
        <MotionLab />
        <Capabilities onOpenInquiry={() => setInquiryOpen(true)} />
        <NotesSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer Landmark */}
      <Footer />

      {/* Deep Dive Case Study Modal / Route View */}
      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={handleCloseCaseStudy}
        onSelectStudy={handleSelectCaseStudy}
      />

      {/* Project Scope / Inquiry Drawer */}
      <InquiryDrawer
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </div>
  );
};

export default App;
