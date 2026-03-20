import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/common/BookingModal";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Send, ChevronRight } from "lucide-react";

const Contact = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    useEffect(() => {
        document.title = "Contact Us – Sweet Steps | Baby Hand & Feet Impressions Jaipur";
        window.scrollTo(0, 0);
    }, []);

    const handleOpenBooking = () => setIsBookingOpen(true);

    const contactInfo = [
        {
            icon: Phone,
            title: "Call Us",
            subtitle: "Available Mon-Sat, 10AM-7PM",
            links: [
                { text: "+91-8302419714", href: "tel:+918302419714" },
                { text: "+91-9413867088", href: "tel:+919413867088" },
            ],
        },
        {
            icon: MessageCircle,
            title: "WhatsApp",
            subtitle: "Quick responses via WhatsApp",
            links: [
                { text: "Message us on WhatsApp", href: "https://wa.me/918302419714" },
            ],
        },
        {
            icon: Mail,
            title: "Email Us",
            subtitle: "We'll respond within 24 hours",
            links: [
                { text: "sweetsteps05@gmail.com", href: "mailto:sweetsteps05@gmail.com" },
            ],
        },
        {
            icon: MapPin,
            title: "Visit Our Studio",
            subtitle: "By appointment only",
            details: "73/47 Param Hans Marg, Mansarovar, Jaipur",
        },
        {
            icon: Clock,
            title: "Working Hours",
            subtitle: "Home visits also available",
            details: "Mon - Sat: 10:00 AM - 7:00 PM\nSunday: By Appointment",
        },
    ];

    return (
        <main className="min-h-screen">
            <Navbar onOpenBooking={handleOpenBooking} />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 gradient-hero" />
                <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] -translate-y-1/2" />
                
                <div className="container relative z-10">
                    <div className="text-center max-w-2xl mx-auto">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button text-sm font-medium mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">Get in Touch</span>
                        </span>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                            We'd Love to{" "}
                            <span className="text-gradient">Hear From You</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Have questions about our frames or want to book a session? We're here to help!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 gradient-hero" />
                
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Contact Cards */}
                        <div className="lg:col-span-3 space-y-5">
                            {contactInfo.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="glass-card-hover rounded-2xl p-6 animate-fade-in-up"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 rounded-2xl gradient-warm flex items-center justify-center flex-shrink-0 shadow-md">
                                            <item.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-2">
                                                {item.subtitle}
                                            </p>
                                            {item.links && item.links.map((link) => (
                                                <a
                                                    key={link.text}
                                                    href={link.href}
                                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                    className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-1 group"
                                                >
                                                    {link.text}
                                                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </a>
                                            ))}
                                            {item.details && (
                                                <p className="text-foreground whitespace-pre-line">
                                                    {item.details}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Map & CTA */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Google Map Embed */}
                            <div className="glass-card-hover rounded-2xl overflow-hidden">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.459442388231!2d75.76969559999999!3d26.857140299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db53962efcb8f%3A0xae986bdc5dc8e3ad!2sSweet%20Steps%20Impressions%20(3D%20Hand%20%26%20Foot%20Casting)!5e0!3m2!1sen!2sin!4v1766901644103!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="300" 
                                    style={{ border: 0 }} 
                                    allowFullScreen 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full"
                                />
                            </div>

                            {/* Social Links */}
                            <div className="glass-card-hover rounded-2xl p-6">
                                <h3 className="font-heading font-semibold text-lg text-foreground mb-5">
                                    Follow Us
                                </h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://instagram.com/sweet_.steps__"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 rounded-2xl glass-button flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all group"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-14 h-14 rounded-2xl glass-button flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://wa.me/918302419714"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 rounded-2xl glass-button flex items-center justify-center hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 hover:text-white hover:border-transparent transition-all"
                                        aria-label="WhatsApp"
                                    >
                                        <MessageCircle className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="glass-card-hover rounded-2xl p-8 text-center relative overflow-hidden">
                                {/* Decorative element */}
                                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary/10 blur-xl" />
                                
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl gradient-warm flex items-center justify-center mx-auto mb-5 shadow-md">
                                        <Send className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                                        Ready to Create Your Keepsake?
                                    </h3>
                                    <p className="text-muted-foreground mb-6">
                                        Book a session and let us capture your baby's precious moments forever.
                                    </p>
                                    <Button 
                                        variant="hero" 
                                        size="lg" 
                                        onClick={handleOpenBooking}
                                        className="shadow-glow"
                                    >
                                        Book a Session
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </main>
    );
};

export default Contact;
