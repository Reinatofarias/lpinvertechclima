"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";
import { trackCtaClick } from "@/lib/analytics";
import { WHATSAPP_URL, PHONE_URL } from "@/lib/constants";

type ButtonVariant = "whatsapp" | "phone" | "outline" | "ghost";
type ButtonSize = "default" | "lg" | "sm";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
  fullWidth?: boolean;
  ctaLocation?: string;
  className?: string;
  onClick?: () => void;
  showArrow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  whatsapp:
    "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]",
  phone:
    "bg-transparent border border-blue-400/40 hover:border-blue-400/80 text-blue-300 hover:text-white hover:bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]",
  outline:
    "bg-transparent border border-slate-600 hover:border-blue-400/60 text-slate-300 hover:text-white",
  ghost:
    "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-sm gap-2",
  default: "px-6 py-3.5 text-sm gap-2.5",
  lg: "px-8 py-4 text-base gap-3",
};

const iconMap: Record<string, typeof MessageCircle> = {
  whatsapp: MessageCircle,
  phone: Phone,
};

export default function Button({
  variant = "whatsapp",
  size = "default",
  children,
  href,
  fullWidth = false,
  ctaLocation = "unknown",
  className = "",
  onClick,
  showArrow = false,
}: ButtonProps) {
  const Icon = iconMap[variant];

  const handleClick = () => {
    if (variant === "whatsapp" || variant === "phone") {
      trackCtaClick(
        variant,
        ctaLocation,
        typeof children === "string" ? children : variant
      );
    }
    onClick?.();
  };

  const buttonContent = (
    <>
      {Icon && <Icon className="w-5 h-5 shrink-0" />}
      <span className="font-semibold">{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  const baseClasses = `
    group relative inline-flex items-center justify-center
    rounded-xl font-inter transition-all duration-300 ease-out
    cursor-pointer select-none
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim();

  const defaultHref =
    variant === "whatsapp"
      ? WHATSAPP_URL
      : variant === "phone"
      ? PHONE_URL
      : undefined;
  const finalHref = href ?? defaultHref;

  if (finalHref) {
    return (
      <motion.a
        href={finalHref}
        target={variant === "whatsapp" ? "_blank" : undefined}
        rel={variant === "whatsapp" ? "noopener noreferrer" : undefined}
        className={baseClasses}
        onClick={handleClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {buttonContent}
    </motion.button>
  );
}
