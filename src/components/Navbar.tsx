import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

interface NavbarProps {
  onOpenBooking?: () => void;
}

const Navbar = ({ onOpenBooking }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
        : "bg-transparent py-5"
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Sweet Steps Logo"
            className="h-10 w-10 rounded-full transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-heading text-xl font-semibold text-foreground">
            Sweet Steps
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button variant="hero" size="lg" onClick={onOpenBooking}>
            Book a Session
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-md shadow-elevated animate-fade-in">
          <div className="container py-6 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="hero" size="lg" className="mt-4" onClick={onOpenBooking}>
              Book a Session
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
