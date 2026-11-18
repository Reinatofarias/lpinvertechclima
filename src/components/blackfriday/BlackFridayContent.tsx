import { Check, X, Star, ClipboardCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import BfSelo from "@/components/blackfriday/BfSelo";
import CountdownFixo from "@/components/blackfriday/CountdownFixo";
import Countdown from "@/components/blackfriday/Countdown";
import { GOOGLE_REVIEWS_URL } from "@/lib/constants";
import {
  BF_FIM,
  BF_HEADLINE,
  BF_PERIODO,
  BF_PERIODO_TEXTO,
  BF_HIGIENIZACOES,
  BF_INSTALACAO,
  BF_WHATSAPP_URL,
  BF_INSTALACAO_WHATSAPP_URL,
  bfHigienizacaoWhatsappUrl,
  formatBRL,
  type BfHigienizacao,
} from "@/lib/blackFriday";

const AMARELO = "#FACC15";

function FaixaCorrida() {
  const itens = [
    "BLACK WEEK INVERTECH",
    BF_PERIODO ? BF_PERIODO.replace(/^de /, "").toUpperCase() : "SOMENTE ESTA SEMANA",
    "20% OFF NAS HIGIENIZAÇÕES",
    "30% OFF NA MÃO DE OBRA DE INSTALAÇÃO",
  ];
  const linha = [...itens, ...itens];
  return (
    <div className="bg-[#FACC15] text-[#0B1220] overflow-hidden border-y border-black/10" aria-hidden="true">
      <div className="bf-marquee flex w-max">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            {linha.map((t, i) => (
              <span key={`${k}-${i}`} className="px-5 py-2.5 text-sm font-extrabold font-outfit tracking-wide whitespace-nowrap">
                {t} <span className="ml-5">●</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Selo({ texto }: { texto: string }) {
  return (
    <span className="absolute -top-3 right-5 rounded-md bg-[#FACC15] text-[#0B1220] px-3 py-1 text-sm font-extrabold font-outfit">
      {texto}
    </span>
  );
}

function Preco({ de, por }: { de: number; por: number }) {
  return (
    <div>
      <p className="text-sm text-slate-400">
        De <span className="line-through">{formatBRL(de)}</span> por
      </p>
      <p className="text-4xl font-extrabold font-outfit leading-none mt-1" style={{ color: AMARELO }}>
        {formatBRL(por)}
      </p>
      <p className="text-xs text-slate-400 mt-2">
        por aparelho · <span className="text-white font-semibold">economize {formatBRL(de - por)}</span>
      </p>
    </div>
  );
}

function ListaInclui({ itens }: { itens: string[] }) {
  return (
    <ul className="space-y-2">
      {itens.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-slate-200 leading-snug">
          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ListaNaoInclui({ itens }: { itens: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-400 mb-1.5">Não inclui</p>
      <ul className="space-y-1">
        {itens.map((item) => (
          <li key={item} className="flex gap-2 text-xs text-slate-400 leading-snug">
            <X className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CardHigienizacao({ h }: { h: BfHigienizacao }) {
  return (
    <article className="relative flex flex-col rounded-2xl border border-white/10 bg-[#111A2E] p-6 pt-7">
      <Selo texto="-20%" />
      <h3 className="text-2xl font-bold text-white font-outfit">{h.nome}</h3>
      <p className="text-sm text-slate-400 mt-1 mb-5">{h.tipo}</p>
      <Preco de={h.de} por={h.por} />
      <div className="border-t border-white/10 my-5" />
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
    <div className="bg-[#0B1220] text-white">
      <CountdownFixo fim={BF_FIM} />
      <div className="pt-16 md:pt-20">
        <FaixaCorrida />
      </div>

      {/* Topo */}
      <section id="hero" className="pt-10 pb-14 md:pt-16 md:pb-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit mb-3">{BF_HEADLINE}</h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-7">
              20% OFF nas higienizações e 30% OFF na mão de obra de instalação. Escolha o serviço abaixo e chame a gente no WhatsApp.
            </p>

            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 mb-7">
              <a href="#servicos" className="rounded-xl bg-[#FACC15] text-[#0B1220] p-4 text-left hover:bg-yellow-300 transition-colors">
                <p className="text-4xl sm:text-5xl font-black font-outfit leading-none">-20%</p>
                <p className="text-sm font-semibold mt-2">Higienizações</p>
              </a>
              <a href="#instalacao" className="rounded-xl bg-white text-[#0B1220] p-4 text-left hover:bg-slate-100 transition-colors">
                <p className="text-4xl sm:text-5xl font-black font-outfit leading-none">-30%</p>
                <p className="text-sm font-semibold mt-2">Mão de obra de instalação</p>
              </a>
            </div>

            <div className="mb-7">
              <Countdown fim={BF_FIM} />
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

          <div className="lg:col-span-5 lg:order-last order-first w-full">
            <BfSelo className="rounded-2xl" />
          </div>
        </div>

      </section>

      {/* Higienizações */}
      <section id="servicos" className="py-16 md:py-24 border-t border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-5xl font-black font-outfit">
              Higienizações <span style={{ color: AMARELO }}>-20%</span>
            </h2>
            <p className="text-slate-400 mt-3">Valores por aparelho, para equipamentos de 9.000 a 18.000 BTUs.</p>
          </div>

          <h3 className="text-lg font-bold font-outfit">Higienização de bolsa</h3>
          <p className="text-sm text-slate-400 mt-1 mb-7">
            Feita no local, com bolsa coletora na unidade interna, sem desmontar o aparelho por completo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bolsa.map((h) => (
              <CardHigienizacao key={h.id} h={h} />
            ))}
          </div>

          {integral && (
            <div className="mt-14">
              <h3 className="text-lg font-bold font-outfit">Higienização completa das unidades interna e externa</h3>
              <p className="text-sm text-slate-400 mt-1 mb-7">
                O aparelho é desinstalado e desmontado. Não é uma higienização de bolsa.
              </p>
              <article className="relative rounded-2xl border-2 border-[#FACC15] bg-[#111A2E] p-6 pt-8 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                <Selo texto="-20%" />
                <div className="lg:col-span-4 flex flex-col">
                  <h4 className="text-3xl font-bold font-outfit">{integral.nome}</h4>
                  <p className="text-sm text-slate-400 mt-1 mb-5">Evaporadora e condensadora</p>
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
      <section id="instalacao" className="py-16 md:py-24 border-t border-white/10 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-black font-outfit">
            Instalação <span style={{ color: AMARELO }}>-30%</span>
          </h2>
          <p className="text-slate-400 mt-3 mb-10 max-w-2xl">{BF_INSTALACAO.escopo}</p>

          <article className="relative rounded-2xl border border-white/10 bg-[#111A2E] p-6 pt-8 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            <Selo texto="-30%" />
            <div className="md:col-span-5 flex flex-col">
              <h3 className="text-2xl font-bold font-outfit mb-5">{BF_INSTALACAO.titulo}</h3>
              <Preco de={BF_INSTALACAO.de} por={BF_INSTALACAO.por} />
              <p className="text-sm text-slate-400 mt-4">Split de 9.000 a 12.000 BTUs, parede com parede.</p>
              <Button variant="whatsapp" href={BF_INSTALACAO_WHATSAPP_URL} ctaLocation="bf-instalacao" fullWidth className="mt-6">
                Quero a instalação
              </Button>
            </div>
            <div className="md:col-span-7">
              <p className="text-sm font-semibold mb-3">Condições da oferta</p>
              <ul className="space-y-2.5">
                {BF_INSTALACAO.condicoes.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-slate-300 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] shrink-0 mt-2" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Antes de fechar */}
      <section className="py-14 md:py-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <ClipboardCheck className="w-7 h-7 shrink-0 mt-1" style={{ color: AMARELO }} />
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-outfit">Sem surpresa no fechamento</h2>
              <p className="text-slate-300 mt-2 leading-relaxed">
                Antes de fechar, confirmamos com você a capacidade do aparelho, a modalidade escolhida, as condições de acesso,
                os materiais e qualquer serviço adicional. Se houver algum custo extra, ele é apresentado antes, para a sua aprovação.
                O atendimento é agendado conforme a disponibilidade da agenda.
              </p>
              <p className="text-sm text-slate-400 mt-3">{BF_PERIODO_TEXTO}</p>
            </div>
          </div>
        </div>
      </section>

      <FaixaCorrida />
    </div>
  );
}
