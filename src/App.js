import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

const App = () => {
  const [view, setView] = React.useState('portfolio');

  React.useEffect(() => {
    // Ensure body matches the theme
    document.body.className = 'bg-slate-50 text-slate-900 font-sans antialiased selection:bg-secondary/30';
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      {view === 'portfolio' ? (
        <>
          <Header setView={setView} />
          <main id="main-content">
            <Hero setView={setView} />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          
          <footer className="py-16 bg-white border-t border-gray-100" role="contentinfo">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-10">
              <div 
                className="text-3xl font-display font-black tracking-tight text-primary uppercase italic cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                K.<span className="text-secondary">G</span>
              </div>
              <p className="text-gray-500 text-sm font-medium order-3 md:order-2">
                © {new Date().getFullYear()} Karthik Gouda. Engineering with Purpose.
              </p>
              <div className="flex gap-8 text-gray-400 text-xs font-black uppercase tracking-[0.3em] order-2 md:order-3">
                <a 
                  href="https://www.linkedin.com/in/karthikgouda15/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/Karthikgouda15" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  GitHub
                </a>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <div className="min-h-screen bg-white">
          <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100 p-6 shadow-sm">
            <div className="container mx-auto flex justify-between items-center">
              <span className="text-3xl font-display font-black text-primary uppercase italic cursor-pointer" onClick={() => setView('portfolio')}>K.<span className="text-secondary">G</span></span>
              <button
                onClick={() => setView('portfolio')}
                className="px-8 py-3 rounded-full border border-gray-100 hover:border-primary transition-all text-xs font-black uppercase tracking-widest text-gray-400 hover:text-primary"
              >
                ← Return to Base
              </button>
            </div>
          </nav>
          <div className="pt-24">
            <Resume />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;