import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
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
          <div className="glass rounded-2xl p-6 text-center hover:border-primary/40 hover:scale-105 transition-smooth group">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-spring">
                <Mail className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="font-semibold mb-2 font-display">Email</h3>
            <p className="text-muted-foreground text-sm">aman.jat@example.com</p>
          </div>

          <div className="glass rounded-2xl p-6 text-center hover:border-primary/40 hover:scale-105 transition-smooth group">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-secondary to-primary group-hover:scale-110 transition-spring">
                <Phone className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="font-semibold mb-2 font-display">Phone</h3>
            <p className="text-muted-foreground text-sm">+91 XXX XXX XXXX</p>
          </div>

          <div className="glass rounded-2xl p-6 text-center hover:border-primary/40 hover:scale-105 transition-smooth group">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-accent to-secondary group-hover:scale-110 transition-spring">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="font-semibold mb-2 font-display">Location</h3>
            <p className="text-muted-foreground text-sm">India</p>
          </div>
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
