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
      className="relative flex min-h-[80svh] flex-col"
      style={{
        // Use backgroundImage instead of the `background` shorthand to avoid
        // conflicts with `backgroundAttachment` (React warning).
        backgroundImage: baseGradient,
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
            backgroundImage: gradientSteps
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

      {/* Main Content — flex-1 + justify-center keeps content vertically centered without overlapping the scroll row */}
      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col justify-center px-4 py-6 text-center sm:py-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mb-6 sm:mb-8 flex justify-center"
        >
          <div className="relative w-40 h-40 sm:w-48 sm:h-48">
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
              Hayden Harris
            </span>
          </h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mx-auto mb-6 sm:mb-8 max-w-xl text-lg leading-relaxed text-white drop-shadow-lg md:text-xl"
          >
            I&apos;m a frontend and full-stack developer currently working at Kingdom Culture Agency, fluent in WordPress,
            web coding, and several programming languages.
          </motion.p>
          <p
            className={`mx-auto -mt-4 mb-6 sm:mb-8 max-w-xl text-sm ${
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

      {/* Scroll Indicator — in document flow so it never sits on top of hero content on short viewports */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-10 flex shrink-0 justify-center pb-4 pt-2 sm:pb-6 sm:pt-3"
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

