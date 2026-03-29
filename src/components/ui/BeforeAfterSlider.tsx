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
  beforeLabel = "Then",
  afterLabel = "Forever",
  caption,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCursorMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };

  const onMouseMove = (e: MouseEvent) => {
    if (isResizing) handleCursorMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (isResizing) handleCursorMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsResizing(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div className="space-y-6">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-card glass-panel border-white/40 cursor-ew-resize select-none shadow-glass-raised"
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onMouseDown={() => setIsResizing(true)}
        onTouchStart={() => setIsResizing(true)}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt="After"
            fill
            className="object-cover"
            draggable={false}
          />
          <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/40 backdrop-blur-md rounded-full border border-white/60 text-brown-primary font-medium text-sm">
            {afterLabel}
          </div>
        </div>

        {/* Before Image (Foreground Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-[1000px] md:w-[1200px]" style={{ width: containerRef.current?.offsetWidth }}>
            <Image
              src={beforeImage}
              alt="Before"
              fill
              className="object-cover"
              draggable={false}
            />
          </div>
          <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/40 backdrop-blur-md rounded-full border border-white/60 text-brown-primary font-medium text-sm">
            {beforeLabel}
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute inset-y-0 z-10 w-1 bg-white select-none pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gold-accent/20">
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-gold-accent rounded-full" />
              <div className="w-0.5 h-4 bg-gold-accent rounded-full" />
            </div>
          </div>
        </div>
      </div>
      
      {caption && (
        <p className="text-center text-brown-secondary italic text-lg lg:text-xl px-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
          {caption}
        </p>
      )}
    </div>
  );
}
