'use client';

import { FileText, Download } from 'lucide-react';

interface DocItem {
  title: string;
  size: string;
  desc: string;
}

export default function EnterpriseCards({ documents }: { documents: DocItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {documents.map((doc, idx) => (
        <div
          key={idx}
          className="p-6 bg-bg-primary border border-border-color flex items-start justify-between gap-4 transition-steel hover:border-accent-steel/50"
        >
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-text-primary font-bold text-sm uppercase">
              <FileText className="w-4 h-4 text-accent-steel" />
              <span>{doc.title}</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed font-normal">
              {doc.desc}
            </p>
            <div className="text-[10px] font-mono text-text-subtle">
              Format: {doc.size}
            </div>
          </div>
          <button
            onClick={() => alert(`Direct download initiated for ${doc.title}. PDF pack generated.`)}
            className="shrink-0 p-3 bg-bg-secondary border border-border-color hover:border-accent-steel text-accent-steel transition-steel"
            style={{ minHeight: '44px', minWidth: '44px' }}
            aria-label={`Download ${doc.title}`}
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
