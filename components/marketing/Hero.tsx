'use client'

import Link from 'next/link'
import { ArrowRight, Github, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              The Modern Open-Source{' '}
              <span className="text-primary">Learning Management System</span>
            </h1>
          </motion.div>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Build, deploy, and scale your learning platform. Self-host for free or let us handle the infrastructure.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className="text-base">
              <Link href="/pricing">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link href="https://github.com/easelms/easelms" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-base">
              <Link href="#demo">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Link>
            </Button>
          </motion.div>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 border-2 border-background" />
                <div className="h-8 w-8 rounded-full bg-primary/30 border-2 border-background" />
                <div className="h-8 w-8 rounded-full bg-primary/40 border-2 border-background" />
              </div>
              <span>Trusted by organizations worldwide</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
