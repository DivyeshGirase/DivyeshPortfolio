'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Divyesh's AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Knowledge base about Divyesh
    const responses: { [key: string]: string } = {
      'skills': "Divyesh is proficient in JavaScript, Java, PHP, C++, HTML, CSS, React, Next.js, TypeScript, Tailwind CSS, MySQL, and Git. He also uses tools like VS Code, Visual Studio, Eclipse, and GitHub.",
      'projects': "Divyesh has worked on several impressive projects including a Freelancing Platform (Next.js, TypeScript), Salon Appointment Scheduler (PHP, MySQL), and Train Ticket Booking System (PHP, JavaScript, HTML/CSS).",
      'education': "Divyesh is currently pursuing his Master of Computer Application (7.0 CGPA) at Shri Govindram Seksaria Institute of Technology and Science, Indore. He completed his Bachelor of Computer Application with an excellent 9.0 CGPA from R. C. Patel Arts, Commerce & Science College, Shirpur.",
      'experience': "Divyesh has worked as an SDE Intern at Galaxy Weblinks Ltd. and as a Web Development Intern at ALMANET PROFESSIONAL SERVICE, where he developed web projects using Next.js and TypeScript.",
      'contact': "You can reach Divyesh at divyeshgirase@gmail.com or call him at +91 9770212987. You can also connect with him on LinkedIn (Divyesh-girase-495928213) or GitHub (DivyeshGirase).",
      'freelancing': "Divyesh has developed a comprehensive freelancing platform that enables seamless interaction between employers and freelancers, featuring user authentication, project management, and secure data handling.",
      'technologies': "Divyesh works with modern web technologies including React, Next.js, TypeScript for frontend, PHP and MySQL for backend, and uses Git for version control.",
      'certifications': "Divyesh holds a C and C++ Programming Certificate from Nextech Infosystem (August 2021 - December 2021)."
    }

    // Find matching response
    for (const [key, response] of Object.entries(responses)) {
      if (lowerMessage.includes(key)) {
        return response
      }
    }

    // Default responses for common questions
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! I'm here to help you learn more about Divyesh Girase. You can ask me about his skills, projects, education, experience, or how to contact him."
    }

    if (lowerMessage.includes('help')) {
      return "I can help you with information about Divyesh's:\n• Skills and technologies\n• Projects and work\n• Education background\n• Professional experience\n• Contact information\n• Certifications\n\nJust ask me anything!"
    }

    if (lowerMessage.includes('thank')) {
      return "You're welcome! Feel free to ask if you have any other questions about Divyesh or his work."
    }

    // Default response
    return "I'd be happy to help! You can ask me about Divyesh's skills, projects, education, experience, or contact information. What specific information are you looking for?"
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputText),
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open AI Chat"
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaRobot className="text-xl" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 flex flex-col"
          >
            {/* Header */}
            <div className="bg-purple-600 text-white p-4 rounded-t-2xl flex items-center gap-3">
              <FaRobot className="text-xl" />
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs text-purple-200">Ask me about Divyesh</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start gap-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`p-2 rounded-full ${message.isBot ? 'bg-purple-600' : 'bg-gray-600'}`}>
                      {message.isBot ? <FaRobot className="text-white text-sm" /> : <FaUser className="text-white text-sm" />}
                    </div>
                    <div className={`p-3 rounded-lg ${
                      message.isBot 
                        ? 'bg-gray-700 text-gray-200' 
                        : 'bg-purple-600 text-white'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start gap-2">
                    <div className="p-2 rounded-full bg-purple-600">
                      <FaRobot className="text-white text-sm" />
                    </div>
                    <div className="bg-gray-700 text-gray-200 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isTyping}
                  className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white p-2 rounded-lg transition-colors duration-300"
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
