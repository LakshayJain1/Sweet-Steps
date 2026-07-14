import { Star, MessageCircle } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/common/ScrollReveal";
import { googleReviews, googleBusinessUrl, googleBusinessName, googleTotalReviews, googleAverageRating } from "@/data/google-reviews";

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "…";
}

export default function Testimonials() {
  return (
    <section className="bg-neutral-100 section-padding">
      <div className="container mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/5 border border-neutral-200 text-neutral-700 text-sm font-medium mb-6">
              <span className="font-bold text-neutral-900">{googleAverageRating}</span>
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span>Google • {googleTotalReviews}+ reviews</span>
            </div>
            <h2 className="mb-4">From Our Happy Families</h2>
            <p className="text-xl text-neutral-500 prose mx-auto">Real stories from real families in Jaipur who trusted us with their precious memories.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {googleReviews.map((review, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="glass-card p-8 flex flex-col h-[420px] md:h-[440px] bg-white/70 overflow-hidden">
                <div className="flex text-neutral-900 mb-6 space-x-1 flex-shrink-0">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-base text-neutral-600 leading-relaxed italic flex-1 overflow-hidden flex-shrink-0">
                  <span className="absolute -top-3 -left-1 text-3xl text-neutral-300 font-serif">"</span>
                  <span className="relative block display:-webkit-box -webkit-line-clamp-7 -webkit-box-orient:vertical overflow-hidden">
                    {truncate(review.text, 280)}
                  </span>
                </p>
                <div className="border-t border-neutral-200 pt-6 flex-shrink-0 mt-auto">
                  <p className="font-heading font-bold text-lg text-neutral-900">{review.author}</p>
                  <div className="text-sm text-neutral-500 mt-1 opacity-80">
                    <time dateTime={review.date}>
                      {new Date(review.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                    </time>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <Link
              href={googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-ghost group"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-bold text-base">
                Read all {googleTotalReviews}+ reviews on Google →
              </span>
            </Link>
            <p className="mt-4 text-sm text-neutral-500">
              Verified reviews from <span className="font-medium">{googleBusinessName}</span> Family
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}