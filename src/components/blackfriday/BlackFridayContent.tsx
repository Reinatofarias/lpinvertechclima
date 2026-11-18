import Image from "next/image";
import { Check, X, Star, ClipboardCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import { GOOGLE_REVIEWS_URL } from "@/lib/constants";
import {
  BF_HEADLINE,
  BF_PERIODO_TEXTO,
  BF_HIGIENIZACOES,
  BF_INSTALACAO,
  BF_WHATSAPP_URL,
  BF_INSTALACAO_WHATSAPP_URL,
  bfHigienizacaoWhatsappUrl,
  formatBRL,
  type BfHigienizacao,
} from "@/lib/blackFriday";

function Preco({ de, por }: { de: number; por: number }) {
  return (
    <div className="flex items-end gap-3">
      <div>
        <p className="text-xs text-slate-500">
          De <span className="line-through">{formatBRL(de)}</span> por
        </p>
        <p className="text-3xl font-extrabold text-[#0C2D6B] font-outfit leading-none mt-1">{formatBRL(por)}</p>
      </div>
      <p className="text-xs text-slate-500 pb-0.5">por aparelho</p>
    </div>
  );
}

function ListaInclui({ itens }: { itens: string[] }) {
  return (
    <ul className="space-y-2">
      {itens.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-slate-700 leading-snug">
          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ListaNaoInclui({ itens }: { itens: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-500 mb-1.5">Não inclui</p>
      <ul className="space-y-1">
        {itens.map((item) => (
          <li key={item} className="flex gap-2 text-xs text-slate-500 leading-snug">
            <X className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CardHigienizacao({ h }: { h: BfHigienizacao }) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-bold text-[#0C2D6B] font-outfit">{h.nome}</h3>
      <p className="text-sm text-slate-600 mt-1 mb-5">{h.tipo}</p>
      <Preco de={h.de} por={h.por} />
      <div className="border-t border-slate-100 my-5" />
      <ListaInclui itens={h.inclui} />
      <div className="mt-4 mb-6">
        <ListaNaoInclui itens={h.naoInclui} />
      </div>
      <Button
        variant="whatsapp"
        href={bfHigienizacaoWhatsappUrl(h)}
        ctaLocation={`bf-higienizacao-${h.id}`}
        fullWidth
        className="mt-auto"
      >
        Quero a {h.nome}
      </Button>
    </article>
  );
}

export default function BlackFridayContent() {
  const bolsa = BF_HIGIENIZACOES.filter((h) => h.categoria === "bolsa");
  const integral = BF_HIGIENIZACOES.find((h) => h.categoria === "completa");

  return (
    <>
      {/* Topo */}
      <section id="hero" className="bg-[#0B1220] text-white pt-24 pb-14 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <p className="text-[#FACC15] font-outfit font-extrabold text-lg sm:text-xl tracking-wide mb-3">
              BLACK FRIDAY INVERTECH CLIMA
            </p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-outfit leading-[1.05] tracking-tight mb-5">
              {BF_HEADLINE}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              20% OFF nas higienizações e 30% OFF na mão de obra de instalação. Escolha o serviço abaixo e chame a gente no WhatsApp.
            </p>

            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 mb-8">
              <a href="#servicos" className="rounded-xl border border-white/15 bg-white/5 p-4 text-left hover:border-[#FACC15]/60 transition-colors">
                <p className="text-3xl sm:text-4xl font-extrabold font-outfit text-[#FACC15] leading-none">20% OFF</p>
                <p className="text-sm text-slate-300 mt-2">Higienizações</p>
              </a>
              <a href="#instalacao" className="rounded-xl border border-white/15 bg-white/5 p-4 text-left hover:border-[#FACC15]/60 transition-colors">
                <p className="text-3xl sm:text-4xl font-extrabold font-outfit text-[#FACC15] leading-none">30% OFF</p>
                <p className="text-sm text-slate-300 mt-2">Mão de obra de instalação</p>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button variant="whatsapp" size="lg" href={BF_WHATSAPP_URL} ctaLocation="bf-hero" className="w-full sm:w-auto">
                Quero o desconto
              </Button>
            </div>
            <p className="text-sm text-slate-400 mt-4">{BF_PERIODO_TEXTO}</p>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <span className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-white">4,9 no Google</strong> · +400 clientes em Palmas
              </span>
            </a>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-[16/11] sm:aspect-[4/4.5] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/service-hygiene-1.jpg"
                alt="Higienização de ar-condicionado pela Invertech Clima em Palmas"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Higienizações */}
      <section id="servicos" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0C2D6B] font-outfit">Higienizações com 20% OFF</h2>
            <p className="text-slate-600 mt-3">
              Valores por aparelho, para equipamentos de 9.000 a 18.000 BTUs.
            </p>
          </div>

          <h3 className="text-lg font-bold text-slate-900 font-outfit">Higienização de bolsa</h3>
          <p className="text-sm text-slate-600 mt-1 mb-5">
            Feita no local, com bolsa coletora na unidade interna, sem desmontar o aparelho por completo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {bolsa.map((h) => (
              <CardHigienizacao key={h.id} h={h} />
            ))}
          </div>

          {integral && (
            <div className="mt-12">
              <h3 className="text-lg font-bold text-slate-900 font-outfit">Higienização completa das unidades interna e externa</h3>
              <p className="text-sm text-slate-600 mt-1 mb-5">
                O aparelho é desinstalado e desmontado. Não é uma higienização de bolsa.
              </p>
              <article className="rounded-2xl border-2 border-[#0C2D6B] bg-white p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                <div className="lg:col-span-4 flex flex-col">
                  <h4 className="text-2xl font-bold text-[#0C2D6B] font-outfit">{integral.nome}</h4>
                  <p className="text-sm text-slate-600 mt-1 mb-5">Evaporadora e condensadora</p>
                  <Preco de={integral.de} por={integral.por} />
                  <Button
                    variant="whatsapp"
                    href={bfHigienizacaoWhatsappUrl(integral)}
                    ctaLocation={`bf-higienizacao-${integral.id}`}
                    fullWidth
                    className="mt-6"
                  >
                    Quero a {integral.nome}
                  </Button>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <ListaInclui itens={integral.inclui} />
                  <ListaNaoInclui itens={integral.naoInclui} />
                </div>
              </article>
            </div>
          )}
        </div>
      </section>

      {/* Instalação */}
      <section id="instalacao" className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/60 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0C2D6B] font-outfit">Instalação com 30% OFF</h2>
          <p className="text-slate-600 mt-3 mb-8 max-w-2xl">{BF_INSTALACAO.escopo}</p>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 flex flex-col">
              <h3 className="text-xl font-bold text-[#0C2D6B] font-outfit mb-5">{BF_INSTALACAO.titulo}</h3>
              <Preco de={BF_INSTALACAO.de} por={BF_INSTALACAO.por} />
              <p className="text-sm text-slate-600 mt-4">Split de 9.000 a 12.000 BTUs, parede com parede.</p>
              <Button
                variant="whatsapp"
                href={BF_INSTALACAO_WHATSAPP_URL}
                ctaLocation="bf-instalacao"
                fullWidth
                className="mt-6"
              >
                Quero a instalação
              </Button>
            </div>
            <div className="md:col-span-7">
              <p className="text-sm font-semibold text-slate-900 mb-3">Condições da oferta</p>
              <ul className="space-y-2.5">
                {BF_INSTALACAO.condicoes.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-slate-700 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Antes de fechar */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <ClipboardCheck className="w-7 h-7 text-[#1A5BD8] shrink-0 mt-1" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#0C2D6B] font-outfit">Sem surpresa no fechamento</h2>
              <p className="text-slate-600 mt-2 leading-relaxed">
                Antes de fechar, confirmamos com você a capacidade do aparelho, a modalidade escolhida, as condições de acesso,
                os materiais e qualquer serviço adicional. Se houver algum custo extra, ele é apresentado antes, para a sua aprovação.
                O atendimento é agendado conforme a disponibilidade da agenda.
              </p>
              <p className="text-sm text-slate-500 mt-3">{BF_PERIODO_TEXTO}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
