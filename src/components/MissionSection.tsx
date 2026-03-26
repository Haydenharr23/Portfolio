'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, Heart } from 'lucide-react'

const missionCards = [
  {
    icon: Target,
    title: "Continuous Learning",
    description:
      "Studying Graphic Information Technology at ASU with a 4.0 GPA in relevant coursework. I stay current with front-end and full-stack tools through certifications in Python, Java, and web development.",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Lightbulb,
    title: "Build & Ship",
    description:
      "Hands-on experience from concept to completion: full-stack projects at Global Tech (HTML, CSS, JavaScript, Bootstrap, Git) and WordPress development, branding, and project coordination at Kingdom Culture Agency.",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Heart,
    title: "User-Centric Design",
    description:
      "I focus on responsive layouts, clear UX, and SEO-minded structure — applications that work well for users and teams.",
    color: "from-green-500 to-green-700"
  }
]

export default function MissionSection() {
  return (
    <motion.section
      id="mission-section"
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 font-exo mb-4">
            My Mission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From coursework and certifications to internships at Global Tech and Kingdom Culture Agency — focused on
            polished, accessible, and maintainable web experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missionCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${card.color} mb-6`}>
                <card.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-exo">
                {card.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed font-lato">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

