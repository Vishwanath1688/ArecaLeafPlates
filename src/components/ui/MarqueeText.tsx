interface Props {
  text?: string
  speed?: number
  className?: string
}

const DEFAULT_TEXT = 'ECO-FRIENDLY · BIODEGRADABLE · MADE IN INDIA · DIRECT FROM FACTORY · 10 LAKH PLATES/MONTH · NO CHEMICALS · NO PLASTIC · PURE NATURE · '

export function MarqueeText({ text = DEFAULT_TEXT, speed = 30, className = '' }: Props) {
  const repeated = text + text

  return (
    <div className={`overflow-hidden whitespace-nowrap border-y border-[#1A3D2B]/20 py-3 bg-cream ${className}`}>
      <div
        className="inline-flex"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        <span className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-[#1A3D2B]/70 pr-0">
          {repeated}
        </span>
        <span className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-[#1A3D2B]/70 pr-0">
          {repeated}
        </span>
      </div>
    </div>
  )
}
