"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import StaggerContainer, { staggerChildVariants } from "@/components/common/StaggerContainer";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Product } from "@/data/products";
import { X, MessageCircle, Ruler, Star, Check, ArrowRight } from "lucide-react";

interface GalleryViewProps {
  images: string[];
  designs: Product[];
}

export default function GalleryView({ images, designs }: GalleryViewProps) {
  const [selectedDesign, setSelectedDesign] = useState<Product | null>(null);

  const getProductForImage = (src: string) => {
    return designs.find(d => d.mainImg === src || d.galleryImages.includes(src));
  };

  const openWhatsApp = (design: Product | { name: string; mainImg: string; src?: string }) => {
    const name = 'name' in design ? design.name : 'this design';
    const img = 'mainImg' in design ? design.mainImg : (design as { src?: string }).src;
    const text = `Hi Sweet Steps, I want to know more/enquire about the details of this frame: *${name}*. \n\nReference Image: ${window.location.origin}${img}`;
    window.open(`https://wa.me/918302419714?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <ScrollReveal>
        <div className="text-center max-w-[800px] mx-auto mb-20">
          <h1 className="mb-6 text-neutral-900">Design Gallery</h1>
          <p className="text-xl text-neutral-600 leading-relaxed font-medium">
            Explore our collections and custom-made keepsakes that celebrate the most precious bonds across all generations.
          </p>
        </div>
      </ScrollReveal>

      {/* Main Gallery Section */}
      <div className="mb-20">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 italic">Our Creations</h2>
            <div className="h-[1px] flex-1 bg-neutral-200" />
          </div>
        </ScrollReveal>

        <StaggerContainer className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6" staggerDelay={0.05}>
          {images.map((src, i) => {
            const product = getProductForImage(src);
            return (
              <motion.div
                key={i}
                variants={staggerChildVariants}
                className="relative break-inside-avoid rounded-2xl overflow-hidden shadow-glass border border-neutral-200/60 group bg-white"
              >
                <div className="relative w-full h-full cursor-pointer">
                  <Image
                    src={src}
                    alt={`Sweet steps gallery image ${i + 1}`}
                    width={400}
                    height={400}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    priority={i < 4}
                    loading={i < 4 ? undefined : "lazy"}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px]">
                    <motion.div 
                      initial={false}
                      className="space-y-4 w-full flex flex-col items-center"
                    >
                      {product && (
                        <h3 className="text-white font-bold text-xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          {product.name}
                        </h3>
                      )}
                      
                      <div className="flex flex-col gap-3 w-full max-w-[180px] translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-75 ease-out">
                        {product && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedDesign(product);
                            }}
                            className="bg-white text-neutral-900 py-3 px-6 rounded-full font-bold text-sm hover:bg-neutral-100 transition-colors shadow-lg"
                          >
                            View Details
                          </button>
                        )}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            openWhatsApp(product || { name: `design reference #${i+1}`, mainImg: src });
                          }}
                          className="bg-neutral-900 text-white py-3 px-6 rounded-full font-bold text-sm border border-white/20 hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-lg"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Enquire Price
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedDesign && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDesign(null)}
              className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={selectedDesign.slug}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-[1000px] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedDesign(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full border border-neutral-200 shadow-sm hover:bg-white transition-colors"
              >
                <X className="h-6 w-6 text-neutral-900" />
              </button>

              {/* Image side */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto relative bg-neutral-100">
                <Image
                  src={selectedDesign.mainImg}
                  alt={selectedDesign.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Content side */}
              <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto">
                <div className="space-y-8">
                  <div>
                    <span className="inline-block px-3 py-1 bg-neutral-900/5 rounded-full text-neutral-600 text-[10px] font-bold tracking-[0.1em] uppercase mb-4">
                      Signature Style
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900">
                      {selectedDesign.name}
                    </h2>
                  </div>

                  <p className="text-lg text-neutral-500 leading-relaxed font-medium">
                    {selectedDesign.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 gap-4 pt-4 border-t border-neutral-100">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center shrink-0">
                        <Ruler className="h-5 w-5 text-neutral-900" />
                      </div>
                      <div>
                        <h3 className="font-bold text-neutral-900 text-sm">Frame Detail</h3>
                        <p className="text-neutral-500 text-xs leading-relaxed">{selectedDesign.details.frameTexture}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center shrink-0">
                        <Star className="h-5 w-5 text-neutral-900" />
                      </div>
                      <div>
                        <h3 className="font-bold text-neutral-900 text-sm">Quality</h3>
                        <p className="text-neutral-500 text-xs leading-relaxed">{selectedDesign.details.quality}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Customizations</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedDesign.details.customizations.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 py-2 px-3 bg-neutral-50 rounded-lg">
                          <Check className="h-4 w-4 text-neutral-900" />
                          <span className="text-neutral-600 text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button 
                      onClick={() => openWhatsApp(selectedDesign)}
                      className="liquid-button w-full text-center py-4 md:py-5 px-6 md:px-10 text-lg md:text-xl font-bold flex items-center justify-center gap-3"
                    >
                      <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
                      Contact for Pricing
                    </button>
                    <p className="text-center text-xs text-neutral-400 mt-4">
                      Final price carries accordingly based on your customizations
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
