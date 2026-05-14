import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-white/5 bg-slate-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center font-bold text-white border border-white/10">
            VG
          </div>
          <span className="text-gray-400 font-mono text-sm tracking-widest uppercase">
            Vineetha &copy; {currentYear}
          </span>
        </motion.div>

        <div className="flex items-center gap-8">
          <a
            href="https://github.com/vineethagodasi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/vineethagodasi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors text-xl"
          >
            <FaLinkedin />
          </a>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-2 text-gray-500 text-sm font-medium"
        >
          Built with <FaHeart className="text-red-500 text-xs animate-pulse" /> using React
        </motion.div>
      </div>

      {/* Decorative text background */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10rem] font-black text-white/5 whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter">
        Vineetha Godasi
      </div>
    </footer>
  );
}
