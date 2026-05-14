import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Base", to: "base" },
    { name: "Profile", to: "Profile" },
    { name: "Powers", to: "powers" },
    { name: "Journey", to: "journey" },
    { name: "Quests", to: "quests" },
    { name: "Summon", to: "summon" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-blue-500/20">
            VG
          </div>
          <h1 className="text-xl font-black text-white tracking-tighter">
            VINEETHA GODASI
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          {navItems.map((item, index) => (
            <motion.li 
              key={item.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.to}
                smooth
                duration={500}
                offset={-80}
                className="text-sm font-bold text-gray-400 hover:text-white uppercase tracking-widest cursor-pointer transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setOpen(!open)}
            className="p-2 text-white bg-white/5 rounded-lg border border-white/10"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/5 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-8 py-12">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-black text-white hover:text-blue-500 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
  