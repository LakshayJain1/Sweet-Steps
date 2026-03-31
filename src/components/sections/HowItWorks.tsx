"use client";

import { Home, ScanFace, Gift } from "lucide-react";
import StaggerContainer, { staggerChildVariants } from "@/components/common/StaggerContainer";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";

const steps = [
  {
    title: "We visit you",
    desc: "A professional casting artist visits your home at your convenience.",
    icon: Home,
  },
  {
    title: "We capture the impression",
    desc: "A fast, 100% baby-safe process to capture every tiny wrinkle.",
    icon: ScanFace,
  },
  {
    title: "You receive the frame",
    desc: "Your beautiful handcrafted frame is delivered in 10-15 days.",
    icon: Gift,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-neutral-50 section-padding">
      <div className="container mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-20">
            <h2>How It Works</h2>
            <p className="text-xl text-neutral-500 font-medium">Simple, stress-free, and magical.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[15%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-neutral-300/50 to-transparent" />
          
          <StaggerContainer className="contents">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={staggerChildVariants}
                className="glass-card flex flex-col items-center p-8 text-center group"
              >
                <div className="w-20 h-20 bg-white/60 backdrop-blur-xl rounded-full flex items-center justify-center shadow-glass mb-10 border border-neutral-200 group-hover:scale-110 group-hover:bg-white/80 group-hover:shadow-glass-raised transition-all duration-500">
                  <step.icon className="h-10 w-10 text-neutral-900 drop-shadow-sm" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-neutral-900">{step.title}</h3>
                <p className="text-neutral-500 text-lg leading-relaxed">{step.desc}</p>
                <div className="mt-8 w-12 h-1 bg-neutral-200 group-hover:bg-neutral-900/30 rounded-full transition-colors duration-500" />
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
