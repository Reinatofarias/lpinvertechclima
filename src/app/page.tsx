import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCtaMobile from "@/components/layout/StickyCtaMobile";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkGallerySection from "@/components/sections/WorkGallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Sessão 1: Hero Visual & Trust Indicators */}
        <HeroSection />
        
        {/* Sessão 2: Serviços & Simulador de Economia Inverter */}
        <ServicesSection />

        {/* Sessão 3: Galeria de Trabalho Real da InverterTech */}
        <WorkGallerySection />
        
        {/* Sessão 4: Prova Social Google & Oferta / CTA Final */}
        <TestimonialsSection />
      </main>
      <Footer />
      <StickyCtaMobile />
    </>
  );
}

