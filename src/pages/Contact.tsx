import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/common/BookingModal";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";

const Contact = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    useEffect(() => {
        document.title = "Contact Us – Sweet Steps | Baby Hand & Feet Impressions Jaipur";
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
                            Get in Touch
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Have questions about our frames or want to book a session? We'd love to hear from you!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Cards */}
                        <div className="space-y-6">
                            <div className="bg-card rounded-2xl border border-border p-6 shadow-soft hover:shadow-elevated transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-semibold text-foreground mb-1">Call Us</h3>
                                        <p className="text-muted-foreground text-sm mb-2">Available Mon-Sat, 10AM-7PM</p>
                                        <a href="tel:+918302419714" className="text-primary font-medium hover:underline">
                                            +91-8302419714
                                        </a>
                                        <span className="text-muted-foreground mx-2">|</span>
                                        <a href="tel:+919413867088" className="text-primary font-medium hover:underline">
                                            +91-9413867088
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card rounded-2xl border border-border p-6 shadow-soft hover:shadow-elevated transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-semibold text-foreground mb-1">WhatsApp</h3>
                                        <p className="text-muted-foreground text-sm mb-2">Quick responses via WhatsApp</p>
                                        <a
                                            href="https://wa.me/918302419714"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary font-medium hover:underline"
                                        >
                                            Message us on WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card rounded-2xl border border-border p-6 shadow-soft hover:shadow-elevated transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-semibold text-foreground mb-1">Email Us</h3>
                                        <p className="text-muted-foreground text-sm mb-2">We'll respond within 24 hours</p>
                                        <a href="mailto:sweetsteps05@gmail.com" className="text-primary font-medium hover:underline">
                                            sweetsteps05@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card rounded-2xl border border-border p-6 shadow-soft hover:shadow-elevated transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-semibold text-foreground mb-1">Visit Our Studio</h3>
                                        <p className="text-muted-foreground text-sm mb-2">By appointment only</p>
                                        <p className="text-foreground">
                                            73/47 Param Hans Marg,<br />
                                            Mansarovar, Jaipur
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card rounded-2xl border border-border p-6 shadow-soft hover:shadow-elevated transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-semibold text-foreground mb-1">Working Hours</h3>
                                        <p className="text-muted-foreground text-sm mb-2">Home visits also available</p>
                                        <p className="text-foreground">
                                            Monday - Saturday: 10:00 AM - 7:00 PM<br />
                                            Sunday: By Appointment
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map & CTA */}
                        <div className="space-y-8">
                            {/* Google Map Embed */}
                            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-soft">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.459442388231!2d75.76969559999999!3d26.857140299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db53962efcb8f%3A0xae986bdc5dc8e3ad!2sSweet%20Steps%20Impressions%20(3D%20Hand%20%26%20Foot%20Casting)!5e0!3m2!1sen!2sin!4v1766901644103!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                            {/* Social Links */}
                            <div className="bg-card rounded-2xl border border-border p-6 shadow-soft">
                                <h3 className="font-heading font-semibold text-foreground mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://instagram.com/sweet_.steps__"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://wa.me/918302419714"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                                        aria-label="WhatsApp"
                                    >
                                        <MessageCircle className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-border p-8 text-center">
                                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                                    Ready to Create Your Keepsake?
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    Book a session and let us capture your baby's precious moments forever.
                                </p>
                                <Button variant="hero" size="lg" onClick={handleOpenBooking}>
                                    Book a Session
                                </Button>
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
