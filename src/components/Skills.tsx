import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiRedux,
  SiPhp,
  SiLaravel,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      gradient: "from-primary to-accent",
      skills: [
        { name: "React", level: 95, icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", level: 95, icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", level: 90, icon: SiTypescript, color: "#3178C6" },
        { name: "Next.js", level: 85, icon: SiNextdotjs, color: "#000000" },
        { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Redux", level: 85, icon: SiRedux, color: "#764ABC" },
      ],
    },
    {
      category: "Backend Development",
      gradient: "from-secondary to-primary",
      skills: [
        { name: "Node.js", level: 85, icon: SiNodedotjs, color: "#339933" },
        { name: "Express", level: 80, icon: SiExpress, color: "#000000" },
        { name: "PHP", level: 75, icon: SiPhp, color: "#777BB4" },
        { name: "Laravel", level: 70, icon: SiLaravel, color: "#FF2D20" },
      ],
    },
    {
      category: "Database & Tools",
      gradient: "from-accent to-secondary",
      skills: [
        { name: "MongoDB", level: 80, icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", level: 75, icon: SiPostgresql, color: "#4169E1" },
        { name: "Git", level: 90, icon: SiGit, color: "#F05032" },
        { name: "Docker", level: 70, icon: SiDocker, color: "#2496ED" },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-display">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="glass rounded-3xl p-6 md:p-10">
              <h3
                className={`text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent font-display`}
              >
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-card/50 group-hover:scale-110 transition-spring">
                          <skill.icon
                            className="h-6 w-6"
                            style={{ color: skill.color }}
                          />
                        </div>
                        <span className="font-semibold text-foreground font-display">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground font-display">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out group-hover:shadow-glow-primary`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
