import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import panda from "../assets/panda.png";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="base"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* CENTER CONTENT */}
      <div className="text-center max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="w-12 h-[1px] bg-blue-500"></span>
          <span className="text-blue-400 font-mono text-sm tracking-[0.4em] uppercase">
            Available for Hire
          </span>
          <span className="w-12 h-[1px] bg-blue-500"></span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-black leading-tight text-white mb-6"
        >
          I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Vineetha</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-12 flex items-center justify-center mb-8"
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer ",
              2000,
              "React Specialist ",
              2000,
            // "Future Python Engineer ",
            // 2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-3xl md:text-4xl font-bold text-gray-400"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto"
        >
          Building high-performance, visually stunning digital experiences with modern web technologies. Focused on creating interfaces that feel alive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          <a
            href="#quests"
            className="group px-10 py-5 bg-white text-slate-950 font-black rounded-2xl flex items-center gap-3 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            View Quests
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#Profile"
            className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-3"
          >
            Know Me
            <FaDownload className="text-sm text-blue-500" />
          </a>
        </motion.div>
      </div>

 
    </section>
  );
}