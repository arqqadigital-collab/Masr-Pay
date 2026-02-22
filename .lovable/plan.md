

# MasrPay Landing Page — Refactoring Plan

## Goal
Refactor the single-file MasrPay landing page into a clean, production-ready component architecture — **without changing any visual design, styling, animations, or interactions**.

## Current State
- Everything lives in one monolithic file (~860+ lines)
- Template literal syntax issues (missing backticks for className interpolation)
- All components, sections, and shared UI are in a single file
- No proper folder structure

## Proposed Folder Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx          (reusable Button with variants)
│   │   └── SectionHeading.tsx  (reusable section title + subtitle)
│   ├── layout/
│   │   ├── Navbar.tsx          (sticky nav with mobile menu)
│   │   ├── Logo.tsx            (brand logo)
│   │   └── Footer.tsx          (if present in remaining code)
│   └── sections/
│       ├── Hero.tsx            (fullscreen video hero)
│       ├── MissionStatement.tsx (animated text reveal on scroll)
│       ├── ParallaxFeatures.tsx (sticky scroll feature showcase)
│       ├── CTASection.tsx      (red CTA card with dual buttons)
│       └── Partners.tsx        (scrolling partner logo marquee)
├── pages/
│   └── Index.tsx               (landing page assembling all sections)
└── App.tsx                     (router setup, unchanged structure)
```

## What Will Be Done

1. **Split into separate component files** — Each section (Navbar, Hero, MissionStatement, ParallaxFeatures, CTASection, Partners) becomes its own file under `sections/`
2. **Extract shared UI** — `Button` and `SectionHeading` go into `components/ui/`; `Logo` goes into `components/layout/`
3. **Fix syntax issues** — All template literal className expressions will use proper backtick syntax (`` ` `` instead of plain quotes)
4. **Clean up imports** — Each file imports only the lucide-react icons it actually uses
5. **TypeScript conversion** — Add proper types/interfaces for component props
6. **Assemble in Index.tsx** — The landing page composes all sections in order
7. **Ensure Vite + Vercel readiness** — Existing config is already compatible; no changes needed

## What Will NOT Change
- No visual or layout changes
- No color, spacing, or typography changes
- No animation or interaction changes
- Same Tailwind classes preserved exactly
- Same Cloudinary image/video URLs preserved
- Same brand identity maintained

## Note
The uploaded code appears cut off mid-way through the `Partners` component (the scrolling logo marquee). I'll implement the marquee animation based on the visible pattern. If there are additional sections (Footer, etc.) not included in the upload, they can be added afterward.
