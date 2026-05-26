"use client";

import ScrollReveal from "@/components/common/ScrollReveal";
import { Instagram } from "lucide-react";

const REELS = [
  { url: "https://www.instagram.com/reel/DR7OPtdE3zf/", embedId: "DR7OPtdE3zf" },
  { url: "https://www.instagram.com/reel/DWG_lJwAacq/", embedId: "DWG_lJwAacq" },
];

export default function VideoTestimonials() {
  return (
    <section className="section-padding bg-transparent">
      <div className="container mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-6">Real stories, real tears.</h2>
            <p className="text-xl text-neutral-500 leading-relaxed">
              See the emotional reactions of our Jaipur clients as they unbox their 3D impression
              frames and relive their most cherished memories for the first time.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          {REELS.map((reel, idx) => (
            <ScrollReveal key={idx}>
              <div className="w-full max-w-[420px]">
                <iframe
                  src={`https://www.instagram.com/reel/${reel.embedId}/embed/`}
                  width="420"
                  height="580"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="encrypted-media"
                  loading="lazy"
                  title={`Sweet Steps client reel ${idx + 1}`}
                  style={{
                    width: "100%",
                    maxWidth: "420px",
                    minWidth: "326px",
                    height: "580px",
                    border: "none",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                    display: "block",
                  }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-14">
            <a
              href="https://www.instagram.com/sweet_.steps__/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-3 text-base"
            >
              <Instagram className="h-5 w-5" />
              See all Reels on Instagram
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
