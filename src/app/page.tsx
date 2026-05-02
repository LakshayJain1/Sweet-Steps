import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import StickyHeader from "@/components/layout/StickyHeader";

const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks"));
const BeforeAfterSection = dynamic(() => import("@/components/sections/BeforeAfterSection"));
const ProductGrid = dynamic(() => import("@/components/sections/ProductGrid"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Footer = dynamic(() => import("@/components/layout/Footer"));
const ExitPopup = dynamic(() => import("@/components/common/ExitPopup"), { ssr: false });

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sweet Steps | Premium 3D Casting Jaipur | Baby, Sibling & Couple Impressions",
  description: "Preserve precious bonds forever with Jaipur's premium 3D casting service. Handcrafted frames for babies, siblings, couples, and elders. 100% skin safe, at-home sessions available.",
  keywords: ["baby hand casting Jaipur", "3D family impressions Jaipur", "sibling casting Jaipur", "couple hand casting Jaipur", "elder blessing casting Jaipur"],
  alternates: {
    canonical: "https://sweetsteps.vercel.app",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sweetsteps.vercel.app",
    "name": "Sweet Steps",
    "description": "Premium 3D hand and feet casting service for babies, siblings, couples, and elders in Jaipur, Rajasthan.",
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
      "https://www.instagram.com/sweetsteps.vercel.app",
      "https://www.facebook.com/sweetsteps.vercel.app"
      // Add your Google Business Profile URL here
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "3D Hand and Feet Casting Impressions",
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
    "description": "Professional 3D casting service for newborns, siblings, couples, and elders in Jaipur. 100% skin safe materials."
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom 3D Family Impression Frames",
    "description": "Handcrafted 3D impression frames - customizable for babies, siblings, couples, and elders. Capture every tiny detail and bond.",
    "image": "https://sweetsteps.vercel.app/Assets/Frame_01.png",
    "brand": {
      "@type": "Brand",
      "name": "Sweet Steps"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "priceCurrency": "INR",
      "offerCount": "10",
      "url": "https://sweetsteps.vercel.app/gallery"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "214"
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
