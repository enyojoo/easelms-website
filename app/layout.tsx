import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EaseLMS - Free Modern Open-Source LMS',
  description: 'Build, deploy, and scale your learning platform. Self-host for free or let us handle the infrastructure.',
  keywords: ['LMS', 'Learning Management System', 'Open Source', 'Online Learning', 'E-Learning'],
  authors: [{ name: 'EaseLMS' }],
  icons: {
    icon: 'https://cldup.com/6yEKvPtX22.svg',
    shortcut: 'https://cldup.com/6yEKvPtX22.svg',
    apple: 'https://cldup.com/6yEKvPtX22.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://easelms.org',
    title: 'EaseLMS - Free Modern Open-Source LMS',
    description: 'Build, deploy, and scale your learning platform.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EaseLMS - Free Modern Open-Source LMS',
    description: 'Build, deploy, and scale your learning platform.',
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
