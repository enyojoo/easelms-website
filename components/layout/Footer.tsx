'use client'

import Link from 'next/link'
import { Github, ArrowRight } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { CTASection } from '@/components/marketing/CTASection'

export function Footer() {
  return (
    <>
      <CTASection />
      <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 lg:px-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center mb-8">
          <Logo className="h-8 w-auto sm:h-10 mb-4" />
          <p className="text-sm text-muted-foreground text-center max-w-md">
            The modern open-source learning management system. Build, deploy, and scale your learning platform.
          </p>
          </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link
            href="https://github.com/enyojoo/easelms"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                    <Link
            href="https://x.com/enyosaam"
            className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
            aria-label="X"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
                    </Link>
          </div>

        {/* Privacy and Terms */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="/privacy" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms
          </Link>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 lg:px-8">
          <p className="text-xs leading-5 text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Easner, Inc.
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}
