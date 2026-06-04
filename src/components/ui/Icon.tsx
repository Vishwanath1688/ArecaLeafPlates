interface Props {
  name: string           // Material Symbol name e.g. "arrow_forward"
  size?: number          // px, default 24
  fill?: boolean         // filled variant
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700
  className?: string
}

/**
 * Material Symbols Outlined icon component.
 * Full icon list: https://fonts.google.com/icons
 */
export function Icon({ name, size = 24, fill = false, weight = 400, className = '' }: Props) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}
