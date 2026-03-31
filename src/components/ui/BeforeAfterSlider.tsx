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
  const [isDragging, setIsDragging] = useState(false);
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
    const handleMouseUp = () => { setIsResizing(false); setIsDragging(false); };
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
        className="relative aspect-[4/3] w-full overflow-hidden rounded-card glass-panel border-neutral-200/40 select-none shadow-glass-raised"
        style={{ cursor: isDragging ? "grabbing" : "ew-resize" }}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onMouseDown={() => { setIsResizing(true); setIsDragging(true); }}
        onTouchStart={() => { setIsResizing(true); setIsDragging(true); }}
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
          <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-neutral-200/60 text-neutral-900 font-medium text-sm">
            {afterLabel}
          </div>
        </div>

        {/* Before Image (Foreground Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0" style={{ width: containerRef.current?.offsetWidth }}>
            <Image
              src={beforeImage}
              alt="Before"
              fill
              className="object-cover"
              draggable={false}
            />
          </div>
          <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-neutral-200/60 text-neutral-900 font-medium text-sm">
            {beforeLabel}
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute inset-y-0 z-10 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical line */}
          <div className="absolute inset-y-0 left-0 w-[2px] bg-white/80 shadow-[0_0_8px_rgba(0,0,0,0.2)]" />
          {/* Handle circle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-glass-elevated flex items-center justify-center border border-neutral-200"
            style={{ boxShadow: isDragging ? "0 0 0 4px rgba(23,23,23,0.08), 0 8px 24px rgba(0,0,0,0.15)" : "" }}
          >
            <div className="flex gap-1.5">
              <div className="w-0.5 h-4 bg-neutral-400 rounded-full" />
              <div className="w-0.5 h-4 bg-neutral-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      
      {caption && (
        <p className="text-center text-neutral-500 italic text-lg lg:text-xl px-4">
          {caption}
        </p>
      )}
    </div>
  );
}
