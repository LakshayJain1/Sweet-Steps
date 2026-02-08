import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import HowItWorks from "@/components/sections/HowItWorks";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import BookSession from "@/components/sections/BookSession";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/common/BookingModal";

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
