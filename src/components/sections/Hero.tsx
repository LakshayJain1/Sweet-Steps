"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Depth Effects */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Assets/Frame_10.png"
          alt="Sweet Steps Premium 3D Impression Keepsake"
          fill
          priority
          className="object-cover object-right md:object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/0 via-neutral-50/50 to-neutral-50" />
        {/* Soft Floating Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neutral-300/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neutral-400/15 rounded-full blur-[120px] animate-float-slow" />
      </div>

      <div className="container mx-auto max-w-[1200px] px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="glass-panel p-6 md:p-16 max-w-3xl border-neutral-200/40" style={{ transition: "box-shadow 700ms cubic-bezier(0.16,1,0.3,1)" }}>
            <div className="space-y-8">

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="leading-tight text-neutral-900"
              >
                Capture the <span className="text-neutral-400 italic">precious bonds</span> that last a lifetime.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-2xl text-neutral-500 font-medium leading-relaxed"
              >
                Premium 3D impression frames for families, siblings, couples, and elders. 
                Preserve your most cherished relationships with timeless art in Jaipur.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-center gap-6 pt-4"
              >
                <Link href="/book" className="liquid-button w-full sm:w-auto text-lg">
                  Book a session
                </Link>
                <Link href="/gallery" className="btn-ghost w-full sm:w-auto text-lg">
                  View Gallery
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-4 md:gap-6 pt-8 text-neutral-500 font-medium border-t border-neutral-200/40"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-xl md:text-2xl">✨</span>
                  <span className="text-sm md:text-base">500+ memories captured</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-neutral-300" />
                <div className="flex items-center gap-2 md:gap-3">
                  <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-neutral-900" />
                  <span className="text-sm md:text-base">100% Skin Safe</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-neutral-300" />
                <div className="flex items-center gap-2 md:gap-3">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-neutral-900" />
                  <span className="text-sm md:text-base">Jaipur, India</span>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
