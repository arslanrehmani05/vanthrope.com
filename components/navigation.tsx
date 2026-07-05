'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Capabilities', href: '#capability' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Operational Results', href: '#proof' },
    { label: 'The Firm', href: '#founder' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border-color">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center text-text-primary hover:opacity-80 transition-steel"
          style={{ minHeight: '44px' }}
        >
          <span className="text-accent-steel font-black mr-2">{"//"}</span>
          <span className="font-black tracking-tight text-lg uppercase">Vanthrope</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-widest uppercase font-semibold text-text-muted hover:text-text-primary transition-steel"
              style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#engagement"
            className="border border-accent-steel text-text-primary hover:bg-accent-steel hover:text-bg-primary text-xs font-semibold tracking-widest uppercase px-5 py-3 rounded-none transition-steel"
            style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
          >
            Assess Operation
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary hover:text-accent-steel transition-steel flex items-center justify-center"
          style={{ minWidth: '44px', minHeight: '44px' }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-bg-primary flex flex-col justify-start px-8 py-12 md:hidden">
          <nav className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg tracking-widest uppercase font-bold text-text-primary border-b border-border-color pb-4 hover:text-accent-steel transition-steel"
                style={{ minHeight: '44px', display: 'block' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#engagement"
              onClick={() => setIsOpen(false)}
              className="w-full text-center border border-accent-steel text-text-primary hover:bg-accent-steel hover:text-bg-primary text-sm font-bold tracking-widest uppercase py-4 rounded-none transition-steel mt-4"
              style={{ minHeight: '44px', display: 'block' }}
            >
              Assess Operation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
