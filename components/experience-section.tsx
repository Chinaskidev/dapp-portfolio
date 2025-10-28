import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      type: "work",
      title: "Senior Data Scientist",
      company: "Tech Innovation Labs",
      period: "2022 - Presente",
      description:
        "Liderazgo de proyectos de ML/AI, desarrollo de modelos predictivos y sistemas de recomendación. Implementación de pipelines MLOps.",
    },
    {
      type: "work",
      title: "Machine Learning Engineer",
      company: "DataCorp Solutions",
      period: "2020 - 2022",
      description:
        "Desarrollo y despliegue de modelos de deep learning. Optimización de algoritmos y arquitecturas de redes neuronales.",
    },
    {
      type: "education",
      title: "Maestría en Ciencia de Datos",
      company: "Universidad Tecnológica",
      period: "2018 - 2020",
      description: "Especialización en Machine Learning, Deep Learning y Big Data Analytics.",
    },
    {
      type: "education",
      title: "Ingeniería en Sistemas",
      company: "Universidad Nacional",
      period: "2014 - 2018",
      description: "Fundamentos de programación, algoritmos, estructuras de datos y desarrollo de software.",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Experiencia & Educación</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Trayectoria profesional y formación académica
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        {exp.type === "work" ? (
                          <Briefcase className="h-6 w-6 text-primary" />
                        ) : (
                          <GraduationCap className="h-6 w-6 text-primary" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
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
