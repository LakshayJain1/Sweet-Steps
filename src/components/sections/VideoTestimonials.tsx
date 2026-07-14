"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/common/ScrollReveal";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Volume2,
  VolumeX,
  Play,
  Instagram,
} from "lucide-react";

const REELS = [
  {
    id: 1,
    video: "/Reels/Video-218.mp4",
    instagram: "https://www.instagram.com/reel/DR7OPtdE3zf/",
    caption:
      "A moment worth reliving forever. ❤️ Thank you for trusting Sweet Steps with your precious memories.",
    likes: "1.2K",
    comments: "200",
    profile: "sweet_.steps__",
    music: "Original Audio • Sweet Steps",
  },
  {
    id: 2,
    video: "/Reels/Video-258.mp4",
    instagram: "https://www.instagram.com/reel/DWG_lJwAacq/",
    caption:
      "Un chhoti ungliyon ki kahani.....",
    likes: "980",
    comments: "150",
    profile: "sweet_.steps__",
    music: "Original Audio • Sweet Steps",
  },
];

function ReelCard({ reel }: { reel: (typeof REELS)[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch (err) {
        console.error(err);
      }
    } else {
      video.pause();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();

    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div className="group w-full max-w-[360px]">
      <div className="relative overflow-hidden rounded-[30px] bg-black shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">

        <video
          ref={videoRef}
          src={reel.video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onClick={togglePlay}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="aspect-[9/16] w-full object-cover cursor-pointer select-none"
        />

        {/* Bottom Gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Top Gradient */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />

        {/* Play Indicator */}
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-white/20 backdrop-blur-md p-5">
              <Play
                size={42}
                fill="white"
                className="text-white ml-1"
              />
            </div>
          </div>
        )}

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur-md p-2 text-white transition hover:bg-black/70"
        >
          {muted ? (
            <VolumeX size={18} />
          ) : (
            <Volume2 size={18} />
          )}
        </button>
        {/* Right Side Actions */}
        <div className="absolute right-4 bottom-6 flex flex-col items-center gap-5 text-white">

          <a
            href={reel.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${reel.likes} likes on Instagram`}
            className="flex flex-col items-center transition hover:scale-110"
          >
            <div className="rounded-full bg-white/10 backdrop-blur-md p-3">
              <Heart
                size={24}
                className="fill-white text-white"
              />
            </div>

            <span className="mt-1 text-xs font-medium">
              {reel.likes}
            </span>
          </a>

          <a
            href={reel.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${reel.comments} comments on Instagram`}
            className="flex flex-col items-center transition hover:scale-110"
          >
            <div className="rounded-full bg-white/10 backdrop-blur-md p-3">
              <MessageCircle size={24} />
            </div>

            <span className="mt-1 text-xs font-medium">
              {reel.comments}
            </span>
          </a>

          <a
            href={reel.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Instagram"
            className="transition hover:scale-110"
          >
            <div className="rounded-full bg-white/10 backdrop-blur-md p-3">
              <Send size={23} />
            </div>
          </a>

          <a
            href={reel.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Save on Instagram"
            className="transition hover:scale-110"
          >
            <div className="rounded-full bg-white/10 backdrop-blur-md p-3">
              <Bookmark size={23} />
            </div>
          </a>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-16 p-5 text-white">

          {/* Profile */}
          <div className="mb-3 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#E8D6B3]">

              <Instagram
                size={20}
                className="text-black"
              />

            </div>

            <div>

              <div className="flex items-center gap-2">

                <span className="font-semibold">
                  {reel.profile}
                </span>

              </div>

              <span className="text-xs text-white/70">
                Jaipur • India
              </span>

            </div>

          </div>

          {/* Caption */}

          <p className="line-clamp-3 text-sm leading-relaxed text-white/95">
            {reel.caption}
          </p>

          {/* Music */}

          <div className="mt-3 flex items-center gap-2 text-xs text-white/75">

            <div className="h-2 w-2 animate-pulse rounded-full bg-[#E8D6B3]" />

            <span>{reel.music}</span>

          </div>

        </div>

      </div>
    </div>
  );
}

export default function VideoTestimonials() {
  return (
    <section className="section-padding bg-transparent">
      <div className="container mx-auto max-w-[1280px] px-6">

        <ScrollReveal>
          <div className="mx-auto mb-16 max-w-3xl text-center">

            <h2 className="mb-6 text-4xl md:text-5xl">
              Real stories, real tears.
            </h2>

            <p className="text-xl leading-relaxed text-neutral-500">
              See the emotional reactions of our Jaipur families as they unbox
              their handcrafted 3D impressions and relive their most precious
              memories.
            </p>

          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-2">

          {REELS.map((reel, index) => (
            <ScrollReveal key={reel.id}>

              <div
                className="transition-transform duration-500"
              >
                <ReelCard reel={reel} />
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