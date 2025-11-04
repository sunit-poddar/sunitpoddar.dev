import { Mail, Github, Linkedin, Twitter, Download, FileText } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "sunitpoddar@gmail.com",
      href: "mailto:sunitpoddar@gmail.com",
      description: "Feel free to reach out for collaborations or discussions",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sunitpoddar",
      href: "https://github.com/sunitpoddar",
      description: "Check out my open source projects and contributions",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sunitpoddar",
      href: "https://linkedin.com/in/sunitpoddar",
      description: "Let's connect and build our professional network",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@sunitpoddar",
      href: "https://twitter.com/sunitpoddar",
      description: "Follow for updates on tech and development insights",
    },
    {
      icon: FileText,
      label: "Resume",
      value: "Download PDF",
      href: "/Sunit Poddar_Senior Backend Engineer.pdf",
      description: "Download my resume for detailed experience and qualifications",
      isDownload: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborations, or just chat about technology
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  target={method.isDownload ? "_self" : "_blank"}
                  rel={method.isDownload ? undefined : "noopener noreferrer"}
                  download={method.isDownload ? "Sunit Poddar_Senior Backend Engineer.pdf" : undefined}
                  className="group bg-muted/50 rounded-lg p-6 border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-200"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{method.label}</h3>
                    </div>

                    <p className="text-primary font-medium">{method.value}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="text-center py-8">
            <div className="bg-muted/30 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold text-foreground mb-3">Let's Build Something Amazing</h2>
              <p className="text-muted-foreground mb-4">
                Whether you have a project in mind, want to discuss technology, or are looking for a
                passionate engineer to join your team, I'd love to hear from you.
              </p>
              <a
                href="mailto:sunitpoddar@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}