"use client";

import { useEffect, useState } from "react";

/**
 * Barra fina, fixa logo abaixo do menu, com o tempo que falta para a Black Friday acabar.
 * Aparece quando a pessoa rola para além do topo (onde já tem o contador grande).
 */
export default function CountdownFixo({ fim }: { fim: string }) {
  const alvo = new Date(fim).getTime();
  const [agora, setAgora] = useState<number | null>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const tick = () => setAgora(Date.now());
    const primeiro = setTimeout(tick, 0);
    const t = setInterval(tick, 1000);
    const onScroll = () => setVisivel(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(primeiro);
      clearInterval(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (agora === null || agora >= alvo) return null;
  const s = Math.floor((alvo - agora) / 1000);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sg = s % 60;
  const dd = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className={`fixed top-16 md:top-20 inset-x-0 z-40 bg-[#FACC15] text-[#0B1220] border-b border-black/10 transition-transform duration-300 ${
        visivel ? "translate-y-0" : "-translate-y-[200%]"
      }`}
      aria-hidden={!visivel}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 sm:gap-3 text-sm">
        <span className="font-extrabold font-outfit uppercase tracking-wide">Black Friday termina em</span>
        <span className="font-black font-outfit tabular-nums text-base">
          {d}d {dd(h)}h {dd(m)}m {dd(sg)}s
        </span>
      </div>
    </div>
  );
}
