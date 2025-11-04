export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sunit Poddar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}