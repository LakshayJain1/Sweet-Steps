import StickyHeader from "@/components/layout/StickyHeader";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/common/ScrollReveal";

export const metadata: Metadata = {
  title: "Thank You! | Session Confirmed",
  description: "Your session request has been received by Sweet Steps. We'll be in touch shortly.",
  keywords: [
    "booking confirmation Sweet Steps Jaipur",
    "baby casting booking received Jaipur",
    "what happens after booking casting session",
    "Sweet Steps contact WhatsApp Jaipur",
    "casting session next steps Jaipur"
  ],
  alternates: {
    canonical: "https://sweetsteps.online/thank-you",
  },
};

export default function ThankYouPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Home", href: "/" }, { name: "Thank You", href: "/thank-you" }]} />
      <StickyHeader />
      <div className="pt-32 pb-20 bg-neutral-50 min-h-[90vh] flex flex-col justify-center">
        <div className="container mx-auto px-6 text-center max-w-[800px]">
          <ScrollReveal>
            <div className="relative inline-flex items-center justify-center p-6 bg-neutral-100 rounded-full mb-8 border border-neutral-200">
              <CheckCircle2 className="h-16 w-16 text-neutral-900" />
              <div className="absolute inset-0 animate-ping rounded-full border border-neutral-400/40"></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.15}>
            <h1 className="leading-tight mb-6 text-neutral-900">Booking Request Received!</h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.25}>
            <p className="text-xl md:text-2xl text-neutral-500 leading-[1.6]">
              Thank you for trusting Sweet Steps. Our team will contact you via WhatsApp or phone within 24 hours 
              to confirm your selected date and discuss frame options.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.35}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 bg-neutral-100 p-8 rounded-card border border-neutral-200">
              <span className="text-lg text-neutral-900 font-medium">Need immediate assistance?</span>
              <a 
                href="https://wa.me/918302419714" 
                className="flex items-center btn-primary"
              >
                Follow up on WhatsApp →
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.45}>
            <div className="mt-12">
              <Link href="/" className="btn-ghost" prefetch={true}>
                Return to Home
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <Footer />
    </>
  );
}
