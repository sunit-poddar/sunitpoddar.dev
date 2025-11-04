import { ExternalLink, Github, Play, Calendar, Users, Star, TrendingUp, Database, Search, Server, Globe } from "lucide-react";

export default function Projects() {
  const featuredProjects = [
    {
      title: "ElasticSearch Infrastructure Platform",
      description: "Enterprise-grade search infrastructure serving 50M+ queries daily with sub-100ms response times. Built comprehensive monitoring, auto-scaling, and multi-tenant isolation.",
      technologies: ["ElasticSearch", "Node.js", "Redis", "Docker", "Kubernetes", "Grafana"],
      metrics: { queries: "50M+/day", latency: "<100ms", uptime: "99.95%" },
      status: "Production",
      type: "Infrastructure",
      icon: Search,
      highlights: [
        "Built distributed search cluster handling 50M+ daily queries",
        "Implemented auto-scaling reducing infrastructure costs by 40%",
        "Designed multi-tenant architecture supporting 100+ clients"
      ]
    },
    {
      title: "Microservices Architecture & API Gateway",
      description: "Scalable microservices ecosystem with intelligent routing, circuit breakers, and distributed tracing. Supports 10M+ daily API requests across 15+ services.",
      technologies: ["Node.js", "PostgreSQL", "Redis", "gRPC", "Istio", "Jaeger"],
      metrics: { requests: "10M+/day", services: "15+", latency: "~50ms" },
      status: "Production",
      type: "Backend",
      icon: Server,
      highlights: [
        "Architected 15+ microservices with gRPC communication",
        "Implemented circuit breakers reducing cascade failures by 90%",
        "Built comprehensive observability with distributed tracing"
      ]
    },
    {
      title: "Real-time Data Processing Pipeline",
      description: "High-throughput data pipeline processing 1M+ events per minute with real-time analytics and ML feature extraction for recommendation systems.",
      technologies: ["Apache Kafka", "Redis Streams", "TimescaleDB", "Python", "Kubernetes"],
      metrics: { throughput: "1M+/min", latency: "~5ms", accuracy: "99.2%" },
      status: "Production",
      type: "Data",
      icon: TrendingUp,
      highlights: [
        "Built streaming pipeline processing 1M+ events/minute",
        "Implemented real-time ML feature extraction",
        "Designed time-series analytics with 99.2% accuracy"
      ]
    }
  ];

  const otherProjects = [
    {
      title: "Multi-tenant SaaS Backend",
      description: "Secure multi-tenant platform with row-level security, automated backups, and compliance monitoring.",
      technologies: ["PostgreSQL", "Node.js", "Docker"],
      type: "SaaS"
    },
    {
      title: "Distributed Cache Layer",
      description: "Redis-based caching solution with intelligent invalidation and 95% hit ratio optimization.",
      technologies: ["Redis", "Node.js", "Kubernetes"],
      type: "Performance"
    },
    {
      title: "API Rate Limiting & Security",
      description: "Advanced rate limiting with anomaly detection and DDoS protection for high-traffic APIs.",
      technologies: ["Redis", "Nginx", "Prometheus"],
      type: "Security"
    }
  ];

  const stats = [
    { label: "Production Systems", value: "Enterprise", icon: Server },
    { label: "Architecture Focus", value: "Scalable", icon: Globe },
    { label: "System Design", value: "Expert", icon: Database },
    { label: "Years Experience", value: "8+", icon: Calendar }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <header className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text">projects/</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of production-grade systems serving millions of users worldwide.
              From search infrastructures to microservices architectures.
            </p>
          </header>

          {/* Stats Grid */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="glass rounded-lg p-6 text-center hover:bg-accent/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </section>

          {/* Featured Projects */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground flex items-center">
              <Star className="h-6 w-6 text-primary mr-3" />
              Featured Projects
            </h2>

            <div className="space-y-8">
              {featuredProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <div key={index} className="glass rounded-lg p-8 hover:bg-accent/10 transition-all duration-300">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Main Content */}
                      <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <Icon className="h-8 w-8 text-primary" />
                            <div>
                              <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                              <div className="flex items-center space-x-3 mt-1">
                                <span className="px-3 py-1 text-xs code-font bg-primary/20 text-primary rounded-full">
                                  {project.type}
                                </span>
                                <span className={`px-3 py-1 text-xs code-font rounded-full ${
                                  project.status === 'Production'
                                    ? 'bg-emerald-400/20 text-emerald-400'
                                    : 'bg-amber-400/20 text-amber-400'
                                }`}>
                                  {project.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start space-x-3 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs code-font bg-accent/50 border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Metrics Sidebar */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-foreground">Performance Metrics</h4>
                        <div className="space-y-3">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center text-sm">
                              <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                              <span className="code-font text-primary font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Other Projects */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center">
              <Users className="h-6 w-6 text-primary mr-3" />
              Additional Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div key={index} className="glass rounded-lg p-6 hover:bg-accent/20 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                      <span className="px-2 py-1 text-xs code-font bg-accent/50 text-muted-foreground rounded-full">
                        {project.type}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs code-font bg-secondary/50 text-muted-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="glass rounded-lg p-8 text-center">
            <h2 className="text-xl font-bold text-foreground mb-3">Interested in Collaboration?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to work on challenging backend systems, search infrastructures, and
              scalable architectures. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Let's Connect
              </a>
              <a
                href="/Sunit Poddar_Senior Backend Engineer.pdf"
                download="Sunit Poddar_Senior Backend Engineer.pdf"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground glass border border-border rounded-lg hover:bg-accent/50 transition-all duration-300 hover:scale-105"
              >
                View Resume
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}