"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      {badge && (
        <span
          className={`
            inline-block px-4 py-1.5 mb-4 rounded-full text-xs font-semibold tracking-widest uppercase
            ${
              light
                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                : "bg-blue-50 text-blue-600 border border-blue-100 shadow-[0_2px_10px_rgba(37,99,235,0.02)]"
            }
          `}
        >
          {badge}
        </span>
      )}
      <h2
        className={`
          text-2xl md:text-4xl lg:text-[42px] font-bold leading-tight tracking-tight font-outfit
          ${light ? "text-white" : "text-[#0C2D6B]"}
        `}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`
            mt-4 text-base md:text-lg max-w-2xl leading-relaxed
            ${centered ? "mx-auto" : ""}
            ${light ? "text-slate-400" : "text-slate-600"}
          `}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
