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

  // Body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { id: 'home', name: 'HOME', icon: Home },
    { id: 'about', name: 'ABOUT', icon: User },
    { id: 'projects', name: 'WORKS', icon: Layers },
    { id: 'skills', name: 'EXPERTISE', icon: Code2 },
    { id: 'contact', name: 'CONTACT', icon: Send },
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
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl py-4 border-b border-gray-100 shadow-sm' : 'bg-transparent py-8'}`}>
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="container mx-auto px-6 sm:px-12 flex justify-between items-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavClick('home')}
            aria-label="Go to Home"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded shadow-sm group-hover:rotate-12 transition-transform duration-500">
                <span className="text-white font-display font-black text-[10px]">KG</span>
              </div>
              <span className="text-xl font-display font-bold tracking-[0.2em] text-primary uppercase">
                K.GOUDA
              </span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                aria-label={`Navigate to ${item.name}`}
                className={`relative text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:text-secondary py-2 ${activeSection === item.id
                  ? 'text-secondary'
                  : 'text-gray-500'
                  }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-secondary rounded-full"
                  />
                )}
              </button>
            ))}

            <button
              onClick={() => setView('resume')}
              className="ml-4 px-6 py-2.5 border border-gray-200 text-primary hover:border-secondary hover:bg-secondary hover:text-white rounded-full text-[11px] font-bold uppercase tracking-widest transition-all shadow-sm"
            >
              Resume
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary p-2"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay - Outside header to avoid clipping/transparency issues */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[100] lg:hidden flex flex-col"
          >
            {/* Header inside Menu Overlay */}
            <div className="flex justify-between items-center p-8 border-b border-white/5 bg-black">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white flex items-center justify-center rounded">
                  <span className="text-black font-display font-black text-[10px]">KG</span>
                </div>
                <span className="text-xl font-display font-bold tracking-widest text-white uppercase">
                  K.GOUDA
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2"
              >
                <X size={32} />
              </button>
            </div>

            {/* Menu Links with Staggered Animation */}
            <div className="flex-1 flex flex-col p-12 gap-10 overflow-y-auto bg-black">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-2xl font-bold uppercase tracking-[0.3em] text-left transition-all ${activeSection === item.id ? 'text-white' : 'text-white/20'}`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Resume Button at Bottom */}
            <div className="p-12 pb-20 bg-black border-t border-white/5">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setView('resume')}
                className="w-full py-5 border border-white/10 rounded-full text-[11px] font-black uppercase tracking-[0.4em] text-white hover:bg-white hover:text-black transition-all"
              >
                View Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;