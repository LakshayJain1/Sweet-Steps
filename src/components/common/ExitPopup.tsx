"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { X, MessageCircle } from "lucide-react";

export default function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({ name: "", whatsapp: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0 && !hasShown && !sessionStorage.getItem("exit_shown")) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exit_shown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.whatsapp.length < 10) return;

    setStatus("loading");
    try {
      await emailjs.send(
        "service_xs1r1ij",
        "template_466ohrx",
        {
          from_name: formData.name,
          reply_to: formData.whatsapp,
          message: `Lead from Exit Popup! Name: ${formData.name}, WhatsApp: ${formData.whatsapp}`,
        },
        "MdPYAn2rmEEjW9s7e"
      );
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brown-primary/40 backdrop-blur-md animate-in fade-in duration-500">
      <div className="relative glass-panel w-full max-w-lg overflow-hidden border-white/60 shadow-glass-raised animate-in zoom-in-95 duration-700">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-6 right-6 p-2 bg-white/40 hover:bg-white/60 rounded-full text-brown-primary transition-all z-10 shadow-sm"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-10 md:p-12 text-center space-y-8">
          <div className="inline-flex items-center justify-center h-20 w-20 bg-gold-accent/20 text-gold-accent rounded-full mb-2 shadow-inner">
            <MessageCircle className="h-10 w-10 drop-shadow-[0_0_8px_rgba(232,168,56,0.4)]" />
          </div>
          
          <div className="space-y-4">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-brown-primary leading-tight">
              Have Questions?
            </h2>
            <p className="text-brown-secondary text-lg md:text-xl font-medium">
              We're here to help! Drop your details and we'll get back to you with all the information you need.
            </p>
          </div>

          {status === "success" ? (
            <div className="pt-6 space-y-6 animate-in fade-in zoom-in-95 duration-500">
              <div className="p-6 bg-green-500/10 text-green-800 rounded-xl font-bold flex flex-col items-center gap-2 border border-green-500/20 shadow-sm">
                <span className="text-2xl">✨</span>
                We'll be in touch soon!
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gold-accent font-bold hover:underline text-lg uppercase tracking-wide"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 pt-4">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 rounded-xl border border-white/60 focus:ring-4 focus:ring-gold-accent/10 focus:bg-white/60 outline-none text-lg bg-white/40 text-brown-primary placeholder:text-brown-primary/30 shadow-sm transition-all"
                disabled={status === "loading"}
              />
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-brown-secondary/60 font-bold">
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full pl-16 pr-5 py-4 rounded-xl border border-white/60 focus:ring-4 focus:ring-gold-accent/10 focus:bg-white/60 outline-none text-lg bg-white/40 text-brown-primary placeholder:text-brown-primary/30 shadow-sm transition-all"
                  disabled={status === "loading"}
                />
              </div>
              
              <button
                type="submit"
                disabled={status === "loading"}
                className={`liquid-button w-full text-xl mt-4 font-bold ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {status === "loading" ? "Sending..." : "Get in Touch →"}
              </button>
              
              {status === "error" && (
                 <p className="text-red-500 text-sm font-bold mt-2 animate-bounce">Oops! Try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
