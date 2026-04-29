import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, GitBranch, 
  Trophy, Zap, 
  Activity, Terminal,
  ChevronRight,
  BrainCircuit,
  Layers,
  Globe,
  Clock
} from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, subtext, color, delay, theme }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`p-10 border relative overflow-hidden group transition-all duration-700 ${
      theme === 'dark' 
      ? 'glass-card border-white/5 hover:border-primary/40' 
      : 'bg-white border-black/5 shadow-xl hover:border-primary/40'
    }`}
  >
    <div className={`absolute -right-8 -top-8 w-32 h-32 ${color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-all`} />
    
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-8">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-2xl orange-gradient`}>
          <Icon size={24} />
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Live</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-1">
        <h4 className={`text-5xl font-black font-display italic tracking-tighter group-hover:text-primary transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {value}
        </h4>
        <div className={`text-[10px] font-black uppercase tracking-[0.4em] ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>{label}</div>
      </div>

      <div className={`mt-8 pt-6 border-t flex items-center justify-between ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}>
        <span className="text-[10px] font-bold text-gray-400 italic">{subtext}</span>
        <ChevronRight size={14} className="text-gray-700 group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  </motion.div>
);

const LiveStats = ({ theme }) => {
  const [commits, setCommits] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCommits(prev => (prev < 1240 ? prev + 4 : 1240));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { 
      icon: Code2, 
      label: "Lines of Code", 
      value: "500k+", 
      subtext: "Enterprise Scale Systems",
      color: "bg-blue-600", 
      delay: 0.1 
    },
    { 
      icon: BrainCircuit, 
      label: "Algorithms Solved", 
      value: "800+", 
      subtext: "DSA Excellence",
      color: "bg-primary", 
      delay: 0.2 
    },
    { 
      icon: Layers, 
      label: "System Designs", 
      value: "45+", 
      subtext: "Production Architectures",
      color: "bg-orange-600", 
      delay: 0.3 
    },
    { 
      icon: Zap, 
      label: "Projects Shipped", 
      value: "15+", 
      subtext: "Global Impact Platforms",
      color: "bg-yellow-600", 
      delay: 0.4 
    }
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 flex items-center justify-center ${theme === 'dark' ? 'glass-card' : 'bg-white shadow-lg border border-black/5 rounded-xl'}`}>
            <Activity className="text-primary animate-pulse" size={24} />
          </div>
          <div>
            <h3 className={`text-2xl font-black font-display uppercase italic tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Platform <span className="text-primary">Metrics</span>
            </h3>
            <div className={`text-[10px] font-black uppercase tracking-widest ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>Real-time Performance Data</div>
          </div>
        </div>
        
        <div className={`hidden md:flex items-center gap-3 px-6 py-2 border ${theme === 'dark' ? 'glass-card border-white/5' : 'bg-white shadow-sm border-black/5 rounded-lg'}`}>
          <Terminal size={14} className="text-gray-500" />
          <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            System Status: <span className="text-emerald-500">Optimal</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default LiveStats;
