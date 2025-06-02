'use client'

import React from 'react'

const SkeletonLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Profile Image Skeleton */}
          <div className="mb-12">
            <div className="relative w-56 h-56 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gray-700/50"></div>
              <div className="absolute inset-2 rounded-full bg-gray-600/50"></div>
            </div>
          </div>

          {/* Greeting Skeleton */}
          <div className="mb-6 flex justify-center">
            <div className="h-8 w-48 bg-gray-700/50 rounded-full"></div>
          </div>

          {/* Main Heading Skeleton */}
          <div className="mb-8 space-y-4">
            <div className="h-16 w-96 bg-gray-700/50 rounded-lg mx-auto"></div>
            <div className="h-16 w-80 bg-gray-700/50 rounded-lg mx-auto"></div>
          </div>

          {/* Description Skeleton */}
          <div className="mb-12 space-y-3">
            <div className="h-6 w-full max-w-2xl bg-gray-700/50 rounded mx-auto"></div>
            <div className="h-6 w-3/4 max-w-xl bg-gray-700/50 rounded mx-auto"></div>
          </div>

          {/* CTA Buttons Skeleton */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <div className="h-14 w-48 bg-gray-700/50 rounded-xl"></div>
            <div className="h-14 w-48 bg-gray-700/50 rounded-xl"></div>
          </div>

          {/* Contact Info Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="h-20 bg-gray-700/50 rounded-xl"></div>
            <div className="h-20 bg-gray-700/50 rounded-xl"></div>
          </div>

          {/* Social Links Skeleton */}
          <div className="flex justify-center space-x-6">
            <div className="w-16 h-16 bg-gray-700/50 rounded-xl"></div>
            <div className="w-16 h-16 bg-gray-700/50 rounded-xl"></div>
          </div>
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          {/* Section Header Skeleton */}
          <div className="text-center mb-16">
            <div className="h-12 w-64 bg-gray-700/50 rounded-lg mx-auto mb-6"></div>
            <div className="h-6 w-96 bg-gray-700/50 rounded mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Stats Cards Skeleton */}
            <div className="grid grid-cols-2 gap-6">
              <div className="h-24 bg-gray-700/50 rounded-2xl"></div>
              <div className="h-24 bg-gray-700/50 rounded-2xl"></div>
              <div className="h-24 bg-gray-700/50 rounded-2xl"></div>
              <div className="h-24 bg-gray-700/50 rounded-2xl"></div>
            </div>

            {/* About Content Skeleton */}
            <div className="space-y-6">
              <div className="h-32 bg-gray-700/50 rounded-2xl"></div>
              <div className="h-32 bg-gray-700/50 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section Skeleton */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header Skeleton */}
          <div className="text-center mb-16">
            <div className="h-12 w-80 bg-gray-700/50 rounded-lg mx-auto mb-6"></div>
            <div className="h-6 w-96 bg-gray-700/50 rounded mx-auto"></div>
          </div>

          {/* Project Cards Skeleton */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700/30 rounded-2xl p-6">
              <div className="h-48 bg-gray-600/50 rounded-xl mb-6"></div>
              <div className="h-6 w-3/4 bg-gray-600/50 rounded mb-3"></div>
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-600/50 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-600/50 rounded"></div>
                <div className="h-4 w-4/6 bg-gray-600/50 rounded"></div>
              </div>
              <div className="flex gap-2 mb-6">
                <div className="h-6 w-16 bg-gray-600/50 rounded-full"></div>
                <div className="h-6 w-20 bg-gray-600/50 rounded-full"></div>
                <div className="h-6 w-18 bg-gray-600/50 rounded-full"></div>
              </div>
            </div>
            <div className="bg-gray-700/30 rounded-2xl p-6">
              <div className="h-48 bg-gray-600/50 rounded-xl mb-6"></div>
              <div className="h-6 w-3/4 bg-gray-600/50 rounded mb-3"></div>
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-600/50 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-600/50 rounded"></div>
                <div className="h-4 w-4/6 bg-gray-600/50 rounded"></div>
              </div>
              <div className="flex gap-2 mb-6">
                <div className="h-6 w-16 bg-gray-600/50 rounded-full"></div>
                <div className="h-6 w-20 bg-gray-600/50 rounded-full"></div>
                <div className="h-6 w-18 bg-gray-600/50 rounded-full"></div>
              </div>
            </div>
            <div className="bg-gray-700/30 rounded-2xl p-6">
              <div className="h-48 bg-gray-600/50 rounded-xl mb-6"></div>
              <div className="h-6 w-3/4 bg-gray-600/50 rounded mb-3"></div>
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-600/50 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-600/50 rounded"></div>
                <div className="h-4 w-4/6 bg-gray-600/50 rounded"></div>
              </div>
              <div className="flex gap-2 mb-6">
                <div className="h-6 w-16 bg-gray-600/50 rounded-full"></div>
                <div className="h-6 w-20 bg-gray-600/50 rounded-full"></div>
                <div className="h-6 w-18 bg-gray-600/50 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* View All Button Skeleton */}
          <div className="text-center mt-12">
            <div className="h-14 w-48 bg-gray-700/50 rounded-xl mx-auto"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkeletonLoader
