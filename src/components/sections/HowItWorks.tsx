import { Calendar, Hand, Wrench, Gift } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book Your Session",
    description: "Choose a date and package that works for you.",
    time: "5 minutes",
  },
  {
    icon: Hand,
    title: "We Take Impressions",
    description: "Gentle and safe process done in-studio or at home.",
    time: "20 minutes",
  },
  {
    icon: Wrench,
    title: "Crafting Your Frame",
    description: "Our team carefully creates the 3D impressions.",
    time: "7-10 days",
  },
  {
    icon: Gift,
    title: "Delivery",
    description: "Your keepsake is framed and delivered with care.",
    time: "3-5 days",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            From booking to delivery, we make the entire process simple and enjoyable.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20" style={{ transform: "translateY(-50%)" }} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold shadow-soft z-10">
                  {index + 1}
                </div>

                <div className="bg-card rounded-2xl p-6 pt-10 shadow-soft hover:shadow-card transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {step.description}
                  </p>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {step.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
