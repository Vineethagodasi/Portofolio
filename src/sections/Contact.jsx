import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const contactLinks = [
{
  name: "Email",
  value: "vineethagodasi898@gmail.com",
  href: "mailto:vineethagodasi898@gmail.com",
  icon: <FaEnvelope />,
  color: "hover:text-blue-400",
  bg: "bg-blue-500/10",
},
    {
      name: "LinkedIn",
      value: "vineethagodasi",
      href: "https://linkedin.com/in/vineethagodasi",
      icon: <FaLinkedin />,
      color: "hover:text-sky-400",
      bg: "bg-sky-500/10",
    },
    {
      name: "GitHub",
      value: "vineethagodasi",
      href: "https://github.com/vineethagodasi",
      icon: <FaGithub />,
      color: "hover:text-white",
      bg: "bg-white/10",
    },
  ];

  return (
    <section id="summon" className="relative py-32 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-500 font-mono text-sm tracking-[0.2em] uppercase mb-4"
          >
            Communication
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black"
          >
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Summon</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-gray-400 text-lg max-w-2xl"
          >
            Ready to start a new project or just want to say hi? My inbox is always open.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-8 bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl transition-all duration-300 hover:border-blue-500/30 flex flex-col items-center text-center`}
            >
              <div className={`w-16 h-16 ${link.bg} rounded-2xl flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {link.icon}
              </div>
              <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">
                {link.name}
              </h3>
              <div className={`text-lg font-bold text-white transition-colors duration-300 ${link.color}`}>
                {link.value}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="relative group p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="bg-slate-950 rounded-[2.4rem] p-8 md:p-12 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Side: Info */}
                <div>
                  <h3 className="text-3xl font-black text-white mb-6">Let's build the future together.</h3>
                  {/* <p className="text-gray-400 text-lg mb-10">
                    Have a specific project in mind? Or just want to talk tech? Fill out the form and I'll get back to you within 24 hours.
                  </p> */}
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 border border-blue-500/20">
                        <FaEnvelope />
                      </div>
                      <span className="font-medium">vineethagodasi898@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 border border-purple-500/20">
                        <FaPaperPlane />
                      </div>
                      <span className="font-medium">Kakinada, Andhra Pradesh</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Form */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    // In a real scenario, you'd use EmailJS or Web3Forms here
                    alert("Message system initiated! (This is a demonstration)");
                  }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea 
                      placeholder="Tell me about your project..."
                      rows="4"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-white text-slate-950 font-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  >
                    Send Message <FaPaperPlane className="text-sm" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}