import { motion } from "framer-motion"
import * as Tooltip from "@radix-ui/react-tooltip"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAws,
} from "react-icons/fa"
import {
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si"

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
]

export default function Skills() {
  return (
    <div className="bg-zinc-950 text-white p-8 pt-28">
      <h1 className="text-3xl font-bold text-center mb-10">Skills</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div className="flex flex-col items-center justify-center bg-zinc-900 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform cursor-default">
                    <div className="text-5xl mb-2">{skill.icon}</div>
                    <p className="mt-2 text-center">{skill.name}</p>
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-white text-black px-3 py-1 rounded text-sm shadow-md z-50" side="top" sideOffset={5}>
                    {skill.name}
                    <Tooltip.Arrow className="fill-white" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </motion.div>
        ))}
      </div>
    </div>
  )
}