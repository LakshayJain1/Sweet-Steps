import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import GalleryView from "@/components/sections/GalleryView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inspiration Gallery | Sweet Steps Jaipur",
  description: "Browse through our collection of premium 3D hand and feet impressions. See the intricate details and emotional bonds captured in our Jaipur studio.",
  keywords: [
    "3D impression gallery Jaipur",
    "baby hand casting frames Jaipur",
    "sibling casting designs Jaipur",
    "couple hand impression frames Jaipur",
    "grandparent blessing frames Jaipur",
    "custom keepsake frames Jaipur",
    "hand and feet impression photos Jaipur",
    "casting frame styles Jaipur",
    "premium 3D art frames Jaipur"
  ],
};

import { products } from "@/data/products";

const images = products.map(p => p.mainImg);

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
