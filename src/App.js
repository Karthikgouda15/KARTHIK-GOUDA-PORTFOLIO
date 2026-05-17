import React from 'react';
import { Linkedin, Github, Twitter, Youtube, Instagram } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import ProjectDetails from './components/ProjectDetails';
import './App.css';

const App = () => {
  const [view, setView] = React.useState('portfolio');
  const [selectedProject, setSelectedProject] = React.useState(null);

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
            <Projects setView={setView} setSelectedProject={setSelectedProject} />
            <Contact />
          </main>

          <footer className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-gray-100" role="contentinfo">
            {/* Soft background accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

                {/* Status Indicator */}
                <div className="mb-10 flex items-center gap-3 px-5 py-2.5 bg-green-50/80 border border-green-200/50 rounded-full shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-bold text-green-700 tracking-wide uppercase">Open for Opportunities</span>
                </div>

                {/* Main Text */}
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-primary mb-8 tracking-tight leading-[1.1]">
                  Got an idea?<br />
                  Let's make it <span className="text-secondary italic">happen.</span>
                </h2>

                <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mb-14 leading-relaxed font-medium">
                  Whether you need a scalable full-stack application, system architecture, or just want to bounce off some ideas—my inbox is always open.
                </p>

                {/* Actions */}
                <div className="flex justify-center mb-20">
                  <a
                    href="mailto:karthikgangavati2004@gmail.com"
                    className="px-12 py-5 rounded-2xl bg-primary text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-secondary hover:shadow-xl hover:shadow-secondary/20 hover:-translate-y-1 transition-all flex items-center justify-center"
                  >
                    Send Email
                  </a>
                </div>

                {/* Minimalist Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-12" />

                {/* Social Links & Copyright */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex items-center gap-6">
                    <a href="https://www.linkedin.com/in/karthikgouda15/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 text-gray-400 hover:bg-[#0077b5] hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0077b5]/20 transition-all" aria-label="LinkedIn">
                      <Linkedin size={20} strokeWidth={2} />
                    </a>
                    <a href="https://github.com/Karthikgouda15" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 text-gray-400 hover:bg-[#24292e] hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-[#24292e]/20 transition-all" aria-label="GitHub">
                      <Github size={20} strokeWidth={2} />
                    </a>
                    <a href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 text-gray-400 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 transition-all" aria-label="X (Twitter)">
                      <Twitter size={20} strokeWidth={2} />
                    </a>
                  </div>

                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest text-center md:text-right">
                    © {new Date().getFullYear()} Karthik Gouda.
                  </p>
                </div>

              </div>
            </div>
          </footer>
        </>
      ) : view === 'project' && selectedProject ? (
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
            <ProjectDetails project={selectedProject} />
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-slate-50">
          <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-gray-100 p-4 md:p-6 shadow-sm">
            <div className="container mx-auto flex justify-between items-center">
              <span className="text-2xl md:text-3xl font-display font-black text-primary uppercase italic cursor-pointer" onClick={() => setView('portfolio')}>K.<span className="text-secondary">G</span></span>
              <button
                onClick={() => setView('portfolio')}
                className="px-6 py-2 md:px-8 md:py-3 rounded-full border border-gray-200 hover:border-primary transition-all text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 hover:text-primary"
              >
                ← Back
              </button>
            </div>
          </nav>
          <div className="pt-20 md:pt-24">
            <Resume />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;