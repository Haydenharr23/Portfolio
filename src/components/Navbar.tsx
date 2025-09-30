'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '#mission-section', label: 'Mission' },
    { href: '#projects-section', label: 'Projects' },
    { href: '#skills-section', label: 'Skills' },
    { href: '#contact-section', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-white text-xl font-bold"
            href="#"
          >
            <Star className="w-6 h-6 mr-2" />
            Hayden
          </motion.a>
          
          <button
            className="md:hidden text-white p-2"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-white hover:text-purple-300 transition-colors duration-300 px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-10"
                  href={item.href}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black bg-opacity-95 backdrop-blur-md rounded-lg mt-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="block text-white hover:text-purple-300 transition-colors duration-300 px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-10"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}