import { Baby, Heart, Frame, Shield } from "lucide-react";

const features = [
  {
    icon: Baby,
    title: "3D Baby Impressions",
    description: "Capture your baby's tiny hands and feet in stunning 3D detail with our precision casting technique.",
  },
  {
    icon: Heart,
    title: "Family Keepsakes",
    description: "Create beautiful couple and family impression frames that celebrate your bonds.",
  },
  {
    icon: Frame,
    title: "Premium Frames",
    description: "Choose from our collection of elegant frame styles and luxurious finishes.",
  },
  {
    icon: Shield,
    title: "Safe Materials",
    description: "100% skin-friendly, non-toxic materials safe for newborns and all ages.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-muted-foreground">Our Expertise</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-5">
            What We <span className="text-gradient">Create</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We specialize in capturing life's precious moments in beautiful, lasting keepsakes that tell your family's unique story.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card-hover rounded-2xl p-8 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl gradient-warm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
