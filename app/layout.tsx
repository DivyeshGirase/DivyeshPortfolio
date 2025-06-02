import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AIChatbot from '@/components/AIChatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Divyesh Girase - Portfolio',
  description: 'Full Stack Developer & MCA Student passionate about creating amazing digital experiences',
  keywords: ['portfolio', 'developer', 'full stack', 'react', 'next.js', 'typescript', 'freelancing'],
  authors: [{ name: 'Divyesh Girase' }],
  creator: 'Divyesh Girase',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://divyeshgirase.dev',
    title: 'Divyesh Girase - Portfolio',
    description: 'Full Stack Developer & MCA Student passionate about creating amazing digital experiences',
    siteName: 'Divyesh Girase Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divyesh Girase - Portfolio',
    description: 'Full Stack Developer & MCA Student passionate about creating amazing digital experiences',
    creator: '@divyeshgirase',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B5CF6" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <AIChatbot />
        </div>
      </body>
    </html>
  )
}





