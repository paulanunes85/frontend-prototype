# Multi-Page SPA Architecture & Component Library

Complete reference for building multi-page presentation apps as single .jsx artifacts.

## Table of Contents

1. [App Skeleton](#1-app-skeleton)
2. [Navigation System](#2-navigation-system)
3. [Page Hero](#3-page-hero)
4. [Scroll Reveal](#4-scroll-reveal)
5. [Section Header](#5-section-header)
6. [Feature Cards](#6-feature-cards)
7. [Persona Cards with Detail Panel](#7-persona-cards)
8. [Before/After Comparison](#8-beforeafter-comparison)
9. [Phase Expander](#9-phase-expander)
10. [FAQ Accordion](#10-faq-accordion)
11. [Code Block](#11-code-block)
12. [Maturity Levels](#12-maturity-levels)
13. [Architecture Stack](#13-architecture-stack)
14. [Tabs Panel](#14-tabs-panel)
15. [Stats Counter](#15-stats-counter)
16. [Do's and Don'ts](#16-dos-and-donts)
17. [SDLC Phase Ring](#17-sdlc-phase-ring)
18. [Tooltip Definitions](#18-tooltip-definitions)
19. [Footer](#19-footer)
20. [Animations & Keyframes](#20-animations--keyframes)

---

## 1. App Skeleton

The top-level structure for every multi-page presentation app.

```jsx
import { useState, useEffect, useRef } from 'react';
import { /* icons */ } from 'lucide-react';

// ─── Page Components ─────────────────────────
function LandingPage({ setPage }) { /* ... */ }
function PageTwo() { /* ... */ }
function PageThree() { /* ... */ }
// ... more pages

// ─── Shared Components ───────────────────────
function Navbar({ page, setPage }) { /* ... */ }
function Footer() { /* ... */ }
function ScrollReveal({ children, delay = 0 }) { /* ... */ }
function SectionHeader({ badge, badgeColor, title, subtitle }) { /* ... */ }
// ... more shared components

// ─── Main App ────────────────────────────────
export default function AppName() {
  const [page, setPage] = useState('landing');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const pages = {
    'landing': <LandingPage setPage={setPage} />,
    'page-two': <PageTwo />,
    'page-three': <PageThree />,
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB]" style={{ fontFamily: '"Inter", sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @keyframes fadeIn { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
        @keyframes slideUp { from { opacity:0; transform:translateY(40px) } to { opacity:1; transform:translateY(0) } }
        html { scroll-behavior: smooth; }
      `}</style>

      <Navbar page={page} setPage={setPage} />
      {pages[page] || <LandingPage setPage={setPage} />}
      <Footer />
    </div>
  );
}
```

---

## 2. Navigation System

Fixed navbar with page links, active state, and mobile menu.

```jsx
function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV = [
    { id: 'landing', label: 'Inicio', icon: <House className="w-4 h-4" /> },
    { id: 'topic-one', label: 'Topic One', icon: <Bot className="w-4 h-4" /> },
    { id: 'topic-two', label: 'Topic Two', icon: <Users className="w-4 h-4" /> },
    // ... more pages
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(20px)' }}>
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => setPage('landing')} className="flex items-center gap-2 font-bold text-lg">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="hidden sm:inline text-slate-800">Site Name</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV.map(n => (
            <button key={n.id} onClick={() => setPage(n.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                page === n.id ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-slate-100'
              }`}>
              {n.icon} {n.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t p-4 space-y-1 bg-white">
          {NAV.map(n => (
            <button key={n.id} onClick={() => { setPage(n.id); setMenuOpen(false); }}
              className={`flex items-center gap-2 w-full px-4 py-2 rounded-lg text-sm font-medium ${
                page === n.id ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-slate-100'
              }`}>
              {n.icon} {n.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
```

---

## 3. Page Hero

Each page gets a unique gradient hero. Rotate colors across pages.

```jsx
function PageHero({ badge, badgeColor, title, subtitle, stats, gradient }) {
  return (
    <section className={`bg-gradient-to-r ${gradient} text-white py-16 px-6 pt-24`}>
      <div className="max-w-5xl mx-auto">
        <span className={`inline-block text-sm font-semibold px-3 py-1 rounded-full mb-4`}
          style={{ background: `${badgeColor}33`, color: badgeColor, border: `1px solid ${badgeColor}55` }}>
          {badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h1>
        <p className="text-xl opacity-80 max-w-3xl">{subtitle}</p>
        {stats && (
          <div className="flex gap-6 mt-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black">{s.value}</div>
                <div className="text-sm opacity-60">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Usage:
<PageHero
  badge="World 1"
  badgeColor="#00A4EF"
  title="Agentic DevOps"
  subtitle="AI agents acting as team members..."
  gradient="from-blue-900 to-slate-900"
  stats={[{ value: '55%', label: 'Faster coding' }]}
/>
```

---

## 4. Scroll Reveal

Wrapper component for fade-in-on-scroll animation.

```jsx
function ScrollReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
```

---

## 5. Section Header

Centered badge + title + subtitle for each section.

```jsx
function SectionHeader({ badge, badgeColor, title, subtitle }) {
  return (
    <div className="text-center mb-14">
      {badge && (
        <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4"
          style={{ background: `${badgeColor}20`, color: badgeColor }}>
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-extrabold text-slate-900 mb-3">{title}</h2>
      {subtitle && <p className="text-slate-500 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
```

---

## 6. Feature Cards

3-column grid cards with icon, title, description.

```jsx
// Card with gradient icon box and optional Mario-style badge
<div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-0">
  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorGradient} flex items-center justify-center text-white mb-4 shadow-lg`}>
    <IconComponent className="w-8 h-8" />
  </div>
  {badge && (
    <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2"
      style={{ background: `${badgeColor}15`, color: badgeColor, border: `1px solid ${badgeColor}30` }}>
      {badge}
    </span>
  )}
  <h3 className="text-lg font-bold text-slate-800 mb-3">{title}</h3>
  <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
</div>
```

---

## 7. Persona Cards

Clickable role cards with full detail expansion.

```jsx
function PersonaCard({ persona, isSelected, onClick }) {
  return (
    <div onClick={onClick}
      className={`cursor-pointer rounded-xl border-2 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1
        ${isSelected ? 'border-blue-300 shadow-lg' : 'border-transparent'}`}>
      <div className="h-2" style={{ background: persona.color }} />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{persona.emoji}</span>
          <h3 className="text-lg font-bold">{persona.title}</h3>
        </div>
        <p className="text-sm text-slate-600 mb-3">{persona.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {persona.capabilities.slice(0, 4).map((c, i) => (
            <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{c}</span>
          ))}
          {persona.capabilities.length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded-full border text-slate-500">+{persona.capabilities.length - 4}</span>
          )}
        </div>
      </div>
    </div>
  );
}

// Detail panel (shown when selected):
<div className="bg-white rounded-xl border-2 border-blue-200 shadow-xl p-8">
  <div className="h-2 rounded-t-xl" style={{ background: persona.color }} />
  {/* emoji + title + description */}
  <p className="text-slate-600 leading-relaxed mb-6">{persona.detail}</p>
  {/* Before/After grid */}
  {/* Prompt example code block */}
  {/* All capabilities as badges */}
</div>
```

---

## 8. Before/After Comparison

Side-by-side red (before) and green (after) boxes.

```jsx
<div className="grid md:grid-cols-2 gap-4">
  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
    <div className="flex items-center gap-2 mb-2 text-red-700 font-bold text-sm">
      <CircleX className="w-4 h-4" /> Antes
    </div>
    <p className="text-sm text-red-600">{beforeText}</p>
  </div>
  <div className="p-4 rounded-xl bg-green-50 border border-green-200">
    <div className="flex items-center gap-2 mb-2 text-green-700 font-bold text-sm">
      <CircleCheck className="w-4 h-4" /> Depois
    </div>
    <p className="text-sm text-green-600">{afterText}</p>
  </div>
</div>
```

---

## 9. Phase Expander

Numbered workflow phases that expand on click to show steps, prompt example, and output.

```jsx
function PhaseExpander({ phase, title, icon, color, steps, output, prompt }) {
  const [open, setOpen] = useState(false);
  const bg = { understand: '#F5C518', document: '#00A4EF', test: '#7FBA00', convert: '#9B59B6', validate: '#F25022' };

  return (
    <div className={`rounded-xl p-6 mb-4 cursor-pointer transition-all hover:shadow-lg`}
      style={{ background: `${bg[color]}14`, borderLeft: `4px solid ${bg[color]}` }}
      onClick={() => setOpen(!open)}>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
          style={{ background: bg[color] }}>{phase}</div>
        <h4 className="flex-1 text-lg font-bold text-slate-800">{title}</h4>
        {icon}
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </div>
      {open && (
        <div className="mt-4 space-y-3" style={{ animation: 'slideUp 0.4s ease-out' }}>
          <ol className="space-y-2">
            {steps.map((s, i) => (
              <li key={i} className="flex gap-3 items-start text-sm text-slate-600">
                <span className="w-6 h-6 rounded-full bg-white shadow text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                <span dangerouslySetInnerHTML={{ __html: s }} />
              </li>
            ))}
          </ol>
          {prompt && (
            <div className="bg-slate-900 text-green-400 p-3 rounded-lg text-xs font-mono">
              <span className="text-slate-500">// Exemplo de prompt:</span><br />
              <span className="text-amber-300">&gt;</span> {prompt}
            </div>
          )}
          <div className="flex items-center gap-2 p-2 bg-white/60 rounded-lg">
            <CircleCheck className="w-4 h-4 text-green-600" />
            <span className="text-xs font-semibold text-green-700">{output}</span>
          </div>
        </div>
      )}
    </div>
  );
}
```

---

## 10. FAQ Accordion

Mario-style question blocks with expand/collapse.

```jsx
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-4">
      <button onClick={() => setOpen(!open)}
        className="w-full text-left p-4 flex items-center gap-3 text-lg rounded-xl"
        style={{ background: 'linear-gradient(135deg, #f5c518, #e5a800)', border: '3px solid #8b4513', color: '#8b4513' }}>
        <span className="text-2xl">{open ? '⭐' : '❓'}</span>
        <span className="flex-1 font-semibold">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="bg-amber-50 border-x-2 border-b-2 border-amber-600/30 p-4 rounded-b-lg"
          style={{ animation: 'slideUp 0.3s ease-out' }}>
          <p className="text-sm leading-relaxed text-slate-700">{answer}</p>
        </div>
      )}
    </div>
  );
}
```

---

## 11. Code Block

Styled terminal-style code display.

```jsx
<div className="bg-slate-900 text-green-400 p-4 rounded-xl font-mono text-sm">
  <div className="text-slate-500 mb-2">// Comment</div>
  <div className="text-amber-300">{'>'} command or code</div>
  <div className="text-blue-300">  output line</div>
  <div className="text-green-300">  success line</div>
  <div className="text-purple-300">  highlight</div>
</div>
```

---

## 12. Maturity Levels

Interactive level selector with detail panel and progress bar.

```jsx
function MaturityLevels({ levels }) {
  const [selected, setSelected] = useState(0);
  const current = levels[selected];

  return (
    <>
      {/* Level selector bar */}
      <div className="flex justify-between items-center mb-8 bg-slate-50 rounded-2xl p-4">
        {levels.map((l, i) => (
          <button key={i} onClick={() => setSelected(i)}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
              selected === i ? 'bg-white shadow-lg scale-110' : 'opacity-60 hover:opacity-100'
            }`}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow"
              style={{ background: l.color }}>{i}</div>
            <span className="text-xs font-medium text-slate-600">{l.shortName}</span>
          </button>
        ))}
      </div>

      {/* Detail card */}
      <div className="rounded-xl border-2 shadow-xl p-8" style={{ borderColor: current.color }}>
        <div className="h-2 rounded-t-xl" style={{ background: current.color }} />
        {/* Level name, description, dimensions grid */}
        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>Progresso</span>
            <span>{Math.round(selected / (levels.length - 1) * 100)}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div className="h-3 rounded-full transition-all duration-500"
              style={{ width: `${selected / (levels.length - 1) * 100}%`, background: current.color }} />
          </div>
        </div>
      </div>
    </>
  );
}
```

---

## 13. Architecture Stack

Layered colored bars (same as single-scroll version).

```jsx
<div className="flex flex-col gap-2 max-w-[800px] mx-auto">
  {layers.map(l => (
    <div key={l.name} className="flex items-center px-6 py-4 rounded-xl text-white transition-all hover:scale-[1.02] hover:shadow-lg"
      style={{ background: l.color }}>
      <span className="text-sm font-extrabold min-w-[200px]">{l.name}</span>
      <span className="text-sm font-medium opacity-90">{l.items}</span>
    </div>
  ))}
</div>
```

---

## 14. Tabs Panel

For comparing technologies, showing tabbed content.

```jsx
function TabsPanel({ tabs }) {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find(t => t.id === active);

  return (
    <div>
      <div className="flex gap-1 bg-slate-100 p-1 rounded-xl mb-6">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActive(t.id)}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              active === t.id ? 'bg-white shadow text-slate-800' : 'text-slate-500'
            }`}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-xl border p-6">
        {current.content}
      </div>
    </div>
  );
}
```

---

## 15. Stats Counter

Animated number with label (used in hero sections).

```jsx
<div className="text-center">
  <div className="text-3xl font-black text-white">{value}{suffix}</div>
  <div className="text-sm text-white/60">{label}</div>
</div>
```

---

## 16. Do's and Don'ts

Two-column green (do) / red (don't) checklist.

```jsx
<div className="grid md:grid-cols-2 gap-6">
  <div className="rounded-xl border border-green-200 overflow-hidden">
    <div className="bg-green-50 p-4">
      <h3 className="text-green-800 flex items-center gap-2 text-lg font-bold">
        <CircleCheck className="w-5 h-5" /> FACA
      </h3>
    </div>
    <div className="p-5 space-y-2">
      {dos.map((item, i) => (
        <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
          <CircleCheck className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> {item}
        </div>
      ))}
    </div>
  </div>

  <div className="rounded-xl border border-red-200 overflow-hidden">
    <div className="bg-red-50 p-4">
      <h3 className="text-red-800 flex items-center gap-2 text-lg font-bold">
        <CircleX className="w-5 h-5" /> NAO FACA
      </h3>
    </div>
    <div className="p-5 space-y-2">
      {donts.map((item, i) => (
        <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
          <CircleX className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> {item}
        </div>
      ))}
    </div>
  </div>
</div>
```

---

## 17. SDLC Phase Ring

Horizontal phase display with hover-to-reveal tools.

```jsx
function SDLCPhase({ label, icon, color, tools }) {
  const [hover, setHover] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className={`flex flex-col items-center gap-2 p-4 rounded-xl bg-white shadow-sm border-2 transition-all cursor-pointer hover:shadow-lg hover:-translate-y-1`}
        style={{ borderColor: hover ? color : 'transparent' }}>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ background: color }}>
          {icon}
        </div>
        <span className="text-xs font-bold text-slate-700">{label}</span>
      </div>
      {hover && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white p-3 rounded-lg shadow-xl z-50 min-w-48"
          style={{ animation: 'slideUp 0.2s ease-out' }}>
          <p className="text-xs font-semibold mb-2 border-b border-slate-700 pb-1" style={{ color }}>{label}</p>
          {tools.map((t, i) => (
            <div key={i} className="text-xs text-slate-300 py-0.5 flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full" style={{ background: color }} /> {t}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Used in a horizontal flex with arrow icons between phases
```

---

## 18. Tooltip Definitions

Hover word with definition popup (using title attribute for simplicity in artifacts).

```jsx
<span className="border-b border-dashed border-blue-400 cursor-help font-medium text-blue-700"
  title="SDLC: Software Development Life Cycle">
  SDLC
</span>
```

For richer tooltips, use a state-based approach:
```jsx
function Tooltip({ word, definition }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-block"
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <span className="border-b border-dashed border-blue-400 cursor-help font-medium text-blue-700">{word}</span>
      {show && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white p-3 rounded-lg shadow-xl z-50 min-w-48 text-xs">
          <strong>{word}</strong>: {definition}
        </span>
      )}
    </span>
  );
}
```

---

## 19. Footer

Dark footer with attribution and Microsoft colors.

```jsx
function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold mb-1">Site Title</h3>
            <p className="text-sm text-slate-400">Paula Silva, Software Engineer, Global Black Belt, Microsoft Americas</p>
            <p className="text-xs text-slate-500 mt-1">@paulanunes85 | @paulasilvatech | paulasilva@microsoft.com</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {['#F25022', '#7FBA00', '#00A4EF', '#FFB900'].map((c, i) => (
                <div key={i} className="w-4 h-4 rounded" style={{ background: c }} />
              ))}
            </div>
            <span className="text-sm text-slate-400">Microsoft</span>
          </div>
        </div>
        <hr className="my-6 border-slate-700" />
        <div className="text-center text-xs text-slate-500">
          Software GBB Americas, 2026
        </div>
      </div>
    </footer>
  );
}
```

---

## 20. Animations & Keyframes

Include these in the `<style>` tag inside the component:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@keyframes fadeIn { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
@keyframes slideUp { from { opacity:0; transform:translateY(40px) } to { opacity:1; transform:translateY(0) } }
@keyframes scaleIn { from { opacity:0; transform:scale(0.9) } to { opacity:1; transform:scale(1) } }
@keyframes gradientShift { 0% { background-position:0% } 50% { background-position:100% } 100% { background-position:0% } }
html { scroll-behavior: smooth; }
```

---

## Landing Page Pattern

The landing page is special. It should include:

1. **Dark gradient hero** with title, gradient text accent, CTAs, and stat cards
2. **Paradigm/intro section** with 3 feature cards
3. **World map / content navigator** with clickable cards that call `setPage()`
4. Each card shows: colored icon, world badge, title, description, hover arrow

```jsx
function LandingPage({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="relative max-w-6xl mx-auto px-6 text-center" style={{ animation: 'fadeIn 0.8s ease-out' }}>
          <span className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full mb-8"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' }}>
            🚀 Tagline
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Main Title<br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #7FBA00, #00A4EF, #FFB900, #F25022)', backgroundSize: '200% 200%', animation: 'gradientShift 4s ease infinite' }}>
              Gradient Accent Text
            </span>
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto mb-10">Subtitle</p>
          {/* CTA buttons */}
          {/* Stat cards grid */}
        </div>
      </section>

      {/* Intro cards section */}
      {/* World map / content navigator section with setPage() buttons */}
    </div>
  );
}
```
