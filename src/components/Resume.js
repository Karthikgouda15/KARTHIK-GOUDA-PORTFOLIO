import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Eye, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

const Resume = () => {
  const resumeLink = "https://drive.google.com/file/d/1HtD1uV1B2RPP7-sVAV5pN_wslsfC5_2S/view?usp=sharing"; 

  return (
    <section id="resume" className="py-32 bg-black text-white overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 text-primary mb-6">
              <div className="h-[2px] w-12 orange-gradient rounded-full" />
              <span className="text-xs font-black uppercase tracking-[0.5em] font-display">Documentation</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter font-display italic">
              Curriculum <span className="text-transparent bg-clip-text orange-gradient">Vitae</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 max-w-sm text-sm md:text-right leading-relaxed font-medium uppercase tracking-widest"
          >
            A comprehensive record of my technical expertise, academic background, and professional accomplishments.
          </motion.p>
        </div>

        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative group w-full max-w-4xl"
          >
            {/* The Main Card */}
            <div className="relative glass-card border-white/5 p-10 md:p-20 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/10 transition-all" />
              
              <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
                
                {/* File Icon Visual */}
                <div className="relative">
                  <div className="w-48 h-64 glass-card border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-all duration-700">
                    <FileText size={80} className="text-gray-800 group-hover:text-primary transition-colors duration-700" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 orange-gradient p-4 rounded-2xl shadow-2xl shadow-primary/40">
                    <Sparkles size={24} className="text-white animate-pulse" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-4xl font-black font-display uppercase italic tracking-tighter mb-4 text-white group-hover:text-primary transition-colors">
                    Karthik_Gouda_Resume.pdf
                  </h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-6 text-[10px] text-gray-500 font-black uppercase tracking-widest mb-12">
                    <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary"/> Verified Source</span>
                    <span>• PDF Document</span>
                    <span>• Cloud Hosted</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-6">
                    <a 
                      href={resumeLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-3 px-10 py-5 orange-gradient text-white font-black uppercase tracking-widest text-xs rounded-full hover:orange-glow transition-all duration-500 shadow-2xl"
                    >
                      <Eye size={18} /> Preview Document
                    </a>
                    
                    <a 
                      href="https://linkedin.com/in/karthikgouda15" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-3 px-10 py-5 glass-card text-gray-400 hover:text-white font-black uppercase tracking-widest text-xs border-white/10 hover:border-primary/30 transition-all"
                    >
                      <ExternalLink size={18} /> LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Summary Bar */}
              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5">
                {[
                  { label: "SDE", val: "Role Target" },
                  { label: "MERN", val: "Core Stack" },
                  { label: "DSA", val: "Problem Solving" },
                  { label: "AI", val: "Future Focus" }
                ].map((item, i) => (
                  <div key={i} className="text-center group/item">
                    <div className="text-white font-black font-display uppercase italic text-xl group-hover/item:text-primary transition-colors">{item.label}</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-widest font-black mt-1">{item.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;