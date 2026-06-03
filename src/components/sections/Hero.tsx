import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { useRef } from 'react'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { WA } from '../../data/whatsappMessages'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=85'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const stagger: Variants = {
    animate: { transition: { staggerChildren: 0.15 } }
  }
  const wordVariant: Variants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <section id="hero" ref={ref} className="relative h-screen min-h-[700px] overflow-hidden flex items-center">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <img
          src={HERO_IMAGE}
          alt="Areca palm forest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f12]/70 via-[#0a1f12]/50 to-[#0a1f12]/80" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
        style={{ opacity }}
      >
        {/* Tag */}
        <motion.p
          className="font-sans text-xs tracking-[0.3em] text-white/60 uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Est. · Somalapura, Tumakuru · Karnataka, India
        </motion.p>

        {/* Big split headline */}
        <motion.div variants={stagger} initial="initial" animate="animate">
          <motion.div variants={wordVariant} className="overflow-hidden">
            <h1 className="font-display text-[5rem] sm:text-[8rem] md:text-[11rem] font-black leading-none text-white tracking-tight">
              PURE
            </h1>
          </motion.div>
          <motion.div variants={wordVariant} className="overflow-hidden ml-auto text-right -mt-4 md:-mt-8">
            <h1 className="font-display text-[5rem] sm:text-[8rem] md:text-[11rem] font-black leading-none text-[#7FB069] tracking-tight">
              NATURE
            </h1>
          </motion.div>
          <motion.div variants={wordVariant} className="overflow-hidden mt-2">
            <h2 className="font-sans text-xl sm:text-3xl md:text-4xl font-light text-white/80 tracking-[0.1em] uppercase">
              on your table
            </h2>
          </motion.div>
        </motion.div>

        {/* Sub-copy + CTA */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <p className="text-white/70 text-base md:text-lg max-w-sm leading-relaxed">
            India's finest areca leaf tableware — direct from factory.
            100% natural. 100% biodegradable. Bulk B2B supply.
          </p>
          <WhatsAppButton url={WA.hero} label="Enquire Now →" size="lg" className="shrink-0" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="font-sans text-[10px] tracking-[0.3em] text-white/40 uppercase">Scroll</span>
          <motion.div
            className="w-px h-12 bg-white/30"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
