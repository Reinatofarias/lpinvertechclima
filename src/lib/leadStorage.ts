// Cada página com captura própria guarda se o lead já preencheu o popup.
// A Black Friday tem chave separada: quem já preencheu na página principal
// passa pelo popup de novo aqui, para o lead chegar marcado como Black Friday no Make.
export function getLeadStorageKey(pathname: string): string {
  if (pathname.includes("pmoc-palmas")) return "invertech_lead_captured_pmoc";
  if (pathname.includes("black-friday")) return "invertech_lead_captured_black_friday";
  return "invertech_lead_captured_main";
}

export function getPageName(pathname: string): string {
  if (pathname.includes("pmoc-palmas")) return "PMOC Palmas";
  if (pathname.includes("black-friday")) return "Black Friday";
  return "Principal";
}
