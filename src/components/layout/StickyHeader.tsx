"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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

  return (
    <header
      className={`fixed top-4 left-4 right-4 md:top-6 md:left-12 md:right-12 z-50 transition-all duration-500 rounded-full ${
        isScrolled 
          ? "bg-white/40 backdrop-blur-xl border border-white/60 shadow-glass py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 z-50">
            <div className="relative h-10 w-10 overflow-hidden rounded-image">
              <Image src="/logo.webp" alt="Sweet Steps Logo" fill className="object-cover" />
            </div>
            <span className="font-heading text-2xl font-bold">Sweet Steps</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="hover:text-gold-accent transition-colors font-medium">Home</Link>
            <Link href="/products" className="hover:text-gold-accent transition-colors font-medium">Products</Link>
            <Link href="/gallery" className="hover:text-gold-accent transition-colors font-medium">Gallery</Link>
            <Link href="/about" className="hover:text-gold-accent transition-colors font-medium">About</Link>
            <Link href="/faq" className="hover:text-gold-accent transition-colors font-medium">FAQ</Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link href="/book" className="hidden md:inline-flex btn-primary px-6 py-2.5 shadow-none pb-[12px] pt-[10px]">
              Book Now
            </Link>
            <button
              className="md:hidden z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-brown-secondary/10 shadow-lg py-6 px-6">
            <nav className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-lg">Home</Link>
              <Link href="/products" onClick={() => setIsOpen(false)} className="text-lg">Products</Link>
              <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-lg">Gallery</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg">About</Link>
              <Link href="/faq" onClick={() => setIsOpen(false)} className="text-lg">FAQ</Link>
              <div className="pt-4 mt-2 border-t border-brown-secondary/10">
                 <Link href="/book" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center">
                   Book Now
                 </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
