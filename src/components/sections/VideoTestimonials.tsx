"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Instagram } from "lucide-react";

const REELS = [
  {
    url: "https://www.instagram.com/reel/DR7OPtdE3zf/embed",
    profile: "sweet_.steps__",
  },
  {
    url: "https://www.instagram.com/reel/DWG_lJwAacq/embed",
    profile: "sweet_.steps__",
  },
];

export default function VideoTestimonials() {
  const [loaded, setLoaded] = useState<number[]>([]);
  const [failed, setFailed] = useState<number[]>([]);

  useEffect(() => {
    const script = document.getElementById("ig-embed-script");
    if (!script) {
      const s = document.createElement("script");
      s.id = "ig-embed-script";
      s.src = "//www.instagram.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    } else {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }
  }, []);

  const handleLoad = (idx: number) => {
    setLoaded((prev) => [...prev, idx]);
  };

  const handleError = (idx: number) => {
    setFailed((prev) => [...prev, idx]);
  };

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
              <div className="w-full max-w-[400px] rounded-card overflow-hidden shadow-glass border border-neutral-200/60 bg-white min-h-[500px] flex items-center justify-center">
                {failed.includes(idx) ? (
                  <a
                    href={`https://www.instagram.com/${reel.profile}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-10 text-center gap-4 text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    <Instagram className="w-12 h-12 text-pink-accent" />
                    <p className="font-medium text-lg">View on Instagram</p>
                    <p className="text-sm text-neutral-400">
                      Tap to see our latest reels @{reel.profile}
                    </p>
                  </a>
                ) : (
                  <iframe
                    src={reel.url}
                    width="100%"
                    height="480"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    onLoad={() => handleLoad(idx)}
                    onError={() => handleError(idx)}
                    className="bg-white"
                    title={`Instagram Reel ${idx + 1}`}
                  />
                )}
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
