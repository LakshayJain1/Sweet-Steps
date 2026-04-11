"use client";

import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function BeforeAfterSection() {
  return (
    <section className="section-padding bg-transparent">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl leading-tight">
                From <span className="text-neutral-400 italic">intimate details</span> to timeless treasures.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-neutral-500 leading-relaxed max-w-lg">
                Photos capture the look, but our 3D impressions capture the feeling. 
                The exact scale, every unique line, and the preciousness of your most 
                cherished bonds, frozen forever in a beautiful handcrafted frame.
              </p>
            </ScrollReveal>
            
            <div className="space-y-6 pt-4">
              <ScrollReveal delay={0.3}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                    ✨
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-neutral-900">Unmatched Detail</h4>
                    <p className="text-neutral-500">Captures fingerprints and skin texture with 100% accuracy for all ages.</p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                    🏠
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-neutral-900">Home Comfort</h4>
                    <p className="text-neutral-500">We visit you, ensuring a comfortable experience in your own environment.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <ScrollReveal delay={0.15} y={20}>
              <BeforeAfterSlider
                beforeImage="/Assets/Frame_01.png" 
                afterImage="/Assets/Frame_01_01.png"
                beforeLabel="Initial Impression"
                afterLabel="Final Masterpiece"
                caption="Slide to see how we transform a fleeting moment into a lasting masterpiece."
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
