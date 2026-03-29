import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/sections/BookingForm";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import UrgencyBadge from "@/components/common/UrgencyBadge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Session | Sweet Steps Jaipur",
  description: "Schedule your at-home baby 3D casting session in Jaipur today. Fill out our simple booking form.",
};

export default function BookPage() {
  return (
    <>
      <StickyHeader />
      <div className="pt-32 pb-20 bg-background min-h-[90vh]">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-[1200px]">
          
          {/* Left Text Column */}
          <div className="space-y-8 lg:sticky lg:top-32">
            <h1 className="leading-tight">Let's create something beautiful.</h1>
            <p className="text-xl text-brown-secondary leading-relaxed">
              Booking your session is simple. We come straight to your home in Jaipur so you and your baby can stay comfortable. 
              The casting process takes just minutes, and your final frame arrives in 10-15 days.
            </p>
            
            <div className="flex flex-col gap-4 p-8 bg-card rounded-card border border-gold-accent/20">
              <h3 className="font-bold flex items-center justify-between">
                <span>Availability Notice</span>
                <span className="text-2xl">🗓️</span>
              </h3>
              <p className="text-brown-secondary text-lg">
                We take limited at-home appointments per week to ensure quality and hygiene for every family. 
                Please reserve your dates early.
              </p>
              <div className="pt-2">
                 <UrgencyBadge />
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="w-full relative z-10">
            <BookingForm />
          </div>

        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
