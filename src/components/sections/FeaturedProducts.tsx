import ProductCard from "@/components/common/ProductCard";
import elder1 from "@/assets/products/elder-blessing/565952625_17863936869481205_1499331118673531301_n.webp";
import four1 from "@/assets/products/four-imp/623791658_18082922257965629_7135710008465237176_n.jpg";
import two1 from "@/assets/products/two-imp/616561075_17884532361431293_6748449571348436754_n.jpg";

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
