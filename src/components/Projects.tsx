import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Built a full-stack e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-primary to-accent",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Developed a comprehensive analytics dashboard for social media management with real-time data visualization and automated reporting.",
      tech: ["React", "TypeScript", "Redux", "Chart.js"],
      gradient: "from-secondary to-primary",
    },
    {
      title: "Mobile Banking App",
      description:
        "Created a secure mobile banking application using React Native with biometric authentication, transaction history, and bill payments.",
      tech: ["React Native", "Firebase", "Redux"],
      gradient: "from-accent to-secondary",
    },
    {
      title: "Learning Management System",
      description:
        "Built an LMS platform for online education with video streaming, assignments, quizzes, and progress tracking for thousands of students.",
      tech: ["React", "Next.js", "PostgreSQL"],
      gradient: "from-primary to-secondary",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-display">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my work from 20+ real-world projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:shadow-glow-primary transition-smooth group"
            >
              <div
                className={`w-full h-48 mb-6 rounded-xl bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-smooth`}
              />

              <h3 className="text-2xl font-bold mb-3 font-display group-hover:gradient-text transition-smooth">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm rounded-lg bg-card border border-border font-display"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="glass hover:bg-primary/10 transition-smooth border-primary/30"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="glass hover:bg-primary/10 transition-smooth border-primary/30"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6 font-display">
            And 16+ more projects across various domains...
          </p>
          <Button
            size="lg"
            variant="outline"
            className="glass hover:bg-primary/10 transition-smooth border-primary/30 font-display"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
