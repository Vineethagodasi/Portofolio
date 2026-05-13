import { motion } from "framer-motion";

export default function Skills() {

const skills = [
  { name: "HTML & CSS", level: 98 },
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "React.js", level: 95 },
  { name: "Tailwind CSS", level: 90 },
  // { name: "Framer Motion", level: 80 },
  { name: "REST API Integration", level: 90 },
  { name: "Python", level: 50 },
  // { name: "Data Structures", level: 65 },
  { name: "MySQL", level: 50 },
  { name: "Git & GitHub", level: 90 },
];

  return (
    <section id="powers" className="py-24 px-6 md:px-20">

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >                                                               
        Powers
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-10">

        {skills.map((skill, index) => (
          <div key={index}>

            {/* Skill Name + Percentage */}
            <div className="flex justify-between mb-2">
              <span className="text-lg font-medium">
                {skill.name}
              </span>
              <span className="text-gray-400">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
                className="h-4 rounded-full bg-gradient-to-r from-blue-500 via-teal-300 to-green-300"
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}