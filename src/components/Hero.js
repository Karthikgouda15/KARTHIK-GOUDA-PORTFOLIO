import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  Sparkles,
  ArrowRight,
  Linkedin,
  Mail,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

const Hero = ({ setView }) => {
  return (
    <section 
      id="home" 
      role="banner"
      className="relative min-h-[90vh] flex items-center pt-36 sm:pt-40 lg:pt-48 pb-16 overflow-hidden bg-white"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0 hidden lg:block" />
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[1.1] text-primary mb-6"
            >
              Karthik <br className="hidden sm:block" />
              Gouda
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-500 mb-8 min-h-[4rem]"
            >
              <span className="text-primary font-black">
                <TypeAnimation
                  sequence={[
                    'Software Engineer',
                    2000,
                    'Full Stack Developer',
                    2000,
                    'System Architect',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
              <br /> 
              Empowering your <span className="text-secondary font-bold italic">System Architecture</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-black max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
            >
              Building production-grade, scalable full-stack systems using MERN stack and Azure, with a core focus on system design and engineering precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                aria-label="Connect with me"
                className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-full text-base sm:text-lg font-bold hover:bg-opacity-90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 min-h-[56px] group"
              >
                Let's Connect
                <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
              </button>

              <div className="flex gap-4">
                <button 
                  aria-label="LinkedIn Profile"
                  className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-secondary hover:border-secondary transition-all bg-white shadow-sm min-h-[56px] min-w-[56px]"
                >
                  <Linkedin size={24} />
                </button>
                <button 
                  aria-label="Email Me"
                  className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-secondary hover:border-secondary transition-all bg-white shadow-sm min-h-[56px] min-w-[56px]"
                >
                  <Mail size={24} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="flex-[0.8] order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative max-w-md mx-auto lg:ml-auto lg:mr-0"
            >
              <div className="absolute inset-0 bg-secondary/10 rounded-full rotate-3 -z-10 translate-x-4 translate-y-4" />

              <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/images/KarthikGouda.jpeg"
                  alt="Karthik Gouda"
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 sm:-bottom-4 sm:-left-4 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3 z-10 scale-[0.80] sm:scale-100 origin-bottom-left"
              >
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                  <Sparkles size={18} />
                </div>
                <div>
                  <div className="text-[8px] text-gray-400 uppercase tracking-widest font-bold">Expertise</div>
                  <div className="text-xs font-black text-primary whitespace-nowrap">Full Stack Developer</div>
                </div>
              </motion.div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;