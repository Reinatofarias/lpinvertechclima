"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SERVICES, WHATSAPP_NUMBER } from "@/lib/constants";
import { staggerContainer, staggerItem, fadeInLeft, fadeInRight, viewportConfig } from "@/lib/animations";
import { trackCtaClick } from "@/lib/analytics";
import { useLeadModal } from "@/context/LeadModalContext";

export default function ServicesSection() {
  const [bill, setBill] = useState(500); // monthly bill in BRL
  const { openLeadModal, hasCapturedLead } = useLeadModal();
  const savingPercent = 0.60;
  const inverterBill = Math.round(bill * (1 - savingPercent));
  const monthlySaving = bill - inverterBill;
  const yearlySaving = monthlySaving * 12;

  const whatsappMessage = `Olá! Fiz a simulação no site e vi que posso economizar cerca de R$ ${monthlySaving} por mês na conta de luz de Palmas usando ar-condicionado Inverter. Gostaria de um orçamento para minha casa/empresa!`;
  const dynamicWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleSimulateCta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!hasCapturedLead) {
      e.preventDefault();
      openLeadModal(dynamicWhatsappUrl, "simulator-services");
    } else {
      trackCtaClick("whatsapp", "simulator", `Quero economizar R$ ${monthlySaving}/mes`);
    }
  };

  return (
    <section id="servicos" className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Serviços & Economia"
          title="Soluções em Climatização & Simulador Inverter"
          subtitle="Do projeto à manutenção, cuidamos de tudo para você ter o máximo conforto com a melhor eficiência energética."
          light={false}
        />

        {/* Brand Promise / Quality Trust Split Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 md:mb-20">
          
          {/* Left Side: Quality text & Guarantees */}
          <motion.div 
            className="lg:col-span-7 space-y-6 order-2 lg:order-1"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#0C2D6B] font-outfit leading-tight">
              O serviço mais limpo e qualificado de Palmas
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Sabemos que receber um técnico em sua casa ou empresa exige confiança. Por isso, a nossa equipe segue um rigoroso padrão de qualidade de serviço e higienização.
            </p>

            {/* Check points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "Sujeira Zero", desc: "Trabalhamos com coletores de resíduos e limpamos tudo antes de sair." },
                { title: "Reparo de Placas", desc: "Conserto especializado de placas eletrônicas inverter sem precisar comprar outro ar." },
                { title: "Técnicos Credenciados", desc: "Treinados pelos principais fabricantes do mercado nacional." },
                { title: "Garantia por Escrito", desc: "Todos os serviços acompanham laudo e garantia documentada." },
              ].map((point, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 mt-0.5">
                    <LucideIcons.Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-slate-800 text-sm font-semibold font-outfit">{point.title}</h4>
                    <p className="text-slate-500 text-xs mt-0.5">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Trust Image */}
          <motion.div 
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="relative w-full max-w-[380px] aspect-[4/4.5] rounded-3xl overflow-hidden p-2.5 bg-gradient-to-br from-emerald-500/10 to-blue-500/5 border border-emerald-100 shadow-[0_10px_35px_rgba(16,185,129,0.06)]">
              <div className="relative w-full h-full rounded-[18px] overflow-hidden">
                <Image 
                  src="/images/cleaning-service.jpg"
                  alt="Higienização de ar-condicionado com espuma de limpeza profunda da INVERTECH CLIMA"
                  fill
                  sizes="(max-w-768px) 100vw, 380px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
              </div>
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-emerald-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                  <LucideIcons.Sparkles className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-[#0C2D6B] text-xs font-bold font-outfit">Higienização Profissional</h4>
                  <p className="text-[10px] text-slate-500">Elimina 99% de fungos e bactérias</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Services Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16 md:mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {SERVICES.map((service) => {
            const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] ?? LucideIcons.Circle;

            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="group relative p-6 md:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-emerald-500/30 hover:shadow-[0_20px_40px_rgba(16,185,129,0.04)] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Hover subtle tint */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/[0.01] to-blue-500/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-cyan-50 flex items-center justify-center border border-emerald-100 group-hover:border-emerald-200 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-emerald-600 group-hover:text-emerald-500 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-[#0C2D6B] mb-3 font-outfit">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Service CTA */}
                  <Button
                    variant="ghost"
                    size="sm"
                    ctaLocation={`services-${service.title}`}
                    showArrow
                    className="!px-0 text-emerald-600 hover:text-emerald-700 font-semibold"
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Unified Energy Savings Simulator Card */}
        <motion.div
          className="max-w-4xl mx-auto relative w-full"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
            
            {/* Header */}
            <div className="mb-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#0C2D6B] font-outfit mt-2">
                Veja o quanto você economiza na conta de luz de Palmas
              </h3>
              <p className="text-slate-600 text-xs mt-1">
                A tecnologia Inverter reduz o consumo em até 60% em relação aos aparelhos comuns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
              
              {/* Slider Controls */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 text-sm font-medium">Sua conta de luz atual:</span>
                    <span className="text-2xl font-extrabold text-blue-600 font-outfit">
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
                    className="w-full h-2 rounded-lg bg-slate-100 appearance-none cursor-pointer accent-emerald-500"
                    style={{
                      background: `linear-gradient(to right, #10B981 0%, #10B981 ${((bill - 150) / 1350) * 100}%, #E2E8F0 ${((bill - 150) / 1350) * 100}%, #E2E8F0 100%)`
                    }}
                  />
                  
                  <div className="flex justify-between text-[10px] text-slate-450">
                    <span>R$ 150</span>
                    <span>R$ 800</span>
                    <span>R$ 1500</span>
                  </div>
                </div>

                {/* Bars Visual */}
                <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-600">Ar Convencional</span>
                      <span className="text-rose-600">R$ {bill}</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                      <motion.div 
                        className="h-full bg-rose-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-emerald-700">Ar Inverter (Invertech)</span>
                      <span className="text-emerald-600">R$ {inverterBill}</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                        initial={{ width: "0%" }}
                        animate={{ width: "40%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings display and CTA */}
              <div className="flex flex-col justify-between h-full bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200/60">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-[0_4px_20px_rgba(16,185,129,0.03)] text-center">
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider mb-1">
                      Economia Mensal
                    </span>
                    <span className="text-lg md:text-xl font-extrabold text-emerald-600 font-outfit">
                      R$ {monthlySaving}
                    </span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-[0_4px_20px_rgba(16,185,129,0.03)] text-center">
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider mb-1">
                      Economia Anual
                    </span>
                    <span className="text-lg md:text-xl font-extrabold text-emerald-600 font-outfit">
                      R$ {yearlySaving}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={dynamicWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleSimulateCta}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-sm tracking-wide shadow-[0_10px_25px_rgba(16,185,129,0.15)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.25)] cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <LucideIcons.MessageCircle className="w-5 h-5 shrink-0" />
                    <span>Quero economizar R$ {monthlySaving}/mês</span>
                  </a>
                  <p className="text-[9px] text-slate-400 mt-2.5">
                    *Cálculo baseado na diferença média de consumo de energia de Palmas.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Background glow for the card */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/[0.02] to-emerald-500/[0.02] rounded-3xl blur-2xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
}
