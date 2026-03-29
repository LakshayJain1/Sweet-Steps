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
  "/products/two-imp/616561075_17884532361431293_6748449571348436754_n.jpg",
  "/products/two-imp/624027004_18080704790020495_1901701617521697128_n.jpg",
  "/products/two-imp/624872407_18079786994584308_3771641984599392725_n.jpg",
  "/products/four-imp/623791658_18082922257965629_7135710008465237176_n.jpg",
  "/products/four-imp/625014262_18037330799541096_3734195408163251281_n.jpg",
  "/products/elder-blessing/565952625_17863936869481205_1499331118673531301_n.webp",
  "/products/elder-blessing/625008219_18092323357985877_3288329523995516286_n.jpg",
  "/product-1.jpg",
  "/product-2.jpg",
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
