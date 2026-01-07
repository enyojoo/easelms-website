"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
          <Sun className="h-4 w-4" />
        </Button>
    )
  }

  // Determine current effective theme
  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme === "dark"

  const toggleTheme = () => {
    if (isDark) {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
      <Button
      variant="ghost"
        size="icon"
      className="h-9 w-9"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      </Button>
  )
}
