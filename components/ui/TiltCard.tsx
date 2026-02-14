"use client";

import { useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glare?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  tiltAmount = 6,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
  });
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, left: "50%", top: "50%" });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -tiltAmount;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * tiltAmount;
    setStyle({ transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)` });
    if (glare) setGlareStyle({ opacity: 0.15, left: `${(x / rect.width) * 100}%`, top: `${(y / rect.height) * 100}%` });
  }

  function handleMouseLeave() {
    setStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)" });
    setGlareStyle({ opacity: 0, left: "50%", top: "50%" });
  }

  return (
    <div
      ref={ref}
      className={`relative transition-transform duration-300 ease-out ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute w-40 h-40 rounded-full bg-white blur-2xl -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
          style={{ opacity: glareStyle.opacity, left: glareStyle.left, top: glareStyle.top }}
        />
      )}
    </div>
  );
}