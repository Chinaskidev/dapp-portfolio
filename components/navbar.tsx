"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Inicio", href: "#home" },
    { label: "Habilidades", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Experiencia", href: "#experience" },
    { label: "Contacto", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-gold/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link href="/" className="font-display text-2xl tracking-tight text-foreground">
            <span className="text-primary">jcarlov</span>
            <span className="text-muted-foreground font-light">.Eth</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="editorial-link text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-wide uppercase text-xs">
              Descargar CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-gold/10">
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="editorial-link text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors uppercase w-fit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex justify-end">
                <ThemeToggle />
              </div>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full tracking-wide uppercase text-xs">
                Descargar CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
