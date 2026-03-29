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
    <div className="bg-white rounded-card shadow-card p-8 md:p-12 border border-brown-secondary/5">
      <h2 className="text-3xl font-heading font-bold mb-6 text-brown-primary">Reserve Your Date</h2>
      <p className="text-brown-secondary mb-8 text-lg">
        Fill out the details below and our team will get back to you within 24 hours to confirm your booking.
      </p>

      {status === "success" && (
        <div className="p-4 mb-8 bg-[#25D366]/10 text-green-800 rounded-input border border-[#25D366]/30">
          Success! Redirecting you...
        </div>
      )}

      {status === "error" && (
        <div className="p-4 mb-8 bg-red-50 text-red-800 rounded-input border border-red-200">
          There was an error submitting your request. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-brown-secondary block">Parent's Name *</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-brown-secondary/20 rounded-input bg-[#FFFBF7] focus:ring-2 focus:ring-gold-accent focus:outline-none placeholder:text-brown-secondary/40 text-lg"
              placeholder="Full Name"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-brown-secondary block">WhatsApp/Phone Number *</label>
            <input
              required
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-brown-secondary/20 rounded-input bg-[#FFFBF7] focus:ring-2 focus:ring-gold-accent focus:outline-none placeholder:text-brown-secondary/40 text-lg"
              placeholder="+91"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-brown-secondary block">City / Locality *</label>
            <input
              required
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-4 py-3 border border-brown-secondary/20 rounded-input bg-[#FFFBF7] focus:ring-2 focus:ring-gold-accent focus:outline-none placeholder:text-brown-secondary/40 text-lg"
              placeholder="e.g. Malviya Nagar, Jaipur"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-brown-secondary block">Baby's Age *</label>
            <input
              required
              type="text"
              value={formData.babyAge}
              onChange={(e) => setFormData({ ...formData, babyAge: e.target.value })}
              className="w-full px-4 py-3 border border-brown-secondary/20 rounded-input bg-[#FFFBF7] focus:ring-2 focus:ring-gold-accent focus:outline-none placeholder:text-brown-secondary/40 text-lg"
              placeholder="e.g. 2 Months"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-brown-secondary block">Preferred Date *</label>
          <input
            required
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-3 border border-brown-secondary/20 rounded-input bg-[#FFFBF7] focus:ring-2 focus:ring-gold-accent focus:outline-none text-brown-secondary text-lg"
          />
        </div>

        <button
           type="submit"
           disabled={status === "loading"}
           className={`btn-primary w-full text-xl mt-4 ${status === "loading" ? "opacity-75 cursor-wait" : ""}`}
        >
           {status === "loading" ? "Sending Request..." : "Request Booking →"}
        </button>
      </form>
    </div>
  );
}
