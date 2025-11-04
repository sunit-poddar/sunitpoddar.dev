export default function Projects() {
  const projects = [
    {
      title: "Search Architecture System",
      description: "Scalable search infrastructure using ElasticSearch with advanced query optimization and real-time indexing.",
      technologies: ["ElasticSearch", "Node.js", "Redis", "Docker"],
      status: "In Progress",
    },
    {
      title: "Microservices Backend",
      description: "High-performance microservices architecture with API gateway, service discovery, and distributed tracing.",
      technologies: ["Node.js", "PostgreSQL", "Kubernetes", "gRPC"],
      status: "Planning",
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Real-time data processing and visualization platform for monitoring system metrics and user behavior.",
      technologies: ["Next.js", "WebSocket", "TimescaleDB", "Chart.js"],
      status: "Planning",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated selection of my backend systems and full-stack projects
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'In Progress'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center py-8">
            <div className="bg-muted/30 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold text-foreground mb-3">More Projects Coming Soon</h2>
              <p className="text-muted-foreground">
                I'm actively working on several exciting projects. Check back soon for updates,
                or feel free to reach out to discuss potential collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}