import type { Metadata } from "next";
import { 
  Check, 
  X, 
  ChevronDown, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Building2, 
  ClipboardList, 
  Users, 
  FileText,
  AlertTriangle,
  Zap,
  HelpCircle,
  PhoneCall,
  Search
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import StickyCtaMobile from "@/components/layout/StickyCtaMobile";
import { PMOC_WHATSAPP_URL, PHONE_URL, PHONE_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "PMOC em Palmas-TO para Empresas | Invertech Clima",
  description:
    "Organize a manutenção dos equipamentos da sua empresa com PMOC em Palmas-TO. Levantamento, planejamento, registros e acompanhamento da climatização.",
  alternates: {
    canonical: "https://invertechpalmas.com.br/pmoc-palmas",
  },
  openGraph: {
    title: "PMOC em Palmas-TO para Empresas | Invertech Clima",
    description:
      "Organize a manutenção dos equipamentos da sua empresa com PMOC em Palmas-TO. Levantamento, planejamento, registros e acompanhamento da climatização.",
    url: "https://invertechpalmas.com.br/pmoc-palmas",
    type: "website",
    locale: "pt_BR",
    siteName: "INVERTECH CLIMA",
  },
};

export default function PMOCPage() {
  return (
    <>
      <Navbar />
      
      <main className="flex-grow pt-16 md:pt-20 font-inter text-slate-700 bg-white">
        
        {/* ============================================
           1. HERO SECTION
           ============================================ */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 md:py-24 lg:py-28 border-b border-slate-100">
          {/* Subtle background grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,23,42,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Hero content */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tight font-outfit text-[#0C2D6B] mb-6">
                  Sua empresa não deveria esperar o ar-condicionado quebrar para começar a cuidar dele
                </h1>
                
                <p className="text-base sm:text-lg text-slate-650 font-medium leading-relaxed mb-6">
                  Com o PMOC, sua empresa organiza as manutenções, registra os serviços realizados e acompanha os equipamentos antes que pequenas falhas se transformem em paralisações, gastos inesperados e problemas no ambiente.
                </p>

                <p className="text-sm sm:text-base text-slate-550 leading-relaxed mb-8">
                  A Invertech Clima realiza o levantamento dos equipamentos, organiza o plano de manutenção e acompanha a execução dos serviços em empresas de Palmas e região.
                </p>

                {/* Quick features checklist */}
                <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0 mb-8 text-left">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">Manutenção programada</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">Histórico dos equipamentos</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">Menos chamados emergenciais</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">Mais controle sobre os custos</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button
                    variant="whatsapp"
                    size="lg"
                    ctaLocation="pmoc-hero-primary"
                    href={PMOC_WHATSAPP_URL}
                    className="w-full sm:w-auto shadow-emerald-500/10"
                  >
                    Quero avaliar minha empresa
                  </Button>
                  <Button
                    variant="whatsapp"
                    size="lg"
                    ctaLocation="pmoc-hero-secondary"
                    href={PMOC_WHATSAPP_URL}
                    className="w-full sm:w-auto bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-none hover:shadow-none"
                  >
                    Falar com a Invertech
                  </Button>
                </div>
              </div>

              {/* Visual Tech Panel (Textual Trust Indicators / Minimal UI) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-[0_15px_40px_rgba(15,23,42,0.06)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
                  
                  <h3 className="font-outfit font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                    Manutenção Profissional
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-150 flex items-start gap-3">
                      <Clock className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-slate-800 text-xs font-bold font-outfit">Atendimento Programado</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">Visitas técnicas agendadas sem interromper sua operação comercial.</p>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-150 flex items-start gap-3">
                      <ClipboardList className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-slate-800 text-xs font-bold font-outfit">Histórico Organizado</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">Ficha técnica e histórico de higienização de cada equipamento.</p>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-150 flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-slate-800 text-xs font-bold font-outfit">Foco no Seu Negócio</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">Nossa equipe gerencia a manutenção preventiva para você focar na sua empresa.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-slate-550 text-xs font-semibold">
                    <span>Invertech Clima Palmas</span>
                    <span>Técnicos Certificados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
           2. FAIXA DE CONFIANÇA (TRUST BAR)
           ============================================ */}
        <section className="bg-slate-900 text-white py-8 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <span className="text-emerald-400 font-bold text-sm md:text-base font-outfit">Atendimento empresarial</span>
              </div>
              <div className="flex flex-col items-center border-l border-slate-800">
                <span className="text-emerald-400 font-bold text-sm md:text-base font-outfit">Planejamento preventivo</span>
              </div>
              <div className="flex flex-col items-center border-l border-slate-800">
                <span className="text-emerald-400 font-bold text-sm md:text-base font-outfit">Registro das manutenções</span>
              </div>
              <div className="flex flex-col items-center border-l border-slate-800">
                <span className="text-emerald-400 font-bold text-sm md:text-base font-outfit">Atendimento em Palmas e região</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
           3. SEÇÃO DO PROBLEMA
           ============================================ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight font-outfit text-[#0C2D6B]">
                O problema não começa quando o ar-condicionado para
              </h2>
            </div>
            
            <div className="space-y-6 text-slate-650 leading-relaxed text-base md:text-lg">
              <p>
                Quando um equipamento deixa de funcionar, a empresa normalmente já perdeu tempo.
              </p>
              <p>
                Antes da parada, ele pode ter consumido mais energia, trabalhado com sujeira acumulada, apresentado pequenas falhas, perdido rendimento e prejudicado o conforto de clientes e colaboradores.
              </p>
              <p>
                Sem um plano de manutenção, cada aparelho vira um problema isolado. A empresa deixa de saber com clareza:
              </p>

              {/* Checklist list of problems */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 text-left font-medium text-slate-700">
                <li className="flex items-start gap-2.5">
                  <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Quando foi realizada a última manutenção;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Quais equipamentos apresentam falhas recorrentes;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>O que precisa ser corrigido primeiro;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Quais serviços foram realmente executados;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Quanto poderá gastar nos próximos meses;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Se os registros estão organizados.</span>
                </li>
              </ul>
            </div>

            {/* Block highlight */}
            <div className="mt-8 p-6 bg-rose-50 rounded-2xl border border-rose-100 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
              <p className="font-outfit font-bold text-rose-950 text-base md:text-lg leading-snug">
                Manutenção sem planejamento quase sempre custa mais do que manutenção programada.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
           4. SEÇÃO DE EXPLICAÇÃO DO PMOC
           ============================================ */}
        <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight font-outfit text-[#0C2D6B]">
                PMOC não é apenas um documento para guardar
              </h2>
            </div>
            
            <div className="space-y-6 text-slate-650 leading-relaxed text-base md:text-lg">
              <p>
                PMOC significa Plano de Manutenção, Operação e Controle.
              </p>
              <p>
                Na prática, ele organiza os equipamentos, define as atividades de manutenção, estabelece periodicidades e registra os serviços realizados.
              </p>
              <p>
                Mas o documento sozinho não resolve. O valor está em transformar o plano em uma rotina executada, registrada e acompanhada.
              </p>
              <p>
                A Invertech ajuda sua empresa a sair do improviso e construir um processo de manutenção mais previsível.
              </p>
            </div>

            {/* Block highlight */}
            <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-4">
              <FileText className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
              <p className="font-outfit font-bold text-blue-950 text-base md:text-lg leading-snug">
                Um plano guardado sem execução não impede falhas, não cria histórico e não melhora a manutenção dos equipamentos.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
           5. SEÇÃO DE VALOR (BENEFITS)
           ============================================ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight font-outfit text-[#0C2D6B]">
                Você passa a saber o que tem, o que precisa ser feito e quando agir
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Benefit 1 */}
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">Equipamentos mapeados</h3>
                  <p className="text-sm text-slate-550 leading-relaxed">
                    Identificação dos aparelhos, capacidades, localização e condições encontradas.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">Manutenção planejada</h3>
                  <p className="text-sm text-slate-550 leading-relaxed">
                    Definição das atividades e periodicidades de acordo com a estrutura da empresa.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">Serviços registrados</h3>
                  <p className="text-sm text-slate-550 leading-relaxed">
                    Histórico das manutenções, ocorrências e necessidades identificadas.
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">Problemas encontrados antes da parada</h3>
                  <p className="text-sm text-slate-550 leading-relaxed">
                    Falhas e necessidades de correção podem ser percebidas durante o acompanhamento preventivo.
                  </p>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">Custos mais previsíveis</h3>
                  <p className="text-sm text-slate-550 leading-relaxed">
                    A empresa reduz a dependência de atendimentos emergenciais e consegue se organizar melhor.
                  </p>
                </div>
              </div>

              {/* Benefit 6 */}
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">Um parceiro acompanhando</h3>
                  <p className="text-sm text-slate-550 leading-relaxed">
                    A Invertech pode cuidar do planejamento, da execução e do acompanhamento periódico da sua climatização.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
           6. SEÇÃO DE PÚBLICO (TARGET)
           ============================================ */}
        <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight font-outfit text-[#0C2D6B] mb-4">
                Feito para empresas que não podem depender de improviso
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                O serviço é indicado para estabelecimentos que possuem múltiplos equipamentos, circulação constante de pessoas ou necessidade de manter as manutenções organizadas.
              </p>
            </div>

            {/* Segments grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {[
                "Clínicas e consultórios",
                "Escritórios",
                "Escolas",
                "Academias",
                "Restaurantes",
                "Hotéis e pousadas",
                "Igrejas",
                "Condomínios",
                "Lojas",
                "Supermercados",
                "Centros comerciais",
                "Empresas com vários aparelhos"
              ].map((segment, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">{segment}</span>
                </div>
              ))}
            </div>

            {/* Observation disclaimer */}
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs text-slate-500 leading-relaxed">
                *A necessidade e o formato do serviço devem ser avaliados considerando o tipo de estabelecimento, os equipamentos instalados, a capacidade do sistema e as exigências aplicáveis.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
           7. SEÇÃO DE PROCESSO (HOW IT WORKS)
           ============================================ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight font-outfit text-[#0C2D6B]">
                O que acontece depois que você chama a Invertech
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
              {/* Process card 1 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 relative flex flex-col justify-between">
                <div>
                  <span className="font-outfit font-extrabold text-blue-600/20 text-4xl block mb-4">01</span>
                  <h3 className="font-outfit font-bold text-slate-900 text-sm mb-2">Entendemos sua operação</h3>
                  <p className="text-xs text-slate-550 leading-relaxed">
                    Coletamos informações sobre o estabelecimento, o segmento e a quantidade aproximada de equipamentos.
                  </p>
                </div>
              </div>

              {/* Process card 2 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 relative flex flex-col justify-between">
                <div>
                  <span className="font-outfit font-extrabold text-blue-600/20 text-4xl block mb-4">02</span>
                  <h3 className="font-outfit font-bold text-slate-900 text-sm mb-2">Mapeamos os aparelhos</h3>
                  <p className="text-xs text-slate-550 leading-relaxed">
                    Identificamos localização, capacidade, modelo e condições encontradas.
                  </p>
                </div>
              </div>

              {/* Process card 3 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 relative flex flex-col justify-between">
                <div>
                  <span className="font-outfit font-extrabold text-blue-600/20 text-4xl block mb-4">03</span>
                  <h3 className="font-outfit font-bold text-slate-900 text-sm mb-2">Organizamos o plano</h3>
                  <p className="text-xs text-slate-550 leading-relaxed">
                    Definimos atividades, periodicidades e prioridades de manutenção.
                  </p>
                </div>
              </div>

              {/* Process card 4 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 relative flex flex-col justify-between">
                <div>
                  <span className="font-outfit font-extrabold text-blue-600/20 text-4xl block mb-4">04</span>
                  <h3 className="font-outfit font-bold text-slate-900 text-sm mb-2">Executamos manutenções</h3>
                  <p className="text-xs text-slate-550 leading-relaxed">
                    Os serviços contratados são realizados de acordo com o planejamento.
                  </p>
                </div>
              </div>

              {/* Process card 5 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 relative flex flex-col justify-between">
                <div>
                  <span className="font-outfit font-extrabold text-blue-600/20 text-4xl block mb-4">05</span>
                  <h3 className="font-outfit font-bold text-slate-900 text-sm mb-2">Histórico atualizado</h3>
                  <p className="text-xs text-slate-550 leading-relaxed">
                    As atividades realizadas ficam registradas para facilitar o acompanhamento dos equipamentos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
           8. SEÇÃO DE COMPARAÇÃO (VS)
           ============================================ */}
        <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight font-outfit text-white">
                Você pode pagar para prevenir ou pagar mais caro para resolver às pressas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Without Planning */}
              <div className="p-6 md:p-8 bg-slate-950/40 border border-slate-800 rounded-2xl flex flex-col gap-6">
                <h3 className="font-outfit font-bold text-rose-400 text-xl border-b border-slate-800 pb-3 flex items-center gap-2">
                  <X className="w-5 h-5 text-rose-500 stroke-[3.5]" />
                  Sem planejamento
                </h3>
                <ul className="space-y-4">
                  {[
                    "Equipamentos lembrados apenas quando quebram;",
                    "Manutenções sem histórico;",
                    "Gastos inesperados;",
                    "Chamados emergenciais;",
                    "Dificuldade para identificar problemas recorrentes;",
                    "Falta de previsibilidade."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-650 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* With Planning */}
              <div className="p-6 md:p-8 bg-[#0C2D6B]/30 border border-blue-900/40 rounded-2xl flex flex-col gap-6">
                <h3 className="font-outfit font-bold text-emerald-400 text-xl border-b border-slate-800 pb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400 stroke-[3.5]" />
                  Com acompanhamento
                </h3>
                <ul className="space-y-4">
                  {[
                    "Cronograma definido;",
                    "Equipamentos identificados;",
                    "Serviços registrados;",
                    "Problemas acompanhados;",
                    "Mais previsibilidade;",
                    "Decisões baseadas nas condições reais dos aparelhos."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-slate-350">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
           9. CTA INTERMEDIÁRIO
           ============================================ */}
        <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-100 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold font-outfit text-[#0C2D6B] mb-4">
              Talvez sua empresa não precise trocar os equipamentos. Talvez precise começar a cuidar deles corretamente.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Envie a quantidade aproximada de aparelhos e o segmento da empresa. A equipe da Invertech fará uma avaliação inicial da sua necessidade.
            </p>
            <Button
              variant="whatsapp"
              size="lg"
              ctaLocation="pmoc-middle"
              href={PMOC_WHATSAPP_URL}
              className="shadow-emerald-500/10"
            >
              Solicitar avaliação pelo WhatsApp
            </Button>
          </div>
        </section>

        {/* ============================================
           10. SEÇÃO DA OFERTA (SCOPE)
           ============================================ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight font-outfit text-[#0C2D6B]">
                O que a Invertech pode cuidar para sua empresa
              </h2>
            </div>

            {/* Scope Grid */}
            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.02)] mb-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left font-medium text-slate-750">
                {[
                  "Avaliação inicial",
                  "Levantamento dos equipamentos",
                  "Identificação dos aparelhos",
                  "Inventário técnico",
                  "Organização das atividades",
                  "Cronograma preventivo",
                  "Manutenções programadas",
                  "Registros dos serviços",
                  "Relatórios de atendimento",
                  "Identificação de correções",
                  "Acompanhamento periódico",
                  "Responsabilidade técnica (quando aplicável)"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Details paragraph */}
            <div className="space-y-4 text-xs text-slate-500 leading-relaxed text-center">
              <p>
                *O escopo final será definido de acordo com a estrutura da empresa, a quantidade de equipamentos e as necessidades encontradas.
              </p>
              <p>
                *Peças, reparos corretivos, substituições e serviços adicionais poderão ser orçados separadamente.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
           11. SEÇÃO SOBRE MANUTENÇÃO RECORRENTE
           ============================================ */}
        <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight font-outfit text-[#0C2D6B]">
                A manutenção não termina depois da primeira visita
              </h2>
            </div>
            
            <div className="space-y-6 text-slate-650 leading-relaxed text-base md:text-lg mb-8">
              <p>
                Depois do levantamento inicial, a Invertech pode acompanhar periodicamente os equipamentos, executar as manutenções programadas e manter o histórico dos serviços atualizado.
              </p>
              <p>
                Isso permite que a empresa identifique necessidades antes que os equipamentos parem e organize melhor os custos da climatização.
              </p>
            </div>

            {/* Checklist of preventive benefits */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-semibold text-slate-755 text-center">
              {[
                "Manutenções programadas",
                "Histórico atualizado",
                "Menos improvisos",
                "Identificação de falhas",
                "Planejamento de correções",
                "Maior previsibilidade",
                "Acompanhamento contínuo"
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-[0_2px_5px_rgba(0,0,0,0.01)]">
                  <span className="text-xs sm:text-sm text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
           12. SEÇÃO DE OBJEÇÕES
           ============================================ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight font-outfit text-[#0C2D6B]">
                As dúvidas que normalmente aparecem antes de organizar a manutenção
              </h2>
            </div>

            {/* Objection list */}
            <div className="space-y-8">
              {/* Q1 */}
              <div className="border-l-4 border-blue-500 pl-4 md:pl-6">
                <h4 className="font-outfit font-extrabold text-slate-900 text-base md:text-lg mb-2">
                  “Minha empresa nunca teve PMOC. Por que deveria fazer isso agora?”
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Porque a ausência de problemas visíveis não significa que os equipamentos estejam sendo bem acompanhados. A manutenção improvisada funciona até o dia em que vários problemas aparecem ao mesmo tempo. Organizar agora permite mapear o cenário, identificar prioridades e construir um plano adequado à realidade da empresa.
                </p>
              </div>

              {/* Q2 */}
              <div className="border-l-4 border-blue-500 pl-4 md:pl-6">
                <h4 className="font-outfit font-extrabold text-slate-900 text-base md:text-lg mb-2">
                  “Tenho poucos aparelhos. Ainda faz sentido?”
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  A quantidade é apenas um dos pontos avaliados. O segmento, o uso do ambiente, a capacidade dos sistemas e a necessidade de manter registros também devem ser considerados. A Invertech pode realizar uma avaliação inicial antes de recomendar qualquer serviço.
                </p>
              </div>

              {/* Q3 */}
              <div className="border-l-4 border-blue-500 pl-4 md:pl-6">
                <h4 className="font-outfit font-extrabold text-slate-900 text-base md:text-lg mb-2">
                  “Já faço limpeza dos aparelhos.”
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  A limpeza é importante, mas não representa todo o acompanhamento. Um plano de manutenção também considera periodicidade, funcionamento, condições dos componentes, registros e necessidades de correção.
                </p>
              </div>

              {/* Q4 */}
              <div className="border-l-4 border-blue-500 pl-4 md:pl-6">
                <h4 className="font-outfit font-extrabold text-slate-900 text-base md:text-lg mb-2">
                  “Isso vai gerar mais um custo para a empresa?”
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  O serviço deve ser comparado com o custo de paradas, reparos emergenciais, perda de rendimento e falta de previsibilidade. O objetivo é organizar a manutenção para que a empresa tome decisões antes que os problemas se tornem maiores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
           13. FAQ SECTION (details / summary)
           ============================================ */}
        <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight font-outfit text-[#0C2D6B]">
                Perguntas frequentes sobre PMOC
              </h2>
            </div>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold font-outfit text-slate-800 cursor-pointer select-none hover:bg-slate-50 transition-colors">
                  <span>O que significa PMOC?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="p-5 pt-0 border-t border-slate-100 text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                  <p>PMOC significa Plano de Manutenção, Operação e Controle. Ele organiza informações, atividades, periodicidades, responsáveis e registros relacionados aos sistemas de climatização.</p>
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold font-outfit text-slate-800 cursor-pointer select-none hover:bg-slate-50 transition-colors">
                  <span>PMOC é apenas um documento?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="p-5 pt-0 border-t border-slate-100 text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                  <p>Não. O documento orienta o planejamento, mas as manutenções e inspeções previstas precisam ser executadas e registradas.</p>
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold font-outfit text-slate-800 cursor-pointer select-none hover:bg-slate-50 transition-colors">
                  <span>Toda empresa precisa de PMOC?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="p-5 pt-0 border-t border-slate-100 text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                  <p>A necessidade e o formato do atendimento devem ser avaliados considerando o tipo de estabelecimento, a utilização do ambiente, a capacidade dos sistemas instalados e as exigências aplicáveis.</p>
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold font-outfit text-slate-800 cursor-pointer select-none hover:bg-slate-50 transition-colors">
                  <span>O limite de 60.000 BTU determina se a empresa precisa de PMOC?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="p-5 pt-0 border-t border-slate-100 text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                  <p>A capacidade total do sistema é um dos elementos considerados na avaliação e pode influenciar a necessidade de responsável técnico habilitado. O enquadramento deve ser analisado conforme a estrutura do estabelecimento e as regras aplicáveis.</p>
                </div>
              </details>

              {/* FAQ 5 */}
              <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold font-outfit text-slate-800 cursor-pointer select-none hover:bg-slate-50 transition-colors">
                  <span>A Invertech também realiza as manutenções?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="p-5 pt-0 border-t border-slate-100 text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                  <p>Sim. Além do levantamento e do planejamento, a Invertech pode executar manutenções preventivas, higienizações, inspeções e reparos necessários nos equipamentos.</p>
                </div>
              </details>

              {/* FAQ 6 */}
              <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold font-outfit text-slate-800 cursor-pointer select-none hover:bg-slate-50 transition-colors">
                  <span>Peças e reparos estão incluídos?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="p-5 pt-0 border-t border-slate-100 text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                  <p>A inclusão dependerá da proposta contratada. Peças, reparos corretivos e substituições poderão ser orçados separadamente.</p>
                </div>
              </details>

              {/* FAQ 7 */}
              <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold font-outfit text-slate-800 cursor-pointer select-none hover:bg-slate-50 transition-colors">
                  <span>O atendimento é realizado em Palmas?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="p-5 pt-0 border-t border-slate-100 text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                  <p>Sim. A Invertech atende empresas e estabelecimentos comerciais em Palmas e região.</p>
                </div>
              </details>

              {/* FAQ 8 */}
              <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold font-outfit text-slate-800 cursor-pointer select-none hover:bg-slate-50 transition-colors">
                  <span>É possível contratar acompanhamento periódico?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="p-5 pt-0 border-t border-slate-100 text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                  <p>Sim. O atendimento pode incluir manutenções programadas, atualização dos registros e acompanhamento contínuo dos equipamentos, conforme a proposta definida para a empresa.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* ============================================
           14. CTA FINAL
           ============================================ */}
        <section className="py-16 md:py-24 bg-white border-t border-slate-100 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h2 className="text-2xl md:text-4xl font-extrabold font-outfit text-[#0C2D6B] mb-4">
              O próximo problema do seu ar-condicionado não precisa pegar sua empresa de surpresa
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
              Converse com a Invertech e descubra como organizar os equipamentos, planejar as manutenções e manter um histórico do que foi realizado.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="whatsapp"
                size="lg"
                ctaLocation="pmoc-final-primary"
                href={PMOC_WHATSAPP_URL}
                className="w-full sm:w-auto shadow-emerald-500/10"
              >
                Quero avaliar minha empresa
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                ctaLocation="pmoc-final-secondary"
                href={PMOC_WHATSAPP_URL}
                className="w-full sm:w-auto bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-none hover:shadow-none"
              >
                Falar com a Invertech
              </Button>
            </div>
          </div>
        </section>
        
      </main>

      <Footer />
      <StickyCtaMobile />
    </>
  );
}
