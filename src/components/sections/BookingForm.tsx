"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    babyAge: "",
    date: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      await emailjs.send(
        "service_xs1r1ij", 
        "template_466ohrx", 
        {
          from_name: formData.name,
          phone: formData.phone,
          city: formData.city,
          baby_age: formData.babyAge,
          preferred_date: formData.date,
          message: `Name: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nBaby Age: ${formData.babyAge}\nPreferred Date: ${formData.date}`
        },
        "MdPYAn2rmEEjW9s7e" 
      );
      setStatus("success");
      
      // Clear form
      setFormData({ name: "", phone: "", city: "", babyAge: "", date: "" });
      
      // Auto-redirect to thank you page
      window.location.href = "/thank-you";
      
    } catch (error) {
      console.error("Booking Error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="glass-panel p-8 md:p-12 border-white/40 max-w-2/3 mx-auto">
      <h2 className="text-3xl font-heading font-bold mb-6 text-brown-primary">Reserve Your Date</h2>
      <p className="text-brown-secondary mb-8 text-lg leading-relaxed">
        Fill out the details below and our team will get back to you within 24 hours to confirm your booking.
      </p>

      {status === "success" && (
        <div className="p-4 mb-8 bg-[#25D366]/10 text-green-800 rounded-input border border-[#25D366]/30 animate-in fade-in">
          Success! Redirecting you...
        </div>
      )}

      {status === "error" && (
        <div className="p-4 mb-8 bg-red-50 text-red-800 rounded-input border border-red-200 animate-in shake">
          There was an error submitting your request. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-brown-primary/70 block ml-1">Parent's Name *</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-5 py-4 border border-white/60 rounded-input bg-white/40 focus:bg-white/60 focus:ring-2 focus:ring-gold-accent/30 outline-none transition-all placeholder:text-brown-secondary/30 text-lg shadow-sm"
              placeholder="Full Name"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-brown-primary/70 block ml-1">WhatsApp Number *</label>
            <input
              required
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-5 py-4 border border-white/60 rounded-input bg-white/40 focus:bg-white/60 focus:ring-2 focus:ring-gold-accent/30 outline-none transition-all placeholder:text-brown-secondary/30 text-lg shadow-sm"
              placeholder="+91"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-brown-primary/70 block ml-1">City / Locality *</label>
            <input
              required
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-5 py-4 border border-white/60 rounded-input bg-white/40 focus:bg-white/60 focus:ring-2 focus:ring-gold-accent/30 outline-none transition-all placeholder:text-brown-secondary/30 text-lg shadow-sm"
              placeholder="e.g. Malviya Nagar"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-brown-primary/70 block ml-1">Baby's Age *</label>
            <input
              required
              type="text"
              value={formData.babyAge}
              onChange={(e) => setFormData({ ...formData, babyAge: e.target.value })}
              className="w-full px-5 py-4 border border-white/60 rounded-input bg-white/40 focus:bg-white/60 focus:ring-2 focus:ring-gold-accent/30 outline-none transition-all placeholder:text-brown-secondary/30 text-lg shadow-sm"
              placeholder="e.g. 2 Months"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-brown-primary/70 block ml-1">Preferred Date *</label>
          <input
            required
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-5 py-4 border border-white/60 rounded-input bg-white/40 focus:bg-white/60 focus:ring-2 focus:ring-gold-accent/30 outline-none transition-all text-brown-secondary text-lg shadow-sm"
          />
        </div>

        <button
           type="submit"
           disabled={status === "loading"}
           className={`liquid-button w-full text-xl mt-6 ${status === "loading" ? "opacity-75 cursor-wait" : ""}`}
        >
           {status === "loading" ? "Sending Request..." : "Request Booking →"}
        </button>
      </form>
    </div>
  );
}
