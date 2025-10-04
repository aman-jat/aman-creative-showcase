import { Github, Linkedin, Youtube, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:bg-primary/10 transition-smooth hover:shadow-glow-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:bg-primary/10 transition-smooth hover:shadow-glow-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:bg-primary/10 transition-smooth hover:shadow-glow-primary"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="mailto:aman.jat@example.com"
              className="p-3 glass rounded-xl hover:bg-primary/10 transition-smooth hover:shadow-glow-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-center text-muted-foreground">
            <p className="flex items-center gap-2 text-sm font-display">
              © {currentYear} Aman Jat. Built with{" "}
              <Heart className="h-4 w-4 text-red-500 fill-red-500" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
