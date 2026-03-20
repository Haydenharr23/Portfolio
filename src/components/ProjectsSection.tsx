'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Kingdom Culture Agency',
    description:
      'Full-service creative agency site: strategy, branding, content, motion, social, web, and podcasting — built for clarity and conversion.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop&q=80',
    technologies: ['WordPress', 'Responsive Design', 'UI/UX'],
    liveDemo: 'https://kingdomcultureagency.com/'
  },
  {
    id: 2,
    title: 'Spartan Roof Coatings',
    description:
      'Commercial and industrial roofing in Clarksville, TN — coatings, restoration, inspections, and estimates with a trust-focused layout.',
    image: '/images/project-spartan-roof.jpg',
    technologies: ['WordPress', 'SEO', 'Responsive Design'],
    liveDemo: 'https://spartanroofcoating.com/'
  },
  {
    id: 3,
    title: 'Dog Training Site',
    description:
      'Single-page dog training site with structured sections and interactive UI — final project showcasing layout, styling, and scripting.',
    image: '/images/project-dog-training.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemo: 'https://haydenharr23.github.io/Dog-Training-Site/',
    github: 'https://github.com/Haydenharr23/Dog-Training-Site'
  },
  {
    id: 4,
    title: 'Marriott Hotel Booking',
    description: 'A comprehensive hotel booking platform featuring destination search, date selection, and property recommendations.',
    image: '/images/homepage1.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemo: 'https://haydenharr23.github.io/Marriott-Hotel-Booking-Site/',
    github: 'https://github.com/Haydenharr23/Marriott-Hotel-Booking-Site'
  },
  {
    id: 5,
    title: 'Airbnb Booking',
    description: 'A fully functional accommodation booking platform with advanced filtering options and clean interface.',
    image: '/images/homepage2.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemo: 'https://haydenharr23.github.io/Airbnb_booking_site/',
    github: 'https://github.com/Haydenharr23/Airbnb_booking_site'
  },
  {
    id: 6,
    title: 'Sprinkles Cupcakes',
    description: 'An elegant e-commerce website for a premium cupcake brand with beautiful visual design.',
    image: '/images/homepage3.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemo: 'https://haydenharr23.github.io/Sprinkles_Cupcakes/',
    github: 'https://github.com/Haydenharr23/Sprinkles_Cupcakes'
  }
]

export default function ProjectsSection() {
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
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-4xl font-bold mb-16 text-gray-800 font-exo"
        >
          Featured Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group flex h-full min-h-0 flex-col"
            >
              <div className="flex h-full min-h-[26rem] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                {/* Image — fixed aspect so every card matches */}
                <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-52">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                </div>

                {/* Content — flex-1 fills remaining height; buttons stay at bottom */}
                <div className="flex min-h-0 flex-1 flex-col p-6">
                  <h3 className="mb-3 shrink-0 font-exo text-xl font-bold text-gray-800">
                    {project.title}
                  </h3>

                  <p className="mb-4 line-clamp-5 min-h-[7.5rem] flex-1 text-sm leading-relaxed text-gray-600">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6 flex min-h-[2.75rem] flex-wrap content-start gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto flex shrink-0 gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors ${project.github ? 'flex-1' : 'w-full'}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Site
                    </a>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
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

