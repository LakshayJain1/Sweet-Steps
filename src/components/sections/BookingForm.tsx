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
      setFormData({ name: "", phone: "", city: "", babyAge: "", date: "" });
      window.location.href = "/thank-you";
      
    } catch (error) {
      console.error("Booking Error:", error);
      setStatus("error");
    }
  };

  const inputClass = "w-full px-5 py-4 border border-neutral-200 rounded-input bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 outline-none transition-all placeholder:text-neutral-400 text-lg text-neutral-900";

  return (
    <div className="glass-panel p-8 md:p-12 border-neutral-200/40">
      <h2 className="text-3xl font-heading font-bold mb-6 text-neutral-900">Reserve Your Date</h2>
      <p className="text-neutral-500 mb-8 text-lg leading-relaxed">
        Fill out the details below and our team will get back to you within 24 hours to confirm your booking.
      </p>

      {status === "success" && (
        <div className="p-4 mb-8 bg-neutral-100 text-neutral-900 rounded-input border border-neutral-200">
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
            <label className="text-sm font-bold text-neutral-700 block ml-1">Parent's Name *</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
              placeholder="Full Name"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-neutral-700 block ml-1">WhatsApp Number *</label>
            <input
              required
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputClass}
              placeholder="+91"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-neutral-700 block ml-1">City / Locality *</label>
            <input
              required
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className={inputClass}
              placeholder="e.g. Malviya Nagar"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-neutral-700 block ml-1">Baby's Age *</label>
            <input
              required
              type="text"
              value={formData.babyAge}
              onChange={(e) => setFormData({ ...formData, babyAge: e.target.value })}
              className={inputClass}
              placeholder="e.g. 2 Months"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-neutral-700 block ml-1">Preferred Date *</label>
          <input
            required
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className={inputClass}
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
