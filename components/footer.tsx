import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-gold/10 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-5">
              <h3 className="font-display text-3xl font-bold tracking-tight">
                <span className="text-primary">jcarlov</span>
                <span className="text-muted-foreground font-light">.Eth</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Constructor de productos digitales en la intersección entre Inteligencia Artificial, datos y Web3.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <h4 className="font-display text-sm font-semibold tracking-widest uppercase text-muted-foreground">Navegación</h4>
              <nav className="flex flex-col gap-3">
                <a href="#home" className="editorial-link text-sm text-muted-foreground hover:text-foreground transition-colors w-fit">
                  Inicio
                </a>
                <a href="#skills" className="editorial-link text-sm text-muted-foreground hover:text-foreground transition-colors w-fit">
                  Habilidades
                </a>
                <a href="#projects" className="editorial-link text-sm text-muted-foreground hover:text-foreground transition-colors w-fit">
                  Proyectos
                </a>
                <a href="#experience" className="editorial-link text-sm text-muted-foreground hover:text-foreground transition-colors w-fit">
                  Experiencia
                </a>
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-5">
              <h4 className="font-display text-sm font-semibold tracking-widest uppercase text-muted-foreground">Contacto</h4>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">¿Tienes un proyecto en mente? ¡Hablemos!</p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 tracking-wide" asChild>
                  <a href="mailto:hello@yultic.dev">
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar Mensaje
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2026 jcarlov.Eth — Todos los derechos reservados.</p>
            <div className="flex items-center gap-5">
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
        </div>
      </div>
    </footer>
  )
}
