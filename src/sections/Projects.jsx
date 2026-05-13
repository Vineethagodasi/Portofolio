import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import adminDashboard from "../assets/image.png";
import sehatmithra from "../assets/sehatmithra.png";
import userImg from "../assets/user.png";

export default function Projects() {

  const projects = [
    {
      title: "The Kings Aura-Admin",
      description:
        "Developed a responsive and modern admin dashboard using React.js and Tailwind CSS with clean UI architecture and reusable components.Integrated backend REST APIs for dynamic data management including users, products, orders, categories, notifications, and analytics modules.Implemented production-ready frontend structure with scalable state handling, responsive layouts, dashboard charts, and seamless API-based CRUD operations.",
      image: adminDashboard,
      // tech: "React, Bootstrap, JS",
      github: "#",
      live: "https://admin.thekingsaura.com/dashboard",
    },
    {
      title: "SehatMithra Admin",
      description:
        "Developed a comprehensive healthcare admin dashboard to manage medical service bookings, equipment rentals, users, and order operations efficiently. Built secure backend APIs using Node.js, Express.js, and MongoDB with JWT authentication, Razorpay integration, and automated scheduling features. Implemented admin analytics, booking management, pagination, notifications, and resource management for scalable healthcare platform operations.",
      image: sehatmithra,
      // tech: "Node.js, Express.js, MongoDB, React",
      github: "#",
      live: "https://adminsehatmithra.bharatsports11.com/dashboard",
    },
    {
      title: "The Kings Aura-User",
      description:
        "Designed and developed a premium luxury fashion eCommerce frontend using React.js and Tailwind CSS with immersive visuals, elegant typography, and fully responsive layouts. Built interactive UI components including animated navigation menus, hero sections, collection showcases, account modules, wishlist, cart, and order tracking interfaces. Integrated backend APIs for seamless product management, authentication, cart operations, collections, and dynamic content rendering with scalable production-ready architecture.",
      image: userImg,
      // tech: "React, Tailwind CSS, Framer Motion",
      github: "#",
      live: "https://thekingsaura.com/",
    },
  ];

  return (
    <section id="quests" className="py-24 px-6 md:px-20">

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Quests
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative group overflow-hidden bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10 hover:border-blue-500 transition"
            style={project.image ? { 
              backgroundImage: `url(${project.image})`, 
              backgroundSize: '100% 100%', 
              backgroundPosition: 'center' 
            } : {}}
          >
            {project.image && (
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
            )}

            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
{/* 
              <p className="text-gray-400 text-sm mb-6">
                <span className="font-medium text-white">Tech Stack:</span>{" "}
                {project.tech}
              </p> */}

              <div className="flex gap-4">
                {/* <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-white/10 rounded-lg hover:bg-blue-500 transition"
                >
                  <FaGithub /> GitHub
                </a> */}

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-white/10 rounded-lg hover:bg-green-500 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}