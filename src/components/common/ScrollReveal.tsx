"use client";

import { useEffect, useRef, useState } from "react";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  from?: "bottom" | "scale" | "left" | "right";
  className?: string;
}

const hiddenTransforms: Record<NonNullable<ScrollRevealProps["from"]>, string> = {
  bottom: "translate-y-[30px]",
  scale: "scale-95",
  left: "-translate-x-[30px]",
  right: "translate-x-[30px]",
};

export default function ScrollReveal({
  children,
  delay = 0,
  from = "bottom",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-50px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform] ${
        visible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : `opacity-0 ${hiddenTransforms[from]}`
      }`}
      style={{ transitionDelay: `${delay * 1000}ms` }}
    >
      {children}
    </div>
  );
}
