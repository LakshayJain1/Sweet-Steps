import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";
import { products } from "@/data/products";

const featuredSlugs = [
  "signature-baby-frame",
  "heart-of-the-family-frame",
  "gold-and-silver-sibling-frame",
  "matriarchs-legacy-frame",
];

export default function ProductGrid() {
  const featured = products.filter(p => featuredSlugs.includes(p.slug));

  return (
    <section className="bg-transparent section-padding">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-20 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl">Our keepsake frames</h2>
            <p className="text-xl text-neutral-500 leading-relaxed">
              Explore our signature 3D casting collections for babies, siblings, couples, and elders.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {featured.map((product, idx) => (
            <ScrollReveal key={product.slug} delay={idx * 0.1}>
              <div className="glass-card group flex flex-col h-full border-neutral-200/60">
                <div className="relative aspect-[1/1] w-full overflow-hidden">
                  <Image
                    src={product.mainImg}
                    alt={product.imageAlts?.[product.mainImg] ?? product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 md:p-10 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="text-2xl font-bold text-neutral-900">{product.name}</h3>
                  </div>
                  <p className="text-neutral-500 mb-8 flex-1 text-lg leading-relaxed">
                    {product.shortDesc}
                  </p>
                  <div className="pt-6 border-t border-neutral-200/60 flex flex-col xs:flex-row items-start xs:items-center justify-between mt-auto gap-4 xs:gap-2">
                    <Link href="/gallery" className="inline-flex items-center text-neutral-900 font-bold hover:text-neutral-600 transition-colors text-base md:text-lg group/link">
                      View details 
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transform group-hover/link:translate-x-2 transition-transform duration-300" />
                    </Link>
                    <Link 
                      href="/gallery" 
                      className="inline-flex items-center gap-2 text-neutral-500 font-bold hover:text-neutral-900 transition-colors text-base md:text-lg"
                    >
                      <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                      Contact for Price
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={0.15}>
          <div className="mt-16 text-center">
            <Link href="/gallery" className="btn-primary">
              See all styles &amp; customizations
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
