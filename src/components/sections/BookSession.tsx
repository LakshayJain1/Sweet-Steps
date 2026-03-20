import { Button } from "@/components/ui/button";
import { Heart, Gift, Sparkles } from "lucide-react";

interface BookSessionProps {
  onOpenBooking?: () => void;
}

const BookSession = ({ onOpenBooking }: BookSessionProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-float" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10">
        <div className="relative overflow-hidden rounded-[2rem] glass-card-hover p-12 md:p-20 text-center">
          {/* Decorative elements */}
          <div className="absolute top-6 left-6 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
          <div className="absolute bottom-6 right-6 w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-xl" />
          
          {/* Sparkle decorations */}
          <div className="absolute top-10 right-10 animate-float">
            <Sparkles className="w-8 h-8 text-primary/40" />
          </div>
          <div className="absolute bottom-10 left-10 animate-float" style={{ animationDelay: "0.5s" }}>
            <Sparkles className="w-6 h-6 text-accent/40" />
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="w-20 h-20 rounded-2xl gradient-warm flex items-center justify-center mx-auto mb-8 shadow-glow animate-pulse-glow">
              <Heart className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Create Your Keepsake{" "}
              <span className="text-gradient">Today</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Don't let these precious moments slip away. Book a session and let us help you preserve your baby's tiniest impressions forever.
            </p>

            <Button
              variant="hero"
              size="xl"
              onClick={onOpenBooking}
              className="shadow-glow hover:shadow-glow animate-gradient"
            >
              <Gift className="w-5 h-5" />
              Book a Session Now
            </Button>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                In-studio sessions
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Home visits available
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/70" />
                Jaipur location
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSession;
