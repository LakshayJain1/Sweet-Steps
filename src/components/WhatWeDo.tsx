import { Baby, Heart, Frame, Shield } from "lucide-react";

const features = [
  {
    icon: Baby,
    title: "3D Baby Impressions",
    description: "Capture your baby's tiny hands and feet in stunning 3D detail.",
  },
  {
    icon: Heart,
    title: "Family Keepsakes",
    description: "Create beautiful couple and family impression frames.",
  },
  {
    icon: Frame,
    title: "Premium Frames",
    description: "Choose from our collection of elegant frame styles and finishes.",
  },
  {
    icon: Shield,
    title: "Safe Materials",
    description: "100% skin-friendly, non-toxic materials safe for newborns.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
            What We Create
          </h2>
          <p className="text-muted-foreground">
            We specialize in capturing life's precious moments in beautiful, lasting keepsakes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
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
