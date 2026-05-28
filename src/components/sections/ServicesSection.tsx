"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SERVICES, CTA_WHATSAPP } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

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
          <Button variant="whatsapp" size="lg" ctaLocation="services">
            {CTA_WHATSAPP}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
