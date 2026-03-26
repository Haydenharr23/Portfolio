'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { useState } from 'react'
import ContactForm from './ContactForm'
import { useAccent } from './AccentProvider'

export default function HeroSection() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const accent = useAccent()

  const baseGradient =
    accent === 'purple'
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      : 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)'

  const gradientSteps =
    accent === 'purple'
      ? [
          'linear-gradient(135deg, #4c1d95 0%, #6b21a8 50%, #7c3aed 100%)',
          'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #a855f7 100%)',
          'linear-gradient(135deg, #a855f7 0%, #c084fc 50%, #8b5cf6 100%)',
          'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6b21a8 100%)',
          'linear-gradient(135deg, #6b21a8 0%, #4c1d95 50%, #7c3aed 100%)',
        ]
      : [
          'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #065f46 100%)',
          'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
          'linear-gradient(135deg, #065f46 0%, #047857 50%, #065f46 100%)',
          'linear-gradient(135deg, #047857 0%, #065f46 50%, #064e3b 100%)',
          'linear-gradient(135deg, #065f46 0%, #022c22 50%, #064e3b 100%)',
        ]
  return (
    <motion.section
      id="hero-section"
      className="relative h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        background: baseGradient,
        backgroundAttachment: 'fixed'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated green gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: gradientSteps
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
              src="/images/portfoliopic.png"
              alt="Hayden Harris — professional headshot with city skyline"
              fill
              className="rounded-full border-4 border-white object-cover object-[28%_38%] shadow-2xl transition-all duration-500 hover:scale-105"
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
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-white drop-shadow-lg md:text-xl"
          >
            I&apos;m a frontend and full-stack developer currently working at Kingdom Culture Agency, fluent in WordPress,
            web coding, and several programming languages.
          </motion.p>
          <p
            className={`mx-auto -mt-4 mb-8 max-w-xl text-sm ${
              accent === 'purple' ? 'text-purple-100' : 'text-emerald-100'
            } drop-shadow-md md:text-base`}
          >
            Based in Des Moines, Iowa, and studying online at Arizona State University.
          </p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.8 }}
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

