import { Button } from "./ui/button";
import { Heart } from "lucide-react";

const BookSession = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-10 md:p-16 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-foreground/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-foreground mb-4">
              Create Your Keepsake Today
            </h2>

            <p className="text-primary-foreground/80 mb-8 text-lg">
              Don't let these precious moments slip away. Book a session and let us help you preserve your baby's tiniest impressions forever.
            </p>

            <Button
              variant="secondary"
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Book a Session Now
            </Button>

            <p className="mt-6 text-sm text-primary-foreground/70">
              Sessions available in-studio and at home • Jaipur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSession;
