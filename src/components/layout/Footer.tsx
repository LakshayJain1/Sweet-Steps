import { Link } from "react-router-dom";
import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#F5F0EA" }} className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden"
              >
                <img src={logo} alt="Sweet Steps Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-heading" style={{ color: "#2E2E2E", fontWeight: 700, fontSize: "18px" }}>
                Sweet Steps
              </span>
            </div>
            <p style={{ color: "#717182", fontSize: "14px", lineHeight: "1.7" }}>
              Tiny impressions. Timeless memories. We create beautiful 3D hand and feet impression frames that capture life's most precious moments.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com/sweet_.steps__"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: "#C6B6E9" }}
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: "#C6B6E9" }}
              >
                <Facebook size={16} className="text-white" />
              </a>
              <a
                href="mailto:sweetsteps05@gmail.com"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: "#C6B6E9" }}
              >
                <Mail size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading" style={{ fontWeight: 700, fontSize: "15px", color: "#2E2E2E", marginBottom: "16px" }}>
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
                  className="transition-colors duration-200 hover:opacity-70"
                  style={{ color: "#717182", fontSize: "14px" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading" style={{ fontWeight: 700, fontSize: "15px", color: "#2E2E2E", marginBottom: "16px" }}>
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2">
                <Phone size={14} className="mt-1" style={{ color: "#B85C7A" }} />
                <div className="flex flex-col">
                  <a href="tel:+918302419714" style={{ color: "#717182", fontSize: "14px" }} className="hover:text-primary transition-colors">+91-8302419714</a>
                  <a href="tel:+919413867088" style={{ color: "#717182", fontSize: "14px" }} className="hover:text-primary transition-colors">+91-9413867088</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} style={{ color: "#B85C7A" }} />
                <a href="mailto:sweetsteps05@gmail.com" style={{ color: "#717182", fontSize: "14px" }} className="hover:text-primary transition-colors">sweetsteps05@gmail.com</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-1" style={{ color: "#B85C7A" }} />
                <span style={{ color: "#717182", fontSize: "14px" }}>
                  73/47 Param Hans Marg,<br />
                  Mansarovar, Jaipur
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
        >
          <p style={{ color: "#717182", fontSize: "13px" }}>
            &copy; {new Date().getFullYear()} Sweet Steps. All rights reserved.
          </p>
          <p className="flex items-center gap-1" style={{ color: "#717182", fontSize: "13px" }}>
            Made with <Heart size={12} style={{ color: "#B85C7A" }} fill="#B85C7A" /> for precious memories in Jaipur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
