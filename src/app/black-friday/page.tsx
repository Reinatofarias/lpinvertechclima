import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCtaMobile from "@/components/layout/StickyCtaMobile";
import WorkGallerySection from "@/components/sections/WorkGallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlackFridayContent from "@/components/blackfriday/BlackFridayContent";
import { BF_WHATSAPP_URL } from "@/lib/blackFriday";

const title = "Black Friday Invertech Clima | 20% OFF em higienização e 30% OFF na instalação em Palmas";
const description =
  "Black Friday em Palmas-TO: 20% de desconto nas higienizações de ar-condicionado e 30% na mão de obra de instalação. Veja o que inclui cada serviço e chame no WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://invertechpalmas.com.br/black-friday" },
  openGraph: {
    title,
    description,
    url: "https://invertechpalmas.com.br/black-friday",
    type: "website",
    locale: "pt_BR",
    siteName: "INVERTECH CLIMA",
  },
};

export default function BlackFridayPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlackFridayContent />
        <WorkGallerySection />
        <TestimonialsSection whatsappUrl={BF_WHATSAPP_URL} locationSuffix="-black-friday" />
      </main>
      <Footer />
      <StickyCtaMobile whatsappUrl={BF_WHATSAPP_URL} />
    </>
  );
}
