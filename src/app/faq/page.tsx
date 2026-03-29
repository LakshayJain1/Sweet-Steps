"use client";

import { useState } from "react";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { ChevronDown, ChevronUp } from "lucide-react";

// Minimal custom accordion instead of pulling in a heavy Radix UI for just one page
const faqs = [
  {
    q: "Is the material safe for my newborn?",
    a: "Absolutely. We use 100% skin-safe, non-toxic, and hypoallergenic alginate. It's the same material dentists use for oral impressions."
  },
  {
    q: "How long does the process take?",
    a: "The molding process takes less than 2 minutes per hand or foot. The entire session usually wraps up within 30-45 minutes."
  },
  {
    q: "Do I have to come to your studio?",
    a: "No! We provide an at-home service anywhere in Jaipur. Your baby stays comfortable in their own environment."
  },
  {
    q: "What is the best age to get an impression?",
    a: "We recommend between 0-6 months for the deepest newborn wrinkles, but we can do castings for children and adults of any age."
  },
  {
    q: "When will I receive my finished frame?",
    a: "It takes about 10 to 15 days to dry, finish, paint, and frame the final 3D piece."
  },
  {
    q: "Can I choose the frame color?",
    a: "Yes, you can select from our collection of premium frames during our visit. Popular choices include gold, silver, and classic white."
  },
  {
    q: "What if my baby moves during the casting?",
    a: "The material sets very quickly. Even if they wiggle, it usually captures perfectly. If not, we simply try again at no extra cost!"
  },
  {
    q: "How do I book a session?",
    a: "Click 'Book Now' in our menu, fill out the form, or simply send us a message on WhatsApp. We'll find a convenient date for you."
  }
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      <title>FAQs | Sweet Steps Impressions</title>
      <meta name="description" content="Common questions about baby safe 3D hand and feet castings in Jaipur." />
      
      <StickyHeader />
      <div className="pt-32 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-6 max-w-[800px]">
          <div className="text-center mb-16">
            <h1 className="mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-brown-secondary prose mx-auto">
              Everything you need to know about capturing your baby's first moments.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-card rounded-input border border-brown-secondary/10 overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                   onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                   className="w-full text-left px-6 py-5 flex justify-between items-center bg-[#FFF6EE] hover:bg-[#FFFBF7] transition-colors"
                >
                  <span className="font-heading font-bold text-lg text-brown-primary pr-8">{faq.q}</span>
                  {openIdx === idx ? (
                    <ChevronUp className="h-5 w-5 text-gold-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-brown-secondary flex-shrink-0" />
                  )}
                </button>
                {openIdx === idx && (
                   <div className="px-6 pb-6 pt-2 text-brown-secondary leading-relaxed animate-in slide-in-from-top-2 fade-in duration-200">
                     {faq.a}
                   </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-brown-secondary mb-4">Still have questions?</p>
            <a href="https://wa.me/918302419714" className="btn-primary">
               Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
