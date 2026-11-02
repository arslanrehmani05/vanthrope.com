'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LocationBar from '@/components/common/location-bar';
import Link from 'next/link';
import { ArrowLeft, Printer, FileSpreadsheet, AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react';

interface AuditResults {
  totalRows: number;
  totalColumns: number;
  headers: string[];
  blankCount: number;
  duplicateRows: number;
  typeClashes: number;
  readinessScore: number;
  issues: string[];
}

export default function SpreadsheetCheckerPage() {
  const [csvContent, setCsvContent] = useState('');
  const [results, setResults] = useState<AuditResults | null>(null);

  const sampleCsv = `Order_ID,Customer_Name,Item_SKU,Quantity,Unit_Price,Status
ORD-101,Acme Industrial,SKU-992,10,45.00,Shipped
ORD-102,Beta Logistics,SKU-114,2,120.00,Delivered
ORD-103,Gamma Corp,,5,85.50,Pending
ORD-104,Delta Spares,SKU-773,12,N/A,Processing
ORD-101,Acme Industrial,SKU-992,10,45.00,Shipped
ORD-105,Omega Fabric,SKU-332,0,210.00,Cancelled`;

  const runAudit = (rawText: string) => {
    if (!rawText.trim()) return;

    const lines = rawText.trim().split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length < 2) return;

    const headers = lines[0].split(',').map((h) => h.trim());
    const dataRows = lines.slice(1);

    let blankCount = 0;
    let typeClashes = 0;
    const rowSignatures = new Set<string>();
    let duplicateRows = 0;
    const issues: string[] = [];

    dataRows.forEach((row, idx) => {
      // Duplicate check
      if (rowSignatures.has(row)) {
        duplicateRows++;
      } else {
        rowSignatures.add(row);
      }

      const cells = row.split(',').map((c) => c.trim());
      cells.forEach((cell, cIdx) => {
        if (!cell || cell === '""' || cell.toLowerCase() === 'null') {
          blankCount++;
          issues.push(`Row ${idx + 2}: Blank value in column "${headers[cIdx] || cIdx}"`);
        }
        // Type clash check (e.g. 'N/A' or letters in columns with 'Price' or 'Qty')
        const header = (headers[cIdx] || '').toLowerCase();
        if ((header.includes('price') || header.includes('qty') || header.includes('quantity')) && cell) {
          if (isNaN(Number(cell))) {
            typeClashes++;
            issues.push(`Row ${idx + 2}: Text clash "${cell}" in numeric column "${headers[cIdx]}"`);
          }
        }
      });
    });

    if (duplicateRows > 0) {
      issues.unshift(`Detected ${duplicateRows} identical duplicate rows.`);
    }

    // Readiness score calculation
    let penalty = duplicateRows * 15 + blankCount * 5 + typeClashes * 10;
    const readinessScore = Math.max(10, Math.min(100, 100 - penalty));

    setResults({
      totalRows: dataRows.length,
      totalColumns: headers.length,
      headers,
      blankCount,
      duplicateRows,
      typeClashes,
      readinessScore,
      issues: issues.slice(0, 10), // display top 10
    });
  };

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
            <span className="text-text-muted">Spreadsheet Reality Check</span>
          </div>
        </div>

        {/* Tool Header */}
        <section className="bg-bg-primary py-16 sm:py-20 border-b border-border-color text-left">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-steel mb-3 block">
              TOOL 06 // CLIENT-SIDE DATA PROFILER
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-text-primary uppercase leading-tight max-w-4xl mb-4">
              Spreadsheet Reality Check
            </h1>
            <p className="text-sm text-text-muted max-w-3xl leading-relaxed font-normal">
              Audit CSV data cleanliness 100% locally in your browser. Checks for duplicate rows, missing blanks, and type clashes before attempting database automation. <strong>Zero bytes uploaded to any external server.</strong>
            </p>
          </div>
        </section>

        {/* Profiler Studio */}
        <section className="bg-bg-secondary py-16 sm:py-24 border-b border-border-color text-left">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Input Area (6 cols) */}
              <div className="lg:col-span-6 bg-bg-primary p-8 border border-border-color space-y-4 print:hidden">
                <div className="flex items-center justify-between pb-4 border-b border-border-color">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent-steel uppercase">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Paste Raw CSV Text</span>
                  </div>
                  <button
                    onClick={() => {
                      setCsvContent(sampleCsv);
                      runAudit(sampleCsv);
                    }}
                    className="text-[11px] font-mono text-accent-gold underline hover:text-text-primary"
                  >
                    Load Sample CSV
                  </button>
                </div>

                <textarea
                  rows={10}
                  value={csvContent}
                  onChange={(e) => setCsvContent(e.target.value)}
                  placeholder="Paste CSV text here, or click 'Load Sample CSV' above..."
                  className="w-full bg-bg-surface border border-border-color p-4 font-mono text-xs text-text-primary focus:border-accent-steel outline-none leading-relaxed"
                />

                <div className="pt-2 flex gap-4">
                  <button
                    onClick={() => runAudit(csvContent)}
                    className="w-full bg-accent-steel text-bg-primary font-bold text-xs uppercase tracking-widest py-3 hover:bg-accent-steel-hover transition-steel"
                    style={{ minHeight: '44px' }}
                  >
                    Profile Data Locally
                  </button>
                </div>

                <div className="text-[10px] font-mono text-text-subtle pt-2">
                  🔒 Privacy Guarantee: Executed client-side using JavaScript String & Set APIs. No network requests are dispatched.
                </div>
              </div>

              {/* Audit Results (6 cols) */}
              <div className="lg:col-span-6 bg-bg-primary p-8 sm:p-10 border border-border-steel/30 space-y-6 font-mono text-left">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border-color">
                  <div>
                    <span className="text-[10px] uppercase text-accent-gold block font-bold">
                      Data Cleanliness Score (Estimate)
                    </span>
                    <div className="text-3xl font-black text-text-primary tracking-tight mt-1">
                      {results ? `${results.readinessScore} / 100` : '— / 100'}
                    </div>
                  </div>
                  {results && (
                    <button
                      onClick={handlePrint}
                      className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary border border-border-color px-3 py-1.5 transition-steel print:hidden"
                      style={{ minHeight: '36px' }}
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Report</span>
                    </button>
                  )}
                </div>

                {results ? (
                  <>
                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div className="p-3 bg-bg-secondary border border-border-color">
                        <span className="text-text-subtle block text-[10px] uppercase">Total Rows</span>
                        <span className="text-text-primary font-bold">{results.totalRows}</span>
                      </div>
                      <div className="p-3 bg-bg-secondary border border-border-color">
                        <span className="text-text-subtle block text-[10px] uppercase">Blank Cells</span>
                        <span className={results.blankCount > 0 ? 'text-amber-400 font-bold' : 'text-emerald-400 font-bold'}>
                          {results.blankCount}
                        </span>
                      </div>
                      <div className="p-3 bg-bg-secondary border border-border-color">
                        <span className="text-text-subtle block text-[10px] uppercase">Duplicates</span>
                        <span className={results.duplicateRows > 0 ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
                          {results.duplicateRows}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] uppercase text-accent-steel font-bold block">
                        Detected Data Anomaly Flags:
                      </span>
                      {results.issues.length > 0 ? (
                        <div className="space-y-1.5 max-h-48 overflow-y-auto">
                          {results.issues.map((iss, iIdx) => (
                            <div key={iIdx} className="text-xs text-rose-400 bg-bg-secondary p-2 border border-rose-950/40">
                              ⚠ {iss}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-xs text-emerald-400 bg-bg-secondary p-3 border border-emerald-950/40">
                          ✓ Zero blanks, type clashes, or duplicates detected. Dataset is migration-ready.
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="text-xs text-text-subtle py-8 text-center">
                    Paste CSV or click &quot;Load Sample CSV&quot; to generate local cleanliness profile.
                  </div>
                )}

                <div className="p-3 bg-bg-surface border border-border-color text-[11px] text-text-subtle">
                  Formula: Readiness = 100 - (Duplicates × 15) - (Blanks × 5) - (Type Clashes × 10). Labeled estimate.
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
