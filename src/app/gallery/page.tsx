import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import GalleryView from "@/components/sections/GalleryView";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inspiration Gallery",
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
  alternates: {
    canonical: "https://sweetsteps.online/gallery",
  },
};

import { products } from "@/data/products";

const images = products.map(p => p.mainImg);

const SITE_URL = "https://sweetsteps.online";

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sweet Steps 3D Keepsake Frame Collection",
  description:
    "Handcrafted 3D hand and feet impression frames and sculptures for babies, siblings, couples, parents and elders.",
  numberOfItems: products.length,
  itemListElement: products.map((p, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: p.name,
      image: `${SITE_URL}${p.mainImg}`,
      url: `${SITE_URL}/gallery`,
      brand: {
        "@type": "Brand",
        name: "Sweet Steps",
      },
    },
  })),
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <BreadcrumbJsonLd trail={[{ name: "Home", href: "/" }, { name: "Gallery", href: "/gallery" }]} />
      <StickyHeader />
      <div className="pt-32 pb-20 bg-neutral-50 min-h-screen">
        <GalleryView images={images} designs={products} />
      </div>
      <Footer />
    </>
  );
}
