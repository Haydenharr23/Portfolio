'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const skills = [
  {
    name: 'HTML',
    description: 'I am proficient in using html to create structures web pages',
    icon: '/images/html.svg',
    delay: 0.1
  },
  {
    name: 'Bootstrap',
    description: 'I am proficient in using bootstrap to make beautiful web pages',
    icon: '/images/Bootstrap_logo.svg',
    delay: 0.2
  },
  {
    name: 'CSS',
    description: 'I can use css to style and improve the appearance of web pages',
    icon: '/images/icons8-linkedin.svg',
    delay: 0.3
  },
  {
    name: 'Python',
    description: 'I have a certification in the Python programming language from Des Moines Area Community College.',
    icon: '/images/python.svg',
    delay: 0.4
  }
]

export default function SkillsSection() {
  return (
    <motion.section
      id="skills-section"
      className="text-center py-12 bg-gray-100"
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
          className="text-4xl font-bold mb-12 text-gray-800 font-exo"
        >
          Skills
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: skill.delay, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                <Image
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800 font-exo">
                {skill.name}
              </h3>
              
              <p className="text-gray-600 font-lato">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

