import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar } from "lucide-react";
import logo from "@/assets/logo.webp";

interface NavbarProps {
  onOpenBooking?: () => void;
}

const Navbar = ({ onOpenBooking }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl transition-all duration-500 ${scrolled
          ? "glass-card shadow-elevated"
          : "glass"
        }`}
      style={{ borderRadius: "9999px" }}
    >
      <div className="flex items-center justify-between px-5 md:px-8 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-md"
          >
            <img
              src={logo}
              alt="Sweet Steps Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="hidden sm:inline font-heading font-bold text-foreground text-lg tracking-tight">
            Sweet Steps
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm ${isActive(link.to)
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-primary/5 hover:text-primary"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onOpenBooking}
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-white font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-glow animate-gradient"
          style={{
            background: "linear-gradient(135deg, hsl(340 60% 52%), hsl(25 55% 58%))",
          }}
        >
          <Calendar className="w-4 h-4" />
          Book a Session
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-xl hover:bg-primary/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden glass-card border-t border-white/20"
          style={{ borderRadius: "0 0 24px 24px" }}
        >
          <div className="px-6 py-5 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`py-3 px-4 rounded-xl transition-all duration-300 font-medium ${isActive(link.to)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-primary/5"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenBooking?.();
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white mt-3 font-semibold rounded-full animate-gradient"
              style={{
                background: "linear-gradient(135deg, hsl(340 60% 52%), hsl(25 55% 58%))",
              }}
            >
              <Calendar className="w-4 h-4" />
              Book a Session
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
