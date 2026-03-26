'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Layers,
  Globe,
  Terminal,
  Github,
  PenTool,
} from 'lucide-react'

const skills = [
  {
    name: 'HTML, CSS & JavaScript',
    description:
      'Semantic markup, responsive layouts, and modern JavaScript — including Bootstrap for rapid, polished UI.',
    Icon: Code2,
    delay: 0.1,
  },
  {
    name: 'React & Next.js',
    description:
      'Component-driven front ends with React and Next.js, plus Node.js and API integration for full-stack features.',
    Icon: Layers,
    delay: 0.15,
  },
  {
    name: 'WordPress & Elementor',
    description:
      'Building and maintaining WordPress sites with attention to layout, responsiveness, SEO, and content workflows.',
    Icon: Globe,
    delay: 0.2,
  },
  {
    name: 'Python & Java',
    description:
      'Certified in Python and Java with coursework and projects spanning scripting, OOP, and software fundamentals.',
    Icon: Terminal,
    delay: 0.25,
  },
  {
    name: 'Git & GitHub',
    description:
      'Version control, branching, and collaborative workflows — clean commits and organized repositories.',
    Icon: Github,
    delay: 0.3,
  },
  {
    name: 'Figma & Adobe CC',
    description:
      'UX-minded collaboration with design tools — from wireframes and prototypes to brand-aligned web implementation.',
    Icon: PenTool,
    delay: 0.35,
  },
]

export default function SkillsSection() {
  return (
    <motion.section
      id="skills-section"
      className="bg-gray-100 py-12 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12 font-exo text-4xl font-bold text-gray-800"
        >
          Skills
        </motion.h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.Icon
            return (
              <motion.div
                key={skill.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: skill.delay, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 flex justify-center text-emerald-600"
                >
                  <Icon className="h-16 w-16" strokeWidth={1.25} aria-hidden />
                </motion.div>

                <h3 className="mb-3 font-exo text-xl font-bold text-gray-800">{skill.name}</h3>

                <p className="font-lato text-left text-sm leading-relaxed text-gray-600">{skill.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
