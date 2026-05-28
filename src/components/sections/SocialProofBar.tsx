"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { SOCIAL_PROOF_STATS } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export default function SocialProofBar() {
  return (
    <section
      id="social-proof"
      className="relative bg-[#0F2140] border-y border-blue-500/10"
    >
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {SOCIAL_PROOF_STATS.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
