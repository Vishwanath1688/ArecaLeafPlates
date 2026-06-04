import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'
import { Icon } from '../ui/Icon'
import { TESTIMONIALS } from '../../data/testimonials'

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = TESTIMONIALS.length

  const prev = () => setCurrent(i => (i - 1 + total) % total)
  const next = () => setCurrent(i => (i + 1) % total)

  const getVisible = (): number[] => {
    if (typeof window === 'undefined') return [current]
    const w = window.innerWidth
    if (w >= 1024) return [current, (current + 1) % total, (current + 2) % total]
    if (w >= 640)  return [current, (current + 1) % total]
    return [current]
  }

  const visible = getVisible()

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-purewhite overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#2D6A2D] mb-3">What Buyers Say</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal uppercase tracking-wide">
              Trusted Across India
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-3">
            <motion.button onClick={prev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#1A3D2B] flex items-center justify-center text-[#1A3D2B] hover:bg-[#1A3D2B] hover:text-white transition-colors"
              whileTap={{ scale: 0.92 }} aria-label="Previous testimonial"
            >
              <Icon name="arrow_back" size={20} />
            </motion.button>
            <span className="font-sans text-sm text-stone tabular-nums">
              {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <motion.button onClick={next}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1A3D2B] flex items-center justify-center text-white hover:bg-[#2D6A2D] transition-colors"
              whileTap={{ scale: 0.92 }} aria-label="Next testimonial"
            >
              <Icon name="arrow_forward" size={20} />
            </motion.button>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map(idx => {
              const t = TESTIMONIALS[idx]
              return (
                <motion.div key={`${idx}-${t.id}`}
                  className="bg-cream rounded-2xl p-6 sm:p-8"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(26,61,43,0.1)' }}
                >
                  <Icon name="format_quote" size={32} className="text-[#2D6A2D]/20 mb-4" />
                  <p className="text-charcoal text-sm sm:text-base leading-relaxed mb-5 font-sans">"{t.quote}"</p>
                  <div className="border-t border-[#2D6A2D]/10 pt-4">
                    <p className="font-display font-semibold text-charcoal text-sm sm:text-base">{t.name}</p>
                    <p className="font-sans text-xs text-[#2D6A2D] mt-0.5">{t.company}</p>
                    <p className="font-sans text-xs text-stone mt-0.5">{t.location} · {t.product}</p>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{ width: i === current ? 24 : 8, height: 8, backgroundColor: i === current ? '#1A3D2B' : '#1A3D2B33' }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
