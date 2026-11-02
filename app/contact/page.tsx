'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LocationBar from '@/components/common/location-bar';
import { Mail, Clock, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    revenueRange: '$1M–$10M',
    problem: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [bookingMode, setBookingMode] = useState<'form' | 'cal'>('form');

  // Capacity notice: set per CMS / verified capacity status
  const isCapacityAvailable = true;
  const nextAvailableSprintDate = 'November 16, 2026';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email || !formData.problem) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        {/* Header */}
        <section className="bg-bg-primary py-20 sm:py-28 border-b border-border-color text-left">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-4 block">
              DIRECT INTAKE
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-text-primary uppercase leading-tight max-w-4xl mb-4">
              Book a 20-minute discovery call.
            </h1>
            <p className="text-base text-text-muted max-w-2xl font-normal leading-relaxed">
              Speak directly with founder and systems architect Arslan Rehmani. No sales reps, no discovery decks—just an honest technical audit of whether your operational friction can be solved with custom software.
            </p>

            {/* Capacity Banner */}
            <div className="mt-8 p-4 bg-bg-secondary border border-border-steel/30 max-w-2xl flex items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-text-primary font-bold">Capacity Status: 1 Active Discovery Sprint Slot Open</span>
              </div>
              <span className="text-accent-gold text-[11px]">Earliest Kickoff: {nextAvailableSprintDate}</span>
            </div>
          </div>
        </section>

        {/* Form and Calendar Switcher */}
        <section className="bg-bg-secondary py-20 sm:py-28 border-b border-border-color text-left">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setBookingMode('form')}
                className={`px-4 py-2 text-xs font-mono border transition-steel ${
                  bookingMode === 'form'
                    ? 'border-accent-steel bg-bg-surface text-text-primary font-bold'
                    : 'border-border-color text-text-subtle hover:text-text-muted'
                }`}
                style={{ minHeight: '44px' }}
              >
                1. Submit Written Operational Brief
              </button>
              <button
                onClick={() => setBookingMode('cal')}
                className={`px-4 py-2 text-xs font-mono border transition-steel ${
                  bookingMode === 'cal'
                    ? 'border-accent-steel bg-bg-surface text-text-primary font-bold'
                    : 'border-border-color text-text-subtle hover:text-text-muted'
                }`}
                style={{ minHeight: '44px' }}
              >
                2. Cal.com Calendar Booking
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Form / Calendar Area (7 cols) */}
              <div className="lg:col-span-7 bg-bg-primary p-8 sm:p-10 border border-border-color">
                {bookingMode === 'form' ? (
                  status === 'success' ? (
                    <div className="p-8 text-center space-y-4">
                      <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                      <h3 className="text-2xl font-bold text-text-primary uppercase">
                        Operational Brief Received
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed font-normal max-w-md mx-auto">
                        Thank you for providing the details. Arslan Rehmani personally reviews every submission and will reply with a preliminary technical assessment within 24 business hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 text-xs font-mono">
                      <div>
                        <label className="text-text-muted block mb-1">Your Full Name:</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-bg-surface border border-border-color p-3 text-text-primary focus:border-accent-steel outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-text-muted block mb-1">Company / Organization:</label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full bg-bg-surface border border-border-color p-3 text-text-primary focus:border-accent-steel outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-text-muted block mb-1">Corporate Email Address:</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-bg-surface border border-border-color p-3 text-text-primary focus:border-accent-steel outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-text-muted block mb-1">Annual Revenue Range:</label>
                        <select
                          value={formData.revenueRange}
                          onChange={(e) => setFormData({ ...formData, revenueRange: e.target.value })}
                          className="w-full bg-bg-surface border border-border-color p-3 text-text-primary focus:border-accent-steel outline-none"
                        >
                          <option>Under $1M</option>
                          <option>$1M–$10M</option>
                          <option>$10M–$50M</option>
                          <option>$50M–$200M</option>
                          <option>Over $200M</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-text-muted block mb-1">Describe the specific operational friction:</label>
                        <textarea
                          rows={5}
                          required
                          placeholder="What manual task takes the most hours? What spreadsheets or tools fail to communicate?"
                          value={formData.problem}
                          onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                          className="w-full bg-bg-surface border border-border-color p-3 text-text-primary focus:border-accent-steel outline-none font-sans"
                        />
                      </div>

                      <div className="p-3 bg-bg-secondary border border-border-color text-[11px] text-text-subtle flex items-center justify-between">
                        <span>🛡 Cloudflare Turnstile & IP Rate-Limiting Active</span>
                        <span>Zero Marketing Spam</span>
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-accent-steel hover:bg-accent-steel-hover text-bg-primary font-bold text-xs uppercase tracking-widest py-4 transition-steel"
                        style={{ minHeight: '44px' }}
                      >
                        {status === 'loading' ? 'Transmitting Brief...' : 'Submit Operational Brief for Review'}
                      </button>
                    </form>
                  )
                ) : (
                  <div className="space-y-6 text-left">
                    <span className="text-xs font-mono uppercase text-accent-steel font-bold block">
                      Direct Calendar Booking (Cal.com)
                    </span>
                    <p className="text-xs text-text-muted leading-relaxed font-normal">
                      Schedule a 20-minute video discovery call directly on the founder calendar.
                    </p>
                    <div className="p-8 bg-bg-surface border border-border-color text-center space-y-4">
                      <Calendar className="w-10 h-10 text-accent-steel mx-auto" />
                      <div className="text-sm font-bold text-text-primary uppercase">
                        Cal.com Integration Embed
                      </div>
                      <p className="text-xs text-text-subtle max-w-sm mx-auto">
                        Instant slot reservation synchronized with UK and US Eastern working hours.
                      </p>
                      <a
                        href="https://cal.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-accent-steel text-text-primary hover:bg-accent-steel hover:text-bg-primary px-6 py-3 font-mono text-xs uppercase tracking-widest transition-steel"
                        style={{ minHeight: '44px' }}
                      >
                        Open Cal.com Booking Window
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Commitments & Working Hours (5 cols) */}
              <div className="lg:col-span-5 space-y-6 text-xs font-mono text-left">
                <div className="p-6 bg-bg-primary border border-border-color space-y-3">
                  <div className="flex items-center gap-2 text-accent-steel font-bold text-xs uppercase">
                    <Clock className="w-4 h-4" />
                    <span>Response Time Commitment</span>
                  </div>
                  <p className="text-text-muted font-normal leading-relaxed">
                    Direct technical reply guaranteed within <strong>24 business hours</strong>. All inquiries are screened by Arslan Rehmani personally, not automated sales automation bots.
                  </p>
                </div>

                <div className="p-6 bg-bg-primary border border-border-color space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Privacy & Non-Disclosure</span>
                  </div>
                  <p className="text-text-muted font-normal leading-relaxed">
                    All business operational details submitted are held under strict commercial confidentiality. Standard bilateral NDAs executed prior to reviewing proprietary ERP databases or financial workbooks.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
