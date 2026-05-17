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
  Code2
} from 'lucide-react';

const Hero = ({ setView }) => {
  return (
    <section
      id="home"
      role="banner"
      className="relative min-h-screen flex items-start lg:items-center justify-center pt-20 sm:pt-24 lg:pt-24 pb-16 overflow-hidden bg-white"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0 hidden lg:block" />
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-slate-50 mb-8 mx-auto lg:mx-0 shadow-sm">
              <Sparkles size={14} className="text-secondary" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">
                Software Development Engineer
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-sans font-black leading-[0.95] text-primary mb-6 tracking-tighter">
              Karthik <br className="hidden sm:block" />
              Gouda
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-500 mb-6">
              Empowering your{' '}
              <span className="text-secondary font-bold italic">
                <TypeAnimation
                  sequence={[
                    'System Architecture',
                    2000,
                    'Scalability',
                    2000,
                    'Engineering',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </div>

            <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
              I build production-grade, scalable full-stack systems using the MERN stack and Azure, focusing on clean system design and engineering precision.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
            >
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-primary text-white rounded-[1.5rem] text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-primary/90 transition-all shadow-xl flex items-center gap-3 group"
              >
                Let's Connect
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/karthikgouda15/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:text-secondary hover:border-secondary hover:bg-slate-50 transition-all shadow-sm">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/Karthikgouda15" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:text-secondary hover:border-secondary hover:bg-slate-50 transition-all shadow-sm">
                  <Github size={20} />
                </a>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:text-secondary hover:border-secondary hover:bg-slate-50 transition-all shadow-sm"
                >
                  <Mail size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-[0.8] order-1 lg:order-2 relative flex justify-center mt-10 lg:mt-0 mb-10 lg:mb-0"
          >
            {/* Outer dotted circle */}
            <div className="absolute inset-[-20px] rounded-full border-[1px] border-dashed border-secondary/30 animate-spin" style={{ animationDuration: '25s' }} />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.15)] border-4 border-white group"
            >
              <img
                src="/images/KarthikGouda.jpeg"
                alt="Karthik Gouda"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
            </motion.div>

            {/* Floating Approach Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 lg:bottom-4 lg:-right-4 bg-[#121212] p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-white/5 flex items-center gap-2 sm:gap-3 z-20"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 rounded-lg sm:rounded-xl flex items-center justify-center text-secondary shrink-0">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="pr-2 sm:pr-4">
                <div className="text-[7px] sm:text-[8px] text-gray-400 uppercase tracking-widest font-bold mb-0.5 sm:mb-1">Focus Area</div>
                <div className="text-xs sm:text-sm font-bold text-white whitespace-nowrap leading-none">Full-Stack Systems</div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;