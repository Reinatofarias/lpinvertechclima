"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_INVERTECH } from "@/lib/constants";
import { staggerContainer, staggerItem, fadeInLeft, fadeInRight, viewportConfig } from "@/lib/animations";

export default function WhyInvertech() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A1628]" />

      {/* Decorative glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Diferenciais"
          title="Por que a INVERTECH CLIMA?"
          subtitle="Mais do que uma empresa de ar-condicionado. Somos especialistas em conforto inteligente."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Feature list */}
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {WHY_INVERTECH.map((item) => {
              const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[item.icon] ?? LucideIcons.Circle;

              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="flex gap-4 group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 flex items-center justify-center border border-blue-500/15 group-hover:border-blue-400/30 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg font-outfit mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right: Visual comparison card */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[rgba(15,33,64,0.8)] to-[rgba(10,22,40,0.9)] backdrop-blur-md border border-blue-500/15 shadow-[0_0_40px_rgba(59,130,246,0.08)]">
              {/* Header */}
              <h3 className="text-xl font-bold text-white font-outfit mb-6 text-center">
                Inverter vs. Convencional
              </h3>

              {/* Comparison items */}
              <div className="space-y-4">
                {[
                  { label: "Economia de Energia", inverter: "Até 60%", convencional: "Padrão" },
                  { label: "Ruído", inverter: "Ultra silencioso", convencional: "Barulhento" },
                  { label: "Durabilidade", inverter: "2x maior", convencional: "Padrão" },
                  { label: "Conforto Térmico", inverter: "Temperatura estável", convencional: "Oscila" },
                  { label: "Sustentabilidade", inverter: "Eco-friendly", convencional: "Alto impacto" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-3 gap-3 items-center py-3 border-b border-blue-500/10 last:border-0"
                  >
                    <span className="text-slate-400 text-sm">{row.label}</span>
                    <span className="text-center text-emerald-400 text-sm font-medium bg-emerald-500/10 rounded-lg py-1.5 px-2">
                      {row.inverter}
                    </span>
                    <span className="text-center text-slate-500 text-sm bg-slate-800/50 rounded-lg py-1.5 px-2">
                      {row.convencional}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column headers */}
              <div className="grid grid-cols-3 gap-3 mt-2">
                <span />
                <span className="text-center text-xs text-emerald-400/70 font-semibold uppercase tracking-wider">
                  Inverter ✓
                </span>
                <span className="text-center text-xs text-slate-600 font-semibold uppercase tracking-wider">
                  Convencional
                </span>
              </div>
            </div>

            {/* Background glow for the card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
