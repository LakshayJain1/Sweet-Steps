import ProductCard from "@/components/common/ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  {
    title: "Tiny Footprints Classic",
    price: 2999,
    image: product1,
    labels: ["Bestseller"],
    description: "Beautiful baby feet impression in premium white frame with gold accents.",
  },
  {
    title: "Little Hands Signature",
    price: 3499,
    image: product2,
    labels: ["New"],
    description: "Elegant handprint in modern black frame, perfect for nursery decor.",
  },
  {
    title: "Family Bond Frame",
    price: 5999,
    image: product3,
    labels: ["Premium", "Family"],
    description: "Capture the whole family with parent and baby impressions together.",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
            Our Signature Frames
          </h2>
          <p className="text-muted-foreground">
            Explore our handcrafted collection of premium impression frames.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <a
            href="#contact"
            className="text-primary font-medium hover:underline"
          >
            Contact us for custom orders →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
