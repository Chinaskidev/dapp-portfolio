import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, LineChart, Cpu, Network } from "lucide-react"

export function SkillsSection() {
  const skills = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Modelos predictivos, clasificación, regresión y clustering con scikit-learn, XGBoost",
    },
    {
      icon: LineChart,
      title: "Análisis de Datos",
      description: "Visualización y análisis estadístico con Pandas, NumPy, Matplotlib, Seaborn",
    },
    {
      icon: Code,
      title: "Desarrollo Full-Stack",
      description: "React, Next.js, Nest.js, TypeScript, Python, FastAPI, Prisma",
    },
    {
      icon: Database,
      title: "Bases de Datos",
      description: "SQL, PostgreSQL, diseño de esquemas y optimización",
    },
    {
      icon: Cpu,
      title: "MLOps & Cloud",
      description: "Docker, Kubernetes, AWS, GCP, CI/CD, despliegue de modelos",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Habilidades & Tecnologías</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Experiencia en el stack completo de ciencia de datos y desarrollo de software
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="border-border bg-card hover:border-primary/50 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
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
