import { motion } from 'framer-motion'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { ScrollReveal } from '../ui/ScrollReveal'
import { IMPACT_STATS } from '../../data/impactStats'

export function ImpactCounter() {
  return (
    <section className="bg-[#1A3D2B] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#7FB069] mb-3 text-center">
            Our Impact
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Every Single Month
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {IMPACT_STATS.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="font-display text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-[#7FB069] transition-colors">
                  <AnimatedCounter
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="font-sans text-sm font-semibold text-white/90 mb-1">
                  {stat.label}
                </p>
                <p className="font-sans text-xs text-white/50">
                  {stat.sublabel}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
