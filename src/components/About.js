import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  ChevronRight,
  Code2,
  Cpu,
  Globe,
  Github,
  Award
} from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = [
    {
      company: "Genesis",
      role: "Software Development Engineer (Internship)",
      period: "Feb 2026 - Present",
      location: "Bengaluru, India (Remote)"
    },
    {
      company: "Tekavach",
      role: "Full-Stack Developer · AI Platform (Internship)",
      period: "Feb 2026 - Present",
      location: "Bengaluru, India (Remote)"
    },
    {
      company: "IEEE National Conference",
      role: "Technical Lead & Paper Reviewer",
      period: "Nov 2025",
      location: "Dr. SMCE"
    },
    {
      company: "Innovatiaa Hackathon 1.0",
      role: "Technical Lead",
      period: "Sept 2025",
      location: "Dr. SMCE"
    }
  ];

  const education = [
    {
      school: "Dr Sri Sri Sri Shivakumara Mahaswamy college of Engineering",
      degree: "Bachelor of Engineering - BE, Computer Science",
      period: "Nov 2022 - Nov 2026",
      grade: "8.5 CGPA",
      details: "Focusing on Core CS fundamentals: DSA, System Design (HLD/LLD), OS, DBMS, and Computer Networks."
    },
    {
      school: "Sri Vidyaniketan PU College",
      degree: "Pre-University (Science)",
      period: "2020 - 2022",
      details: "Completed secondary education with a focus on Physics, Chemistry, Mathematics, and Computer Science."
    }
  ];

  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container mx-auto px-6">
        <div ref={ref} className="flex flex-col lg:flex-row gap-24">

          {/* Left: Bio / Story */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-12 leading-tight">
                Engineering <br />
                <span className="text-secondary">with Precision.</span>
              </h2>

              <div className="space-y-8 text-lg text-gray-500 leading-relaxed max-w-xl">
                <p className="font-medium text-primary/80">
                  Software Developer and CSE undergrad building production-grade, scalable systems at the intersection of full-stack engineering, system design, and applied AI.
                </p>

                <p>
                  At Genesis, I contribute across the full SDLC — designing RESTful APIs, architecting React.js frontends, optimising MongoDB data layers, and deploying with Azure — following Agile practices to ship clean, maintainable code in team environments.
                </p>

                <p>
                  I add value to teams through strong problem-solving skills, a solid foundation in Data Structures & Algorithms and System Design, and the ability to quickly learn and adapt to new technologies. I work effectively in collaborative environments and aim to deliver high-quality solutions aligned with business goals.
                </p>

                <div className="pt-10 space-y-10">
                  <div className="flex flex-wrap gap-10">
                    <div>
                      <div className="text-secondary font-bold text-3xl mb-1">AZ-900</div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-black">Microsoft Azure</div>
                    </div>
                    <div className="w-[1px] bg-gray-200 self-stretch" />
                    <div>
                      <div className="text-secondary font-bold text-3xl mb-1">OCI 2025</div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-black">Oracle Cloud</div>
                    </div>
                  </div>

                  <p className="text-gray-400 italic text-xl leading-relaxed">
                    🚀 Targeting SDE roles at product-driven engineering teams building systems at scale.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-12">
                  <a
                    href="https://www.linkedin.com/in/karthikgouda15/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[280px] flex items-center gap-4 p-3 bg-[#121212] rounded-[1.5rem] border border-white/5 shadow-2xl transition-all hover:scale-[1.02] hover:bg-[#1a1a1a]"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/20">
                      <img src="/images/KarthikGouda.jpeg" alt="Karthik Gouda" className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-white font-bold tracking-tight">Karthik Gouda</span>
                        <div className="w-[1px] h-3 bg-white/20 mx-1" />
                        <span className="text-blue-400 font-bold text-xs flex items-center gap-1.5">
                          <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                            <div className="text-[10px] text-white font-bold">in</div>
                          </div>
                          Professional Network
                        </span>
                      </div>
                      <div className="text-gray-500 text-[10px] truncate">Building scalable full-stack systems • SDE Intern @ Genesis</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Karthikgouda15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[280px] flex items-center gap-4 p-3 bg-[#121212] rounded-[1.5rem] border border-white/5 shadow-2xl transition-all hover:scale-[1.02] hover:bg-[#1a1a1a]"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/20">
                      <img src="/images/KarthikGouda.jpeg" alt="Karthik Gouda" className="w-full h-full object-cover grayscale-[50%] hover:grayscale-0 transition-all" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-white font-bold tracking-tight">Karthik Gouda</span>
                        <div className="w-[1px] h-3 bg-white/20 mx-1" />
                        <span className="text-gray-400 font-bold text-xs flex items-center gap-1.5">
                          <Github size={14} className="text-white" />
                          Open Source
                        </span>
                      </div>
                      <div className="text-gray-500 text-[10px] truncate">MERN Stack</div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Timeline (Experience & Education) */}
          <div className="flex-1">
            <div className="space-y-16">

              {/* Experience Timeline */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary uppercase tracking-tight">Professional Journey</h3>
                </div>

                <div className="space-y-12 relative before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200">
                  {experience.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="relative pl-16 group"
                    >
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center text-primary group-hover:border-secondary group-hover:text-secondary transition-all z-10 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-current" />
                      </div>

                      <div className="py-2">
                        <div className="flex flex-col gap-2">
                          <div>
                            <h4 className="text-xl font-bold text-primary mb-1">{item.role}</h4>
                            <div className="text-secondary font-bold text-sm uppercase tracking-widest mb-1">{item.company}</div>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                            <Calendar size={14} />
                            {item.period}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education Timeline */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary uppercase tracking-tight">Academic Foundation</h3>
                </div>

                <div className="space-y-12 relative before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200">
                  {education.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="relative pl-16 group"
                    >
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center text-primary group-hover:border-secondary group-hover:text-secondary transition-all z-10 shadow-sm">
                        <GraduationCap size={20} />
                      </div>

                      <div className="py-2">
                        <h4 className="text-xl font-bold text-primary mb-1">{item.school}</h4>
                        <div className="text-secondary font-bold text-sm mb-4">{item.degree}</div>

                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                            <Calendar size={14} />
                            {item.period}
                          </div>
                          {item.grade && (
                            <div className="text-xs font-bold text-gray-400">
                              Grade: {item.grade}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;