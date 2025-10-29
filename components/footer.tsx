import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                <span className="text-primary">DS</span>Portfolio
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Científico de Datos y Desarrollador especializado en Machine Learning y soluciones de IA.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Enlaces Rápidos</h4>
              <nav className="flex flex-col gap-2">
                <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </a>
                <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Habilidades
                </a>
                <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Proyectos
                </a>
                <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Experiencia
                </a>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contacto</h4>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">¿Tienes un proyecto en mente? ¡Hablemos!</p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 DSPortfolio. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
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
