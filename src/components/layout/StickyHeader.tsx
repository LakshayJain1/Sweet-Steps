import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-4 left-4 right-4 md:top-6 md:left-12 md:right-12 z-50 rounded-full will-change-[backdrop-filter] animate-slide-down ${
        isScrolled 
          ? "bg-white/50 backdrop-blur-[40px] border border-neutral-200/60 shadow-glass py-3" 
          : "bg-transparent py-4"
      }`}
      style={{ transition: "background-color 500ms cubic-bezier(0.16,1,0.3,1), backdrop-filter 500ms cubic-bezier(0.16,1,0.3,1), border-color 500ms cubic-bezier(0.16,1,0.3,1), box-shadow 500ms cubic-bezier(0.16,1,0.3,1), padding 500ms cubic-bezier(0.16,1,0.3,1)" }}
    >
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 md:gap-3 z-50">
            <div className="h-8 w-8 md:h-10 md:w-10 overflow-hidden rounded-full flex-shrink-0">
              <img src="/logo.webp" alt="Sweet Steps Logo" width={40} height={40} className="object-cover w-full h-full" />
            </div>
            <span className="font-heading text-lg md:text-2xl font-bold text-neutral-900 hidden xs:block">Sweet Steps</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="relative text-neutral-600 hover:text-neutral-900 transition-colors duration-300 font-medium group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-neutral-900 group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <a href="/book" className="btn-primary !hidden lg:!inline-flex px-6 py-2.5 text-sm shadow-none">
              Book Now
            </a>
            <button
              className="md:hidden z-50 p-2 rounded-full hover:bg-neutral-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/80 backdrop-blur-[40px] border border-neutral-200/60 rounded-card shadow-glass-raised py-6 px-6 animate-menu-drop"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link, idx) => (
                <div
                  key={link.href}
                  className="animate-menu-item"
                  style={{ animationDelay: `${idx * 50 + 100}ms` }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg text-neutral-600 hover:text-neutral-900 py-2 transition-colors"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-neutral-200">
                 <a href="/book" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center">
                   Book Now
                 </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
