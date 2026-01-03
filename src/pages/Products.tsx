import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Check, Star, Heart } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

// Frame Designs
const frameDesigns = [
    {
        title: "Tiny Footprints Classic",
        price: 2999,
        image: product1,
        labels: ["Bestseller"],
        description: "Beautiful baby feet impression in premium white frame with gold accents. Perfect for nursery walls.",
    },
    {
        title: "Little Hands Signature",
        price: 3499,
        image: product2,
        labels: ["New"],
        description: "Elegant handprint in modern black frame. A timeless piece that grows with your child.",
    },
    {
        title: "Family Bond Frame",
        price: 5999,
        image: product3,
        labels: ["Premium", "Family"],
        description: "Capture the whole family with parent and baby impressions together. A truly unique keepsake.",
    },
    {
        title: "Twin Treasures",
        price: 4499,
        image: product1,
        labels: ["Popular"],
        description: "Perfect for twins! Side-by-side impressions in a stunning dual-panel frame.",
    },
    {
        title: "Sibling Love",
        price: 4999,
        image: product2,
        labels: ["Family"],
        description: "Celebrate the bond between siblings with matching impressions in one beautiful frame.",
    },
    {
        title: "Memory Box Deluxe",
        price: 7999,
        image: product3,
        labels: ["Premium", "Exclusive"],
        description: "An exquisite shadow box featuring 3D impressions with space for photos and keepsakes.",
    },
];

// Packages
const packages = [
    {
        name: "Essential",
        price: 2999,
        originalPrice: 3499,
        features: [
            "Single hand or foot impression",
            "Classic white frame",
            "Standard finishing",
            "1 week delivery",
            "Digital photo included",
        ],
        popular: false,
    },
    {
        name: "Classic",
        price: 4499,
        originalPrice: 5499,
        features: [
            "Both hands and feet impressions",
            "Choice of frame color",
            "Premium finishing",
            "5-day delivery",
            "Digital photos + prints",
            "Baby name engraving",
        ],
        popular: true,
    },
    {
        name: "Premium",
        price: 7999,
        originalPrice: 9999,
        features: [
            "Complete set with family touch",
            "Premium designer frame",
            "Gold/Silver accents",
            "Priority 3-day delivery",
            "Professional photo session",
            "Custom engraving",
            "Luxe gift packaging",
            "1-year warranty",
        ],
        popular: false,
    },
];

const Products = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    useEffect(() => {
        document.title = "Our Frames & Packages – Sweet Steps | Baby Keepsake Frames Jaipur";
        window.scrollTo(0, 0);
    }, []);

    const handleOpenBooking = () => setIsBookingOpen(true);

    return (
        <main className="min-h-screen">
            <Navbar onOpenBooking={handleOpenBooking} />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-muted/30">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                            Our Frame Designs & Packages
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Explore our handcrafted collection of premium impression frames and choose the perfect package for your family.
                        </p>
                    </div>
                </div>
            </section>

            {/* Frame Designs Section */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
                            Signature Frame Designs
                        </h2>
                        <p className="text-muted-foreground">
                            Each frame is meticulously crafted to preserve your baby's precious impressions for generations.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {frameDesigns.map((product, index) => (
                            <div
                                key={product.title}
                                className="animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <ProductCard {...product} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section className="py-20 bg-muted/30">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
                            Session Packages
                        </h2>
                        <p className="text-muted-foreground">
                            Choose a package that fits your needs. All packages include professional casting and premium materials.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {packages.map((pkg, index) => (
                            <div
                                key={pkg.name}
                                className={`relative bg-card rounded-2xl border ${pkg.popular ? "border-primary shadow-elevated" : "border-border shadow-soft"
                                    } p-8 animate-fade-in-up hover:shadow-elevated transition-shadow`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                            <Star className="w-4 h-4" />
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                                        {pkg.name}
                                    </h3>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-3xl font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
                                        <span className="text-muted-foreground line-through text-sm">
                                            ₹{pkg.originalPrice.toLocaleString()}
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm">
                                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={pkg.popular ? "hero" : "outline"}
                                    size="lg"
                                    className="w-full"
                                    onClick={handleOpenBooking}
                                >
                                    Book Now
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Orders Section */}
            <section className="py-20">
                <div className="container">
                    <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-10 md:p-16 text-center shadow-elevated">
                        <div className="absolute top-0 left-0 w-40 h-40 bg-muted rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-60 h-60 bg-muted rounded-full blur-3xl" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-8 h-8 text-primary" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
                                Need Something Special?
                            </h2>

                            <p className="text-muted-foreground mb-8 text-lg">
                                We love custom projects! Whether it's a unique frame design, a special engraving, or a gift for a loved one,
                                we're here to bring your vision to life.
                            </p>

                            <Button variant="hero" size="xl" onClick={handleOpenBooking}>
                                Book a Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </main>
    );
};

export default Products;
