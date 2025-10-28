"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    const root = document.documentElement
    setIsDark(root.classList.contains("dark"))

    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme") {
        setIsDark(document.documentElement.classList.contains("dark"))
      }
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [])

  const toggle = () => {
    const root = document.documentElement
    const next = !root.classList.contains("dark")
    root.classList.toggle("dark", next)
    try {
      localStorage.setItem("theme", next ? "dark" : "light")
    } catch {}
    setIsDark(next)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Cambiar tema"
      onClick={toggle}
      className="bg-transparent"
      title={isDark ? "Tema claro" : "Tema oscuro"}
    >
      {mounted && isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}
