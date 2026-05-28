"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0F2140]" />

      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 md:mb-14">
          <SectionHeading
            badge="Depoimentos"
            title="O que nossos clientes dizem"
            subtitle="A satisfação dos nossos clientes é o nosso maior indicador de qualidade."
          />
          <motion.div 
            className="flex justify-center items-center gap-2 mt-4 text-xs font-semibold text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
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
              className="group relative p-6 md:p-8 rounded-2xl bg-[rgba(10,22,40,0.5)] backdrop-blur-md border border-blue-500/10 hover:border-emerald-500/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.06)]"
            >
              {/* Quote icon & Google Badge */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-blue-500/20" />
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <span className="text-blue-400">G</span>oogle
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
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-slate-800/40 mb-6" />

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center border border-blue-500/20 shrink-0">
                  <span className="text-white text-sm font-bold font-outfit">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-white text-sm font-semibold">
                      {testimonial.name}
                    </p>
                    <span title="Cliente Verificado" className="inline-flex shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-500/10" />
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs mt-0.5">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

