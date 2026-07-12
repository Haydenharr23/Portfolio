'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Menu, X } from 'lucide-react'
import { useAccent } from './AccentProvider'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const accent = useAccent()
  const navHoverText =
    accent === 'purple' ? 'hover:text-purple-300' : 'hover:text-emerald-300'

  const navItems = [
    { href: '#about-section', label: 'About' },
    { href: '#skills-section', label: 'Skills' },
    { href: '#projects-section', label: 'Projects' },
    { href: '#contact-section', label: 'Contact' },
    { href: '/documents/Hayden-Harris-Resume-2026.pdf', label: 'Resume', external: true },
  ]

  return (
    <nav className="relative z-20 w-full">
      <div className="container mx-auto px-4">
        <div className="relative flex h-16 items-center">
          {/* Logo — left */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-xl font-bold text-white"
            href="#"
          >
            <Star className="mr-2 h-6 w-6" />
            Hayden
          </motion.a>

          {/* Desktop nav — centered */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
            <div className="flex space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-md px-3 py-2 text-sm text-white transition-colors duration-300 ${navHoverText}`}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Hamburger — right */}
          <button
            className="ml-auto p-2 text-white md:hidden"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} pb-4 md:hidden`}>
          <div className="space-y-1 rounded-lg bg-black/40 px-2 py-2 backdrop-blur-md">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`block rounded-md px-3 py-2 text-white transition-colors duration-300 ${navHoverText}`}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
