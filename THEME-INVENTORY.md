# Theme Inventory: Vanthrope Operational Systems

This document captures the complete visual and design system for Vanthrope. All new pages, components, interactive tools, and dialogs must compose exclusively from these tokens, typography, and component primitives.

---

## 1. Color Palette & Semantic Tokens

All colors are defined as CSS variables in `app/globals.css` and mapped in `tailwind.config.ts`.

| Token | CSS Variable | Hex / RGBA Value | Usage & Meaning |
| :--- | :--- | :--- | :--- |
| `bg-primary` | `--bg-primary` | `#080808` | Primary page background, canvas root |
| `bg-secondary` | `--bg-secondary` | `#0F0F0F` | Alternating section backgrounds, card containers |
| `bg-surface` | `--bg-surface` | `#1A1A1A` | Elevated cards, input fields, modals |
| `text-primary` | `--text-primary` | `#F0EEE8` | High-contrast off-white for primary headings, body text |
| `text-muted` | `--text-muted` | `rgba(240, 238, 232, 0.5)` | 50% opacity body copy, descriptions, secondary text |
| `text-subtle` | `--text-subtle` | `rgba(240, 238, 232, 0.3)` | 30% opacity footnotes, metadata, copyright, timestamps |
| `accent-steel` | `--accent-steel` | `#8A9BA8` | Industrial steel blue for branding slashes `//`, badges, primary buttons, borders |
| `accent-steel-hover` | `--accent-steel-hover` | `#9EADB9` | Hover state for steel elements |
| `accent-gold` | `--accent-gold` | `#C9A84C` | Subtle warm ochre / gold accent for verified marks / status badges |
| `border-color` | `--border` | `#1A1A1A` | Baseline structural divider (1px solid) |
| `border-steel` | `--border-steel` | `rgba(138, 155, 168, 0.3)` | 30% steel border for emphasized cards, active inputs |

---

## 2. Typography

* **Primary Font Family:** Inter (`var(--font-inter)`, `sans-serif`)
* **OpenType Features Enabled:** `"cv02", "cv03", "cv04", "cv11"` (clean industrial geometric numbers and character alternates).
* **Hierarchy:**
  * **Display / Hero H1:** `text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]`
  * **Section H2:** `text-3xl md:text-5xl font-black tracking-tight leading-tight uppercase or sentence-cased`
  * **Card / Subsection H3:** `text-lg sm:text-2xl font-black tracking-tight uppercase`
  * **Section Category Eyebrows:** `text-xs font-bold tracking-widest uppercase text-accent-steel`
  * **Body Copy:** `text-sm sm:text-base text-text-muted leading-relaxed font-normal`
  * **Buttons / Tags / Navigation:** `text-xs font-semibold tracking-widest uppercase`
  * **Fine Print / Footnotes / Micro-badges:** `text-[10px] uppercase tracking-wider font-semibold`

---

## 3. Spacing, Layout & Touch Targets

* **Max Content Width:** `max-w-7xl mx-auto px-6` (Centered content column)
* **Section Padding:** `py-40 sm:py-44` on desktop, `py-24 sm:py-32` on mobile
* **Section Separation:** `border-b border-border-color` between all full-width sections
* **Grids:**
  * 3-column capability / solution grid: `grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12`
  * 2-column comparison / proof grid: `grid grid-cols-1 lg:grid-cols-2 gap-8`
  * 2x2 process grid: `grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20`
* **Accessibility Touch Targets:** Explicitly enforced `style={{ minHeight: '44px' }}` (or `minWidth: '44px'`) on every interactive element, link, and button.

---

## 4. Textures, Borders & Transitions

* **Grid Texture (`.grid-bg`):**
  * Subtle geometric 60x60px SVG grid at 3%–8% opacity (`stroke: #8A9BA8`, `opacity: 0.03 - 0.08`).
* **Transitions (`.transition-steel`):**
  * `all 0.2s cubic-bezier(0.4, 0, 0.2, 1)`
* **Corner Radius:**
  * `rounded-none` strictly applied across buttons, tags, and cards for an austere, institutional aesthetic.
* **Brand Signature:**
  * Steel double-slash logo mark: `<span className="text-accent-steel font-black text-xl mr-2">{"//"}</span>`

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
