"use client";
import ThemeToggle from "./themeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Code2, User, Briefcase, Mail, Github, Linkedin } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "~/", icon: Terminal, description: "home" },
    { href: "/projects", label: "work/", icon: Briefcase, description: "portfolio" },
  ];

  const socialLinks = [
    { href: "https://github.com/sunit-poddar", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/sunitpoddar", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:sunitpoddar@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Tech-focused Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <Code2 className="h-8 w-8 text-primary group-hover:text-violet-400 transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold gradient-text">Sunit Ranjan Poddar</div>
              <div className="text-xs code-font text-muted-foreground">Senior Backend Engineer</div>
            </div>
          </Link>

          {/* Modern Terminal-style Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-accent/50 ${
                    isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="code-font text-sm font-medium">{item.label}</span>

                  {/* Tooltip */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-accent rounded text-xs code-font opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {item.description}
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Social Links & Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Social Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? "_blank" : "_self"}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="p-2 text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200"
                    title={link.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center space-x-2 text-xs code-font text-muted-foreground">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span>online</span>
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation with Terminal Style */}
        <nav className="md:hidden pb-4 pt-2">
          <div className="glass rounded-lg p-3">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 ${
                      isActive
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="code-font text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}