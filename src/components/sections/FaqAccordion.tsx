"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";

interface Faq {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
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
  );
}