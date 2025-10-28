import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Sistema de Recomendación ML",
      description:
        "Motor de recomendaciones basado en filtrado colaborativo y deep learning para e-commerce. Incrementó conversiones en 35%.",
      tags: ["Python", "TensorFlow", "FastAPI", "Redis"],
      image: "/machine-learning-recommendation-system-dashboard.jpg",
      github: "#",
      demo: "#",
    },
    {
      title: "Análisis Predictivo de Series Temporales",
      description:
        "Modelo LSTM para predicción de demanda con 92% de precisión. Implementado en producción con MLflow.",
      tags: ["PyTorch", "LSTM", "MLflow", "Docker"],
      image: "/time-series-prediction-graph-neural-network.jpg",
      github: "#",
      demo: "#",
    },
    {
      title: "Plataforma de Análisis en Tiempo Real",
      description: "Dashboard interactivo con procesamiento de datos en streaming y visualizaciones dinámicas.",
      tags: ["Next.js", "Python", "Kafka", "PostgreSQL"],
      image: "/real-time-analytics-dashboard-data-visualization.jpg",
      github: "#",
      demo: "#",
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
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
