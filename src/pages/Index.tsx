import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookSession from "@/components/BookSession";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Sweet Steps – Jaipur Baby Hand & Feet Impressions | 3D Keepsake Frames";
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <FeaturedProducts />
      <Testimonials />
      <FAQ />
      <BookSession />
      <Footer />
    </main>
  );
};

export default Index;
