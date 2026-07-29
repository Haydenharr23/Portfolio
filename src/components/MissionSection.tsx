'use client'

import { motion } from 'framer-motion'

export default function MissionSection() {
  return (
    <motion.section
      id="about-section"
      className="bg-white py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-8 text-center lg:grid-cols-[minmax(0,280px)_1fr] lg:text-left lg:gap-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="font-exo text-4xl font-bold text-gray-800"
          >
            About me
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl space-y-5 font-lato text-lg leading-relaxed text-gray-600 lg:mx-0"
          >
            <p>
              I&apos;m a frontend and full-stack developer focused on polished, accessible, and
              maintainable web experiences that help businesses grow online. From coursework and
              certifications to real client work, I care about building sites that look great and hold
              up over time.
            </p>
            <p>
              I&apos;m studying Graphic Information Technology at Arizona State University with a
              focus on full-stack web development — Dean&apos;s List honors, a strong GPA in
              relevant coursework, and certifications in Python, Java, and web development keep me
              sharp on both the design and engineering side.
            </p>
            <p>
              Professionally, I&apos;ve shipped projects from concept to completion — full-stack
              work at Global Tech and WordPress development, branding, and project coordination at
              Kingdom Culture Agency. I also take on freelance projects for individuals and small
              businesses who need a clean, responsive site without the overhead.
            </p>
            <p>
              Whether it&apos;s a marketing page, a WordPress rebuild, or a custom front end, I
              prioritize responsive layouts, clear UX, and SEO-minded structure so the final
              product works well for users and the teams maintaining it.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
