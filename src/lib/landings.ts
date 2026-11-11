// ============================================
// INVERTECH CLIMA — Páginas por serviço (sitelinks do Google Ads)
// Cada página usa o mesmo layout da página principal; só muda o topo,
// a mensagem do WhatsApp e o título para o Google.
// ============================================

import { WHATSAPP_NUMBER } from "./constants";

export type LandingConfig = {
  slug: string;
  /** Nome curto do serviço, usado na origem do lead */
  service: string;
  metaTitle: string;
  metaDescription: string;
  /** Título do topo. `highlight` precisa estar contido em `headline` */
  headline: string;
  highlight: string;
  subheadline: string;
  whatsappText: string;
};

export function buildWhatsappUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function serviceWhatsappText(serviceTitle: string): string {
  return `Olá! Vim pelo site e gostaria de um orçamento de ${serviceTitle.toLowerCase()}.`;
}

export const SERVICE_LANDINGS: LandingConfig[] = [
  {
    slug: "instalacao-ar-condicionado-palmas",
    service: "Instalação",
    metaTitle: "Instalação de Ar-Condicionado em Palmas-TO | INVERTECH CLIMA",
    metaDescription:
      "Instalação de ar-condicionado split e inverter em Palmas com acabamento limpo, garantia por escrito e orçamento sem taxa de visita.",
    headline: "Instalação de Ar‑Condicionado em Palmas Com Acabamento Limpo.",
    highlight: "Acabamento Limpo",
    subheadline:
      "Split, inverter e multi-split instalados dentro do padrão do fabricante, com garantia por escrito e sujeira zero na sua casa ou empresa.",
    whatsappText: "Olá! Vim pelo site e gostaria de um orçamento de instalação de ar-condicionado.",
  },
  {
    slug: "higienizacao-ar-condicionado-palmas",
    service: "Higienização",
    metaTitle: "Limpeza e Higienização de Ar-Condicionado em Palmas-TO | INVERTECH CLIMA",
    metaDescription:
      "Limpeza completa do ar-condicionado em Palmas: turbina, serpentina e filtros, com lona coletora e sem sujeira. Orçamento rápido pelo WhatsApp.",
    headline: "Limpeza de Ar‑Condicionado em Palmas Sem Sujeira na Sua Parede.",
    highlight: "Sem Sujeira",
    subheadline:
      "Higienização completa de turbina, serpentina e filtros, com lona coletora e produtos específicos. Ar sem mau cheiro e aparelho gastando menos.",
    whatsappText: "Olá! Vim pelo site e gostaria de um orçamento de limpeza/higienização de ar-condicionado.",
  },
  {
    slug: "manutencao-ar-condicionado-palmas",
    service: "Manutenção",
    metaTitle: "Manutenção de Ar-Condicionado em Palmas-TO | INVERTECH CLIMA",
    metaDescription:
      "Manutenção preventiva e corretiva de ar-condicionado em Palmas. Diagnóstico de defeitos e revisão completa com garantia.",
    headline: "Manutenção de Ar‑Condicionado em Palmas Antes Que Ele Pare.",
    highlight: "Antes Que Ele Pare",
    subheadline:
      "Revisão completa e diagnóstico de defeitos para residências e empresas, com atendimento rápido e garantia documentada.",
    whatsappText: "Olá! Vim pelo site e gostaria de um orçamento de manutenção de ar-condicionado.",
  },
  {
    slug: "conserto-placa-inverter-palmas",
    service: "Placa inverter",
    metaTitle: "Conserto de Placa de Ar-Condicionado Inverter em Palmas-TO | INVERTECH CLIMA",
    metaDescription:
      "Conserto de placa eletrônica de ar-condicionado inverter em Palmas. Diagnóstico com especialista e reparo sem precisar trocar o aparelho.",
    headline: "Conserto de Placa Inverter em Palmas Sem Trocar o Aparelho.",
    highlight: "Sem Trocar o Aparelho",
    subheadline:
      "Diagnóstico e reparo de placas eletrônicas de ar-condicionado inverter com especialista. Muitas vezes sai bem mais barato que comprar outro.",
    whatsappText: "Olá! Vim pelo site e gostaria de um orçamento de conserto de placa inverter.",
  },
];

export function getLanding(slug: string): LandingConfig | undefined {
  return SERVICE_LANDINGS.find((l) => l.slug === slug);
}
