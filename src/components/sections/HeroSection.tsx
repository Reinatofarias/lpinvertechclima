"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";
import GlowOrb from "@/components/effects/GlowOrb";
import {
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  CTA_WHATSAPP,
  CTA_PHONE,
} from "@/lib/constants";
import { fadeInUp, viewportConfig } from "@/lib/animations";

const ParticlesBackground = dynamic(
  () => import("@/components/effects/ParticlesBackground"),
  { ssr: false }
);

export default function HeroSection() {
  const handleScrollDown = () => {
    const element = document.querySelector("#social-proof");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0A1628]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Glow orbs */}
      <GlowOrb color="blue" size="lg" position="top-[-200px] left-1/2 -translate-x-1/2" />
      <GlowOrb color="green" size="md" position="top-[30%] right-[-100px]" delay={2} />
      <GlowOrb color="cyan" size="sm" position="bottom-[20%] left-[-50px]" delay={4} />

      {/* Particles */}
      <ParticlesBackground />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        {/* Badge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Tecnologia Inverter • Palmas-TO
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight font-outfit mb-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          {HERO_HEADLINE.split("Não Aceita").map((part, i) =>
            i === 0 ? (
              <span key={i}>
                {part}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Não Aceita
                </span>
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          {HERO_SUBHEADLINE}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
        >
          <Button variant="whatsapp" size="lg" ctaLocation="hero">
            {CTA_WHATSAPP}
          </Button>
          <Button variant="phone" size="lg" ctaLocation="hero">
            {CTA_PHONE}
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.p
          className="mt-6 text-slate-500 text-xs tracking-wide"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          ✓ Orçamento gratuito &nbsp;•&nbsp; ✓ Atendimento rápido &nbsp;•&nbsp; ✓ Garantia real
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-blue-400 transition-colors cursor-pointer"
        onClick={handleScrollDown}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Rolar para baixo"
        initial={false}
        viewport={viewportConfig}
      >
        <ChevronDown className="w-7 h-7" />
      </motion.button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F2140] to-transparent pointer-events-none" />
    </section>
  );
}
