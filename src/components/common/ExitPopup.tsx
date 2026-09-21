"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle, Sparkles } from "lucide-react";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_xs1r1ij";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_466ohrx";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "MdPYAn2rmEEjW9s7e";

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
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.whatsapp,
          message: `Lead from Exit Popup! Name: ${formData.name}, WhatsApp: ${formData.whatsapp}`,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-md animate-fade-in"
        >
          <div
            className="relative glass-panel w-full max-w-lg overflow-hidden border-neutral-200/60 shadow-glass-elevated animate-pop-in"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 p-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-neutral-900 transition-all z-10"
              aria-label="Close popup"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-10 md:p-12 text-center space-y-8">
              <div className="inline-flex items-center justify-center h-20 w-20 bg-neutral-100 text-neutral-700 rounded-full mb-2">
                <MessageCircle className="h-10 w-10" />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 leading-tight">
                  Have Questions?
                </h2>
                <p className="text-neutral-500 text-lg md:text-xl font-medium">
                  We're here to help! Drop your details and we'll get back to you with all the information you need.
                </p>
              </div>

              {status === "success" ? (
                <div
                  className="pt-6 space-y-6 animate-fade-in"
                >
                  <div className="p-6 bg-neutral-100 text-neutral-900 rounded-xl font-bold flex flex-col items-center gap-2 border border-neutral-200">
                    <Sparkles className="h-6 w-6" />
                    We&apos;ll be in touch soon!
                  </div>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-neutral-900 font-bold hover:underline text-lg uppercase tracking-wide"
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
                    className="w-full px-5 py-4 rounded-xl border border-neutral-200 focus:ring-4 focus:ring-neutral-900/10 focus:border-neutral-900 focus:bg-white outline-none text-lg bg-neutral-50 text-neutral-900 placeholder:text-neutral-400 transition-all"
                    disabled={status === "loading"}
                  />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-neutral-500 font-bold">
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Number"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full pl-16 pr-5 py-4 rounded-xl border border-neutral-200 focus:ring-4 focus:ring-neutral-900/10 focus:border-neutral-900 focus:bg-white outline-none text-lg bg-neutral-50 text-neutral-900 placeholder:text-neutral-400 transition-all"
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
                    <p className="text-red-500 text-sm font-bold mt-2">Oops! Try again.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
