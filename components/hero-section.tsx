"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const part1 = "Me encanta construir software"
  const part2 = " y aprender de quienes también lo hacen."
  const full = part1 + part2

  const [i, setI] = useState(0)
  const [done, setDone] = useState(false)
  const [caretVisible, setCaretVisible] = useState(true)

  // Video de fondo detrás del texto (Cloudinary)
  const videoSrc =
    "https://res.cloudinary.com/dop4qm8ku/video/upload/f_auto,q_auto:eco,vc_auto/6994107_Generative_Ai_Computer_Hacker_3840x2160_gbb8rb.mp4"

  useEffect(() => {
    const speed = 100 // ms por carácter

    // Declaramos caretId con let para poder limpiarlo desde el callback cuando termine
    const id = window.setInterval(() => {
      setI((prev) => {
        const next = Math.min(prev + 1, full.length)
        if (next === full.length) {
          // Cuando llega al final, limpiamos ambos intervalos y mostramos el caret fijo
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="relative inline-block">
              <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                <span>{part1.slice(0, Math.min(i, part1.length))}</span>
                <span className="text-primary">{part2.slice(0, Math.max(0, i - part1.length))}</span>
                <span aria-hidden="true" className="ml-1 align-baseline">
                  {caretVisible ? "|" : " "}
                </span>
              </h1>
              <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-lg">
                <video
                  src={videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="hidden sm:block w-full h-full object-cover opacity-20"
                />
              </div>
            </div>
            <p
              className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed transition-opacity duration-1500 ${
                done ? "opacity-100" : "opacity-0"
              }`}
            >
              Especializado en Machine Learning, Deep Learning y desarrollo de software. Creando sistemas que aprenden,
              predicen y optimizan procesos complejos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              Ver Proyectos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Contactar
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Decorative AI Pattern */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
