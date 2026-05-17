import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Eye, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

const Resume = () => {
  const resumeLink = "https://drive.google.com/file/d/1HtD1uV1B2RPP7-sVAV5pN_wslsfC5_2S/view?usp=sharing"; 

  return (
    <section id="resume" className="py-32 bg-slate-50 text-primary overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 text-gray-500 mb-4 md:mb-6">
              <div className="h-[2px] w-8 md:w-12 bg-secondary rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] font-display">Documentation</span>
            </div>
            <h2 className="text-3xl md:text-8xl font-black uppercase tracking-tighter font-display italic leading-none text-primary">
              Curriculum <span className="text-secondary">Vitae</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 max-w-sm text-xs md:text-sm md:text-right leading-relaxed font-medium uppercase tracking-widest"
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
            <div className="relative bg-white border border-gray-100 rounded-3xl shadow-sm p-6 md:p-20 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none transition-all" />
              
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 md:gap-16 relative z-10">
                
                {/* File Icon Visual */}
                <div className="relative shrink-0">
                  <div className="w-32 h-44 md:w-48 md:h-64 bg-slate-50 border border-gray-100 rounded-2xl flex items-center justify-center group-hover:border-secondary/30 transition-all duration-700 shadow-inner">
                    <FileText size={60} className="text-gray-300 md:size-[80px] group-hover:text-primary transition-colors duration-700" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-secondary p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg shadow-secondary/20">
                    <Sparkles size={20} className="text-white animate-pulse" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 text-center lg:text-left w-full overflow-hidden">
                  <h3 className="text-xl md:text-4xl font-black font-display uppercase italic tracking-tighter mb-6 text-primary group-hover:text-secondary transition-colors break-all leading-tight">
                    Karthik_Gouda_Resume.pdf
                  </h3>
                  <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 md:gap-6 text-[9px] md:text-[10px] text-gray-500 font-black uppercase tracking-widest mb-10 md:mb-12">
                    <span className="flex items-center gap-2 justify-center lg:justify-start"><CheckCircle2 size={12} className="text-secondary"/> Verified Source</span>
                    <span className="hidden sm:inline">•</span>
                    <span>PDF Document</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Cloud Hosted</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
                    <a 
                      href={resumeLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-secondary text-white font-black uppercase tracking-widest text-[10px] md:text-xs rounded-full hover:shadow-xl hover:shadow-secondary/20 transition-all duration-500 w-full sm:w-auto hover:-translate-y-1"
                    >
                      <Eye size={18} /> Preview Document
                    </a>
                    
                    <a 
                      href="https://linkedin.com/in/karthikgouda15" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-white text-gray-500 hover:text-primary font-black uppercase tracking-widest text-[10px] md:text-xs border border-gray-200 hover:border-gray-300 rounded-full transition-all w-full sm:w-auto shadow-sm hover:shadow-md"
                    >
                      <ExternalLink size={18} /> LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Summary Bar */}
              <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 md:pt-12 border-t border-gray-100">
                {[
                  { label: "SDE", val: "Role Target" },
                  { label: "MERN", val: "Core Stack" },
                  { label: "DSA", val: "Problem Solving" },
                  { label: "AI", val: "Future Focus" }
                ].map((item, i) => (
                  <div key={i} className="text-center group/item">
                    <div className="text-primary font-black font-display uppercase italic text-lg md:text-xl group-hover/item:text-secondary transition-colors">{item.label}</div>
                    <div className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest font-black mt-1">{item.val}</div>
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