import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/common/BookingModal";
import ProductCard from "@/components/common/ProductCard";
import { Button } from "@/components/ui/button";
import { Check, Star, Heart } from "lucide-react";
// Elder Blessing
import elder1 from "@/assets/products/elder-blessing/565952625_17863936869481205_1499331118673531301_n.webp";
import elder2 from "@/assets/products/elder-blessing/625008219_18092323357985877_3288329523995516286_n.jpg";

// Four Impressions
import four1 from "@/assets/products/four-imp/623791658_18082922257965629_7135710008465237176_n.jpg";
import four2 from "@/assets/products/four-imp/625014262_18037330799541096_3734195408163251281_n.jpg";

// Two Impressions
import two1 from "@/assets/products/two-imp/616561075_17884532361431293_6748449571348436754_n.jpg";
import two2 from "@/assets/products/two-imp/624027004_18080704790020495_1901701617521697128_n.jpg";
import two3 from "@/assets/products/two-imp/624872407_18079786994584308_3771641984599392725_n.jpg";
import two4 from "@/assets/products/two-imp/627446331_18106562986766187_3381016230724678298_n.jpg";

// Frame Designs
const categories = [
    {
        name: "Elder Blessing",
        description: "Honoring our roots with beautiful hand impressions of elders. A precious blessing to keep forever.",
        designs: [
            {
                title: "Traditional Elder Blessing",
                image: elder1,
                labels: ["Spiritual"],
                description: "Deeply detailed hand impressions capturing the wisdom and love of elders.",
            },
            {
                title: "Heritage Frame",
                image: elder2,
                labels: ["Premium"],
                description: "Elegant framing for the most cherished handprints of our grandparents.",
            },
        ],
    },
    {
        name: "Four Impressions",
        description: "Complete sets capturing both hands and both feet of your little one.",
        designs: [
            {
                title: "Total Love Set",
                image: four1,
                labels: ["Most Popular"],
                description: "Four beautiful impressions in a single premium frame showing every tiny detail.",
            },
            {
                title: "Baby's First Set",
                image: four2,
                labels: ["Bestseller"],
                description: "A complete collection of your baby's first hand and foot impressions.",
            },
        ],
    },
    {
        name: "Two Impressions",
        description: "Balanced pairings of hand and foot impressions for a timeless look.",
        designs: [
            {
                title: "Classic Duo",
                image: two1,
                labels: ["Classic"],
                description: "One hand and one foot impression, perfectly balanced in a handcrafted frame.",
            },
            {
                title: "Tiny Pair",
                image: two2,
                labels: ["Cute"],
                description: "Adorable pairing of tiny impressions, an ideal gift for new parents.",
            },
            {
                title: "Signature Pair",
                image: two3,
                labels: ["Signature"],
                description: "Our most requested two-impression layout with premium finishing.",
            },
            {
                title: "Elegance Duo",
                image: two4,
                labels: ["Elegant"],
                description: "Sophisticated presentation of baby impressions for modern homes.",
            },
        ],
    },
];

// Packages
const packages = [
    {
        name: "Essential",
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

            {/* Frame Designs Sections */}
            {categories.map((category, catIndex) => (
                <section key={category.name} className={`py-20 ${catIndex % 2 === 1 ? "bg-muted/30" : ""}`}>
                    <div className="container">
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
                                {category.name}
                            </h2>
                            <p className="text-muted-foreground">
                                {category.description}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.designs.map((product, index) => (
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
            ))}

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
