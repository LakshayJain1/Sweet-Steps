import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/common/BookingModal";
import ProductCard from "@/components/common/ProductCard";
import { Button } from "@/components/ui/button";
import { Check, Star, Heart, Sparkles, ArrowRight } from "lucide-react";
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

const packages = [
    {
        name: "Essential",
        price: "Custom Quote",
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
        price: "Custom Quote",
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
        price: "Custom Quote",
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
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 gradient-hero" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />
                
                <div className="container relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">Our Collection</span>
                        </span>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                            Frame Designs &{" "}
                            <span className="text-gradient">Packages</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Explore our handcrafted collection of premium impression frames and choose the perfect package for your family.
                        </p>
                    </div>
                </div>
            </section>

            {/* Frame Designs Sections */}
            {categories.map((category, catIndex) => (
                <section 
                    key={category.name} 
                    className={`py-24 relative overflow-hidden ${catIndex % 2 === 1 ? "" : ""}`}
                >
                    {/* Alternating backgrounds */}
                    <div className="absolute inset-0 gradient-hero" />
                    {catIndex % 2 === 1 && (
                        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
                    )}
                    {catIndex % 2 === 0 && (
                        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />
                    )}

                    <div className="container relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button text-sm font-medium mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span className="text-muted-foreground">{category.name}</span>
                            </span>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-5">
                                {category.name}
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                {category.description}
                            </p>
                        </div>

                        <div className={`grid gap-8 ${
                            category.designs.length === 2 
                                ? "sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto" 
                                : "sm:grid-cols-2 lg:grid-cols-4"
                        }`}>
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
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 gradient-hero" />
                <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px] -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />

                <div className="container relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button text-sm font-medium mb-5">
                            <Star className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">Pricing</span>
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-5">
                            Session <span className="text-gradient">Packages</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Choose a package that fits your needs. All packages include professional casting and premium materials.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {packages.map((pkg, index) => (
                            <div
                                key={pkg.name}
                                className={`relative glass-card-hover rounded-3xl p-8 animate-fade-in-up ${
                                    pkg.popular ? "ring-2 ring-primary" : ""
                                }`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <div className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                            <Star className="w-4 h-4" />
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                                        {pkg.name}
                                    </h3>
                                    <p className="text-3xl font-bold text-gradient">{pkg.price}</p>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full gradient-warm flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3.5 h-3.5 text-white" />
                                            </div>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={pkg.popular ? "hero" : "outline"}
                                    size="lg"
                                    className={`w-full ${pkg.popular ? "shadow-glow" : "glass-button"}`}
                                    onClick={handleOpenBooking}
                                >
                                    Book Now
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Orders Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
                <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-float" style={{ animationDelay: "1s" }} />

                <div className="container relative z-10">
                    <div className="relative overflow-hidden rounded-[2rem] glass-card-hover p-12 md:p-20 text-center">
                        {/* Decorative elements */}
                        <div className="absolute top-6 left-6 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
                        <div className="absolute bottom-6 right-6 w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-xl" />

                        <div className="relative max-w-2xl mx-auto">
                            <div className="w-20 h-20 rounded-2xl gradient-warm flex items-center justify-center mx-auto mb-8 shadow-glow">
                                <Heart className="w-10 h-10 text-white" />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                                Need Something <span className="text-gradient">Special</span>?
                            </h2>

                            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                                We love custom projects! Whether it's a unique frame design, a special engraving, or a gift for a loved one,
                                we're here to bring your vision to life.
                            </p>

                            <Button 
                                variant="hero" 
                                size="xl" 
                                onClick={handleOpenBooking}
                                className="shadow-glow"
                            >
                                <Sparkles className="w-5 h-5" />
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
