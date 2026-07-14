"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_URL, PHONE_URL, CTA_WHATSAPP, CTA_PHONE } from "@/lib/constants";
import { trackCtaClick } from "@/lib/analytics";
import { useLeadModal } from "@/context/LeadModalContext";

export default function StickyCtaMobile() {
  const [isVisible, setIsVisible] = useState(false);
  const { openLeadModal, hasCapturedLead } = useLeadModal();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (approx 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div
            className="bg-white/95 backdrop-blur-xl border-t border-slate-200/80 px-3 flex gap-2 shadow-[0_-8px_30px_rgba(0,0,0,0.06)]"
            style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))", paddingTop: "12px" }}
          >
            {/* WhatsApp Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!hasCapturedLead) {
                  e.preventDefault();
                  openLeadModal(WHATSAPP_URL, "sticky-mobile");
                } else {
                  trackCtaClick("whatsapp", "sticky", CTA_WHATSAPP);
                }
              }}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm shadow-[0_4px_15px_rgba(16,185,129,0.15)] active:scale-95 transition-transform"
            >
              <MessageCircle className="w-5 h-5" />
              {CTA_WHATSAPP}
            </a>

            {/* Phone Button */}
            <a
              href={PHONE_URL}
              onClick={() => trackCtaClick("phone", "sticky", CTA_PHONE)}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm active:scale-95 transition-transform shadow-[0_2px_10px_rgba(37,99,235,0.02)]"
            >
              <Phone className="w-5 h-5" />
              {CTA_PHONE}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
