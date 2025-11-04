"use client";
import Link from "next/link";
import { Download, Terminal, Code2, ArrowRight, Mail, MessageSquare, FileText, BookOpen } from "lucide-react";

export default function Home() {
  const techStack = [
    "Go", "Python", "Node.JS", "Kafka", "gRPC", "Redis", "PostgreSQL", "BigQuery", "MongoDB", "Elasticsearch", "Docker", "Kubernetes",
    "Grafana", "Datadog", "GCP", "Microservices"
  ];

  const collaborationTypes = [
    {
      title: "Senior Backend Roles",
      description: "Full-time positions focusing on scalable systems, search infrastructure, and team leadership",
      icon: Code2,
      keywords: ["Go", "Python", "Microservices", "ElasticSearch", "System Design"]
    },
    {
      title: "Technical Consulting",
      description: "Architecture reviews, performance optimization, and search infrastructure consulting",
      icon: MessageSquare,
      keywords: ["Architecture", "Performance", "Search", "Optimization"]
    },
    {
      title: "Leadership & Management",
      description: "Engineering mentorship, technical talks, and knowledge sharing initiatives",
      icon: FileText,
      keywords: ["Mentorship", "Team leadership", "Cross-team collaborations"]
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Terminal with contact buttons */}
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* Terminal */}
            <div className="lg:col-span-2 glass rounded-lg p-5 code-font text-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                </div>
                <span className="text-muted-foreground text-sm">sunit@backend-systems ~ %</span>
              </div>
              <div className="space-y-1.5">
                <div className="text-emerald-400">$ whoami</div>
                <div className="text-muted-foreground">Sunit Ranjan Poddar - Backend Engineer</div>

                <div className="text-emerald-400 mt-4">$ echo $SPECIALIZATION</div>
                <div className="text-muted-foreground">Distributed Systems | Search Platforms | Scalable APIs</div>

                <div className="text-emerald-400 mt-4">$ grep -r "core_stack" .profile</div>
                <div className="text-muted-foreground">Go | Python | Kafka | Elasticsearch | Postgres | GCP | Kubernetes | Docker</div>

                <div className="text-emerald-400 mt-4">$ git status</div>
                <div className="text-muted-foreground">On branch <span className="text-amber-400">main</span> — Ready for new opportunities</div>

                <div className="flex items-center space-x-2 mt-3">
                  <span className="text-emerald-400">$</span>
                  <div className="w-2 h-5 bg-primary animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Contact & Download Actions */}
            <div className="space-y-4">
              <div className="glass rounded-lg p-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Quick Actions</h3>
                <div className="space-y-3">
                  <Link
                    href="/work"
                    className="group w-full inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                  >
                    <Code2 className="h-4 w-4 mr-2" />
                    My Work
                    <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="/Sunit Poddar_Senior Backend Engineer.pdf"
                    download="Sunit Poddar_Senior Backend Engineer.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
                    onClick={(e) => {
                      const button = e.currentTarget;
                      const originalText = button.innerHTML;
                      button.innerHTML = '<svg class="h-4 w-4 mr-2 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Downloading...';

                      setTimeout(() => {
                        button.innerHTML = originalText;
                      }, 2000);
                    }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </a>

                  <div className="flex gap-2">
                    <a
                      href="https://linkedin.com/in/sunit-poddar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-foreground glass border border-border rounded-lg hover:bg-accent/50 transition-all duration-300"
                    >
                      <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>

                    <a
                      href="mailto:ranjan.sunit@gmail.com"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-foreground glass border border-border rounded-lg hover:bg-accent/50 transition-all duration-300"
                    >
                      <Mail className="h-4 w-4 mr-1" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two-column layout below terminal */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Introduction */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Hi, I'm </span>
                  <span className="gradient-text">Sunit</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  A backend engineer who loves building distributed systems that scale gracefully. I've spent the last <span className="text-primary font-semibold">8+ years</span> crafting APIs, search architectures,
                  and high-performance pipelines that quietly power big things
                </p>

                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs code-font bg-accent/50 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column - Current Focus */}
            <div className="space-y-4">
              <div className="glass rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Terminal className="h-5 w-5 text-primary mr-2" />
                  Current Focus
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 animate-pulse flex-shrink-0"></div>
                    <div>
                      <div className="text-foreground font-medium">Applied AI</div>
                      <div className="text-muted-foreground">Understanding & integrating intelligent systems</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 animate-pulse flex-shrink-0"></div>
                    <div>
                      <div className="text-foreground font-medium">System Architecture</div>
                      <div className="text-muted-foreground">Scalable & resilient service design</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse flex-shrink-0"></div>
                    <div>
                      <div className="text-foreground font-medium">Distributed Systems</div>
                      <div className="text-muted-foreground">Microservices with K8s & cloud orchestration</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 animate-pulse flex-shrink-0"></div>
                    <div>
                      <div className="text-foreground font-medium">Developer Experience</div>
                      <div className="text-muted-foreground">Optimizing workflows & engineering velocity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center justify-center mb-6">
              <BookOpen className="h-6 w-6 text-primary mr-2" />
              Engineering Philosophy
            </h2>

            <div className="grid lg:grid-cols-3 gap-4">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Scalability First</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every system should be designed to handle 10x current load. I build with horizontal scaling,
                  caching strategies, and distributed architectures in mind from day one.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Data-Driven Decisions</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Metrics and monitoring are fundamental. I implement comprehensive observability to make
                  informed technical decisions and optimize system performance continuously.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Team Growth</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Knowledge sharing and mentorship drive innovation. I actively mentor junior engineers
                  and contribute to technical documentation and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Collaboration */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <header className="text-center space-y-3">
            <h2 className="text-2xl font-bold text-foreground">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Always excited to discuss challenging backend problems, search architectures,
              and opportunities to build scalable systems that impact millions of users.
            </p>
          </header>

          {/* Collaboration Types */}
          <div className="grid lg:grid-cols-3 gap-6">
            {collaborationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="glass rounded-lg p-6 hover:bg-accent/20 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">{type.title}</h3>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">{type.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {type.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="px-2 py-1 text-xs code-font bg-accent/50 border border-border rounded-md text-muted-foreground"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}