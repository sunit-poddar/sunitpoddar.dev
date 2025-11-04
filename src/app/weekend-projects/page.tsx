import { Code2, ExternalLink, Github, Calendar, Users, Star, TrendingUp, Coffee, Monitor } from "lucide-react";

export default function WeekendProjects() {
  const upcomingProjects = [
    {
      title: "Resume Builder",
      description: "A modern, ATS-friendly resume builder with real-time preview and multiple export formats",
      status: "In Development",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PDF Generation"],
      features: ["Real-time preview", "ATS optimization", "Multiple templates", "Export to PDF/Word"],
      icon: Monitor
    },
    {
      title: "Boudi's Kitchen Analytics",
      description: "A web application for monitoring menu sales, customer preferences, and kitchen operations analytics",
      status: "Planning",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      features: ["Sales tracking", "Menu analytics", "Customer insights", "Inventory management"],
      icon: Coffee
    }
  ];

  const stats = [
    { label: "Projects Planned", value: "2", icon: Code2 },
    { label: "Technologies", value: "8+", icon: Star },
    { label: "Status", value: "Building", icon: TrendingUp },
    { label: "Focus", value: "User Experience", icon: Users }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <header className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text">weekend-projects/</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Personal projects built during weekends and free time.
              Exploring new technologies and solving everyday problems.
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

          {/* Coming Soon Notice */}
          <section className="glass rounded-lg p-8 text-center">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Code2 className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground">Currently Building</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm actively working on some exciting personal projects in my spare time.
                These projects focus on solving real-world problems and exploring new technologies.
              </p>
            </div>
          </section>

          {/* Upcoming Projects */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground flex items-center">
              <Star className="h-6 w-6 text-primary mr-3" />
              🚧 In Development
            </h2>

            <div className="grid lg:grid-cols-2 gap-6">
              {upcomingProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <div key={index} className="glass rounded-lg p-6 hover:bg-accent/20 transition-all duration-300">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon className="h-8 w-8 text-primary" />
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                            <span className="px-3 py-1 text-xs code-font bg-amber-400/20 text-amber-400 rounded-full">
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                      {/* Key Features */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Tech Stack:</h4>
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
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Call to Action */}
          <section className="glass rounded-lg p-8 text-center">
            <h2 className="text-xl font-bold text-foreground mb-3">Follow the Progress</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These projects will be open-sourced once they reach a stable state.
              Follow along for updates and behind-the-scenes development insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/sunit-poddar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                <Github className="h-4 w-4 mr-2" />
                Follow on GitHub
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground glass border border-border rounded-lg hover:bg-accent/50 transition-all duration-300 hover:scale-105"
              >
                Get Updates
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}