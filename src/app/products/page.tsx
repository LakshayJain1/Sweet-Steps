import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/sections/ProductGrid";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import type { Metadata } from "next";
import ScrollReveal from "@/components/common/ScrollReveal";

export const metadata: Metadata = {
  title: "Pricing & Frame Styles | Sweet Steps Keepsakes",
  description: "Browse our signature collection of 3D baby casting frames. Explore pricing, styles, and options for customizing your keepsake.",
};

export default function ProductsPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Sweet Steps Premium 3D Casting Frames",
    "description": "Handcrafted luxury 3D hand and feet impression frames for newborns and families in Jaipur.",
    "brand": {
      "@type": "Brand",
      "name": "Sweet Steps"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "0",
      "highPrice": "15000",
      "offerCount": "12",
      "availability": "https://schema.org/InStock",
      "url": "https://sweetsteps.vercel.app/products"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <StickyHeader />
      <div className="pt-32 pb-12 bg-neutral-50 min-h-[50vh]">
        <ScrollReveal>
          <div className="container mx-auto px-6 text-center max-w-[800px] mb-8 relative z-10">
            <h1 className="mb-6 text-neutral-900">Frame Pricing &amp; Styles</h1>
            <p className="text-xl text-neutral-500 leading-relaxed">
              Every Sweet Steps creation is made to order, capturing your baby's unique tiny features forever.
              Choose a frame style that matches your home and family size.
            </p>
          </div>
        </ScrollReveal>
      </div>
      <ProductGrid />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
