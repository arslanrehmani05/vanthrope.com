'use client';

import { BookOpen, Download } from 'lucide-react';

interface PlaybookItem {
  title: string;
  type: string;
  desc: string;
  filename: string;
}

export default function ResourceCards({ playbooks }: { playbooks: PlaybookItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
      {playbooks.map((pb, idx) => (
        <div
          key={idx}
          className="p-8 bg-bg-primary border border-border-steel/20 flex flex-col justify-between transition-steel hover:border-accent-steel/50"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border-color">
              <span className="text-[10px] font-mono text-accent-gold uppercase font-bold">
                {pb.type}
              </span>
              <BookOpen className="w-4 h-4 text-accent-steel" />
            </div>

            <h2 className="text-xl font-bold text-text-primary uppercase tracking-tight">
              {pb.title}
            </h2>

            <p className="text-xs text-text-muted leading-relaxed font-normal">
              {pb.desc}
            </p>
          </div>

          <div className="pt-6 border-t border-border-color">
            <button
              onClick={() => alert(`Direct download initiated for "${pb.title}". Download is 100% free with zero email signup.`)}
              className="w-full border border-accent-steel hover:bg-accent-steel hover:text-bg-primary text-text-primary font-mono text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-2 transition-steel"
              style={{ minHeight: '44px' }}
            >
              <Download className="w-4 h-4" />
              <span>Download Free Asset</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
