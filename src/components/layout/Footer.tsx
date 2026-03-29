"use client";

import Link from "next/link";
import { useState } from "react";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation this would ping a newsletter API
    console.log("Subscribed:", name, email);
    setEmail("");
    setName("");
    alert("Thanks for subscribing to Sweet Steps!");
  };

  return (
    <footer className="bg-card py-16 md:py-24 border-t border-brown-secondary/10">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="text-3xl font-heading font-bold text-brown-primary">Sweet Steps</h2>
            <p className="text-brown-secondary prose">
              Capture the tiny moments that grow up too fast. Handcrafted 3D impression frames of your baby's hands and feet, delivered to your doorstep.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="https://instagram.com" className="h-10 w-10 flex items-center justify-center rounded-full bg-[#FFFBF7] hover:bg-pink-accent hover:text-white transition-colors text-brown-primary text-xl shadow-sm border border-brown-secondary/5">
                <Instagram size={20} />
              </Link>
              <Link href="https://facebook.com" className="h-10 w-10 flex items-center justify-center rounded-full bg-[#FFFBF7] hover:bg-gold-accent hover:text-white transition-colors text-brown-primary text-xl shadow-sm border border-brown-secondary/5">
                <Facebook size={20} />
              </Link>
              <Link href="https://wa.me/918302419714" className="h-10 w-10 flex items-center justify-center rounded-full bg-[#FFFBF7] hover:bg-[#25D366] hover:text-white transition-colors text-brown-primary text-xl shadow-sm border border-brown-secondary/5">
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-heading">Quick Links</h3>
            <ul className="space-y-4 text-brown-secondary">
              <li><Link href="/book" className="hover:text-gold-accent transition-colors">Book a Session</Link></li>
              <li><Link href="/products" className="hover:text-gold-accent transition-colors">Pricing & Frames</Link></li>
              <li><Link href="/gallery" className="hover:text-gold-accent transition-colors">Gallery</Link></li>
              <li><Link href="/faq" className="hover:text-gold-accent transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold font-heading">Newsletter</h3>
            <p className="text-brown-secondary text-sm">Join our newsletter for updates on special offers and pop-ups.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#FFFBF7] border border-brown-secondary/20 rounded-input px-4 py-3 text-brown-primary focus:outline-none focus:border-gold-accent"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#FFFBF7] border border-brown-secondary/20 rounded-input px-4 py-3 text-brown-primary focus:outline-none focus:border-gold-accent"
              />
              <button type="submit" className="w-full bg-gold-accent text-brown-primary px-4 py-3 font-medium rounded-input hover:brightness-105 transition-all">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brown-secondary/20 text-center flex items-center justify-center">
           <p className="text-brown-secondary text-sm">
             Made with love in Jaipur 🍼 • © {new Date().getFullYear()} Sweet Steps
           </p>
        </div>
      </div>
    </footer>
  );
}
