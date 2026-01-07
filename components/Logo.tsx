'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'full' | 'icon'
}

// Default EaseLMS logo URLs from the LMS app
const DEFAULT_LOGOS = {
  logoBlack: 'https://cldup.com/VQGhFU5kd6.svg',
  logoWhite: 'https://cldup.com/bwlFqC4f8I.svg',
}

export function Logo({ className = '', variant = 'full' }: LogoProps) {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine which logo to show based on theme
  const isDark = mounted && (theme === 'dark' || (theme === 'system' && systemTheme === 'dark'))
  const logoSrc = isDark ? DEFAULT_LOGOS.logoWhite : DEFAULT_LOGOS.logoBlack

  if (!mounted) {
    return (
      <div
        className={cn('flex items-center animate-pulse bg-muted rounded', className)}
        style={{
          minHeight: variant === 'icon' ? '28px' : '32px',
          minWidth: variant === 'icon' ? '28px' : '100px',
        }}
      />
    )
  }

  return (
    <Link href="/" className={cn('flex items-center', className)}>
      <Image
        src={logoSrc}
        alt="EaseLMS"
        width={variant === 'icon' ? 28 : 100}
        height={variant === 'icon' ? 28 : 32}
        className="h-auto w-auto"
        priority
      />
    </Link>
  )
}
