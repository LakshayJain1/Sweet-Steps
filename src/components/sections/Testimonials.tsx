import { Star } from "lucide-react";

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
    <section className="bg-[#FFF0F3] section-padding">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">From Our Happy Parents</h2>
          <p className="text-xl text-brown-secondary">Real stories from real families in Jaipur.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {reviews.map((review) => (
            <div key={review.id} className="glass-card p-8 flex flex-col justify-between group">
              <div>
                <div className="flex text-gold-accent mb-6 space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current drop-shadow-[0_0_8px_rgba(232,168,56,0.3)]" />
                  ))}
                </div>
                <p className="text-xl text-brown-secondary leading-relaxed italic mb-10 relative">
                  <span className="absolute -top-4 -left-2 text-4xl text-gold-accent/20 font-serif">"</span>
                  {review.text}
                </p>
              </div>
              <div className="border-t border-white/30 pt-6">
                <p className="font-heading font-bold text-xl text-brown-primary">{review.parent}</p>
                <div className="text-sm text-brown-secondary mt-1 flex flex-col sm:flex-row sm:gap-2 opacity-80">
                  <span>{review.babyAge}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{review.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
