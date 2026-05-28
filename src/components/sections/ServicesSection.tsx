"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SERVICES, CTA_WHATSAPP } from "@/lib/constants";
import { staggerContainer, staggerItem, fadeInLeft, fadeInRight, viewportConfig } from "@/lib/animations";

export default function ServicesSection() {
  return (
    <section id="servicos" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0F2140]" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Serviços"
          title="Soluções Completas em Climatização"
          subtitle="Do projeto à manutenção, cuidamos de tudo para você ter o máximo conforto com a melhor eficiência."
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              Compromisso Invech
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white font-outfit leading-tight">
              O serviço mais limpo e qualificado de Palmas
            </h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Sabemos que receber um técnico em sua casa ou empresa exige confiança. Por isso, a nossa equipe segue um rigoroso padrão de qualidade de serviço e higienização.
            </p>

            {/* Check points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "Sujeira Zero", desc: "Trabalhamos com coletores de resíduos e limpamos tudo antes de sair." },
                { title: "Técnicos Credenciados", desc: "Treinados pelos principais fabricantes do mercado nacional." },
                { title: "Pontualidade Rigorosa", desc: "Respeitamos seu tempo com horários agendados e sem atrasos." },
                { title: "Garantia por Escrito", desc: "Todos os serviços acompanham laudo e garantia documentada." },
              ].map((point, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 mt-0.5">
                    <LucideIcons.Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold font-outfit">{point.title}</h4>
                    <p className="text-slate-400 text-xs mt-0.5">{point.desc}</p>
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
            <div className="relative w-full max-w-[380px] aspect-[4/4.5] rounded-3xl overflow-hidden p-2.5 bg-gradient-to-br from-emerald-500/15 to-blue-500/10 border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
              <div className="relative w-full h-full rounded-[18px] overflow-hidden">
                <Image 
                  src="/images/technician.png"
                  alt="Técnico INVERTECH CLIMA higienizando ar-condicionado em Palmas"
                  fill
                  sizes="(max-w-768px) 100vw, 380px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2140]/90 via-[#0F2140]/10 to-transparent" />
              </div>
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-sm border border-emerald-500/20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <LucideIcons.Sparkles className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold font-outfit">Higienização Profissional</h4>
                  <p className="text-[10px] text-slate-400">Elimina 99% de fungos e bactérias</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Services Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
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
                className="group relative p-6 md:p-8 rounded-2xl bg-[rgba(10,22,40,0.6)] backdrop-blur-md border border-blue-500/10 hover:border-emerald-500/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 flex items-center justify-center border border-emerald-500/10 group-hover:border-emerald-400/25 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-3 font-outfit">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Service CTA */}
                  <Button
                    variant="ghost"
                    size="sm"
                    ctaLocation={`services-${service.title}`}
                    showArrow
                    className="!px-0 text-emerald-400 hover:text-emerald-300"
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Button variant="whatsapp" size="lg" ctaLocation="services" className="shadow-emerald-500/25">
            {CTA_WHATSAPP}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

