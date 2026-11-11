"use client";

import Logo from "@/components/ui/Logo";
import {
  COMPANY_NAME,
  COMPANY_TAGLINE,
  COMPANY_LOCATION,
  COMPANY_YEAR,
  PHONE_DISPLAY,
  PHONE_URL,
  GOOGLE_REVIEWS_URL,
} from "@/lib/constants";
import { SERVICE_LANDINGS } from "@/lib/landings";
import { trackCtaClick } from "@/lib/analytics";

const SERVICE_LINKS = [
  ...SERVICE_LANDINGS.map((l) => ({
    href: `/${l.slug}`,
    label: l.metaTitle.split(" em Palmas")[0],
  })),
  { href: "/pmoc-palmas", label: "PMOC para empresas" },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Marca */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo isDarkBg={false} className="h-10 w-auto" />
            <p className="text-slate-600 text-sm max-w-xs">{COMPANY_TAGLINE}</p>
          </div>

          {/* Serviços */}
          <nav aria-label="Serviços">
            <h2 className="text-[#0C2D6B] text-sm font-bold font-outfit mb-3">Serviços em Palmas</h2>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-600 text-sm hover:text-blue-700 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h2 className="text-[#0C2D6B] text-sm font-bold font-outfit mb-3">Contato</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href={PHONE_URL}
                  onClick={() => trackCtaClick("phone", "footer", PHONE_DISPLAY)}
                  className="hover:text-blue-700 transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>{COMPANY_LOCATION}</li>
              <li>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 transition-colors"
                >
                  Avaliações no Google
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 pt-6 border-t border-slate-200 text-slate-500 text-xs text-center">
          © {COMPANY_YEAR} {COMPANY_NAME}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
