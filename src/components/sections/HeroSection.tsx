"use client";

import { motion } from "framer-motion";
import { ChevronDown, Star, CheckCircle, Shield, Clock } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Button from "@/components/ui/Button";
import {
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  CTA_WHATSAPP,
  CTA_PHONE,
  GOOGLE_REVIEWS_URL,
} from "@/lib/constants";
import { fadeInUp, viewportConfig } from "@/lib/animations";

const ParticlesBackground = dynamic(
  () => import("@/components/effects/ParticlesBackground"),
  { ssr: false }
);

interface HeroSectionProps {
  headline?: string;
  highlight?: string;
  subheadline?: string;
  whatsappUrl?: string;
  locationSuffix?: string;
}

export default function HeroSection({
  headline = HERO_HEADLINE,
  highlight = "Não Aceita",
  subheadline = HERO_SUBHEADLINE,
  whatsappUrl,
  locationSuffix = "",
}: HeroSectionProps = {}) {
  const handleScrollDown = () => {
    const element = document.querySelector("#servicos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative lg:min-h-[90vh] xl:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 md:py-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#FFFFFF]" />



      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center">
            


            {/* Headline - Using original #0C2D6B brand blue */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#0C2D6B] leading-[1.1] tracking-tight font-outfit mb-6"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              {headline.split(highlight).map((part, i) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <span className="text-[#1A5BD8] block sm:inline mt-1 sm:mt-0">
                      {highlight}
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
              {subheadline}
            </motion.p>

            {/* Quick Conversion Badges (Google Traffic) */}
            <motion.div
              className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0 mb-7 sm:mb-8 text-left"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.25 }}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
                <Clock className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-800 text-xs font-bold font-outfit leading-tight">Orçamento rápido</h4>
                  <p className="text-[11px] text-slate-500">Em até 1 hora</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-800 text-xs font-bold font-outfit leading-tight">Garantia real</h4>
                  <p className="text-[11px] text-slate-500">Em todos os serviços</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-800 text-xs font-bold font-outfit leading-tight">Autorizada</h4>
                  <p className="text-[11px] text-slate-500">Equipe qualificada</p>
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
              <Button variant="whatsapp" size="lg" href={whatsappUrl} ctaLocation={`hero${locationSuffix}`} className="w-full sm:w-auto shadow-emerald-500/10">
                {CTA_WHATSAPP}
              </Button>
              <Button variant="phone" size="lg" ctaLocation={`hero${locationSuffix}`} className="w-full sm:w-auto">
                {CTA_PHONE}
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-5 flex flex-col items-center lg:items-start gap-2"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.35 }}
            >
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-sm text-slate-700 hover:text-blue-700 transition-colors"
              >
                <span className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span>
                  <strong className="font-semibold text-slate-900">4,9 no Google</strong> · <span className="whitespace-nowrap">+400 clientes em Palmas</span>
                </span>
              </a>
              <p className="text-slate-500 text-xs tracking-wide">
                ✓ Sem taxa de visita técnica para orçamentos em Palmas-TO
              </p>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition */}
          <motion.div
            className="lg:col-span-5 relative w-full flex items-center justify-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            {/* Dynamic Glass Container (removed overflow-hidden to allow badges to float over border) */}
            <div className="relative w-full max-w-[450px] aspect-[16/11] sm:aspect-[4/4.5] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
              
              {/* Inner Wrapper */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/service-install-1.jpg"
                  alt="Instalação Premium de Ar-Condicionado Inverter pela INVERTECH CLIMA em Palmas"
                  fill
                  sizes="(max-w-768px) 100vw, 450px"
                  priority
                  className="object-cover object-[center_30%]"
                />
                
                {/* Visual overlays */}
              </div>

              {/* Legenda real da foto */}
              <div className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-slate-900/75 to-transparent">
                <p className="text-white text-xs sm:text-sm font-medium">Eduardo, técnico da Invertech, em instalação em Palmas</p>
              </div>

            </div>

          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="hidden lg:block absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
        onClick={handleScrollDown}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Rolar para baixo"
        initial={false}
        viewport={viewportConfig}
      >
        <ChevronDown className="w-7 h-7" />
      </motion.button>

          </section>
  );
}

