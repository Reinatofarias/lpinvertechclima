import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCtaMobile from "@/components/layout/StickyCtaMobile";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofBar from "@/components/sections/SocialProofBar";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyInvertech from "@/components/sections/WhyInvertech";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <BenefitsSection />
        <ServicesSection />
        <WhyInvertech />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <StickyCtaMobile />
    </>
  );
}
