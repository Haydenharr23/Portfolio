'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Laptop } from 'lucide-react'
import { useAccent } from './AccentProvider'

const workAreas = [
  {
    icon: Briefcase,
    title: 'Kingdom Culture Agency',
    description:
      'Frontend and full-stack developer building WordPress sites, managing client branding, and coordinating web projects for Nashville-area businesses.',
    href: 'https://kingdomcultureagency.com/',
  },
  {
    icon: GraduationCap,
    title: 'Arizona State University',
    description:
      'Pursuing a Bachelor\'s in Graphic Information Technology with a focus on full-stack web development — Dean\'s List honors and hands-on coursework.',
    href: 'https://www.asu.edu/',
  },
  {
    icon: Laptop,
    title: 'Freelance',
    description:
      'Designing clean, responsive websites for individuals and small businesses — prioritizing usability, performance, and maintainable code.',
    href: null,
  },
]

export default function WhoIWorkForSection() {
  const accent = useAccent()
  const accentText = accent === 'purple' ? 'text-purple-600' : 'text-emerald-600'
  const iconBg = accent === 'purple' ? 'bg-purple-100 text-purple-600' : 'bg-emerald-100 text-emerald-600'

  return (
    <motion.section
      id="clients-section"
      className="border-b border-gray-200 bg-white py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {workAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-3"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}>
                <area.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </div>
              {area.href ? (
                <a
                  href={area.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-exo text-base font-bold transition-colors hover:underline ${accentText}`}
                >
                  {area.title}
                </a>
              ) : (
                <h3 className={`font-exo text-base font-bold ${accentText}`}>{area.title}</h3>
              )}
              <p className="font-lato text-sm leading-relaxed text-gray-600">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
