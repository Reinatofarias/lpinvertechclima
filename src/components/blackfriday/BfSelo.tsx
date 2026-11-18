/**
 * Selo "BLACK FRIDAY" no estilo balão: fundo amarelo, balão preto inclinado
 * com "BLACK" e faixa branca com "FRIDAY". Feito em HTML/CSS (sem imagem),
 * então fica nítido em qualquer tela e leve.
 */
export default function BfSelo({ className = "", compacto = false }: { className?: string; compacto?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden bg-[#FACC15] ${compacto ? "px-6 pt-7 pb-9" : "px-6 sm:px-10 pt-9 pb-12"} ${className}`}
      aria-label="Black Friday Invertech Clima"
      role="img"
    >
      {/* linhas de velocidade */}
      <span className="absolute left-[38%] top-[9%] h-[3px] w-[45%] -rotate-[4deg] bg-white/80" />
      <span className="absolute left-[-5%] top-[30%] h-[3px] w-[18%] -rotate-[4deg] bg-white/80" />
      <span className="absolute right-[-4%] bottom-[40%] h-[3px] w-[16%] -rotate-[4deg] bg-white/80" />
      <span className="absolute left-[30%] bottom-[7%] h-[3px] w-[55%] -rotate-[4deg] bg-white/80" />

      {/* brilho em triângulos */}
      <span
        className="absolute right-[12%] top-[4%] h-10 w-7 bg-white"
        style={{ clipPath: "polygon(100% 0, 30% 100%, 0 70%)" }}
      />
      <span
        className="absolute right-[5%] top-[16%] h-6 w-10 bg-white"
        style={{ clipPath: "polygon(100% 0, 0 100%, 10% 45%)" }}
      />

      <div className="relative -rotate-[5deg] mx-auto w-fit">
        {/* balão preto */}
        <div className="relative bg-[#0B1220] px-5 sm:px-8 pt-3 pb-7 sm:pb-9">
          <p
            className={`font-outfit font-black italic text-white uppercase leading-none tracking-tight ${
              compacto ? "text-6xl" : "text-7xl sm:text-8xl lg:text-7xl xl:text-8xl"
            }`}
          >
            Black
          </p>
          {/* rabinho do balão */}
          <span
            className="absolute left-[12%] -bottom-6 sm:-bottom-8 h-7 sm:h-9 w-10 sm:w-14 bg-[#0B1220]"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />
        </div>
        {/* faixa branca */}
        <div className="absolute right-[-10%] bottom-[-28%] bg-white px-4 sm:px-6 py-1.5 shadow-[6px_6px_0_rgba(0,0,0,0.12)]">
          <p
            className={`font-outfit font-black italic text-[#0B1220] uppercase leading-none tracking-[0.12em] ${
              compacto ? "text-3xl" : "text-4xl sm:text-5xl lg:text-4xl xl:text-5xl"
            }`}
          >
            Friday
          </p>
        </div>
      </div>

      <p
        className={`relative text-center font-outfit font-extrabold uppercase tracking-[0.25em] text-[#0B1220] ${
          compacto ? "mt-12 text-xs" : "mt-14 sm:mt-16 text-sm"
        }`}
      >
        Invertech Clima · Palmas
      </p>
    </div>
  );
}
