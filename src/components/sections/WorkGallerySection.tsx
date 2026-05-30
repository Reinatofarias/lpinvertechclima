"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle, Play } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const GALLERY_ITEMS = [
  {
    type: "video",
    src: "/images/video-1.mp4",
    title: "Limpeza Técnica de Evaporadora",
    description: "Higienização interna completa da turbina e serpentina do ar-condicionado split utilizando jato de água de alta pressão e produtos biodegradáveis específicos.",
    badge: "Limpeza Prática"
  },
  {
    type: "image",
    src: "/images/service-foam.jpg",
    title: "Ação Química Desinfetante",
    description: "Aplicação de espuma química antibactericida de alta densidade nas aletas do evaporador, eliminando com precisão ácaros, fungos e odores desagradáveis.",
    badge: "Higienização"
  },
  {
    type: "video",
    src: "/images/video-2.mp4",
    title: "Inspeção e Montagem do Equipamento",
    description: "Inspeção técnica detalhada e finalização de montagem da carenagem de evaporadora split garantindo o acabamento estético original.",
    badge: "Manutenção Premium"
  },
  {
    type: "video",
    src: "/images/video-3.mp4",
    title: "Sistema Sujeira Zero",
    description: "Uso obrigatório de lona coletora de resíduos conectada a dreno durante toda a lavagem do ar-condicionado. Proteção absoluta para sua parede e móveis.",
    badge: "Tecnologia & Cuidado"
  },
  {
    type: "image",
    src: "/images/service-install-1.jpg",
    title: "Ajuste Técnico Premium",
    description: "Eduardo finalizando a fixação e montagem de uma unidade split inverter de última geração com alinhamento a laser em Palmas.",
    badge: "Instalação Premium"
  },
  {
    type: "video",
    src: "/images/video-4.mp4",
    title: "Lavagem de Turbina Centrifugadora",
    description: "Remoção de camadas profundas de poeira e mofo acumuladas na turbina de ventilação, recuperando o fluxo de ar 100% forte e saudável.",
    badge: "Ar Puro"
  },
  {
    type: "video",
    src: "/images/video-5.mp4",
    title: "Higienização Profunda",
    description: "Demonstração técnica da aplicação de jato sob pressão na serpentina do ar-condicionado inverter para máxima performance e economia.",
    badge: "Eficiência Térmica"
  },
  {
    type: "video",
    src: "/images/video-6.mp4",
    title: "Instalação Residencial Limpa",
    description: "Processo de fixação da evaporadora em ambiente residencial, trabalhando com extremo cuidado para manter todo o espaço limpo.",
    badge: "Instalação"
  },
  {
    type: "video",
    src: "/images/video-7.mp4",
    title: "Revisão e Limpeza Geral",
    description: "Trabalho técnico minucioso de higienização de filtros e serpentinas para evitar o superaquecimento do compressor e reduzir a conta de luz.",
    badge: "Economia Real"
  }
];

export default function WorkGallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Autoplay is disabled when a video is playing, but we can have a slower timer for items
  useEffect(() => {
    // If current item is image, we can autoplay. If video, let it play out.
    if (GALLERY_ITEMS[currentIndex].type === "image") {
      const timer = setInterval(() => {
        handleNext();
      }, 7000);
      return () => clearInterval(timer);
    }
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % GALLERY_ITEMS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
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
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
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
            badge="Vídeos & Fotos Reais"
            title="Nosso Trabalho em Vídeo e Foto"
            subtitle="Confira nosso padrão de qualidade com registros reais e em alta definição de serviços executados pela Eduardo InverterTech."
            light={false}
          />
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_15px_50px_rgba(0,0,0,0.03)] overflow-hidden">
            
            {/* Media Slider Column (7 cols) */}
            <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 group">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                  {GALLERY_ITEMS[currentIndex].type === "video" ? (
                    <video
                      key={GALLERY_ITEMS[currentIndex].src}
                      src={GALLERY_ITEMS[currentIndex].src}
                      className="w-full h-full object-cover object-center"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={GALLERY_ITEMS[currentIndex].src}
                        alt={GALLERY_ITEMS[currentIndex].title}
                        fill
                        sizes="(max-w-1024px) 100vw, 600px"
                        className="object-cover object-center select-none"
                        priority
                      />
                    </div>
                  )}
                  {/* Elegant dark gradient overlay for bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/30 to-transparent pointer-events-none" />
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
              <div className="absolute top-4 left-4 z-20 px-3.5 py-2 rounded-full bg-emerald-600/90 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                {GALLERY_ITEMS[currentIndex].type === "video" ? (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current text-white shrink-0 animate-pulse" />
                    <span>Vídeo Real</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>Foto Real</span>
                  </>
                )}
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
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {GALLERY_ITEMS[currentIndex].badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0C2D6B] font-outfit leading-tight">
                    {GALLERY_ITEMS[currentIndex].title}
                  </h3>

                  <p className="text-slate-655 text-sm leading-relaxed">
                    {GALLERY_ITEMS[currentIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicator dots & index display */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                  {GALLERY_ITEMS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "w-5 bg-emerald-500" : "w-2 bg-slate-200 hover:bg-slate-350"
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <span className="text-xs font-semibold text-slate-400 font-outfit whitespace-nowrap">
                  0{currentIndex + 1} / 0{GALLERY_ITEMS.length}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
