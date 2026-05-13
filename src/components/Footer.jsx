import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl font-display font-bold tracking-tight"
        >
          <span className="text-gradient">Vineetha.</span>
        </motion.div>
        
        <p className="text-slate-500 text-sm">
          © {currentYear} Vineetha Godasi. Built with React & Tailwind CSS.
        </p>
        
        <div className="flex gap-6">
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
