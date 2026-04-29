// import React from "react";
// import { motion } from "framer-motion";
// import { Github, Linkedin, Globe, Code2, Mail, Phone, ExternalLink, ArrowRight } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-[#050505] text-white p-6 md:p-12 font-sans border-t border-white/5">
//       {/* MAIN FOOTER CONTAINER - Styled like the screenshot but with your original dark colors */}
//       <div className="max-w-7xl mx-auto bg-[#0A0A0A] border border-white/5 rounded-[40px] p-10 md:p-16 shadow-2xl">
        
//         {/* TOP SECTION: Branding and Headline */}
//         <div className="mb-16">
//            <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="flex items-center gap-2 mb-4 text-blue-500 font-mono text-xs tracking-widest uppercase"
//             >
//               <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
//               Available for New Projects
//             </motion.div>
//             <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
//               LET'S BUILD THE FUTURE.
//             </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
//           {/* COLUMN 1: PROFILE & SOCIALS */}
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-2xl font-bold text-blue-500 mb-4">Karthik Gouda</h3>
//               <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
//                 Focusing on the intersection of high-performance backend logic and fluid frontend motion.
//               </p>
//             </div>

//             {/* Social Icons - Circular Style from Screenshot (Dark Theme) */}
//             <div className="flex gap-4">
//               {[
//                 { icon: <Github size={20} />, href: "https://github.com/Karthikgouda15", hover: "hover:text-white" },
//                 { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/karthikgouda15/", hover: "hover:text-blue-400" },
//                 { icon: <Code2 size={20} />, href: "#", hover: "hover:text-orange-400" },
//                 { icon: <Globe size={20} />, href: "#", hover: "hover:text-blue-300" },
//               ].map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.href}
//                   whileHover={{ y: -5, backgroundColor: "#1A1A1A" }}
//                   className={`w-12 h-12 bg-[#111] border border-white/10 rounded-full flex items-center justify-center transition-all ${social.hover}`}
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* COLUMN 2: QUICK LINKS */}
//           <div className="md:pl-10">
//             <h4 className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-8">Sitemap</h4>
//             <ul className="space-y-4 text-gray-400 text-lg font-medium">
//               {['Experience', 'Projects', 'Skills', 'Education', 'Achievements'].map((item) => (
//                 <li key={item}>
//                   <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors flex items-center gap-2 group">
//                     {item}
//                     <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* COLUMN 3: CONTACT - Icon boxes from Screenshot (Dark Theme) */}
//           <div className="space-y-6">
//             <h4 className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-8">Get In Touch</h4>
//             <div className="space-y-5">
//               <div className="flex items-center gap-4 group">
//                 <div className="w-12 h-12 bg-[#111] border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-blue-500/50 transition-all">
//                   <Mail size={20} className="text-gray-400 group-hover:text-white" />
//                 </div>
//                 <a href="mailto:kartikagouda644@gmail.com" className="text-gray-400 hover:text-white transition-colors break-all text-sm">
//                   kartikagouda644@gmail.com
//                 </a>
//               </div>
              
//               <div className="flex items-center gap-4 group">
//                 <div className="w-12 h-12 bg-[#111] border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-blue-500/50 transition-all">
//                   <Phone size={20} className="text-gray-400 group-hover:text-white" />
//                 </div>
//                 <span className="text-gray-400">+91 8618541131</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* BOTTOM BAR - Simple and clean */}
//       <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center px-4 text-[10px] font-mono tracking-widest text-gray-600 uppercase">
//         <div className="flex gap-8">
//           <span>© {currentYear} KARTHIK GOUDA</span>
//           <span className="hidden md:inline">/</span>
//           <span>ALL RIGHTS RESERVED</span>
//         </div>
//         <div className="flex items-center gap-4 mt-4 md:mt-0">
//           <span>BUILT WITH REACT</span>
//           <span className="text-blue-500 font-bold">V.2.0.26</span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;