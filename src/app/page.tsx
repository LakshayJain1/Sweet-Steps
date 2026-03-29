import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import ProductGrid from "@/components/sections/ProductGrid";
import Testimonials from "@/components/sections/Testimonials";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ExitPopup from "@/components/common/ExitPopup";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Sweet Steps | Jaipur's #1 Baby Impression Keepsake Frames",
  description: "Capture the tiny moments forever with premium 3D baby hand and feet impressions. Newborn safe, handcrafted with love in Jaipur. Book now!",
  alternates: {
    canonical: "https://sweetsteps.in",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sweet Steps",
    description: "Premium handcrafted 3D impression frames of your baby's hands and feet. Based in Jaipur, India.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN"
    },
    telephone: "+91-8302419714",
    url: "https://sweetsteps.in",
    image: "https://sweetsteps.in/hero-frame.jpg",
    priceRange: "₹3,999 - ₹12,499"
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Classic Two Impression Frame",
    description: "Perfect for one hand and one foot impression of your newborn.",
    image: "https://sweetsteps.in/placeholder.co/800x800",
    offers: {
      "@type": "Offer",
      price: "3999.00",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: "https://sweetsteps.in/products"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "214"
    }
  }
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StickyHeader />
      <Hero />
      <HowItWorks />
      <ProductGrid />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
      <ExitPopup />
    </>
  );
}
