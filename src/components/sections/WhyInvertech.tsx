"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_INVERTECH, WHATSAPP_NUMBER } from "@/lib/constants";
import { staggerContainer, staggerItem, fadeInRight, viewportConfig } from "@/lib/animations";
import { trackCtaClick } from "@/lib/analytics";

export default function WhyInvertech() {
  const [bill, setBill] = useState(500); // monthly bill in BRL
  const savingPercent = 0.60;
  const inverterBill = Math.round(bill * (1 - savingPercent));
  const monthlySaving = bill - inverterBill;
  const yearlySaving = monthlySaving * 12;

  const handleSimulateCta = () => {
    trackCtaClick("whatsapp", "simulator", `Quero economizar R$ ${monthlySaving}/mes`);
  };

  const whatsappMessage = `Olá! Fiz a simulação no site e vi que posso economizar cerca de R$ ${monthlySaving} por mês na conta de luz de Palmas usando ar-condicionado Inverter. Gostaria de um orçamento para minha casa/empresa!`;
  const dynamicWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="diferenciais" className="relative py-20 md:py-28 overflow-hidden">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left: Feature list */}
          <motion.div
            className="lg:col-span-6 space-y-6"
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

          {/* Right: Interactive energy saving simulator */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-6 relative w-full"
          >
            <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[rgba(15,33,64,0.8)] to-[rgba(10,22,40,0.9)] backdrop-blur-md border border-blue-500/15 shadow-[0_0_40px_rgba(59,130,246,0.08)]">
              
              {/* Header */}
              <div className="mb-6 text-center">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[10px] font-bold tracking-wider uppercase">
                  Simulador de Economia
                </span>
                <h3 className="text-xl font-bold text-white font-outfit mt-2">
                  Calcule sua economia de energia
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  Ar-condicionado Inverter vs. Convencional
                </p>
              </div>

              {/* Slider Input */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm font-medium">Sua conta de luz hoje:</span>
                  <span className="text-xl font-extrabold text-blue-400 font-outfit">
                    R$ {bill} <span className="text-xs text-slate-500 font-normal">/mês</span>
                  </span>
                </div>
                
                <input
                  type="range"
                  min="150"
                  max="1500"
                  step="50"
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-800 appearance-none cursor-pointer accent-emerald-400"
                  style={{
                    background: `linear-gradient(to right, #10B981 0%, #10B981 ${((bill - 150) / 1350) * 100}%, #1E293B ${((bill - 150) / 1350) * 100}%, #1E293B 100%)`
                  }}
                />
                
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>R$ 150</span>
                  <span>R$ 800</span>
                  <span>R$ 1500</span>
                </div>
              </div>

              {/* Visual Bars Comparison */}
              <div className="space-y-4 mb-8 bg-slate-900/40 p-4 rounded-2xl border border-slate-800/40">
                {/* Traditional Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Ar Convencional</span>
                    <span className="text-rose-400">R$ {bill}</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div 
                      className="h-full bg-rose-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Inverter Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-emerald-300">Ar Inverter (Invertech Clima)</span>
                    <span className="text-emerald-400">R$ {inverterBill}</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                      initial={{ width: "0%" }}
                      animate={{ width: "40%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>

              {/* Savings Results */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-3 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 text-center">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider mb-1">
                    Economia Mensal
                  </span>
                  <span className="text-lg md:text-xl font-extrabold text-emerald-400 font-outfit">
                    R$ {monthlySaving}
                  </span>
                </div>
                <div className="p-3 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 text-center">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider mb-1">
                    Economia Anual
                  </span>
                  <span className="text-lg md:text-xl font-extrabold text-emerald-400 font-outfit">
                    R$ {yearlySaving}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href={dynamicWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleSimulateCta}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] cursor-pointer select-none transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <LucideIcons.MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Quero economizar R$ {monthlySaving}/mês</span>
                </a>
                <p className="text-[10px] text-slate-500 mt-3">
                  *Cálculo aproximado considerando a eficiência energética da tecnologia Inverter.
                </p>
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

