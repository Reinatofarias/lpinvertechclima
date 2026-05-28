"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GlowOrb from "@/components/effects/GlowOrb";
import { CTA_WHATSAPP, CTA_PHONE } from "@/lib/constants";
import { fadeInUp, viewportConfig } from "@/lib/animations";

export default function FinalCtaSection() {
  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A1628]" />

      {/* Glows */}
      <GlowOrb color="blue" size="lg" position="top-[-100px] left-1/2 -translate-x-1/2" />
      <GlowOrb color="green" size="md" position="bottom-[-100px] right-[10%]" delay={3} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          Orçamento Gratuito
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight font-outfit mb-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          Pronto para ter o{" "}
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            máximo conforto
          </span>
          ?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          Solicite agora seu orçamento gratuito e descubra a solução ideal de climatização para o seu espaço. Sem compromisso.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Button variant="whatsapp" size="lg" ctaLocation="final-cta">
            {CTA_WHATSAPP}
          </Button>
          <Button variant="phone" size="lg" ctaLocation="final-cta">
            {CTA_PHONE}
          </Button>
        </motion.div>

        {/* Trust text */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {["Sem compromisso", "Resposta rápida", "Orçamento gratuito", "Garantia real"].map(
            (item) => (
              <span
                key={item}
                className="text-slate-500 text-xs flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                {item}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
