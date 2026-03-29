import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impression Gallery | Sweet Steps Baby Keepsakes",
  description: "View our portfolio of beautiful 3D hand and feet impressions done in Jaipur.",
};

const images = [
  "/placeholder.co/800x800", "/placeholder.co/800x800", "/placeholder.co/800x800",
  "/placeholder.co/800x800", "/placeholder.co/800x800", "/placeholder.co/800x800",
  "/placeholder.co/800x800", "/placeholder.co/800x800", "/placeholder.co/800x800",
];

export default function GalleryPage() {
  return (
    <>
      <StickyHeader />
      <div className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <h1 className="mb-6">Our Work Gallery</h1>
            <p className="text-xl text-brown-secondary leading-relaxed">
              Every fold, every line, captured natively in 3D. Browse through keepsakes of happy families across Jaipur.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {images.map((src, i) => (
              <div key={i} className="relative aspect-square w-full rounded-image overflow-hidden shadow-sm group">
                <Image
                  src={src}
                  alt={`Sweet steps gallery image ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={i < 4 ? "eager" : "lazy"}
                  priority={i < 4}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
