import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Globe, Terminal, Cpu, Zap, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, success
  const [logs, setLogs] = useState([
    { type: 'system', text: 'Initializing secure link...' },
    { type: 'success', text: 'Connection established via Port 443' },
    { type: 'system', text: 'Waiting for user input...' }
  ]);

  const addLog = (text, type = 'system') => {
    setLogs(prev => [...prev, { text, type, time: new Date().toLocaleTimeString() }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    addLog('Initiating transmission sequence...', 'system');
    
    // Simulate real-time progress
    setTimeout(() => addLog('Encrypting data packets...', 'system'), 800);
    setTimeout(() => addLog('Bypassing local firewalls...', 'warning'), 1600);
    setTimeout(() => addLog('Handshaking with remote server...', 'system'), 2400);
    
    setTimeout(() => {
      setStatus('success');
      addLog('TRANSMISSION SUCCESSFUL', 'success');
      addLog('Acknowledgment received from Node 01', 'success');
    }, 3500);

    // Reset after success
    setTimeout(() => {
      setStatus('idle');
      setLogs([
        { type: 'system', text: 'System ready for new input.' },
        { type: 'success', text: 'Buffer cleared.' }
      ]);
      e.target.reset();
    }, 8000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white overflow-hidden relative">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* Left: Command Center / Terminal Aesthetic */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-px w-12 bg-secondary" />
                <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs">Communication Node</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-display font-black text-primary mb-8 leading-none"
              >
                Establish <span className="text-secondary italic">Contact.</span>
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="flex-1 bg-primary border border-gray-800 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group flex flex-col"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex items-center gap-3 text-white/20">
                  <Terminal size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">system.bash — contact_node</span>
                </div>
              </div>

              {/* Terminal Logs */}
              <div className="flex-1 font-mono text-[13px] space-y-3 overflow-y-auto max-h-[300px] mb-8 scrollbar-hide">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-white/20">[{log.time || '00:00:00'}]</span>
                    <span className={`
                      ${log.type === 'system' ? 'text-white/60' : ''}
                      ${log.type === 'success' ? 'text-secondary' : ''}
                      ${log.type === 'warning' ? 'text-yellow-500' : ''}
                    `}>
                      {log.type === 'success' ? '✔ ' : '> '}{log.text}
                    </span>
                  </div>
                ))}
                {status === 'sending' && (
                  <motion.div 
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-4 bg-secondary inline-block ml-1"
                  />
                )}
              </div>

              <div className="pt-8 border-t border-white/5 mt-auto">
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:kartikagouda644@gmail.com" className="flex-1 min-w-[200px] flex items-center gap-4 bg-white/5 p-4 rounded-2xl hover:bg-secondary/10 transition-all border border-transparent hover:border-secondary/20 group/item">
                    <Mail className="text-secondary" size={20} />
                    <span className="text-white text-sm font-bold truncate">kartikagouda644@gmail.com</span>
                  </a>
                  <div className="flex gap-4">
                    {[Github, Linkedin].map((Icon, i) => (
                      <button key={i} className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-secondary hover:border-secondary/50 hover:bg-secondary/5 transition-all">
                        <Icon size={24} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Scanline */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/[0.02] to-transparent h-20 w-full animate-scanline" />
            </motion.div>
          </div>

          {/* Right: Modern Glass Form */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-slate-50 border border-gray-100 rounded-[3rem] p-12 md:p-16 shadow-sm relative h-full flex flex-col justify-center overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="text-center space-y-8"
                  >
                    <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto text-secondary">
                      <CheckCircle2 size={48} />
                    </div>
                    <div>
                      <h3 className="text-4xl font-display font-black text-primary mb-4 italic">Transmission Sent</h3>
                      <p className="text-gray-500 max-w-sm mx-auto">Your message has been encoded and successfully delivered to the mainframe. Expect a response soon.</p>
                    </div>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="px-8 py-4 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-secondary transition-all"
                    >
                      New Transmission
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    <div className="mb-12">
                      <h3 className="text-3xl font-display font-black text-primary mb-4 italic">Initiate Session</h3>
                      <p className="text-gray-500">Fill in the deployment parameters below.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Identifier</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Your Name"
                          className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 focus:border-secondary/30 transition-all outline-none text-primary font-medium"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Return Path</label>
                        <input 
                          required
                          type="email" 
                          placeholder="Email Address"
                          className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 focus:border-secondary/30 transition-all outline-none text-primary font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Transmission Subject</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Project Title"
                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 focus:border-secondary/30 transition-all outline-none text-primary font-medium"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Core Message</label>
                      <textarea 
                        required
                        rows="4" 
                        placeholder="Describe the architectural requirements..."
                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 focus:border-secondary/30 transition-all outline-none text-primary font-medium resize-none"
                      />
                    </div>

                    <button 
                      disabled={status === 'sending'}
                      className="w-full group flex items-center justify-center gap-4 py-6 bg-primary text-white rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-secondary hover:shadow-xl hover:shadow-secondary/20 transition-all disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Encrypting...' : 'Execute Transmission'}
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Status Badge */}
              <div className="absolute -top-4 -right-4 bg-secondary text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-white ${status === 'sending' ? 'animate-ping' : ''}`} />
                {status === 'sending' ? 'Transmitting' : 'Node Online'}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;