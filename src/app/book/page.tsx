import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/sections/BookingForm";
import ProductGrid from "@/components/sections/ProductGrid";
import type { Metadata } from "next";
import ScrollReveal from "@/components/common/ScrollReveal";

export const metadata: Metadata = {
  title: "Book a Session | Sweet Steps Jaipur",
  description: "Schedule your at-home baby 3D casting session in Jaipur today. Fill out our simple booking form.",
  keywords: [
    "book baby casting session Jaipur",
    "schedule 3D hand impression Jaipur",
    "book at home casting Jaipur",
    "baby casting appointment Jaipur",
    "custom casting booking Jaipur",
    "hand impression session price Jaipur",
    "book sibling casting Jaipur",
    "couple casting booking Jaipur"
  ],
};

export default function BookPage() {
  return (
    <>
      <StickyHeader />
      <div className="pt-32 pb-20 bg-neutral-50 min-h-[90vh]">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-[1200px]">
          
          {/* Left Text Column */}
          <div className="space-y-8 lg:sticky lg:top-32">
            <ScrollReveal delay={0.1}>
              <h1 className="leading-tight text-neutral-900">Let's create something beautiful.</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-neutral-500 leading-relaxed">
                Booking your session is simple. We come straight to your home in Jaipur so you and your baby can stay comfortable. 
                The casting process takes just minutes, and your final frame arrives in 10-15 days.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-4 p-8 bg-neutral-100 rounded-card border border-neutral-200 glass-panel">
                <h3 className="font-bold flex items-center justify-between text-neutral-900">
                  <span>What to Expect</span>
                  <span className="text-2xl">✨</span>
                </h3>
                <ul className="text-neutral-500 text-lg space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-900 font-bold">✓</span>
                    At-home session in just 45 minutes
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-900 font-bold">✓</span>
                    100% baby-safe organic materials
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-900 font-bold">✓</span>
                    Your custom frame delivered in 10-15 days
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neutral-900 font-bold">✓</span>
                    Free delivery across Jaipur
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Form Column */}
          <ScrollReveal delay={0.2} className="w-full relative z-10">
            <BookingForm />
          </ScrollReveal>

        </div>
        <ProductGrid />
      </div>
      <Footer />
    </>
  );
}
