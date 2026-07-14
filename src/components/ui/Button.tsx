"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";
import { trackCtaClick } from "@/lib/analytics";
import { WHATSAPP_URL, PHONE_URL } from "@/lib/constants";
import { useLeadModal } from "@/context/LeadModalContext";
import { getPersonalizedWhatsappUrl } from "@/lib/utils";

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
    "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-450 hover:to-emerald-550 text-white shadow-[0_4px_15px_rgba(16,185,129,0.15)] hover:shadow-[0_10px_25px_rgba(16,185,129,0.25)]",
  phone:
    "bg-blue-50 border border-blue-100 text-blue-600 hover:bg-blue-100 hover:border-blue-200 shadow-[0_4px_15px_rgba(37,99,235,0.02)] hover:shadow-[0_8px_20px_rgba(37,99,235,0.05)]",
  outline:
    "bg-transparent border border-slate-200 hover:border-slate-300 text-slate-650 hover:bg-slate-50 hover:text-slate-800 shadow-[0_2px_10px_rgba(0,0,0,0.01)]",
  ghost:
    "bg-transparent hover:bg-slate-50 text-slate-600 hover:text-slate-800",
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
  const { openLeadModal, hasCapturedLead } = useLeadModal();

  const defaultHref =
    variant === "whatsapp"
      ? WHATSAPP_URL
      : variant === "phone"
      ? PHONE_URL
      : undefined;
  const finalHref = href ?? defaultHref;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (variant === "phone") {
      trackCtaClick(
        variant,
        ctaLocation,
        typeof children === "string" ? children : variant
      );
      onClick?.();
      return;
    }

    if (variant === "whatsapp") {
      if (!hasCapturedLead) {
        e.preventDefault();
        openLeadModal(finalHref || "", ctaLocation);
      } else {
        const savedName = typeof window !== "undefined" ? localStorage.getItem("invertech_lead_name") : null;
        let redirectUrl = finalHref || "";
        if (savedName) {
          redirectUrl = getPersonalizedWhatsappUrl(redirectUrl, savedName);
        }

        trackCtaClick(
          variant,
          ctaLocation,
          typeof children === "string" ? children : variant
        );

        if (redirectUrl !== finalHref) {
          e.preventDefault();
          const link = document.createElement("a");
          link.href = redirectUrl;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.style.display = "none";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          onClick?.();
        }
      }
    } else {
      onClick?.();
    }
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
