'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaJava, FaPhp, FaGitAlt, FaGraduationCap, FaBriefcase, FaCertificate, FaRobot, FaCode, FaTools } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMysql, SiJavascript, SiHtml5, SiCss3, SiCplusplus, SiGithub } from 'react-icons/si'

export default function About() {
  const [activeTab, setActiveTab] = useState('skills')

  const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', level: 90 },
    { name: 'Java', icon: FaJava, color: 'text-red-500', level: 85 },
    { name: 'PHP', icon: FaPhp, color: 'text-purple-400', level: 80 },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-400', level: 75 },
    { name: 'HTML', icon: SiHtml5, color: 'text-orange-400', level: 95 },
    { name: 'CSS', icon: SiCss3, color: 'text-blue-400', level: 90 },
    { name: 'React', icon: FaReact, color: 'text-blue-400', level: 85 },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', level: 80 },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400', level: 75 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', level: 85 },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-400', level: 80 },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-400', level: 85 },
  ]

  const tools = [
    { name: 'VS Code', icon: FaCode, color: 'text-blue-400' },
    { name: 'Visual Studio', icon: FaTools, color: 'text-purple-400' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-400' },
    { name: 'GitHub', icon: SiGithub, color: 'text-white' },
  ]

  const education = [
    {
      degree: 'Master of Computer Application',
      institution: 'Shri Govindram Seksaria Institute of Technology and Science',
      location: 'Indore, India',
      cgpa: '7.0 CGPA',
      graduation: 'June 2025',
      status: 'In Progress'
    },
    {
      degree: 'Bachelor of Computer Application',
      institution: 'R. C. Patel Arts, Commerce & Science College',
      location: 'Shirpur, India',
      cgpa: '9.0 CGPA',
      graduation: 'June 2023',
      status: 'Completed'
    }
  ]

  const experience = [
    {
      title: 'SDE Intern',
      company: 'Galaxy Weblinks Ltd.',
      period: '2024',
      description: 'Developed web-based projects using Next.js and TypeScript. Collaborated with a team of 2 members to streamline the deployment process.',
      technologies: ['Next.js', 'TypeScript']
    },
    {
      title: 'Web Development Intern',
      company: 'ALMANET PROFESSIONAL SERVICE',
      period: '2024',
      description: 'Developed web-based projects using Next.js and TypeScript. Collaborated with a team of 4 members to streamline the deployment process.',
      technologies: ['Next.js', 'TypeScript']
    }
  ]

  const certifications = [
    {
      name: 'C and C++ Programming Certificate',
      issuer: 'Nextech Infosystem',
      period: 'August 2021 - December 2021',
      description: 'Comprehensive certification covering C and C++ programming fundamentals and advanced concepts.'
    }
  ]

  const tabs = [
    { id: 'skills', label: 'Skills', icon: FaRobot },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'certifications', label: 'Certifications', icon: FaCertificate },
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
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Full Stack Developer & MCA Student passionate about creating digital experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">DG</span>
                  </div>
                  <p className="text-purple-300 font-semibold">Divyesh Girase</p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">
                Hi, I&apos;m Divyesh Girase
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a passionate Full Stack Developer currently pursuing my Master of Computer Application
                  at Shri Govindram Seksaria Institute of Technology and Science, Indore. With a strong
                  foundation in web development and a keen interest in modern technologies.
                </p>
                <p>
                  My journey in tech started during my Bachelor&apos;s degree where I achieved a 9.0 CGPA.
                  I love building responsive websites and applications that solve real-world problems
                  and create meaningful user experiences.
                </p>
                <p>
                  I have hands-on experience with modern frameworks like Next.js, React, and have worked
                  on various projects ranging from freelancing platforms to appointment scheduling systems.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Tabbed Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-700">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-t-lg font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-purple-600 text-white border-b-2 border-purple-400'
                        : 'text-gray-400 hover:text-purple-400 hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="text-lg" />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {skills.map((skill, index) => {
                        const Icon = skill.icon
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-gray-700 p-4 rounded-lg"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <Icon className={`text-2xl ${skill.color}`} />
                              <span className="text-white font-medium">{skill.name}</span>
                            </div>
                            <div className="w-full bg-gray-600 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                className="bg-purple-500 h-2 rounded-full"
                              />
                            </div>
                            <span className="text-gray-400 text-sm mt-1 block">{skill.level}%</span>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Developer Tools</h3>
                    <div className="flex flex-wrap gap-4">
                      {tools.map((tool) => {
                        const Icon = tool.icon
                        return (
                          <div
                            key={tool.name}
                            className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg"
                          >
                            <Icon className={`text-lg ${tool.color}`} />
                            <span className="text-gray-300">{tool.name}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Education Tab */}
              {activeTab === 'education' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-700 p-6 rounded-lg"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                          <p className="text-purple-400 font-semibold">{edu.institution}</p>
                          <p className="text-gray-400">{edu.location}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Completed' ? 'bg-green-900 text-green-300' : 'bg-blue-900 text-blue-300'
                          }`}>
                            {edu.status}
                          </span>
                          <p className="text-gray-400 mt-1">{edu.graduation}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-white font-medium">CGPA: {edu.cgpa}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Professional Experience</h3>
                  {experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-700 p-6 rounded-lg"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                          <p className="text-purple-400 font-semibold">{exp.company}</p>
                        </div>
                        <span className="text-gray-400 font-medium">{exp.period}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Certifications Tab */}
              {activeTab === 'certifications' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-700 p-6 rounded-lg"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">{cert.name}</h4>
                          <p className="text-purple-400 font-semibold">{cert.issuer}</p>
                        </div>
                        <span className="text-gray-400 font-medium">{cert.period}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{cert.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
