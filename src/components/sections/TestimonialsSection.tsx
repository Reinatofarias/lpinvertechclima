"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { TESTIMONIALS, CTA_WHATSAPP, CTA_PHONE } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 md:mb-14">
          <SectionHeading
            badge="Depoimentos"
            title="O que nossos clientes dizem"
            subtitle="A satisfação dos nossos clientes é o nosso maior indicador de qualidade."
            light={false}
          />
          <motion.div 
            className="flex justify-center items-center gap-2 mt-4 text-xs font-semibold text-slate-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Avaliações coletadas via Google Reviews e auditadas</span>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={staggerItem}
              className="group relative p-6 md:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-emerald-500/30 hover:shadow-[0_20px_40px_rgba(16,185,129,0.04)] transition-all duration-500 hover:-translate-y-1"
            >
              {/* Quote icon & Google Badge */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-blue-500/10" />
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/60 text-[10px] font-bold text-slate-500 uppercase tracking-wider shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <span className="text-blue-600 font-extrabold">G</span>oogle
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-750 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-slate-100 mb-6" />

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-50 to-emerald-50 flex items-center justify-center border border-blue-100 shrink-0">
                  <span className="text-[#0C2D6B] text-sm font-bold font-outfit">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[#0C2D6B] text-sm font-semibold font-outfit">
                      {testimonial.name}
                    </p>
                    <span title="Cliente Verificado" className="inline-flex shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-50" />
                    </span>
                  </div>
                  <p className="text-slate-550 text-xs mt-0.5">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Conversion Block */}
        <motion.div
          id="contato"
          className="mt-16 md:mt-24 max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0A1628] to-[#0F2140] border border-emerald-500/20 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(10,22,40,0.15)]"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Decorative deep glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
              Orçamento Rápido em Palmas
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-white font-outfit mb-4">
              Pronto para ter o máximo conforto com economia?
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
              Fale conosco hoje mesmo. Solicite seu orçamento gratuito sem nenhum compromisso. Atendemos rapidamente em Palmas-TO.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="whatsapp" size="lg" ctaLocation="testimonials-cta" className="w-full sm:w-auto shadow-emerald-500/25">
                {CTA_WHATSAPP}
              </Button>
              <Button variant="phone" size="lg" ctaLocation="testimonials-cta" className="w-full sm:w-auto">
                {CTA_PHONE}
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-450 text-xs">
              {["Sem taxa de visita", "Retorno em até 1h", "Garantia de 1 ano", "Equipe autorizada"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
