import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import panda from "../assets/panda.png";

export default function Hero() {
  return (
    <section
      id="base"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-6 md:px-24 "
    >
      {/* LEFT SIDE */}
      <div className="text-center md:text-left max-w-xl">
        
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-blue-500 drop-shadow-lg">
            Vineetha
          </span>
        </motion.h1>

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
          className="text-2xl md:text-3xl mt-6 font-semibold text-gray-300"
        />

        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
         A coder by day, dreamer by night ✨ Curious who's behind this?
        </p>

        <div className="mt-8 flex justify-center md:justify-start gap-6">
          <a
            href="#quests"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-semibold shadow-lg"
          >
            View Quests
          </a>

          <a
            href="#Profile"
            className="px-6 py-3 border border-blue-500 hover:bg-blue-500 hover:text-white transition rounded-lg font-semibold"
          >
            Know Me
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full animate-pulse"></div>

        <img
          src={panda}
          alt="Vineetha"
          className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
        />
      </motion.div>
    </section>
  );
}