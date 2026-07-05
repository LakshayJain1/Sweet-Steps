"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
          <Link href="/" className="flex items-center gap-2 md:gap-3 z-50">
            <div className="relative h-8 w-8 md:h-10 md:w-10 overflow-hidden rounded-full">
              <Image src="/logo.webp" alt="Sweet Steps Logo" fill sizes="40px" className="object-cover" />
            </div>
            <span className="font-heading text-lg md:text-2xl font-bold text-neutral-900 hidden xs:block">Sweet Steps</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="relative text-neutral-600 hover:text-neutral-900 transition-colors duration-300 font-medium group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-neutral-900 group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/book" className="btn-primary !hidden lg:!inline-flex px-6 py-2.5 text-sm shadow-none">
              Book Now
            </Link>
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
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/80 backdrop-blur-[40px] border border-neutral-200/60 rounded-card shadow-glass-raised py-6 px-6"
            >
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1, duration: 0.3 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)} 
                      className="block text-lg text-neutral-600 hover:text-neutral-900 py-2 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 mt-2 border-t border-neutral-200">
                   <Link href="/book" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center">
                     Book Now
                   </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
