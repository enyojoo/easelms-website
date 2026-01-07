"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1">
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <Sun className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  return (
    <div className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1">
      <Button
        variant={theme === "light" ? "secondary" : "ghost"}
        size="icon"
        className="h-7 w-7"
        onClick={() => setTheme("light")}
      >
        <Sun className="h-4 w-4" />
      </Button>
      <Button
        variant={theme === "dark" ? "secondary" : "ghost"}
        size="icon"
        className="h-7 w-7"
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-4 w-4" />
      </Button>
    </div>
  )
}
