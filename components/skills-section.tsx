"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, LineChart, Cpu } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SkillsSection() {
  const sectionRef = useScrollAnimation()

  const skills = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Machine Learning aplicado: modelos de clasificación, regresión y clustering con scikit-learn y XGBoost. Experiencia en fine-tuning de Transformers y optimización de embeddings para búsqueda semántica con Hugging Face y PyTorch.",
      span: "md:col-span-2",
    },
    {
      icon: LineChart,
      title: "Análisis de Datos",
      description: "Análisis de Datos y Visualización Estadística: Limpieza, transformación y EDA avanzado con Pandas y NumPy. Creación de visualizaciones dinámicas e informativas utilizando Matplotlib y Seaborn para la extracción de insights de negocio.",
      span: "",
    },
    {
      icon: Code,
      title: "Desarrollo Full-Stack",
      description: "Stack fullstack: React/Next.js (frontend), Nest.js/FastAPI (backend), TypeScript, Python y Prisma.",
      span: "",
    },
    {
      icon: Database,
      title: "Bases de Datos",
      description: "SQL, PostgreSQL, diseño de esquemas y optimización",
      span: "",
    },
    {
      icon: Cpu,
      title: "MLOps & Cloud",
      description: "Docker, Kubernetes, AWS, GCP, CI/CD, despliegue de modelos",
      span: "md:col-span-2",
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
      <div className="container mx-auto" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-on-scroll">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-balance tracking-tight">
              Habilidades & Tecnologías
            </h2>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className={`animate-on-scroll stagger-${index + 1} border-border/50 bg-card/80 backdrop-blur-sm hover:border-gold/40 transition-all duration-500 group ${skill.span}`}
              >
                <CardContent className="p-7 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-semibold tracking-tight">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
