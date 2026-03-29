"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { X, Gift } from "lucide-react";

export default function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({ name: "", whatsapp: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if mouse leaves top of viewport and popup hasn't been shown
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
      // Integrating EmailJS as requested for the leads popup
      await emailjs.send(
        "service_xs1r1ij", // Reusing the known Service ID from earlier
        "template_466ohrx", // Reusing the known Template ID
        {
          from_name: formData.name,
          reply_to: formData.whatsapp,
          message: `Lead from Exit Popup! Name: ${formData.name}, WhatsApp: ${formData.whatsapp}`,
        },
        "MdPYAn2rmEEjW9s7e" // Reusing the known Public Key
      );
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brown-primary/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-[#FFFBF7] w-full max-w-lg rounded-card overflow-hidden shadow-card animate-in zoom-in-95 duration-500">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-6 right-6 p-2 bg-[#FFF6EE] rounded-full text-brown-secondary hover:text-brown-primary transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-10 md:p-12 text-center space-y-6">
          <div className="inline-flex items-center justify-center h-16 w-16 bg-pink-accent/20 text-pink-accent rounded-full mb-2">
            <Gift className="h-8 w-8" />
          </div>
          
          <div className="space-y-4">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-brown-primary leading-tight">
               Get <span className="text-pink-accent italic">10% OFF</span> your first session.
             </h2>
             <p className="text-brown-secondary text-lg">
               Don't leave just yet! Provide your name and WhatsApp number and we'll instantly send you a special discount code.
             </p>
          </div>

          {status === "success" ? (
            <div className="pt-6 space-y-4 animate-in fade-in">
              <div className="p-4 bg-[#25D366]/10 text-green-800 rounded-input font-medium flex items-center justify-center gap-2 border border-[#25D366]/30">
                Discount code sent! Check your WhatsApp.
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gold-accent font-medium hover:underline text-lg"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <input
                 type="text"
                 required
                 placeholder="Parent's Name"
                 value={formData.name}
                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                 className="w-full px-5 py-4 rounded-input border border-brown-secondary/20 focus:ring-2 focus:ring-gold-accent outline-none text-lg bg-[#FFF6EE] text-brown-primary placeholder:text-brown-secondary/50"
                 disabled={status === "loading"}
              />
              <div className="relative">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-brown-secondary">
                  <span className="font-medium">+91</span>
                </div>
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full pl-16 pr-5 py-4 rounded-input border border-brown-secondary/20 focus:ring-2 focus:ring-gold-accent outline-none text-lg bg-[#FFF6EE] text-brown-primary placeholder:text-brown-secondary/50"
                  disabled={status === "loading"}
                />
              </div>
              
              <button
                type="submit"
                disabled={status === "loading"}
                className={`btn-primary w-full text-lg ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {status === "loading" ? "Sending..." : "Send My Discount"}
              </button>
              
              {status === "error" && (
                 <p className="text-red-500 text-sm mt-2">Oops! Something went wrong. Try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
