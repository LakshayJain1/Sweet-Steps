import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import GalleryView from "@/components/sections/GalleryView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inspiration Gallery | Sweet Steps Jaipur",
  description: "Browse through our collection of premium 3D hand and feet impressions. See the intricate details and emotional bonds captured in our Jaipur studio.",
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
  "/product-3.jpg",
  "/og-image.jpg",
  "/hero-frame.jpg",
];

export default function GalleryPage() {
  return (
    <>
      <StickyHeader />
      <div className="pt-32 pb-20 bg-neutral-50 min-h-screen">
        <GalleryView images={images} />
      </div>
      <Footer />
    </>
  );
}
