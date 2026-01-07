import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://easelms.org'),
  title: 'EaseLMS - Free Modern Open-Source LMS',
  description: 'Build, deploy, and scale your learning platform. Self-host for free or let us handle the infrastructure.',
  keywords: ['LMS', 'Learning Management System', 'Open Source', 'Online Learning', 'E-Learning'],
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
    canonical: 'https://easelms.org',
  },
  icons: {
    icon: 'https://cldup.com/6yEKvPtX22.svg',
    shortcut: 'https://cldup.com/6yEKvPtX22.svg',
    apple: 'https://cldup.com/6yEKvPtX22.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://easelms.org',
    siteName: 'EaseLMS',
    title: 'EaseLMS - Free Modern Open-Source LMS',
    description: 'Build, deploy, and scale your learning platform.',
    images: [
      {
        url: 'https://cldup.com/HnQy8q9nm5.png',
        width: 1200,
        height: 630,
        alt: 'EaseLMS - Free Modern Open-Source LMS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EaseLMS - Free Modern Open-Source LMS',
    description: 'Build, deploy, and scale your learning platform.',
    images: ['https://cldup.com/HnQy8q9nm5.png'],
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
      </body>
    </html>
  )
}
