import { GraduationCap, Users, Briefcase, Code } from "lucide-react";

const Journey = () => {
  const journeySteps = [
    {
      icon: GraduationCap,
      year: "Phase 1",
      title: "IIT Preparation",
      description:
        "Started my journey with rigorous preparation for IIT, building a strong foundation in problem-solving and analytical thinking.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Users,
      year: "Phase 2",
      title: "Teaching Computers",
      description:
        "Began teaching computer science, sharing knowledge and helping others understand complex technical concepts.",
      gradient: "from-accent to-secondary",
    },
    {
      icon: GraduationCap,
      year: "Phase 3",
      title: "BCA Journey",
      description:
        "Pursued Bachelor of Computer Applications, deepening my understanding of software development and modern technologies.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Code,
      year: "Phase 4",
      title: "React & React Native",
      description:
        "Discovered my passion for React and React Native, mastering the art of building performant, scalable web and mobile applications.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Briefcase,
      year: "Phase 5",
      title: "Service Companies",
      description:
        "Joined service-based companies, working on diverse projects and learning invaluable lessons from real-world challenges across multiple domains.",
      gradient: "from-secondary to-accent",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
        <div className="absolute inset-0 bg-gradient-primary opacity-5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-display">
            My Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From IIT aspirant to React specialist—a path of continuous learning and growth
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12 md:space-y-24">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="glass rounded-2xl p-6 md:p-8 hover:shadow-glow-secondary transition-smooth group">
                    <div
                      className={`flex ${
                        index % 2 === 0 ? "md:justify-end justify-start" : "justify-start"
                      } mb-4`}
                    >
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-br ${step.gradient} group-hover:scale-110 transition-spring`}
                      >
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="text-sm text-primary font-semibold mb-2 font-display">
                      {step.year}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 font-display">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center Circle - Only visible on md+ */}
                <div className="hidden md:flex absolute left-1/2 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full -translate-x-1/2 border-4 border-background shadow-glow-primary" />

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
