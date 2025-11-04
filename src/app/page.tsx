import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Hi, I'm{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Sunit Poddar
            </span>{" "}
            👋
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            Senior Software Engineer specializing in backend systems, search architecture,
            and exploring modern frontend technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}