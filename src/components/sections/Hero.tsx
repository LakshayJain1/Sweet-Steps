"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";
import UrgencyBadge from "@/components/common/UrgencyBadge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Depth Effects */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-frame.jpg"
          alt="Sweet Steps Baby Impression Keepsake"
          fill
          priority
          className="object-cover object-right md:object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/0 via-neutral-50/50 to-neutral-50" />
        {/* Soft Floating Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neutral-300/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neutral-400/15 rounded-full blur-[120px] animate-float-slow" />
      </div>

      <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
        <ScrollReveal>
          <div className="glass-panel p-8 md:p-16 max-w-3xl border-neutral-200/40" style={{ transition: "box-shadow 700ms cubic-bezier(0.16,1,0.3,1)" }}>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <UrgencyBadge />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="leading-tight text-neutral-900"
              >
                Capture the <span className="text-neutral-400 italic">tiny moments</span> that grow up too fast.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-2xl text-neutral-500 font-medium leading-relaxed"
              >
                Handcrafted 3D impression frames of your baby's hands and feet. 
                Made with love in Jaipur.
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
                className="flex flex-wrap items-center gap-6 pt-8 text-neutral-500 font-medium border-t border-neutral-200/40"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🍼</span>
                  <span>200+ families</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-neutral-300" />
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-neutral-900" />
                  <span>100% Baby Safe</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-neutral-300" />
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-neutral-900" />
                  <span>Jaipur, India</span>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
