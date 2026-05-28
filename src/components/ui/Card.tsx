"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import * as LucideIcons from "lucide-react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export default function Card({ icon, title, description, className = "" }: CardProps) {
  // Dynamically resolve the icon from lucide-react
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[icon] ?? LucideIcons.Circle;

  return (
    <motion.div
      variants={staggerItem}
      className={`
        group relative p-6 md:p-8 rounded-2xl
        bg-[rgba(15,33,64,0.5)] backdrop-blur-md
        border border-blue-500/10 hover:border-blue-400/30
        transition-all duration-500 ease-out
        hover:-translate-y-1
        hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]
        ${className}
      `}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-12 h-12 mb-5 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/10 group-hover:border-blue-400/30 transition-colors duration-300">
          <IconComponent className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 font-outfit">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
