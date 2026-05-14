import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Database,
  Layers,
  Brain,
  Layout
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillGroups = [
    {
      title: "CORE DEV",
      level: "LEVEL 01",
      icon: Code2,
      skills: [
        { name: "REACT/NEXT.JS", progress: 95 },
        { name: "NODE.JS", progress: 90 },
        { name: "TYPESCRIPT", progress: 88 }
      ]
    },
    {
      title: "BACKEND",
      level: "LEVEL 02",
      icon: Database,
      skills: [
        { name: "POSTGRESQL", progress: 85 },
        { name: "REDIS", progress: 80 },
        { name: "MICROSERVICES", progress: 75 }
      ]
    },
    {
      title: "CLOUD & AI",
      level: "LEVEL 03",
      icon: Brain,
      skills: [
        { name: "AZURE (AZ-900)", progress: 82 },
        { name: "LLM/LANGCHAIN", progress: 78 },
        { name: "DOCKER/K8S", progress: 85 }
      ]
    },
    {
      title: "PLATFORM",
      level: "LEVEL 04",
      icon: Layers,
      skills: [
        { name: "SYSTEM DESIGN", progress: 88 },
        { name: "AUTH/OAUTH", progress: 92 },
        { name: "WEBSOCKETS", progress: 85 }
      ]
    },
    {
      title: "DESIGN",
      level: "LEVEL 05",
      icon: Layout,
      skills: [
        { name: "TAILWIND CSS", progress: 95 },
        { name: "FRAMER MOTION", progress: 90 },
        { name: "UX STRATEGY", progress: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Subtle Dot Matrix Pattern */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-secondary" />
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs">Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black text-primary mb-8"
          >
            Technical <span className="text-secondary italic">Inventory.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-xl leading-relaxed max-w-2xl"
          >
            A systematic breakdown of my engineering capabilities across the full stack
            and modern cloud infrastructure.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="relative p-8 rounded-[2rem] bg-slate-50 border border-gray-100 hover:border-secondary/30 transition-all group overflow-hidden hover:bg-white hover:shadow-2xl"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-secondary group-hover:text-white transition-all">
                    <group.icon size={28} />
                  </div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{group.level}</span>
                </div>

                <h3 className="text-3xl font-display font-black text-primary mb-10 tracking-tight leading-none uppercase italic group-hover:text-secondary transition-colors">
                  {group.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word}<br />
                    </React.Fragment>
                  ))}
                </h3>

                <div className="space-y-8">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-primary transition-colors">{skill.name}</span>
                      </div>
                      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.progress}%` } : {}}
                          transition={{ duration: 1.5, delay: 0.5 + groupIndex * 0.1 }}
                          className="h-full bg-secondary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Marquee */}
        <div className="mt-40 overflow-hidden py-12 border-y border-gray-50 flex items-center bg-white">
          <div className="flex w-max animate-marquee space-x-12 md:space-x-24 px-6 md:px-12">
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-gray-200 uppercase tracking-tighter">NODE.JS</span>
                <span className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-gray-200 uppercase tracking-tighter">AZURE</span>
                <span className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-gray-200 uppercase tracking-tighter">DOCKER</span>
                <span className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-gray-200 uppercase tracking-tighter">KUBERNETES</span>
                <span className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-gray-200 uppercase tracking-tighter">TYPESCRIPT</span>
                <span className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-gray-200 uppercase tracking-tighter">REACT</span>
                <span className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-gray-200 uppercase tracking-tighter">NEXT.JS</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;