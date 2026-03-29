import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You! | Sweet Steps Session Confirmed",
  description: "Your session request has been received by Sweet Steps. We'll be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <>
      <StickyHeader />
      <div className="pt-32 pb-20 bg-background min-h-[90vh] flex flex-col justify-center">
        <div className="container mx-auto px-6 text-center max-w-[800px]">
          <div className="relative inline-flex items-center justify-center p-6 bg-[#25D366]/10 rounded-full mb-8">
            <CheckCircle2 className="h-16 w-16 text-[#25D366]" />
            <div className="absolute inset-0 animate-ping rounded-full border border-[#25D366]/30"></div>
          </div>
          
          <h1 className="leading-tight mb-6">Booking Request Received!</h1>
          
          <p className="text-xl md:text-2xl text-brown-secondary leading-[1.6]">
            Thank you for trusting Sweet Steps. Our team will contact you via WhatsApp or phone within 24 hours 
            to confirm your selected date and discuss frame options.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 bg-card p-8 rounded-card border shadow-sm border-gold-accent/10">
            <span className="text-lg text-brown-primary font-medium">Need immediate assistance?</span>
            <a 
              href="https://wa.me/918302419714" 
              className="flex items-center btn-primary"
            >
               Follow up on WhatsApp →
            </a>
          </div>

          <div className="mt-12">
            <Link href="/" className="btn-ghost" prefetch={true}>
              Return to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
