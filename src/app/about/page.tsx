import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sweet Steps Baby Impressions Jaipur",
  description: "Learn about the passionate team behind Sweet Steps and why parents in Jaipur trust us with their newborn keepsakes.",
};

export default function AboutPage() {
  return (
    <>
      <StickyHeader />
      <div className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-6 max-w-[1000px]">
          
          <div className="text-center mb-16">
            <h1 className="mb-6">Our Story</h1>
            <p className="text-xl text-brown-secondary prose mx-auto">
              We believe some moments are too precious to exist only in photos. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div className="relative aspect-square md:aspect-[4/5] w-full max-w-sm mx-auto">
              {/* Soft circular crop with warm border as requested */}
              <div className="absolute inset-0 rounded-full border-[3px] border-pink-accent overflow-hidden shadow-lg p-1">
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

            <div className="space-y-6">
              <h2>Meet The Artist</h2>
              <p className="text-lg text-brown-secondary leading-relaxed">
                Sweet Steps started with a simple realization: babies grow up faster than we expect. 
                What begins as tiny wrinkles and perfect fingernails quickly turns into running feet. 
                I wanted to give parents in Jaipur a way to freeze those first few months into something tangible.
              </p>
              <p className="text-lg text-brown-secondary leading-relaxed">
                Using 100% skin-safe, non-toxic molding materials, we capture the deepest, 
                most intricate details of your baby's hands and feet, casting them into timeless 3D art.
              </p>
            </div>
          </div>

          {/* Trust Section */}
          <div className="bg-[#FFF0F3] rounded-card p-10 md:p-16 text-center shadow-sm">
            <h2 className="mb-10 text-3xl">Why Families Trust Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center text-3xl shadow-sm">
                  🛡️
                </div>
                <h4 className="font-bold text-xl">100% Baby Safe</h4>
                <p className="text-brown-secondary">Non-toxic, hypoallergenic casting materials.</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center text-3xl shadow-sm">
                  🏠
                </div>
                <h4 className="font-bold text-xl">At-Home Service</h4>
                <p className="text-brown-secondary">We travel to you anywhere in Jaipur.</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center text-3xl shadow-sm">
                  ✨
                </div>
                <h4 className="font-bold text-xl">Premium Quality</h4>
                <p className="text-brown-secondary">Golden finish with high-quality framing glass.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
