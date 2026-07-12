'use client'

import { motion } from 'framer-motion'
import { Star, Linkedin, Mail, Github } from 'lucide-react'
import { useAccent } from './AccentProvider'

const footerLinks = [
  { href: '#about-section', label: 'About' },
  { href: '#skills-section', label: 'Skills' },
  { href: '#projects-section', label: 'Projects' },
  { href: '#contact-section', label: 'Contact' },
]

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/haydendev/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:haydenharr@gmail.com', label: 'Email' },
  { icon: Github, href: 'https://github.com/Haydenharr23', label: 'GitHub' },
]

export default function FooterSection() {
  const accent = useAccent()
  const socialHover =
    accent === 'purple' ? 'hover:text-purple-400' : 'hover:text-emerald-400'

  const accentBar = accent === 'purple' ? 'bg-purple-500' : 'bg-emerald-500'

  return (
    <motion.footer
      id="footer-section"
      className="bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Top accent bar */}
      <div className={`h-2 w-full ${accentBar}`} />

      <div className="container mx-auto px-4 py-10">
        <a href="#" className="mb-8 flex items-center font-exo text-xl font-bold">
          <Star className="mr-2 h-5 w-5" />
          Hayden Harris
        </a>

        {/* Bottom row — social left, links right */}
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-gray-400 hover:text-white ${socialHover}`}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <nav className="flex flex-col items-start gap-2 sm:items-end">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-8 text-xs text-gray-500">&copy; Hayden Harris 2026</p>
      </div>
    </motion.footer>
  )
}
