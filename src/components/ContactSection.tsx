'use client'

import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <motion.section
      id="contact-section"
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
          Contact
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto max-w-xl"
        >
          <ContactForm variant="inline" />
        </motion.div>
      </div>
    </motion.section>
  )
}
