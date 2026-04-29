import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  Code2, 
  Layers, 
  Send,
  FileText,
  Menu, 
  X,
  ChevronRight,
  Sun
} from 'lucide-react';

const Header = ({ setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'about', name: 'About', icon: User },
    { id: 'skills', name: 'Expertise', icon: Code2 },
    { id: 'projects', name: 'Works', icon: Layers },
    { id: 'contact', name: 'Contact', icon: Send },
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 px-4">
      <nav 
        role="navigation"
        aria-label="Main Navigation"
        className={`w-full transition-all duration-300 border shadow-2xl overflow-hidden ${
          isMenuOpen ? 'rounded-[2rem] md:rounded-[2.5rem]' : 'rounded-full'
        } ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-gray-100 py-2 sm:py-3' 
            : 'bg-white/80 backdrop-blur-lg border-gray-50/50 py-3 sm:py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
            aria-label="Go to Home"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-black italic shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              K
            </div>
            <span className="text-base sm:text-lg font-display font-bold tracking-tight text-primary">
              Karthik<span className="text-secondary font-black">G</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  aria-label={`Navigate to ${item.name}`}
                  className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-wider transition-all hover:text-primary py-2 ${
                    activeSection === item.id 
                      ? 'text-primary' 
                      : 'text-gray-700/90'
                  }`}
                >
                  <item.icon size={14} className={activeSection === item.id ? 'text-secondary' : 'text-gray-500'} />
                  {item.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 border-l border-gray-100 pl-6">
              <button 
                onClick={() => setView('resume')}
                aria-label="View Resume"
                className="px-6 py-2.5 bg-gradient-to-r from-secondary to-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-secondary/20 transition-all flex items-center gap-2 group min-h-[44px]"
              >
                Resume
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              className={`p-2.5 rounded-xl transition-all duration-200 ${
                isMenuOpen 
                  ? 'bg-primary text-white' 
                  : 'bg-slate-50 text-primary hover:bg-slate-100'
              } min-h-[44px] min-w-[44px] flex items-center justify-center border border-gray-100`}
            >
              {isMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden bg-white border-t border-gray-100/50"
            >
              <div className="px-4 py-5 flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-4 text-sm font-display font-black uppercase tracking-widest transition-all py-3 px-4 rounded-xl ${
                      activeSection === item.id 
                        ? 'bg-slate-50 text-secondary' 
                        : 'text-primary/70 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      activeSection === item.id ? 'bg-secondary text-white shadow-md shadow-secondary/20' : 'bg-white border border-gray-100 text-primary/40'
                    }`}>
                      <item.icon size={16} strokeWidth={2.5} />
                    </div>
                    {item.name}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-gray-50 mt-2">
                  <button 
                    onClick={() => setView('resume')}
                    className="w-full py-3.5 bg-gradient-to-r from-secondary to-blue-600 text-white rounded-xl text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[48px]"
                  >
                    <FileText size={16} strokeWidth={2.5} />
                    View Resume
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;