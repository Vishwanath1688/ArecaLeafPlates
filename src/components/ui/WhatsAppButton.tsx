import { motion } from 'framer-motion'

interface Props {
  url: string
  label?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline'
  className?: string
}

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.08 21.5l4.438-1.332A9.947 9.947 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.078-1.117l-.292-.174-3.03.909.868-3.17-.19-.307A7.94 7.94 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
  </svg>
)

const sizes = {
  sm:  'px-4 py-2 text-sm gap-2',
  md:  'px-6 py-3 text-base gap-2',
  lg:  'px-8 py-4 text-lg gap-3',
}

export function WhatsAppButton({ url, label = 'Enquire on WhatsApp', size = 'md', variant = 'solid', className = '' }: Props) {
  const base = `inline-flex items-center justify-center font-sans font-semibold rounded-full transition-colors ${sizes[size]}`
  const styles = variant === 'solid'
    ? 'bg-[#2D6A2D] text-white hover:bg-[#1A3D2B]'
    : 'border-2 border-[#2D6A2D] text-[#2D6A2D] hover:bg-[#2D6A2D] hover:text-white'

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
      style={{ animation: 'pulseGlow 2s ease-in-out infinite' }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {WA_ICON}
      {label}
    </motion.a>
  )
}
