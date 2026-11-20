import React, { useState } from 'react';
import { BookOpen, ArrowUpRight, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { notes, NoteItem } from '../data/notes';

export const NotesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="notes"
      className="py-24 sm:py-32 hairline-border-b bg-canvas-base"
      aria-label="Writing and Notes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                // Writing & Technical Notes
              </span>
              <span className="h-px w-12 bg-accent/40" />
            </div>
            <h2 className="fluid-h2 font-display font-bold text-canvas-heading tracking-tight">
              Essays on UX & Systems
            </h2>
          </div>
          <p className="text-canvas-muted text-sm max-w-md leading-relaxed">
            Reflections on interface ergonomics, friction engineering, design token architectures, and front-end performance.
          </p>
        </div>

        {/* Notes Accordion / List */}
        <div className="space-y-6">
          {notes.map((note) => {
            const isExpanded = expandedId === note.id;

            return (
              <article
                key={note.id}
                className="rounded-2xl bg-canvas-card hairline-border hover:border-hairline-bright transition-all duration-200 overflow-hidden"
              >
                <div
                  onClick={() => toggleExpand(note.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex items-center gap-3 font-mono text-xs text-canvas-muted">
                      <span className="text-accent">{note.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-canvas-subtle" />
                        {note.readTime}
                      </span>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded bg-canvas-elevated hairline-border">
                        {note.category}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-display font-bold text-canvas-heading hover:text-white transition-colors">
                      {note.title}
                    </h3>

                    <p className="text-xs text-canvas-muted leading-relaxed">
                      {note.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
                    <span className="font-mono text-xs text-accent hidden sm:inline">
                      {isExpanded ? 'Collapse' : 'Read Note'}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-canvas-elevated hairline-border flex items-center justify-center text-canvas-muted hover:text-white transition-colors">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Content Reader */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 border-t border-hairline pt-6 bg-canvas-elevated/40 animate-in fade-in duration-300">
                    <div className="max-w-3xl space-y-4 text-xs sm:text-sm text-canvas-body leading-relaxed">
                      {note.content.map((paragraph, idx) => (
                        <p key={idx} className="leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
