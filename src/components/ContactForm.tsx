'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, Send, User, Phone, MessageSquare } from 'lucide-react'
import { useAccent } from './AccentProvider'

interface ContactFormProps {
  isOpen?: boolean
  onClose?: () => void
  variant?: 'modal' | 'inline'
}

export default function ContactForm({ isOpen = false, onClose, variant = 'modal' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const accent = useAccent()
  const focusRingClass = accent === 'purple' ? 'focus:ring-purple-500' : 'focus:ring-emerald-500'
  const submitButtonClass =
    accent === 'purple' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-emerald-600 hover:bg-emerald-700'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        if (variant === 'modal' && onClose) {
          setTimeout(() => {
            onClose()
            setSubmitStatus('idle')
          }, 2000)
        }
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' })
    setSubmitStatus('idle')
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor={variant === 'inline' ? 'inline-name' : 'name'} className="mb-1.5 block text-sm font-medium text-gray-700">
          <User className="mr-1.5 inline h-4 w-4" />
          Name
        </label>
        <input
          type="text"
          id={variant === 'inline' ? 'inline-name' : 'name'}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 ${focusRingClass}`}
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor={variant === 'inline' ? 'inline-email' : 'email'} className="mb-1.5 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id={variant === 'inline' ? 'inline-email' : 'email'}
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 ${focusRingClass}`}
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor={variant === 'inline' ? 'inline-message' : 'message'} className="mb-1.5 block text-sm font-medium text-gray-700">
          <MessageSquare className="mr-1.5 inline h-4 w-4" />
          Message
        </label>
        <textarea
          id={variant === 'inline' ? 'inline-message' : 'message'}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className={`w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 ${focusRingClass}`}
          placeholder="Tell me about your project or idea..."
        />
      </div>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border border-green-400 bg-green-100 p-4 text-green-700"
        >
          Message sent successfully! I&apos;ll get back to you soon.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border border-red-400 bg-red-100 p-4 text-red-700"
        >
          Sorry, there was an error sending your message. Please try again.
        </motion.div>
      )}

      <div className={`flex gap-3 ${variant === 'inline' ? 'justify-end' : ''}`}>
        {variant === 'inline' && (
          <button
            type="button"
            onClick={handleReset}
            className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Reset
          </button>
        )}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center justify-center rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${submitButtonClass} ${variant === 'modal' ? 'w-full py-3' : ''}`}
        >
          {isSubmitting ? (
            <>
              <div className="mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </motion.button>
      </div>
    </form>
  )

  if (variant === 'inline') {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md sm:p-8">
        <h3 className="mb-6 text-center font-exo text-2xl font-bold text-gray-800">Contact me</h3>
        {formContent}
      </div>
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Let&apos;s Build Something Amazing</h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 transition-colors hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  <User className="mr-2 inline h-4 w-4" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 ${focusRingClass}`}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 ${focusRingClass}`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                  <Phone className="mr-2 inline h-4 w-4" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 ${focusRingClass}`}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  <MessageSquare className="mr-2 inline h-4 w-4" />
                  What would you like to build?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 ${focusRingClass}`}
                  placeholder="Tell me about your project..."
                />
              </div>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-green-400 bg-green-100 p-4 text-green-700"
                >
                  Message sent successfully!
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-red-400 bg-red-100 p-4 text-red-700"
                >
                  Sorry, there was an error. Please try again.
                </motion.div>
              )}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex w-full items-center justify-center rounded-lg py-3 px-6 font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${submitButtonClass}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
