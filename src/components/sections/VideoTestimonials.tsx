"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import StaggerContainer, { staggerChildVariants } from "@/components/common/StaggerContainer";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function VideoTestimonials() {
  const testimonials = [
    {
      title: "Baby Arish's First Casting",
      location: "Malviya Nagar, Jaipur",
      thumbnail: "/Assets/Frame_04.png",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      title: "Family Hand Casting",
      location: "Vaishali Nagar, Jaipur",
      thumbnail: "/Assets/Frame_08.png",
      url: "#"
    }
  ];

  return (
    <section className="section-padding bg-transparent">
      <div className="container mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-6">Real stories, real tears.</h2>
            <p className="text-xl text-neutral-500 leading-relaxed">
              See the emotional reactions of our Jaipur clients as they unbox their 3D impression frames and relive their most cherished memories for the first time.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10" staggerDelay={0.15}>
          {testimonials.map((video, idx) => (
            <motion.div
              key={idx}
              variants={staggerChildVariants}
              className="glass-card group overflow-hidden border-neutral-200/60"
            >
              <div className="relative aspect-video w-full cursor-pointer overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-colors group-hover:bg-black/40" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Pulsing ring */}
                    <span className="absolute inset-0 rounded-full border border-white/40 scale-100 group-hover:scale-150 opacity-100 group-hover:opacity-0 transition-all duration-700" />
                    <div className="w-20 h-20 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/60 shadow-glass transition-all group-hover:scale-110 group-hover:bg-white/50">
                      <Play className="h-8 w-8 fill-current text-white ml-1" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <h4 className="text-2xl font-bold mb-1">{video.title}</h4>
                  <p className="opacity-80 text-sm font-medium">{video.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
