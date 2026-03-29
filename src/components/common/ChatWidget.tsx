"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, X, ChevronRight, HelpCircle } from "lucide-react";

const miniFaqs = [
  { q: "Is it safe for my baby?", a: "Yes, 100%. We use organic, ph-neutral molding jelly that is hospital-grade and safe for newborns." },
  { q: "How long does it take?", a: "The casting process takes just about 2 minutes. The whole session is around 45 minutes." },
  { q: "Do you come home?", a: "Yes, we offer at-home casting sessions across Jaipur for your comfort." },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const waUrl = "https://wa.me/918302419714?text=Hi Sweet Steps, I'd like to inquire about a baby casting session.";

  return (
    <div className="fixed bottom-2 right-2 z-[60] flex flex-col items-end">
      {/* FAQ Popup */}
      {isOpen && (
        <div className="glass-panel w-80 md:w-96 mb-4 overflow-hidden border-white/60 shadow-glass-raised animate-in slide-in-from-bottom-5 duration-500">
          <div className="bg-gold-accent p-6 text-white flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold font-heading">How can we help?</h3>
              <p className="text-sm opacity-90">Instant answers or chat with us.</p>
            </div>
            <button onClick={() => setIsOpen(false)}
              className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
              aria-label="Close FAQ support"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6 space-y-4 max-h-[400px] overflow-y-auto">
            {miniFaqs.map((faq, idx) => (
              <div key={idx} className="group cursor-help">
                <div className="flex items-center gap-3 text-brown-primary font-bold mb-1">
                  <HelpCircle className="h-4 w-4 text-gold-accent" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-sm text-brown-secondary pl-7 leading-relaxed opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all">
                  {faq.a}
                </p>
              </div>
            ))}

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-4 bg-white/40 border border-white hover:bg-white/60 rounded-xl transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                  <Image src="/founder.png" alt="Founder" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brown-primary">Message Founder</p>
                  <p className="text-xs text-brown-secondary">Replied in minutes</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gold-accent group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close help chat" : "Open help chat and FAQ"}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-glass-raised transition-all duration-500 transform hover:scale-110 ${isOpen ? "bg-white text-gold-accent rotate-90" : "bg-gold-accent text-white"
          }`}
      >
        {isOpen ? <X className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-accent rounded-full border-2 border-white animate-pulse" />
        )}
      </button>
    </div>
  );
}
