'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white border-t border-border py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 opacity-90 px-2 sm:px-0">
            Start your free trial today. Or deploy it yourself for free.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-6">
            <Button asChild size="lg" variant="secondary" className="text-sm sm:text-base w-full sm:w-auto">
              <Link href="/pricing">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="text-sm sm:text-base w-full sm:w-auto border-2 border-black dark:border-white/30 bg-transparent text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/50 dark:hover:border-white/50"
            >
              <Link href="/open-source">
                Self-Host for Free
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
