'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import Navbar from './Navbar'
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
      className="relative flex min-h-[90svh] flex-col justify-center !py-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Full-height gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: baseGradient }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundImage: gradientSteps }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <Navbar />

      {/* Hero content — left text, right image */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center px-4 py-10 sm:py-14">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — text */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="mx-auto mb-4 max-w-3xl font-exo text-4xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:mx-0">
              Hayden Harris
            </h1>
            <p className="mx-auto mb-3 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow-lg md:text-xl lg:mx-0">
              Frontend &amp; full-stack developer at Kingdom Culture Agency — fluent in WordPress,
              web development, and modern JavaScript frameworks.
            </p>
            <p
              className={`mb-8 text-sm md:text-base ${
                accent === 'purple' ? 'text-purple-100' : 'text-emerald-100'
              }`}
            >
              Based in Des Moines, Iowa · Studying at Arizona State University
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <motion.button
                onClick={() => setIsContactFormOpen(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-all duration-300 hover:shadow-2xl"
              >
                Let&apos;s Build Something Amazing
              </motion.button>
              <motion.a
                href="#projects-section"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-white px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-gray-900"
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 transition-transform duration-300 ease-out hover:scale-105">
              <Image
                src="/images/portfoliopic.png"
                alt="Hayden Harris — professional headshot"
                fill
                className="rounded-2xl border-4 border-white/80 object-cover object-[28%_38%] shadow-2xl"
                priority
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Circular arc into the next section */}
      <div className="relative z-10 w-full shrink-0 leading-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-12 w-full sm:h-16 md:h-20"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 A720,80 0 0 1 1440,0 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </motion.section>
  )
}
