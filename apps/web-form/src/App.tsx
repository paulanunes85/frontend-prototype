import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Zap, Code2, Share2, RotateCcw } from 'lucide-react';
import { PrototypeForm } from './components/PrototypeForm';
import './App.css';

const queryClient = new QueryClient();

const STEPS = [
  { n: 1, icon: Zap, title: 'Describe', desc: 'Fill out the form with your project requirements, select components, and choose features.', color: '#F25022' },
  { n: 2, icon: Code2, title: 'Generate', desc: '5 AI agents parse, design, code, document, and publish your prototype automatically.', color: '#7FBA00' },
  { n: 3, icon: Share2, title: 'Share', desc: 'Get a shareable URL on Azure Container Apps, accessible instantly by your team.', color: '#00A4EF' },
  { n: 4, icon: RotateCcw, title: 'Iterate', desc: 'Review, approve, or request changes. Ephemeral environments auto-expire after TTL.', color: '#FFB900' },
];

const TERM_LINES = [
  { type: 'prompt', text: '$ blueprint generate --type dashboard' },
  { type: 'output', text: '  Initializing prototype pipeline...' },
  { type: 'agent', text: '  [1/5] Parsing requirements...' },
  { type: 'agent', text: '  [2/5] Selecting components...' },
  { type: 'agent', text: '  [3/5] Generating React + Vue code...' },
  { type: 'agent', text: '  [4/5] Writing documentation...' },
  { type: 'agent', text: '  [5/5] Publishing to GitHub + Azure...' },
  { type: 'blank', text: '' },
  { type: 'success', text: '  \u2713 Prototype live!' },
  { type: 'output', text: '  https://my-app.azurecontainerapps.io' },
];

function TerminalAnimation() {
  const [lines, setLines] = useState(0);
  useEffect(() => {
    if (lines < TERM_LINES.length) {
      const delay = TERM_LINES[lines]?.type === 'prompt' ? 1200 : 500 + Math.random() * 300;
      const t = setTimeout(() => setLines((l) => l + 1), delay);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLines(0), 3000);
    return () => clearTimeout(t);
  }, [lines]);

  return (
    <div className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)]" style={{ fontFamily: '"Cascadia Code","Fira Code","Consolas",monospace' }}>
      <div className="bg-[#2c3136] px-4 py-2.5 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <span className="text-xs text-white/50 ml-2 font-sans font-semibold">Blueprint CLI</span>
      </div>
      <div className="bg-[#1e1e1e] px-[18px] py-4 text-xs leading-[1.9] text-[#d4d4d4] min-h-[200px]">
        {TERM_LINES.slice(0, lines).map((line, i) => (
          <div key={i} className="whitespace-pre">
            <span className={
              line.type === 'prompt' ? 'text-[#7FBA00]' :
              line.type === 'agent' ? 'text-[#00A4EF] font-bold' :
              line.type === 'success' ? 'text-[#7FBA00] font-bold' :
              'text-[#8E8E8E]'
            }>{line.text}</span>
          </div>
        ))}
        {lines < TERM_LINES.length && (
          <span className="inline-block w-2 h-4 bg-[#d4d4d4] ml-0.5 align-text-bottom animate-blink" />
        )}
      </div>
    </div>
  );
}

function ColorBarTop() {
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[1000]"
      style={{ background: 'linear-gradient(to right, #F25022 0%, #F25022 25%, #7FBA00 25%, #7FBA00 50%, #00A4EF 50%, #00A4EF 75%, #FFB900 75%, #FFB900 100%)' }} />
  );
}

function Navbar() {
  return (
    <div className="fixed top-1 left-0 w-full z-50 flex items-center justify-center px-8 h-14"
      style={{ background: 'rgba(243,242,241,0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
      <div className="flex items-center w-full max-w-[1200px]">
        <a href="#" className="flex items-center gap-3 no-underline">
          <img src="/logo-msft-github.svg" alt="Microsoft + GitHub" className="h-7" />
          <span className="font-extrabold text-base text-[#171717] tracking-tight">Blueprint</span>
        </a>
        <div className="flex gap-8 ml-auto mr-8">
          {['How It Works', 'Generator'].map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
              className="text-sm font-medium text-[#616161] hover:text-[#171717] transition-colors no-underline hidden md:block">
              {link}
            </a>
          ))}
        </div>
        <a href="#generator" className="text-[13px] font-bold text-white bg-[#24292E] px-6 py-2.5 rounded-full hover:bg-[#1B1F23] hover:-translate-y-0.5 transition-all no-underline">
          Start Building
        </a>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center pt-[100px] pb-16 px-6 md:px-12 max-w-[1200px] mx-auto gap-12 md:gap-[72px] animate-fade-in">
      <div className="md:w-[48%] flex flex-col items-start">
        <div className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-5"
          style={{ color: '#0078D4', background: 'rgba(0,120,212,0.06)', border: '1px solid rgba(0,120,212,0.12)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#7FBA00]" />
          AI-Powered Prototype Generation
        </div>
        <h1 className="text-4xl md:text-[54px] font-extrabold tracking-[-0.03em] text-[#171717] mb-5 leading-[1.1] text-left">
          From Idea to<br />Working App in<br /><span className="text-[#0078D4]">Minutes</span>
        </h1>
        <p className="text-[17px] text-[#616161] mb-9 leading-[1.75] text-left max-w-[440px]">
          Describe your project, pick components, and let 5 AI agents generate a complete React + Vue prototype deployed on Azure with a shareable URL.
        </p>
        <div className="flex gap-4 mb-12">
          <a href="#generator" className="h-[54px] rounded-full px-9 text-base font-bold text-white bg-[#24292E] shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-[#1B1F23] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all flex items-center gap-2.5 no-underline">
            Start Building &rarr;
          </a>
          <a href="#how-it-works" className="h-[54px] rounded-full px-8 text-base font-semibold text-[#171717] border-2 border-[#E1E1E1] hover:border-[#171717] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 no-underline">
            How It Works &rarr;
          </a>
        </div>
        <div className="flex gap-10">
          {[{ value: '~5 min', label: 'Idea to Prototype' }, { value: '5', label: 'AI Agents' }, { value: '8', label: 'Prototype Types' }].map((s) => (
            <div key={s.label}>
              <div className="text-[32px] font-black text-[#0078D4] tracking-tight leading-none">{s.value}</div>
              <div className="text-[11px] font-bold text-[#8E8E8E] uppercase tracking-[0.12em] mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 items-start justify-end pt-4 hidden md:flex">
        <TerminalAnimation />
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="py-20 px-6 bg-[#F3F2F1]" id="how-it-works">
      <h2 className="text-[40px] font-extrabold tracking-tight text-[#171717] text-center mb-2">How It Works</h2>
      <p className="text-base text-[#616161] text-center mb-12 max-w-[600px] mx-auto">From idea to live prototype in four simple steps.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
        {STEPS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.n} className="bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)]"
              style={{ borderTop: `4px solid ${s.color}` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg font-extrabold mb-4"
                style={{ background: s.color }}>
                <Icon size={20} />
              </div>
              <div className="text-lg font-extrabold text-[#171717] mb-2">{s.title}</div>
              <div className="text-sm text-[#616161] leading-[1.7]">{s.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function GeneratorSection() {
  return (
    <div className="py-20 px-6 bg-white" id="generator">
      <h2 className="text-[40px] font-extrabold tracking-tight text-[#171717] text-center mb-2">Create Your Prototype</h2>
      <p className="text-base text-[#616161] text-center mb-12 max-w-[600px] mx-auto">Fill out the form below and we will generate a working app in minutes.</p>
      <div className="max-w-[800px] mx-auto">
        <PrototypeForm />
      </div>
    </div>
  );
}

function CTAFooter() {
  return (
    <div className="py-20 px-6 bg-[#2c3136] text-center">
      <h2 className="text-[32px] font-extrabold text-white mb-2">Ready to Build?</h2>
      <p className="text-sm text-white/60 mb-8">Generate a production-ready prototype in minutes with AI agents.</p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a href="#generator" className="px-7 py-3.5 rounded-full text-sm font-bold bg-[#0078D4] text-white hover:bg-[#005faa] hover:-translate-y-0.5 transition-all no-underline">Start Building &rarr;</a>
        <a href="https://github.com/paulanunes85/frontend-prototype" target="_blank" rel="noopener noreferrer"
          className="px-7 py-3.5 rounded-full text-sm font-bold bg-transparent text-white border-2 border-white/30 hover:border-white hover:-translate-y-0.5 transition-all no-underline">
          GitHub Repository &rarr;
        </a>
      </div>
    </div>
  );
}

function FooterBar() {
  return (
    <div className="bg-[#F8F9FB] py-6 px-6 text-center">
      <div className="h-[3px] flex mb-6">
        <span className="flex-1 bg-[#F25022]" /><span className="flex-1 bg-[#7FBA00]" /><span className="flex-1 bg-[#00A4EF]" /><span className="flex-1 bg-[#FFB900]" />
      </div>
      <p className="text-xs font-medium text-[#8E8E8E] tracking-[0.05em]">Blueprint — AI-Powered Prototype Generation &copy; {new Date().getFullYear()}</p>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorBarTop />
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <GeneratorSection />
      <CTAFooter />
      <FooterBar />
    </QueryClientProvider>
  );
}

export default App;
