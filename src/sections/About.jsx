import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="Profile" className="py-24 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Profile
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-lg p-10 md:p-14 rounded-2xl max-w-3xl mx-auto border border-white/10 text-gray-300 leading-relaxed"
      >
        <p className="mb-6">
          Hi! I’m <span className="text-blue-500 font-semibold">Vineetha</span>,
          a passionate and dedicated B.Tech student from Kakinada with a strong
          interest in building modern, responsive, and user-friendly web
          applications.
        </p>

        <p className="mb-6">
          I specialize in creating interactive and visually appealing user
          interfaces using React, JavaScript, HTML, and CSS. I focus on writing
          clean, structured, and maintainable code while ensuring seamless user
          experiences across different devices.
        </p>

        <p className="mb-6">
          Alongside frontend development, I have a solid understanding of Python
          fundamentals, including basic programming concepts, problem-solving,
          and logical thinking. This helps me approach development with stronger
          analytical skills and structured reasoning.
        </p>

        <p>
          I continuously improve my technical skills by building real-world
          projects and staying updated with modern development practices. My
          goal is to contribute to impactful products by delivering high-quality
          and scalable solutions.
        </p>
      </motion.div>
    </section>
  );
}
