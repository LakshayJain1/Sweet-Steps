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
    "@id": "https://sweetsteps.vercel.app",
    "name": "Sweet Steps",
    "description": "Premium baby hand and feet 3D casting service in Jaipur, Rajasthan.",
    "url": "https://sweetsteps.vercel.app",
    "telephone": "+91-8302419714",
    "priceRange": "₹₹",
    "image": "https://sweetsteps.vercel.app/logo.webp",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302017",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8530,
      "longitude": 75.8242
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/sweetsteps.in",
      "https://www.facebook.com/sweetsteps.in"
      // Add your Google Business Profile URL here
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Baby Hand and Feet Casting",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sweet Steps",
      "url": "https://sweetsteps.vercel.app"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Jaipur"
      },
      {
        "@type": "City",
        "name": "Rajasthan"
      }
    ],
    "description": "Professional 3D casting service for newborns and families in Jaipur. 100% baby safe materials."
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom 3D Baby Impression Frames",
    "description": "Handcrafted 3D impression frames - customizable for families. Capture every tiny wrinkle and detail.",
    "image": "https://sweetsteps.vercel.app/product-1.jpg",
    "brand": {
      "@type": "Brand",
      "name": "Sweet Steps"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "priceCurrency": "INR",
      "offerCount": "10",
      "url": "https://sweetsteps.vercel.app/products"
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
      <WhatsAppButton />
    </>
  );
}
