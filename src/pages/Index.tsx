import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookSession from "@/components/BookSession";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    document.title = "Sweet Steps – Jaipur Baby Hand & Feet Impressions | 3D Keepsake Frames";
  }, []);

  const handleOpenBooking = () => setIsBookingOpen(true);

  return (
    <main className="min-h-screen">
      <Navbar onOpenBooking={handleOpenBooking} />
      <Hero onOpenBooking={handleOpenBooking} />
      <WhatWeDo />
      <HowItWorks />
      <FeaturedProducts />
      <Testimonials />
      <FAQ />
      <BookSession onOpenBooking={handleOpenBooking} />
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
};

export default Index;
