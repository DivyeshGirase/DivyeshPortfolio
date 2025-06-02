'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work in web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ y: -5 }}
            className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-300"></div>
              <span className="text-purple-300 text-lg font-semibold relative z-10">Freelancing Platform</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
              Freelancing Platform
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Full-stack platform enabling seamless interaction between employers and freelancers with
              user authentication and project management.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-500/30">Next.js</span>
              <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-500/30">TypeScript</span>
              <span className="bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full text-xs border border-cyan-500/30">Tailwind</span>
            </div>
            <div className="text-center">
              <span className="text-purple-400 text-sm font-medium">February 2025</span>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            whileHover={{ y: -5 }}
            className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10 group-hover:from-blue-600/20 group-hover:to-green-600/20 transition-all duration-300"></div>
              <span className="text-blue-300 text-lg font-semibold relative z-10">Salon Scheduler</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
              Salon Appointment Scheduler
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Web-based solution to automate salon appointment scheduling with real-time availability
              tracking and service pricing.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-500/30">PHP</span>
              <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-500/30">MySQL</span>
              <span className="bg-yellow-600/20 text-yellow-300 px-3 py-1 rounded-full text-xs border border-yellow-500/30">JavaScript</span>
            </div>
            <div className="text-center">
              <span className="text-blue-400 text-sm font-medium">May 2024</span>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="relative h-48 bg-gradient-to-br from-green-600/20 to-orange-600/20 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-orange-600/10 group-hover:from-green-600/20 group-hover:to-orange-600/20 transition-all duration-300"></div>
              <span className="text-green-300 text-lg font-semibold relative z-10">Train Booking</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
              Train Ticket Booking
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Web-based train ticket booking system with user authentication, ticket search and booking,
              and responsive UI with dynamic features.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-500/30">PHP</span>
              <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-500/30">MySQL</span>
              <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-xs border border-orange-500/30">HTML/CSS</span>
            </div>
            <div className="text-center">
              <span className="text-green-400 text-sm font-medium">November 2023</span>
            </div>
          </motion.div>
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300 backdrop-blur-sm"
          >
            View All Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
