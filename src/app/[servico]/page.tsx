import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/layout/LandingPage";
import { SERVICE_LANDINGS, getLanding } from "@/lib/landings";

// Só as páginas de serviço listadas existem; qualquer outro endereço dá 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_LANDINGS.map((l) => ({ servico: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ servico: string }>;
}): Promise<Metadata> {
  const { servico } = await params;
  const landing = getLanding(servico);
  if (!landing) return {};
  return {
    title: landing.metaTitle,
    description: landing.metaDescription,
    alternates: { canonical: `https://invertechpalmas.com.br/${landing.slug}` },
    openGraph: {
      title: landing.metaTitle,
      description: landing.metaDescription,
      type: "website",
      locale: "pt_BR",
      siteName: "INVERTECH CLIMA",
    },
  };
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ servico: string }>;
}) {
  const { servico } = await params;
  const landing = getLanding(servico);
  if (!landing) notFound();
  return <LandingPage landing={landing} />;
}
