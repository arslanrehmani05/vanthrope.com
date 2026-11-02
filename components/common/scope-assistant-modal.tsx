'use client';

import { useState } from 'react';
import { Sparkles, X, CheckCircle2, Printer, ArrowRight } from 'lucide-react';

export default function ScopeAssistantModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    workflowName: '',
    currentFriction: '',
    toolsInvolved: '',
    estimatedWeeklyHours: '15',
    targetOutcome: '',
  });
  const [brief, setBrief] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setBrief(data.brief);
        setStep(2);
      }
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating launcher button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-bg-surface border border-accent-steel/50 hover:border-accent-steel text-text-primary px-4 py-3 shadow-2xl flex items-center gap-2 text-xs font-mono tracking-widest uppercase transition-steel group"
        style={{ minHeight: '44px' }}
      >
        <Sparkles className="w-4 h-4 text-accent-steel group-hover:rotate-12 transition-steel" />
        <span>Scope My Project</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-bg-primary border border-border-steel/40 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 text-left shadow-2xl">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-border-color mb-6">
              <div>
                <span className="text-[10px] font-mono text-accent-gold uppercase font-bold block">
                  Guided Architectural Assistant
                </span>
                <h3 className="text-xl font-bold text-text-primary uppercase tracking-tight">
                  Scope Your Project
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setStep(1);
                  setBrief(null);
                }}
                className="text-text-muted hover:text-text-primary p-2"
                aria-label="Close assistant modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step 1: Input Questions */}
            {step === 1 ? (
              <div className="space-y-4 text-xs font-mono">
                <p className="text-text-muted font-normal font-sans leading-relaxed">
                  Answer 4 discovery questions to generate a structured, one-page technical brief. A human systems architect reviews every brief before any quote.
                </p>

                <div>
                  <label className="text-text-muted block mb-1">1. What operational process is broken?</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Month-end invoice matching, multi-channel stock sync"
                    value={formData.workflowName}
                    onChange={(e) => setFormData({ ...formData, workflowName: e.target.value })}
                    className="w-full bg-bg-surface border border-border-color p-3 text-text-primary focus:border-accent-steel outline-none"
                  />
                </div>

                <div>
                  <label className="text-text-muted block mb-1">2. Describe the manual friction in detail:</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="What manual steps are repeated? Where do mistakes or delays happen?"
                    value={formData.currentFriction}
                    onChange={(e) => setFormData({ ...formData, currentFriction: e.target.value })}
                    className="w-full bg-bg-surface border border-border-color p-3 text-text-primary focus:border-accent-steel outline-none font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-text-muted block mb-1">3. Current tools involved:</label>
                    <input
                      type="text"
                      placeholder="e.g. Excel, Shopify, SAP, Outlook"
                      value={formData.toolsInvolved}
                      onChange={(e) => setFormData({ ...formData, toolsInvolved: e.target.value })}
                      className="w-full bg-bg-surface border border-border-color p-3 text-text-primary focus:border-accent-steel outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-text-muted block mb-1">4. Hours lost / week (est):</label>
                    <input
                      type="number"
                      value={formData.estimatedWeeklyHours}
                      onChange={(e) => setFormData({ ...formData, estimatedWeeklyHours: e.target.value })}
                      className="w-full bg-bg-surface border border-border-color p-3 text-text-primary focus:border-accent-steel outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-border-color flex justify-between items-center text-[10px] text-text-subtle">
                  <span>AI-generated preliminary synthesis</span>
                  <button
                    onClick={handleGenerate}
                    disabled={!formData.workflowName || !formData.currentFriction || loading}
                    className="bg-accent-steel hover:bg-accent-steel-hover text-bg-primary px-6 py-3 font-bold uppercase tracking-widest text-xs transition-steel disabled:opacity-50"
                    style={{ minHeight: '44px' }}
                  >
                    {loading ? 'Synthesizing Brief...' : 'Generate 1-Page Brief'}
                  </button>
                </div>
              </div>
            ) : (
              /* Step 2: Generated Brief Output */
              <div className="space-y-6 font-mono text-xs">
                <div className="p-4 bg-bg-secondary border border-accent-gold/40 text-[11px] text-accent-gold">
                  {brief?.disclosure}
                </div>

                <div className="p-6 bg-bg-surface border border-border-color space-y-4 text-text-primary">
                  <div className="text-base font-bold uppercase text-accent-steel">
                    {brief?.projectTitle}
                  </div>
                  <div>
                    <strong className="text-text-muted block text-[10px] uppercase">Reported Friction:</strong>
                    <p className="mt-1 leading-relaxed text-text-muted">{brief?.currentStatusQuo.reportedFriction}</p>
                  </div>
                  <div>
                    <strong className="text-text-muted block text-[10px] uppercase">Annual Lost Hours:</strong>
                    <span className="text-rose-400 font-bold">{brief?.currentStatusQuo.annualizedHoursLost} hours / year</span>
                  </div>
                  <div>
                    <strong className="text-text-muted block text-[10px] uppercase">Recommended Engagement Model:</strong>
                    <span className="text-emerald-400 font-bold">{brief?.recommendedInitialPhase}</span>
                  </div>
                  <div>
                    <strong className="text-text-muted block text-[10px] uppercase mb-1">Preliminary Architecture Gates:</strong>
                    <div className="space-y-1 text-text-muted">
                      {brief?.preliminaryArchitecture.map((arch: string, aIdx: number) => (
                        <div key={aIdx}>✓ {arch}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border-color">
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-text-subtle hover:text-text-primary"
                  >
                    ← Edit Inputs
                  </button>
                  <a
                    href="/contact"
                    className="bg-accent-steel text-bg-primary px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-accent-steel-hover transition-steel"
                    style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
                  >
                    Book Call to Review Brief
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}
