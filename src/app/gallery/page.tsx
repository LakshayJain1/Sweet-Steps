import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import GalleryView from "@/components/sections/GalleryView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inspiration Gallery | Sweet Steps Jaipur",
  description: "Browse through our collection of premium 3D hand and feet impressions. See the intricate details and emotional bonds captured in our Jaipur studio.",
};

import { products } from "@/data/products";

const images = [
  "/Assets/Frame_01.png",
  "/Assets/Frame_02.png",
  "/Assets/Frame_03.png",
  "/Assets/Frame_04.png",
  "/Assets/Frame_05.png",
  "/Assets/Frame_06.png",
  "/Assets/Frame_07.png",
  "/Assets/Frame_08.png",
  "/Assets/Frame_09.png",
  "/Assets/Frame_10.png",
  "/Assets/Frame_11.png",
  "/Assets/Frame_01_01.png",
  "/Assets/Frame_02_01.png",
  "/Assets/Frame_03_01.png",
  "/Assets/Frame_04_01.png",
  "/Assets/Frame_05_01.png",
  "/Assets/Single Hand.png",
];

export default function GalleryPage() {
  return (
    <>
      <StickyHeader />
      <div className="pt-32 pb-20 bg-neutral-50 min-h-screen">
        <GalleryView images={images} designs={products} />
      </div>
      <Footer />
    </>
  );
}
