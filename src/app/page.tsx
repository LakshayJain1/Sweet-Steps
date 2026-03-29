import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import ProductGrid from "@/components/sections/ProductGrid";
import Testimonials from "@/components/sections/Testimonials";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ExitPopup from "@/components/common/ExitPopup";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sweet Steps | Baby Hand Casting Jaipur | Newborn 3D Impressions",
  description: "Preserve your baby's tiny hands and feet forever with Jaipur's most premium 3D casting service. Handcrafted frames, 100% safe, at-home sessions available in Jaipur.",
  keywords: ["baby hand casting Jaipur", "3D impressions Jaipur", "newborn casting Jaipur", "baby keepsakes Jaipur"],
  alternates: {
    canonical: "https://sweetsteps.in",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sweet Steps",
    "description": "Premium baby hand and feet 3D casting service in Jaipur, Rajasthan.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "telephone": "+91-8302419714",
    "url": "https://sweetsteps.in",
    "image": "https://sweetsteps.in/logo.webp",
    "priceRange": "$$",
    "areaServed": "Jaipur",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.9124,
      "longitude": 75.7873
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Baby Hand and Feet Casting",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sweet Steps"
    },
    "areaServed": {
      "@type": "City",
      "name": "Jaipur"
    },
    "description": "Professional 3D casting service for newborns and families in Jaipur."
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom 3D Baby Impression Frames",
    "description": "Handcrafted 3D impression frames - customizable for families. Contact for pricing.",
    "image": "https://sweetsteps.in/product-1.jpg",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://sweetsteps.in/products"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "214"
    }
  }
];

import VideoTestimonials from "@/components/sections/VideoTestimonials";
import ChatWidget from "@/components/common/ChatWidget";

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
      <BeforeAfterSection />
      <ProductGrid />
      <Testimonials />
      <VideoTestimonials />
      <Footer />
      <ChatWidget />
      <ExitPopup />
    </>
  );
}
