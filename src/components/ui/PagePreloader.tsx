import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IMAGES = [
  '/images/hero/leaf1.jpg',
  '/images/products/round-plate.jpg',
  '/images/factory/factory1.jpg',
  '/images/products/square-plate.jpg',
  '/images/hero/leaf2.jpg',
  '/images/products/round-bowl.jpg',
]

export function PagePreloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)
  const [imgIndex, setImgIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    // Cycle images every 100ms
    const imgTimer = setInterval(() => {
      setImgIndex(i => (i + 1) % IMAGES.length)
    }, 120)

    // Count 0 → 100 over 700ms
    const countTimer = setInterval(() => {
      setCount(c => {
        if (c >= 100) { clearInterval(countTimer); return 100 }
        return c + 4
      })
    }, 28)

    // Finish after 1.2s
    const doneTimer = setTimeout(() => {
      clearInterval(imgTimer)
      setDone(true)
      setTimeout(onComplete, 600)
    }, 1200)

    return () => {
      clearInterval(imgTimer)
      clearInterval(countTimer)
      clearTimeout(doneTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Flashing image */}
          <motion.img
            key={imgIndex}
            src={IMAGES[imgIndex]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.05 }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0a0a0a]/70" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <p className="font-sans text-xs tracking-[0.3em] text-white/40 uppercase mb-4">
              Sri Kalleshwara Enterprises
            </p>
            <div className="font-display text-8xl font-black text-white tabular-nums">
              {String(count).padStart(3, '0')}
            </div>
            <div className="mt-4 w-48 h-px bg-white/20 mx-auto overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: count / 100 }}
                style={{ transformOrigin: 'left' }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
