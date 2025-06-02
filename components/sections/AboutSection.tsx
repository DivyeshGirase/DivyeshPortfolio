'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer & MCA Student passionate about creating digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-purple-400 mb-2">9.0</h3>
              <p className="text-gray-300 text-sm">BCA CGPA</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">7.0</h3>
              <p className="text-gray-300 text-sm">MCA CGPA</p>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 p-6 rounded-2xl border border-green-500/30 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-green-400 mb-2">3+</h3>
              <p className="text-gray-300 text-sm">Projects</p>
            </div>
            <div className="bg-gradient-to-br from-pink-600/20 to-pink-800/20 p-6 rounded-2xl border border-pink-500/30 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-pink-400 mb-2">2</h3>
              <p className="text-gray-300 text-sm">Internships</p>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">🎓 Education</h3>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing Master of Computer Application at Shri Govindram Seksaria Institute
                of Technology and Science, Indore. Completed BCA with 9.0 CGPA.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">💼 Experience</h3>
              <p className="text-gray-300 leading-relaxed">
                Worked as SDE Intern at Galaxy Weblinks Ltd. and Web Development Intern at
                ALMANET PROFESSIONAL SERVICE, developing projects with Next.js and TypeScript.
              </p>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              Learn more about me
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
