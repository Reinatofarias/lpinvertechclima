// ============================================
// INVERTECH CLIMA — Origem do lead (Google Ads / UTMs)
// Guarda o gclid e as UTMs da primeira visita para mandar junto com o lead
// ao Make. Com isso dá para subir as vendas fechadas como conversão offline
// no Google Ads e saber qual campanha/palavra trouxe cada cliente.
// ============================================

const STORAGE_KEY = "invertech_attribution";
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000; // validade do gclid no Google Ads

const PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type Attribution = Partial<Record<(typeof PARAMS)[number], string>> & {
  landing_page?: string;
  captured_at?: string;
};

function read(): Attribution | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as Attribution;
    if (data.captured_at && Date.now() - new Date(data.captured_at).getTime() > MAX_AGE_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

/** Chamar no carregamento da página. Um clique novo de anúncio substitui o anterior. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const url = new URL(window.location.href);
    const found: Attribution = {};
    for (const key of PARAMS) {
      const value = url.searchParams.get(key);
      if (value) found[key] = value.slice(0, 200);
    }
    if (Object.keys(found).length === 0) return;
    found.landing_page = `${url.origin}${url.pathname}`;
    found.captured_at = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  } catch {
    // localStorage indisponível (modo privado antigo): segue sem origem
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  return read() ?? {};
}
