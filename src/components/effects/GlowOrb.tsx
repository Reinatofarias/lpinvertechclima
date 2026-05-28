"use client";

import { motion } from "framer-motion";

interface GlowOrbProps {
  color?: "blue" | "green" | "cyan";
  size?: "sm" | "md" | "lg";
  position?: string;
  delay?: number;
}

const colorMap = {
  blue: "bg-blue-500/15",
  green: "bg-emerald-500/10",
  cyan: "bg-cyan-500/10",
};

const sizeMap = {
  sm: "w-[200px] h-[200px]",
  md: "w-[400px] h-[400px]",
  lg: "w-[600px] h-[600px]",
};

export default function GlowOrb({
  color = "blue",
  size = "md",
  position = "top-0 left-1/2 -translate-x-1/2",
  delay = 0,
}: GlowOrbProps) {
  return (
    <motion.div
      className={`absolute ${position} ${sizeMap[size]} ${colorMap[color]} rounded-full blur-[100px] pointer-events-none`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.6, 0.9, 0.6],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      aria-hidden="true"
    />
  );
}
