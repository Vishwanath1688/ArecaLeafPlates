import { useEffect, useRef, useState } from 'react'
import { createLogger } from '../utils/logger'

const logger = createLogger('useScrollProgress')

export function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      logger.warn('Scroll progress ref not attached to any element')
      return
    }

    const onScroll = () => {
      try {
        const rect = el.getBoundingClientRect()
        const total = el.offsetHeight - window.innerHeight
        if (total <= 0) return // element shorter than viewport — skip
        const scrolled = -rect.top
        setProgress(Math.max(0, Math.min(1, scrolled / total)))
      } catch (err) {
        logger.error('Error calculating scroll progress', err)
      }
    }

    try {
      window.addEventListener('scroll', onScroll, { passive: true })
      logger.debug('Scroll progress listener attached')
    } catch (err) {
      logger.error('Failed to attach scroll listener', err)
    }

    return () => {
      try {
        window.removeEventListener('scroll', onScroll)
      } catch (err) {
        logger.error('Failed to remove scroll listener', err)
      }
    }
  }, [])

  return { ref, progress }
}
