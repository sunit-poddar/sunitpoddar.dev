import Link from "next/link";
import { Download, Terminal, Code2, ArrowRight, Mail, MessageSquare, FileText, BookOpen } from "lucide-react";

export default function Home() {
  const techStack = [
    "Node.js", "ElasticSearch", "PostgreSQL", "Redis", "Docker", "Kubernetes",
    "gRPC", "Next.js", "React", "TypeScript", "AWS", "Microservices"
  ];

  const collaborationTypes = [
    {
      title: "Senior Backend Roles",
      description: "Full-time positions focusing on scalable systems, search infrastructure, and team leadership",
      icon: Code2,
      keywords: ["Node.js", "Microservices", "ElasticSearch", "System Design"]
    },
    {
      title: "Technical Consulting",
      description: "Architecture reviews, performance optimization, and search infrastructure consulting",
      icon: MessageSquare,
      keywords: ["Architecture", "Performance", "Search", "Optimization"]
    },
    {
      title: "Mentorship & Speaking",
      description: "Engineering mentorship, technical talks, and knowledge sharing initiatives",
      icon: FileText,
      keywords: ["Mentorship", "Speaking", "Teaching", "Knowledge Sharing"]
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-4">
              {/* Terminal Greeting */}
              <div className="glass rounded-lg p-4 code-font text-xs">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-amber-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground text-xs">sunit@backend-systems ~ %</span>
                </div>
                <div className="space-y-1">
                  <div className="text-emerald-400">$ whoami</div>
                  <div className="text-muted-foreground">Sunit Ranjan Poddar - Backend Engineer</div>

                  <div className="text-emerald-400 mt-3">$ echo $SPECIALIZATION</div>
                  <div className="text-muted-foreground">Distributed Systems | Search Platforms | Scalable APIs</div>

                  <div className="text-emerald-400 mt-3">$ grep -r "stack" config</div>
                  <div className="text-muted-foreground">Go | Python | Kafka | Elasticsearch | PostgreSQL | Kubernetes</div>

                  <div className="text-emerald-400 mt-3">$ git status</div>
                  <div className="text-muted-foreground">On branch <span className="text-amber-400">main</span> — Ready for new opportunities</div>

                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-emerald-400">$</span>
                    <div className="w-1.5 h-4 bg-primary animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Main Introduction */}
              <div className="space-y-3">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-foreground">Hi, I'm </span>
                    <span className="gradient-text">Sunit</span>
                  </h1>

                  <p className="text-xl text-muted-foreground leading-relaxed">
                    A Senior Backend Engineer with <span className="text-primary font-semibold">8+ years</span> of experience
                    building high-scale distributed systems, search architectures, and robust APIs.
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

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/projects"
                    className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                  >
                    <Code2 className="h-5 w-5 mr-2" />
                    View Projects
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="/Sunit Poddar_Senior Backend Engineer.pdf"
                    download="Sunit Poddar_Senior Backend Engineer.pdf"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground glass border border-border rounded-lg hover:bg-accent/50 transition-all duration-300 hover:scale-105"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Resume
                  </a>
                </div>

              </div>
            </div>

            {/* Right Column - Current Focus & Status */}
            <div className="space-y-4">
              {/* Current Focus */}
              <div className="glass rounded-lg p-4">
                <h3 className="text-base font-semibold text-foreground mb-3 flex items-center">
                  <Terminal className="h-4 w-4 text-primary mr-2" />
                  Current Focus
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 animate-pulse flex-shrink-0"></div>
                    <div>
                      <div className="text-foreground font-medium">Search Architecture</div>
                      <div className="text-muted-foreground">ElasticSearch infrastructures</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 animate-pulse flex-shrink-0"></div>
                    <div>
                      <div className="text-foreground font-medium">Frontend Learning</div>
                      <div className="text-muted-foreground">Next.js 15 & React patterns</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 animate-pulse flex-shrink-0"></div>
                    <div>
                      <div className="text-foreground font-medium">Microservices</div>
                      <div className="text-muted-foreground">Distributed systems with K8s</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="glass rounded-lg p-3 border border-emerald-400/30">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse flex-shrink-0"></div>
                  <div>
                    <div className="text-xs font-medium text-foreground">Available for opportunities</div>
                    <div className="text-xs text-muted-foreground">Senior backend & tech lead roles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
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