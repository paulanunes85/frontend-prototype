# Design System Reference

Complete design system for Microsoft Interactive Sites, derived from the Open Horizons Agentic DevOps Platform template.

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Shadows & Depth](#shadows--depth)
5. [Animations & Transitions](#animations--transitions)
6. [Border Radius](#border-radius)
7. [Component Patterns](#component-patterns)
8. [Tailwind Utility Mappings](#tailwind-utility-mappings)

---

## Color Palette

### Microsoft Logo Colors (Primary Accent Rotation)

These four colors rotate across sections. Each section heading, card border-top, badge, or accent element uses a different logo color for visual variety.

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Blue | `#00A4EF` | `text-[#00A4EF]` / `bg-[#00A4EF]` | Hero accents, H1 horizon, Generation 01, primary stat values |
| Green | `#7FBA00` | `text-[#7FBA00]` / `bg-[#7FBA00]` | Success states, H2 horizon, Generation 02, terminal prompts |
| Yellow | `#FFB900` | `text-[#FFB900]` / `bg-[#FFB900]` | Highlights, H3 horizon, Generation 03, warning badges |
| Red | `#F25022` | `text-[#F25022]` / `bg-[#F25022]` | Urgent, alerts, security layer, terminal dot |

### Microsoft Brand Blues

| Name | Hex | Usage |
|------|-----|-------|
| Corporate Blue | `#0078D4` | Microsoft corporate primary, hero stat values, pillar backgrounds, step number circles |
| Deep Blue | `#005faa` | Hover states for corporate blue, engineering systems layer |

### GitHub Dark

| Name | Hex | Usage |
|------|-----|-------|
| GitHub Dark | `#24292E` | Primary CTA buttons, terminal header background |
| GitHub Hover | `#1B1F23` | Button hover states |

### Neutrals

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Text Primary | `#171717` | `text-[#171717]` | Headlines, titles, primary content |
| Text Secondary | `#616161` | `text-[#616161]` | Subtitles, descriptions, body text |
| Text Muted | `#8E8E8E` | `text-[#8E8E8E]` | Labels, captions, nav badge text |
| Border | `#E1E1E1` | `border-[#E1E1E1]` | Dividers, FAQ borders, button borders |
| Background Alt | `#F3F2F1` | `bg-[#F3F2F1]` | Alternate section backgrounds (Fluent Design light gray) |
| Card Inner | `#F8F9FB` | `bg-[#F8F9FB]` | Inner card backgrounds, stat boxes, bottom footer |
| White | `#FFFFFF` | `bg-white` | Primary section backgrounds |

### Dark Theme (CTA Footer / Terminal)

| Name | Hex | Usage |
|------|-----|-------|
| Dark BG | `#2c3136` | CTA footer background, terminal header |
| Terminal BG | `#1e1e1e` | Terminal body, video player chrome |
| Dark Border | `rgba(255,255,255,0.06)` | Subtle borders in dark sections |

### 4-Color Gradient Bar

Always present at the very top of the page (fixed, z-1000):

```
linear-gradient(to right,
  #F25022 0%, #F25022 25%,
  #7FBA00 25%, #7FBA00 50%,
  #00A4EF 50%, #00A4EF 75%,
  #FFB900 75%, #FFB900 100%
)
```

---

## Typography

### Font Family

```jsx
// Import in component (inside a <style> tag or at top of JSX)
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

// Usage
fontFamily: '"Inter", sans-serif'

// Monospace (terminal blocks)
fontFamily: '"Cascadia Code", "Fira Code", "Consolas", monospace'
```

### Type Scale

| Element | Size | Weight | Tracking | Line Height | Color |
|---------|------|--------|----------|-------------|-------|
| Hero Title | 54px (text-5xl/custom) | 800 | -0.03em (tracking-tighter) | 1.1 (leading-tight) | #171717 |
| Hero Accent Word | 54px | 800 | -0.03em | 1.1 | #0078D4 |
| Section Title | 40px (text-4xl) | 800 | -0.02em (tracking-tight) | default | #171717 |
| Section Subtitle | 16px (text-base) | 400 | normal | default | #616161 |
| Card Title | 18-24px | 800 | normal | default | #171717 |
| Card Description | 14px (text-sm) | 400 | normal | 1.7 (leading-relaxed) | #616161 |
| Body Text | 17px | 400 | normal | 1.75 | #616161 |
| Nav Link | 14px (text-sm) | 500 | normal | default | #616161 → #171717 hover |
| Nav Brand | 16px | 800 | -0.02em | default | #171717 |
| Stat Value | 32-48px | 900 | -0.02em | 1 | #0078D4 |
| Stat Label | 11-13px | 600-700 | 0.1-0.12em (tracking-widest) | default | #8E8E8E |
| Badge/Tag | 11-13px | 600-700 | 0.03-0.08em | default | varies |
| Tagline | 13px | 600 | 0.08em | default | #0078D4 |
| Button Primary | 16px | 700 | normal | default | #FFFFFF |
| Button Secondary | 16px | 600 | normal | default | #171717 |
| CTA Title | 32px | 800 | normal | default | #FFFFFF |
| Footer Text | 12px | 500 | 0.05em | default | rgba(255,255,255,0.4) |

### Uppercase Pattern

Used for: stat labels, badge text, tagline, generation labels, pillar IDs.
Always combine with: `uppercase tracking-wider` or `tracking-widest` and `font-bold` or `font-extrabold`.

---

## Spacing & Layout

### Container

```jsx
// Max width container with horizontal padding
<div className="w-full max-w-[1100px] mx-auto px-6">
```

For hero and navbar, use `max-w-[1200px]`.

### Section Padding

```jsx
// Standard section
<div className="py-20 px-6">

// Hero section (extra top padding for navbar clearance)
<div className="pt-[100px] pb-16 px-12">
```

### Grid Patterns

```jsx
// 3-column (cards, features, teams, differentiators)
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">

// 2-column (feature duo, AI agents)
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">

// 5-column (stats bar)
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">

// Hero split
<div className="flex flex-col md:flex-row items-center gap-18 max-w-[1200px] mx-auto">
  <div className="md:w-[48%]"> {/* Left */} </div>
  <div className="flex-1"> {/* Right */} </div>
</div>
```

### Card Padding

```
Standard card: p-8 (32px)
Large card:    px-8 py-10 (32px horizontal, 40px vertical)
Compact card:  p-6 (24px)
Stat box:      py-3 px-2 (12px vertical, 8px horizontal)
```

---

## Shadows & Depth

| Level | CSS | Usage |
|-------|-----|-------|
| Card Default | none (flat) | Default card state |
| Card Hover | `shadow-[0_16px_48px_rgba(0,0,0,0.1)]` | Card hover state |
| Elevated | `shadow-[0_20px_60px_rgba(0,0,0,0.08)]` | Floating metrics card |
| Terminal | `shadow-[0_24px_64px_rgba(0,0,0,0.12)]` | Terminal component |
| Video | `shadow-[0_24px_80px_rgba(0,0,0,0.22)]` | Video player chrome |
| Button | `shadow-[0_4px_20px_rgba(0,0,0,0.15)]` | Primary button |
| Button Hover | `shadow-[0_8px_32px_rgba(0,0,0,0.2)]` | Button hover state |

---

## Animations & Transitions

### Scroll Reveal (IntersectionObserver)

Every section below the hero uses this pattern:

```jsx
// Initial state (hidden)
className="opacity-0 translate-y-[30px] transition-all duration-[600ms] ease-out"

// Revealed state
className="opacity-100 translate-y-0 transition-all duration-[600ms] ease-out"
```

### Card Hover

```jsx
className="transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)]"
```

### Button Hover

```jsx
className="transition-all duration-200 hover:-translate-y-0.5"
```

### Architecture Layer Hover

```jsx
className="transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
```

### Terminal Cursor Blink

```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
/* Apply: animation: blink 1s step-end infinite */
```

### Hero Entry Animation

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
/* Apply: animation: fadeIn 0.6s ease-out */
```

---

## Border Radius

| Element | Radius | Tailwind |
|---------|--------|----------|
| Cards | 16px | `rounded-2xl` |
| Buttons (pill) | 24-28px | `rounded-full` |
| Badges/Tags | 20px | `rounded-full` |
| Architecture layers | 12px | `rounded-xl` |
| Terminal | 16px | `rounded-2xl` |
| Stat inner boxes | 12px | `rounded-xl` |
| Circle badges | 50% | `rounded-full` |
| Navbar | none (full width) | — |
| Top bar | none | — |

---

## Component Patterns

### Card with Color Border Top

```jsx
<div className="bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)]"
  style={{ borderTop: '4px solid #00A4EF' }}>
  {/* content */}
</div>
```

### Badge Circle

```jsx
<div className="w-11 h-11 rounded-full flex items-center justify-center text-white text-lg font-extrabold"
  style={{ background: '#00A4EF' }}>
  H1
</div>
```

### Tag/Chip

```jsx
<span className="text-xs font-bold px-2.5 py-1 rounded-full"
  style={{ background: '#00A4EF20', color: '#00A4EF' }}>
  AKS
</span>
```

### Tagline Badge

```jsx
<div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full"
  style={{ color: '#0078D4', background: 'rgba(0,120,212,0.06)', border: '1px solid rgba(0,120,212,0.12)' }}>
  <span className="w-1.5 h-1.5 rounded-full bg-[#7FBA00]" />
  Tagline Text Here
</div>
```

---

## Tailwind Utility Mappings

Common custom values used throughout:

```jsx
// Colors (use arbitrary values)
text-[#171717]  text-[#616161]  text-[#8E8E8E]  text-[#0078D4]  text-[#00A4EF]
bg-[#F3F2F1]    bg-[#F8F9FB]    bg-[#2c3136]    bg-[#1e1e1e]    bg-[#24292E]

// Sizing
max-w-[1100px]  max-w-[1200px]  max-w-[800px]   max-w-[480px]
h-[54px]        w-[48%]         gap-[72px]

// Shadows (arbitrary)
shadow-[0_16px_48px_rgba(0,0,0,0.1)]
shadow-[0_24px_64px_rgba(0,0,0,0.12)]

// Backdrop
backdrop-blur-[16px]

// Letter spacing
tracking-[-0.03em]  tracking-[-0.02em]  tracking-[0.08em]  tracking-[0.12em]

// Line height
leading-[1.1]  leading-[1.7]  leading-[1.75]
```
