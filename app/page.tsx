'use client'

import Link from 'next/link'
import { Suspense, lazy } from 'react'

// Ultra-lazy loading for maximum performance
const AboutSection = lazy(() => import('@/components/sections/AboutSection'))
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection'))

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Ultra-Fast Hero Section - Pure Tailwind */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20">
        {/* Optimized Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Profile Image - Instant Load */}
          <div className="mb-12">
            <div className="relative w-56 h-56 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    DG
                  </span>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>

          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-purple-300 text-sm font-medium border border-purple-500/30 backdrop-blur-sm">
              👋 Hello, I&apos;m Divyesh Girase
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              A Web Developer
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            I build responsive websites and applications. Contact me if you need any help with your project.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/projects"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
            <Link
              href="/contact"
              className="group px-8 py-4 border-2 border-purple-500/50 text-purple-300 font-semibold rounded-xl backdrop-blur-sm hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 hover:border-purple-400"
            >
              <span className="flex items-center gap-2">
                📧 Get In Touch
              </span>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <a
              href="tel:+919770212987"
              className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              <div className="p-2 bg-purple-600 rounded-lg">
                <span className="text-white text-lg">📞</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-medium">+91 9770212987</p>
              </div>
            </a>

            <a
              href="mailto:divyeshgirase@gmail.com"
              className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              <div className="p-2 bg-blue-600 rounded-lg">
                <span className="text-white text-lg">📧</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">divyeshgirase@gmail.com</p>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/Divyesh-girase-495928213"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 text-gray-400 hover:text-blue-400 transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:-translate-y-1"
              title="LinkedIn Profile"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors duration-300">
                <span className="text-white font-bold text-lg">in</span>
              </div>
            </a>
            <a
              href="https://github.com/DivyeshGirase"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 text-gray-400 hover:text-purple-400 transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:-translate-y-1"
              title="GitHub Profile"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-lg hover:bg-purple-600 transition-colors duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Lazy Loaded */}
      <Suspense fallback={
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="h-12 w-64 bg-gray-700/50 rounded-lg mx-auto mb-16 animate-pulse"></div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="grid grid-cols-2 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-24 bg-gray-700/50 rounded-2xl animate-pulse"></div>
                ))}
              </div>
              <div className="space-y-6">
                <div className="h-32 bg-gray-700/50 rounded-2xl animate-pulse"></div>
                <div className="h-32 bg-gray-700/50 rounded-2xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      }>
        <AboutSection />
      </Suspense>

      {/* Projects Section - Lazy Loaded */}
      <Suspense fallback={
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="h-12 w-80 bg-gray-700/50 rounded-lg mx-auto mb-16 animate-pulse"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-700/30 rounded-2xl p-6 animate-pulse">
                  <div className="h-48 bg-gray-600/50 rounded-xl mb-6"></div>
                  <div className="h-6 w-3/4 bg-gray-600/50 rounded mb-3"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 w-full bg-gray-600/50 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-600/50 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }>
        <ProjectsSection />
      </Suspense>
    </div>
  )
}
