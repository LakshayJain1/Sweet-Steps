"use client";

import Link from "next/link";
import { useState } from "react";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", name, email);
    setEmail("");
    setName("");
    alert("Thanks for subscribing to Sweet Steps!");
  };

  return (
    <footer className="bg-neutral-100 py-12 md:py-24 border-t border-neutral-200">
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <ScrollReveal className="col-span-1 md:col-span-2" delay={0}>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900">Sweet Steps</h2>
              <p className="text-neutral-500 prose">
                Capture the tiny moments that grow up too fast. Handcrafted 3D impression frames of your baby's hands and feet, delivered to your doorstep.
              </p>
              <div className="flex items-center space-x-4">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <Link href="https://instagram.com" className="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-neutral-900 hover:text-white transition-colors text-neutral-700 shadow-glass-soft border border-neutral-200">
                    <Instagram size={20} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <Link href="https://facebook.com" className="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-neutral-900 hover:text-white transition-colors text-neutral-700 shadow-glass-soft border border-neutral-200">
                    <Facebook size={20} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <Link href="https://wa.me/918302419714" className="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-[#25D366] hover:text-white transition-colors text-neutral-700 shadow-glass-soft border border-neutral-200">
                    <MessageCircle size={20} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-heading text-neutral-900">Quick Links</h3>
              <ul className="space-y-4 text-neutral-500">
                <li><Link href="/book" className="hover:text-neutral-900 transition-colors">Book a Session</Link></li>
                <li><Link href="/gallery" className="hover:text-neutral-900 transition-colors">Our Designs</Link></li>
                <li><Link href="/gallery" className="hover:text-neutral-900 transition-colors">Gallery</Link></li>
                <li><Link href="/faq" className="hover:text-neutral-900 transition-colors">FAQs</Link></li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-heading text-neutral-900">Newsletter</h3>
              <p className="text-neutral-500 text-sm">Join our newsletter for updates on special offers and pop-ups.</p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-input px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-input px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                />
                <button type="submit" className="w-full bg-neutral-900 text-white px-4 py-3 font-medium rounded-input hover:bg-neutral-800 transition-all">
                  Sign Up
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="pt-8 border-t border-neutral-200 text-center flex flex-col items-center justify-center space-y-2">
           <address className="not-italic text-neutral-500 text-sm">
             Sweet Steps Impressions • Jaipur, Rajasthan 302017
           </address>
           <p className="text-neutral-400 text-xs font-medium uppercase tracking-widest">
             Serving all of Jaipur ✨
           </p>
           <p className="text-neutral-500 text-xs pt-4">
             © {new Date().getFullYear()} Sweet Steps • Handcrafted with love
           </p>
        </div>
      </div>
    </footer>
  );
}
