import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  Sparkles,
  ArrowRight,
  Linkedin,
  Github,
  Mail,
  ChevronRight,
  Calendar
} from 'lucide-react';

const Hero = ({ setView }) => {
  return (
    <section
      id="home"
      role="banner"
      className="relative min-h-screen flex items-center justify-center pt-48 overflow-hidden"
    >
      {/* Full-screen Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/HeroBg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white mb-6 tracking-[0.05em] uppercase">
            I am <br className="sm:hidden" />
            Karthik Gouda
          </h1>

          <div className="text-base sm:text-lg md:text-xl font-medium text-white/60 mb-10 min-h-[2rem] tracking-wide">
            <span className="text-white/90 font-semibold uppercase tracking-[0.2em] text-sm">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Software Engineer',
                  2000,
                  'System Architect',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <button
              onClick={() => {
                const element = document.getElementById('about');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-white text-black rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-all shadow-xl flex items-center gap-3"
            >
              Explore My Work
              <ArrowRight size={16} />
            </button>

            <a
              href="https://www.linkedin.com/in/karthikgouda15/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/20 text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all flex items-center gap-3"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] font-bold tracking-[0.4em] text-white/40 uppercase">Scroll</span>
        <motion.div
          animate={{ height: [30, 60, 30], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-white"
        />
      </motion.div>

      {/* Subtle Social Links */}
      <div className="absolute bottom-12 left-12 hidden lg:flex flex-col gap-6">
        <a href="https://www.linkedin.com/in/karthikgouda15/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="https://github.com/Karthikgouda15" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
          <Github size={18} />
        </a>
      </div>
    </section>
  );
};

export default Hero;