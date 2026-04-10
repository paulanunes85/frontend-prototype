import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PrototypeForm } from './components/PrototypeForm';
import './App.css';

const queryClient = new QueryClient();

function Navbar() {
  return (
    <>
      <div className="color-bar-top" />
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#" className="navbar-brand">Blueprint</a>
          <div className="navbar-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#generator">Generator</a>
          </div>
          <a href="#generator" className="navbar-cta">Start Building</a>
        </div>
      </nav>
    </>
  );
}

function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-left">
        <div className="hero-tagline">
          <span className="dot" />
          AI-Powered Prototype Generation
        </div>
        <h1>
          From Idea to<br />
          Working App in<br />
          <span className="accent">Minutes</span>
        </h1>
        <p className="hero-subtitle">
          Describe your project, pick components, and let 5 AI agents generate
          a complete React + Vue prototype deployed on Azure with a shareable URL.
        </p>
        <div className="hero-buttons">
          <a href="#generator" className="btn-hero-primary">
            Start Building →
          </a>
          <a href="#how-it-works" className="btn-hero-secondary">
            How It Works →
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-value">~5 min</div>
            <div className="hero-stat-label">Idea to Prototype</div>
          </div>
          <div>
            <div className="hero-stat-value">5</div>
            <div className="hero-stat-label">AI Agents</div>
          </div>
          <div>
            <div className="hero-stat-value">8</div>
            <div className="hero-stat-label">Prototype Types</div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-terminal">
          <div className="terminal-header">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="terminal-title">Blueprint CLI</span>
          </div>
          <div className="terminal-body">
            <div><span className="prompt">$</span> <span className="cmd">blueprint generate</span></div>
            <div className="output">  Initializing prototype pipeline...</div>
            <div className="output">  <span className="accent">[1/5]</span> Parsing requirements...</div>
            <div className="output">  <span className="accent">[2/5]</span> Selecting components...</div>
            <div className="output">  <span className="accent">[3/5]</span> Generating React + Vue code...</div>
            <div className="output">  <span className="accent">[4/5]</span> Writing documentation...</div>
            <div className="output">  <span className="accent">[5/5]</span> Publishing to GitHub + Azure...</div>
            <div>&nbsp;</div>
            <div><span className="prompt">✓</span> <span className="cmd">Prototype live!</span></div>
            <div className="output">  https://my-app.azurecontainerapps.io</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HowItWorks() {
  return (
    <>
      <div className="color-bar">
        <span className="bar-red" />
        <span className="bar-green" />
        <span className="bar-blue" />
        <span className="bar-yellow" />
      </div>
      <section className="how-it-works" id="how-it-works">
        <h2>How It Works</h2>
        <p className="subtitle">From idea to live prototype in four simple steps.</p>
        <div className="steps-row">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Describe</h3>
            <p>Fill out the form with your project requirements, components, and features.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Generate</h3>
            <p>5 AI agents parse, design, code, document, and publish your prototype.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Share</h3>
            <p>Get a shareable URL on Azure, accessible instantly by your team.</p>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Iterate</h3>
            <p>Review, approve, or request changes. Ephemeral environments auto-expire.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="color-bar">
        <span className="bar-red" />
        <span className="bar-green" />
        <span className="bar-blue" />
        <span className="bar-yellow" />
      </div>
      <footer className="footer">
        Blueprint — AI-Powered Prototype Generation &copy; {new Date().getFullYear()}
      </footer>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <div className="form-container" id="generator">
        <div className="form-heading">
          <h2>Create Your Prototype</h2>
          <p>Fill out the form below and we will generate a working app in minutes.</p>
        </div>
        <PrototypeForm />
      </div>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
