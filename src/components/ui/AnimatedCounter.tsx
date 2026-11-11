"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now();
    const durationMs = duration * 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;

      // Handle decimal values (like 4.9)
      if (value % 1 !== 0) {
        setCount(Math.round(current * 10) / 10);
      } else {
        setCount(Math.round(current));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center px-2 py-3"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="text-2xl md:text-4xl font-extrabold font-outfit text-[#0C2D6B] tabular-nums">
        {prefix}
        {value % 1 !== 0 ? count.toFixed(1).replace(".", ",") : count}
        {suffix}
      </div>
      <p className="text-slate-600 text-xs md:text-sm mt-1 font-medium">{label}</p>
    </motion.div>
  );
}
