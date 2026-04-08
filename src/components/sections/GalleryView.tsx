"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StaggerContainer, { staggerChildVariants } from "@/components/common/StaggerContainer";
import ScrollReveal from "@/components/common/ScrollReveal";

interface GalleryViewProps {
  images: string[];
}

export default function GalleryView({ images }: GalleryViewProps) {
  return (
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center max-w-[800px] mx-auto mb-20">
          <h1 className="mb-6 text-neutral-900">Inspiration Gallery</h1>
          <p className="text-xl text-neutral-500 leading-relaxed font-medium">
            A visual journey through the most precious moments we've had the honor to preserve in Jaipur.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6" staggerDelay={0.05}>
        {images.map((src, i) => (
          <motion.div
            key={i}
            variants={staggerChildVariants}
            className="relative break-inside-avoid rounded-2xl overflow-hidden shadow-glass border border-neutral-200/60 group bg-white"
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Sweet steps gallery image ${i + 1}`}
                width={500}
                height={700}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                loading={i < 6 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-500" />
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </div>
  );
}
