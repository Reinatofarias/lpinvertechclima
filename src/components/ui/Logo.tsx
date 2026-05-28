import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = "", width = 180, height = 50 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 360 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="INVERTECH CLIMA - Tecnologia que transforma. Conforto que você sente."
    >
      {/* INVER text - dark blue */}
      <text
        x="10"
        y="62"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="42"
        fill="#0C2D6B"
        letterSpacing="-0.5"
      >
        INVER
      </text>

      {/* TECH text - electric blue */}
      <text
        x="145"
        y="62"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="42"
        fill="#2B7DE9"
        letterSpacing="-0.5"
      >
        TECH
      </text>

      {/* CLIMA text - teal/green */}
      <text
        x="128"
        y="85"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="#10B981"
        letterSpacing="8"
      >
        CLIMA
      </text>

      {/* Left decorative line */}
      <line x1="110" y1="76" x2="125" y2="76" stroke="#2B7DE9" strokeWidth="2" strokeLinecap="round" />

      {/* Right decorative line */}
      <line x1="248" y1="76" x2="263" y2="76" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />

      {/* Left circle */}
      <circle cx="107" cy="76" r="3" fill="#2B7DE9" />

      {/* Right circle */}
      <circle cx="266" cy="76" r="3" fill="#10B981" />

      {/* Snowflake icon (simplified) */}
      <g transform="translate(268, 20)" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round">
        <line x1="12" y1="0" x2="12" y2="24" />
        <line x1="0" y1="12" x2="24" y2="12" />
        <line x1="3" y1="3" x2="21" y2="21" />
        <line x1="21" y1="3" x2="3" y2="21" />
        {/* Branches */}
        <line x1="12" y1="4" x2="8" y2="0" />
        <line x1="12" y1="4" x2="16" y2="0" />
        <line x1="12" y1="20" x2="8" y2="24" />
        <line x1="12" y1="20" x2="16" y2="24" />
      </g>

      {/* Circuit/tech accent */}
      <g transform="translate(300, 35)">
        <rect x="0" y="0" width="16" height="16" rx="3" fill="none" stroke="#10B981" strokeWidth="1.5" />
        <path d="M5 8L8 5L11 8L8 11Z" fill="#10B981" />
        {/* Connection lines */}
        <line x1="8" y1="16" x2="8" y2="22" stroke="#10B981" strokeWidth="1" />
        <line x1="16" y1="8" x2="22" y2="8" stroke="#10B981" strokeWidth="1" />
        <circle cx="8" cy="22" r="1.5" fill="#10B981" />
      </g>
    </svg>
  );
}
