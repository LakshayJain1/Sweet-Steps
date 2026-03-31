"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const number = "918302419714";
  const msg = "Hi! I'd like to book a Sweet Steps session 🍼";
  const waUrl = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  return (
    <>
      {/* Floating Action Button (Desktop & Mobile) */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Link
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="h-14 w-14 bg-[#25D366] text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-[#20bd5a] transition-colors group relative"
        >
          {/* Soft pulsing ring — less harsh than animate-ping */}
          <span
            className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-60"
            style={{ animation: "pulseRing 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite" }}
          />
          <MessageCircle className="h-7 w-7 relative z-10" />
        </Link>
      </motion.div>

      {/* Sticky Bottom Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/60 backdrop-blur-[40px] border-t border-neutral-200/60 p-4 pb-8 shadow-glass">
        <Link
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
        >
          <MessageCircle className="h-6 w-6" />
          Chat on WhatsApp
        </Link>
      </div>
    </>
  );
}
