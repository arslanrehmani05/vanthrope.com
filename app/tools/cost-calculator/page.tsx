'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LocationBar from '@/components/common/location-bar';
import Link from 'next/link';
import { ArrowLeft, Printer, Calculator } from 'lucide-react';

export default function CostCalculatorPage() {
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [staffCount, setStaffCount] = useState(2);
  const [errorRatePercent, setErrorRatePercent] = useState(5);
  const [costPerError, setCostPerError] = useState(150);
  const [weeksPerYear, setWeeksPerYear] = useState(50);

  // Calculations
  const totalWeeklyHours = hoursPerWeek * staffCount;
  const directLaborAnnual = totalWeeklyHours * hourlyRate * weeksPerYear;
  
  const estimatedWeeklyTasks = (totalWeeklyHours * 60) / 20; // assuming avg 20 mins per task
  const annualTasks = estimatedWeeklyTasks * weeksPerYear;
  const annualErrors = annualTasks * (errorRatePercent / 100);
  const annualErrorCost = annualErrors * costPerError;

  const totalAnnualCost = directLaborAnnual + annualErrorCost;
  const conservativeLow = Math.round((totalAnnualCost * 0.85) / 100) * 100;
  const conservativeHigh = Math.round((totalAnnualCost * 1.15) / 100) * 100;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Navigation />
      <main className="flex flex-col pt-20">
        <LocationBar />

        {/* Breadcrumb Header */}
        <div className="bg-bg-secondary border-b border-border-color py-4 px-6 print:hidden">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-mono text-text-subtle">
            <Link href="/tools" className="hover:text-text-primary transition-steel flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Tools
            </Link>
            <span>/</span>
            <span className="text-text-muted">Manual-Work Cost Calculator</span>
          </div>
        </div>

        {/* Tool Header */}
        <section className="bg-bg-primary py-16 sm:py-20 border-b border-border-color text-left">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-3 block">
              TOOL 02 // FINANCIAL IMPACT AUDITOR
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-text-primary uppercase leading-tight max-w-4xl mb-4">
              Manual-Work Cost Calculator
            </h1>
            <p className="text-sm text-text-muted max-w-3xl leading-relaxed font-normal">
              Quantify the true organizational cost of repetitive data entry, spreadsheet compiling, and reconciliation mistakes. Shows ranges rather than false precision, with fully transparent formulas and editable assumptions.
            </p>
          </div>
        </section>

        {/* Interactive Studio */}
        <section className="bg-bg-secondary py-16 sm:py-24 border-b border-border-color text-left">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Inputs (6 cols) */}
              <div className="lg:col-span-6 bg-bg-primary p-8 border border-border-color space-y-6 print:hidden">
                <div className="flex items-center justify-between pb-4 border-b border-border-color">
                  <span className="text-xs font-mono uppercase font-bold text-accent-steel">
                    Adjustable Model Inputs
                  </span>
                  <span className="text-[10px] font-mono text-text-subtle">
                    As-of Date: 2026-11-02
                  </span>
                </div>

                <div className="space-y-5 text-xs font-mono">
                  <div>
                    <div className="flex justify-between mb-1">
                      <label className="text-text-muted">Staff Members Involved:</label>
                      <span className="text-text-primary font-bold">{staffCount} people</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="15"
                      value={staffCount}
                      onChange={(e) => setStaffCount(Number(e.target.value))}
                      className="w-full accent-accent-steel"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <label className="text-text-muted">Hours Spent per Person / Week:</label>
                      <span className="text-text-primary font-bold">{hoursPerWeek} hrs/week</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="40"
                      value={hoursPerWeek}
                      onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                      className="w-full accent-accent-steel"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <label className="text-text-muted">Fully Loaded Hourly Labor Cost ($/hr):</label>
                      <span className="text-text-primary font-bold">${hourlyRate}/hr</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="150"
                      step="5"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(Number(e.target.value))}
                      className="w-full accent-accent-steel"
                    />
                    <span className="text-[10px] text-text-subtle block mt-1">
                      Includes base salary + payroll taxes + benefits overhead.
                    </span>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <label className="text-text-muted">Estimated Error / Rework Rate (%):</label>
                      <span className="text-rose-400 font-bold">{errorRatePercent}%</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={errorRatePercent}
                      onChange={(e) => setErrorRatePercent(Number(e.target.value))}
                      className="w-full accent-accent-steel"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <label className="text-text-muted">Average Cost per Error / Customer Delay ($):</label>
                      <span className="text-text-primary font-bold">${costPerError}</span>
                    </div>
                    <input
                      type="range"
                      min="25"
                      max="1000"
                      step="25"
                      value={costPerError}
                      onChange={(e) => setCostPerError(Number(e.target.value))}
                      className="w-full accent-accent-steel"
                    />
                    <span className="text-[10px] text-text-subtle block mt-1">
                      Cost of staff investigation + supplier fees + client goodwill credits.
                    </span>
                  </div>
                </div>

              </div>

              {/* Outputs (6 cols) */}
              <div className="lg:col-span-6 bg-bg-primary p-8 sm:p-10 border border-border-steel/30 space-y-6 font-mono text-left">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border-color">
                  <div>
                    <span className="text-[10px] uppercase text-accent-gold block font-bold">
                      Calculated Annual Impact (Estimate)
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight mt-1">
                      ${conservativeLow.toLocaleString()} – ${conservativeHigh.toLocaleString()}
                    </div>
                    <span className="text-[11px] text-text-subtle">
                      Estimated annual cost of manual operational churn
                    </span>
                  </div>
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary border border-border-color px-3 py-1.5 transition-steel print:hidden"
                    style={{ minHeight: '36px' }}
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print / Save PDF</span>
                  </button>
                </div>

                {/* Breakdown */}
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between p-3 bg-bg-secondary border border-border-color">
                    <span className="text-text-muted">Direct Labor Cost (Annual):</span>
                    <span className="text-text-primary font-bold">${directLaborAnnual.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-bg-secondary border border-border-color">
                    <span className="text-text-muted">Rework & Error Remediation (Annual):</span>
                    <span className="text-rose-400 font-bold">${Math.round(annualErrorCost).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-bg-secondary border border-border-color">
                    <span className="text-text-muted">Total Hours Sunk Annually:</span>
                    <span className="text-accent-steel font-bold">{(totalWeeklyHours * weeksPerYear).toLocaleString()} hours</span>
                  </div>
                </div>

                {/* Transparent Formula */}
                <div className="p-4 bg-bg-surface border border-border-color text-[11px] text-text-subtle space-y-2">
                  <div className="text-text-muted font-bold uppercase text-[10px]">
                    Formula Transparency:
                  </div>
                  <div>Direct Labor = ({hoursPerWeek} hrs × {staffCount} staff) × ${hourlyRate}/hr × {weeksPerYear} wks = ${directLaborAnnual.toLocaleString()}</div>
                  <div>Error Cost = ~{Math.round(annualTasks)} tasks × {errorRatePercent}% error × ${costPerError} = ${Math.round(annualErrorCost).toLocaleString()}</div>
                  <div>Range: ±15% variance applied to avoid deceptive false precision.</div>
                </div>

                <div className="pt-2 text-[10px] text-text-subtle">
                  Benchmark source: BLS Operations Specialist fully-loaded cost averages as of Q3 2026.
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
