// ============================================
// INVERTECH CLIMA — Utility Functions
// ============================================

import { type ClassValue, clsx } from "clsx";

/**
 * Merge class names with clsx (no tailwind-merge needed for v4)
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
