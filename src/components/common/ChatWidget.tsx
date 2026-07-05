"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, X, ChevronRight, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const miniFaqs = [
  { q: "Is it safe for my baby?", a: "Yes, 100%. We use organic, ph-neutral molding jelly that is hospital-grade and safe for newborns." },
  { q: "How long does it take?", a: "The casting process takes just about 2 minutes. The whole session is around 45 minutes." },
  { q: "Do you come home?", a: "Yes, we offer at-home casting sessions across Jaipur for your comfort." },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const waUrl = "https://wa.me/918302419714?text=Hi Sweet Steps, I'd like to inquire about a baby casting session.";

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* FAQ Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel w-80 md:w-96 mb-4 overflow-hidden border-neutral-200/60 shadow-glass-raised"
          >
            <div className="bg-neutral-900 p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold font-heading">How can we help?</h3>
                <p className="text-sm opacity-80">Instant answers or chat with us.</p>
              </div>
              <button onClick={() => setIsOpen(false)}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Close FAQ support"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-3 max-h-[400px] overflow-y-auto">
              {miniFaqs.map((faq, idx) => (
                <div key={idx} className="border border-neutral-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center gap-3 text-neutral-900 font-bold px-4 py-3 text-left hover:bg-neutral-50 transition-colors"
                  >
                    <HelpCircle className="h-4 w-4 text-neutral-500 shrink-0" />
                    <span className="text-sm">{faq.q}</span>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-neutral-500 px-4 pb-3 leading-relaxed pl-11">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 bg-white/40 border border-neutral-200 hover:bg-neutral-50 rounded-xl transition-all group mt-2"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-neutral-200 shadow-sm shrink-0">
                    <Image src="/founder.webp" alt="Founder" fill sizes="48px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900">Message Founder</p>
                    <p className="text-xs text-neutral-500">Replied in minutes</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-neutral-700 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close help chat" : "Open help chat and FAQ"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-glass-raised relative ${
          isOpen ? "bg-white text-neutral-900" : "bg-neutral-900 text-white"
        }`}
        style={{ transition: "background-color 300ms cubic-bezier(0.16,1,0.3,1)" }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {isOpen ? <X className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" />}
        </motion.div>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-neutral-500 rounded-full border-2 border-white animate-pulse-soft" />
        )}
      </motion.button>
    </div>
  );
}
