import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) => {
  return (
    <div
      className={className}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};