import { Github, Linkedin, Youtube, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <a
              href="https://github.com/aman-jat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:bg-primary/10 transition-all ease-in-out "
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/amanjat/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:bg-primary/10 transition-all ease-in-out"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/@amanjat7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:bg-primary/10 transition-all ease-in-out"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="mailto:amanjat261@example.com"
              className="p-3 glass rounded-xl hover:bg-primary/10 transition-all ease-in-out"
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
