import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import adminDashboard from "../assets/image.png";
import sehatmithra from "../assets/sehatmithra.png";
import userImg from "../assets/user.png";
import vfxImg from "../assets/VFX.png";

const projects = [
  {
    title: "The Kings Aura - Admin",
    description:
      "A high-performance admin dashboard for a luxury fashion brand. Features comprehensive inventory management, real-time analytics, and secure order processing with a focus on UI/UX excellence.",
    image: adminDashboard,
    tech: ["React", "Tailwind CSS", "REST API"],
    github: "#",
    live: "https://admin.thekingsaura.com/dashboard",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "SehatMithra Healthcare",
    description:
      "A complete healthcare ecosystem facilitating medical service bookings and equipment rentals. Includes JWT auth, Razorpay integration, and automated scheduling for hospital operations.",
    image: sehatmithra,
    tech: ["React", "Tailwind CSS", "REST API"],
    github: "#",
    live: "https://adminsehatmithra.bharatsports11.com/dashboard",
    color: "from-emerald-500 to-teal-500",
  },
  {
      title: "The Kings Aura-User",
    description:
      "Immersive eCommerce storefront for a premium fashion house. Features sophisticated animations, elegant typography, and a seamless shopping journey from discovery to checkout.",
    image: userImg,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Redux"],
    github: "#",
    live: "https://thekingsaura.com/",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Namaha VFX",
    description:
      "Modern responsive static website developed from scratch with clean, user-friendly interfaces optimized for multiple devices. Built with reusable components and maintainable code structure.",
    image: vfxImg,
    tech: ["React.js", "Tailwind CSS"],
    github: "#",
    live: "https://namahavfx.com/",
    color: "from-orange-500 to-amber-500",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]"
    >
      {/* Card Image Area */}
      <div className="relative h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`}></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
        
        {/* Tech Badges on Image (Optional) */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 2).map((t) => (
            <span key={t} className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8">
        <div className="flex items-center gap-2 mb-4 text-blue-400 font-mono text-sm tracking-tighter">
          <FaCode className="text-xs" />
          <span>0{index + 1}. PROJECT</span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
          {project.description}
        </p>

        {/* Full Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="text-[11px] text-gray-500 border border-white/5 bg-white/5 px-2 py-0.5 rounded">
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-2 text-white font-medium text-sm hover:text-blue-400 transition-colors"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 group-hover/link:bg-blue-500/20 transition-all">
              <FaExternalLinkAlt className="text-xs" />
            </div>
            Live Preview
          </a>
          
          {/* <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-2 text-gray-400 font-medium text-sm hover:text-white transition-colors"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-hover/link:bg-white/10 transition-all">
              <FaGithub className="text-sm" />
            </div>
            Source Code
          </a> */}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="quests" className="relative py-32 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          {/* <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-500 font-mono text-sm tracking-[0.2em] uppercase mb-4"
          >
            Case Studies
          </motion.span> */}
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-center"
          >
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Quests</span>
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-8 rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex justify-center"
        >
          {/* <a
            href="#"
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-semibold group flex items-center gap-3"
          >
            View All Archives
            <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
          </a> */}
        </motion.div>
      </div>
    </section>
  );
}