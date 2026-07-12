'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import { useAccent } from './AccentProvider'

const projects = [
  {
    id: 1,
    title: 'Senior Project — Real Estate Website',
    description:
      'ASU GIT senior capstone for a Des Moines-area real estate agent. Built a responsive marketing site with community guides, testimonials, and clear calls to action to drive client inquiries.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop&q=80',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    liveDemo: 'https://haydenharr23.github.io/Senior-Project-Real-Estate-Website/',
    github: 'https://github.com/Haydenharr23/Senior-Project-Real-Estate-Website',
  },
  {
    id: 2,
    title: 'Kingdom Culture Agency',
    description:
      'Full WordPress/Elementor rebrand update. Added new pages, scheduled blog content, improved SEO structure, and integrated case studies.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop&q=80',
    technologies: ['WordPress', 'Elementor', 'SEO'],
    liveDemo: 'https://kingdomcultureagency.com/',
  },
  {
    id: 3,
    title: 'Spartan Roof Coatings',
    description:
      'Led a team of 2 on a full WordPress update, built pages with WPBakery, and integrated SEO-focused blog content.',
    image: '/images/project-spartan-roof.jpg',
    technologies: ['WordPress', 'WPBakery', 'SEO'],
    liveDemo: 'https://spartanroofcoating.com/',
  },
  {
    id: 4,
    title: 'Dog Training Site',
    description:
      'Fictional dog training website built as a final class project, featuring structured sections, responsive layout, and interactive JavaScript.',
    image: '/images/project-dog-training.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemo: 'https://haydenharr23.github.io/Dog-Training-Site/',
    github: 'https://github.com/Haydenharr23/Dog-Training-Site',
  },
]

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const accent = useAccent()
  const chipClasses =
    accent === 'purple'
      ? 'rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800'
      : 'rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800'
  const liveButtonClasses =
    accent === 'purple'
      ? 'bg-purple-600 hover:bg-purple-700'
      : 'bg-emerald-600 hover:bg-emerald-700'
  const activeDotClass = accent === 'purple' ? 'bg-purple-600' : 'bg-emerald-600'

  const project = projects[currentIndex]

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))

  return (
    <motion.section
      id="projects-section"
      className="bg-white py-16"
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
          Projects
        </motion.h2>

        <div className="relative mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            {/* Carousel arrows — inside frame */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow-lg transition-all hover:scale-110 hover:bg-white sm:left-4 sm:p-3"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow-lg transition-all hover:scale-110 hover:bg-white sm:right-4 sm:p-3"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative h-56 w-full sm:h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  unoptimized
                  priority={currentIndex === 0}
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="mb-3 font-exo text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="mb-5 font-lato text-sm leading-relaxed text-gray-600 sm:text-base">
                  {project.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className={chipClasses}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors ${liveButtonClasses}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Site
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dot indicators */}
          <div className="mt-6 flex justify-center gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? `${activeDotClass} scale-125`
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
