import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic Two Impression Frame",
    price: "₹3,999",
    desc: "Perfect for one hand and one foot impression of your newborn.",
    img: "/placeholder.co/800x800",
  },
  {
    id: 2,
    name: "Premium Four Impression Frame",
    price: "₹6,999",
    desc: "Both hands and feet alongside a beautiful photo placeholder.",
    img: "/placeholder.co/800x800",
  },
  {
    id: 3,
    name: "Elder Blessing Keepsake",
    price: "₹8,999",
    desc: "Capture the precious bond between grandparent and baby.",
    img: "/placeholder.co/800x800",
  },
  {
    id: 4,
    name: "Golden Family Circle",
    price: "₹12,499",
    desc: "A stunning masterpiece capturing the whole family's hands.",
    img: "/placeholder.co/800x800",
  },
];

export default function ProductGrid() {
  return (
    <section className="bg-[#FFF6EE] section-padding">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our keepsake frames</h2>
          <p className="text-xl text-brown-secondary prose mx-auto">
            Browse our signature collection of 3D casting frames, designed to complement any nursery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-card overflow-hidden shadow-card group flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="relative aspect-square w-full">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-card"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col bg-[#FFFBF7]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="pr-4">{product.name}</h3>
                  <span className="text-pink-accent font-heading font-bold text-xl">{product.price}</span>
                </div>
                <p className="text-brown-secondary mb-6 flex-1 text-lg">
                  {product.desc}
                </p>
                <Link href="/products" className="inline-flex items-center text-gold-accent font-medium hover:text-brown-primary transition-colors text-lg pt-4 border-t border-brown-secondary/10 w-max">
                  View details <ArrowRight className="ml-2 h-5 w-5" />
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
