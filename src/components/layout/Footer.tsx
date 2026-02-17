import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Sweet Steps Logo"
                className="h-12 w-12 rounded-full"
                width={48}
                height={48}
                loading="lazy"
                decoding="async"
              />
              <span className="font-heading text-2xl font-semibold">
                Sweet Steps
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Tiny impressions. Timeless memories. We create beautiful 3D hand and feet impression frames that capture life's most precious moments.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/sweet_.steps__"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Our Frames
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-primary-foreground/70 text-sm">Call us</p>
                  <a href="tel:+918302419714" className="hover:text-primary transition-colors">
                    +91-8302419714
                  </a>
                  <span className="text-primary-foreground/50 mx-1">|</span>
                  <a href="tel:+919413867088" className="hover:text-primary transition-colors">
                    +91-9413867088
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-primary-foreground/70 text-sm">Email us</p>
                  <a href="mailto:sweetsteps05@gmail.com" className="hover:text-primary transition-colors">
                    sweetsteps05@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-primary-foreground/70 text-sm">Visit us</p>
                  <p className="text-sm">
                    73/47 Param Hans Marg,<br />
                    Mansarovar, Jaipur
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Sweet Steps. All rights reserved. Made with ❤️ in Jaipur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
