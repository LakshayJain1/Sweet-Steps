import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/sections/ProductGrid";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Frame Styles | Sweet Steps Keepsakes",
  description: "Browse our signature collection of 3D baby casting frames. Explore pricing, styles, and options for customizing your keepsake.",
};

export default function ProductsPage() {
  return (
    <>
      <StickyHeader />
      <div className="pt-32 pb-12 bg-background min-h-[50vh]">
        <div className="container mx-auto px-6 text-center max-w-[800px] mb-8 relative z-10">
          <h1 className="mb-6">Frame Pricing & Styles</h1>
          <p className="text-xl text-brown-secondary leading-relaxed">
            Every Sweet Steps creation is made to order, capturing your baby's unique tiny features forever.
            Choose a frame style that matches your home and family size.
          </p>
        </div>
      </div>
      <ProductGrid />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
