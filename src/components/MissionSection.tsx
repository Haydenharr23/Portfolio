'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, Heart } from 'lucide-react'

const missionCards = [
  {
    icon: Target,
    title: "Continuous Learning",
    description: "I'm passionate about constantly expanding my skills and staying up-to-date with the latest technologies in web development and software engineering.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description: "I love building responsive and interactive websites that not only catch users' attention but provide meaningful and engaging experiences.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Heart,
    title: "User-Centric Design",
    description: "My focus is on creating digital experiences that are intuitive, accessible, and provide genuine value to users through thoughtful design and development.",
    color: "from-pink-500 to-pink-600"
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Driven by passion, fueled by innovation, and committed to excellence in every project
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

