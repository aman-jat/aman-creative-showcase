import { Button, FilledButton, IconButton, OutlinedButton } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import { Download, Github, Linkedin, Youtube, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import profileImage from "@/assets/profile.jpg";
import resume from "@/assets/resume/resume.pdf";

const Hero = () => {
  const { theme, setTheme } = useTheme();

  const downloadAndViewResume = () => {
    window.open(resume, "_blank");
  };

  const Image = ({ size = "" }) => {
    let className = "w-64 h-64";

    if (size === "small") {
      className = "w-44 h-44";
    }
    return (
      <div className="flex justify-center lg:justify-end blur-fade-in-delay-2">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-50 animate-pulse" />
          <div
            className={`relative ${className} md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow`}
          >
            <img src={profileImage} alt="Aman Jat" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="min-h-screen flex items-center justify-center  px-4 py-8 md:py-20 relative overflow-hidden">
      {/* Background removed, moved to Index.tsx */}

      <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
        <div className="relative w-[1.2rem] h-[1.2rem]">
          <Sun className="absolute inset-0 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute inset-0 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </div>
        <Switch
          checked={theme === "dark"}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8 flex flex-col items-center md:items-start text-center md:text-start">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl text-muted-foreground blur-fade-in font-display ">
                Hi, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold blur-fade-in-delay-1">
                <span className="gradient-text font-display">Aman Jat</span>
              </h1>
              <p className="text-xl md:text-3xl lg:text-3xl text-foreground/90 blur-fade-in-delay-2 font-display">
                Software Developer &{" "}
                <span className="gradient-secondary-text font-bold">Problem Solver</span>
              </p>
            </div>

            <span className="flex lg:hidden">
              <Image size="small" />
            </span>
            {/*  */}

            <p className="text-sm md:text-lg text-muted-foreground max-w-xl leading-relaxed blur-fade-in-delay-3">
              A passionate tech enthusiast with{" "}
              <span className="text-blue-400 font-semibold">5+ years</span> of hands-on experience
              crafting exceptional digital experiences. Specialized in{" "}
              <span className="text-purple-400 font-semibold">modern web technologies</span> , I've
              delivered <span className="text-blue-400 font-semibold">20+ real-world projects</span>{" "}
              across <span className="text-blue-400 font-semibold">3 organizations</span>.<br></br>
              From understanding client goals to writing clean modern code, I love building
              solutions that are optimized, user-centered, and ready to scale.
            </p>

            <div className="hidden md:flex blur-fade-in-delay-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/30">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-foreground/90">
                  Available for freelance work
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 blur-fade-in-delay-3">
              <FilledButton
                onClick={downloadAndViewResume}
                icon={<Download className="mr-2 h-5 w-5 " />}
              >
                Download Resume
              </FilledButton>
              <OutlinedButton>View Projects</OutlinedButton>
            </div>

            <div className="flex gap-4 blur-fade-in-delay-3">
              <IconButton href="https://github.com/aman-jat">
                <Github className="h-6 w-6" />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/aman-jat/">
                <Linkedin className="h-6 w-6" />
              </IconButton>
              <IconButton href="https://www.youtube.com/@amanjat7">
                <Youtube className="h-6 w-6" />
              </IconButton>
            </div>
          </div>

          {/* Profile Image */}
          <span className="hidden lg:flex">
            <Image />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
