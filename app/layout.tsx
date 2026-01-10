import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { PostHogProvider } from '@/components/PostHogProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.easelms.org'),
  title: 'EaseLMS - Free Open-Source Learning Management System',
  description: 'EaseLMS is a free, modern open-source learning management system. Self-host for free or choose managed hosting. Build courses, track progress, and scale your online education platform.',
  keywords: [
    'LMS',
    'Learning Management System',
    'Open Source LMS',
    'Free LMS',
    'Self-hosted LMS',
    'Online Learning Platform',
    'E-Learning Platform',
    'Course Management System',
    'Educational Technology',
    'EdTech',
    'Training Platform',
    'Corporate Training',
    'Student Management System',
    'Online Education',
    'Distance Learning',
    'Moodle Alternative',
    'Canvas Alternative',
    'Blackboard Alternative',
    'Open Source Education',
    'Learning Platform',
  ],
  authors: [{ name: 'EaseLMS' }],
  creator: 'Easner, Inc.',
  publisher: 'Easner, Inc.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.easelms.org',
  },
  icons: {
    icon: [
      { url: 'https://cldup.com/6yEKvPtX22.svg', type: 'image/svg+xml' },
      { url: 'https://cldup.com/6yEKvPtX22.svg', sizes: 'any' },
    ],
    shortcut: [
      { url: 'https://cldup.com/6yEKvPtX22.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: 'https://cldup.com/6yEKvPtX22.svg', sizes: '180x180' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.easelms.org',
    siteName: 'EaseLMS',
    title: 'EaseLMS - Free Open-Source Learning Management System',
    description: 'Free, modern open-source learning management system. Self-host for free or choose managed hosting.',
    images: [
      {
        url: 'https://cldup.com/h0lZWMe1AG.png',
        width: 1200,
        height: 630,
        alt: 'EaseLMS - Free Open-Source Learning Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EaseLMS - Free Open-Source Learning Management System',
    description: 'Free, modern open-source learning management system. Self-host for free or choose managed hosting.',
    images: ['https://cldup.com/h0lZWMe1AG.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Analytics />
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  )
}
