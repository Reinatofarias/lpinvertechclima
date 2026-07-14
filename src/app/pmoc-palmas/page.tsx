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
  Search
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import StickyCtaMobile from "@/components/layout/StickyCtaMobile";
import { PMOC_WHATSAPP_URL } from "@/lib/constants";

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
           3. PROBLEMA & SOLUÇÃO PMOC (Merged 3 and 4)
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
                Quando um equipamento deixa de funcionar, a empresa normalmente já perdeu tempo. Antes da parada, ele pode ter consumido mais energia, trabalhado com sujeira acumulada, apresentado pequenas falhas e prejudicado o conforto de clientes e colaboradores.
              </p>
              <p>
                Sem um plano de manutenção, cada aparelho vira um problema isolado. A empresa deixa de saber com clareza quando ocorreu a última preventiva, quais aparelhos apresentam falhas recorrentes e quanto poderá gastar com consertos corretivos nos próximos meses.
              </p>
              <p>
                <strong>PMOC</strong> significa Plano de Manutenção, Operação e Controle. Na prática, ele organiza o inventário técnico da sua climatização, define as atividades, estabelece periodicidades e registra os serviços realizados. A Invertech ajuda sua empresa a sair do improviso e construir um processo de manutenção mais previsível.
              </p>
            </div>

            {/* Block highlight */}
            <div className="mt-8 p-6 bg-rose-50 rounded-2xl border border-rose-100 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-outfit font-bold text-rose-950 text-base md:text-lg leading-snug">
                  Manutenção sem planejamento custa mais caro. 
                </p>
                <p className="text-sm text-rose-900 mt-1">
                  Um plano guardado sem execução não impede falhas, não cria histórico e não melhora a eficiência energética dos seus equipamentos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
           4. BENEFÍCIOS & ESCOPO DA INVERTECH (Merged 5, 10 and 11)
           ============================================ */}
        <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight font-outfit text-[#0C2D6B]">
                Você passa a saber o que tem, o que precisa ser feito e quando agir
              </h2>
              <p className="text-slate-550 text-sm md:text-base mt-3 leading-relaxed">
                Organizamos o levantamento técnico, o cronograma e a execução contínua dos serviços de manutenção. Conheça as principais atividades cobertas:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Benefit 1 */}
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">Equipamentos mapeados</h3>
                  <p className="text-xs sm:text-sm text-slate-550 leading-relaxed">
                    Identificação dos aparelhos, inventário técnico detalhado das capacidades, localização física e condições encontradas nos compressores e evaporadoras.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">Manutenção planejada</h3>
                  <p className="text-xs sm:text-sm text-slate-550 leading-relaxed">
                    Organização das atividades preventivas e determinação das periodicidades de limpeza, higienização e testes elétricos adequados para cada ambiente.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">Serviços registrados</h3>
                  <p className="text-xs sm:text-sm text-slate-550 leading-relaxed">
                    Histórico consolidado com fichas de atendimento e laudos técnicos sobre o que foi realizado, peças substituídas e necessidades identificadas.
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    <Search className="w-5 h-5" />
                  </div>
                  <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">Prevenção de falhas</h3>
                  <p className="text-xs sm:text-sm text-slate-550 leading-relaxed">
                    Identificação de desgastes em motores, vazamentos de gás refrigerante e acúmulo de sujeira antes que os aparelhos venham a parar de climatizar.
                  </p>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">Custos mais previsíveis</h3>
                  <p className="text-xs sm:text-sm text-slate-550 leading-relaxed">
                    A empresa reduz drasticamente a dependência de reparos urgentes de última hora e de taxas de visitas emergenciais nos momentos mais quentes do ano.
                  </p>
                </div>
              </div>

              {/* Benefit 6 */}
              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">Acompanhamento contínuo</h3>
                  <p className="text-xs sm:text-sm text-slate-550 leading-relaxed">
                    Um parceiro técnico focado em manter seus aparelhos limpos e eficientes, com responsabilidade técnica assinada por engenheiro habilitado, quando aplicável.
                  </p>
                </div>
              </div>
            </div>

            {/* Scope support footnotes */}
            <div className="mt-8 text-center max-w-2xl mx-auto space-y-2 text-[11px] text-slate-500 leading-relaxed">
              <p>
                *O escopo final de atendimento será formalizado em proposta de acordo com a quantidade de equipamentos e a estrutura comercial.
              </p>
              <p>
                *Peças, reparos de vazamento complexo e substituições corretivas de compressores ou placas são orçados separadamente.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
           5. PARA QUEM É O SERVIÇO & COMPARAÇÃO (Merged 6 and 8)
           ============================================ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight font-outfit text-[#0C2D6B] mb-4">
                Feito para empresas que não podem depender de improviso
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                O acompanhamento é indicado para estabelecimentos comerciais que possuem múltiplos equipamentos de ar-condicionado, circulação frequente de pessoas ou que necessitam assegurar um ar saudável.
              </p>
            </div>

            {/* Layout Split: Left Segment tags, Right Comparison box */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
              {/* Left Column: Segments grid */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Clínicas e consultórios",
                    "Escritórios",
                    "Escolas",
                    "Academias",
                    "Restaurantes",
                    "Hotéis e pousadas",
                    "Igrejas",
                    "Lojas e comércios",
                    "Supermercados",
                    "Empresas com vários aparelhos"
                  ].map((segment, index) => (
                    <div 
                      key={index}
                      className="bg-slate-50 p-3 rounded-lg border border-slate-200/70 flex items-center gap-2"
                    >
                      <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-semibold text-slate-700">{segment}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-slate-400 leading-relaxed mt-2 text-center lg:text-left">
                  *A necessidade deve ser avaliada caso a caso considerando a capacidade em BTUs instalada no imóvel e as diretrizes do estabelecimento.
                </p>
              </div>

              {/* Right Column: Side-by-side comparison */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Without Planning */}
                <div className="p-5 bg-rose-50/50 border border-rose-100 rounded-xl flex flex-col gap-3">
                  <h4 className="font-outfit font-bold text-rose-700 text-sm flex items-center gap-1.5 border-b border-rose-100/80 pb-2">
                    <X className="w-4 h-4 text-rose-600 stroke-[3]" />
                    Sem planejamento
                  </h4>
                  <ul className="space-y-2 text-xs text-rose-950">
                    <li className="flex items-start gap-2"><span>•</span><span>Aparelhos lembrados só quando dão defeito</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span>Histórico de limpeza inexistente</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span>Contas de luz com picos de consumo</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span>Gastos de manutenção imprevisíveis</span></li>
                  </ul>
                </div>

                {/* With Planning */}
                <div className="p-5 bg-emerald-50/50 border border-emerald-100 rounded-xl flex flex-col gap-3">
                  <h4 className="font-outfit font-bold text-emerald-800 text-sm flex items-center gap-1.5 border-b border-emerald-100/80 pb-2">
                    <Check className="w-4 h-4 text-emerald-700 stroke-[3]" />
                    Com acompanhamento
                  </h4>
                  <ul className="space-y-2 text-xs text-emerald-950">
                    <li className="flex items-start gap-2"><span>•</span><span>Cronograma de visitas técnicas definido</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span>Serviços e laudos registrados</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span>Aparelhos trabalhando limpos e gastando menos</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span>Controle financeiro e planejamento anual</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
           6. SEÇÃO DE PROCESSO (HOW IT WORKS)
           ============================================ */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight font-outfit text-[#0C2D6B]">
                O que acontece depois que você chama a Invertech
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Process card 1 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <span className="font-outfit font-extrabold text-blue-600/25 text-3xl block mb-3">01</span>
                  <h3 className="font-outfit font-bold text-slate-900 text-sm mb-1.5">Entendemos sua operação</h3>
                  <p className="text-xs text-slate-550 leading-relaxed">
                    Coletamos dados iniciais sobre seu estabelecimento, segmento e a contagem estimada de aparelhos.
                  </p>
                </div>
              </div>

              {/* Process card 2 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <span className="font-outfit font-extrabold text-blue-600/25 text-3xl block mb-3">02</span>
                  <h3 className="font-outfit font-bold text-slate-900 text-sm mb-1.5">Mapeamos os aparelhos</h3>
                  <p className="text-xs text-slate-550 leading-relaxed">
                    Avaliamos in loco o modelo, capacidade técnica, estado de conservação e localização de cada ar.
                  </p>
                </div>
              </div>

              {/* Process card 3 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <span className="font-outfit font-extrabold text-blue-600/25 text-3xl block mb-3">03</span>
                  <h3 className="font-outfit font-bold text-slate-900 text-sm mb-1.5">Organizamos o plano</h3>
                  <p className="text-xs text-slate-550 leading-relaxed">
                    Desenhamos as atividades necessárias e estruturamos as frequências de visitas preventivas.
                  </p>
                </div>
              </div>

              {/* Process card 4 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <span className="font-outfit font-extrabold text-blue-600/25 text-3xl block mb-3">04</span>
                  <h3 className="font-outfit font-bold text-slate-900 text-sm mb-1.5">Executamos manutenções</h3>
                  <p className="text-xs text-slate-550 leading-relaxed">
                    Nossos técnicos qualificados efetuam a higienização profunda e as verificações mecânicas agendadas.
                  </p>
                </div>
              </div>

              {/* Process card 5 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <span className="font-outfit font-extrabold text-blue-600/25 text-3xl block mb-3">05</span>
                  <h3 className="font-outfit font-bold text-slate-900 text-sm mb-1.5">Histórico atualizado</h3>
                  <p className="text-xs text-slate-550 leading-relaxed">
                    Registramos tudo nas fichas de manutenção para que você mantenha o acompanhamento em dia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
           7. CTA INTERMEDIÁRIO
           ============================================ */}
        <section className="py-16 md:py-20 bg-slate-900 text-white text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h2 className="text-2xl md:text-3xl font-extrabold font-outfit text-white mb-4">
              Talvez sua empresa não precise trocar os equipamentos. Talvez precise começar a cuidar deles corretamente.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
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
           8. DÚVIDAS & FAQ (Merged 12 and 13)
           ============================================ */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight font-outfit text-[#0C2D6B]">
                Perguntas frequentes e dúvidas sobre PMOC
              </h2>
            </div>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold font-outfit text-slate-800 cursor-pointer select-none hover:bg-slate-100/60 transition-colors">
                  <span>O que significa PMOC e por que minha empresa deveria fazer isso agora?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="p-5 pt-0 border-t border-slate-150 text-sm text-slate-600 leading-relaxed bg-white">
                  <p className="mb-2">PMOC significa Plano de Manutenção, Operação e Controle. Ele serve para planejar, gerenciar e documentar as atividades de higienização e monitoramento da climatização.</p>
                  <p>Adotar o planejamento de manutenção preventiva agora evita o acúmulo de falhas, diminui a perda de produtividade dos colaboradores em dias quentes e previne surpresas financeiras causadas por substituições caras de compressores de última hora.</p>
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold font-outfit text-slate-800 cursor-pointer select-none hover:bg-slate-100/60 transition-colors">
                  <span>Tenho poucos aparelhos na minha empresa. Ainda faz sentido contratar?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="p-5 pt-0 border-t border-slate-150 text-sm text-slate-600 leading-relaxed bg-white">
                  <p>Sim. A quantidade total é apenas um dos fatores. A necessidade técnica, a finalidade do ambiente (como salas cirúrgicas, clínicas médicas ou escritórios fechados), a carga térmica instalada e o cuidado básico com o ar que os ocupantes respiram justificam o acompanhamento preventivo. A Invertech realiza uma triagem inicial para indicar o formato adequado de serviço.</p>
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold font-outfit text-slate-800 cursor-pointer select-none hover:bg-slate-100/60 transition-colors">
                  <span>Já faço a limpeza e higienização periódica dos aparelhos. É suficiente?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="p-5 pt-0 border-t border-slate-150 text-sm text-slate-600 leading-relaxed bg-white">
                  <p>A limpeza do filtro de tela simples é importante, mas não cobre todas as etapas de monitoramento do sistema de climatização. Um plano preventivo engloba a higienização de bandejas de condensado, verificação de dreno para evitar vazamentos e monitoramento do circuito de fluido refrigerante e amperagem, gerando um histórico confiável.</p>
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold font-outfit text-slate-800 cursor-pointer select-none hover:bg-slate-100/60 transition-colors">
                  <span>Organizar a manutenção vai gerar um custo adicional alto?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="p-5 pt-0 border-t border-slate-150 text-sm text-slate-600 leading-relaxed bg-white">
                  <p>Ao planejar visitas preventivas, sua empresa diminui drasticamente a quantidade de correções emergenciais rápidas, taxas extras de visitas urgentes fora do horário comercial, vazamentos de gás constantes e o desgaste prematuro que encurta a vida útil dos aparelhos de ar-condicionado.</p>
                </div>
              </details>

              {/* FAQ 5 */}
              <details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold font-outfit text-slate-800 cursor-pointer select-none hover:bg-slate-100/60 transition-colors">
                  <span>Toda empresa precisa de PMOC ou existe um limite de BTU?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="p-5 pt-0 border-t border-slate-150 text-sm text-slate-600 leading-relaxed bg-white">
                  <p>A necessidade técnica e o enquadramento do serviço variam de acordo com as especificações físicas dos aparelhos do local, a capacidade térmica global e as regras locais aplicáveis ao tipo de estabelecimento comercial. A equipe técnica da Invertech auxilia na análise técnica individual sem compromisso.</p>
                </div>
              </details>

              {/* FAQ 6 */}
              <details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold font-outfit text-slate-800 cursor-pointer select-none hover:bg-slate-100/60 transition-colors">
                  <span>A Invertech também realiza as manutenções e o fornecimento de peças?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="p-5 pt-0 border-t border-slate-150 text-sm text-slate-600 leading-relaxed bg-white">
                  <p>Sim. Além da análise de escopo e planejamento do plano, realizamos instalações técnicas qualificadas, manutenções mecânicas preventivas, higienizações completas por duto/bandeja e correções mecânicas. Se peças de reposição ou reparos extras forem necessários, fornecemos propostas de orçamento separadas.</p>
                </div>
              </details>

              {/* FAQ 7 */}
              <details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold font-outfit text-slate-800 cursor-pointer select-none hover:bg-slate-100/60 transition-colors">
                  <span>Como funciona o acompanhamento periódico com contrato?</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="p-5 pt-0 border-t border-slate-150 text-sm text-slate-600 leading-relaxed bg-white">
                  <p>Nossa equipe agenda as datas das vistorias e manutenções periódicas ao longo dos meses. Em cada visita, realizamos os procedimentos técnicos preventivos contratados, atualizamos as respectivas fichas de registro de cada ar-condicionado e emitimos o relatório correspondente para a gerência da empresa.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* ============================================
           9. CTA FINAL
           ============================================ */}
        <section className="py-16 md:py-24 bg-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h2 className="text-2xl md:text-4xl font-extrabold font-outfit text-[#0C2D6B] mb-4">
              O próximo problema do seu ar-condicionado não precisa pegar sua empresa de surpresa
            </h2>
            <p className="text-sm sm:text-base text-slate-650 max-w-xl mx-auto mb-8 leading-relaxed">
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
