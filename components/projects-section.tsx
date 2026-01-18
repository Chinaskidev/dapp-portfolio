import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "SKINNER",
      description:
        "Software de gestión administrativa inteligente que combina IA avanzada con gestión de talento humano. Optimiza procesos administrativos y fortalece la infraestructura tecnológica de las organizaciones.",
      tags: ["Python", "Transformer", "FastAPI", "Docker","Nest.js","Next.js","Prisma","Taildwind.css"],
      image: "/skinner-logo.png",
      imageContain: true,
      github: "https://github.com/Skinner-SAS-de-CV",
      demo: "https://www.skinnersv.net/companies",
    },
    {
      title: "Sistema de predicción de ventas para un petshop",
      description:
        "Desarrollé un sistema inteligente de predicción de ventas orientado a pequeños y medianos negocios del sector Alimento para mascotas, diseñado para transformar datos históricos en decisiones comerciales accionables. El sistema permite cargar archivos de ventas en Excel, procesarlos automáticamente mediante un pipeline de datos robusto y generar predicciones de ventas futuras utilizando modelos de Machine Learning. El modelo principal, basado en XGBoost para series temporales, alcanza aproximadamente un 77 % de precisión (R²) y se reentrena de forma automática cuando se incorporan nuevos datos, garantizando resultados siempre actualizados.",
      tags: ["Python", "FastAPI", "MLflow", "Docker","XGBoost"],
      image: "/petshop.jpg",
      github: "https://github.com/yultic",
      demo: "https://github.com/yultic",
    },
    {
      title: "ETL Climático Automatizado para El Salvador",
      description: "Desarrollé un pipeline ETL completo de datos meteorológicos que automatiza la extracción, transformación y carga de información del clima para El Salvador usando tecnologías de MLOps modernas. El proyecto integra Apache Airflow, Docker y Google Cloud, transformando datos JSON en información limpia lista para análisis en una base de datos relacional.Este sistema está pensado para operaciones de datos repetibles y escalables: se ejecuta en un DAG programado diariamente, obtiene datos desde una API de clima (OpenWeatherMap), los transforma y los deposita en una base de datos PostgreSQL, con todo orquestado para monitoreo y mantenimiento sencillo.",
      tags: ["Apache Airflow", "Python", "Google Cloud Storage", "PostgreSQL","OpenWeatherMap API"],
      image: "/lluvias.jpg",
      github: "https://github.com/Chinaskidev/ETL-Clima-ElSalvador",
      demo: "https://github.com/Chinaskidev/ETL-Clima-ElSalvador",
    },
    {
      title: "Clasificador de Imágenes con CNN",
      description:
        "Red neuronal convolucional para clasificación multi-clase con 96% de accuracy en dataset personalizado.",
      tags: ["TensorFlow", "Keras", "OpenCV", "Flask"],
      image: "/convolutional-neural-network-image-classification.jpg",
      github: "#",
      demo: "#",
    },
    {
      title: "API de NLP para Análisis de Sentimientos",
      description: "API REST para análisis de sentimientos en múltiples idiomas usando transformers pre-entrenados.",
      tags: ["Transformers", "FastAPI", "BERT", "AWS"],
      image: "/natural-language-processing-sentiment-analysis.jpg",
      github: "#",
      demo: "#",
    },
    {
      title: "Pipeline de ETL Automatizado",
      description: "Sistema de extracción, transformación y carga de datos con orquestación y monitoreo.",
      tags: ["Airflow", "Python", "Spark", "S3"],
      image: "/data-pipeline-etl-workflow-automation.jpg",
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Proyectos Destacados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Soluciones de IA y ML aplicadas a problemas reales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-border bg-card overflow-hidden group hover:border-primary/50 transition-colors"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden aspect-video bg-muted">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className={`w-full h-full group-hover:scale-105 transition-transform duration-300 ${
                        project.imageContain ? "object-contain p-4" : "object-cover"
                      }`}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
