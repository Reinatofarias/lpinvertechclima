"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";
import { trackEvent } from "@/lib/analytics";
import BfSelo from "@/components/blackfriday/BfSelo";
import { BF_INICIO, BF_FIM, BF_PERIODO } from "@/lib/blackFriday";

const STORAGE_KEY = "invertech_bf_promo_visto";

/**
 * Popup que chama para a página da Black Friday nas outras páginas do site.
 * Aparece uma vez por sessão, depois de 6 segundos ou ao rolar 35% da página,
 * só durante a campanha. Para ver antes do início: adicione ?bf=1 no endereço.
 * Não aparece na própria /black-friday (quem vem do anúncio já está lá) nem no PMOC.
 */
export default function BlackFridayPromo() {
  const pathname = usePathname();
  const { isOpen: leadModalAberto } = useLeadModal();
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    if (pathname.includes("black-friday") || pathname.includes("pmoc-palmas")) return;
    const agora = Date.now();
    const previa = new URLSearchParams(window.location.search).get("bf") === "1";
    const noPeriodo = agora >= new Date(BF_INICIO).getTime() && agora < new Date(BF_FIM).getTime();
    if (!previa && !noPeriodo) return;
    if (!previa && sessionStorage.getItem(STORAGE_KEY)) return;

    let disparou = false;
    const mostrar = () => {
      if (disparou) return;
      disparou = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setAberto(true);
      trackEvent("bf_promo_view", { page_path: pathname });
    };
    const timer = setTimeout(mostrar, 6000);
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && window.scrollY / total > 0.35) mostrar();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  if (!aberto || leadModalAberto) return null;

  const fechar = () => setAberto(false);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/60 p-3 sm:p-6"
      onClick={fechar}
      role="dialog"
      aria-modal="true"
      aria-label="Black Friday Invertech"
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-[#0B1220] text-white overflow-hidden border-2 border-[#FACC15]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={fechar}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-lg bg-[#0B1220] text-white hover:bg-black"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <BfSelo compacto />
        <div className="p-6 pb-5">
          <p className="text-lg font-bold font-outfit">Seu ar está sujo?</p>

          <div className="grid grid-cols-2 gap-2.5 mt-4">
            <div className="rounded-xl bg-[#FACC15] text-[#0B1220] p-3">
              <p className="text-3xl font-black font-outfit leading-none">-20%</p>
              <p className="text-xs font-semibold mt-1.5">Higienizações</p>
            </div>
            <div className="rounded-xl bg-white text-[#0B1220] p-3">
              <p className="text-3xl font-black font-outfit leading-none">-30%</p>
              <p className="text-xs font-semibold mt-1.5">Mão de obra de instalação</p>
            </div>
          </div>

          <p className="text-sm text-slate-300 mt-4">
            {BF_PERIODO ? `Só ${BF_PERIODO.replace(/^de /, "de ")}.` : "Somente nesta semana."} Higienização a partir de R$ 184,00 por aparelho.
          </p>

          <Link
            href="/black-friday"
            onClick={() => trackEvent("bf_promo_click", { page_path: pathname })}
            className="mt-5 flex w-full items-center justify-center rounded-xl bg-[#FACC15] px-6 py-3.5 font-bold text-[#0B1220] hover:bg-yellow-300 transition-colors"
          >
            Ver as ofertas
          </Link>
          <button onClick={fechar} className="mt-2 w-full py-2 text-sm text-slate-400 hover:text-white">
            Agora não
          </button>
        </div>
      </div>
    </div>
  );
}
