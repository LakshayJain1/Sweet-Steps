"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppButton() {
  const number = "918302419714"; // Provided by user previously
  const msg = "Hi! I'd like to book a Sweet Steps session 🍼";
  const waUrl = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  return (
    <>
      {/* Floating Action Button (Desktop & Mobile) */}
      <Link
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 bg-[#25D366] text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-[#20bd5a] transition-colors group"
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75" />
        <MessageCircle className="h-7 w-7 relative z-10" />
      </Link>

      {/* Sticky Bottom Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/40 backdrop-blur-xl border-t border-white/60 p-4 pb-8 shadow-glass">
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
