"use client";
import { ExternalLink, Github, Play, Calendar, Users, Star, TrendingUp, Database, Search, Server, Globe, Eye } from "lucide-react";
import { useState } from "react";
import PDFModal from "../../components/pdfModal";

export default function Projects() {
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

  const featuredProjects = [
    {
      title: "Search Infrastructure Overhaul",
      problem: "The existing job search system struggled to deliver relevant results at scale. Increasing data volume and complex queries led to slow response times and poor user discovery.",
      solution: [
        "Designed and implemented an Elasticsearch architecture with index aliasing, custom analyzers, and relevance tuning.",
        "Optimized indexing by flattening document structures and rewriting mappings and queries.",
        "Introduced auto-scaling policies and observability with Grafana for performance insights."
      ],
      role: "Led the end-to-end technical design and implementation, collaborating with product and data science teams. Mentored backend engineers and drove architectural decisions for relevance and cost efficiency.",
      technologies: ["Elasticsearch", "Go", "Python", "Kubernetes", "Redis", "Grafana"],
      impact: "Reduced memory footprint from 192 GB → 12 GB, improved search p95 latency, and boosted conversion metrics by 15%, while cutting infrastructure costs by 50%.",
      timeline: "6-month initiative",
      type: "Infrastructure",
      icon: Search
    },
    {
      title: "Microservices Migration Initiative",
      problem: "A monolithic architecture had become a bottleneck for team scalability, deployments, and system resilience.",
      solution: [
        "Defined clear service boundaries and APIs for critical components.",
        "Introduced gRPC-based inter-service communication and service mesh for observability and reliability.",
        "Built deployment automation pipelines and standardized logging/metrics across services."
      ],
      role: "Served as technical lead, driving architecture strategy, mentoring teams during migration, and setting best practices for service ownership and CI/CD adoption.",
      technologies: ["Go", "Python", "Java", "gRPC", "Kubernetes", "GitLab CI", "Datadog"],
      impact: "Increased deployment frequency by 3×, improved system uptime and fault isolation, and enhanced team autonomy and delivery velocity.",
      timeline: "8-month initiative",
      type: "Architecture",
      icon: Server
    }
  ];

  const otherProjects = [
    {
    title: "Unified On-Call Monitoring Dashboard",
    problem: "During on-call shifts, engineers had to switch between multiple dashboards (services, Redis, Elasticsearch, etc.) to triage incidents. This fragmentation made it difficult to identify the root cause quickly, increasing mean time to mitigation.",
    solution: [
        "Audited all critical business APIs and categorized them into P0, P1, and P2 buckets for prioritization.",
        "Set up unified monitoring contexts to correlate metrics across services and infrastructure layers.",
        "Built a centralized Datadog dashboard displaying pod health, Redis memory and CPU usage, Elasticsearch latency, and API response percentiles (p75, p90, p95, p99)."
    ],
    impact: "Significantly reduced incident triage time and improved on-call efficiency by enabling rapid root-cause identification.",
    timeline: "2 weeks (during on-call rotation)",
    type: "Monitoring & Observability",
    technologies: ["Datadog", "Redis", "Elasticsearch", "Kubernetes", "APM"]
    },
    {
      title: "Performance Optimization Initiative",
      problem: "A key user-facing API experienced latency spikes under production load, impacting user experience and downstream services.",
      solution: [
        "Profiled API endpoints and optimized query performance.",
        "Introduced Redis-based caching and pagination strategies.",
        "Tuned PostgreSQL indices and connection pooling."
      ],
      role: "Acted as performance engineer and optimization lead, conducting load tests and driving production rollout improvements.",
      technologies: ["PostgreSQL", "Redis", "Go", "Grafana", "load testing frameworks"],
      impact: "Reduced median latency by 65%, improved reliability, and lowered infrastructure utilization during peak load.",
      timeline: "3-month initiative",
      type: "Performance"
    },
    {
      title: "Developer Experience Platform",
      problem: "Developers faced inconsistent tooling and slow deployment pipelines, leading to productivity losses.",
      solution: [
        "Designed an internal developer platform with integrated CI/CD, service templates, and observability.",
        "Centralized logging, metrics, and deployment dashboards.",
        "Standardized build and release workflows across teams."
      ],
      role: "Led a cross-functional platform team to build and evangelize tooling adoption. Defined DevEx standards and trained teams.",
      technologies: ["Kubernetes", "GitLab CI", "Grafana", "custom internal tooling"],
      impact: "Reduced average deployment time by 40% and improved developer satisfaction and onboarding experience.",
      timeline: "4-month initiative",
      type: "Platform"
    }
  ];

  const stats = [
    { label: "Project Types", value: "Infrastructure", icon: Server },
    { label: "Architecture Focus", value: "Distributed", icon: Globe },
    { label: "System Design", value: "Backend", icon: Database },
    { label: "Leadership", value: "Technical", icon: Calendar }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <header className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text">projects/</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of production systems and technical initiatives.
              From search infrastructure to distributed architectures.
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
              🌟 Featured Projects
            </h2>

            <div className="space-y-8">
              {featuredProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <div key={index} className="glass rounded-lg p-8 hover:bg-accent/10 transition-all duration-300">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon className="h-8 w-8 text-primary" />
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                            <div className="flex items-center space-x-3 mt-1">
                              <span className="px-3 py-1 text-xs code-font bg-primary/20 text-primary rounded-full">
                                {project.type}
                              </span>
                              <span className="px-3 py-1 text-xs code-font bg-emerald-400/20 text-emerald-400 rounded-full">
                                {project.timeline}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Problem & Context */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Problem & Context:</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
                      </div>

                      {/* Technical Solution */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground">Technical Solution:</h4>
                        <ul className="space-y-2">
                          {project.solution.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Role & Responsibilities */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Role & Responsibilities:</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.role}</p>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground">Technologies Used:</h4>
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

                      {/* Impact & Results */}
                      <div className="space-y-2 bg-emerald-400/5 border border-emerald-400/20 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-emerald-400">Impact & Results:</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.impact}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Additional Projects */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center">
              <Users className="h-6 w-6 text-primary mr-3" />
              ⚙️ Additional Projects
            </h2>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <div key={index} className="glass rounded-lg p-6 hover:bg-accent/20 transition-all duration-300">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 text-xs code-font bg-primary/20 text-primary rounded-full">
                          {project.type}
                        </span>
                        <span className="px-2 py-1 text-xs code-font bg-emerald-400/20 text-emerald-400 rounded-full">
                          {project.timeline}
                        </span>
                      </div>
                    </div>

                    {/* Problem & Context */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-foreground">Problem & Context:</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>

                    {/* Technical Solution */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-foreground">Technical Solution:</h4>
                      <ul className="space-y-1">
                        {project.solution.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Role */}
                    <div className="space-y-1">
                      <h4 className="text-xs font-semibold text-foreground">Role:</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{project.role}</p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs code-font bg-accent/50 border border-border rounded-md text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Impact */}
                    <div className="space-y-1 bg-emerald-400/5 border border-emerald-400/20 rounded-lg p-3">
                      <h4 className="text-xs font-semibold text-emerald-400">Impact:</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{project.impact}</p>
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
              I'm always excited to work on challenging backend systems, search infrastructure, and
              distributed architectures. Let's build something together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Let's Connect
              </a>
              <button
                onClick={() => setIsPDFModalOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground glass border border-border rounded-lg hover:bg-accent/50 transition-all duration-300 hover:scale-105"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Resume
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* PDF Modal */}
      <PDFModal
        isOpen={isPDFModalOpen}
        onClose={() => setIsPDFModalOpen(false)}
        pdfUrl="/Sunit Poddar_Senior Backend Engineer.pdf"
        title="Sunit Poddar - Senior Backend Engineer Resume"
      />
    </div>
  );
}