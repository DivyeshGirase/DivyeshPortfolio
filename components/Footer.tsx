'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/DivyeshGirase',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/Divyesh-girase-495928213',
      icon: FaLinkedin,
    },
    {
      name: 'Email',
      href: 'mailto:divyeshgirase@gmail.com',
      icon: FaEnvelope,
    },
  ]

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              Divyesh Girase
            </motion.div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Full Stack Developer & MCA Student passionate about creating
              beautiful, functional, and user-centered digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-700 rounded-lg shadow-md hover:shadow-lg text-gray-300 hover:text-purple-400 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
            <p className="text-gray-300 text-sm">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span>© {currentYear} Divyesh Girase. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <FaHeart className="text-red-500" />
              </motion.div>
              <span>and lots of coffee ☕</span>
            </div>

            <div className="text-sm text-gray-300">
              Built with Next.js, TypeScript & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
