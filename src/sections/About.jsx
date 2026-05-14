import { motion } from "framer-motion";
import { 
  Zap, 
  Code2, 
  Users, 
  Brain, 
  Mail, 
  Phone, 
  Linkedin,
  Github, 
  Rocket,
  Sparkles
} from "lucide-react";

export default function About() {
  const stats = [
    { icon: <Zap className="w-4 h-4 text-yellow-400" />, label: "Fast Learner" },
    { icon: <Code2 className="w-4 h-4 text-blue-400" />, label: "Detail Oriented" },
    { icon: <Users className="w-4 h-4 text-purple-400" />, label: "Team Player" },
    { icon: <Brain className="w-4 h-4 text-pink-400" />, label: "Problem Solver" },
  ];

  return (
    <section id="Profile" className="relative py-32 px-6 md:px-20 overflow-hidden bg-[#0a0a0a]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase mb-4"
          >
            Get To Know Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Code Editor Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-[#1a1a1a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-gray-500 font-mono">about_me.js</div>
              </div>
              {/* Code Content */}
              <div className="p-8 font-mono text-sm md:text-base leading-relaxed">
                <p className="text-purple-400 mb-4">
                  <span className="text-blue-400">const</span> developer = {"{"}
                </p>
                <div className="pl-6 space-y-2">
                  <p>
                    <span className="text-gray-400">name:</span>{" "}
                    <span className="text-emerald-400">"Vineetha"</span>,
                  </p>
                  <p>
                    <span className="text-gray-400">role:</span>{" "}
                    <span className="text-emerald-400">"Frontend Developer"</span>,
                  </p>
                  <p>
                    <span className="text-gray-400">experience:</span>{" "}
                    <span className="text-emerald-400">"Fresher / Intern"</span>,
                  </p>
                  <p>
                    <span className="text-gray-400">stack:</span>{" "}
                    <span className="text-orange-400">[</span>
                    <span className="text-emerald-400">"React"</span>,{" "}
                    <span className="text-emerald-400">"JS"</span>{" "}
                    <span className="text-emerald-400">"Next.js"</span>
                    <span className="text-orange-400">]</span>,
                  </p>
                  <p>
                    <span className="text-gray-400">passion:</span>{" "}
                    <span className="text-emerald-400">"Building elegant UI"</span>,
                  </p>
                  <p>
                    <span className="text-gray-400">available:</span>{" "}
                    <span className="text-orange-400">true</span>
                  </p>
                </div>
                <p className="text-purple-400 mt-4">{"}"}</p>
              </div>
            </div>

            {/* Floating Experience Card */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-[#252525] p-6 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-4 backdrop-blur-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-white">Open to Work</p>
                <p className="text-xs text-gray-500">Ready for new challenges</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white leading-tight">
                Crafting digital experiences with <span className="text-purple-400">clean code</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm a passionate Frontend Developer and B.Tech student with a strong drive for building responsive, user-friendly web applications using the <span className="text-blue-400 font-semibold">React ecosystem</span>.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Focused on writing maintainable code and delivering pixel-perfect interfaces that solve real-world problems. I enjoy turning complex designs into interactive digital realities.
              </p>
            </div>

            {/* Chips Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="bg-slate-900 p-2 rounded-lg">
                    {stat.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Footer Contact */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-gray-400 border-t border-white/5">
              <a href="mailto:vineethagodasi@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">vineethagodasi@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">91+ 9666593898</span>
              </div>
              <a href="https://linkedin.com/in/vineethagodasi" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">LinkedIn</span>
              </a>
                  <a href="https://github.com/vineethagodasi" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                <Github className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Git</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
