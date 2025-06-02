'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPhp, SiMysql, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'

export default function Projects() {
  const projects = [
    {
      title: 'Freelancing Platform',
      description: 'A comprehensive full-stack freelancing platform that enables seamless interaction between employers and freelancers. Features include user authentication, project posting, job posting, training modules, and complete user and project management systems.',
      image: '/api/placeholder/600/400',
      technologies: [
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      ],
      features: [
        'User authentication with secure password hashing',
        'Project and job posting functionality',
        'Training module integration',
        'User and project management dashboard',
        'File-based routing with dynamic UI components',
        'PrimeReact integration for optimized UI',
        'REST API implementation',
        'Responsive design with smooth navigation'
      ],
      date: 'February 2025',
      status: 'Completed',
      github: '#',
      live: '#'
    },
    {
      title: 'Salon Appointment Scheduler',
      description: 'A web-based solution designed to automate salon appointment scheduling and improve operational efficiency. The system provides real-time availability tracking, service pricing display, and comprehensive booking management.',
      image: '/api/placeholder/600/400',
      technologies: [
        { name: 'PHP', icon: SiPhp, color: 'text-purple-400' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      ],
      features: [
        'Real-time availability tracking',
        'Service pricing display',
        'Online booking system',
        'Staff schedule management',
        'Customer information management',
        'Secure data handling',
        'Optimized database queries',
        'User-friendly interface for salon staff'
      ],
      date: 'May 2024',
      status: 'Completed',
      github: '#',
      live: '#'
    },
    {
      title: 'Train Ticket Booking System',
      description: 'A comprehensive web-based train ticket booking system that facilitates online reservations. The platform includes user authentication, ticket search and booking functionality, and a responsive interface with dynamic features.',
      image: '/api/placeholder/600/400',
      technologies: [
        { name: 'PHP', icon: SiPhp, color: 'text-purple-400' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
        { name: 'HTML', icon: SiHtml5, color: 'text-orange-400' },
        { name: 'CSS', icon: SiCss3, color: 'text-blue-400' },
      ],
      features: [
        'User authentication system',
        'Train schedule search functionality',
        'Ticket booking and management',
        'Secure user details storage',
        'Responsive UI design',
        'Dynamic weather updates',
        'MySQL database management',
        'Real-time booking status'
      ],
      date: 'November 2023',
      status: 'Completed',
      github: '#',
      live: '#'
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my development work, featuring full-stack applications built with modern technologies
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Project Image */}
                  <div className="relative">
                    <div className="aspect-video bg-gray-700 rounded-xl flex items-center justify-center">
                      <span className="text-gray-400 text-lg">{project.title}</span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <div className="flex items-center text-gray-400 text-sm">
                          <FaCalendarAlt className="mr-1" />
                          {project.date}
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{project.description}</p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => {
                          const Icon = tech.icon
                          return (
                            <div
                              key={tech.name}
                              className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-lg"
                            >
                              <Icon className={`text-lg ${tech.color}`} />
                              <span className="text-gray-300 text-sm">{tech.name}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.slice(0, 6).map((feature, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                      >
                        <FaGithub />
                        View Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
