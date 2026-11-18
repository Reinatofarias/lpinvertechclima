// ============================================
// INVERTECH CLIMA — Black Friday (campanha Google Ads)
// Para mudar datas, preços ou textos da campanha, edite só este arquivo.
// ============================================

import { buildWhatsappUrl } from "./landings";

/**
 * Período da campanha. Enquanto as datas não forem definidas, a página
 * mostra "somente nesta semana". Exemplo: "de 23/11 a 30/11".
 */
export const BF_PERIODO = "";

export const BF_PERIODO_TEXTO = BF_PERIODO
  ? `Válido ${BF_PERIODO}, para contratações feitas durante a campanha.`
  : "Somente nesta semana, para contratações feitas durante a campanha.";

export const BF_HEADLINE = "Seu ar está sujo?";
export const BF_SUBHEADLINE =
  "Black Friday Invertech Clima: 20% OFF nas higienizações e 30% OFF na mão de obra de instalação!";

export type BfHigienizacao = {
  id: string;
  nome: string;
  tipo: string;
  /** "bolsa" = higienização de bolsa (sem desmontagem); "completa" = interna e externa */
  categoria: "bolsa" | "completa";
  de: number;
  por: number;
  inclui: string[];
  naoInclui: string[];
};

export const BF_HIGIENIZACOES: BfHigienizacao[] = [
  {
    id: "essencial",
    nome: "Essencial",
    tipo: "Higienização de bolsa",
    categoria: "bolsa",
    de: 230,
    por: 184,
    inclui: [
      "Limpeza da unidade interna com bolsa coletora",
      "Filtros, carenagem, aletas, serpentina e turbina (sem retirada integral)",
      "Bandeja e resíduos acessíveis do dreno",
      "Testes de drenagem e funcionamento",
    ],
    naoInclui: ["Desmontagem integral", "Lavagem da unidade externa"],
  },
  {
    id: "termoavancada",
    nome: "Termoavançada",
    tipo: "Higienização de bolsa com tecnologia térmica",
    categoria: "bolsa",
    de: 270,
    por: 216,
    inclui: [
      "Tudo do Essencial",
      "Água quente e vapor controlados (Wipcool C35S) nos componentes compatíveis",
      "Remove sujeiras aderidas",
      "Registro fotográfico e testes finais",
    ],
    naoInclui: ["Desinstalação", "Desmontagem integral", "Lavagem da unidade externa"],
  },
  {
    id: "executiva",
    nome: "Executiva",
    tipo: "Higienização de bolsa com tecnologia térmica e avaliação para ozônio",
    categoria: "bolsa",
    de: 380,
    por: 304,
    inclui: [
      "Limpeza dos componentes internos com água quente e vapor nos pontos compatíveis",
      "Registro fotográfico, relatório e testes finais",
      "Avaliação para tratamento de odores com ozônio (aplicado só com indicação técnica e condições adequadas)",
    ],
    naoInclui: ["Lavagem da unidade externa", "Desinstalação integral"],
  },
  {
    id: "integral",
    nome: "Integral",
    tipo: "Higienização completa das unidades interna e externa",
    categoria: "completa",
    de: 330,
    por: 264,
    inclui: [
      "Desinstalação e desmontagem dos componentes tecnicamente removíveis",
      "Lavagem individual da evaporadora e da condensadora",
      "Revisão preventiva, reinstalação, testes finais e relatório técnico",
      "Troca de isolamento térmico deteriorado (até 3 m) e terminais elétricos, quando necessários e previstos no escopo",
    ],
    naoInclui: [
      "Reparo de placa e peças defeituosas",
      "Correção de vazamentos e recarga de gás",
      "Materiais além do escopo contratado",
    ],
  },
];

export const BF_INSTALACAO = {
  de: 400,
  por: 280,
  titulo: "Mão de obra de instalação",
  escopo:
    "Split de 9.000 a 12.000 BTUs no padrão parede com parede: unidade interna e externa em lados opostos da mesma parede.",
  condicoes: [
    "O valor promocional inclui somente a mão de obra da instalação.",
    "Não inclui materiais: tubulação de cobre, isolamento, cabos, mangueira de dreno, suportes e demais itens.",
    "A parte elétrica não está incluída. Se for necessária, é cobrada à parte.",
    "Andaimes, plataformas e outros equipamentos especiais de acesso, quando necessários, ficam por conta do contratante, conforme avaliação técnica.",
    "Desinstalação de aparelho existente, obras civis e serviços fora do padrão parede com parede não estão incluídos e têm orçamento separado.",
    "Outras capacidades ou instalações com outro percurso têm orçamento específico.",
  ],
};

export function formatBRL(valor: number): string {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Mensagens começam com "Olá! Vim pelo site" para o nome do lead entrar na frente (utils.ts)
export const BF_WHATSAPP_URL = buildWhatsappUrl(
  "Olá! Vim pelo site e quero aproveitar a Black Friday da Invertech."
);

export function bfHigienizacaoWhatsappUrl(h: BfHigienizacao): string {
  return buildWhatsappUrl(
    `Olá! Vim pelo site e quero a higienização ${h.nome} da Black Friday (${formatBRL(h.por)} por aparelho).`
  );
}

export const BF_INSTALACAO_WHATSAPP_URL = buildWhatsappUrl(
  `Olá! Vim pelo site e quero a instalação da Black Friday (mão de obra por ${formatBRL(BF_INSTALACAO.por)}).`
);
