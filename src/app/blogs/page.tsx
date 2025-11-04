import { BookOpen, Edit3, Calendar, Users, Star, TrendingUp, Clock, FileText } from "lucide-react";

export default function Blogs() {
  const upcomingTopics = [
    {
      title: "Building Search at Scale",
      description: "Deep dive into Elasticsearch architecture, relevance tuning, and performance optimization",
      status: "Planned",
      tags: ["Elasticsearch", "Performance", "Architecture"],
      estimatedRead: "8 min read",
      icon: FileText
    },
    {
      title: "Microservices Migration Lessons",
      description: "Real-world experiences from monolith to microservices: what worked, what didn't",
      status: "Planned",
      tags: ["Microservices", "Architecture", "DevOps"],
      estimatedRead: "12 min read",
      icon: Edit3
    },
    {
      title: "Go vs Python for Backend",
      description: "When to choose Go over Python for backend services: performance, scalability, and team considerations",
      status: "Draft",
      tags: ["Go", "Python", "Backend", "Performance"],
      estimatedRead: "6 min read",
      icon: BookOpen
    }
  ];

  const categories = [
    { name: "System Design", count: "3 planned", color: "bg-blue-400/20 text-blue-400" },
    { name: "Backend Engineering", count: "2 planned", color: "bg-emerald-400/20 text-emerald-400" },
    { name: "Performance", count: "2 planned", color: "bg-purple-400/20 text-purple-400" },
    { name: "DevOps", count: "1 planned", color: "bg-amber-400/20 text-amber-400" }
  ];

  const stats = [
    { label: "Articles Planned", value: "8+", icon: BookOpen },
    { label: "Topics", value: "4", icon: Star },
    { label: "Status", value: "Coming Soon", icon: Clock },
    { label: "Focus", value: "Technical Deep Dives", icon: TrendingUp }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <header className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text">blogs/</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Technical writing on backend systems, performance optimization, and engineering practices.
              Sharing insights from building production systems at scale.
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
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground">Technical Blog Coming Soon</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm preparing a series of technical articles covering backend engineering, system design,
                and performance optimization. Each post will include real-world examples and practical insights
                from building production systems.
              </p>
            </div>
          </section>

          {/* Categories */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center">
              <Star className="h-6 w-6 text-primary mr-3" />
              📝 Topics & Categories
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="glass rounded-lg p-4 hover:bg-accent/20 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
                    <span className={`px-3 py-1 text-xs code-font rounded-full ${category.color}`}>
                      {category.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Articles */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground flex items-center">
              <Edit3 className="h-6 w-6 text-primary mr-3" />
              🚧 Upcoming Articles
            </h2>

            <div className="space-y-6">
              {upcomingTopics.map((article, index) => {
                const Icon = article.icon;
                return (
                  <div key={index} className="glass rounded-lg p-6 hover:bg-accent/20 transition-all duration-300">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon className="h-6 w-6 text-primary" />
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{article.title}</h3>
                            <div className="flex items-center space-x-3 mt-1">
                              <span className="px-3 py-1 text-xs code-font bg-amber-400/20 text-amber-400 rounded-full">
                                {article.status}
                              </span>
                              <span className="text-xs text-muted-foreground flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {article.estimatedRead}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">{article.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs code-font bg-accent/50 border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="glass rounded-lg p-8 text-center">
            <h2 className="text-xl font-bold text-foreground mb-3">Get Notified</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Be the first to know when new articles are published. I'll also share behind-the-scenes
              insights from building production systems and lessons learned from technical challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Stay Updated
              </a>
              <a
                href="https://linkedin.com/in/sunit-poddar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground glass border border-border rounded-lg hover:bg-accent/50 transition-all duration-300 hover:scale-105"
              >
                <Users className="h-4 w-4 mr-2" />
                Follow on LinkedIn
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}