'use client';

import { useState } from 'react';

export default function Engagement() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    revenueRange: '',
    problem: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const revenueOptions = [
    'Under $1M',
    '$1M–$10M',
    '$10M–$50M',
    '$50M–$200M',
    'Over $200M',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.revenueRange || !formData.problem) {
      setErrorMessage('Please fill in all fields.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', company: '', revenueRange: '', problem: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('A network error occurred. Please try again.');
    }
  };

  return (
    <section id="engagement" className="bg-bg-secondary py-40 sm:py-44 border-b border-border-color">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Label */}
        <div className="text-center mb-6">
          <span className="text-xs font-bold tracking-widest uppercase text-accent-steel">
            START AN ENGAGEMENT
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-primary leading-tight max-w-3xl">
            Assess your operations.
          </h2>
          <p className="text-base text-text-muted leading-relaxed max-w-2xl font-normal">
            If your business runs on manual administration and has real operational bottlenecks worth automating, apply for an intelligence consultation below.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          {status === 'success' ? (
            <div className="bg-bg-primary border border-border-steel/20 p-12 text-center">
              <span className="text-accent-steel font-black text-2xl mb-4 block">✓ SUCCESS</span>
              <p className="text-lg font-bold uppercase tracking-wider text-text-primary">
                We will respond within 24 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 border border-accent-steel text-text-primary hover:bg-accent-steel hover:text-bg-primary text-xs font-bold tracking-widest uppercase px-6 py-3 transition-steel"
                style={{ minHeight: '44px' }}
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 text-left">
              {/* Name Field */}
              <div className="flex flex-col">
                <label htmlFor="form-name" className="text-[10px] font-bold uppercase tracking-widest text-accent-steel mb-2">
                  Full Name
                </label>
                <input
                  id="form-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-bg-primary border border-border-steel/20 text-text-primary text-sm px-5 py-4 rounded-none focus:outline-none focus:border-accent-steel transition-steel"
                  style={{ minHeight: '44px' }}
                  required
                  disabled={status === 'loading'}
                />
              </div>

              {/* Company Field */}
              <div className="flex flex-col">
                <label htmlFor="form-company" className="text-[10px] font-bold uppercase tracking-widest text-accent-steel mb-2">
                  Company Name
                </label>
                <input
                  id="form-company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enterprise Corp"
                  className="w-full bg-bg-primary border border-border-steel/20 text-text-primary text-sm px-5 py-4 rounded-none focus:outline-none focus:border-accent-steel transition-steel"
                  style={{ minHeight: '44px' }}
                  required
                  disabled={status === 'loading'}
                />
              </div>

              {/* Annual Revenue Dropdown */}
              <div className="flex flex-col">
                <label htmlFor="form-revenue" className="text-[10px] font-bold uppercase tracking-widest text-accent-steel mb-2">
                  Annual Revenue
                </label>
                <select
                  id="form-revenue"
                  name="revenueRange"
                  value={formData.revenueRange}
                  onChange={handleChange}
                  className="w-full bg-bg-primary border border-border-steel/20 text-text-primary text-sm px-5 py-4 rounded-none focus:outline-none focus:border-accent-steel transition-steel"
                  style={{ minHeight: '44px' }}
                  required
                  disabled={status === 'loading'}
                >
                  <option value="" disabled>Select revenue range</option>
                  {revenueOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-bg-primary text-text-primary">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Operational Problem Textarea */}
              <div className="flex flex-col">
                <label htmlFor="form-problem" className="text-[10px] font-bold uppercase tracking-widest text-accent-steel mb-2">
                  What manual operational bottleneck needs replacing?
                </label>
                <textarea
                  id="form-problem"
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  placeholder="Describe your current manual reporting, reconciliation, scheduling, or data entry procedures in detail..."
                  className="w-full bg-bg-primary border border-border-steel/20 text-text-primary text-sm px-5 py-4 rounded-none h-40 focus:outline-none focus:border-accent-steel transition-steel resize-none"
                  required
                  disabled={status === 'loading'}
                />
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <div className="text-red-500 text-xs font-bold uppercase tracking-widest">
                  ✕ {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-accent-steel hover:bg-accent-steel-hover text-bg-primary font-black text-xs tracking-widest uppercase px-8 py-4 rounded-none transition-steel disabled:opacity-50"
                  style={{ minHeight: '44px', width: '100%' }}
                >
                  {status === 'loading' ? 'Submitting Application...' : 'Apply for consultation'}
                </button>
              </div>
            </form>
          )}

          {/* Footnote */}
          <p className="text-text-subtle text-[10px] tracking-wider uppercase font-semibold text-center mt-12">
            Vanthrope works with a small number of clients simultaneously.
          </p>
        </div>

      </div>
    </section>
  );
}
