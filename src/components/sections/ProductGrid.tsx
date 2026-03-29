import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic Two Impression Frame",
    price: "₹3,999",
    desc: "Perfect for one hand and one foot impression of your newborn.",
    img: "/product-1.jpg",
  },
  {
    id: 2,
    name: "Premium Four Impression Frame",
    price: "₹6,999",
    desc: "Both hands and feet alongside a beautiful photo placeholder.",
    img: "/product-2.jpg",
  },
  {
    id: 3,
    name: "Elder Blessing Keepsake",
    price: "₹8,999",
    desc: "Capture the precious bond between grandparent and baby.",
    img: "/product-3.jpg",
  },
  {
    id: 4,
    name: "Golden Family Circle",
    price: "₹12,499",
    desc: "A stunning masterpiece capturing the whole family's hands.",
    img: "/og-image.jpg",
  },
];

export default function ProductGrid() {
  return (
    <section className="bg-transparent section-padding">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl">Our keepsake frames</h2>
          <p className="text-xl text-brown-secondary leading-relaxed">
            Browse our signature collection of 3D casting frames, designed to complement any nursery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {products.map((product) => (
            <div key={product.id} className="glass-card group flex flex-col h-full border-white/20">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <span className="text-pink-accent font-heading font-bold text-2xl drop-shadow-sm shrink-0">{product.price}</span>
                </div>
                <p className="text-brown-secondary mb-8 flex-1 text-lg leading-relaxed">
                  {product.desc}
                </p>
                <Link href="/products" className="inline-flex items-center text-gold-accent font-bold hover:text-brown-primary transition-colors text-lg pt-6 border-t border-white/20 w-max group/link">
                  View details 
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover/link:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/products" className="btn-primary">
            See all pricing & styles
          </Link>
        </div>
      </div>
    </section>
  );
}
