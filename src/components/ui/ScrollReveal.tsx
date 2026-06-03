import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
  once?: boolean
}

export function ScrollReveal({ children, delay = 0, direction = 'up', className, once = true }: Props) {
  const initial = {
    opacity: 0,
    y: direction === 'up' ? 40 : 0,
    x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
    >
      {children}
    </motion.div>
  )
}
