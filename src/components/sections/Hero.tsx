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
      {/* Dynamic background with gradient orbs */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/20 blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/20 blur-[120px] animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-button text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-gradient font-semibold tracking-wide">Tiny Impressions. Timeless Memories.</span>
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1]">
              Hold on to their{" "}
              <span className="text-gradient">tiniest</span>{" "}
              <span className="relative">
                moments
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 4 150 4 198 10" stroke="url(#brandGradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="brandGradient" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="hsl(230 70% 45%)"/>
                      <stop offset="50%" stopColor="hsl(265 60% 50%)"/>
                      <stop offset="100%" stopColor="hsl(320 50% 55%)"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transform your baby's tiny hands and feet into beautiful, handcrafted 3D keepsakes that you'll treasure for generations.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={onOpenBooking}
                className="shadow-glow hover:shadow-glow animate-gradient"
              >
                Book a Session
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl" 
                className="glass-button"
              >
                View Our Frames
              </Button>
            </div>

            {/* Trust badges with glass effect */}
            <div className="flex items-center gap-8 justify-center lg:justify-start pt-8">
              <div className="glass-card-hover rounded-2xl px-6 py-4 text-center min-w-[100px]">
                <p className="text-3xl font-heading font-bold text-gradient">500+</p>
                <p className="text-xs text-muted-foreground mt-1">Happy Families</p>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
              <div className="glass-card-hover rounded-2xl px-6 py-4 text-center min-w-[100px]">
                <p className="text-3xl font-heading font-bold text-gradient">100%</p>
                <p className="text-xs text-muted-foreground mt-1">Safe Materials</p>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
              <div className="glass-card-hover rounded-2xl px-6 py-4 text-center min-w-[100px]">
                <p className="text-3xl font-heading font-bold text-gradient">5.0</p>
                <p className="text-xs text-muted-foreground mt-1">Google Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image with modern frame */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Decorative ring */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
            
            {/* Main image container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-float">
              {/* Decorative frame corners */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-primary rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary rounded-br-3xl" />
              </div>
              
              <img
                src={heroImage}
                alt="Beautiful 3D baby hand and feet impression in a premium white frame"
                className="w-full h-auto object-cover"
                width={600}
                height={600}
                fetchPriority="high"
                decoding="async"
              />
              
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 via-transparent to-transparent" />
            </div>

            {/* Floating badge with glass effect */}
            <div className="absolute -bottom-4 -left-4 glass-card-hover rounded-2xl p-5 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-warm flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Premium Quality</p>
                  <p className="text-xs text-muted-foreground">Handcrafted with love</p>
                </div>
              </div>
            </div>

            {/* Additional floating element */}
            <div className="absolute -top-2 -right-2 glass rounded-2xl p-4 animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎁</span>
                <span className="text-sm font-medium text-foreground">Free Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
