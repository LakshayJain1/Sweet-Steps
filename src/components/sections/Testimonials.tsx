import { Star } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

const reviews = [
  {
    id: 1,
    text: "The details they captured were unbelievable. I can still see Ria's tiny fingerprints in the cast. Thank you for this beautiful memory!",
    parent: "Aditi S.",
    city: "Vaishali Nagar",
    babyAge: "Baby Ria, 3 months",
  },
  {
    id: 2,
    text: "So professional and gentle with our newborn. The whole process at home was stress-free and the final frame is our living room centerpiece.",
    parent: "Mayank K.",
    city: "Mansarovar",
    babyAge: "Baby Aarav, 1 month",
  },
  {
    id: 3,
    text: "I was worried about my naughty toddler sitting still, but the team managed it playfully. The gold finish looks absolutely premium.",
    parent: "Sneha R.",
    city: "Malviya Nagar",
    babyAge: "Baby Vihaan, 1.5 years",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-neutral-100 section-padding">
      <div className="container mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="mb-4">From Our Happy Parents</h2>
            <p className="text-xl text-neutral-500">Real stories from real families in Jaipur.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {reviews.map((review, idx) => (
            <ScrollReveal key={review.id} delay={idx + 1}>
              <div className="glass-card p-8 flex flex-col justify-between group bg-white/70">
                <div>
                  <div className="flex text-neutral-900 mb-6 space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl text-neutral-500 leading-relaxed italic mb-10 relative">
                    <span className="absolute -top-4 -left-2 text-4xl text-neutral-300 font-serif">"</span>
                    {review.text}
                  </p>
                </div>
                <div className="border-t border-neutral-200 pt-6">
                  <p className="font-heading font-bold text-xl text-neutral-900">{review.parent}</p>
                  <div className="text-sm text-neutral-500 mt-1 flex flex-col sm:flex-row sm:gap-2 opacity-80">
                    <span>{review.babyAge}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{review.city}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
