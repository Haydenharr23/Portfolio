'use client'

import { motion } from 'framer-motion'

export default function FooterSection() {
  return (
    <motion.section
      id="footer-section"
      className="text-center text-white py-8 bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-xl font-lato"
      >
        &copy; Hayden Harris 2024
      </motion.h3>
    </motion.section>
  )
}

