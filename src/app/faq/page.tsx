"use client";

import { useState } from "react";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";

const faqs = [
  {
    q: "Is the material skin-safe?",
    a: "Absolutely. We use 100% skin-safe, non-toxic, and hypoallergenic alginate. It's the same material dentists use for oral impressions and is safe for everyone from newborns to elders."
  },
  {
    q: "How long does the process take?",
    a: "The molding process takes less than 2 minutes per hand or foot. The entire session usually wraps up within 30-45 minutes."
  },
  {
    q: "Do I have to come to your studio?",
    a: "No! We provide an at-home service anywhere in Jaipur. You stay comfortable in your own environment."
  },
  {
    q: "What is the best age to get an impression?",
    a: "For babies, we recommend between 0-6 months for the best newborn wrinkles, but we can do castings for individuals, couples, and families of any age."
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
    q: "What if there is movement during the casting?",
    a: "The material sets very quickly. Even with some movement, it usually captures perfectly. If not, we simply try again at no extra cost!"
  },
  {
    q: "How do I book a session?",
    a: "Click 'Book Now' in our menu, fill out the form, or simply send us a message on WhatsApp. We'll find a convenient date for you."
  }
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <title>FAQs | Sweet Steps Impressions</title>
      <meta name="description" content="Common questions about skin-safe 3D hand and feet castings in Jaipur." />
      
      <StickyHeader />
      <div className="pt-32 pb-24 bg-neutral-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-[800px]">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="mb-6 text-neutral-900">Frequently Asked Questions</h1>
              <p className="text-xl text-neutral-500 prose mx-auto">
                Everything you need to know about capturing your most precious bonds.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-card border border-neutral-200 overflow-hidden shadow-glass-soft">
                  <button
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-neutral-50 transition-colors"
                  >
                    <span className="font-heading font-bold text-lg text-neutral-900 pr-8">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: openIdx === idx ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-neutral-900" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIdx === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 text-neutral-500 leading-relaxed border-t border-neutral-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={0.2}>
            <div className="mt-16 text-center">
              <p className="text-lg text-neutral-500 mb-4">Still have questions?</p>
              <a href="https://wa.me/918302419714" className="btn-primary">
                Chat with us on WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <Footer />
    </>
  );
}
