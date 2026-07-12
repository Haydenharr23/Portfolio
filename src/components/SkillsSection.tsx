'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Code2,
  Layers,
  Globe,
  Terminal,
  Github,
  PenTool,
} from 'lucide-react'
import { useAccent } from './AccentProvider'

const skills = [
  {
    name: 'HTML, CSS & JavaScript',
    description: 'Semantic markup, responsive layouts, and modern JavaScript.',
    Icon: Code2,
  },
  {
    name: 'React & Next.js',
    description: 'Component-driven front ends with React and Next.js.',
    Icon: Layers,
  },
  {
    name: 'WordPress & Elementor',
    description: 'Building and maintaining WordPress sites with SEO focus.',
    Icon: Globe,
  },
  {
    name: 'Python & Java',
    description: 'Certified in Python and Java with OOP fundamentals.',
    Icon: Terminal,
  },
  {
    name: 'Git & GitHub',
    description: 'Version control and collaborative workflows.',
    Icon: Github,
  },
  {
    name: 'Figma & Adobe CC',
    description: 'UX-minded design collaboration and brand alignment.',
    Icon: PenTool,
  },
]

export default function SkillsSection() {
  const accent = useAccent()
  const iconBgClass =
    accent === 'purple' ? 'bg-purple-100 text-purple-600' : 'bg-emerald-100 text-emerald-600'
  const accentBorder =
    accent === 'purple' ? 'border-purple-200' : 'border-emerald-200'

  return (
    <motion.section
      id="skills-section"
      className="bg-gray-50 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-10 font-exo text-4xl font-bold text-gray-800"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
          {/* Left — visual box */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border-2 ${accentBorder} bg-white shadow-md lg:max-w-none`}
          >
            <Image
              src="/images/skills-workspace.jpg"
              alt="Developer workspace with laptop and code"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-exo text-2xl font-bold text-white">Developer &amp; Designer</p>
              <p className="mt-1 text-sm text-white/80">Building polished web experiences</p>
            </div>
          </motion.div>

          {/* Right — skill list */}
          <div className="flex flex-col justify-center gap-5">
            {skills.map((skill, index) => {
              const Icon = skill.Icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconBgClass}`}>
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-exo text-base font-bold text-gray-800">{skill.name}</h3>
                    <p className="mt-0.5 font-lato text-sm text-gray-500">{skill.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
