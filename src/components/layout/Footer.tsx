"use client";

import Logo from "@/components/ui/Logo";
import { COMPANY_NAME, COMPANY_TAGLINE, COMPANY_LOCATION, COMPANY_YEAR, PHONE_DISPLAY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <Logo isDarkBg={false} className="h-10 w-auto opacity-95" />

          {/* Tagline */}
          <p className="text-slate-500 text-sm italic max-w-sm">
            {COMPANY_TAGLINE}
          </p>

          {/* Contact */}
          <p className="text-slate-600 text-sm">
            {PHONE_DISPLAY} • {COMPANY_LOCATION}
          </p>

          {/* Divider */}
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          {/* Copyright */}
          <p className="text-slate-450 text-xs">
            © {COMPANY_YEAR} {COMPANY_NAME}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
