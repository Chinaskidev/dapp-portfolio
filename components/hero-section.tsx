"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const part1 = "Me encanta construir software"
  const part2 = " y aprender de quienes también lo hacen."
  const full = part1 + part2

  const [i, setI] = useState(0)
  const [done, setDone] = useState(false)
  const [caretVisible, setCaretVisible] = useState(true)

  const videoSrc =
    "https://res.cloudinary.com/dop4qm8ku/video/upload/f_auto,q_auto:eco,vc_auto/6994107_Generative_Ai_Computer_Hacker_3840x2160_gbb8rb.mp4"

  useEffect(() => {
    const speed = 100
    const id = window.setInterval(() => {
      setI((prev) => {
        const next = Math.min(prev + 1, full.length)
        if (next === full.length) {
          window.clearInterval(id)
          window.clearInterval(caretId)
          setCaretVisible(true)
          setDone(true)
        }
        return next
      })
    }, speed)

    const caretId = window.setInterval(() => setCaretVisible((v) => !v), 500)

    return () => {
      window.clearInterval(id)
      if (caretId) window.clearInterval(caretId)
    }
  }, [full.length])

  const videoRef = useRef<HTMLVideoElement | null>(null)
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    try {
      v.currentTime = 0
      const p = v.play()
      if (p && typeof p.then === "function") p.catch(() => {})
    } catch {
      // ignore
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh opacity-50 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-0 items-center">
          {/* Left: Text content (60%) */}
          <div className="space-y-8 lg:pr-12 max-w-2xl" style={{ animation: "slide-in-left 0.8s cubic-bezier(0.22, 1, 0.36, 1) both" }}>
            <div className="space-y-6">
              {/* Video container behind typewriter */}
              <div className="relative">
                <div aria-hidden className="absolute inset-0 -m-4 overflow-hidden rounded-xl pointer-events-none">
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    preload="auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="block w-full h-full object-cover opacity-20 mix-blend-luminosity scale-110"
                  />
                </div>

                <h1 className="relative font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight py-8">
                  <span>{part1.slice(0, Math.min(i, part1.length))}</span>
                  <span className="gold-shimmer">{part2.slice(0, Math.max(0, i - part1.length))}</span>
                  <span aria-hidden="true" className="ml-1 align-baseline text-primary">
                    {caretVisible ? "|" : " "}
                  </span>
                </h1>
              </div>

              <p
                className={`text-lg sm:text-xl text-muted-foreground max-w-xl text-pretty leading-relaxed transition-all duration-1000 ${
                  done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Soy Desarrollador Full-Stack con especialización en Blockchain y capacidades avanzadas en Ciencia de Datos.
                Combino ingeniería de software, arquitecturas Web3 y análisis de datos para construir productos escalables.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-1000 delay-200 ${
                done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a href="https://github.com/Chinaskidev" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group tracking-wide">
                  Ver Proyectos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="mailto:hello@yultic.dev">
                <Button size="lg" variant="outline" className="bg-transparent border-gold/30 hover:border-gold/60 hover:bg-gold/5">
                  Contactar
                </Button>
              </a>
            </div>

            <div
              className={`flex items-center gap-6 transition-all duration-1000 delay-400 ${
                done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="https://github.com/Chinaskidev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/juancarlosvz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@yultic.dev"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Center: Golden decorative line */}
          <div className="hidden lg:flex flex-col items-center gap-3 mx-8" style={{ animation: "fade-in 1.2s ease both 0.4s" }}>
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold to-transparent" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold to-transparent" />
          </div>

          {/* Right: Decorative element */}
          <div className="hidden lg:flex items-center justify-center" style={{ animation: "slide-in-right 0.8s cubic-bezier(0.22, 1, 0.36, 1) both 0.2s" }}>
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/20 via-transparent to-accent/10 blur-2xl" />
              <div className="absolute inset-8 rounded-full border border-gold/20" />
              <div className="absolute inset-16 rounded-full border border-gold/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-8xl text-primary/20 select-none">&lt;/&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
