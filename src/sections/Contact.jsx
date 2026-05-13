import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="summon" className="py-24 px-6 md:px-20 bg-gray-900 text-white">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Summon
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <p className="text-gray-300 text-lg">
          I’m open to frontend opportunities, collaborations, and exciting projects.
          Let’s build something amazing together — whether it’s a new website, an innovative app, or a creative design.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 text-lg">

          <a
            href="mailto:vineethagodasi898@gmail.com"
            className="flex items-center gap-3 hover:text-blue-400 transition"
          >
            <FaEnvelope className="text-blue-500" />
            vineethagodasi898@gmail.com
          </a>

          <a
            href="https://github.com/vineethatechpixe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-400 transition"
          >
            <FaGithub className="text-blue-500" />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/vineethagodasi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-400 transition"
          >
            <FaLinkedin className="text-blue-500" />
            LinkedIn
          </a>

        </div>
      </motion.div>

    </section>
  );
}