import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  from?: "bottom" | "scale" | "left" | "right";
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  from = "bottom",
  className = "",
}: ScrollRevealProps) {
  return (
    <div
      className={`scroll-reveal ${className}`}
      data-delay={delay}
      data-from={from}
    >
      {children}
    </div>
  );
}
