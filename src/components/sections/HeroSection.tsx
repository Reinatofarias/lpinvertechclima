"use client";

import { motion } from "framer-motion";
import { ChevronDown, Star, CheckCircle, Shield, Clock } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Button from "@/components/ui/Button";
import GlowOrb from "@/components/effects/GlowOrb";
import {
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  CTA_WHATSAPP,
  CTA_PHONE,
} from "@/lib/constants";
import { fadeInUp, floatAnimation, viewportConfig } from "@/lib/animations";

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
      className="relative min-h-screen lg:min-h-[90vh] xl:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:py-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#FFFFFF]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Subtle Glow orbs (reduced opacity for light theme) */}
      <GlowOrb color="blue" size="lg" position="top-[-200px] left-1/3 -translate-x-1/2" className="opacity-30" />
      <GlowOrb color="green" size="md" position="top-[30%] right-[-100px]" delay={2} className="opacity-20" />
      <GlowOrb color="cyan" size="sm" position="bottom-[20%] left-[-50px]" delay={4} className="opacity-25" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center">
            
            {/* Google trust badge */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex justify-center lg:justify-start mb-6"
            >
              <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-[0_2px_10px_rgba(37,99,235,0.03)] backdrop-blur-md">
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-slate-600 text-xs font-semibold">
                  Google Rating 4.9★ <span className="text-slate-300">•</span> +400 Clientes em Palmas
                </span>
              </div>
            </motion.div>

            {/* Badge Local */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.05 }}
              className="mb-4 flex justify-center lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Atendimento Rápido em Palmas
              </span>
            </motion.div>

            {/* Headline - Using original #0C2D6B brand blue */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#0C2D6B] leading-[1.1] tracking-tight font-outfit mb-6"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              {HERO_HEADLINE.split("Não Aceita").map((part, i) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0">
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
              className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              {HERO_SUBHEADLINE}
            </motion.p>

            {/* Quick Conversion Badges (Google Traffic) */}
            <motion.div
              className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 mb-8 text-left"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.25 }}
            >
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
                <Clock className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-800 text-xs font-bold font-outfit">Orçamento rápido</h4>
                  <p className="text-[10px] text-slate-500">Em até 1 hora</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-800 text-xs font-bold font-outfit">Garantia real</h4>
                  <p className="text-[10px] text-slate-500">Em todos os serviços</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-800 text-xs font-bold font-outfit">Autorizada</h4>
                  <p className="text-[10px] text-slate-500">Equipe qualificada</p>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <Button variant="whatsapp" size="lg" ctaLocation="hero" className="w-full sm:w-auto shadow-emerald-500/10">
                {CTA_WHATSAPP}
              </Button>
              <Button variant="phone" size="lg" ctaLocation="hero" className="w-full sm:w-auto">
                {CTA_PHONE}
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.p
              className="mt-5 text-slate-500 text-xs tracking-wide"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.35 }}
            >
              ✓ Sem taxa de visita técnica para orçamentos em Palmas-TO
            </motion.p>
          </div>

          {/* Right Column: Visual Composition */}
          <motion.div
            className="lg:col-span-5 relative w-full flex items-center justify-center mt-6 lg:mt-0"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            {/* Dynamic Glass Container */}
            <div className="relative group w-full max-w-[450px] aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5] rounded-[32px] overflow-hidden p-3 bg-gradient-to-br from-blue-500/5 via-cyan-500/0 to-emerald-500/5 border border-slate-200 shadow-[0_15px_50px_rgba(0,0,0,0.05)] transition-all duration-700 hover:border-emerald-500/25">
              
              {/* Inner Wrapper */}
              <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                <Image
                  src="/images/hero-ac.png"
                  alt="Instalação Premium de Ar-Condicionado Inverter INVERTECH CLIMA"
                  fill
                  sizes="(max-w-768px) 100vw, 450px"
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent mix-blend-overlay" />
              </div>

              {/* Floating Economy Badge */}
              <motion.div
                className="absolute top-8 -left-6 bg-white/95 backdrop-blur-md border border-emerald-100 rounded-2xl p-3.5 shadow-2xl flex items-center gap-3"
                animate={floatAnimation}
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <span className="text-emerald-600 font-extrabold text-sm font-outfit">60%</span>
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold text-xs font-outfit leading-tight">Economia Real</h4>
                  <p className="text-[10px] text-slate-500">Tecnologia Inverter</p>
                </div>
              </motion.div>

              {/* Floating Experience Badge */}
              <motion.div
                className="absolute bottom-10 -right-6 bg-white/95 backdrop-blur-md border border-blue-100 rounded-2xl p-3.5 shadow-2xl flex items-center gap-3"
                animate={{
                  y: [0, 8, 0],
                  transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-blue-500 fill-current" />
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold text-xs font-outfit leading-tight">Serviço Autorizado</h4>
                  <p className="text-[10px] text-slate-500">Garantia Documentada</p>
                </div>
              </motion.div>
            </div>

            {/* Behind the image decorative background glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/5 via-cyan-500/0 to-emerald-500/5 rounded-[40px] blur-3xl -z-10 opacity-70" />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
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
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

