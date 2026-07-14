"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, MessageCircle, Loader2 } from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";
import { MAKE_WEBHOOK_URL } from "@/lib/constants";
import { trackCtaClick } from "@/lib/analytics";
import { getPersonalizedWhatsappUrl } from "@/lib/utils";

export default function LeadModal() {
  const { isOpen, targetUrl, ctaLocation, closeLeadModal, setHasCapturedLead } = useLeadModal();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Clear form when opening
  useEffect(() => {
    if (isOpen) {
      setName("");
      setPhone("");
      setError("");
      setIsLoading(false);
    }
  }, [isOpen]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    // Format Brazilian phone: (XX) XXXXX-XXXX or (XX) XXXX-XXXX
    const digits = rawValue.replace(/\D/g, "");
    let formatted = "";
    
    if (digits.length === 0) {
      formatted = "";
    } else if (digits.length <= 2) {
      formatted = `(${digits}`;
    } else if (digits.length <= 6) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else if (digits.length <= 10) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    } else {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    }
    
    setPhone(formatted);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Por favor, insira seu nome completo.");
      return;
    }

    const numericPhone = phone.replace(/\D/g, "");
    if (numericPhone.length < 10) {
      setError("Por favor, insira um telefone válido com DDD.");
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        nome: name.trim(),
        telefone: phone,
        data: new Date().toLocaleString("pt-BR", { timeZone: "America/Araguaina" }), // Palmas timezone
        origem: ctaLocation || "unknown",
        pagina_origem: typeof window !== "undefined" ? window.location.href : "",
      };

      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      
      // 2. Save capture state in localStorage
      localStorage.setItem("invertech_lead_captured", "true");
      localStorage.setItem("invertech_lead_name", name.trim());
      setHasCapturedLead(true);

      // 3. Trigger GTM tracking when the lead is actually dispatched to WhatsApp
      trackCtaClick("whatsapp", ctaLocation || "modal", "WhatsApp Lead Form Submitted");

      // 4. Personalize the WhatsApp URL with the user's name
      const personalizedUrl = getPersonalizedWhatsappUrl(targetUrl, name.trim());

      // 5. Open WhatsApp URL in a new tab using a temporary link element to ensure GTM Link Click trigger fires (wa.me click event)
      if (typeof window !== "undefined") {
        const link = document.createElement("a");
        link.href = personalizedUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      // 6. Close the modal
      closeLeadModal();
    } catch (err) {
      console.error("Erro ao enviar webhook do Make:", err);
      setError("Ocorreu um erro ao conectar. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLeadModal}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-md bg-white rounded-2xl border border-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-hidden z-10 font-inter"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
          >
            {/* Header banner decoration */}
            <div className="h-2 bg-gradient-to-r from-blue-500 to-emerald-500" />

            {/* Close Button */}
            <button
              onClick={closeLeadModal}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-650 hover:bg-slate-50 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-lg md:text-xl text-slate-900 leading-tight">
                    Falta muito pouco!
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Preencha os dados abaixo para falar conosco.
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Queremos garantir um atendimento super rápido. Digite seu nome e WhatsApp para iniciar a conversa!
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label htmlFor="lead-name" className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="lead-name"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isLoading}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm placeholder-slate-450 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all disabled:bg-slate-50 disabled:text-slate-400 font-medium"
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div>
                  <label htmlFor="lead-phone" className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">
                    WhatsApp (Celular)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="lead-phone"
                      required
                      placeholder="(63) 99999-9999"
                      value={phone}
                      onChange={handlePhoneChange}
                      disabled={isLoading}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm placeholder-slate-450 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all disabled:bg-slate-50 disabled:text-slate-400 font-medium"
                    />
                  </div>
                </div>

                {/* Error message */}
                {error && (
                  <motion.p
                    className="text-xs font-medium text-rose-500 mt-1"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {error}
                  </motion.p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-450 hover:to-emerald-550 text-white font-semibold text-sm shadow-[0_4px_15px_rgba(16,185,129,0.15)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.25)] transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed select-none cursor-pointer active:scale-98"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                      <span>Conectando...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5 shrink-0" />
                      <span>Iniciar Conversa</span>
                    </>
                  )}
                </button>
              </form>

              {/* GDPR Disclaimer */}
              <p className="text-[10px] text-center text-slate-450 mt-4 leading-relaxed">
                Seus dados estão protegidos. Usamos estas informações exclusivamente para prestar o seu atendimento.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
