'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Logo } from '@/components/Logo'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'Open Source', href: '/open-source' },
  { name: 'Hosted', href: '/hosted' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(56)
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
  }, [])

  return (
    <header ref={headerRef} className="relative sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Logo className="h-5 w-auto sm:h-6 md:h-7" />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-semibold leading-6 transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary' : 'text-foreground'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-3 xl:gap-4">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden xl:inline-flex">
            <Link href="/pricing">Get Started</Link>
          </Button>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed left-0 right-0 bottom-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            style={{ top: `${headerHeight}px` }}
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Menu */}
          <div 
            className="fixed left-0 right-0 lg:hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 z-50 shadow-lg"
            style={{ top: `${headerHeight}px` }}
          >
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block rounded-md px-3 py-2.5 text-base font-semibold leading-7 transition-colors',
                    pathname === item.href
                      ? 'bg-accent text-accent-foreground'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t space-y-3">
                <div className="flex items-center justify-between px-3">
                  <span className="text-sm font-medium text-foreground">Theme</span>
                <ThemeToggle />
                </div>
                <Button asChild className="w-full" size="lg">
                  <Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
