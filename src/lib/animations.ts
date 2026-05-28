// ============================================
// INVERTECH CLIMA — Premium Animation Variants
// ============================================

import type { Variants } from "framer-motion";

// High-end custom deceleration curve (easeOutExpo / Apple & Stripe standard physics)
export const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: PREMIUM_EASE },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: PREMIUM_EASE },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: PREMIUM_EASE },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: PREMIUM_EASE },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: PREMIUM_EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.08, 
      delayChildren: 0.15 
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: PREMIUM_EASE },
  },
};

export const pulseGlow = {
  scale: [1, 1.015, 1],
  boxShadow: [
    "0 0 15px rgba(16, 185, 129, 0.15)",
    "0 0 30px rgba(16, 185, 129, 0.3)",
    "0 0 15px rgba(16, 185, 129, 0.15)",
  ],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const floatAnimation = {
  y: [0, -6, 0],
  rotate: [0, 0.5, -0.5, 0],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const viewportConfig = {
  once: true,
  margin: "-100px" as const,
};
