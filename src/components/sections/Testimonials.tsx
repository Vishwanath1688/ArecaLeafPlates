import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'
import { TESTIMONIALS } from '../../data/testimonials'

export function Testimonials() {
  const constraintsRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 md:py-28 bg-purewhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-12">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#2D6A2D] mb-3">
            What Buyers Say
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal">
            Trusted by Businesses Across India
          </h2>
        </ScrollReveal>

        {/* Drag carousel */}
        <div ref={constraintsRef} className="overflow-hidden">
          <motion.div
            className="flex gap-6 pb-4"
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.1}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                className="min-w-[320px] md:min-w-[420px] bg-cream rounded-2xl p-8 flex-shrink-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(26,61,43,0.1)' }}
              >
                <Quote size={32} className="text-[#2D6A2D]/20 mb-4" />
                <p className="text-charcoal leading-relaxed mb-6 font-sans">
                  "{t.quote}"
                </p>
                <div className="border-t border-[#2D6A2D]/10 pt-4">
                  <p className="font-sans font-semibold text-charcoal">{t.name}</p>
                  <p className="font-sans text-xs text-[#2D6A2D] mt-0.5">{t.company}</p>
                  <p className="font-sans text-xs text-stone mt-0.5">{t.location} · {t.product}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <p className="text-stone text-xs text-center mt-4 font-sans">← Drag to explore →</p>
      </div>
    </section>
  )
}
