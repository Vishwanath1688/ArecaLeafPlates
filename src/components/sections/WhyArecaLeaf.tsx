import { motion } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'
import { Icon } from '../ui/Icon'

const FEATURES = [
  { icon: 'eco',           title: '100% Natural',           body: 'Made from naturally fallen areca palm leaf sheaths. No trees cut, no forests harmed — pure gift of nature.' },
  { icon: 'science',       title: 'Zero Chemicals',          body: 'Absolutely no dyes, adhesives, bleaches, or artificial coatings. What you get is exactly what nature made.' },
  { icon: 'recycling',     title: 'Fully Biodegradable',     body: 'Decomposes naturally in weeks. No microplastics, no landfill burden. The most honest disposable on earth.' },
  { icon: 'local_fire_department', title: 'Heat Resistant',  body: 'Handles hot curries, gravies, rice, and beverages with ease. Sturdy enough for any Indian meal.' },
  { icon: 'trending_up',   title: 'The Future of Tableware', body: 'EU & India plastic bans are driving explosive global demand. The $452M market is growing at 17% annually.' },
]

export function WhyArecaLeaf() {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 bg-purewhite">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <ScrollReveal className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#2D6A2D] mb-3">Why Choose Areca Leaf</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-charcoal">
            NATURE'S PERFECT PLATE
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {FEATURES.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <motion.div
                className="bg-cream rounded-2xl p-6 sm:p-7 lg:p-8 h-full border border-transparent hover:border-[#7FB069]/30 transition-colors"
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(26,61,43,0.12)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1A3D2B] rounded-xl flex items-center justify-center mb-4 sm:mb-5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon name={f.icon} size={22} className="text-[#7FB069]" />
                </motion.div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-charcoal mb-2 sm:mb-3 uppercase tracking-wide">{f.title}</h3>
                <p className="text-stone text-xs sm:text-sm leading-relaxed font-sans">{f.body}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
