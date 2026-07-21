import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import StickyHeader from "@/components/layout/StickyHeader";

import HowItWorks from "@/components/sections/HowItWorks";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import ProductGrid from "@/components/sections/ProductGrid";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";
const ExitPopup = dynamic(() => import("@/components/common/ExitPopup"), { ssr: false });

import { Metadata } from "next";
import { googleTotalReviews, googleAverageRating, googleBusinessUrl } from "@/data/google-reviews";

export const metadata: Metadata = {
  title: "Sweet Steps | Premium 3D Casting Jaipur | Baby, Sibling & Couple Impressions",
  description: "Preserve precious bonds forever with Jaipur's premium 3D casting service. Handcrafted frames for babies, siblings, couples, and elders. 100% skin safe, at-home sessions available.",
  keywords: ["baby hand casting Jaipur", "3D family impressions Jaipur", "sibling casting Jaipur", "couple hand casting Jaipur", "elder blessing casting Jaipur"],
  alternates: {
    canonical: "https://sweetsteps.online",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sweetsteps.online",
    "name": "Sweet Steps",
    "description": "Premium 3D hand and feet casting service for babies, siblings, couples, and elders in Jaipur, Rajasthan.",
    "url": "https://sweetsteps.online",
    "telephone": "+91-8302419714",
    "priceRange": "₹₹",
    "image": "https://sweetsteps.online/logo.webp",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": googleAverageRating,
      "reviewCount": googleTotalReviews,
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.instagram.com/sweet_.steps__",
      "https://www.facebook.com/sweetstepsjaipur",
      googleBusinessUrl
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "3D Hand and Feet Casting Impressions",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sweet Steps",
      "url": "https://sweetsteps.online"
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
    "description": "Professional 3D casting service for newborns, siblings, couples, and elders in Jaipur. 100% skin safe materials."
  },
    {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom 3D Family Impression Frames",
    "description": "Handcrafted 3D impression frames - customizable for babies, siblings, couples, and elders. Capture every tiny detail and bond.",
    "image": "https://sweetsteps.online/Assets/Frame_01.webp",
    "brand": {
      "@type": "Brand",
      "name": "Sweet Steps"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "priceCurrency": "INR",
      "offerCount": "10",
      "url": "https://sweetsteps.online/gallery"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": googleAverageRating,
      "reviewCount": googleTotalReviews,
      "bestRating": "5",
      "worstRating": "1"
    }
  }
];

const VideoTestimonials = dynamic(() => import("@/components/sections/VideoTestimonials"), {
  ssr: false,
  loading: () => null,
});
const ChatWidget = dynamic(() => import("@/components/common/ChatWidget"), { ssr: false });

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
