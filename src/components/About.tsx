import { Code2, Briefcase, Users, Lightbulb } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Code2,
      value: "5+",
      label: "Years Experience",
      gradient: "from-primary to-accent",
    },
    {
      icon: Briefcase,
      value: "20+",
      label: "Projects",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Users,
      value: "3",
      label: "Organizations",
      gradient: "from-accent to-secondary",
    },
    {
      icon: Lightbulb,
      value: "∞",
      label: "Problems Solved",
      gradient: "from-primary to-secondary",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-display">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer who loves to craft exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 text-center hover:border-primary/40 hover:scale-105 transition-smooth group"
            >
              <div className="flex justify-center mb-4">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${stat.gradient} group-hover:scale-110 transition-spring`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div
                className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent font-display`}
              >
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold gradient-text font-display">
            Tech Enthusiast & React Specialist
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-base md:text-lg">
              I help businesses turn their ideas into reliable, high-quality digital products. With
              experience delivering 20+ real-world projects across multiple industries, I focus on
              building applications that are fast, stable, and easy for users to love.
            </p>

            <p className="text-base md:text-lg">
              My work is centered around clear communication, strong ownership, and on-time
              delivery. Whether it’s a startup MVP, an internal business tool, or a large-scale
              platform, I make sure the final product is polished, scalable, and ready for real
              users.
            </p>

            <p className="text-base md:text-lg">
              Clients and teams trust me because I don’t just write code — I take responsibility for
              the outcome, quality, and long-term success of the product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
