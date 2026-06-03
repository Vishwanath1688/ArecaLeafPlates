import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createLogger } from '../../utils/logger'

const logger = createLogger('Banner')

interface Props {
  message: string | null
  type?: 'error' | 'warn' | 'success'
  duration?: number   // ms — default 2500
  onDismiss: () => void
}

const STYLES = {
  error:   { bg: '#B91C1C', icon: '✕' },
  warn:    { bg: '#B45309', icon: '⚠' },
  success: { bg: '#1A3D2B', icon: '✓' },
}

/** Full-width top banner that auto-dismisses after `duration` ms */
export function Toast({ message, type = 'error', duration = 2500, onDismiss }: Props) {
  useEffect(() => {
    if (!message) return
    logger.debug(`Banner shown [${type}]: ${message}`)
    const t = setTimeout(() => {
      onDismiss()
      logger.debug('Banner auto-dismissed')
    }, duration)
    return () => clearTimeout(t)
  }, [message, duration, onDismiss, type])

  const style = STYLES[type]

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[99999] flex items-center justify-between gap-4 px-6 py-4 text-white font-sans text-sm font-medium shadow-lg"
          style={{ backgroundColor: style.bg }}
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ type: 'spring', stiffness: 400, damping: 35 }}
          role="alert"
        >
          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] bg-white/40"
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: duration / 1000, ease: 'linear' }}
          />

          <div className="flex items-center gap-3">
            <span className="text-base">{style.icon}</span>
            <span>{message}</span>
          </div>

          <button
            onClick={onDismiss}
            className="opacity-60 hover:opacity-100 transition-opacity text-lg leading-none shrink-0"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
