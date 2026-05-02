"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Instagram } from "lucide-react";

const REELS = [
  "https://www.instagram.com/reel/DR7OPtdE3zf/",
  "https://www.instagram.com/reel/DWG_lJwAacq/",
];

export default function VideoTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    const loadEmbedScript = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
        return;
      }
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    };

    const timer = setTimeout(loadEmbedScript, 100);
    return () => clearTimeout(timer);
  }, []);

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

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          {REELS.map((url, idx) => (
            <ScrollReveal key={idx}>
              <div className="w-full max-w-[420px] bg-transparent">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: "16px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                    margin: "0 auto",
                    maxWidth: "420px",
                    minWidth: "326px",
                    padding: 0,
                    width: "calc(100% - 2px)",
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
