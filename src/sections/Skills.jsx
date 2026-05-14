import { motion } from "framer-motion";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaPython, 
  FaDatabase, 
  FaGithub,
  FaTerminal
} from "react-icons/fa";
import { SiTailwindcss, SiPostman } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, level: 98, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, level: 95, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, level: 90, color: "text-yellow-400" },
  { name: "React.js", icon: <FaReact />, level: 95, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 92, color: "text-sky-400" },
  { name: "Python", icon: <FaPython />, level: 60, color: "text-blue-400" },
  { name: "MySQL", icon: <FaDatabase />, level: 55, color: "text-slate-400" },
  { name: "Git & GitHub", icon: <FaGithub />, level: 90, color: "text-white" },
  { name: "REST APIs", icon: <FaTerminal />, level: 85, color: "text-emerald-400" },
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="relative group p-6 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
    
    <div className="flex items-center gap-4 mb-4">
      <div className={`text-3xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
        {skill.icon}
      </div>
      <h3 className="text-lg font-bold text-white/90 group-hover:text-white transition-colors">
        {skill.name}
      </h3>
    </div>

    <div className="space-y-2">
      <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-500 font-bold">
        <span>Expertise</span>
        <span>{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
        />
      </div>
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="powers" className="relative py-32 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-500 font-mono text-sm tracking-[0.2em] uppercase mb-4"
          >
            Capabilities
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black"
          >
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Powers</span>
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-8 rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}