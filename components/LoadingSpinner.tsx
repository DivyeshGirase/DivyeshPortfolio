'use client'

import React from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  fullScreen?: boolean
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  const containerClasses = fullScreen 
    ? 'fixed inset-0 bg-gray-900 flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4'

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center gap-4">
        {/* Animated Logo Spinner */}
        <div className="relative">
          <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-spin`}>
            <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-white font-bold text-xs">DG</span>
            </div>
          </div>
          {/* Pulse effect */}
          <div className={`absolute inset-0 ${sizeClasses[size]} rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 animate-ping`}></div>
        </div>
        
        {/* Loading text */}
        <div className="text-center">
          <p className={`text-gray-300 ${textSizeClasses[size]} font-medium`}>
            {text}
          </p>
          <div className="flex justify-center mt-2 space-x-1">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner
