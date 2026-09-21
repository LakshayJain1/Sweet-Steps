"use client";

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  caption,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCursorMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };

  const onMouseMove = (e: MouseEvent) => {
    if (isDragging) handleCursorMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (isDragging) handleCursorMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleEnd = () => setIsDragging(false);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchend", handleEnd);
    return () => {
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    };
  }, []);

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="relative aspect-[9/16] w-full max-w-[380px] mx-auto overflow-hidden rounded-card glass-panel border-neutral-200/40 select-none shadow-glass-raised"
        style={{ cursor: isDragging ? "grabbing" : "ew-resize" }}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* After Image (Full Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt="After - Final impression frame"
            fill
            sizes="(max-width: 640px) 92vw, 380px"
            quality={68}
            className="object-cover object-center"
            draggable={false}
          />
        </div>

        {/* Before Image (Clipped with clip-path) */}
        <div
          className="absolute inset-0 z-10"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <Image
            src={beforeImage}
            alt="Before - Initial impression"
            fill
            sizes="(max-width: 640px) 92vw, 380px"
            quality={68}
            className="object-cover object-center"
            draggable={false}
          />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-neutral-900 font-medium text-xs z-20 pointer-events-none">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-neutral-900 font-medium text-xs z-20 pointer-events-none">
          {afterLabel}
        </div>

        {/* Slider Handle */}
        <div
          className="absolute inset-y-0 z-30 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute inset-y-0 left-0 w-0.5 bg-white/90 shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg border border-neutral-200"
            style={{
              transform: `translate(-50%,-50%) scale(${isDragging ? 1.1 : 1})`,
              transition: "transform 150ms ease",
            }}
          >
            <div className="flex gap-1.5">
              <div className="w-0.5 h-4 bg-neutral-400 rounded-full" />
              <div className="w-0.5 h-4 bg-neutral-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      
      {caption && (
        <p className="text-center text-neutral-500 italic text-sm lg:text-base px-4">
          {caption}
        </p>
      )}
    </div>
  );
}
