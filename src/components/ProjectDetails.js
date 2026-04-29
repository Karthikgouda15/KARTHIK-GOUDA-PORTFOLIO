import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, Server, Layers, Code2 } from 'lucide-react';

const ProjectDetails = ({ project }) => {
  if (!project) return null;

  return (
    <div className="bg-white min-h-[80vh] pb-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-10 -z-10 blur-3xl" />
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-secondary" />
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs">
              {project.category}
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-display font-black text-primary mb-8"
              >
                {project.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-500 leading-relaxed mb-12"
              >
                {project.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary text-white rounded-xl text-sm font-black uppercase tracking-widest hover:bg-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all flex items-center gap-3"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-primary border border-gray-200 rounded-xl text-sm font-black uppercase tracking-widest hover:border-primary transition-all flex items-center gap-3"
                >
                  <Github size={18} />
                  Repository
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex-1 w-full"
            >
              <div className="relative rounded-[2rem] overflow-hidden border border-gray-100 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto aspect-[16/10] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="container mx-auto px-6 max-w-6xl mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-slate-50 rounded-[2rem] p-10 border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm">
                  <Code2 size={24} />
                </div>
                <h3 className="text-xl font-display font-black text-primary">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-5 py-3 bg-white text-slate-600 rounded-xl text-xs font-bold uppercase tracking-widest border border-slate-100 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* What I Did */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-display font-black text-primary mb-10 flex items-center gap-4">
              <Layers className="text-secondary" size={32} />
              Implementation Details
            </h3>
            <div className="space-y-6">
              {project.whatIDid?.map((point, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white text-secondary transition-colors">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
