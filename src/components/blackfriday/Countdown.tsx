"use client";

import { useEffect, useState } from "react";

function partes(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    dias: Math.floor(s / 86400),
    horas: Math.floor((s % 86400) / 3600),
    min: Math.floor((s % 3600) / 60),
    seg: s % 60,
  };
}

/** Contagem até o fim da campanha. Some quando a data passa. */
export default function Countdown({ fim }: { fim: string }) {
  const alvo = new Date(fim).getTime();
  const [agora, setAgora] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setAgora(Date.now());
    const primeiro = setTimeout(tick, 0);
    const t = setInterval(tick, 1000);
    return () => {
      clearTimeout(primeiro);
      clearInterval(t);
    };
  }, []);

  if (agora === null || agora >= alvo) return null;
  const { dias, horas, min, seg } = partes(alvo - agora);
  const itens = [
    { v: dias, l: dias === 1 ? "dia" : "dias" },
    { v: horas, l: "horas" },
    { v: min, l: "min" },
    { v: seg, l: "seg" },
  ];

  return (
    <div className="flex items-center justify-center lg:justify-start gap-2" aria-label="Tempo até o fim da Black Friday">
      <span className="text-xs text-slate-400 mr-1 leading-tight text-right">Termina<br />em</span>
      {itens.map((i) => (
        <div key={i.l} className="min-w-[54px] rounded-lg bg-white text-[#0B1220] px-2 py-1.5 text-center">
          <p className="text-xl font-extrabold font-outfit tabular-nums leading-none">{String(i.v).padStart(2, "0")}</p>
          <p className="text-[10px] font-semibold uppercase text-slate-500 mt-1">{i.l}</p>
        </div>
      ))}
    </div>
  );
}
