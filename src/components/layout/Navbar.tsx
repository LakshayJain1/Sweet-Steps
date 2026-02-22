import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg"
        : "bg-white/80 backdrop-blur-sm shadow-md"
        }`}
      style={{ borderRadius: "9999px" }}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110"
          >
            <img
              src={logo}
              alt="Sweet Steps Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="hidden sm:inline font-heading" style={{ color: "#2E2E2E", fontWeight: 700, fontSize: "18px" }}>
            Sweet Steps
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="transition-colors duration-200 font-medium"
              style={{
                color: isActive(link.to) ? "#B85C7A" : "#2E2E2E",
                fontSize: "15px",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onOpenBooking}
          className="hidden md:inline-flex items-center px-6 py-2.5 text-white transition-all duration-200 hover:opacity-90 font-semibold"
          style={{
            backgroundColor: "#B85C7A",
            borderRadius: "9999px",
            fontSize: "14px",
          }}
        >
          Book a Session
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: "#2E2E2E" }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4"
          style={{ borderRadius: "0 0 24px 24px", borderColor: "rgba(0,0,0,0.06)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="py-2 transition-colors font-medium hover:text-[#B85C7A]"
              style={{
                color: isActive(link.to) ? "#B85C7A" : "#2E2E2E",
                fontSize: "16px",
              }}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenBooking?.();
            }}
            className="inline-flex items-center justify-center px-6 py-3 text-white mt-2 font-semibold"
            style={{
              backgroundColor: "#B85C7A",
              borderRadius: "9999px",
              fontSize: "15px",
            }}
          >
            Book a Session
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
