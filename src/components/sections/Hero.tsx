import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-frame.jpg";

interface HeroProps {
  onOpenBooking?: () => void;
}

const Hero = ({ onOpenBooking }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />

      {/* Decorative elements - subtle neutral orbs */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-muted blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-20 w-32 h-32 rounded-full bg-muted blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Tiny impressions. Timeless memories.
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground leading-tight">
              Hold on to their{" "}
              <span className="text-gradient">tiniest moments</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Transform your baby's tiny hands and feet into beautiful, handcrafted 3D keepsakes that you'll treasure forever.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="hero" size="xl" onClick={onOpenBooking}>
                Book a Session
              </Button>
              <Button variant="hero-outline" size="xl">
                View Our Frames
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-6">
              <div className="text-center">
                <p className="text-2xl font-heading font-semibold text-foreground">500+</p>
                <p className="text-xs text-muted-foreground">Happy Families</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl font-heading font-semibold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground">Safe Materials</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl font-heading font-semibold text-foreground">5★</p>
                <p className="text-xs text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Beautiful 3D baby hand and feet impression in a premium white frame"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card p-4 animate-float">
              <p className="text-sm font-medium text-foreground">Premium Quality</p>
              <p className="text-xs text-muted-foreground">Handcrafted with love</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
