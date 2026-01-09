'use client'

import Link from 'next/link'
import { ArrowRight, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function Hero() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine which image to show based on theme
  const isDark = mounted && (theme === 'dark' || (theme === 'system' && systemTheme === 'dark'))
  const imageSrc = isDark 
    ? 'https://cldup.com/8NpF8-KA0r.svg' 
    : 'https://cldup.com/pdxWxC-chv.svg'
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-12 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl text-balance">
              The Modern Open-Source{' '}
              <span className="text-primary">Learning Management System</span>
            </h1>
          </motion.div>
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground text-balance px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Build, deploy, and scale your learning platform. Self-host for free or let us handle the infrastructure.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-4 lg:gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className="text-sm sm:text-base w-full sm:w-auto">
              <Link href="/pricing">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-sm sm:text-base w-full sm:w-auto">
              <Link href="https://github.com/enyojoo/easelms" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">View on </span>GitHub
              </Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {mounted ? (
            <div className="w-full max-w-6xl mx-auto pl-4 sm:pl-0 overflow-x-hidden">
              <div className="flex justify-end sm:justify-center">
                <img
                  src={imageSrc}
                  alt="EaseLMS Platform"
                  className="h-auto w-full sm:w-full max-w-full"
                  style={{
                    imageRendering: 'auto',
                    WebkitImageRendering: 'auto',
                    shapeRendering: 'geometricPrecision',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                  }}
                  width="2224"
                  height="885"
                  loading="eager"
                />
              </div>
            </div>
          ) : (
            <div className="w-full max-w-6xl mx-auto h-[400px] sm:h-[500px] lg:h-[600px] bg-muted animate-pulse rounded-lg" />
          )}
        </motion.div>
      </div>
    </section>
  )
}
