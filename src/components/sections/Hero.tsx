"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-neutral-50">
      {/* Soft decorative gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-neutral-200/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neutral-300/20 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto max-w-[1200px] px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-500 text-sm font-medium"
            >
              <MapPin className="h-3.5 w-3.5" />
              Jaipur, India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="leading-tight text-neutral-900"
            >
              Capture the{" "}
              <span className="text-neutral-400 italic">precious bonds</span>{" "}
              that last a lifetime.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-lg"
            >
              Premium 3D impression frames for families, siblings, couples, and elders.
              Preserve your most cherished relationships with timeless art.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link href="/book" className="liquid-button text-base sm:text-lg">
                Book a session
              </Link>
              <Link href="/gallery" className="btn-ghost text-base sm:text-lg">
                View Gallery
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 md:gap-6 pt-4 text-neutral-500 font-medium border-t border-neutral-200"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">✨</span>
                <span className="text-sm">500+ memories captured</span>
              </div>
              <div className="hidden md:block w-px h-5 bg-neutral-300" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-neutral-700" />
                <span className="text-sm">100% Skin Safe</span>
              </div>
            </motion.div>
          </div>

          {/* Right — Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            {/* Decorative ring */}
            <div className="absolute -inset-6 rounded-[2rem] border border-neutral-200/60" />
            <div className="relative aspect-[4/5] w-full rounded-[1.5rem] overflow-hidden bg-neutral-100 shadow-glass-raised">
              <Image
                src="/Assets/Frame_09.png"
                alt="Sweet Steps Premium 3D Impression Frame"
                fill
                priority
                className="object-cover object-center"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-50/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-5 -left-6 glass-panel px-5 py-3 flex items-center gap-3 border-neutral-200/40"
            >
              <span className="text-2xl">🏆</span>
              <div>
                <p className="text-xs font-bold text-neutral-900">Jaipur's #1</p>
                <p className="text-[10px] text-neutral-500">3D Impression Studio</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
