import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Youtube } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl text-muted-foreground blur-fade-in font-display">
                Hi, I'm
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold blur-fade-in-delay-1">
                <span className="gradient-text font-display">Aman Jat</span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-foreground/90 blur-fade-in-delay-2 font-display">
                React Developer &{" "}
                <span className="gradient-secondary-text font-bold">
                  Problem Solver
                </span>
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed blur-fade-in-delay-3">
              With over 5 years of experience in React and JavaScript, I've
              crafted solutions for 20+ real-world projects across 3
              organizations. I'm a tech enthusiast who loves turning complex
              problems into elegant, scalable solutions.
            </p>

            <div className="flex flex-wrap gap-4 blur-fade-in-delay-3">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow-primary transition-smooth font-display"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass hover:bg-primary/10 transition-smooth border-primary/30 font-display"
              >
                View Projects
              </Button>
            </div>

            <div className="flex gap-4 blur-fade-in-delay-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover:bg-primary/10 transition-smooth hover:shadow-glow-primary"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover:bg-primary/10 transition-smooth hover:shadow-glow-primary"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover:bg-primary/10 transition-smooth hover:shadow-glow-primary"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end blur-fade-in-delay-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-50 animate-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img
                  src={profileImage}
                  alt="Aman Jat"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
