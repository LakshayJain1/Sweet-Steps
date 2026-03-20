import ProductCard from "@/components/common/ProductCard";
import elder1 from "@/assets/products/elder-blessing/565952625_17863936869481205_1499331118673531301_n.webp";
import four1 from "@/assets/products/four-imp/623791658_18082922257965629_7135710008465237176_n.jpg";
import two1 from "@/assets/products/two-imp/616561075_17884532361431293_6748449571348436754_n.jpg";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Traditional Elder Blessing",
    image: elder1,
    labels: ["Spiritual"],
    description: "Deeply detailed hand impressions capturing the wisdom and love of elders.",
  },
  {
    title: "Total Love Set",
    image: four1,
    labels: ["Most Popular"],
    description: "Four beautiful impressions in a single premium frame showing every tiny detail.",
  },
  {
    title: "Classic Duo",
    image: two1,
    labels: ["Classic"],
    description: "One hand and one foot impression, perfectly balanced in a handcrafted frame.",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button text-sm font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-muted-foreground">Our Collection</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-5">
            Our <span className="text-gradient">Signature</span> Frames
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our handcrafted collection of premium impression frames, each one uniquely made with love.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="/products"
            className="inline-flex items-center gap-3 glass-button rounded-full px-8 py-4 text-foreground font-medium hover:text-primary transition-colors group"
          >
            View All Frames
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
