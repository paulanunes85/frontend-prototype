# Section Catalog

All available sections for building interactive sites. Each section is self-contained Tailwind + React JSX code that can be composed together.

## Table of Contents

1. [4-Color Top Bar](#1-4-color-top-bar)
2. [Navbar](#2-navbar)
3. [Hero Split](#3-hero-split)
4. [Hero Centered](#4-hero-centered)
5. [Stats Bar](#5-stats-bar)
6. [Evolution Cards](#6-evolution-cards)
7. [Horizons Cards](#7-horizons-cards)
8. [Feature Grid](#8-feature-grid)
9. [Feature Duo](#9-feature-duo)
10. [Architecture Stack](#10-architecture-stack)
11. [Team Cards](#11-team-cards)
12. [Maturity Framework](#12-maturity-framework)
13. [FAQ Accordion](#13-faq-accordion)
14. [Video Player Chrome](#14-video-player-chrome)
15. [Terminal Animation](#15-terminal-animation)
16. [Tech Logos Bar](#16-tech-logos-bar)
17. [Getting Started Steps](#17-getting-started-steps)
18. [CTA Footer](#18-cta-footer)
19. [Bottom Footer](#19-bottom-footer)
20. [Scroll Reveal Setup](#20-scroll-reveal-setup)

---

## 1. 4-Color Top Bar

ALWAYS include. Fixed at top, z-1000.

```jsx
<div className="fixed top-0 left-0 w-full h-1 z-[1000]"
  style={{ background: 'linear-gradient(to right, #F25022 0%, #F25022 25%, #7FBA00 25%, #7FBA00 50%, #00A4EF 50%, #00A4EF 75%, #FFB900 75%, #FFB900 100%)' }} />
```

---

## 2. Navbar

Fixed below the 4-color bar. Backdrop blur, centered content.

```jsx
<div className="fixed top-1 left-0 w-full z-50 flex items-center justify-center px-8 h-14"
  style={{ background: 'rgba(243,242,241,0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
  <div className="flex items-center w-full max-w-[1200px]">
    {/* Logo area */}
    <span className="font-extrabold text-base text-[#171717] tracking-tight">
      {/* Replace with site name */}
      Site Name
    </span>
    {/* Nav links */}
    <div className="flex gap-8 ml-auto mr-8">
      {['Platform', 'Features', 'Architecture', 'FAQ'].map(link => (
        <a key={link} href={`#${link.toLowerCase()}`}
          className="text-sm font-medium text-[#616161] hover:text-[#171717] transition-colors no-underline">
          {link}
        </a>
      ))}
    </div>
    {/* CTA */}
    <button className="text-[13px] font-bold text-white bg-[#24292E] px-6 py-2.5 rounded-full hover:bg-[#1B1F23] hover:-translate-y-0.5 transition-all">
      Get Started
    </button>
  </div>
</div>
```

---

## 3. Hero Split

Left: text content. Right: terminal or visual.

```jsx
<div className="flex flex-col md:flex-row items-center pt-[100px] pb-16 px-12 max-w-[1200px] mx-auto gap-[72px]"
  style={{ animation: 'fadeIn 0.6s ease-out' }}>
  {/* Left */}
  <div className="md:w-[48%] flex flex-col items-start">
    {/* Tagline */}
    <div className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-5"
      style={{ color: '#0078D4', background: 'rgba(0,120,212,0.06)', border: '1px solid rgba(0,120,212,0.12)' }}>
      <span className="w-1.5 h-1.5 rounded-full bg-[#7FBA00]" />
      Tagline Text
    </div>

    {/* Title */}
    <h1 className="text-[54px] font-extrabold tracking-[-0.03em] text-[#171717] mb-5 leading-[1.1] text-left">
      Main Title<br />
      Second Line<br />
      <span className="text-[#0078D4]">Accent Words</span>
    </h1>

    {/* Subtitle */}
    <p className="text-[17px] text-[#616161] mb-9 leading-[1.75] text-left max-w-[440px]">
      Description paragraph with key value proposition.
    </p>

    {/* Buttons */}
    <div className="flex gap-4 mb-12">
      <button className="h-[54px] rounded-full px-9 text-base font-bold text-white bg-[#24292E] shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-[#1B1F23] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all flex items-center gap-2.5">
        Primary Action
      </button>
      <a href="#platform" className="h-[54px] rounded-full px-8 text-base font-semibold text-[#171717] border-2 border-[#E1E1E1] hover:border-[#171717] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 no-underline">
        Secondary Action →
      </a>
    </div>

    {/* Stats */}
    <div className="flex gap-10">
      {[
        { value: '22', label: 'Templates' },
        { value: '17', label: 'Agents' },
        { value: '15', label: 'Modules' },
      ].map(s => (
        <div key={s.label}>
          <div className="text-[32px] font-black text-[#0078D4] tracking-tight leading-none">{s.value}</div>
          <div className="text-[11px] font-bold text-[#8E8E8E] uppercase tracking-[0.12em] mt-1.5">{s.label}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Right — Terminal or other visual */}
  <div className="flex-1 flex items-start justify-end pt-4">
    {/* Insert Terminal Animation or Image here */}
  </div>
</div>
```

---

## 4. Hero Centered

Single-column centered hero for simpler layouts.

```jsx
<div className="pt-[120px] pb-16 px-6 text-center max-w-[800px] mx-auto"
  style={{ animation: 'fadeIn 0.6s ease-out' }}>
  <div className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-6"
    style={{ color: '#0078D4', background: 'rgba(0,120,212,0.06)', border: '1px solid rgba(0,120,212,0.12)' }}>
    <span className="w-1.5 h-1.5 rounded-full bg-[#7FBA00]" />
    Tagline
  </div>
  <h1 className="text-[48px] font-extrabold tracking-[-0.03em] text-[#171717] mb-5 leading-[1.1]">
    Main Title with <span className="text-[#0078D4]">Accent</span>
  </h1>
  <p className="text-lg text-[#616161] mb-10 leading-relaxed max-w-[600px] mx-auto">
    Subtitle description paragraph.
  </p>
  <div className="flex justify-center gap-4">
    <button className="h-[54px] rounded-full px-9 text-base font-bold text-white bg-[#24292E] shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-[#1B1F23] hover:-translate-y-0.5 transition-all">
      Primary Action
    </button>
    <button className="h-[54px] rounded-full px-8 text-base font-semibold text-[#171717] border-2 border-[#E1E1E1] hover:border-[#171717] hover:-translate-y-0.5 transition-all">
      Secondary Action →
    </button>
  </div>
</div>
```

---

## 5. Stats Bar

Numeric highlights section. White background.

```jsx
<div className="py-20 px-6 bg-white">
  <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center max-w-[1100px] mx-auto">
    {STATS.map((s, i) => (
      <div key={i}>
        <div className="text-5xl font-black tracking-tight leading-none"
          style={{ color: ['#00A4EF', '#7FBA00', '#FFB900', '#F25022', '#0078D4'][i % 5] }}>
          {s.value}
        </div>
        <div className="text-[13px] font-semibold text-[#616161] mt-2 uppercase tracking-[0.1em]">{s.label}</div>
      </div>
    ))}
  </div>
</div>
```

---

## 6. Evolution Cards

Three-column generation progression.

```jsx
<div className="py-20 px-6 bg-[#F3F2F1]" id="platform">
  <h2 className="text-[40px] font-extrabold tracking-tight text-[#171717] text-center mb-2">Section Title</h2>
  <p className="text-base text-[#616161] text-center mb-12 max-w-[600px] mx-auto">Section subtitle description.</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
    {EVOLUTIONS.map(e => (
      <div key={e.gen} className="bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)]"
        style={{ borderTop: `4px solid ${e.color}` }}>
        <div className="text-xs font-extrabold uppercase tracking-[0.15em] mb-2" style={{ color: e.color }}>
          Generation {e.gen}
        </div>
        <div className="text-2xl font-extrabold text-[#171717] mb-3">{e.title}</div>
        <div className="text-sm text-[#616161] leading-[1.7]">{e.desc}</div>
      </div>
    ))}
  </div>
</div>
```

---

## 7. Horizons Cards

Cards with badge circles and tags.

```jsx
<div className="py-20 px-6 bg-white">
  <h2 className="text-[40px] font-extrabold tracking-tight text-[#171717] text-center mb-2">Section Title</h2>
  <p className="text-base text-[#616161] text-center mb-12 max-w-[600px] mx-auto">Subtitle.</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
    {HORIZONS.map(h => (
      <div key={h.badge} className="bg-[#F3F2F1] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
        style={{ borderTop: `4px solid ${h.color}` }}>
        <div className="w-11 h-11 rounded-full flex items-center justify-center text-white text-lg font-extrabold mb-4"
          style={{ background: h.color }}>{h.badge}</div>
        <div className="text-[22px] font-extrabold text-[#171717] mb-2">{h.title}</div>
        <div className="text-sm text-[#616161] leading-[1.7] mb-4">{h.desc}</div>
        <div className="flex flex-wrap gap-2">
          {h.tags.map(t => (
            <span key={t} className="text-[11px] font-bold px-2.5 py-1 rounded-full tracking-[0.03em]"
              style={{ background: `${h.color}20`, color: h.color }}>{t}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
```

---

## 8. Feature Grid

3-column icon/title/description cards.

```jsx
<div className="py-20 px-6 bg-white" id="features">
  <h2 className="text-[40px] font-extrabold tracking-tight text-[#171717] text-center mb-2">Section Title</h2>
  <p className="text-base text-[#616161] text-center mb-12 max-w-[600px] mx-auto">Subtitle.</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
    {FEATURES.map(d => (
      <div key={d.title} className="bg-[#F3F2F1] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
        <div className="text-[32px] mb-4">{d.icon}</div>
        <div className="text-lg font-extrabold text-[#171717] mb-2">{d.title}</div>
        <div className="text-sm text-[#616161] leading-[1.7]">{d.desc}</div>
      </div>
    ))}
  </div>
</div>
```

---

## 9. Feature Duo

Two large cards side by side.

```jsx
<div className="py-20 px-6 bg-[#F3F2F1]">
  <h2 className="text-[40px] font-extrabold tracking-tight text-[#171717] text-center mb-2">Section Title</h2>
  <p className="text-base text-[#616161] text-center mb-12 max-w-[600px] mx-auto">Subtitle.</p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
    {FEATURES_DUO.map(f => (
      <div key={f.title} className="bg-white rounded-2xl px-8 py-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)]">
        <div className="text-[40px] mb-4">{f.icon}</div>
        <div className="text-[22px] font-extrabold text-[#171717] mb-2">{f.title}</div>
        <div className="text-sm text-[#616161] leading-[1.7]">{f.desc}</div>
        <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full mt-4"
          style={{ background: `${f.color}20`, color: f.color }}>{f.badge}</span>
      </div>
    ))}
  </div>
</div>
```

---

## 10. Architecture Stack

Layered colored bars for architecture visualization.

```jsx
<div className="py-20 px-6 bg-[#F3F2F1]" id="architecture">
  <h2 className="text-[40px] font-extrabold tracking-tight text-[#171717] text-center mb-2">Architecture Layers</h2>
  <p className="text-base text-[#616161] text-center mb-12 max-w-[600px] mx-auto">Subtitle.</p>
  <div className="flex flex-col gap-1 max-w-[800px] mx-auto">
    {LAYERS.map(l => (
      <div key={l.name} className="flex items-center px-6 py-4 rounded-xl text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
        style={{ background: l.color }}>
        <span className="text-[15px] font-extrabold min-w-[220px]">{l.name}</span>
        <span className="text-[13px] font-medium opacity-90">{l.items}</span>
      </div>
    ))}
  </div>
</div>
```

---

## 11. Team Cards

Audience-specific value propositions.

```jsx
<div className="py-20 px-6 bg-white">
  <h2 className="text-[40px] font-extrabold tracking-tight text-[#171717] text-center mb-2">Built for Every Team</h2>
  <p className="text-base text-[#616161] text-center mb-12 max-w-[600px] mx-auto">Subtitle.</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
    {TEAMS.map(t => (
      <div key={t.title} className="bg-[#F3F2F1] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
        style={{ borderTop: `4px solid ${t.color}` }}>
        <div className="text-xl font-extrabold text-[#171717] mb-4">{t.title}</div>
        {t.items.map(item => (
          <div key={item} className="text-sm text-[#616161] leading-8 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[#8E8E8E]">
            {item}
          </div>
        ))}
      </div>
    ))}
  </div>
</div>
```

---

## 12. Maturity Framework

Pillars grid + level progression bars.

```jsx
{/* Pillars */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1100px] mx-auto mb-10">
  {PILLARS.map(p => (
    <div key={p.id} className="rounded-2xl p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)]"
      style={{ background: p.color }}>
      <div className="text-[13px] font-black opacity-70 mb-1">{p.id}</div>
      <div className="text-lg font-extrabold mb-1">{p.title}</div>
      <div className="text-xs font-semibold opacity-70 mb-4">{p.caps} Capabilities</div>
      <div className="flex flex-col gap-1">
        {p.items.map(item => (
          <div key={item} className="text-xs font-medium opacity-85 pl-3 relative before:content-['›'] before:absolute before:left-0 before:opacity-50">
            {item}
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

{/* Levels */}
<div className="flex flex-col gap-2 max-w-[800px] mx-auto">
  {LEVELS.map(l => (
    <div key={l.level} className="flex items-center gap-4 px-5 py-3.5 rounded-xl bg-[#F8F9FB] transition-all duration-300 hover:bg-[#F0F4FB] hover:translate-x-1">
      <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[13px] font-extrabold shrink-0"
        style={{ background: l.color }}>{l.level}</div>
      <span className="text-base font-extrabold text-[#171717] min-w-[130px]">{l.name}</span>
      <span className="text-[13px] text-[#616161] flex-1">{l.desc}</span>
      <div className="h-2 rounded-full shrink-0" style={{ width: `${l.width}px`, background: l.color }} />
    </div>
  ))}
</div>
```

---

## 13. FAQ Accordion

Requires `openFaq` state: `const [openFaq, setOpenFaq] = useState(null);`

```jsx
<div className="py-20 px-6 bg-[#F3F2F1]" id="faq">
  <h2 className="text-[40px] font-extrabold tracking-tight text-[#171717] text-center mb-2">Frequently Asked Questions</h2>
  <p className="text-base text-[#616161] text-center mb-12 max-w-[600px] mx-auto">Subtitle.</p>
  <div className="max-w-[800px] mx-auto">
    {FAQ.map((faq, i) => (
      <div key={i} className="border-b border-[#E1E1E1]">
        <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
          className="w-full flex justify-between items-center py-5 bg-transparent border-none cursor-pointer text-left text-base font-bold text-[#171717] hover:text-[#0078D4] transition-colors"
          style={{ fontFamily: '"Inter", sans-serif' }}>
          {faq.q}
          <span className={`text-xl text-[#8E8E8E] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>▼</span>
        </button>
        <div className={`text-sm text-[#616161] leading-[1.7] overflow-hidden transition-all duration-300 ${
          openFaq === i ? 'max-h-[300px] pb-5' : 'max-h-0'
        }`}>
          {faq.a}
        </div>
      </div>
    ))}
  </div>
</div>
```

---

## 14. Video Player Chrome

macOS-style video player wrapper.

```jsx
<div className="py-20 px-6" style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}>
  <div className="max-w-[1080px] mx-auto rounded-xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.22)] bg-[#1e1e1e] border border-white/[0.06]">
    {/* Title bar */}
    <div className="flex items-center h-9 px-3 bg-[#2b2b2b] border-b border-white/[0.06] gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      <span className="flex-1 text-center text-xs font-medium text-white/50">Video Title</span>
    </div>
    {/* Video area */}
    <div className="w-full bg-black">
      <div className="w-full flex items-center justify-center text-white text-5xl"
        style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg, #2c3136 0%, #171c21 100%)' }}>
        ▶
      </div>
    </div>
    {/* Controls */}
    <div className="flex items-center h-10 px-4 bg-[#2b2b2b] border-t border-white/[0.06] gap-3">
      <span className="text-[11px] font-medium text-white/45 font-mono tracking-wide">0:00</span>
      <div className="flex-1 h-1 rounded-full bg-white/[0.12] overflow-hidden">
        <div className="w-[35%] h-full rounded-full" style={{ background: 'linear-gradient(90deg, #ff6611, #ff8833)' }} />
      </div>
      <span className="text-[11px] font-medium text-white/45 font-mono tracking-wide">1:51</span>
    </div>
  </div>
</div>
```

---

## 15. Terminal Animation

Typing animation with agent deployment lines. Requires state and useEffect.

```jsx
// State
const [termLines, setTermLines] = useState(0);

const TERM_LINES = [
  { type: 'prompt', text: '$ @deploy platform --env prod' },
  { type: 'output', text: '  Initializing agent...' },
  { type: 'agent', text: '  @deploy → Provisioning resources' },
  { type: 'success', text: '  ✓ Complete — 32m 14s' },
];

// Effect
useEffect(() => {
  if (termLines < TERM_LINES.length) {
    const delay = TERM_LINES[termLines]?.type === 'prompt' ? 1200 : 600 + Math.random() * 400;
    const t = setTimeout(() => setTermLines(l => l + 1), delay);
    return () => clearTimeout(t);
  }
  const t = setTimeout(() => setTermLines(0), 4000);
  return () => clearTimeout(t);
}, [termLines]);

// JSX
<div className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)]" style={{ fontFamily: '"Cascadia Code","Fira Code","Consolas",monospace' }}>
  <div className="bg-[#2c3136] px-4 py-2.5 flex items-center gap-2">
    <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
    <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
    <span className="text-xs text-white/50 ml-2" style={{ fontFamily: '"Inter",sans-serif', fontWeight: 600 }}>Terminal Title</span>
  </div>
  <div className="bg-[#1e1e1e] px-[18px] py-4 text-xs leading-[1.9] text-[#d4d4d4] min-h-[160px]">
    {TERM_LINES.slice(0, termLines).map((line, i) => (
      <div key={i} className="whitespace-pre">
        <span className={
          line.type === 'prompt' ? 'text-[#7FBA00]' :
          line.type === 'agent' ? 'text-[#00A4EF] font-bold' :
          line.type === 'success' ? 'text-[#7FBA00]' :
          'text-[#8E8E8E]'
        }>{line.text}</span>
      </div>
    ))}
    {termLines < TERM_LINES.length && (
      <span className="inline-block w-2 h-4 bg-[#d4d4d4] ml-0.5 align-text-bottom"
        style={{ animation: 'blink 1s step-end infinite' }} />
    )}
  </div>
</div>
```

---

## 16. Tech Logos Bar

Colored badge strip.

```jsx
<div className="py-12 px-6 bg-white">
  <div className="flex justify-center items-center gap-10 flex-wrap">
    {TECH.map(t => (
      <span key={t.name} className="text-sm font-extrabold px-5 py-2 rounded-full text-white tracking-[0.03em]"
        style={{ background: t.color }}>{t.name}</span>
    ))}
  </div>
</div>
```

---

## 17. Getting Started Steps

Numbered step cards.

```jsx
<div className="py-20 px-6 bg-[#F3F2F1]">
  <h2 className="text-[40px] font-extrabold tracking-tight text-[#171717] text-center mb-2">Get Started</h2>
  <p className="text-base text-[#616161] text-center mb-12 max-w-[600px] mx-auto">Subtitle.</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
    {STEPS.map(s => (
      <div key={s.n} className="bg-white rounded-2xl px-6 py-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]">
        <div className="w-14 h-14 rounded-full bg-[#0078D4] text-white text-2xl font-black inline-flex items-center justify-center mb-5">
          {s.n}
        </div>
        <div className="text-xl font-extrabold text-[#171717] mb-2">{s.title}</div>
        <div className="text-sm text-[#616161] leading-[1.7]">{s.desc}</div>
      </div>
    ))}
  </div>
</div>
```

---

## 18. CTA Footer

Dark call-to-action section.

```jsx
<div className="py-20 px-6 bg-[#2c3136] text-center">
  <h2 className="text-[32px] font-extrabold text-white mb-2">Call to Action Title</h2>
  <p className="text-sm text-white/60 mb-8">Subtitle description.</p>
  <div className="flex justify-center gap-4 flex-wrap">
    <a href="#" className="px-7 py-3.5 rounded-full text-sm font-bold bg-[#0078D4] text-white hover:bg-[#005faa] hover:-translate-y-0.5 transition-all no-underline">
      Primary Action
    </a>
    <a href="#" className="px-7 py-3.5 rounded-full text-sm font-bold bg-transparent text-white border-2 border-white/30 hover:border-white hover:-translate-y-0.5 transition-all no-underline">
      Secondary Action
    </a>
  </div>
  <div className="text-xs text-white/40 font-medium tracking-[0.05em] mt-12">
    Footer attribution text
  </div>
  <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="mt-8 text-[13px] font-semibold text-white/50 hover:text-white bg-transparent border-none cursor-pointer transition-colors"
    style={{ fontFamily: '"Inter",sans-serif' }}>
    ↑ Back to Top
  </button>
</div>
```

---

## 19. Bottom Footer

Light footer bar with credits.

```jsx
<div className="bg-[#F8F9FB] border-t border-[#E1E1E1] py-5 px-6">
  <div className="flex items-center justify-between max-w-[1200px] mx-auto w-full">
    <div className="flex items-center gap-3">
      <span className="text-xs text-[#8E8E8E]">Site Name</span>
    </div>
    <div className="text-xs text-[#8E8E8E]">
      © 2026 Organization.{' '}
      <a href="https://github.com/paulanunes85" target="_blank" rel="noopener noreferrer"
        className="text-[#0078D4] font-semibold no-underline hover:underline">@paulanunes85</a>
    </div>
  </div>
</div>
```

---

## 20. Scroll Reveal Setup

Standard scroll-reveal implementation for use in every site.

```jsx
import { useState, useEffect, useRef } from 'react';

// Inside component:
const [visible, setVisible] = useState({});
const sectionRefs = useRef({});

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(entry => {
      if (entry.isIntersecting) {
        setVisible(prev => ({ ...prev, [entry.target.id]: true }));
      }
    }),
    { threshold: 0.1 }
  );
  Object.values(sectionRefs.current).forEach(el => el && observer.observe(el));
  return () => observer.disconnect();
}, []);

const ref = (id) => (el) => { sectionRefs.current[id] = el; };
const reveal = (id) => `transition-all duration-700 ease-out ${visible[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

// Usage on sections:
<div id="evolution" ref={ref('evolution')} className={reveal('evolution')}>
  {/* section content */}
</div>
```

Also add the keyframes style tag inside the component:

```jsx
<style>{`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
  html { scroll-behavior: smooth; }
`}</style>
```
