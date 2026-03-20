import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, ExternalLink, Quote } from "lucide-react";
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
    quote: "It was amazing. Must connect with Sweet Steps Impression for your child footprint and handprints. They did an excellent job with our baby's first impressions!",
    rating: 5,
  },
  {
    name: "Karan Kaushik",
    relation: "Google Review",
    quote: "Extremely impressive foot casting and hand casting. The impressions were fantastic! The quality exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Vikas Sharma",
    relation: "Google Review",
    quote: "Extremely happy with work. The team was professional and the final product was absolutely stunning. A treasured keepsake!",
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
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[100px] translate-x-1/2" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button text-sm font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-muted-foreground">Testimonials</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-5">
            What Our <span className="text-gradient">Families</span> Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of happy families who've trusted us with their precious memories.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative glass-card-hover rounded-3xl p-10 md:p-14">
            {/* Decorative quote icon */}
            <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <Quote className="w-10 h-10 text-primary/30" />
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-8 justify-center">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-primary text-primary animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-center text-foreground font-heading leading-relaxed mb-10">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <p className="font-heading text-lg font-semibold text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {testimonials[current].relation}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full glass-button flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              
              <div className="flex gap-2 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === current 
                        ? "w-10 gradient-warm" 
                        : "w-2 bg-muted-foreground/20 hover:bg-muted-foreground/40"
                    }`}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={next}
                className="w-12 h-12 rounded-full glass-button flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* View on Google link */}
          <div className="flex justify-center mt-8">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group"
            >
              View all reviews on Google
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
