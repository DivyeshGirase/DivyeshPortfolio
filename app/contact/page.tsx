'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaRobot } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [aiSuggestion, setAiSuggestion] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // AI-powered message suggestions
    if (name === 'subject' && value.length > 3) {
      generateAISuggestion(value)
    }
  }

  const generateAISuggestion = (subject: string) => {
    // Simulate AI-powered message suggestions based on subject
    const suggestions: { [key: string]: string } = {
      'project': 'Hi Divyesh, I have a project idea that I would like to discuss with you. Could we schedule a call to go over the requirements and timeline?',
      'collaboration': 'Hello Divyesh, I came across your portfolio and I\'m impressed with your work. I would like to explore potential collaboration opportunities.',
      'job': 'Dear Divyesh, We have an exciting opportunity that matches your skills. Would you be interested in discussing this position?',
      'freelance': 'Hi Divyesh, I need help with a freelance project involving web development. Could you provide a quote and timeline?',
      'consultation': 'Hello Divyesh, I would like to schedule a consultation to discuss my project requirements and get your expert advice.',
      'internship': 'Dear Divyesh, I am interested in learning from your experience. Do you offer any mentorship or internship opportunities?'
    }

    const lowerSubject = subject.toLowerCase()
    for (const [key, suggestion] of Object.entries(suggestions)) {
      if (lowerSubject.includes(key)) {
        setAiSuggestion(suggestion)
        return
      }
    }
    setAiSuggestion('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setAiSuggestion('')
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'divyeshgirase@gmail.com',
      href: 'mailto:divyeshgirase@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9770212987',
      href: 'tel:+919770212987'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Divyesh Girase',
      href: 'https://linkedin.com/in/Divyesh-girase-495928213'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'DivyeshGirase',
      href: 'https://github.com/DivyeshGirase'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Indore, India',
      href: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Let&apos;s Connect</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I&apos;m always open to discussing new opportunities, interesting projects,
                  or just having a chat about technology and development.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group"
                    >
                      <div className="p-3 bg-purple-600 rounded-lg group-hover:bg-purple-500 transition-colors duration-300">
                        <Icon className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Contact Form with AI Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700"
            >
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                <FaRobot className="text-purple-400 text-xl" title="AI-Powered Suggestions" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project, Collaboration, Job Opportunity..."
                  />
                </div>

                {/* AI Suggestion */}
                {aiSuggestion && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4"
                  >
                    <div className="flex items-start gap-2">
                      <FaRobot className="text-purple-400 text-sm mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-purple-300 text-sm font-medium mb-2">AI Suggestion:</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{aiSuggestion}</p>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, message: aiSuggestion }))}
                          className="text-purple-400 text-sm hover:text-purple-300 mt-2 underline"
                        >
                          Use this suggestion
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaEnvelope />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
