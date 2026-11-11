import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCtaMobile from "@/components/layout/StickyCtaMobile";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkGallerySection from "@/components/sections/WorkGallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { buildWhatsappUrl, type LandingConfig } from "@/lib/landings";

/**
 * Layout único da página de vendas. A página principal usa sem `landing`;
 * as páginas de serviço (sitelinks) trocam só o topo e a mensagem do WhatsApp.
 */
export default function LandingPage({ landing }: { landing?: LandingConfig }) {
  const whatsappUrl = landing ? buildWhatsappUrl(landing.whatsappText) : undefined;
  const locationSuffix = landing ? `-${landing.slug}` : "";

  return (
    <>
      <Navbar />
      <main>
        {/* Sessão 1: Hero Visual & Trust Indicators */}
        <HeroSection
          headline={landing?.headline}
          highlight={landing?.highlight}
          subheadline={landing?.subheadline}
          whatsappUrl={whatsappUrl}
          locationSuffix={locationSuffix}
        />

        {/* Sessão 2: Serviços & Simulador de Economia Inverter */}
        <ServicesSection />

        {/* Sessão 3: Galeria de Trabalho Real da InverterTech */}
        <WorkGallerySection />

        {/* Sessão 4: Prova Social Google & Oferta / CTA Final */}
        <TestimonialsSection whatsappUrl={whatsappUrl} locationSuffix={locationSuffix} />
      </main>
      <Footer />
      <StickyCtaMobile whatsappUrl={whatsappUrl} />
    </>
  );
}
