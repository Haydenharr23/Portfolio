'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, Github } from 'lucide-react'

const contactItems = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/hayden-harris-workspace/',
    label: 'LinkedIn',
    color: 'text-blue-600 hover:text-blue-800'
  },
  {
    icon: Mail,
    href: 'mailto:haydenharr@gmail.com',
    label: 'Email',
    color: 'text-red-600 hover:text-red-800'
  },
  {
    icon: Github,
    href: 'https://github.com/Haydenharr23',
    label: 'GitHub',
    color: 'text-gray-800 hover:text-gray-600'
  }
]

export default function ContactSection() {
  return (
    <motion.section
      id="contact-section"
      className="py-12 md:py-20 bg-white"
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
          className="text-center text-4xl font-bold mb-8 md:mb-12 text-gray-800 font-exo"
        >
          Contact
        </motion.h1>
        
        <div className="flex justify-center space-x-12 md:space-x-16">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.1 }}
              className="flex justify-center"
            >
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`${item.color} transition-colors duration-300`}
                aria-label={item.label}
              >
                <item.icon className="w-8 h-8 md:w-12 md:h-12" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

