'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { useAccent } from './AccentProvider'

const projects = [
  {
    id: 1,
    title: 'Kingdom Culture Agency',
    description:
      'Built for Kingdom Culture Agency in Nashville TN: Full WordPress/Elementor rebrand update. Added new pages, scheduled blog content, improved SEO structure, and integrated case studies.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop&q=80',
    technologies: ['WordPress', 'Elementor', 'SEO'],
    liveDemo: 'https://kingdomcultureagency.com/'
  },
  {
    id: 2,
    title: 'Spartan Roof Coatings',
    description:
      'Client website delivered through my internship at Kingdom Culture Agency: led a team of 2 on a full WordPress update, built pages with WPBakery, and integrated SEO-focused blog content.',
    image: '/images/project-spartan-roof.jpg',
    technologies: ['WordPress', 'WPBakery', 'SEO'],
    liveDemo: 'https://spartanroofcoating.com/'
  },
  {
    id: 3,
    title: 'Dog Training Site',
    description:
      'Fictional dog training website built as a final class project, featuring structured sections, responsive layout, and interactive JavaScript.',
    image: '/images/project-dog-training.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemo: 'https://haydenharr23.github.io/Dog-Training-Site/',
    github: 'https://github.com/Haydenharr23/Dog-Training-Site'
  }
]

export default function ProjectsSection() {
  const accent = useAccent()
  const chipClasses =
    accent === 'purple'
      ? 'rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800'
      : 'rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800'
  const liveButtonClasses =
    accent === 'purple'
      ? 'bg-purple-600 hover:bg-purple-700'
      : 'bg-emerald-600 hover:bg-emerald-700'

  return (
    <motion.section
      id="projects-section"
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-4xl font-bold mb-16 text-gray-800 font-exo"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group flex h-full min-h-0 flex-col"
            >
              <div className="flex h-full min-h-[20rem] sm:min-h-[26rem] flex-col rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                {/* Image — fixed aspect so every card matches */}
                <div className="relative h-44 w-full shrink-0 overflow-hidden sm:h-52">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                    priority={index < 3}
                    fetchPriority={index < 3 ? 'high' : 'low'}
                  />
                </div>

                {/* Content — flex-1 fills remaining height; buttons stay at bottom */}
                <div className="flex min-h-0 flex-1 flex-col p-4 sm:p-6">
                  <h3 className="mb-3 shrink-0 font-exo text-base sm:text-xl font-bold text-gray-800">
                    {project.title}
                  </h3>

                  <p className="mb-4 flex-1 text-xs sm:text-sm leading-relaxed text-gray-600 break-words">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6 flex min-h-[2.75rem] flex-wrap content-start gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={chipClasses}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto flex shrink-0 gap-2">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-3 py-2 ${liveButtonClasses} text-white rounded-lg text-xs sm:text-sm font-medium transition-colors ${project.github ? 'flex-1' : 'w-full'}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Site
                    </a>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-700 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

