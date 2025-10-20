'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Code, Cpu, Zap } from 'lucide-react'
import { useState } from 'react'
import ContactForm from './ContactForm'

export default function HeroSection() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  return (
    <motion.section
      id="hero-section"
      className="relative h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundAttachment: 'fixed'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Purple Ombre Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, #4c1d95 0%, #6b21a8 50%, #7c3aed 100%)',
              'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #a855f7 100%)',
              'linear-gradient(135deg, #a855f7 0%, #c084fc 50%, #8b5cf6 100%)',
              'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6b21a8 100%)',
              'linear-gradient(135deg, #6b21a8 0%, #4c1d95 50%, #7c3aed 100%)'
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-30"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-48 h-48">
            <Image
              src="/images/portfoliopic.jpg"
              alt="Hayden Harris"
              fill
              className="rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-all duration-500 object-cover"
              priority
              unoptimized
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
              Hayden Harris
            </span>
          </h1>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center justify-center space-x-4 text-lg text-white mb-6 drop-shadow-lg"
          >
            <Code className="w-5 h-5 text-purple-300" />
            <span>Web Developer</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
            <Cpu className="w-5 h-5 text-purple-300" />
            <span>Software Engineer</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
            <Zap className="w-5 h-5 text-purple-300" />
            <span>Innovator</span>
          </motion.div>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg text-white max-w-xl mx-auto leading-relaxed mb-8 drop-shadow-lg"
          >
            Crafting digital experiences that blend creativity with cutting-edge technology.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <motion.button
              onClick={() => setIsContactFormOpen(true)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full transition-all duration-300 hover:shadow-2xl text-sm"
            >
              Let&apos;s Build Something Amazing
            </motion.button>
            
            <motion.a
              href="#projects-section"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm"
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white"
        >
          <span className="text-sm mb-2 opacity-70">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </motion.section>
  )
}

