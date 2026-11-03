'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

import VanthropeLogo from '@/components/brand-logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const mainLinks = [
    { label: 'Capabilities', href: '/solutions' },
    { label: 'Agents', href: '/agents' },
    { label: 'Case Studies', href: '/work' },
    { label: 'Methodology', href: '/method' },
    { label: 'Tools', href: '/tools' },
    { label: 'Proof Ledger', href: '/proof-ledger' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg-primary/90 backdrop-blur-md border-b border-border-color">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-text-primary hover:opacity-85 transition-opacity"
          style={{ minHeight: '44px' }}
        >
          <VanthropeLogo className="w-7 h-7" />
          <span className="font-medium tracking-tight text-base sm:text-lg text-text-primary">Vanthrope</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {mainLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
              style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary !px-5 !py-2 !text-xs font-semibold rounded-full hover:opacity-90 transition-all cursor-pointer ml-2"
            style={{ minHeight: '38px', display: 'inline-flex', alignItems: 'center' }}
          >
            Book Discovery Call
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-text-primary hover:text-text-muted transition-colors flex items-center justify-center"
          style={{ minWidth: '44px', minHeight: '44px' }}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-bg-primary flex flex-col justify-start px-8 py-8 lg:hidden overflow-y-auto border-t border-border-color">
          <nav className="flex flex-col gap-4">
            {mainLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-text-primary border-b border-border-color pb-3 hover:text-text-muted transition-colors"
                style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-text-muted hover:text-text-primary py-2"
                style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}
              >
                About Founder &amp; Firm
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center rounded-full !py-3 text-sm font-semibold"
                style={{ minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Book a 20-minute discovery call
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
