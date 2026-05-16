import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 md:py-16 px-6 border-t border-white/5 bg-slate-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-4 md:gap-3"
        >
          <div className="w-10 h-10 md:w-8 md:h-8 bg-white/5 rounded-lg flex items-center justify-center font-bold text-white border border-white/10 shadow-inner">
            VG
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-gray-200 font-bold text-lg md:text-sm md:font-mono md:tracking-widest uppercase">
              Vineetha Godasi
            </span>
            <span className="text-gray-500 text-xs tracking-wider uppercase">
              &copy; {currentYear} • Personal Portfolio
            </span>
          </div>
        </motion.div>

        <div className="flex items-center gap-8 md:gap-6">
          <motion.a
            whileHover={{ y: -3 }}
            href="https://github.com/vineethagodasi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-2xl md:text-xl p-2 bg-white/5 rounded-full md:bg-transparent"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://linkedin.com/in/vineethagodasi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-2xl md:text-xl p-2 bg-white/5 rounded-full md:bg-transparent"
          >
            <FaLinkedin />
          </motion.a>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-2 text-gray-500 text-xs md:text-sm font-medium order-first md:order-last"
        >
          Built with <FaHeart className="text-red-500 text-[10px] animate-pulse" /> using React
        </motion.div>
      </div>

      {/* Decorative text background */}
      <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 text-[4rem] sm:text-[6rem] md:text-[10rem] font-black text-white/[0.03] whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter">
        Vineetha Godasi
      </div>
    </footer>
  );
}
