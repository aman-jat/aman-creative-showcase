import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const cards = [
    {
      icon: Mail,
      title: "Email",
      info: "aman.jat@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+91 6260 58 2059",
    },
    {
      icon: MapPin,
      title: "Location",
      info: "India",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-display">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 text-center hover:border-primary/40  transition-smooth group"
            >
              <div className="flex justify-center mb-4 transition-smooth hover:scale-105">
                <div className="transition-smooth p-4 rounded-xl bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-spring">
                  <card.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="font-semibold mb-2 font-display">{card.title}</h3>
              <p className="text-muted-foreground text-sm">{card.info}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow-primary transition-smooth font-display"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
