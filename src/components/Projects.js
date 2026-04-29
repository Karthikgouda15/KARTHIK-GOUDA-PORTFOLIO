import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";

const Projects = ({ setView, setSelectedProject }) => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "AI Mentor Chatbot",
      category: "AI & ML",
      image: "/projects/ai_mentor.png",
      description: "A full-stack AI mentorship platform leveraging Gemini 2.5 Flash for personalized career guidance and skill mapping.",
      tech: ["MERN Stack", "Gemini AI", "LangChain", "Azure"],
      link: "https://github.com/Karthikgouda15/AI-Mentor-Chatbot",
      github: "https://github.com/Karthikgouda15/AI-Mentor-Chatbot",
      whatIDid: [
        "Architected a scalable full-stack mentorship platform using the MERN stack.",
        "Integrated Gemini 2.5 Flash API for intelligent, context-aware career guidance.",
        "Engineered real-time chat and skill-mapping features using WebSockets and LangChain.",
        "Deployed the application infrastructure on Azure for high availability and performance."
      ]
    },
    {
      title: "Service-Mate",
      category: "Full Stack",
      image: "/projects/service_mate.png",
      description: "Real-time service booking platform with integrated scheduling, provider tracking, and seamless MERN architecture.",
      tech: ["Node.js", "Redis", "Socket.io", "MongoDB"],
      link: "https://github.com/Karthikgouda15/Service-Mate",
      github: "https://github.com/Karthikgouda15/Service-Mate",
      whatIDid: [
        "Developed a comprehensive service booking system with distinct roles for customers and providers.",
        "Implemented real-time provider tracking and instant notifications using Socket.io and Redis.",
        "Designed and optimized complex MongoDB aggregation pipelines for efficient scheduling and querying.",
        "Built a responsive, user-friendly frontend to handle dynamic states and smooth user flows."
      ]
    },
    {
      title: "Emotify - AI Powered Music Player",
      category: "AI & ML",
      image: "/projects/emotify.png",
      description: "Emotion-based music recommendation engine using facial recognition to curate mood-synchronized playlists.",
      tech: ["React", "Face-api.js", "Spotify API", "Express"],
      link: "https://github.com/Karthikgouda15/Emotify",
      github: "https://github.com/Karthikgouda15/Emotify",
      whatIDid: [
        "Integrated Face-api.js to perform real-time facial emotion recognition in the browser.",
        "Connected with the Spotify Web API to dynamically generate playlists based on the detected mood.",
        "Built a secure Express backend to handle API authentication and token management.",
        "Designed an immersive, glassmorphism UI to enhance the user experience."
      ]
    },
    {
      title: "TravelDeskX",
      category: "Systems",
      image: "https://3.imimg.com/data3/QJ/TO/GLADMIN-4048599/ee-500x500.jpg",
      description: "Enterprise-grade travel management platform with an optimized minimalist UI and robust booking workflows.",
      tech: ["React", "Tailwind", "RESTful API", "Vite"],
      link: "https://github.com/Karthikgouda15/TravelDeskX",
      github: "https://github.com/Karthikgouda15/TravelDeskX",
      whatIDid: [
        "Engineered an enterprise-level booking workflow handling complex travel constraints and multi-city routes.",
        "Eliminated page transition latency by migrating away from lazy loading, ensuring instant navigation.",
        "Populated the database with a robust set of real-world routes to simulate a professional Amadeus-level experience.",
        "Crafted a visually stunning and fully responsive UI using Tailwind CSS."
      ]
    },
    {
      title: "Airbnb Clone",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
      description: "A full-stack property booking platform featuring listings, reservation management, and secure user authentication.",
      tech: ["MERN Stack", "Tailwind CSS", "Cloudinary", "JWT"],
      link: "https://github.com/Karthikgouda15/AirBnb",
      github: "https://github.com/Karthikgouda15/AirBnb",
      whatIDid: [
        "Developed a comprehensive booking system with real-time date availability checking.",
        "Implemented secure user authentication and authorization workflows using JWT.",
        "Integrated Cloudinary for robust image uploading and management for property listings.",
        "Designed a responsive and intuitive user interface optimized for both mobile and desktop."
      ]
    },
    {
      title: "Zerodha Clone",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
      description: "A comprehensive trading platform clone replicating the core functionalities of a modern stock brokerage dashboard.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/Karthikgouda15/Zerodha-",
      github: "https://github.com/Karthikgouda15/Zerodha-",
      whatIDid: [
        "Engineered a real-time dashboard for tracking stock portfolios and market movements.",
        "Implemented secure user authentication and session management for financial data.",
        "Built a robust backend using Express and MongoDB to handle portfolio management queries.",
        "Designed an analytical user interface with clean, data-heavy tables and interactive elements."
      ]
    }
  ];

  const categories = ["all", "Full Stack", "AI & ML", "Systems"];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 md:py-32 bg-soft relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-12 bg-secondary" />
              <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs">Portfolio</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-black text-primary mb-8"
            >
              Featured <span className="text-secondary italic font-normal">Implementations.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-xl leading-relaxed"
            >
              A showcase of architectural breakthroughs and complex application
              development focused on performance and scale.
            </motion.p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 p-2 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-gray-400 hover:text-primary hover:bg-gray-50"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => {
                  if (setView && setSelectedProject) {
                    setSelectedProject(project);
                    setView('project');
                    window.scrollTo(0, 0);
                  }
                }}
                className="group relative bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />


                  {/* Category Tag */}
                  <div className="absolute top-8 left-8 px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-lg border border-white/50">
                    {project.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-12 md:p-16">
                  <h3 className="text-3xl md:text-4xl font-display font-black text-primary mb-6 group-hover:text-secondary transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.tech.map(t => (
                      <span key={t} className="px-5 py-2 bg-slate-50 text-slate-500 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-slate-100 group-hover:border-secondary/20 group-hover:bg-secondary/5 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-10 border-t border-gray-100">
                    <button
                      onClick={() => {
                        if (setView && setSelectedProject) {
                          setSelectedProject(project);
                          setView('project');
                          window.scrollTo(0, 0);
                        }
                      }}
                      className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-primary hover:text-secondary group/btn transition-all"
                    >
                      Analysis & Architecture
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover/btn:bg-secondary group-hover/btn:text-white transition-all">
                        <ArrowRight size={18} />
                      </div>
                    </button>
                    <Layers size={24} className="text-gray-200" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 text-center"
        >
          <button className="px-16 py-6 bg-white border border-gray-100 rounded-[2rem] text-xs font-black uppercase tracking-[0.3em] text-primary hover:bg-primary hover:text-white hover:shadow-2xl transition-all duration-500">
            Expand Repository
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
