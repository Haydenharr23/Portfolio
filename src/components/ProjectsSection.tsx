'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Marriott Hotel Booking',
    description: 'A comprehensive hotel booking platform featuring destination search, date selection, and property recommendations.',
    image: '/images/homepage1.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemo: 'https://haydenharr23.github.io/Marriott-Hotel-Booking-Site/',
    github: 'https://github.com/Haydenharr23/Marriott-Hotel-Booking-Site'
  },
  {
    id: 2,
    title: 'Airbnb Booking',
    description: 'A fully functional accommodation booking platform with advanced filtering options and clean interface.',
    image: '/images/homepage2.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemo: 'https://haydenharr23.github.io/Airbnb_booking_site/',
    github: 'https://github.com/Haydenharr23/Airbnb_booking_site'
  },
  {
    id: 3,
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-exo">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Site
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
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

