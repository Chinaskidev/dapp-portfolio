import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Photo Section */}
        <div className="w-full flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-accent/25 rounded-2xl blur-2xl" />
            <Image
              src="/yo.jpeg"
              alt="Juan Carlos Vásquez"
              width={500}
              height={500}
              className="relative rounded-2xl max-w-sm aspect-square object-cover border border-border/50 shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8 order-2 md:order-1">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Juan Carlos Vásquez
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
              y esta es mi ventana al mundo de la programación y la tecnología.
            </p>
          </div>

          <div className="space-y-6 text-foreground/90">
            <p className="text-base md:text-lg leading-relaxed text-pretty">
              Aunque solo llevo dos años inmerso de lleno en el desarrollo full-time, mi trayectoria se ha centrado en
              convertir ideas ambiciosas en productos reales y funcionales.
            </p>

            <div className="pl-4 border-l-2 border-primary/50 space-y-4">
              <div className="flex gap-3">
                <Sparkles className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg leading-relaxed text-pretty">
                  Soy co-fundador de <span className="font-semibold text-foreground">Skinner</span>, una startup que
                  busca optimizar los procesos del Talento Humano a través de la Inteligencia Artificial.
                </p>
              </div>

              <div className="flex gap-3">
                <Code2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg leading-relaxed text-pretty">
                  Este proyecto ha sido mi campo de entrenamiento más sólido, donde he trabajado con tecnologías
                  full-stack robustas como <span className="font-medium text-foreground">Nest.js</span>,
                  <span className="font-medium text-foreground"> Python</span>,
                  <span className="font-medium text-foreground"> FastApi</span>,
                  <span className="font-medium text-foreground"> TypeScript</span> y
                  <span className="font-medium text-foreground"> Prisma</span> para el backend, y
                  <span className="font-medium text-foreground"> Next.js</span> para el frontend.
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-pretty">
              En este blog, compartiré mis aprendizajes, exploraciones técnicas y los desafíos de construir tecnología,
              desde el backend hasta la blockchain.{" "}
              <span className="font-semibold text-foreground">¡Bienvenido/a!</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button asChild size="lg" className="group text-base">
              <Link href="/portfolio">
                Ver mi Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
              <Link href="/portfolio#contact">Contacto</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
