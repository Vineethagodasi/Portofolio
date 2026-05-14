import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Techpixe",
    type: "Internship",
    duration: "Dec 2025 - May 2026",
    location: "Hyderabad, Telangana, India · On-site",
    description: "Developed and maintained responsive web applications using React.js and modern JavaScript. Collaborated with the team to implement pixel-perfect designs and optimized frontend performance.",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "REST API", "State Management", "Git"],
    color: "from-blue-500 to-cyan-500",
  },
];

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="relative pl-8 pb-12 border-l border-white/10 last:pb-0"
  >
    {/* Timeline Dot */}
    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>
    
    <div className="group relative bg-slate-900/50 backdrop-blur-xl border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-[0.2em] mb-2">
            <FaBriefcase /> {exp.type}
          </div>
          <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
            {exp.role}
          </h3>
          <div className="text-lg font-bold text-gray-400">
            {exp.company}
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2 text-right">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaCalendarAlt /> {exp.duration}
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaMapMarkerAlt /> {exp.location}
          </div>
        </div>
      </div>

      <p className="text-gray-400 leading-relaxed mb-6">
        {exp.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {exp.skills.map((skill) => (
          <span 
            key={skill}
            className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300 group-hover:border-blue-500/20 group-hover:text-blue-300 transition-all"
          >
            <FaCode className="text-[10px]" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function Experience() {
  return (
    <section id="journey" className="relative py-32 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          {/* <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-500 font-mono text-sm tracking-[0.2em] uppercase mb-4"
          >
            History
          </motion.span> */}
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black"
          >
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Journey</span>
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-8 rounded-full"
          ></motion.div>
        </div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
