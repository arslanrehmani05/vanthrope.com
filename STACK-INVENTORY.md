# Stack Inventory: Vanthrope Operational Systems

This document inventories the underlying technology stack, build pipeline, routing conventions, and dependencies of the Vanthrope platform.

---

## 1. Core Runtime & Architecture

* **Framework:** Next.js `14.2.3` (App Router architecture)
* **React Engine:** React `18.3.1` / React DOM `18.3.1`
* **Node Environment:** Node.js `>= 20.x`
* **Language:** TypeScript `5.x` (Strict mode enabled)
* **Styling Engine:** Tailwind CSS `3.4.1` with PostCSS `8` and Vanilla CSS Variables
* **Iconography:** `lucide-react` `^1.23.0`
* **Backend Integration / Database:** `@supabase/supabase-js` `^2.109.0` (Graceful mock fallback when keys are absent)
* **Analytics:** `@next/third-parties/google` `^16.2.10` (Controlled by explicit cookie consent)
* **Font Delivery:** Next.js Google Font Optimization (`next/font/google` - Inter)

---

## 2. Directory Structure & Conventions

```
vanthrope.com-main/
├── app/                        # Next.js App Router root
│   ├── api/                    # Serverless API routes
│   │   ├── contact/            # Intake & audit submissions
│   │   ├── facts/              # Machine-readable Truth Gate facts endpoint
│   │   └── assistant/          # Guided project brief synthesis
│   ├── (site pages)/           # Semantic routes (Solutions, Work, Agents, etc.)
│   ├── globals.css             # Root CSS variables & utility classes
│   ├── layout.tsx              # Root HTML wrapper, metadata, analytics
│   └── page.tsx                # Homepage composition
├── components/                 # Presentation & interactive UI components
│   ├── common/                 # Badges, TruthGate tags, Navigation, Footer
│   ├── home/                   # Hero, ProofStrip, Demos
│   ├── solutions/              # Solution problem templates
│   ├── agents/                 # Capability cards, Safe Explorer, Break-it demo
│   └── tools/                  # 7 In-browser interactive operational tools
├── data/                       # Authoritative local data sources
│   └── facts.json              # Truth Gate: verified claims, metrics, evidence registry
├── lib/                        # Core utilities & domain logic
│   ├── truth-gate.ts           # Claim verification engine & placeholder auditor
│   ├── sanity.ts               # Content data layer (Sanity client & schemas)
│   └── supabase.ts             # Persistence & engagement storage
├── public/                     # Static assets (favicons, diagrams, synthetic samples)
├── THEME-INVENTORY.md          # Visual & token design specification
├── STACK-INVENTORY.md          # Technical stack & architecture record
└── GAP-ANALYSIS.md             # Functional delta specification
```

---

## 3. Build & Production Target

* **Build Script:** `next build`
* **Output Mode:** Next.js Standalone (`output: 'standalone'` in `next.config.mjs`)
* **Dev Server Binding:** `next dev -p 3000 -H 0.0.0.0`
* **Hosting Target:** Vercel (Production Anycast Edge network)

---

## 4. CMS & Content Architecture

Per Non-Negotiable 1: Content that evolves (case studies, playbooks, proof ledger items) is backed by a typed content model compatible with Sanity (`@sanity/client` / GROQ schema structures) so changes never require code modifications. The data layer serves verified claims referenced directly from `data/facts.json`.
