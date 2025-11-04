import { Download } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about building scalable systems and exploring new technologies
            </p>
            <div className="pt-4">
              <a
                href="/Sunit Poddar_Senior Backend Engineer.pdf"
                download="Sunit Poddar_Senior Backend Engineer.pdf"
                className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </div>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-foreground mb-3">Background</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm Sunit, a Senior Software Engineer with a passion for building scalable backend systems,
                  search architecture, and modern web technologies. Currently exploring the exciting world of
                  frontend development with Next.js and React.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-foreground mb-3">Focus Areas</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Backend Systems & APIs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Search Architecture & ElasticSearch</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Modern Frontend with Next.js</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>System Design & Scalability</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-foreground mb-3">Current Learning</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Diving deep into modern frontend frameworks, particularly Next.js 15 with its latest features
                  like the app router, server components, and advanced optimization techniques.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-foreground mb-3">Philosophy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code and building systems that scale.
                  Always eager to learn new technologies and share knowledge with the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}