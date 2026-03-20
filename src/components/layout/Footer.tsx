import { Link } from "react-router-dom";
import { Heart, Instagram, Facebook, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
              >
                <img src={logo} alt="Sweet Steps Logo" className="w-full h-full object-cover rounded-xl" />
              </div>
              <span className="font-heading font-bold text-foreground text-lg">
                Sweet Steps
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Tiny impressions. Timeless memories. We create beautiful 3D hand and feet impression frames that capture life's most precious moments.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/sweet_.steps__"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-button flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all group"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl glass-button flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="mailto:sweetsteps05@gmail.com"
                className="w-10 h-10 rounded-xl glass-button flex items-center justify-center hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-white hover:border-transparent transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full gradient-warm" />
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", to: "/" },
                { label: "Our Frames", to: "/products" },
                { label: "How It Works", to: "#how-it-works" },
                { label: "FAQ", to: "#faq" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full gradient-warm" />
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg gradient-warm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={14} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+918302419714" className="text-sm text-muted-foreground hover:text-primary transition-colors">+91-8302419714</a>
                  <a href="tel:+919413867088" className="text-sm text-muted-foreground hover:text-primary transition-colors">+91-9413867088</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg gradient-warm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={14} className="text-white" />
                </div>
                <a href="mailto:sweetsteps05@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  sweetsteps05@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg gradient-warm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-white" />
                </div>
                <span className="text-sm text-muted-foreground">
                  73/47 Param Hans Marg,<br />
                  Mansarovar, Jaipur
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full gradient-warm" />
              Book Now
            </h4>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Ready to create your keepsake? Book a session today and let's preserve your precious memories.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-full text-sm transition-all duration-300 hover:shadow-glow"
              style={{
                background: "linear-gradient(135deg, hsl(340 60% 52%), hsl(25 55% 58%))",
              }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('[data-booking-trigger]')?.dispatchEvent(new Event('click'));
              }}
            >
              Book a Session
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sweet Steps. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              Made with
              <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart size={10} className="text-primary fill-primary" />
              </span>
              for precious memories in Jaipur
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
