import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/search/Sweet+Steps+Impressions+3D+Hand+Foot+Casting+Jaipur";

const testimonials = [
  {
    name: "Piyush Bansal",
    relation: "Google Review",
    quote: "Absolutely loved the 3D impressions! The baby feet impression came out so detailed and lifelike. We also did a couple impression and the hand casting was beautiful. Highly recommend for preserving special memories with 3D casting!",
    rating: 5,
  },
  {
    name: "Akanksha Modi",
    relation: "Google Review",
    quote: "It was amazing. Must connect with Sweet Steps Impression for your child footprint and handprints.",
    rating: 5,
  },
  {
    name: "Karan Kaushik",
    relation: "Google Review",
    quote: "Extremely impressive foot casting and hand casting. The impressions were fantastic!",
    rating: 5,
  },
  {
    name: "Vikas Sharma",
    relation: "Google Review",
    quote: "Extremely happy with work.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
            What Our Families Say
          </h2>
          <p className="text-muted-foreground">
            Join hundreds of happy families who've trusted us with their precious memories.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-card">
            {/* Quote mark */}
            <div className="absolute top-6 left-8 text-7xl font-heading text-primary/10">
              "
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-center text-foreground font-medium leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <p className="font-heading font-semibold text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].relation}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current
                      ? "w-6 gradient-primary"
                      : "bg-muted-foreground/30"
                      }`}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* View on Google link */}
            <div className="flex justify-center mt-6">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                View all reviews on Google
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
