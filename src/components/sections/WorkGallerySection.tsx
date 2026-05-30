"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { viewportConfig } from "@/lib/animations";

const GALLERY_IMAGES = [
  {
    src: "/images/service-foam.jpg",
    title: "Limpeza Química Profunda",
    description: "Aplicação de espuma antibactericida de alta densidade na evaporadora, garantindo a eliminação de 99.9% de fungos e bactérias sem danificar o aparelho.",
    badge: "Higienização"
  },
  {
    src: "/images/service-install-1.jpg",
    title: "Ajuste Técnico de Alta Precisão",
    description: "Inspeção de placas eletrônicas e conexões estruturais durante a montagem do ar-condicionado, garantindo o padrão original do fabricante.",
    badge: "Instalação"
  },
  {
    src: "/images/service-hygiene-1.jpg",
    title: "Manutenção Preventiva Residencial",
    description: "Higienização completa utilizando coletor de resíduos (sujeira zero), mantendo o ambiente limpo e organizado durante todo o processo.",
    badge: "Limpeza Preventiva"
  },
  {
    src: "/images/service-install-2.jpg",
    title: "Instalação de Alta Performance",
    description: "Fixação e alinhamento milimétrico de aparelhos modernos com tecnologia Inverter, otimizando o fluxo de ar e a economia de energia.",
    badge: "Instalação Premium"
  }
];

export default function WorkGallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % GALLERY_IMAGES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  // Animation variants for sliding effect
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-slate-50 border-y border-slate-200/60">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 md:mb-16">
          <SectionHeading
            badge="Nossos Serviços"
            title="Nosso Trabalho na Prática"
            subtitle="Veja registros reais de instalações, higienizações e manutenções realizadas pela Eduardo InverterTech em Palmas-TO."
            light={false}
          />
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_15px_50px_rgba(0,0,0,0.03)] overflow-hidden">
            
            {/* Image Slider Column (7 cols) */}
            <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 group">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={GALLERY_IMAGES[currentIndex].src}
                    alt={GALLERY_IMAGES[currentIndex].title}
                    fill
                    sizes="(max-w-1024px) 100vw, 600px"
                    className="object-cover object-center select-none"
                    priority
                  />
                  {/* Elegant dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows (desktop visible, hidden on tap/mobile to rely on custom buttons or dots) */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-800 shadow-md hover:bg-white hover:text-emerald-600 hover:scale-105 active:scale-95 transition-all pointer-events-auto cursor-pointer"
                  title="Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-800 shadow-md hover:bg-white hover:text-emerald-600 hover:scale-105 active:scale-95 transition-all pointer-events-auto cursor-pointer"
                  title="Próximo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Active Badge Overlay */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-emerald-600/90 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {GALLERY_IMAGES[currentIndex].badge}
              </div>
            </div>

            {/* Content Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-5 lg:pl-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 text-emerald-600">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Trabalho 100% Real</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0C2D6B] font-outfit leading-tight">
                    {GALLERY_IMAGES[currentIndex].title}
                  </h3>

                  <p className="text-slate-650 text-sm leading-relaxed">
                    {GALLERY_IMAGES[currentIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicator dots & index display */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex gap-2">
                  {GALLERY_IMAGES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "w-6 bg-emerald-500" : "w-2 bg-slate-200 hover:bg-slate-350"
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <span className="text-xs font-semibold text-slate-400 font-outfit">
                  0{currentIndex + 1} / 0{GALLERY_IMAGES.length}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
