import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 relative overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh opacity-40 pointer-events-none" />

      <div className="max-w-6xl xl:max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center relative z-10">
        {/* Photo Section */}
        <div className="w-full flex justify-center md:justify-end order-1 md:order-2 md:self-start md:pt-8 lg:pt-12"
          style={{ animation: "slide-in-right 0.8s cubic-bezier(0.22, 1, 0.36, 1) both 0.2s" }}
        >
          <div className="relative w-[250px] sm:w-[300px] md:w-[320px] lg:w-[380px] xl:w-[420px]">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/25 to-accent/15 rounded-2xl blur-2xl" />
            <Image
              src="/yo.jpeg"
              alt="Juan Carlos Vásquez"
              width={500}
              height={500}
              className="relative w-full rounded-2xl aspect-square object-cover border border-gold/20 shadow-2xl"
              priority
            />
            {/* Decorative corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6 sm:space-y-8 order-2 md:order-1 text-center md:text-left"
          style={{ animation: "slide-in-left 0.8s cubic-bezier(0.22, 1, 0.36, 1) both" }}
        >
          <div className="space-y-3 sm:space-y-4">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight tracking-tight">
              Hola, soy{" "}
              <span className="gold-shimmer">
                Juan Carlos Vásquez
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground text-pretty">
              y esta es mi ventana al mundo de la programación y la tecnología.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 text-foreground/90 text-left">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-pretty">
              Aunque solo llevo dos años inmerso de lleno en el desarrollo full-time, mi trayectoria se ha centrado en
              convertir ideas ambiciosas en productos reales y funcionales.
            </p>

            <div className="pl-3 sm:pl-4 border-l-2 border-gold/40 space-y-3 sm:space-y-4">
              <div className="flex gap-2 sm:gap-3">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-pretty">
                  Soy co-fundador de <span className="font-semibold text-foreground">Skinner</span>, una startup que
                  busca optimizar los procesos del Talento Humano a través de la Inteligencia Artificial.
                </p>
              </div>

              <div className="flex gap-2 sm:gap-3">
                <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-pretty">
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

            <div className="pl-3 sm:pl-4 border-l-2 border-gold/40 space-y-3 sm:space-y-4">
              <div className="flex gap-2 sm:gap-3">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-pretty">
                  También soy fundador de <span className="font-semibold text-foreground">Yultic</span>, Yultic es una consultora de desarrollo
                   de software enfocada en pequeñas y medianas empresas que necesitan tecnología funcional. Diseñamos y construimos
                   soluciones tecnológicas a medida,desde automatización inteligente con IA
                   hasta plataformas SaaS que reemplazan procesos manuales ineficientes.
                </p>
              </div>

              <div className="flex gap-2 sm:gap-3">
                <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-pretty">
                  En este blog, compartiré mis aprendizajes, exploraciones técnicas y los desafíos de construir tecnología,
                  desde el backend hasta la blockchain.{" "}
                  <span className="font-semibold text-foreground">¡Bienvenido/a!</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center md:justify-start">
            <Button asChild size="lg" className="group text-sm sm:text-base w-full sm:w-auto tracking-wide">
              <Link href="/portfolio">
                Ver mi Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-sm sm:text-base bg-transparent border-gold/30 hover:border-gold/60 hover:bg-gold/5 w-full sm:w-auto">
              <Link href="/portfolio#contact">Contacto</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
