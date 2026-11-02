# Theme Inventory: Vanthrope Operational Systems

This document captures the complete visual and design system for Vanthrope. All new pages, components, interactive tools, and dialogs must compose exclusively from these tokens, typography, and component primitives.

---

## 1. Color Palette & Semantic Tokens

All colors are defined as CSS variables in `app/globals.css` and mapped in `tailwind.config.ts`, directly synchronized with `arslanrehmani.com`:

| Token | CSS Variable | Hex / RGBA Value | Usage & Meaning |
| :--- | :--- | :--- | :--- |
| `bg-primary` | `--bg-primary` | `#111113` | Dark charcoal void background, canvas root |
| `bg-secondary` | `--bg-secondary` | `hsla(0, 0%, 100%, 0.05)` | 5% surface container |
| `bg-surface` | `--bg-surface` | `hsla(0, 0%, 100%, 0.08)` | 8% elevated card surface |
| `text-primary` | `--text-primary` | `#f0f0f2` | Crisp off-white for primary headings, body text |
| `text-muted` | `--text-muted` | `hsla(0, 0%, 100%, 0.55)` | 55% white body copy, descriptions, secondary text |
| `text-subtle` | `--text-subtle` | `hsla(0, 0%, 100%, 0.35)` | 35% white footnotes, metadata, copyright, timestamps |
| `border-color` | `--border` | `hsla(0, 0%, 100%, 0.08)` | Subtle structural divider (1px solid) |
| `border-gold` | `--border-gold` | `hsla(0, 0%, 100%, 0.16)` | Subtle gold / highlight divider |
| `accent-steel` | `--accent-steel` | `#f0f0f2` | Clean monochrome text accent matching primary text |
| `accent-gold` | `--accent-gold` | `#C9A84C` | Subtle warm ochre / gold accent for verified status badges |

---

## 2. Typography

* **Primary Font Stack:** Apple System (`-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, `Helvetica`, `Arial`, `sans-serif`)
* **Styling Tone:** Refined sentence-case typography with Cupertino / Linear aesthetic.
* **Hierarchy:**
  * **Display / Hero H1:** `text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-text-primary leading-[1.08]`
  * **Section H2:** `text-3xl md:text-5xl font-medium tracking-tight text-text-primary leading-tight`
  * **Card / Subsection H3:** `text-xl font-semibold tracking-tight text-text-primary`
  * **Section Category Eyebrows:** `.eyebrow` (`text-xs font-medium tracking-[0.14em] uppercase text-text-subtle font-mono`)
  * **Body Copy:** `text-sm sm:text-base text-text-muted leading-relaxed font-normal`
  * **Buttons:** `.btn-primary` (`rounded-full px-7 py-3.5 text-sm font-semibold bg-text-primary text-bg-primary shadow-lg hover:-translate-y-0.5 transition-all`)
  * **Fine Print / Footnotes:** `text-xs font-mono text-text-subtle`

---

## 3. Spacing, Layout & Touch Targets

* **Max Content Width:** `max-w-7xl mx-auto px-6` (Centered content column)
* **Section Padding:** `py-32 sm:py-40` on desktop, `py-20 sm:py-24` on mobile
* **Section Separation:** `border-b border-border-color` between all full-width sections
* **Corner Radius:**
  * `rounded-full`: Primary action buttons, tags, chips, status pills.
  * `rounded-2xl`: Content cards, modal dialogs, case study panels.
  * `rounded-xl`: Form inputs, textareas, dropdowns, code blocks.
* **Accessibility Touch Targets:** Explicitly enforced `style={{ minHeight: '44px' }}` (or `minWidth: '44px'`) on every interactive element, link, and button.

---

## 4. Textures, Borders & Transitions

* **Radial Depth Canvas:**
  * Dual radial gradient background (`ellipse 80% 60% at 50% 25% #1a1a2e to #111113`, plus subtle depth circles at 15% and 85%).
* **Brand Signature:**
  * Sibling 'V' Squircle Monogram Vector (`components/brand-logo.tsx`), mathematically inverted sibling to Arslan Rehmani's 'A' mark.

---

## 5. Component Primitives Inventory

1. **Header Navigation:** Fixed header (`h-20 bg-bg-primary/80 backdrop-blur-md border-b border-border-color`), steel brand mark, uppercase tracking-widest links, primary CTA button, mobile drawer.
2. **Hero:** Full-bleed background grid, high-impact outcome headline, plain subheadline, primary CTA, verified proof strip.
3. **Capability / Solution Card:** `bg-bg-surface` or `bg-bg-secondary`, `border-t border-accent-steel` or `border border-border-steel/20`, uppercase title, body copy, steel directional link `→`.
4. **Step / Method Item:** High-contrast 2-digit numeral (`text-5xl sm:text-6xl font-black text-accent-steel`), step title, description, requirements, failure-mode disclosure.
5. **Metric Proof Card:** `bg-bg-secondary border border-border-steel/20 p-8`, case type badge, maturity badge, before/after values (`text-2xl sm:text-3xl font-black text-text-primary`), verified evidence ID chip.
6. **Form Inputs:** `bg-bg-surface border border-border-color text-text-primary focus:border-accent-steel text-sm p-4 rounded-none outline-none transition-steel`.
7. **Badges:**
   * Case Type Badge: `border border-accent-steel/40 text-accent-steel text-[10px] font-bold tracking-widest uppercase px-3 py-1`
   * Maturity Badge: `border border-accent-gold/40 text-accent-gold text-[10px] font-bold tracking-widest uppercase px-3 py-1`
   * Verification Badge: `text-[10px] font-mono tracking-wider text-text-muted`
8. **Footer:** 3-column structured grid (`max-w-7xl mx-auto px-6 pt-24 pb-12`), legal disclosures, entity placeholders, navigation index, copyright bar.
