"use client"

import { Briefcase, GraduationCap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ExperienceSection() {
  const sectionRef = useScrollAnimation()

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
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
      <div className="container mx-auto" ref={sectionRef}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-on-scroll">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-balance tracking-tight">
              Experiencia & Educación
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Trayectoria profesional y formación académica
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical golden line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent md:-translate-x-px" />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0

                return (
                  <div
                    key={index}
                    className={`animate-on-scroll stagger-${index + 1} relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0`}
                  >
                    {/* Golden dot on timeline */}
                    <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-gold border-2 border-background -translate-x-1/2 top-7 md:top-1/2 md:-translate-y-1/2 z-10" />

                    {/* Content - alternating sides on desktop */}
                    <div className={`ml-14 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                      <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-gold/30 transition-colors duration-500">
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 ${isLeft ? "md:order-2" : ""}`}>
                            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                              {exp.type === "work" ? (
                                <Briefcase className="h-5 w-5 text-primary" />
                              ) : (
                                <GraduationCap className="h-5 w-5 text-primary" />
                              )}
                            </div>
                          </div>
                          <div className={`flex-1 space-y-2 ${isLeft ? "md:text-right" : ""}`}>
                            <h3 className="font-display text-lg font-semibold tracking-tight">{exp.title}</h3>
                            <p className="text-primary text-sm font-medium">{exp.company}</p>
                            <span className="inline-block text-xs font-mono tracking-wide text-muted-foreground border border-gold/20 px-2 py-0.5 rounded-full">
                              {exp.period}
                            </span>
                            <p className="text-sm text-muted-foreground leading-relaxed pt-1">{exp.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
