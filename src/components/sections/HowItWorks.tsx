import { Camera, Palette, Sparkles, Truck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Camera,
    title: "Capture",
    desc: "Share your favorite photos and impressions with us through our easy booking process"
  },
  {
    step: "02",
    icon: Palette,
    title: "Craft",
    desc: "Our skilled artisans design your unique frame with meticulous attention to detail"
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Customize",
    desc: "Add personal touches, names, dates, and special details to make it truly yours"
  },
  {
    step: "04",
    icon: Truck,
    title: "Deliver",
    desc: "Beautifully packaged in a premium gift box and shipped safely to your door"
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />

      <div className="container px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button text-sm font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-muted-foreground">Simple Process</span>
          </span>
          <h2 className="font-heading font-bold text-foreground mb-5" style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.2
          }}>
            How We Bring Your{" "}
            <span className="text-gradient">Memories</span> to Life
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            From booking to delivery, we make the entire process seamless and enjoyable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connection line - desktop only */}
          <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-1 rounded-full bg-gradient-to-r from-primary/20 via-primary/40 to-accent/20" />

          {steps.map((item, i) => (
            <div key={i} className="text-center relative group">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-3xl glass-card-hover flex items-center justify-center relative transition-all duration-500 group-hover:scale-105 group-hover:shadow-glow">
                  {/* Step number badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl gradient-warm flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {item.step}
                  </div>
                  
                  <item.icon size={36} className="text-primary" />
                </div>
              </div>
              
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
