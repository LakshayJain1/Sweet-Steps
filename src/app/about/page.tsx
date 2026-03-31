import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "@/components/common/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Sweet Steps Baby Impressions Jaipur",
  description: "Learn about the passionate team behind Sweet Steps and why parents in Jaipur trust us with their newborn keepsakes.",
};

export default function AboutPage() {
  return (
    <>
      <StickyHeader />
      <div className="pt-32 pb-20 bg-neutral-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-[1000px]">
          
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="mb-6 text-neutral-900">Our Story</h1>
              <p className="text-xl text-neutral-500 prose mx-auto">
                We believe some moments are too precious to exist only in photos. 
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <ScrollReveal delay={0.1} y={20}>
              <div className="relative aspect-square md:aspect-[4/5] w-full max-w-sm mx-auto">
                <div className="absolute inset-0 rounded-full border-[3px] border-neutral-300 overflow-hidden shadow-lg p-1">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                    <Image 
                      src="/founder.png" 
                      alt="Founder of Sweet Steps"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={0.15}>
                <h2 className="text-neutral-900">Meet The Artist</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p className="text-lg text-neutral-500 leading-relaxed">
                  Sweet Steps started with a simple realization: babies grow up faster than we expect. 
                  What begins as tiny wrinkles and perfect fingernails quickly turns into running feet. 
                  I wanted to give parents in Jaipur a way to freeze those first few months into something tangible.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.35}>
                <p className="text-lg text-neutral-500 leading-relaxed">
                  Using 100% skin-safe, non-toxic molding materials, we capture the deepest, 
                  most intricate details of your baby's hands and feet, casting them into timeless 3D art.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Trust Section */}
          <ScrollReveal>
            <div className="bg-neutral-100 rounded-card p-10 md:p-16 text-center">
              <h2 className="mb-10 text-3xl text-neutral-900">Why Families Trust Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  { icon: "🛡️", title: "100% Baby Safe", desc: "Non-toxic, hypoallergenic casting materials." },
                  { icon: "🏠", title: "At-Home Service", desc: "We travel to you anywhere in Jaipur." },
                  { icon: "✨", title: "Premium Quality", desc: "Golden finish with high-quality framing glass." },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.12}>
                    <div className="space-y-3">
                      <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center text-3xl shadow-glass-soft border border-neutral-200">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-xl text-neutral-900">{item.title}</h4>
                      <p className="text-neutral-500">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
      <Footer />
    </>
  );
}
